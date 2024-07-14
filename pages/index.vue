<template>
    <div>
        <v-row class="text-center" style="margin-top: 5vh;">
            <v-col cols="12">
                <v-avatar size="300">
                    <img src="/images/selfie.jpg" style="width: 100%;" />
                </v-avatar>
            </v-col>
            <v-col>
                <!-- Intro in irish -->
                <h2>Dia Duit! Is mise Niamh! 🇮🇪</h2>
            </v-col>
            <v-col cols="12">
                <!-- intro in english -->
                <h2>Hello! My name is Niamh!</h2>
            </v-col>
            <v-col cols="12">
                <v-btn icon="mdi-github" class="social-btns" 
                    href="https://github.com/niamhabgallagher" target="_blank"></v-btn>
                <v-btn icon="mdi-linkedin" class="social-btns" 
                    href="https://www.linkedin.com/in/niamhabgallagher/" target="_blank"></v-btn>
                <v-btn icon="mdi-email" class="social-btns"
                    href="mailto:niamhabgallagher14@gmail.com" target="_blank"></v-btn>
            </v-col>
        </v-row>
        <AboutMe />
        <v-row style="margin-bottom: 5vh; margin-top: 5vh;" class="text-center">
            <v-col offset="1" cols="10" offset-md="2" md="8" class="text-left">
                <h2 class="subtitle">Experience</h2>
            </v-col>
            <v-col cols="1" md="2"></v-col>
            <v-col offset="4" cols="4">
                <v-divider class="border-opacity-50"></v-divider>
            </v-col>
            <v-col cols="12">
                <ExperienceSlide />
            </v-col>
            <v-col offset="4" cols="4">
                <v-divider class="border-opacity-50"></v-divider>
            </v-col>
        </v-row>
        <Footer />
    </div>
</template>

<script>
import ExperienceSlide from "~/components/ExperienceSlide.vue";
import Footer from "~/components/Footer.vue";
import AboutMe from "~/components/AboutMe.vue";

export default {
    components: {
        ExperienceSlide,
        Footer,
        AboutMe
    }
}
</script>

<style lang="scss">
.social-btns {
    margin: 10px;
    background-color: $primary-2;
}

.subtitle {
    font-size: 2rem;
    font-style: italic;
}
p {
    font-size: 18px;
}
.experience {
    width: 100%;
}
.v-row {
    margin: 0 !important;
}
</style>