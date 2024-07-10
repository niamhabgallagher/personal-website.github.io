<template>
    <v-app>
        <v-app-bar elevation="0" class="text-center app-bar">
            <v-toolbar-title class="website-title">
                <h1>Niamh Gallagher</h1>
            </v-toolbar-title>

            <!-- <v-tabs
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
            </v-tabs> -->
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
    background-color: $primary !important;
}
.v-card {
    background-color: $primary-2 !important;
}
.app-bar {
    background-color: $primary !important;
    border-bottom: 1px #000 solid;
}

.website-title {
    font-family: 'Dancing Script', sans-serif;
    overflow: visible;
    font-size: 1rem;
    text-align: left;
}
html {
    font-family: Poppins, sans-serif;
}

.v-toolbar-title__placeholder {
    overflow: visible;
}
</style>