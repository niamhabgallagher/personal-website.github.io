<template>
    <v-app>
        <v-app-bar color="#ef3167" elevation="0" class="text-center">
            <v-toolbar-title style="color: #fff; font-weight: bold;">
                Niamh Gallagher
            </v-toolbar-title>

            <v-tabs
            v-model="tab"
            align-tabs="title"
            style="justify-content: center;"
            >
                <v-tab
                    v-for="item in tabs"
                    :key="item"
                    :value="item"
                >
                    {{ item }}
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            tabs: [ 'About Me', 'Work', 'Contact Me' ]
        }
    }
}
</script>

<style>
.v-application {
    background-color: #ffdadf !important;
}
.v-card {
    background-color: #ffdadf !important;
}
</style>