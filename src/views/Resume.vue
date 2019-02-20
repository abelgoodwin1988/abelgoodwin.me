<template>
    <div id="resume">
        <div id="summary">
            {{resume.summary}}
        </div>
        <template v-if="resume.hasOwnProperty('experience') && resume.experience.length > 0">
            <Experience :experiences="resume.experience"/>
        </template>
        <template v-if="resume.hasOwnProperty('education') && resume.education.length > 0">
            <Education :educations="resume.education" />
        </template>
        <template v-if="resume.hasOwnProperty('certificates') && resume.certificates.length > 0">
            <Certificates :certificates="resume.certificates" />
        </template>
        <template v-if="resume.hasOwnProperty('skills') && resume.skills.length > 0">
            <Skills :skills="resume.skills" />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Experience from '@/components/Resume/Experience/Experience.vue';
import Education from '@/components/Resume/Education/Education.vue';
import Certificates from '@/components/Resume/Certificate/Certificates.vue';
import Skills from '@/components/Resume/Skills/Skills.vue';
import { Resume } from '@/assets/resume/resume';
import * as rType from '@/assets/resume/resume.model';

export default Vue.extend({
    data(): {
        resume: rType.Resume;
    } {
        return {
            resume: Resume,
        };
    },
    components: {
        Experience,
        Education,
        Certificates,
        Skills,
    },
});

</script>

<style lang="scss" scoped>
    #resume {
        height: 100%;
        width: 100%;
    }
</style>
