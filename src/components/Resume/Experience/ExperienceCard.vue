<template>
    <div class="experience" >
        <div class="position">{{experience.position}}</div>
        <div class="company">{{experience.company}}</div>
        <div class="location">
            <div class="city-state">
                <span class="city">{{experience.location.city}},&nbsp;</span>
                <span class="state">{{experience.location.state}}</span>
            </div>
        </div>
        <div class="time">
            <span class="start">{{experience.startDate}}&nbsp;-&nbsp;</span>
            <span class="end">{{experience.endDate}}</span>
        </div>
        <div class="accomplishments">
            <div class="accomplishment" v-for="accomplishment in experience.accomplishments" v-bind:key="accomplishment">
                {{accomplishment}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import { Experience } from '@/assets/resume/resume.model';

export default Vue.extend({
    props: {
        experience: Object as Prop<Experience>,
    },
});
</script>

<style lang="scss" scoped>

</style>
