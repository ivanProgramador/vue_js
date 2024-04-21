
<template>
   <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email   }}</p>
         <p v-if="showIdade == true"> Idade: {{ cliente.idade    }}</p>
         <p v-else> Esse cliente escondeu a idade </p>
        
      </h2>
      
   </div>
 
</template>

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
   }

}

</script>

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
        margin-bottom: 2%;
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
