<template>
    <section class="relative w-full h-screen space-y-7 " v-show="showMap">
        <div id="map" class="w-full h-screen"></div>
    </section>
</template>
<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted, computed, watch } from "vue";
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const showMap = computed(() => {
      return store.state.showStatus.showMap
    }) 
    var map;

    watch(() => store.state.showStatus.showMap,
    (now, prev) => {
        if( now && map === undefined ){
            setTimeout(function() {
                mapboxgl.accessToken ="pk.eyJ1IjoiYW9sbW9zLWFzc2V0cGxhbiIsImEiOiJja3BpaHo4enIwczByMnhteng5YTEyZmV2In0.Me9xp-iNkR8YPEaO8-FqmQ";
                map = new mapboxgl.Map({
                    container: "map",
                    center: [-70.63, -33.45],
                    style: "mapbox://styles/mapbox/satellite-v9",
                    zoom: 14
                });
                map.on('load', () => {
                    map.resize()
                });
            }, 100);
        }
        if(now && map !== undefined ){
            setTimeout(function() {
                map.resize()
            }, 1);
        }
    })
    return {
        showMap,
    };
  },
};
</script>


