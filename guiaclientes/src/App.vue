<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
  <div v-for="(cliente, index) in clientes" :key="cliente.id">
    <h1>{{index + 1}}</h1>
    <ClienteComponent :cliente="cliente" />


  </div>


  

  

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
      },
      clientes:[
      {
        id:1,
        nome:"Maria",
        email:'maria@teste.com',
        idade:30
      },
      {
        id:2,
        nome:"camila",
        email:'camila@teste.com',
        idade:32
      },
      {
        id:3,
        nome:"Eduardo",
        email:'eduardo@teste.com',
        idade:33
      }
        

      ]
    }
  },
  components:{
    ClienteComponent,
   
  }
}
</script>

<style>

</style>
