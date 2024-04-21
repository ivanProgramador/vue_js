/*
O vue js tem os mesmos eventos js a diferença e que ele precisa que coloquye um @ antes de usar 
no componete de ste porjeto eu usei o click.

para dicionar um evento primerio eu criei um botão no template do meu componente


<template>
   <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email   }}</p>
         <p v-if="showIdade == true"> Idade: {{ cliente.idade    }}</p>
         <p v-else> Esse cliente escondeu a idade </p>


         <button @click="mudarCor" >Mudar cor</button>  <- aqui
        
      </h2>
      
   </div>
 
</template>

depois que que fz isso eu adicionei ele na tag script mas ele tem que ficar dentro do objeto methods,
no vue um evento precisa ser declarado no modo chave:valor mas nesse caso a chave eo nome do evento 
eo valor é uma função anonima responsavel por executar ele.

essa função vai mudar o valor da varivel premium para false causando a alteração da classe css do elemento,
mas é importante salientar que como estamos tratando de uma classe para que essa função consiga acessar a variavel
isPremiun de forma a alterar somente o objeto que chamou o evento ela tem que ter o this para que o processador saiba 
de que objeto exatamente eu estou falando.

methods:{
      mudarCor: function(){
         this.isPremium = ! this.isPremium;

      }

abaixo a tag scrpt completa


<script>
export default{

   data(){
      return{
         isPremium:false
      }
   },
   props:{
       cliente:Object,
       showIdade: Boolean
   },
   methods:{
      mudarCor: function(){
         this.isPremium = ! this.isPremium;

      }
   }

}

</script>








*/