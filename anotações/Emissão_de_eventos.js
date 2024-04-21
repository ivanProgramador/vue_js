/*
Emissão de eventos

 Cada elemento exibido na tela é um objeto contido dentro de um array
 a mecanica de adicionar basicamente esta no App.js que preenche os dados 
 e fazer o looping para gerar um componente para cada objeto contido no array.

 Agora se eu quiser deletar um dos componentes da tela eu devo levar em conta,
 o fato de cada componente ter seus proprios dados isso significa que se  eu
 colocar um eneto de delete no App.vue ele vai deletar todos porque ele não sabe 
 a diferença entre um componete e outro embora ele esteja renderizando 
 so quem conhece os porprios dados eo proprio componente. Então eu tenho que
 estabelecer uma comunicação entre o elemento pai(App) eo elemento filho(Clinete-component)
 para que o filho diga que deseja ser deletado e o elemento pai execute a retirada dele da 
 pagina.

 então o evento delete precisa ser criado no próprio componente dentro de methods, no componente,
 o componetente possui uma diretiva chama this.$emit('meDelete') que recebe um nome para o evento 
 que será emitido de forma externa.

 

 <script>
            export default{

            methods:{
                mudarCor: function(){
                    this.isPremium = ! this.isPremium;

                },


                emitirEventoDelete: function(){  <- aqui 
                    console.log('Emitindo do filho');
                    this.$emit('meDelete');

                }
               }

            }

</script>






  
 





*/