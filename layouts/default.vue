<template>
    <v-app>
        <v-app-bar color="#ef3167" elevation="0" class="text-center">
            <v-toolbar-title style="color: #fff; font-weight: bold;">
                Niamh Gallagher
            </v-toolbar-title>
        </v-app-bar>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<style>
.v-application {
    background-color: #ffdadf !important;
}
.v-card {
    background-color: #ffdadf !important;
}
</style>