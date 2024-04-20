/*

Como o nome ja diz a classe css do elemnto muda conforme uma condição pre-estabelecida 
digamos qua a loja divide os clientes dela em dois tipos:

1 - tipo cliente
2 - tipo cliente-premium 

Para que um caixa posa identificxa-lo e necessario que ele tenha alguma diferença em relção ao um cliente comum
No caso deste projeto um cliente premium sera repsetando com a code fundo da div preta e o texto dourado enquanto 
um normal tem outra configuração css 

como fazer isso: 

O primeiro passo e criar uma varivel dentro da função data, por padrão ela é falsa

<script>
export default{

   data(){
      return{
         isPremium:false  <- aqui
       }
   },
   props:{
       cliente:Object,
       showIdade: Boolean
   }

}

</script>


agora eu crio o css que vai ser aplicado no caso isso so funciona com classes 

<style scoped>

   <style scoped>

    .cliente{
        color: rgb(237, 241, 237);
        background-color: rgb(112, 114, 243);
        max-width: 20%;
        height: auto;
        padding-left: 2%;
        padding-bottom: 2%;
        padding-top:2%;
        border-radius: 3%;
        box-sizing: border-box;
        width: auto;
    }

    .cliente-premium{
      color: rgb(252, 248, 4);
        background-color: rgb(10, 10, 10);
        max-width: 20%;
        height: auto;
        padding-left: 2%;
        padding-bottom: 2%;
        padding-top:2%;
        border-radius: 3%;
        box-sizing: border-box;
        width: auto;

    }

    #cliente-titulo{
       color: white;
    }

 

</style>


agora eu crio a condicional que aplica a classe com base na variavel isPremium

<template>
   <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}"> <- aqui parece um operador ternario 
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email   }}</p>
         <p v-if="showIdade == true"> Idade: {{ cliente.idade    }}</p>
         <p v-else> Esse cliente escondeu a idade </p>
        
      </h2>
      
   </div>
 
</template>













*/