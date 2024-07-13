<template>
    <v-row>
        <v-col offset="1" cols="10" offset-md="2" md="8">
            <h2 class="subtitle">About Me</h2>
        </v-col>
        <v-col offset="1" cols="10" offset-md="2" md="4">
            <div class="cupcake-square image-square"></div>
        </v-col>
        <v-col offset="1" cols="10" offset-md="0" md="4">
            <v-card style="height: 100%; border-radius: 15px;">
                <v-card-title style="margin-top: 1rem;"><h3>Work 💼</h3></v-card-title>
                <v-card-text>
                    <p>
                        <br/>
                        I'm a front end web developer at vTime in the Baltic Triangle area of 
                        Liverpool. I have over 3 years experience working with Nuxt and Vue 
                        technologies.
                        <br/> <br/>
                        I've worked in the Baltic Triangle the whole time I have lived in 
                        Liverpool, in the same building! First for The Baltic Social and 
                        then I moved upstairs to vTime!
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col offset="1" cols="10" offset-md="2" md="4">
            <v-card style="height: 100%; border-radius: 15px;">
                <v-card-title style="margin-top: 1rem;"><h3>Community 👯‍♀️</h3></v-card-title>
                <v-card-text>
                    <p>
                        <br/>
                        In October 2023 I founded <i>'Women in Tech Liverpool'</i> a 
                        community for women in the tech industry in Liverpool and 
                        surrounding areas.
                        <br/> <br/>
                        I founded this community because it was something that I was looking 
                        for when I was at uni and first started my career and it wasn't available.
                        I organise events like coffee mornings, event nights and co-working spaces!
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col offset="1" cols="10" offset-md="0" md="4">
            <div class="community-square image-square"></div>
        </v-col>
        <v-col offset="1" cols="10" offset-md="2" md="4">
            <div class="personal-square image-square"></div>
        </v-col>
        <v-col offset="1" cols="10" offset-md="0" md="4">
            <v-card style="height: 100%; border-radius: 15px;">
                <v-card-title style="margin-top: 1rem;"><h3>Personal 🧶</h3></v-card-title>
                <v-card-text>
                    <p>
                        <br/>
                        In my spare time I really enjoy crocheting. I have been crocheting for
                        about 4 years now and have made so many fun things. I started off making
                        teddy's and plushies but now I make snoods for dogs, baby blankets and handbags.
                        <br/> <br/>
                        I have also made some cool commissions, I have made a few ski masks for a local
                        musician in Liverpool!
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col offset="1" cols="10" offset-md="2" md="4">
            <v-card style="height: 100%; border-radius: 15px;">
                <v-card-title style="margin-top: 1rem;"><h3>Personal continued... 🐶</h3></v-card-title>
                <v-card-text>
                    <p>
                        <br/>
                        Another big part of my life is my dog Soup! He is a two year old 
                        whippet and has the biggest personality.
                        <br/><br/>
                        Soup comes to work with me every Wednesday, meets up with his friends 
                        every Sunday and must visit his favourite coffee shops for his pup cup!
                        <br/><br/>
                        Soup also has his name in the credits of Border Bots VR (and so do I)
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col offset="1" cols="10" offset-md="0" md="4">
            <div class="personal-square-2 image-square"></div>
        </v-col>
    </v-row>
</template>

<style lang="scss">
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
}</style>