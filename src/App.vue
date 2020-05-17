<template>
  <div id="app">
    <el-container>
      <el-header height="60px">开源WebGIS</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-demo" :unique-opened="true">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Leaflet</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">地图瓦片</el-menu-item>
                <el-menu-item index="1-2">数据图层</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>OpenLayers</span>
              </template>
              <el-menu-item-group>
                <router-link to="/ol/home">
                  <el-menu-item index="2-1">瓦片底图</el-menu-item>
                </router-link>
                <el-menu-item index="2-2">选项二</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Mapbox-GL</span>
              </template>
              <el-menu-item-group>
                <router-link to="/mapboxgl/home">
                  <el-menu-item index="1-1">瓦片底图</el-menu-item>
                </router-link>
                <router-link to="/about">
                  <el-menu-item index="1-2">关于</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Turf空间分析</span>
              </template>
              <el-menu-item-group>
                <router-link to="/turf/home">
                  <el-menu-item index="1-1">基本</el-menu-item>
                </router-link>
                <router-link to="/about">
                  <el-menu-item index="1-2">选项二</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="less">
@width: 160px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background: #D3DCE6;
  color: #333;
}
</style>

<style>
#app > section > section > main {
  padding: 1px;
}
</style>