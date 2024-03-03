<template>
    <div class="skills">
        <h3 class="title">Skills</h3>
        <div class="sub_title">Mainly focus on</div>
        <div class="container">
            <div class="card" v-for="(image, index) in Skills" :key="index">
                <img style="width: 45px;height: 35px;margin-top: 20px;" :src=image.img :key="image.img">
                <p>{{ image.name }}</p>
            </div>
        </div>
        <div class="sub_title">Familiar With</div>
        <div class="container">
            <div class="card" v-for="(image, index) in Familiar" :key="index">
                <img style="width: 45px;height: 35px;margin-top: 20px;" :src=image.img :key="image.img">
                <p>{{ image.name }}</p>
            </div>
        </div>
        <div class="spacer">

        </div>
    </div>
</template>




<script>
import TSImg from './icons/typescript.png'
import VueImg from './icons/vue.png'
import NuxtImg from './icons/nuxt.png'
import TailwindImg from './icons/tailwind.jpg'
import nodejsImg from './icons/nodejs.png'
import expressImg from './icons/express.png'
import mysqlImg from './icons/mysql.png'
import angularImg from './icons/angular.png'
import reactImg from './icons/react.png'
import flutterImg from './icons/flutter.png'
import firebaseImg from './icons/firebase.png'
import { reactive } from 'vue'
export default {


    setup() {
        const Skills = reactive([
            { name: 'Vue.js', img: VueImg },
            { name: 'Nuxt.js', img: NuxtImg },
            { name: 'Typescript', img: TSImg },
            { name: 'Tailwind', img: TailwindImg },
            { name: 'Node.js', img: nodejsImg },
            { name: 'Express.js', img: expressImg },
            { name: 'MySQL', img: mysqlImg },
        ]);
        const Familiar = reactive([
            { name: 'Angular', img: angularImg },
            { name: 'React.js', img: reactImg },
            { name: 'Flutter', img: flutterImg },
            { name: 'Firebase', img: firebaseImg },

        ]);
        return { Skills, Familiar }
    }
}
</script>

<style scoped lang="scss">
.skills {
    .title {
        display: none;
    }

    .sub_title {
        margin: 20px 0px 20px 0px;
        font-size: 18px;
        color: whitesmoke;
    }

    .container {

        display: flex;

        .card {
            align-items: center;
            text-align: center;
            width: 100px;
            height: 100px;
            border-radius: 3px;
            border: 1px solid gray;
            margin: 3px;

            p {
                font-size: 13px;
                color: gray;
            }
        }
    }

    .spacer {
        display: none;
    }
}


@media screen and (max-width: 426px) {
    .title {
        margin-top: 30px;
        display: block !important;
        text-align: start;
    }

    .sub_title {

        font-size: 15px !important;
        color: rgb(187, 184, 184);
    }

    .container {
        display: block !important;
        width: 72vw !important;

        .card {
            align-self: center !important;
            position: relative;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 20px !important;
            width: 130px !important;
            height: 100px;
        }
    }
}

@media screen and (min-width:427px) and (max-width:769px) {
    .skills {
        overflow-y: auto !important;
        -ms-overflow-style: none;
        scrollbar-width: none;
        height: 100vh !important;
        max-height: 100vh !important;
    }

    .container {
        display: -webkit-box;
        width: 50vw !important;
        display: flex !important;
        flex-wrap: wrap;
        align-items: space-between;

        .card {
            width: 100px !important;

        }



    }

    .spacer {
        display: block !important;
        margin-bottom: 300px !important;
    }
}
</style>