import { Gear, Box, Coins, Tools, Area } from '@/components/icons';
import { VerificationType } from '@/store/price';

interface Area {
  name: string;
  subareas: string[];
}

export const areas: Area[] = [
  {
    name: 'Capital Federal',
    subareas: [
      'Agronomía',
      'Barracas',
      'Belgrano',
      'Cohglan',
      'Colegiales',
      'Las Cañitas',
      'Liniers',
      'Mataderos',
      'Monte Castro',
      'Núñez',
      'Palermo',
      'Parque Avellaneda',
      'Parque Chacabuco',
      'Paternal',
      'Puerto Madero',
      'Saavedra',
      'Versalles',
      'Villa Crespo',
      'Villa del Parque',
      'Villa Devoto',
      'Villa Pueyredon',
      'Villa Urquiza',
      'Villa Santa Rita',
      'Villa Urquiza',
      'Villa Ortúzar',
    ],
  },
  {
    name: 'Zona Norte',
    subareas: [
      'Acassuso',
      'Boulogne',
      'Del Viso',
      'Don Torcuato',
      'Florida',
      'Florida Oeste',
      'Ing. Maschwitz',
      'La Lucila',
      'Martínez',
      'Munro',
      'Nordelta',
      'Olivos',
      'Pilar',
      'San Fernando',
      'San Isidro',
      'Tigre',
      'Tortuguitas',
      'Vicente López',
      'Victoria',
      'Villa Adelina',
      'Villa Martelli',
    ],
  },
  {
    name: 'Zona Oeste',
    subareas: [
      'Ciudadela',
      'El Palomar',
      'Haedo',
      'Lomas del Mirador',
      'Ramos Mejía',
      'Saenz Peña',
      'Villa Raffo',
      'Villa Sarmiento',
    ],
  },
];

export const years = Array.from(
  { length: new Date().getFullYear() - 1989 },
  (_, index) => (new Date().getFullYear() - index).toString()
);

export interface WhyUs {
  name: string;
  href: string;
}

export const whyUs: WhyUs[] = [
  { name: 'Areas de cobertura', href: '/areas-de-cobertura' },
  { name: 'Precios', href: '/cotizar' },
  { name: 'Seguridad', href: '/#seguridad' },
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Tecnología utilizada', href: '/#tecnologías' },
  { name: 'Cómo funciona', href: '/#como-funciona' },
  { name: 'Qué incluye', href: '/#que-incluye' },
  { name: 'Puntos de verificación', href: '/#puntos-de-verificación' },
];

export interface FooterService {
  name: string;
  href: string;
}

export const footerServices: FooterService[] = [
  { name: 'Cerrajería', href: '/servicios' },
  { name: 'Mecánica', href: '/servicios' },
  { name: 'Electrónica', href: '/servicios' },
  { name: 'Escaneo', href: '/servicios' },
];

export interface Services {
  name: string;
  src: string;
  description: string[];
}

export const services = [
  {
    name: 'Cerrajería',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997994/cerrajeria_cutnn2.png',
    description: [
      'Cerrajería',
      'Llaves Codificadas',
      'Navaja',
      'Telemandos',
      'Simples',
    ],
  },
  {
    name: 'Mecánica',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998088/mecanica_xudrx0.png',
    description: [
      'Mecánica completa',
      'Embragues',
      'Tren delantero y trasero',
      'Dirección',
      'Frenos',
      'Inyección nafta / diesel',
      'Encendido',
      'Muchos más',
    ],
  },
  {
    name: 'Electrónica',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998017/electricity_zgih9p.png',
    description: [
      'Reparación de tableros',
      'ECU (Desinmo)',
      'BSI',
      'Airbags',
      'Comandos Alzacistales',
      'Muchos más',
    ],
  },
  {
    name: 'Escaneo',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998181/scan_lveock.png',
    description: ['Escaneo', 'Diagnostico', 'Eliminación de averías'],
  },
];

export interface MenuItem {
  title: string;
  href: string;
  icon: any;
}

export const menuItems: MenuItem[] = [
  {
    title: '¿Cómo funciona?',
    href: '/#como-funciona',
    icon: Gear,
  },
  {
    title: '¿Qué incluye?',
    href: '/#que-incluye',
    icon: Box,
  },
  {
    title: 'Otros servicios',
    href: '/servicios',
    icon: Tools,
  },
  {
    title: 'Zonas de cobertura',
    href: '/areas-de-cobertura',
    icon: Area,
  },
  {
    title: 'Solicitar cotización',
    href: '/cotizar',
    icon: Coins,
  },
];

export interface Item {
  name: string;
  src: string;
  alt: string;
  description: string;
}

export const items: Item[] = [
  {
    name: 'Datos del vehículo',
    description:
      'Marca, modelo, versión, origen, nro. de motor y chasis, radicación, inscripción inicial, tipo, etc',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998084/maintenance-black_oh5j7m.svg',
    alt: 'maintenance',
  },
  {
    name: 'Titulares historicos',
    description:
      'Nombres, appellidos, DNI, direcciones desde 0km, porcentajes de titularidad, etc',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998125/people_ypipo8.svg',
    alt: 'people',
  },
  {
    name: 'Inhibicion del dueño',
    description:
      'Medida dictada por un juez a pedido de un acreedor que impide la venta del vehículo',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997979/car-file_ic1jrs.svg',
    alt: 'car-file',
  },
  {
    name: 'Deudas de infracciones',
    description:
      'Multas vigentes y adeudadas en todo el territorio argentino registradas a la fecha',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998048/license-plate_ktzfbe.png',
    alt: 'license-plate',
  },
  {
    name: 'Denuncias de compra',
    description:
      'Legajo con denuncias de transferencias no realizadas por los antiguos titulares',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997985/car-key_hs94gh.svg',
    alt: 'car-key',
  },
  {
    name: 'Problemas legales',
    description:
      'Medidas cautelares inscriptas en el legajo que impidan una correcta transferencia',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998041/judge_pkgr5b.svg',
    alt: 'judge',
  },
  {
    name: 'Robo o secuestro',
    description:
      'Registros de denuncia por robo o secuestro vigente de la PFA y/o gendarmería',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998042/ladron_zfy9wi.png',
    alt: 'thief',
  },
  {
    name: 'Prohibicion circular',
    description:
      'Algún oficio de prohibición vigente que impida el uso o la circulación en la vía pública',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998150/prohibited_oceoh0.png',
    alt: 'prohibited',
  },
  {
    name: 'Historico de titulares',
    description:
      'Algún oficio de prohibición vigente que impida el uso o la circulación en la vía pública',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713997980/car-history_dfxmar.svg',
    alt: 'history',
  },
  {
    name: 'Prendas y embargos',
    description:
      'Cancelaciones de créditos y juicios pendientes o vigentes con sus respectivos importes',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998010/debt_wkasev.svg',
    alt: 'debt',
  },
  {
    name: 'Sucesion en tramite',
    description:
      'Documentación jurídica de juicios vigentes por sucesión o herencia que impidan la transacción',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998034/in-process_jaoduu.svg',
    alt: 'in-process',
  },
  {
    name: 'Leasing o usufructo',
    description:
      'Contratos vigentes que afecten la tenencia y posesión del bien o mismo su cancelación',
    src: 'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1713998021/exchange_fqi4vq.svg',
    alt: 'exchange',
  },
];

export interface Report {
  name: string;
  description: string;
  subtitle: string;
  services: string[];
  numberOfPoints: number;
  color: string;
  buttonColor: string;
  hoverColor: string;
  activeColor: string;
  extra?: string;
  link: string;
}

export const reports: Report[] = [
  {
    name: VerificationType.VDA,
    description: 'Verificación Dominio Automotor',
    subtitle: 'Informe de Dominio:',
    services: [
      'Datos del vehículo y titulares',
      'Afectaciones para transferir',
      'Robo o pedido de secuestro',
      'Número de chasis y motor',
      'Prendas y/o embargos',
      'Prohibiciones para circular',
      'Medidas cautelares u oficios',
      'Inhibición para vender',
      'Usufructo o leasing activo',
      'Deudas de patente y multas',
      'Cédulas autorizadas a conducir',
    ],
    color: 'bg-blue-200',
    buttonColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-700',
    activeColor: 'active:bg-blue-800',
    numberOfPoints: 200,
    link: '/informe-dominio',
  },
  {
    name: VerificationType.VMA,
    description: 'Verificación Mecánica Automotor',
    subtitle: 'Informe de Mecánica:',
    services: [
      'Recomendaciones técnicas',
      'Fallas Airbags, ABS, ECU, etc',
      'Detección de kilómetros reales',
      'Estructura del chasis y carrocería',
      'Mantenimiento a realizar',
      'Choques, granizo y reparaciones',
      'Anomalías mecánicas actuales',
      'Posibles vicios ocultos',
      'Historial de las averías grabadas',
      'Escaneo computarizado',
      'Observaciones de la marca',
    ],
    color: 'bg-green-200',
    buttonColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-700',
    activeColor: 'active:bg-green-800',
    numberOfPoints: 350,
    link: '/agendar-visita',
  },
  {
    name: VerificationType.VPA,
    description: 'Verificación Precompra Automotor',
    subtitle: 'Todo incluído',
    extra: 'Verificación más completa:',
    services: [
      'Informe de Dominio Automotor',
      'Informe de Mecánica Automotor',
      'Recomendaciones para transferir',
    ],
    color: 'bg-purple-200',
    buttonColor: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-700',
    activeColor: 'active:bg-purple-800',
    numberOfPoints: 550,
    link: '/agendar-visita',
  },
];
