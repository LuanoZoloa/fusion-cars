/* ==========================================================
   FUSION CARS — DATOS EDITABLES
   ========================================================== */

const CONFIG = {
  whatsapp: "5492262369862",
  logo: "img/logo-fusion-cars.png",
  heroImage: "img/honda-crv-hero.webp",
  instagram: "fusioncars.automotores",
  direccion: "",          // [PENDIENTE] ej: "Calle 00 nº 0000, Ciudad"
  mapsUrl: "",            // link de Google Maps
  horarios: "Con cita previa",
};

/* ----------------------------------------------------------
   STOCK
   tipo     → categoría para filtros
   imagen   → "img/archivo.webp" con fondo transparente
   anio, km, precio → null si no se quiere mostrar
   moneda   → "USD" o "ARS"
   nota     → detalle corto opcional (ej: "VTV al día")
   ---------------------------------------------------------- */

const VEHICLES = [
  { id: 1,  tipo: "SUV",       marca: "Honda",      modelo: "CR-V EX",                  anio: 2006, km: 250000, precio: 10000,    moneda: "USD", nota: "",               imagen: "img/honda-crv.webp" },
  { id: 2,  tipo: "SUV",       marca: "Renault",    modelo: "Duster Privilege 2.0 4x4", anio: 2017, km: 160000, precio: null,     moneda: "USD", nota: "Full",           imagen: "img/renault-duster.webp" },
  { id: 3,  tipo: "Sedán",     marca: "Citroën",    modelo: "C4 Lounge 2.0 16v",        anio: 2014, km: 159000, precio: null,     moneda: "USD", nota: "",               imagen: "img/citroen-c4-lounge.webp" },
  { id: 4,  tipo: "Hatchback", marca: "Ford",       modelo: "Fiesta Kinetic SE Plus",   anio: 2014, km: 139000, precio: 13000000, moneda: "ARS", nota: "",               imagen: "img/ford-fiesta.webp" },
  { id: 5,  tipo: "SUV",       marca: "Ford",       modelo: "EcoSport",                 anio: 2011, km: 180000, precio: 8500,     moneda: "USD", nota: "",               imagen: "img/ford-ecosport.webp" },
  { id: 6,  tipo: "Hatchback", marca: "Volkswagen", modelo: "Gol Trend",                anio: 2011, km: 140000, precio: 10000000, moneda: "ARS", nota: "",               imagen: "img/vw-gol-trend.webp" },
  { id: 7,  tipo: "Hatchback", marca: "Suzuki",     modelo: "Fun",                      anio: 2010, km: 150000, precio: 9000000,  moneda: "ARS", nota: "",               imagen: "img/suzuki-fun.webp" },
  { id: 8,  tipo: "Sedán",     marca: "Ford",       modelo: "Focus Exe",                anio: 2008, km: 246877, precio: 8000000,  moneda: "ARS", nota: "",               imagen: "img/ford-focus.webp" },
  { id: 9,  tipo: "Sedán",     marca: "Chevrolet",  modelo: "Astra 2.0 GNC",            anio: 2008, km: null,   precio: 6500000,  moneda: "ARS", nota: "",               imagen: "img/chevrolet-astra.webp" },
  { id: 10, tipo: "Sedán",     marca: "Fiat",       modelo: "Siena ELX TD",             anio: 2003, km: null,   precio: 4800000,  moneda: "ARS", nota: "VTV al día",     imagen: "img/fiat-siena.webp" },
];
