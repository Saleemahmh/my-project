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

