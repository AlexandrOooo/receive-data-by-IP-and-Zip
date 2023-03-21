<script setup>
import { useZipStore } from "../stores/zipStore";
import { storeToRefs } from "pinia";

const store = useZipStore();
const { zipcode } = storeToRefs(store);
</script>

<template>
    <div class="form">
        <input type="text" v-model="zipcode" />
        <button
            class="btn"
            style="margin: 0 10px"
            @click="store.fetchInfoZipcode()"
        >
            receive data by ZipCode
        </button>
        <button class="btn" @click="store.fetchInfoIP()">
            receive data by IP
        </button>
    </div>
</template>
<style>
.form {
    margin: 0 auto;
    width: 700px;
    display: flex;
}
.btn {
    background: rgb(31, 31, 72);
    border: none;
    color: white;
    padding: 10px 30px;
    cursor: pointer;
}
</style>
