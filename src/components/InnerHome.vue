<script setup>
import github from './icons/github.vue';
import linkedin from './icons/linkedin.vue';
import mail from './icons/mail.vue';
import AboutMe from './AboutMe.vue';
import Experience from './Experience.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import Contact from './contact.vue';
</script>
<template>
    <div class="inner-container">
        <header>
            <h1 style="color:gray; cursor: pointer;" @click="submitForm('Home')">
                E
            </h1>
            <div class="icons">
                <mail />
                <github />
                <linkedin />

            </div>
        </header>

        <div class="project-overview">
            <div class="main-message">
                <div class="welcome-message" v-if="getActivePage == 'Home'">
                    <div class="hello">Welcome.</div>
                    <div class="main-text">
                        <!-- <div class="spacer" :style="{ backgroundImage: backgroundGradColor }"></div> -->
                        <div class="container">
                            <p class="text">I am a passionate web developer with a strong focus on delivering high
                                quality
                                websites that are visually appealing and user friendly. I enjoy taking on new challenges
                                and
                                staying up to date with the latest technologies and trends in the industry.</p>
                               
                            </div>
                       
                    </div>
                    <div class="checkResponsive">
                        <AboutMe />
                        <Experience />
                        <Skills />
                    </div>
                </div>

                <div class="showpages" v-if="getActivePage == 'Aboutme'">About Me
                    <AboutMe />
                </div>
                <div class="showpages" v-if="getActivePage == 'Experience'">Experience
                    <Experience />
                </div>

                <div class="showpages" v-if="getActivePage == 'Projects'">Projects
                    <Projects />
                </div>
                <div class="showpages" v-if="getActivePage == 'Skills'">Skills
                    <Skills />
                </div>
                <div class="showpages" v-if="getActivePage == 'contact'">
                    <Contact />
                </div>
            </div>

            <div class="spacer">

            </div>
            <div class="show-title">
                <div class="line" :style="{ backgroundImage: createLineGrad }">
                    <div class="list-wrapper">
                        <a @click="submitForm('Aboutme')">About Me</a>
                        <a @click="submitForm('Experience')">Experience</a>
                        <!-- <a @click="submitForm('Projects')">Projects</a> -->
                        <a @click="submitForm('Skills')">Skills</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import Contact from './contact.vue';
import AboutMe from './AboutMe.vue';
export default {
    components: { Skills, Projects },
    computed: {
        ...mapGetters(["getGradOne", "getGradTwo", "getActivePage"]),

        backgroundGradColor() {
            return `linear-gradient(50deg,${this.getGradOne}, ${this.getGradTwo})`;
        },
        createLineGrad() {
            return `linear-gradient(135deg,${this.getGradOne}0%,${this.getGradTwo}50%,${this.getGradOne}100%)`;
        }
    },
    methods: {
        ...mapMutations(["setActive"]),
        submitForm(data) {
            this.setActive(data)
        }
    }

}
</script>

<style scoped lang="scss">
.inner-container {
    height: 100vh;
    margin: 20px;
    padding: 20px;
    color: white;
    max-height: 100vh;
  

    header {
        justify-content: space-between;
        display: flex;
        align-items: center;

        h1 {
            font-family: cursive;
            font-size: 30px;
        }

        .icons {
            width: 100px;
            display: flex;
            justify-content: space-between;
        }
    }

    .project-overview {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .main-message {
            flex-basis: 53.4752%;
            position: relative;

            .container {

                color: white;
                border-width: 2px;
                border-right: 0;
                border-style: solid;
                border-image:
                    linear-gradient(to bottom,
                        rgb(106, 87, 192),
                        rgb(215, 154, 96)) 1 100%;
            }

            .welcome-message {
                margin-left: 50px;
                height: 100vh;

                .hello {
                    font-size: 110px;
                    font-family: unset;
                    color: rgb(243, 228, 209);
                    font-weight: lighter;
                }

                .main-text {
                    display: flex;

                    .text {
                        margin-left: 20px;
                        font-size: 16px;
                        font-weight: 200;
                        line-height: 1.6;
                        color: whitesmoke;
                    }
                   
                }

                .spacer {
                    content: " ";
                    width: 2px;
                    position: absolute;
                    height: 100px;
                }
            }
        }

        .show-title {
            flex-basis: 30.9017%;
            position: relative;
            margin-top: 50px;

            .line {
                content: " ";
                width: 90px;
                height: 90px;
                opacity: 1;
                border-top-left-radius: 8px;
                transition: all .3s ease-in-out;
                position: absolute;
                top: -2px;
                bottom: 0;
                left: -2px;
            }

            .line::after {
                content: " ";
                width: 90px;
                height: 90px;
                opacity: 2;
                border-top-left-radius: 8px;
                transition: all 0.3s ease-in-out;
                position: absolute;
                top: 2px;
                bottom: 0;
                left: 2px;
                background: #1d1d20;
            }

            .list-wrapper {
                margin-top: 30px;
                display: grid;

                a {
                    color: white;
                    z-index: 2;
                    position: relative;
                    margin-left: 25px;
                    margin-bottom: 15px;
                    cursor: pointer;
                }
            }
        }

    }

    .showpages {
        height: 100vh;
        font-size: 30px;
        padding: 25px;
    }


}

.checkResponsive {
    display: none;
}

@media screen and (max-width: 426px) {
    .checkResponsive {
        display: block;
        margin-bottom: 300px !important;
    }

    .main-message {
        flex-basis: 80% !important;

        .container {
            width: 80vw !important;
        }
    }

    .welcome-message {
        overflow-y: auto !important;
        margin-left: 5px !important;
        margin-bottom: 300px !important;
        -ms-overflow-style: none;
        scrollbar-width: none;

        .hello {
            font-size: 50px !important;
        }

        .main-text {
            margin-top: 20px;



            .text {
                font-size: 14px !important;
                margin-right: 20px;

            }
        }

    }

    .show-title {
        display: none !important;
    }
}

@media screen and (min-width:427px) and (max-width:769px) {
    .welcome-message {
        .hello {
            font-size: 60px !important;
        }

        .main-text {
            margin-top: 20px;

            .text {
                font-size: 14px !important;
                margin-right: 20px;

            }
        }
    }


}
</style>