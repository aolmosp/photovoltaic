<template>
<section v-show="showStatus.showTopBar">
  <div class="flex items-center">
    <div class="sm:hidden">
      <select id="tabs" name="tabs" class="block w-40 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" @change="toogleTabs($event.target.value)">
        <option v-for="tab in tabs" :key="tab.name" :selected="showStatus[tab.param]" :value="tab.param" >{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="flex h-16 space-x-8" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" href="#" @click="toogleTabs([tab.param, 'showTopBar'])" :class="[ showStatus[tab.param] ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
            <component :is="tab.icon" :class="[ showStatus[tab.param] ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']" aria-hidden="true" />
            <span>{{ tab.name }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import { useStore } from 'vuex'
import { computed , watch } from 'vue' 

export default {
  setup() {
    
    const store = useStore()

    const toogleTabs = ((params) => {
      store.dispatch('toogleTabs', params)
    })

    const tabs = computed(() => {
      return store.state.tabs
    }) 

    const showStatus = computed(() => {
      return store.state.showStatus
    })

    return {
      tabs,
      toogleTabs,
      showStatus,
    }
  },

}
</script>