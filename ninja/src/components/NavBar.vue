<template>    
  <nav>
    <div class="nav-wrapper">
      <router-link :to="{name: 'Home'}" class="brand-logo center">Ninja Juice</router-link>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li class="active"><a href="collapsible.html">JavaScript</a></li>
      </ul>
        <router-link :to="{name: 'NewJuice'}" class="btn-floating btn-large halfway-fab waves-effect  black"><i class="material-icons">add</i></router-link>
    </div>
  </nav>   
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
