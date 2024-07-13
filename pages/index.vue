<template>
    <div>
        <v-row class="text-center" style="margin-top: 5vh;">
            <v-col cols="12">
                <v-avatar image="/images/selfie.jpg" size="300"></v-avatar>
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
            <!-- <v-col cols="4"></v-col>
            <v-col offset="3" cols="2">
                <img class="experience" src="/images/experience-logos/vuejs.webp" />
            </v-col>
            <v-col cols="2">
                <img class="experience" src="/images/experience-logos/nuxt.png" />
            </v-col>
            <v-col cols="2">
                <img class="experience" src="/images/experience-logos/JavaScript.png" />
            </v-col>
            <v-col cols="3"></v-col>
            <v-col offset="3" cols="2">
                <img class="experience" src="/images/experience-logos/typescript.png" />
            </v-col>
            <v-col cols="2">
                <img class="experience" src="/images/experience-logos/html.png" />
            </v-col>
            <v-col cols="2">
                <img class="experience" style="width: 70%;" src="/images/experience-logos/css.svg" />
            </v-col> -->

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
.cupcake-square {
    background-image: url(/images/cupcake.jpeg);
}
.community-square {
    background-image: url(/images/women-in-tech.JPG);
}
.personal-square {
    background-image: url(/images/festival-essentials.jpeg);
}
.personal-square-2 {
    background-image: url(/images/soup-hat.jpeg);
}
.image-square {
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    min-height: 350px;
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