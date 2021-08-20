<template>
<section>
  <div class="relative flex h-screen overflow-hidden bg-gray-100">
    <div class="flex-1 overflow-auto focus:outline-none">
      <main class="relative z-0 flex-1 pb-8 overflow-y-auto">
        <!-- Page header -->
        <div class="bg-white shadow">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div class="flex-1 min-w-0">
                <!-- Profile -->
                <div class="flex items-center">
                  <div>
                    <div class="flex items-center">
                      <img class="w-16 h-16 rounded-xl " :src="site.imageUrl" alt="" />
                      <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        {{ site.name }}, {{ site.potencia}}
                      </h1>
                    </div>
                    <dl class="flex flex-col mt-6 sm:ml-3 sm:flex-row sm:flex-wrap">
                      <dd class="flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6">
                        <OfficeBuildingIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {{ site.geoPos.lat }} , {{ site.geoPos.lng }}
                      </dd>
                      <dd class="flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0">
                        <InformationCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                        {{ site.status }}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="flex mt-6 space-x-3 md:mt-0 md:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  Nueva Inspección
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</section>
</template>

<script>
import { ref } from 'vue'
import { InformationCircleIcon , OfficeBuildingIcon  } from '@heroicons/vue/outline'

export default {
  components: {
    InformationCircleIcon,
    OfficeBuildingIcon,
  },
  setup() {

    const site = {
                    id: '1',
                    name: 'Planta Norte',
                    potencia : '196 MW.',
                    geoPos : {
                              lat : -73.21819,
                              lng : -40.38949
                    },
                    status : 'Sin Inspecciones',
                    imageUrl: 'https://angelpersonal.imgix.net/example/norte.jpg',
    }


    return {
      site
    }
  },
}
</script>