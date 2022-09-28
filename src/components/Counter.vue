<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <p class="h3">Counter Demo - Event handling</p>
                <div class="card shadow-lg">
                    <div class="card-body">
                        <p class="h3 display-3">{{count}}</p>
                        <button class="btn btn-success m-1" @click="incr">Increment</button>
                        <button class="btn btn-warning m-1" @click="decr">Decrement</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CounterComponent",
    data() {
        return {
            count: 0            
        }
    },
    methods: {
        incr() {
            this.count += 1;
        },
        decr() {
            this.count -= 1;
        },
    }
});
</script>

<style scoped>

</style>
