/*
 A mecanica do data-binding consisite em ligar um elemento a uma variavel
 para manipular seu valor em tempo real existem 2 tipos de data-binding 
 
 1 - One Way data-binding 
 Consiste em mostrar o valor de uma variavel em um campo ou elemento por exemplo 
 esse cpmponete exibe o nome de um cliente porém esse nome pode vior da base de dados,
 api ou qualquer outra fonte de dados, mas quando chega bno vua ele tem que ser 
 armazenado em alguma variavel ppara que possa ser consultado e exibido.
 
 é ai que entra o data-binding esse ' : ' antea do value do imput
 diz que o atributo deste campo será conetado a uma varivel e dentro 
 do value eu digo que a variavel é nome. Isso é chamdo onde way data-binding 
 porque esse campo so recebe o valor ele não pode alterar mesmo que tente editar 
 o valor não muda  



 <template>
   <div id="cliente">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
        <input type="text" :value="nome">
            
      </h2>
   </div>
</template>





camada de dados do componente

<script>
export default{

   data(){
      return{
         nome:"jose"
      }
   }

}

</script>

TWO WAY data-binding se chama two way porque nese caso o input consegue controler o valor da variavel
ele tante recebe quanto envia valores usado o v-model="nome" eu consigo mudar o none do cliente para 
qualqer nome que eu desejar. 

<template>
   <div id="cliente">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
        <input type="text" v-model="nome">
            
      </h2>
   </div>
</template>
camada de dados do componente

<script>
export default{

   data(){
      return{
         nome:"jose"
      }
   }

}


*/