
<template>
   <div id="cliente">
      <h2 id="cliente-titulo" >Ficha cliente</h2>
      <h2>
         <p>Nome:     {{ nome      }}</p>
         <p>Numero:   {{ numero    }}</p>
         <p>E-mail:   {{ email     }}</p>
        
      </h2>
      
   </div>
 
</template>

<script>
export default{

   data(){
      return{
       
         idade:35,
         descricao:'Cliente premium'
      }
   },
   props:{
       nome: String,
       numero: Number,
       email: String,
      

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
    }

    #cliente-titulo{
       color: white;
    }

 

</style>
