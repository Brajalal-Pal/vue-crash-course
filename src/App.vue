<template>
  <NavBar/>
  <span style="height:20px;">&nbsp;</span>
  <router-view />  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "@/components/NavBar.vue";


export default defineComponent({
  name: "AppComponent",
  components: { NavBar },
  data() {
    return {
      
    }
  }
})


</script>

<style>
@import "./styles.css";
</style>
