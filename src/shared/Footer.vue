<template>
    <div id="footer">
        <div class="footer-group">

        </div>
        <div class="footer-group">

        </div>
        <div class="footer-group">
            <div class="footer-group-row">
                <a href="https://github.com/abelgoodwin1988">
                    <font-awesome-icon :icon="['fab', 'github-alt']" />
                </a>
                <a href="https://www.linkedin.com/in/abelgoodwin/">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
            </div>
            <div class="footer-group-row">
                <a href="https://www.twitch.tv/hamp_tv/">
                    <font-awesome-icon :icon="['fab', 'twitch']" />
                </a>
                <a href="https://twitter.com/abelgoodwin1988">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
    #footer {
        @include flex(row, space-between, center);
        flex: 1 0 auto;
        width: 100%;
        height: 12vmin;
        padding: 0 3vmin;
        background: linear-gradient(to right,rgba(36,41,46,.9), rgba(58, 67, 75, .90));
        box-shadow: inset 0px 1px 0px 0px rgba(36,41,46,1);

        .footer-group {
            @include flex(column, center, space-between);
            
            .footer-group-row {
                @include flex(row, center, center);

                a {
                    text-decoration: none;
                    color: $color-primary;
                }
                a:hover {
                    color: $color-secondary;
                }
            }
        }

    }
</style>
