import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useZipStore = defineStore("counter", () => {
    const zipcode = ref("35201");
    const statusZip = ref("empty");
    const statusIP = ref("empty");

    const infoIP = ref({});
    const infoZip = ref({});
    async function fetchInfoZipcode() {
        try {
            const { data } = await axios.get(
                `https://api.zippopotam.us/us/${zipcode.value}`
            );
            infoZip.value = data;
            statusZip.value = "loaded";
        } catch (err) {
            console.log(err);
            statusZip.value = "error";
        }
    }
    async function fetchInfoIP() {
        try {
            const { data } = await axios.get(
                `https://api.ipify.org?format=json`
            );
            const response = await axios.get(
                `https://api.ipdata.co/${data.ip}?api-key=2197f7e431a464701dc1ad2aa7a772ce28de3288c6aac3140bcd4133`
            );
            statusIP.value = "loaded";
            infoIP.value = response.data;
        } catch (err) {
            console.log(err);
            statusIP.value = "error";
        }
    }

    return {
        infoZip,
        infoIP,
        zipcode,
        statusZip,
        statusIP,
        fetchInfoZipcode,
        fetchInfoIP,
    };
});
