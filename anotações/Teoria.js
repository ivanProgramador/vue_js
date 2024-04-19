/*
  Vue js é um framewok reativo como React ou Angular, ele usa o dom para manipular elementos 
  a ideia dele e faciltar a construção de spa´s, Single Page Aplications que não precisam recarregar 
  a pagina toda para atualizar as informações que estão sendo exibidas.

  O vue js para funcionar precisa
  - node js para interpretar o código dele em tempo de execução 
  - extensão vtur para vsCode não é obrigatório mas aumenta a produtividade ao usar o framework
  - Vue cli é um utilitario que facilita a criação de um projeto vue por linha de comando

  Comando para iniciar um porjeto vue js 
  - vue create <nome do projeto>

  Estrutura 
  pastas 
  - public -> fica a pagina html que mostra a tela do framework ao icone que parece na aba da pagina 
  - src -> recurssos da aplicação como a pasta de assets que cointem imagens que são exibidas na view principal
           componentes que contem os objetos qque aparecem na tela as configurações css eo arquivo main que seleciona 
           a view app do html e coloca os componetes nela 
  - Babel é um conversor que traduz o js velho para o js novo para evitar problemas de compatibilidade 

  Componentes 

  Um componete é basicamente uma função js que retorna um elemento que pode ser uma div, um formulario, um menu,
  cada componente tem sua própria função e estilo então isso torna esse elemento totalmente independente dos outros,
  então se houver alguma alteração referente ao contêudo deste comeponente somente ele será afetado sem que os outros
  elementos presentes na página sejam recarregados.

  Por isso uma SPA não dá ao ususario a sensação de estar usando um aplicativo porque mesmo atualizando as informações,
  a apgnia não sofre um refresh.  

  Dica: Oaruivo do componte deve ter dois nomes separados por ifen por exemplo:
  
  Cliente-component

  Porém na hora de referenciar ele no app.vue a averiavel que recebe a importação tem que ser sem ifem por exemplo:

  import ClienteComponent from './components/Cliente-component.vue';

  se não for dessa forma o vue vai travar
  
  O codigo abaixo é um componente basico ja com o css pronto
  ----------------------------------------------------------------------
  
<!--Um componente e dividido em 3 partes 
   template -> parte que vai ser mostrada 
   script   -> lógica do componente
   style    -> estilo do componente

   para retornar mais de uma tag html dentro de um componte 
   é necessário criar uma div principal para colocar os elemntos dentro 
-->

<template>
   <div id="cliente">
      <h2 id="cliente-nome" >Cliente aqui</h2>
      <h2>Descrição do cliente: teste teste</h2>
      
   </div>
 
</template>

<script>
export default{

}

</script>

<style scoped>

    #cliente{
        color: green;
        background-color: black;
        max-width: 600px;
        height: 120px;
    }

    #cliente-nome{
       color: white;
    }

 

</style>
---------------------------------------------------------------------

Reatividade 

  No caso oque classfica um framwork como reativo e a capacidade dele de detectar 
  as mudanças nos dados exibidos e fazer essas alaterações imediatamente sem que o cliente 
  precise ataualizar a pagina para ter acesso a essas atualizações.
  
  Usando um exemplo mais comun, a Netflx quando mostra um filme lanlçamento na pagina,
  se ele foi lançado enquanto o cliente esta vendo outros titulos no catalogo ele vai
  aparecer na lista para o cliente porém isso é feito sem que o restante da pagina 
  precise sofrer um recarregamento para atualizar o anuncio do novo titulo.

  One way data-binding

  Esse recurso liga os atributos a um input ou outro elemento pelo value por exemplo
  se eu tenho os dados atuais de um cliente e deseja mostra-los dentro de um input eu 
  posso usar a sintaxe abaixo onde ue coloco ' : ' atras do atributo value e dentro dele eu escrevo 
  o ome d varivel que possui o atributo que eu deseja colocar no value do input.

  <input type="text" :value="nome">

  Então o input acima vai receber em seu valor o nome José Silva que seria o valor da variavel nome 

  <script>
      export default{

         data(){
            return{
               nome:'José Silva',
               numero:'123456',
               email:'jose@gmail.com',
               idade:35,
               descricao:'Cliente premium'
            }
         }

      }

</script>

O motivo de chamar isso de One way data-binding e porque se eu tentar alterar o valor do campo 
nada aconetce com o valor d varivel nome porque ele so recebe o valor ele não pode enviar valores 
por isso One way.

Two way data-binding 

É uma situação onde tanto o input recebe valor quanto ele envia isso faz com que o valor da varivel 
mude de forma sincronizada 
com a sintaxe abaxo o input ficaligado a varivel nome então o valor dela muda conforme eu edito o valor
qua eu tenho no campo 

 <input type="text" v-model ="nome">


 <script>
      export default{

         data(){
            return{
               nome:'José Silva',
               numero:'123456',
               email:'jose@gmail.com',
               idade:35,
               descricao:'Cliente premium'
            }
         }

      }

</script>

------------------------------------------------------------




  
  


  





*/