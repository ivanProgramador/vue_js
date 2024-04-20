/*
Um vez que o componente esta sendo exibido App.js ele otambem pode enviar valores ao componente,
isso é util em momentos em que os dados vem de alguma api e precisamos mostrar essa daos em um 
componente.

No componte App dentro da tag scrpt temos a função expport default dentro dela podemos declarar uma função data()
que recebe objetos como parametros e os atraibutos destes obejtosa podems er usados pelo componente abaixo tem um exemplo,

para receber um objeto ele tem que estar configurador primiero nas props do componente

----------------------------------------------------------------
    <script>
    export default{

        data(){
            return{
            }
        },
        props:{
            nome: String,
            idade: Number,
            email: String,
            cliente:Object  <- aqui 
        }

    }

    </script>
--------------------------------------------------------------------

depois ela pode serpassada pelo App.vue

----------------------------------------------------------------------

<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <hr>
 
  //fazendo bind entre o componente eo objeto 

  <ClienteComponent :cliente="cliente"/>

  

 </div>
</template>

<script>
import ClienteComponent from './components/Cliente-component.vue';




export default {
  name: 'App',
  data(){
    return{
      cliente:{       <- aqui
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











*/