<template>
    <div id="footer">
        <div class="footer-group">

        </div>
        <div class="footer-group">

        </div>
        <div class="footer-group">
            <div class="footer-group-row">
                <font-awesome-icon icon="github-alt" />
                <font-awesome-icon icon="linkedin-in" />
            </div>
            <div class="footer-group-row">
                <font-awesome-icon icon="twitch" />
                <font-awesome-icon icon="twitter" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
});
</script>

<style lang="scss" scoped>
    #footer {
        @include flex(row, flex-start, center);
        flex: 1 0 auto;
        width: 100%;
        height: 12vmin;
        background: linear-gradient(to right,rgba(0,0,0,.9), rgba(13, 13, 13, .90));
        box-shadow: inset 0px -1px 0px 0px rgba(0,0,0,1);

        .footer-group {
            @include flex(column, center, flex-end);

            .footer-group-row {
                @include flex(row, center, center);
            }
        }

    }
</style>
