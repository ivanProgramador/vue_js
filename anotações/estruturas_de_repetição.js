/*
Para renderizar um lista de dados e gerar um componete para cada o vue js usa o v-for 
para usar o v-for primiero passo e criar uma lista de objetos em um array na tag scrpt 
do app.vue eu criei um array de objetos cliente e nele eu coloquei 3 objetos.
Para que ele tenha algo para listar.



<script>
import ClienteComponent from './components/Cliente-component.vue';




export default {
  name: 'App',
  data(){
    return{
      cliente:{
        nome:"Maria",
        email:'maria@teste.com',
        idade:30
      },
      clientes:[
      {
        id:1,
        nome:"Maria",
        email:'maria@teste.com',
        idade:30
      },
      {
        id:2,
        nome:"camila",
        email:'camila@teste.com',
        idade:32
      },
      {
        id:3,
        nome:"Eduardo",
        email:'eduardo@teste.com',
        idade:33
      }
        

      ]
    }
  },
  components:{
    ClienteComponent,
   
  }
}
</script>

O segundo passo e criar uma div que vai receber o v-for, o vf-for esta recebendo o cliente que e a variavel que vai receber
os objetos e o index que vai contar cada um deles, apos o in ele receber o array onde ele vai pesauisar os objetos o atributo key 
precisa existir para o vue diferernciar um obnjeto do outroi tem que ser um atributo de valor unico por isso eu coloqquei como id,
então tudo oque estiver dentro dessa div vai ser repetido com base no numero de objetos dentro do array cliente.

ai nesse caso eu coloquei o componente cliente recebendo o objeto clientee um h1 para mostrar o index. 

 <div v-for="(cliente, index) in clientes" :key="cliente.id">
    <h1>{{index + 1}}</h1>
    <ClienteComponent :cliente="cliente" />
</div>



*/