import { createStore } from 'vuex'
import { CreditCardIcon, ViewGridIcon, MapIcon, UsersIcon } from '@heroicons/vue/solid'

const statusKeys = [ 'showMap' , 'showSites', 'showStaionDetail', 'showTopBar']
const navigationKeys = [ 'activePlantas' , 'activeInspecciones']

export default createStore({
  state: {
    sidebarOpen : false,
    showStatus : {
      showTopBar : true,
      showMap : false,
      showSites : true,
      showStaionDetail : false,
      activePlantas : true,
      activeInspecciones : false,
    },
    siteSelected : 0,
    tabs : [
      { name: 'Sites', param: 'showSites', icon: ViewGridIcon },
      { name: 'Map', param: 'showMap', icon: MapIcon }
    ],
    navigations : [
      { name: 'Plantas', icon: ViewGridIcon, activeName : 'activePlantas' },
      { name: 'Inspecciones', icon: UsersIcon, activeName : 'activeInspecciones' }
    ],
    sites : [
      {
        id: '1',
        name: 'Planta Norte',
        imageUrl: 'https://angelpersonal.imgix.net/example/norte.jpg',
      },
      {
        id: '2',
        name: 'Planta Sur',
        imageUrl: 'https://angelpersonal.imgix.net/example/sur.jpg',
      },
      {
        id: '3',
        name: 'Planta Este',
        imageUrl: 'https://angelpersonal.imgix.net/example/este.jpg',
      },
      {
        id: '4',
        name: 'Planta Oeste',
        imageUrl: 'https://angelpersonal.imgix.net/example/oeste.jpg',
      },
    ]
  },
  mutations: {
    toggleSidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    toogleTopBar(state, payload) {
      state.showStatus.showTopBar = payload;
    },
    toogleTabs(state, payload) {
      statusKeys.forEach(element => payload.includes(element) ? state.showStatus[element] = true : state.showStatus[element] = false );
    },
    goSiteSelected(state, payload){
      statusKeys.forEach(element => payload.showStatus.includes(element) ? state.showStatus[element] = true : state.showStatus[element] = false );
      navigationKeys.forEach(element => state.showStatus[element] = false);
      state.siteSelected = payload.siteId;
    },
    goNavigationsPlantas(state){
      const payload = ['showTopBar' , 'showSites'];
      statusKeys.forEach(element => payload.includes(element) ? state.showStatus[element] = true : state.showStatus[element] = false );
      navigationKeys.forEach(element => element == 'activePlantas' ? state.showStatus[element] = true : state.showStatus[element] = false);
    },
    goNavigationsInspecciones(state, payload){
      
    }
  },
  actions: {
    async toggleSidebarOpen({commit}) {
      try {
        commit('toggleSidebarOpen')
      } catch (error) {
        console.error(error)
      }
    },
    async toogleTopBar({commit} , payload) {
      try {
        commit('toogleTopBar', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async toogleTabs({commit} , payload) {
      try {
        commit('toogleTabs', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async goSiteSelected({commit} , payload) {
      try {
        commit('goSiteSelected', payload)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
