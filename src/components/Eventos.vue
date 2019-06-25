<template>
  <div class="eventos">
    <h2>Eventos</h2>
    <div class="evento">
      <div class="img-evento">
        <img src="http://lorempixel.com/300/200/cats/">
      </div>
      <div class="detalhes">
        <p><strong>Nome: </strong> Consectetur adipisicing elit</p>
        <p>
          <strong>Local: </strong>
          Bloco 5
        </p>
        <p>
          <strong>Data: </strong>
          23/09/2019
        </p>
        <p class="descricao">
          <strong>Descrição: </strong>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="evento">
      <div class="img-evento">
        <img src="http://lorempixel.com/300/200/people/">
      </div>
      <div class="detalhes">
        <p>
          <strong>Nome: </strong> Consectetur adipisicing elit
        </p>
        <p>
          <strong>Local: </strong>
          Bloco 5
        </p>
        <p>
          <strong>Data: </strong>
          23/09/2019
        </p>
        <p class="descricao">
          <strong>Descrição: </strong>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="evento">
      <div class="img-evento">
        <img src="http://lorempixel.com/300/200/sports/">
      </div>
      <div class="detalhes">
        <p><strong>Nome: </strong> Consectetur adipisicing elit</p>
        <p>
          <strong>Local: </strong>
          Bloco 5
        </p>
        <p>
          <strong>Data: </strong>
          23/09/2019
        </p>
        <p class="descricao">
          <strong>Descrição: </strong>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="evento">
      <div class="img-evento">
        <img src="http://lorempixel.com/300/200/nature/">
      </div>
      <div class="detalhes">
        <p><strong>Nome: </strong> Consectetur adipisicing elit</p>
        <p>
          <strong>Local: </strong>
          Bloco 5
        </p>
        <p>
          <strong>Data: </strong>
          23/09/2019
        </p>
        <p class="descricao">
          <strong>Descrição: </strong>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eventos'
}
</script>

<style>
  .evento {
    display: block;
    min-height: 200px;
    margin: 10px 0 30px 0;
  }
  .img-evento {
    float: left;
    margin-right: 10px;
  }
  .detalhes {
    line-height: 150%;
    display: block;
  }
  .descricao {
    text-align: justify;
  }
</style>