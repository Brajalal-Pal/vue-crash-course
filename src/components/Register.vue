<template>    
    <div class="container" >
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-lg">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Register Here</p>
                    </div>
                    <div class="card-body bg-light">
                        <form @submit.prevent="register">
                            <div class="mb-2">
                                <input class="form-control" placeholder="Name" type="text" v-model="user.name"/>
                            </div>
                            <div class="mb-2">
                                <input class="form-control" placeholder="Email" type="email" v-model="user.email"/>
                            </div>
                            <div class="mb-2">
                                <input class="form-control" placeholder="Password" type="password" v-model="user.password"/>
                            </div>
                            <div class="mb-2">
                                <input class="btn btn-success" value="Register" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RegisterComponent",
    data() { //States
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }          
        }
    },
    methods: {
        register () {
            console.log(this.user)
        }
    }
});
</script>

<style scoped>

</style>
