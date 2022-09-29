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
                                <td>{{ country.flags.png }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                {{ errorMsg }}
            </div>
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
            continent: "Asia",
            loading: false,
            countries: [],
            errorMsg: null,
        };
    },
    async created() {
        try {
            this.loading = true;
            let continent: string | string[] = this.$route.params.continent;
            const result = await LocationService.getCountriesByContinent(continent);

            this.countries = JSON.parse(JSON.stringify(result.data.data));
            //console.log("result", this.countries);
            for (let country of JSON.parse(JSON.stringify(result.data.data))) {
                //console.log(country);
                //console.log(JSON.stringify(country));
                console.log(
                    country.cca2,
                    country.name.common,
                    country.subregion,
                    country.capital && country.capital[0],
                    country.area,
                    country.flags.png
                );
            }
            this.loading = false;
        } catch (error: any) {
            console.log(error);

            this.loading = false;
            this.errorMsg = error.message;
        }
    },
});
</script>

<style scoped></style>
