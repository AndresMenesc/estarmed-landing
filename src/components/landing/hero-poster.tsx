/** Server-rendered LCP image with matching preload in layout. */
export function HeroPoster() {
  return (
    <img
      src="/video/poster-750.webp"
      srcSet="/video/poster-750.webp 750w, /video/poster.webp 1280w"
      sizes="(max-width: 768px) 100vw, 1024px"
      alt="Vista previa del recorrido EstarMed"
      width={1280}
      height={720}
      decoding="async"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
