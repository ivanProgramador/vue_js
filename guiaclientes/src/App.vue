<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
  <ClienteComponent/>
  <ProdutoComponent/>
  

 </div>
</template>

<script>
import ClienteComponent from './components/Cliente-component.vue';
import ProdutoComponent from './components/Produto-component.vue';



export default {
  name: 'App',
  components:{
    ClienteComponent,
    ProdutoComponent
  }
}
</script>

<style>

</style>
