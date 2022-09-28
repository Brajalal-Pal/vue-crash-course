<template>
    <div class="container mt-3">
        <div class="row m-3">
            <div class="col">
                <p class="h3 fw-bold text-success">User List</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae ratione aspernatur error rem aliquam ullam iste dolorem esse quo, quis nam nulla excepturi nihil obcaecati voluptatem fugiat dignissimos provident?
                </p>
            </div>            
            <Loader v-if="loading"/>
            <div class="row" v-if="!loading">
                <div class="col">                    
                    <table class="table table-hover text-center table-striped">
                        <thead class="bg-success text-white">
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Website</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-if="!loading">
                            <tr  v-for="user in users" :key="user.id">
                                <td>{{user.id}}</td>
                                <td><router-link class="text-decoration-none fw-bold text-success" :to="`/users/${user.id}`">{{user.name}}</router-link></td>
                                <td>{{user.email}}</td>
                                <td>{{user.company.name}}</td>
                                <td>{{user.website}}</td>
                                <td>{{user.address.city}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Users } from "@/services/UserService";
import Loader from "./Loader.vue";

export default defineComponent({
    name: "UserList",
    components: { Loader},
    data() {
        return {
            loading: false,
            users: [],
            errorMsg: null
        }
    },
    async created () {
        try {
            this.loading = true;
            const result = await Users.getAllUsers();
            this.loading = false;
            this.users = result.data;    
        } catch (error: any) {
            this.loading = false;
            this.errorMsg = error;
        }
        
    }
})
</script>

<style scoped>

</style>