<template>
  <div id="app">
    <!-- <Home /> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home data="THis is data passed to Home" msg="This is message passseddd!!"/>


    <!-- <Array data="THis is outside hello world"/> -->
    <NewsList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
// import Array from './components/Array.vue'
import NewsList from './components/NewsList'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Home,
    // Array,
    NewsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
