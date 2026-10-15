/* ==========================================================
   FUSION CARS — DATOS EDITABLES
   Reemplazar los placeholders por datos reales del negocio.
   ========================================================== */

const CONFIG = {
  // [PENDIENTE] Número de WhatsApp real en formato 549 + característica + número (sin espacios ni +)
  whatsapp: "549XXXXXXXXXX",
  // [PENDIENTE] Ruta al logo real (PNG/SVG transparente). Vacío = logotipo tipográfico provisional
  logo: "",
  // [PENDIENTE] Vehículo protagonista del hero (PNG/WebP con transparencia real)
  heroImage: "",
  // [PENDIENTE] Datos de contacto reales
  instagram: "",          // ej: "fusioncars"
  direccion: "",          // ej: "Calle 00 nº 0000, Ciudad"
  mapsUrl: "",            // link de Google Maps
  horarios: "",           // ej: "Lun a Vie 9–18 · Sáb 9–13"
};

/* ----------------------------------------------------------
   STOCK
   Cada vehículo:
   tipo     → categoría para filtros (Sedán, Hatchback, SUV, Pickup…)
   imagen   → "img/archivo.webp" con fondo transparente
   anio, km, precio → null si no se quiere mostrar
   moneda   → "USD" o "ARS"
   placeholder: true → muestra la etiqueta "Ejemplo" (borrar al cargar stock real)
   ---------------------------------------------------------- */

const VEHICLES = [
  { id: 1, tipo: "Sedán",     marca: "Marca", modelo: "Vehículo de ejemplo 01", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
  { id: 2, tipo: "SUV",       marca: "Marca", modelo: "Vehículo de ejemplo 02", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
  { id: 3, tipo: "Hatchback", marca: "Marca", modelo: "Vehículo de ejemplo 03", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
  { id: 4, tipo: "Pickup",    marca: "Marca", modelo: "Vehículo de ejemplo 04", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
  { id: 5, tipo: "Sedán",     marca: "Marca", modelo: "Vehículo de ejemplo 05", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
  { id: 6, tipo: "SUV",       marca: "Marca", modelo: "Vehículo de ejemplo 06", anio: null, km: null, precio: null, moneda: "USD", imagen: "", placeholder: true },
];
