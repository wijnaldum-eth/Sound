<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/stake">Stake</router-link>
      <router-link to="/unbond">Unbond</router-link>
      <router-link to="/claim">Claim</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* ... styles ... */
</style>