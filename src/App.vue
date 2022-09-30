<template>
    <NavBar />
    <span style="height: 20px">&nbsp;</span>
    <router-view />
    <footer class="text-dark text-center fw-bold">&copy; 2022, Developed by Brajalal Pal</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
    name: "AppComponent",
    components: { NavBar },
    data() {
        return {};
    },
});
</script>

<style>
@import "./styles.css";
</style>
