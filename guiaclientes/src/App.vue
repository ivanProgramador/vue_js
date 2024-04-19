<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
      <ClienteComponent nome="Ana Silva" email="ana@teste.com" numero=3 />
      <ClienteComponent nome="Bruna Maria" email="bruna@teste.com" numero=2 />
      <ClienteComponent nome="Camila Oliveira" email="camila@teste.com" numero=1 />


  

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
