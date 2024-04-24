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
