<template>
    <div class="education">
        <div class="university">
            {{education.university}}
        </div>
        <div class="degree">
            {{education.degree}}
        </div>
        <div class="time">
            <span class="start">{{education.startDate}}&nbsp;-&nbsp;</span>
            <span class="end">{{education.endDate}}</span>
        </div>
        <div class="location">
            <span class="city">{{education.location.city}},&nbsp;{{education.location.state}}</span>
        </div>
        <div class="description">{{education.description}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Education } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        education: Object as Prop<Education>,
    },
});
</script>

<style lang="scss" scoped>

</style>

