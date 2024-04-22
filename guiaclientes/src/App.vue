<template>
 <div  id="App">

  <h1>Guia clientes</h1>
  <h3>Cadastro</h3>

  <div class="field" >
      <small id="aviso" v-show="deuErro">Nome invalido, tente novamente</small><br>

      <input class="input is-small" type="text" name="nome" placeholder="nome" v-model="nomeField" >
      <input  class="input is-small" type="text" name="email"  placeholder="email" v-model="emailField" >
      <input  class="input is-small" type="number" name="idade"  placeholder="idade" v-model="idadeField">
      
      <button @click="cadastrarUsuario" >Cadastrar</button>
  </div>
 


  <hr>
  <div v-for="(cliente, index) in oclientes" :key="cliente.id">
    <h1>{{index + 1}}</h1>
    <!--Parte 3 

        quando chega aqui no componete pai para ser lido o evento emitido
        tem que ser passado ao componete atraves  dessa sintaxe @meDelete="deletarUsuario"
        como se ele fosse uma props
    -->
    <ClienteComponent :cliente="cliente" @meDelete="deletarUsuario" />


  </div>


  

  

 </div>
</template>

<script>
import _ from 'lodash';

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
      clientes:[
      {
        nome:"carla",
        email:'carla@teste.com',
        idade:30
      },
      {
        nome:"Amanda",
        email:'amanda@teste.com',
        idade:30
      },
      {
        nome:"Bruna",
        email:'bruna@teste.com',
        idade:30
      }
      ]
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

       }}
       ,
       /*
         parte 4 quando botão é acionado ele gera o evento
         que recebe comno paratro os dados vendo de lá do componete filho 
         atraves da varivel $event como eu estou mandado o componete todos
         os dados delçe vão vir para essa variavel 
       */
       deletarUsuario: function($event){

        /* chegando aqui eu posso afzer oque eu precisar com o componente */
         var id = $event.idCliente;
        //aqui eu faço um filtro com base no id do cliente e todos os ids que forem diferentes 
        // do id recebido vão permanecer no array oque tiver o id igual vai ser deletado
        // isso vai gerar um novo array sem o objeto que deletei 

         var novoArray =  this.clientes.filter(cliente=> cliente.id != id);

        //agora o array de cliente vai receber esse novo array sem o objeto que foi deletado

        this.clientes = novoArray;
          
       }
  },
       computed:{
         oclientes: function(){
            return _.orderBy(this.clientes,['nome'],['asc']);
   
         }
       }
}
</script>

<style>

 #aviso{
   color: red;
 }

</style>
