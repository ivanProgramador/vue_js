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



*/