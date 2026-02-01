<template>
  <div id="app">
    <nav>
           <router-link to="/">Home</router-link>
           <router-link to="/pts">Pts</router-link>
           <router-link to="/pts/1">PT Details</router-link>
           <router-link to="/register">Register</router-link>
           <router-link to="/requests">PT requests</router-link>
    </nav>
    <router-view />
  </div>
  
</template>

<script>
export default {
  
}
</script>

