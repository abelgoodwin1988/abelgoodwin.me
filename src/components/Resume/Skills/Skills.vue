<template>
    <div id="skills">
        <div class="skill" v-for="skill in skills" :key="skill.name">
            {{skill.name}}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Skill } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';

export default Vue.extend({
    props: {
        skills: Array as Prop<Skill[]>,
    },
});
</script>

<style lang="scss" scoped>

</style>
