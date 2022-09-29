<template>
    <div class="container mt-3">
        <div class="row m-3">
            <div class="col">
                <p class="h3 fw-bold text-success">{{ continent }}</p>
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
                                <th>Country</th>
                                <th>Sub-Region</th>
                                <th>Capital</th>
                                <th>Area</th>
                                <th>Flag</th>
                            </tr>
                        </thead>
                        <tbody v-if="!loading">
                            <tr v-for="country in countries" :key="country.cca2">
                                <td>{{ country.cca2 }}</td>
                                <td>
                                    <router-link
                                        class="text-decoration-none fw-bold text-success"
                                        :to="`/countries/${country.cca2}`"
                                        >{{ country.name.common }}</router-link
                                    >
                                </td>
                                <td>{{ country.subregion }}</td>
                                <td>{{ country.capital ? country.capital[0] : undefined }}</td>
                                <td>{{ country.area }}</td>
                                <td> <img :src="country.flags.png" width="100" alt=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                {{ errorMsg }}
            </div>
        </div>
        <div class="overflow-auto">
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>            
            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table
                id="my-table"
                :items="countries"
                :per-page="perPage"
                :current-page="currentPage"
                small
            ></b-table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LocationService } from "@/services/LocationService";
import Loader from "@/components/Loader.vue";

export default defineComponent({
    name: "CountryList",
    components: { Loader },
    data() {
        return {
            currentPage: 1,
            rows: 0,
            perPage: 10,
            continent: "" as string | string[],
            loading: false,
            countries: [],
            errorMsg: "" as string,
        };
    },
    async created() {
        try {
            this.loading = true;
            this.continent = this.$route.params.continent;
            const result = await LocationService.getCountriesByContinent(this.continent);

            this.countries = JSON.parse(JSON.stringify(result.data.data));
            console.log("result", result);

            let { page , per_page, total } = result.data;
            this.currentPage = page;
            this.rows = total;
            this.perPage = per_page;

            // for (let country of JSON.parse(JSON.stringify(result.data.data))) {
            //     //console.log(country);
            //     //console.log(JSON.stringify(country));
            //     console.log(
            //         country.cca2,
            //         country.name.common,
            //         country.subregion,
            //         country.capital && country.capital[0],
            //         country.area,
            //         country.flags.png
            //     );
            // }
            this.loading = false;

            //LocationService.getCurrency("");

        } catch (error: any) {
            console.log(error);

            this.loading = false;
            this.errorMsg = error.message;
        }
    },
});
</script>

<style scoped></style>
