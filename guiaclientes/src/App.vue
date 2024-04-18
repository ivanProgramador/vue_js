<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
  <ClienteComponent/>

  

 </div>
</template>

<script>
import ClienteComponent from './components/Cliente-component.vue';




export default {
  name: 'App',
  components:{
    ClienteComponent,
   
  }
}
</script>

<style>

</style>
