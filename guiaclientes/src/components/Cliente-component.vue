
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

         <h4>ID especial {{ idEspecial }}</h4>
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
   },
   methods:{
      mudarCor: function(){
         this.isPremium = ! this.isPremium;

      },
      // quando esse metodo é chamado 
      emitirEventoDelete: function(){
         
        console.log('emitindo do filho');
         //parte 2
        // ele tem a função padrão $emit que recebe o nome do evento que vai ser emitido 
        // e qual eo o bejeto que vai ser enviado ao componente pai
         
        this.$emit('meDelete',{idCliente: this.cliente.id});

      }
   },
   computed:{
       idEspecial:function(){
          return(this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase(); 
       }
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
