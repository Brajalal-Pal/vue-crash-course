<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3">State Demo</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name: {{employee.name}}
                    </li>
                    <li class="list-group-item">
                        Age: {{employee.age}}
                    </li>
                    <li class="list-group-item">
                        Designation: {{employee.designation}}
                    </li>
                </ul>
            </div>
        </div>        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "StateDemo",
    data() { //Managing states
        return {
            employee: {
                name: 'Alen',
                age: 30,
                designation: 'Developer'
            }            
        }
    }
});
</script>

<style scoped>

</style>
