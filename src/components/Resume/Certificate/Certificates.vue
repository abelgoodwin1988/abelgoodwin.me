<template>
    <div id="certificates">
        <div id="certificates-label">
            Certificates
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
        @include flex(column, flex-start, flex-start);
        border-radius: 1vmin;

        #certificates-label{
            font-size: 6vmin;
            color: $font-color-primary;
        }

        .certificate {
            background: $card-fade;
            padding: 2px;
            min-height: 8vmin;
            min-width: 50vmin;
            
            .certificate-wrapper {
                @include flex(column, flex-start, center);
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

