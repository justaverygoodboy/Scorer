<template>
  <div id="app-wrapper">
    <div class="title">电子系班委评分系统</div>
    <div id="app">
      <div class="side-router">
        <router-link tag="div" to="/">电子181</router-link>
        <router-link tag="div" to="/dz182">电子182</router-link>
        <router-link tag="div" to="/dz183">电子183</router-link>
        <router-link tag="div" to="/dz184">电子184</router-link>
        <router-link tag="div" to="/dz185">电子185</router-link>
        <router-link tag="div" to="/dz186">电子186</router-link>
        <router-link tag="div" to="/dz187">电子187</router-link>
        <router-link tag="div" to="/dz188">电子188</router-link>
        <router-link tag="div" to="/wlw181">物联网181</router-link>
        <router-link tag="div" to="/wlw182">物联网182</router-link>
      </div>
      <div class="view">
        <keep-alive><router-view/></keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-content: center;
}
.title {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-bottom: 10px;
}
.side-router {
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-right: 100px;
}
.side-router div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 10px;
}
.side-router div:hover {
  background: gray;
  color: white;
}
.router-link-exact-active{
  background: gray;
  color: white;
}
.view {
  display: flex;
  justify-content: center;
}
</style>
