<template>
    <div id="education">
        <template v-for="education in educations">
            <EducationCard :education="education" v-bind:key="education.university+education.description"/>           
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EducationCard from './EducationCard.vue';
import { Prop } from 'vue/types/options';
import { Education } from '@/assets/resume/resume.model';
export default Vue.extend({
    props: {
        educations: Array as Prop<Education[]>,
    },
    components: {
        EducationCard,
    },
});
</script>

<style lang="scss" scoped>

</style>
