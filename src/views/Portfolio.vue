<template>
    <div id="portfolio">
        <template v-for="presentation in presentations.presentations">
            <div class="presentation" :key="presentation.title">
                <PresentationCard :presentation="presentation"/>
            </div>
        </template>
        <template v-for="project in portfolio.projects">
            <div class="portfolio" :key="project.title">
                <ProjectCard :project="project"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portfolio } from '@/assets/portfolio/portfolio';
import * as pType from '@/assets/portfolio/portfolio.model';
import ProjectCard from '@/components/Portfolio/ProjectCard.vue';
import { Presentations } from '@/assets/portfolio/presentation';
import * as prType from '@/assets/portfolio/presentation.model';
import PresentationCard from '@/components/Portfolio/PresentationCard.vue';

export default Vue.extend({
    data(): {
        presentations: prType.Presentations;
        portfolio: pType.Portfolio;
    } {
        return {
            presentations: Presentations,
            portfolio: Portfolio,
        };
    },
    components: {
        PresentationCard,
        ProjectCard,
    },
});
</script>

<style lang="scss" scoped>
    #portfolio {

        .portfolio {

        }
    }
</style>
