<script setup>
import ContactDataComponent from '../header/ContactDataComponent.vue';
import NavigationComponent from '../header/NavigationComponent.vue';
import AboutComponent from '../about/AboutComponent.vue';
import FactsComponent from '../facts/FactsComponent.vue';
import FeaturesComponent from '../features/FeaturesComponent.vue';
import ServicesComponent from '../services/ServicesComponent.vue';
import PricesComponent from '../pricing/PricingComponent.vue';
import QuotesComponent from '../quotes/QuotesComponent.vue';
import TestimonialsComponent from '../testimonials/TestimonialsComponent.vue';
import TeamComponent from '../team/TeamComponent.vue';
import BlogComponent from '../blog/BlogComponent.vue';
import VendorComponent from '../vendor/VendorComponent.vue';
import FooterComponent from '../footer/FooterComponent.vue';
import useProductStore from '../../stores/ProductStore';
import { storeToRefs } from 'pinia';

const { MarkItems } = storeToRefs(useProductStore());


</script>

<template>
    <div>
        <!-- <ContactDataComponent /> -->
        <NavigationComponent />
        <FactsComponent />
        <AboutComponent />
        <FeaturesComponent />
        <ServicesComponent />
        <!-- <PricesComponent /> -->
        <!-- <TestimonialsComponent /> -->
        <!-- <TeamComponent /> -->
        <BlogComponent v-for="mark in MarkItems" :Mark="mark.Name" :Items="mark.Products" :Folder="mark.Folder"
            :Id="mark.Id" />
        <QuotesComponent />
        <!-- <VendorComponent /> -->
        <FooterComponent />
    </div>
</template>

<style scoped></style>
