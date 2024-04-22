/*
 Esse recusro serve para gerar propriedades de forma dinamica, por exemplo
 digamos que eu precise gerar um id poara cada elemento na tela porque eu tenho que 
 diferencia-los.

 eu possa usar esse recusso pra isso
 
 usando a computed propriet 
 
 1 - de ntro da tag scripts abaixo do objeto methods eu adiciono mais um objeto chamado computed
     dentro desse cobjeto eu crio a varivel idEspecial que recebe uma função que recebe 
     o email, o nome e o id do cliente e mustura esses tre valores e coloqca em letras maiusculas
     so que ao inves de so msitrurar ela gera uma miosttura aletatoria destes dados tornando eles 
     unicos para cada elemento.


 <script>
   computed:{
        idEspecial:function(){
           return(this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase(); 
        }
    }

</script>

2 - tornar a informação visivel no template 

<template>
   <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email }}</p>
         <p>Idade:{{ cliente.idade   }}</p>
        
         <button @click="mudarCor" >Mudar cor</button>

         <!--Esse botão chama o metodo de emissão do evento parte 1 -->
         <button @click="emitirEventoDelete">Deletar</button>

         <h4>ID especial {{ idEspecial }}</h4> <- aqui
      </h2>
   </div>


As computed propriets tamebme servem para aplicar biblioteacas em elementos


por exemplo a lodash é um biblioteca co varias classes uteis nesse caso eu usei uma computade porprieti 
para ordernar os objetos por nome de forma ascendente aqui eu uso a função oderBy que recebe o array clientes 
e gera outro array com os nomes ordenados em ordem alfabetica.  

 computed:{
         oclientes: function(){
            return _.orderBy(this.clientes,['nome'],['asc']);
   
         }
       }


exibindo o novo array ordenado

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
  <div v-for="(cliente, index) in oclientes" :key="cliente.id"> <- aqui
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



*/