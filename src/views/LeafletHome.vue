<template>
  <div id="map">
    <div id="optContainer">
      <el-select v-model="value" placeholder="选择图层">
        <el-option-group v-for="group in layers" :key="group.label" :label="group.label">
          <el-option v-for="layer in group.options" :key="layer.value" :label="layer.label" :value="layer.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>
  </div>  
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default {
  data () {
    return {
      map: {},
      value: 'OSM',
      layers: [{
        label: '在线地图',
        options: [{
          value: 'OSM',
          label: 'OpenStreetMap'
        }]
      }],
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.map = L.map('map', {
        zoom: 4,
        center: [35.548857, 114.064839], 
        maxZoom: 18,
        minZoom: 2,
        zoomControl: true,
        attributionControl: true,
        crs: L.CRS.EPSG3857
      })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map)
    }
  }
}
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
  #optContainer {
    position: absolute;
    z-index: 99;
    top: 65px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>