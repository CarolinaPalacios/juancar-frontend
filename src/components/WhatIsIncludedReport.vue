<template>
  <section
    class="desktop-xl:px-32 desktop-lg:px-10 px-5 tablet-md:px-16 pt-10 bg-[#D9D9D9] desktop-xl:pt-20 tracking-tight"
  >
    <h2
      class="text-[#666565] uppercase desktop-xl:text-4xl desktop-lg:text-2xl desktop-xl:py-10 mobile-xs:pb-6 text-xl font-medium"
    >
      Que incluye
    </h2>
    <div
      class="sm:grid lg:grid-cols-4 md:grid-cols-3 desktop-xl:gap-x-28 desktop-lg:gap-x-5 desktop-xl:py-12 desktop-xl:px-40 desktop-lg:px-24 sm:gap-10 mobile-md:px-10 mobile-xs:space-y-6 mobile-sm:space-y-4 py-10 px-16 mobile-xs:px-12"
    >
      <div v-for="(item, index) in items" :key="index">
        <div class="flex flex-col items-center justify-center">
          <img
            :src="item.src"
            :alt="item.alt"
            class="desktop-xl:h-28 desktop-lg:h-20 desktop-xl:w-28 desktop-lg:w-20 mobile-xs:w-20 mobile-sm:w-24 sm:w-24"
          />
          <p
            class="text-[#2E6CA4] desktop-xl:text-xl desktop-lg:text-lg font-medium uppercase pt-3 text-nowrap"
          >
            {{ item.name }}
          </p>
          <p class="text-[#666565] desktop-xl:text-sm text-xs text-center">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Items {
  name: string
  src: string
  alt: string
  description: string
}

const items: Items[] = [
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
</script>
