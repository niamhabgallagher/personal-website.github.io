<template>
    <v-app>
        <v-app-bar elevation="0" class="text-center app-bar">
            <v-toolbar-title style="color: #fff; font-weight: bold;">
                Niamh Gallagher
            </v-toolbar-title>

            <v-tabs
            v-model="tab"
            align-tabs="title"
            style="justify-content: center; color: #fff;"
            >
                <v-tab
                    v-for="item in tabs2"
                    :key="item.title"
                    :value="item.title"
                    :to="item.path"
                >
                    {{ item.title }}
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
            tabs: [ 'About Me', 'Work', 'Contact Me' ],
            tabs2: [
                {
                    title: 'About Me',
                    path: '/about-me'
                },
                {
                    title: 'Work',
                    path: '/work'
                },
                {
                    title: 'Contact Me',
                    path: '/contact'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.v-application {
    background-color: $bg-light !important;
}
.v-card {
    background-color: $bg-light !important;
}
.app-bar {
    background-color: $primary !important;
}
</style>