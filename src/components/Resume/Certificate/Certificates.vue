<template>
    <div id="certificates">
        <div class="section">
            <div class="section-title">CERTIFICATES&nbsp;</div>
            <div class="section-rule"></div>
        </div>

        <div class="certificate" v-for="certificate in certificates" v-bind:key="certificate.name">
            <div class="certificate-wrapper">
                <a class="certificate-link" :href="certificate.url">
                    <font-awesome-icon v-if="certificate.hasOwnProperty('faIcon')" class="fa-icon" :icon="['fab', certificate.faIcon]" />
                    <div class="name">{{certificate.name}}</div>
                </a>
            </div>
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
    $card-fade: linear-gradient(170deg, rgba(96, 110, 123, .7), rgba(245, 245, 245, .5));

    #certificates {

        .section {
            @include flex(row, flex-start, center);

            .section-title {
                font-size: 2vmin;
            }
            .section-rule {
                height: 1px;
                width: 100%;
                flex-grow: 1;
                background: $banner-fade;
            }

            
        }

        .certificate {
            @include flex(row, flex-start, center);
            max-width: 60vmin;
            flex-shrink: 1;
            background: $card-fade;
            padding: 2px;
            margin: 3vmin 0 0 0;
            min-height: 8vmin;
            
            .certificate-wrapper {
                @include flex(column, flex-start, center);
                width: 100%;
                background: $color-secondary;
                padding: 2px;
                min-height: calc(8vmin - 2px);

                .certificate-link {
                    @include flex(row, center, center);
                    flex: 1 1 auto;
                    color: $font-color-tertiary;
                    text-decoration: none;
                    
                    .fa-icon {
                        font-size: 5vmin;
                        padding: 1vmin;
                    }
                    .name {
                        font-size: 3vmin;
                    }
                }
                .certificate-link:hover {
                    cursor: pointer;
                    color: $font-color-primary;
                }
            }
        }
    }
</style>

