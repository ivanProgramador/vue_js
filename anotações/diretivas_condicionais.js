/*
As diretivas condicionais no vue servem para determinar se um elemento ou parte dele
será exibido ou não as condicionais porssiveis ate a data de hoje são:

v-if 
v-else 
v-else-if 
v-show

No caso desse porjeto eu vou usar a diretiva v-if para mostrar a idade de um cliente ou ocoulta-la
para estabeler um condição de exibição eu crei uma prop para abasear os testes nela ela é uma prop
do tipo booleam assim eu posso testar se ela e true ou false.

<script>
export default{

   data(){
      return{
      }
   },
   props:{
       cliente:Object,
       showIdade: Boolean <- aqui 
   }

}

</script>

Depois criar a prop eu preciso testa-la ainda dentro do componente
no template do componete abaixo o paragrafo que exibe a idade do cliente
passa a ser controlado pelo v-if e pelo v-else. 


<template>
   <div id="cliente">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email   }}</p>

         <p v-if="showIdade == true"> Idade: {{ cliente.idade    }}</p> <- aqui se a showIdade for verdadeira esse html será mostrado

         <p v-else> Esse cliente escondeu a idade </p>    <-- se for false ele vai mostrar esse 
        
      </h2>
      
   </div>
 
</template>

Quem define se ela sera verdadeira ou falsa eo valor que sera enviado ao compponte dessa prop la na interface
no exemplo abaixo ela vai ser falsa. 

<ClienteComponent :cliente="cliente" :showIdade="false" />

Nesse caso eu tenho as possibilidades if e else mas caso eu precise de mais condiçções eu posso usar o v-else-if
que pode ter varias possibilidades e funciona com a mesma dinámica.

v-show pode ser usado se o objetivo não for exatamente fazer o elemento sumir e só ocultar ele a dinamica de uso e a mesma
porém usar o v-show só vai fazer com que o elemento não apareça para o cliente mas permaneça na página.




*/