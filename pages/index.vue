<template>
    <div>
        <v-row class="text-center" style="margin-top: 5vh;">
            <v-col cols="12">
                <v-avatar image="/images/selfie.jpg" size="300"></v-avatar>
            </v-col>
            <v-col>
                <!-- Intro in irish -->
                <h2>Dia Duit! Is mise Niamh!</h2>
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
        <v-row>
            <v-col offset="1" cols="10">
                <h2 class="subtitle">About Me</h2>
            </v-col>
        </v-row>
    </div>
</template>

<script>
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
</style>