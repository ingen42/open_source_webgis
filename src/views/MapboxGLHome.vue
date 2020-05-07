<template>
  <div id="map">
    
  </div>  
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data () {
    return {
      token: 'pk.eyJ1IjoiaW5nZW40MiIsImEiOiJjazlsMnliMXoyMWoxM2tudm1hajRmaHZ6In0.rWx_wAz2cAeMIzxQQfPDPA',
      map: {}
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      mapboxgl.accessToken = this.token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121, 40],
        zoom: 5
      })
    }
  }
}
</script>

<style scoped>
@import url('https://cdn.bootcdn.net/ajax/libs/mapbox-gl/1.9.1/mapbox-gl.css');
  #map {
    width: 100%;
    height: 100%;
  }
</style>