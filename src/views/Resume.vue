<template>
    <div id="resume">

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
})
</script>

<style lang="scss" scoped>
    #resume {
        height: 100%;
        width: 100%;
    }
</style>
