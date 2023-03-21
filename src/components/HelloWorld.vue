<script setup>
import { storeToRefs } from 'pinia';
import useProductStore from '../stores/ProductStore';

defineProps({
  msg: String
})

const { count } = storeToRefs(useProductStore());
const { increment } = useProductStore();
</script>

<template>
  <button v-on:click="increment">{{ count }}</button>
</template>

<style scoped>

</style>
