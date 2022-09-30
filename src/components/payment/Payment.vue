<template>
    <div class="container">        
        <p class="h3 fw-bold text-success">Payment</p>
        <form novalidate @submit.prevent="submitPayment">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3"><strong>Shipping Information</strong></div>
                    <div class="form-group mb-3">
                        <label for="name">Name</label>
                        <input v-model="payment.fullName" type="text" id="name" class="form-control" placeholder="Enter name" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="company">Company Name</label>
                        <input type="text" id="company" class="form-control" placeholder="Company" v-model="payment.company"/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="address1">Address</label>
                        <input type="text" id="address1" class="form-control" placeholder="Street Address" v-model="payment.address1"/>
                    </div>
                    <div class="form-group mb-3" >
                        <label for="address2">Suite/Apartment #</label>
                        <input type="text" id="address2" class="form-control" placeholder="" v-model="payment.address2"/>
                    </div>
                    <div class="row mb-3">
                        <div class="form-group col-md-5">
                            <label for="stateProvince">State</label>
                            <select id="stateProvince" class="form-control" v-model="payment.stateProvince">
                                <option v-for="state in getUSAStates()" :key="state.abbreviation" :value="state.name">{{`${state.name} (${state.abbreviation})`}}</option>                                
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="city">City</label>
                            <select id="city" class="form-control" v-model="payment.city">
                                <option v-for="city1 in cityList.cities" :key="city1" :value="city1">{{`${city1}`}}</option>                                
                            </select>
                        </div>

                        <!-- <div class="form-group col-md-6">
                            <label for="cityTown">City</label>
                            <input type="text" id="cityTown" class="form-control" placeholder="e.g. New York" v-model="payment.city"/>
                        </div>                         -->
                        <div class="form-group col-md-2">
                            <label for="postalCode">Zipcode</label>
                            <input type="text" id="postalCode" class="form-control" placeholder="e.g. 10101" v-model="payment.postalCode"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Next" class="btn btn-success"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div><strong>Billing Information</strong></div>
                </div>
            </div>
        </form>
        <div><pre>{{payment}}</pre></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import usStates from "@/assets/world-knowledge/us_states.json";
import usCities from "@/assets/world-knowledge/US_States_and_Cities.json";

export default defineComponent({
    name: "PaymentComponent",
    components: {  },
    setup() {        
        const payment = ref({
            fullName: "",
            company: "",
            address1: "",
            address2: "",
            city: "",
            stateProvince: "",
            postalCode: ""
        });

        let cityList = ref({
            state: "",
            cities: [] as string[]
        });

        function getUSAStates() {
            return usStates;
        }

        function submitPayment() {
            console.log(payment.value);
        }

        watch(payment.value, function() {          
            if(payment.value.stateProvince) {                  
                let e = Object.entries(usCities);                
                let stateCityList = e.map(([state,cities])=> ({state, cities}));                
                cityList.value = stateCityList.filter((item)=> item.state == payment.value.stateProvince)[0]; 
            }
        });

        return { payment, submitPayment,getUSAStates, cityList };
    }
});

</script>

<style scoped>

</style>