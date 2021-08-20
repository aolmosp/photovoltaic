<template>
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <Sidebar />
    <div class="static flex flex-col flex-1 w-0 overflow-hidden">
      <div class="static z-10 flex flex-shrink-0 h-16 bg-white shadow">
        <button class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="toogleSidebar">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
        </button>
        <div class="flex justify-between flex-1 px-4">
          <div class="flex flex-1">
              <Topbar />
          </div>
          <div class="flex items-center ml-4 md:ml-6">
            <!-- TOPBAR RIGHT -->
          </div>
        </div>
      </div>

      <main class="relative z-0 flex-1 -mb-16 overflow-y-auto focus:outline-none">
          <Map />
          <Sites />
          <SiteDetail /> 
      </main>
    </div>

  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Map from '@/components/Map'
import Sites from '@/components/Sites'
import SiteDetail from '@/components/SiteDetail'
import { useStore } from 'vuex'
import { MenuIcon } from '@heroicons/vue/outline'
import { MenuAlt2Icon } from '@heroicons/vue/outline'


export default {
  name: 'App',
  components: {
    Sidebar,
    MenuIcon,
    MenuAlt2Icon,
    Topbar,
    Map,
    Sites,
    SiteDetail,
  },
  setup(){
    const store = useStore()
    const toogleSidebar = (() => {
      store.dispatch('toggleSidebarOpen')
    })

    return{
      toogleSidebar
    }
  }
}
</script>
