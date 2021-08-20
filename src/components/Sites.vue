<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <section class="relative w-full h-screen space-y-7 " v-show="showSites">
  <div class="p-4" >
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <li v-for="site in sites" :key="site.id" class="flex flex-col col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
        <div class="flex justify-center">
          <img class="flex-shrink-0 w-full h-40 mx-auto rounded-t-lg" :src="site.imageUrl" alt="" />
          <span class="absolute mt-3 px-2.5 py-1 font-semibold text-gray-800 bg-gray-200 rounded-md white bg-opacity-80">{{ site.name }}</span>
        </div>
        
          <div class="flex divide-x divide-gray-200">
            <div class="flex flex-1 w-0">
              <a href="#" @click="goSiteSelected({ siteId : site.id , showStatus : ['showStaionDetail']})" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500">
                <DesktopComputerIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="hidden ml-1 truncate lg:flex ">Detalle</span>
              </a>
            </div>
            <div class="flex flex-1 w-0 -ml-px">
              <a href="#" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                <MapIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="hidden ml-1 truncate lg:flex ">Mapa</span>
              </a>
            </div>
            <!-- Boton oculto   -->
            <div class="flex-1 hidden w-0 -ml-px">
              <a class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                <CogIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="hidden ml-1 truncate lg:flex ">Editar</span>
              </a>
            </div>
          </div>
        
      </li>
    </ul>
  </div>
 </section>
</template>

<script>
import { DesktopComputerIcon, MapIcon, CogIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: {
    DesktopComputerIcon,
    MapIcon,
    CogIcon,
  },
  setup() {
    const store = useStore()

    const showSites = computed(() => {
      return store.state.showStatus.showSites
    }) 

    const sites = computed(() => {
      return store.state.sites
    })

    const goSiteSelected = ((params) => {
      store.dispatch('goSiteSelected', params)
    })

    return {
      sites,
      showSites,
      goSiteSelected,
    }
  },
}
</script>