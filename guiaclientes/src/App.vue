<template>
 <div id="App">

  <h1>Guia clientes</h1>
  <h3>Cadastro</h3>
  <small id="aviso" v-show="deuErro">Nome invalido, tente novamente</small><br>
  <input type="text" name="nome" placeholder="nome" v-model="nomeField" >
  <input type="text" name="email"  placeholder="email" v-model="emailField" >
  <input type="number" name="idade"  placeholder="idade" v-model="idadeField">
  <button @click="cadastrarUsuario" >Cadastrar</button>


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
      deuErro:false,
      nomeField:'',
      emailFiled:'',
      idadeField:0,
      cliente:{
        nome:"Maria",
        email:'maria@teste.com',
        idade:30
      },
      clientes:[]
    }
  },
  components:{
    ClienteComponent,
   
  },
  methods:{
    cadastrarUsuario:function(){

       if(this.nomeField == "" || this.nomeField ==" " || this.nomeField.length < 3){

        this.deuErro =true;

       }else{
        this.deuErro =false;
        this.clientes.push(
        {nome: this.nomeField,
         email: this.emailField,
         idade: this.idadeField,
         id: Date.now()
        })

        this.nomeField =""
        this.idadeField=""
        this.emailField =""

       }
       

       

    }
  }
}
</script>

<style>

 #aviso{
   color: red;
 }

</style>
