/**
 * Records /video-scenes to MP4 via Playwright screencast + ffmpeg.
 * Usage: node scripts/record-walkthrough.mjs
 */
import { chromium } from "playwright-core";
import { mkdir, writeFile, readFile, unlink } from "fs/promises";
import { spawn } from "child_process";
import path from "path";

const BASE = process.env.DEMO_URL || "http://127.0.0.1:43127";
const OUT_DIR =
  "/cursor/stores/bc-9fa8f88f-468f-4c55-a7bb-f3414904654f/media/video";
const PUBLIC = "/workspace/public/video";
const TOTAL_MS = 42000; // ~42s of scenes

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit" });
    p.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exit ${code}`))
    );
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(PUBLIC, { recursive: true });
  await mkdir("/tmp/estarmed-frames", { recursive: true });

  const browser = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--autoplay-policy=no-user-gesture-required"],
  });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  });
  await page.goto(`${BASE}/video-scenes`, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-ready="1"]');

  // Capture poster first frame
  await page.screenshot({
    path: path.join(OUT_DIR, "poster.png"),
    type: "png",
  });
  await page.screenshot({
    path: path.join(PUBLIC, "poster.png"),
    type: "png",
  });

  // Frame dump at 12 fps for manageable size
  const fps = 12;
  const frames = Math.floor((TOTAL_MS / 1000) * fps);
  for (let i = 0; i < frames; i++) {
    const file = `/tmp/estarmed-frames/frame-${String(i).padStart(5, "0")}.jpg`;
    await page.screenshot({ path: file, type: "jpeg", quality: 82 });
    if (i % 24 === 0) console.log(`frame ${i}/${frames}`);
    await page.waitForTimeout(1000 / fps);
  }
  await browser.close();

  const mp4Out = path.join(OUT_DIR, "estarmed-platform-walkthrough.mp4");
  const mp4Public = path.join(PUBLIC, "estarmed-platform-walkthrough.mp4");
  const heroOut = path.join(PUBLIC, "estarmed-hero-loop.mp4");

  await run("ffmpeg", [
    "-y",
    "-framerate",
    String(fps),
    "-i",
    "/tmp/estarmed-frames/frame-%05d.jpg",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-profile:v",
    "main",
    "-crf",
    "28",
    "-movflags",
    "+faststart",
    "-an",
    mp4Out,
  ]);

  // Copy full video to public
  await run("cp", [mp4Out, mp4Public]);

  // Short hero loop: first ~12s
  await run("ffmpeg", [
    "-y",
    "-i",
    mp4Out,
    "-t",
    "12",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-crf",
    "30",
    "-movflags",
    "+faststart",
    "-an",
    heroOut,
  ]);

  // Also copy poster naming
  await run("cp", [
    path.join(OUT_DIR, "poster.png"),
    path.join(OUT_DIR, "poster.png"),
  ]);

  const { size } = await import("fs").then((fs) =>
    fs.promises.stat(mp4Out)
  );
  console.log("wrote", mp4Out, "bytes", size);
  console.log("hero", heroOut);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
