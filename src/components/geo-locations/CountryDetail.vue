<template>
    <div class="container mt-3">
        <div class="row m-3">
            <div class="col">
                <p class="h3 fw-bold text-success">
                    {{ `${country.continents.map((c) => c).join(",")} -> ${countryName} (${country.cca3})` }}
                </p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae ratione aspernatur error rem
                    aliquam ullam iste dolorem esse quo, quis nam nulla excepturi nihil obcaecati voluptatem fugiat
                    dignissimos provident?
                </p>
            </div>
            <Loader v-if="loading" />
            <div class="row" v-if="!loading">
                <div class="col-md-6">
                    <p class="h3 fw-bold text-info">Flag</p>
                    <div class="row">
                        <img :src="country.flags.svg" alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="h3 fw-bold text-info">Country Profile</p>

                    <ul class="list-group">
                        <li class="list-group-item">Official Name: {{ country.name.official }}</li>
                        <li class="list-group-item">Currencies: {{ getCurrencyList(country.currencies) }}</li>
                        <li class="list-group-item">Time Zones: {{ country.timezones.map((t) => t).join(",") }}</li>
                        <li class="list-group-item">Region: {{ country.region }}</li>
                        <li class="list-group-item">Sub-region: {{ country.subregion }}</li>
                        <li class="list-group-item">Continents: {{ country.continents.map((c) => c).join(",") }}</li>
                        <li class="list-group-item">Languages: {{ Object.values(country.languages).join(",") }}</li>
                        <li class="list-group-item">Population: {{ country.population }}</li>
                        <li class="list-group-item">Area: {{ country.area }}</li>
                        <li class="list-group-item">Capital: {{ Object.values(country.capital).join(",") }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <button class="btn btn-primary m-3" @click="$router.go(-1)">Previouse Page</button>
        <pre v-if="true">{{ country }}</pre>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LocationService } from "@/services/LocationService";
import Loader from "@/components/Loader.vue";
import { Country } from "@/services/functions";

export default defineComponent({
    name: "CountryDetail",
    components: { Loader },
    data() {
        return {
            countryName: "" as string,
            loading: false,
            country: {} as Country,
            errorMsg: "" as string,
        };
    },
    methods: {
        getCurrencyList(currencies: object) {
            return LocationService.getCurrency(currencies);
        },
    },
    async created() {
        try {
            this.loading = true;
            this.countryName = this.$route.params.country as string;
            const result = await LocationService.getCountryDetails(this.countryName);
            this.country = result.data.data[0];
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
