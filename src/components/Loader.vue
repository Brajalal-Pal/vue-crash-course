<template>
    <div class="container" style="text-align: center ;">
        <div class="row">            
            <div class="loader"></div>            
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoaderComponent"
});

</script>

<style scoped>
.align-center {
    text-align: center;
}
.loader {
    margin: auto;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>