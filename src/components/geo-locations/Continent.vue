<template>
    <div class="container mt-3">
        <div class="row m-3">
            <div class="col">
                <p class="h3 fw-bold text-success">Continent List</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae ratione aspernatur error rem
                    aliquam ullam iste dolorem esse quo, quis nam nulla excepturi nihil obcaecati voluptatem fugiat
                    dignissimos provident?
                </p>
            </div>
            <Loader v-if="loading" />
            <div class="row" v-if="!loading">
                <div class="col">
                    <table class="table table-hover text-center table-striped">
                        <thead class="bg-success text-white">
                            <tr>
                                <th>#</th>
                                <th>Continent</th>
                                <th>Population</th>
                                <th>Area</th>
                                <th>Density</th>
                                <th>World Population Share</th>
                            </tr>
                        </thead>
                        <tbody v-if="!loading">
                            <tr v-for="continent in continents" :key="continent.abr">
                                <td>{{ continent.abr }}</td>
                                <td>
                                    <router-link
                                        class="text-decoration-none fw-bold text-success"
                                        :to="`/continents/${continent.name}`"
                                        >{{ continent.name }}</router-link
                                    >
                                </td>
                                <td>{{ continent.population }}</td>
                                <td>{{ continent.area }}</td>
                                <td>{{ continent.density }}</td>
                                <td>{{ continent.populationShare }}</td>
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
import { LocationService } from "@/services/LocationService";
import Loader from "@/components/Loader.vue";

export default defineComponent({
    name: "ContinentList",
    components: { Loader },
    data() {
        return {
            loading: false,
            continents: [],
            errorMsg: null,
        };
    },
    async created() {
        try {
            this.loading = true;
            const result = await LocationService.getContinentList();
            this.loading = false;
            this.continents = result.data;
        } catch (error: any) {
            this.loading = false;
            this.errorMsg = error;
        }
    },
});
</script>

<style scoped></style>
