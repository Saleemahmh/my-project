<template lang="html">
  <div id="app">
  <h1 class="text-center">Simple Vue Js Application</h1>
  <br/>
  <router-link to="/addlist" class="btn btn-primary btn-lg"><span
    class="glyphicon glyphicon-user" style="color: white;"></span> Add Person</router-link>
  <router-link to="/" class="btn btn-primary btn-lg"><span
    class="glyphicon glyphicon-home" style="color: white;"></span> Home</router-link>
<router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.panel {
    margin: 5%;
    background: transparent;
  }
  tr {
    transition: all 0.5s;
  }

  tr:hover {
    background-color: #f0ad4e;
    transition: 0.5s;
  }
  body {

    background-color: none;
    font: oblique;
    size: 18;
    font-family: 'Didot-Italic';
    font-style: italic;
    color: #B22222;
    text-align: center;
  }

  .panel-default {
    background: transparent !important;
    border: transparent !important;
    /* font-family: 'Didot-Italic'; */
    font-style: italic;
    font-size: 20px;
  }
</style>
