<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
  <ClienteComponent :cliente="cliente"/>

  

 </div>
</template>

<script>
import ClienteComponent from './components/Cliente-component.vue';




export default {
  name: 'App',
  data(){
    return{
      cliente:{
        nome:"Maria",
        email:'maria@teste.com',
        idade:30
      }
    }
  },
  components:{
    ClienteComponent,
   
  }
}
</script>

<style>

</style>
