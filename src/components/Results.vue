<script setup>
import { useZipStore } from "../stores/zipStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useZipStore();
const { infoZip, statusZip, statusIP, infoIP } = storeToRefs(store);

const url = ref(document.referrer);
const utmTags = new URLSearchParams(window.location.search);
const userAgent = ref(navigator.userAgent);
</script>
<template>
    <div class="results">
        <p>HTTP Referer: {{ url }}</p>
        <p>UTM tags: {{ utmTags.toString() }}</p>
        <p>User Agent: {{ userAgent }}</p>
        <p class="zipInfo" v-if="statusZip === 'loaded'">
            StateZip: {{ infoZip.places[0].state }}
        </p>
        <p class="zipInfo" v-if="statusZip === 'loaded'">
            CityZIp: {{ infoZip.places[0]["place name"] }}
        </p>
        <p class="ipInfo" v-if="statusIP === 'loaded'">
            ISP: {{ infoIP.asn.name }}
        </p>
        <p class="ipInfo" v-if="statusIP === 'loaded'">
            City: {{ infoIP.city }}
        </p>
        <p class="ipInfo" v-if="statusIP === 'loaded'">
            Country: {{ infoIP.country_name }}
        </p>
        <p class="ipInfo" v-if="statusIP === 'loaded'">
            Region: {{ infoIP.region }}
        </p>
    </div>
</template>
<style scoped>
.results {
    padding-top: 30px;
    width: 1200px;
    margin: 0 auto;
}
.results p {
    margin: 10px 0;
    color: white;
    border: 1px solid white;
    padding: 5px;
}
p.zipInfo {
    color: rgb(189, 174, 255);
    border: 1px solid rgb(189, 174, 255);
}
p.ipInfo {
    color: rgb(255, 255, 56);
    border: 1px solid rgb(255, 255, 56);
}
</style>
