<template>
    <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/"><span class="fw-bold">World Geo-Stats</span></router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/users">Users</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/continents">Continents</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/counter">Counter</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/props">Props</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/states">States</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/payment">Payment</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/test">TestPage</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavBar",
    components: {},
});
</script>

<style scoped></style>
