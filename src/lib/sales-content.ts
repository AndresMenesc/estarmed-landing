/** Balanced EstarMed sales copy — ~900–1,200 visible words. Manual only. */

export const CONTACT_EMAIL = "contacto@estarter.co";

export const VISIT_STATUS = [
  { key: "programada", label: "Programada", color: "#94a3b8" },
  { key: "confirmada", label: "Confirmada", color: "#007DFF" },
  { key: "en_progreso", label: "En progreso", color: "#eab308" },
  { key: "completada", label: "Completada", color: "#10b981" },
  { key: "cancelada", label: "Cancelada", color: "#ef4444" },
] as const;

export const HERO = {
  eyebrow: "Comfama · Estárter",
  headline: "La logística domiciliaria, en una sola pantalla.",
  subhead:
    "Coordine profesionales, conductores, sedes CIS y pacientes — desde la agenda del mes hasta la liquidación de cada ruta.",
  primaryCta: "Agendar demo",
  secondaryCta: "Ver cómo funciona",
};

export const RESULTS = [
  { value: "+138 %", numeric: 138, suffix: " %", prefix: "+", label: "Visitas al mes" },
  { value: "97 %", numeric: 97, suffix: " %", prefix: "", label: "Registros de campo" },
  { value: "+48 %", numeric: 48, suffix: " %", prefix: "+", label: "Pacientes activos" },
  { value: "Mismo", numeric: null, suffix: "", prefix: "", label: "Equipo de coordinación" },
] as const;

export const RESULTS_FOOTNOTE =
  "Nov 2025 a jul 2026 (414 → 987 visitas/mes; 27 % → 97 % registros completos). En ese periodo también aumentaron conductores y profesionales. Parte del crecimiento vino de decisiones comerciales del cliente: la plataforma lo absorbió, no lo generó sola. No hay ROI medido.";

export const RESULTS_SUBTITLE = "Nov 2025 – jul 2026, operación Comfama.";

export const CLIENTS_SUBTITLE =
  "Operan con EstarMed o son aliados de la plataforma.";

/** Logos shown in Clientes y alianzas (paths under /public). */
export const CLIENTS = [
  {
    id: "u-ventures",
    name: "U Ventures",
    src: "/brand/clients/u-ventures.png",
    darkChip: true,
  },
  {
    id: "estarter",
    name: "estarter.co",
    src: "/brand/clients/estarter.png",
    darkChip: false,
  },
  {
    id: "comfama",
    name: "Comfama",
    src: "/brand/clients/comfama.png",
    darkChip: false,
  },
  {
    id: "asisfarma",
    name: "AsisFarma",
    src: "/brand/clients/asisfarma.png",
    darkChip: false,
  },
  {
    id: "echavarria",
    name: "Laboratorio Médico Echavarría",
    src: "/brand/clients/echavarria.png",
    darkChip: false,
  },
  {
    id: "eafit",
    name: "Universidad EAFIT",
    src: "/brand/clients/eafit.png",
    darkChip: false,
  },
] as const;

/** Paired problem → fix (product modules). */
export const COMPARISONS = [
  {
    id: "excel",
    before: "Excel y planillas",
    after: "Agenda y capacidad por CIS",
  },
  {
    id: "whatsapp",
    before: "WhatsApp y llamadas sueltas",
    after: "Chat en plataforma + estados",
  },
  {
    id: "geo",
    before: "Dirección sin verificar",
    after: "Georreferencia (Comuna)",
  },
  {
    id: "ruta",
    before: "¿En qué va la ruta?",
    after: "Ruta Diaria + mapa en vivo",
  },
  {
    id: "billing",
    before: "Facturación a mano",
    after: "Liquidación por tarifa",
  },
] as const;

export const STAGES = [
  {
    id: "planear",
    verb: "Planear",
    line: "Agendas, pacientes, capacidad y fechas.",
    caps: [
      "Planeación mensual por CIS",
      "Importar Excel del día",
      "Cola de georreferenciación",
    ],
  },
  {
    id: "despachar",
    verb: "Despachar",
    line: "Equipo, placa, CIS y hora de inicio.",
    caps: [
      "Programación de Rutas",
      "Equipo en San Ignacio",
      "Feed hacia Estárter",
    ],
  },
  {
    id: "seguir",
    verb: "Seguir",
    line: "Visitas, GPS y chat en campo.",
    caps: [
      "Ruta Diaria y Vista Conductor",
      "Checkpoints hasta foto de cierre",
      "Mapa GPS en vivo",
    ],
  },
  {
    id: "cerrar",
    verb: "Cerrar",
    line: "Soportes, liquidación y exportes.",
    caps: [
      "Foto de cierre obligatoria",
      "Paquetes por zona del CIS",
      "Reporte diario a las 6 p. m.",
    ],
  },
] as const;

export const PRODUCT_TABS = [
  {
    id: "programacion",
    label: "Programación",
    title: "Programación y Alistamiento",
    caption: "Rutas por fecha · checklist del día",
    bullets: [
      "Conductor, placa, profesional, madrina y CIS",
      "Planeación mensual y cupo 9–12 / día",
      "Alistamiento: geo, placa, hora y orden",
      "Exportar visitas en PDF o CSV",
    ],
    more: "Al completar una ruta, las visitas sin hacer se cancelan solas. Cambiar conductor a mitad de ruta reparte la facturación por tramos.",
  },
  {
    id: "ruta",
    label: "Ruta Diaria",
    title: "Ruta Diaria",
    caption: "Centro operativo del día",
    bullets: [
      "Resumen de todas las rutas de la fecha",
      "Checkpoints: San Ignacio, CIS, médico, visitas",
      "Optimizar orden por calles",
      "Grupos de visitas en la misma dirección",
    ],
    more: "Las visitas se ordenan siempre por secuencia, nunca por hora. Pastillas «Geo ref» marcan direcciones pendientes.",
  },
  {
    id: "conductor",
    label: "Vista Conductor",
    title: "Vista Conductor",
    caption: "Una acción a la vez en el celular",
    bullets: [
      "Solo visitas confirmadas, en secuencia",
      "Checkpoints hasta foto de cierre",
      "Maps / Waze y corregir dirección",
      "Chat con Admin y Madrina",
    ],
    more: "No hay llegada automática por GPS en la web: el conductor marca llegada a mano. La foto de cierre es obligatoria.",
  },
  {
    id: "geo",
    label: "Georreferencia",
    title: "Georreferenciación",
    caption: "Cola humana · consenso de proveedores",
    bullets: [
      "Prioridad: mañana → hoy → resto",
      "Memoria de direcciones verificadas",
      "Confirmar, corregir o reprocesar",
      "Se dice Comuna, no municipio",
    ],
    more: "Validación de área: solo coordenadas de la región de operación. Coordenadas temporales vuelven a la cola.",
  },
  {
    id: "facturacion",
    label: "Facturación",
    title: "Facturación",
    caption: "Liquidación operativa — no DIAN",
    bullets: [
      "Inicio = hora programada",
      "Fin = devolución de equipo o bolso",
      "Paquetes por zona del CIS",
      "Mapa de zonas tarifarias",
    ],
    more: "No emite factura electrónica DIAN. Algunas cuentas Comfama tienen Facturación oculta. Cancelada facturable = mínimo 4 h.",
  },
] as const;

export const ROLES = [
  {
    id: "admin",
    label: "Coordinación",
    caption: "Administrador",
    bullets: [
      "Programa, edita y elimina rutas",
      "Factura, automatiza y audita",
      "Asistente IA y diagnóstico del feed",
    ],
  },
  {
    id: "madrina",
    label: "Madrina",
    caption: "Coordinadora Comfama",
    bullets: [
      "Solo sus CIS asignados",
      "Estados de visita, mapa y chat",
      "No crea ni edita rutas",
    ],
  },
  {
    id: "conductor",
    label: "Conductor",
    caption: "Vista /conductor",
    bullets: [
      "Ruta del día en el celular",
      "Checkpoints y foto de cierre",
      "Ingreso con usuario, placa o enlace",
    ],
  },
  {
    id: "lectura",
    label: "Lectura",
    caption: "Viewer Comfama",
    bullets: [
      "Ve toda la plataforma",
      "Escrituras bloqueadas",
      "Sin Automatizaciones ni Asistente IA",
    ],
  },
] as const;

export const FEATURES = [
  { title: "Optimización de ruta", line: "Compara alternativas por calles." },
  { title: "Mapa en vivo", line: "Vehículos y recorrido del día." },
  { title: "Historial GPS", line: "Reproduce el trazo por placa." },
  { title: "Chats", line: "Admin, madrina y conductor." },
  { title: "Push en vivo", line: "Llegadas, salidas y chat." },
  { title: "Reportes y analítica", line: "Diario a las 6 p. m. y paneles." },
  { title: "Logs", line: "Actividad que no se borra." },
  { title: "Exportes", line: "PDF, CSV y Excel operativos." },
  { title: "Gestión de Personas", line: "Pacientes, flota, CIS e importación." },
] as const;

export const INTEGRATION = {
  eyebrow: "Automatizaciones e integraciones",
  title: "Reglas que trabajan solas. Conexiones que cierran el ciclo.",
  lead: "Configure avisos y flujos de la operación, y conecte flota, mapas, datos y reportes alrededor de EstarMed.",
  automations: [
    {
      title: "Alertas y notificaciones",
      line: "Avisos cuando una ruta se atrasa, una visita queda pendiente o hay una novedad.",
    },
    {
      title: "Reglas cuando → si → entonces",
      line: "Dispare acciones en lenguaje claro: si pasa X en la ruta, haga Y.",
    },
    {
      title: "Recordatorios y confirmaciones",
      line: "Recuerde visitas y confirme pendientes sin seguirlas a mano.",
    },
    {
      title: "Reportes programados",
      line: "Resúmenes operativos en el horario que elija su equipo.",
    },
    {
      title: "Asistente IA",
      line: "Consulte qué falta por cerrar y el estado del día en lenguaje natural.",
    },
  ],
  integrations: [
    {
      title: "Flota y GPS",
      line: "Estárter Core como aliado de flota, placas y ubicación.",
    },
    {
      title: "Mapas y georreferenciación",
      line: "Direcciones validadas y mapa en vivo de la operación.",
    },
    {
      title: "Excel y CSV",
      line: "Importe pacientes y rutas; exporte visitas y liquidación.",
    },
    {
      title: "API y webhooks",
      line: "Conecta vía API y webhooks con sus sistemas.",
    },
    {
      title: "Reportes y BI",
      line: "Exporta a sus herramientas de BI y paneles internos.",
    },
    {
      title: "Mensajería y notificaciones",
      line: "Chat operativo, push y correo para la coordinación.",
    },
    {
      title: "Acceso y roles",
      line: "Admin, madrina, lectura y conductor con permisos claros.",
    },
  ],
} as const;

export const SCALE = [
  { value: "6.171", label: "Pacientes" },
  { value: "57", label: "Sedes CIS" },
  { value: "~110", label: "Rutas / mes" },
  { value: "225", label: "Profesionales" },
  { value: "56", label: "Conductores" },
  { value: "48", label: "Vehículos" },
] as const;

export const SERVICES = [
  "Visita médica",
  "Vacunación",
  "Lactancia",
  "CIAMI",
  "Electrocardiograma",
] as const;

export const FAQ = [
  {
    q: "¿Hay prueba gratis?",
    a: "No. Se ofrece demo y piloto con implementación. Las cuentas las crea un administrador.",
  },
  {
    q: "¿Emite factura DIAN?",
    a: "No. Hace liquidación operativa y exportes. No emite factura electrónica DIAN.",
  },
  {
    q: "¿Cómo entra un conductor?",
    a: "Con usuario y contraseña, con la placa del vehículo (para encontrar la cuenta) o con un enlace personal.",
  },
  {
    q: "¿Dónde se recoge el equipo?",
    a: "Siempre en San Ignacio. Orden: San Ignacio → CIS inicio → visitas → CIS fin → devolución.",
  },
  {
    q: "¿Importa desde Excel?",
    a: "Sí: pacientes y rutas del día, con resolución de conflictos de dirección. Una dirección ya aprobada no vuelve a la cola salvo cambio.",
  },
  {
    q: "¿WhatsApp a pacientes?",
    a: "Todavía no. Está en estudio; no está conectado en la operación actual.",
  },
  {
    q: "¿Las madrinas pueden editar rutas?",
    a: "No. Pueden ver, cambiar estados de visita, usar el mapa en vivo y chatear.",
  },
] as const;
