<template>
  <div id="map">
    <el-row>
      <el-button type="info" @click="activeFunction('circleFunc')">点生成面</el-button>
      <el-button type="info">缓冲区</el-button>
    </el-row>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
export default {
  data () {
    return {
      token: 'pk.eyJ1IjoiaW5nZW40MiIsImEiOiJjazlsMnliMXoyMWoxM2tudm1hajRmaHZ6In0.rWx_wAz2cAeMIzxQQfPDPA',
      map: {},
      activeFunc: {
        circleFunc: false,
        bufferFunc: false
      }
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
    },
    activeFunction(func){
      if(func == 'circleFunc') {
        this.activeFunc.circleFunc = true
        this.draw()
      } 
    },
    draw(){
      if(this.activeFunc.circleFunc == true) {
      this.map.on('click', e => {
        if(this.map.getLayer('circle')) {
          this.map.removeLayer('circle')
          this.map.removeSource('circle')
        }
        let center = [e.lngLat.lng, e.lngLat.lat]
        console.log(center)
        var radius = 50
        var options = {
          steps: 20,
          units: 'kilometers',
          properties: {
            foo: 'bar'
          }
        }
        var circle = turf.circle(center, radius, options)
        console.log(circle)
        this.map.addLayer({
          'id': 'circle',
          'type': 'fill',
          'source': {
            'type': 'geojson',
            'data': circle,
          },
          'layout': {},
          'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
          }
        })
      })
      } else {
        // alert('未激活此功能')
        console.log('未激活此功能')
      }
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
  .el-row {
    z-index: 99;
  }
  .el-button {
    
  }
</style>