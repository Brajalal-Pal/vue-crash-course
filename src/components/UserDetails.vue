<template>
    <div class="container">
        <div class="row">
            <Loader v-if="loading" />
            <div class="col-md-12" v-if="!loading">
                <p class="h3">User Details</p>
                <p>{{ user }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Users } from "@/services/UserService";
import Loader from "./Loader.vue";

export default defineComponent({
    name: "UserDetails",
    components: { Loader },
    data() {
        return {
            loading: false,
            user: {},
            errorMessage: null,
        };
    },
    async created() {
        try {
            this.loading = true;
            let userId = this.$route.params.userId;
            const result = await Users.getUser(userId);
            this.loading = false;
            this.user = result.data;
        } catch (error: any) {
            this.loading = false;
            this.errorMessage = error;
        }
    },
});
</script>

<stryle scoped>

</stryle>
