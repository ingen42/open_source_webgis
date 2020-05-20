<template>
  <div id="map">
    <div id="optContainer">
      <div id="layerSelect">
        <el-select v-model="value" @change="changeLayer" placeholder="选择图层">
          <el-option-group v-for="group in layers" :key="group.label" :label="group.label">
            <el-option v-for="layer in group.options" :key="layer.value" :label="layer.label" :value="layer.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
    </div>

  </div>  
</template>

<script>
import 'ol/ol.css'
import * as ol from 'ol'
import { transform } from "ol/proj";
import TileLayer from 'ol/layer/Tile'
// import ImageLayer from "ol/layer/Image";
import { OSM, TileArcGISRest } from "ol/source"
import BingMaps from "ol/source/BingMaps"
import XYZ from 'ol/source/XYZ'
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
        }, {
          value: 'Bing',
          label: 'BingMap'
        }, {
          value: 'GaodeVector',
          label: '高德矢量地图'
        }, {
          value: 'GaodeImagery',
          label: '高德影像地图'
        }]
      }, {
        label: '地图服务',
        options: [{
          value: 'ArcGIS',
          label: 'ArcGIS MapServer'
        }]
      }],
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new ol.View({
          projection: "EPSG:3857",
          center: transform([114.064839,35.548857], "EPSG:4326", "EPSG:3857"),
          zoom: 4,
          maxZoom: 18,
          minZoom: 2
        })
      })
    },
    changeLayer(e){
      if(e == 'Bing') {
        this.switch2Bing()
      } else if(e == 'OSM') {
        this.switch2OSM()
      } else if(e == 'GaodeVector') {
        this.swtich2Gaode('GaodeVector')
      } else if(e == 'GaodeImagery') {
        this.swtich2Gaode('GaodeImagery')
      } else if(e == 'ArcGIS') {
        this.switch2ArcGIS()
      }
    },
    removeAllLayers(){
      var layers = this.map.getLayers().array_
      for(var i=0; i < layers.length; i++) {
      this.map.removeLayer(layers[i])
      }
    },
    switch2Bing(){
      this.removeAllLayers()
      let bingMapLayer = new TileLayer({
        source: new BingMaps({
          key: 'AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ',
          imagerySet: 'Road'
        })
      })
      this.map.addLayer(bingMapLayer)
    },
    switch2OSM(){
      this.removeAllLayers()
      this.map.removeLayer(this.map.getLayers().item(0))
      let OSMLayer = new TileLayer({
        source: new OSM()
      })
      this.map.addLayer(OSMLayer)
    },
    swtich2Gaode(type){
      this.removeAllLayers()
      if(type == 'GaodeVector') {
        let GaodeVectorLayer = new TileLayer({
          source: new XYZ({
            url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7'
          })
        })
        this.map.addLayer(GaodeVectorLayer)
      } else if (type == 'GaodeImagery') {
        let GaodeImageryLayer = new TileLayer({
          source: new XYZ({
            url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8'
          })
        })
        let GaodeLabelLayer = new TileLayer({
          source: new XYZ({
            url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
          })
        })
        this.map.addLayer(GaodeLabelLayer)
        this.map.addLayer(GaodeImageryLayer)
      }
    },
    switch2ArcGIS(){
      this.removeAllLayers()
      let ArcGISLayer = new TileLayer({
        source: new TileArcGISRest({
          // url: 'http://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer'
          // url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
          url: 'http://server.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer'
        })
      })
      this.map.addLayer(ArcGISLayer)
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