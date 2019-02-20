<template>
    <div id="certificates">
        <div class="certificate" v-for="certificate in certificates" v-bind:key="certificate.name">
            <a :href="certificate.url">
                <font-awesome-icon v-if="certificate.hasOwnProperty('faIcon')" class="fa-icon" :icon="['fab', certificate.faIcon]" />
                <div class="name">{{certificate.name}}</div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Certificate } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        certificates: Array as Prop<Certificate[]>,
    },
});
</script>

<style lang="scss" scoped>

</style>

