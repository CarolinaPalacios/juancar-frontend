import { Gear, Box, Coins, Tools, Area } from '../components/icons'

interface Area {
  name: string
  subareas: string[]
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
  {
    name: 'Zona Sur',
    subareas: ['Avellaneda', 'Lanús Oeste'],
  },
]

export const years = Array.from(
  { length: new Date().getFullYear() - 1989 },
  (_, index) => (new Date().getFullYear() - index).toString()
)

export interface WhyUs {
  name: string
  href: string
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
]

export interface FooterService {
  name: string
  href: string
}

export const footerServices: FooterService[] = [
  { name: 'Cerrajería', href: '/servicios' },
  { name: 'Mecánica', href: '/servicios' },
  { name: 'Electrónica', href: '/servicios' },
  { name: 'Escaneo', href: '/servicios' },
]

export interface Services {
  name: string
  src: string
  description: string[]
}

export const services = [
  {
    name: 'Cerrajería',
    src: '/src/assets/cerrajeria.png',
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
    src: '/src/assets/mecanica.png',
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
    src: '/src/assets/electricity.png',
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
    src: '/src/assets/scan.png',
    description: ['Escaneo', 'Diagnostico', 'Eliminación de averías'],
  },
]

export interface MenuItem {
  title: string
  href: string
  icon: any
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
]

export interface Item {
  name: string
  src: string
  alt: string
  description: string
}

export const items: Item[] = [
  {
    name: 'Datos del vehículo',
    description:
      'Marca, modelo, versión, origen, nro. de motor y chasis, radicación, inscripción inicial, tipo, etc',
    src: '/src/assets/maintenance-black.svg',
    alt: 'maintenance',
  },
  {
    name: 'Titulares historicos',
    description:
      'Nombres, appellidos, DNI, direcciones desde 0km, porcentajes de titularidad, etc',
    src: '/src/assets/people.svg',
    alt: 'people',
  },
  {
    name: 'Inhibicion del dueño',
    description:
      'Medida dictada por un juez a pedido de un acreedor que impide la venta del vehículo',
    src: '/src/assets/car-file.svg',
    alt: 'car-file',
  },
  {
    name: 'Deudas de infracciones',
    description:
      'Multas vigentes y adeudadas en todo el territorio argentino registradas a la fecha',
    src: '/src/assets/license-plate.png',
    alt: 'license-plate',
  },
  {
    name: 'Denuncias de compra',
    description:
      'Legajo con denuncias de transferencias no realizadas por los antiguos titulares',
    src: '/src/assets/car-key.svg',
    alt: 'car-key',
  },
  {
    name: 'Problemas legales',
    description:
      'Medidas cautelares inscriptas en el legajo que impidan una correcta transferencia',
    src: '/src/assets/judge.svg',
    alt: 'judge',
  },
  {
    name: 'Robo o secuestro',
    description:
      'Registros de denuncia por robo o secuestro vigente de la PFA y/o gendarmería',
    src: '/src/assets/ladron.png',
    alt: 'thief',
  },
  {
    name: 'Prohibicion circular',
    description:
      'Algún oficio de prohibición vigente que impida el uso o la circulación en la vía pública',
    src: '/src/assets/prohibited.png',
    alt: 'prohibited',
  },
  {
    name: 'Historico de titulares',
    description:
      'Algún oficio de prohibición vigente que impida el uso o la circulación en la vía pública',
    src: '/src/assets/car-history.svg',
    alt: 'history',
  },
  {
    name: 'Prendas y embargos',
    description:
      'Cancelaciones de créditos y juicios pendientes o vigentes con sus respectivos importes',
    src: '/src/assets/debt.svg',
    alt: 'debt',
  },
  {
    name: 'Sucesion en tramite',
    description:
      'Documentación jurídica de juicios vigentes por sucesión o herencia que impidan la transacción',
    src: '/src/assets/in-process.svg',
    alt: 'in-process',
  },
  {
    name: 'Leasing o usufructo',
    description:
      'Contratos vigentes que afecten la tenencia y posesión del bien o mismo su cancelación',
    src: '/src/assets/exchange.svg',
    alt: 'exchange',
  },
]

export interface Report {
  name: string
  description: string
  price: string
  subtitle: string
  services: string[]
  numberOfPoints: number
  color: string
  buttonColor: string
  hoverColor: string
  activeColor: string
  extra?: string
  link: string
}

export const reports: Report[] = [
  {
    name: 'VDA',
    description: 'Verificación Dominio Automotor',
    price: '$20.000',
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
    name: 'VMA',
    description: 'Verificación Mecánica Automotor',
    price: '$50.000',
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
    name: 'VPA',
    description: 'Verificación Precompra Automotor',
    price: '$65.000',
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
]
