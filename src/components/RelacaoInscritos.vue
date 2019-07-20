<template>
  <div class="relacao">
    <h2>Relação de Inscritos</h2>
    <table class="table-relacao">
      <thead>
        <tr class="thead">
          <td>Nome</td>
          <td>Curso</td>
          <td class="semestre">Semestre</td>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr class="lista" v-for="(inscricao, index) of inscricoes" :key="index">
          <td>{{ inscricao.nome }}</td>
          <td>{{ inscricao.curso }}</td>
          <td>{{ inscricao.semestre }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'relacao',
    data() {
      return {
        inscricoes: []
      }
    },
    methods: {
      async listar() {
        var res = await fetch('https://engetec-api.herokuapp.com/inscricoes', {
          method: 'GET',
          mode: 'cors'
        })
        res = await res.json()
        this.inscricoes = res
      }
    },
    mounted() {
      this.listar()
    }
  }
</script>

<style>
  table.table-relacao {
    width: 100%;
    margin: 10px 0 20px;
    border-collapse: collapse; 
    /*border: 1px solid #00000080;*/
  }
  tr.thead {
    /*border-bottom: 2px solid #00000080;*/
    background-color: rgba(252, 154, 34, .92);
    font-weight: bold;
  }
  tr.lista {
    /*background-color: #00000005;*/
  }
  tr:nth-child(even) {
    /*background-color: darken(#000, 5%);*/
    background-color: #00000015;
  }
  td {
    padding: 20px;
    /*border-bottom: 1px solid #00000080;*/
    margin: 0;
  }
  @media only screen and (max-width: 767px) {
    thead {
      display: none;
    }
    tr.lista {
      margin: 0 0 15px;
      display: block;
      border-radius: 10px;
      box-shadow: 0 0 1px 1px #00000030;
    }
    td {
      display: block;
      padding: 15px 20px 15px 120px;
      position: relative;
    } 
    td::before {
      content: 'Nome';
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
    td:nth-of-type(2)::before {
      content: 'Curso';
    }
    td:nth-of-type(3)::before {
      content: 'Semestre';
    }
  }
</style>