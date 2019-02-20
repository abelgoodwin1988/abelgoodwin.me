<template>
    <div id="resume">
        <div id="summary">
            {{resume.summary}}
        </div>
        <template v-if="resume.hasOwnProperty('experience') && resume.experience.length > 0">
            <Experience :experiences="resume.experience"/>
        </template>
        <template v-if="resume.hasOwnProperty('education') && resume.education.length > 0">
            <div id="education">
                <div class="education" v-for="education in resume.education" v-bind:key="education.university+education.description">
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
            </div>
        </template>
        <template v-if="resume.hasOwnProperty('certificates') && resume.certificates.length > 0">
            <div id="certificates">
                <div class="certificate" v-for="certificate in resume.certificates" v-bind:key="certificate.name">
                    <a :href="certificate.url">
                        <font-awesome-icon v-if="certificate.hasOwnProperty('faIcon')" class="fa-icon" :icon="['fab', certificate.faIcon]" />
                        <div class="name">{{certificate.name}}</div>
                    </a>
                </div>
            </div>
        </template>
        <template v-if="resume.hasOwnProperty('skills') && resume.skills.length > 0">
            <div id="skills">
                <div class="skill" v-for="skill in resume.skills" :key="skill.name">
                    {{skill.name}}
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Experience from '@/components/Resume/Experience/Experience.vue';
import Education from '@/components/Resume/Education/Education.vue';
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
    },
});

</script>

<style lang="scss" scoped>
    #resume {
        height: 100%;
        width: 100%;
    }
</style>
