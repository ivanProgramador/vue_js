
<template>
   <div id="cliente">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:  {{ cliente.nome     }}</p>
         <p>E-mail:{{ cliente.email   }}</p>
         <p>Idade: {{ cliente.idade    }}</p>
        
      </h2>
      
   </div>
 
</template>

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
       cliente:Object
   }

}

</script>

<style scoped>

    #cliente{
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

    #cliente-titulo{
       color: white;
    }

 

</style>
