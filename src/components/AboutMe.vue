<template>
    <div class="aboutme">
        <div class="details">
            <h3 class="sub_title">About Me</h3>
            <img src="../assets/egk.jpg" alt="image">
            <div class="detail">
                Name : Einginn Khaing
                <br>
                Age : 24
                <br>
                Location : Mogoke, Myanmar
                <br>
                Email : einginnkhaing3101.mgk@gmail.com
                <br>
                Phone : +959684695634
            </div>
        </div>
        <!-- <div class="spacer" :style="{ backgroundImage: backgroundGradColor }"></div> -->
        <div class="container">
            <p> Hi there, I'm a web developer with a focus on front-end development, I am passionate about
                creating
                user-friendly interfaces and engaging digital experiences. Although I didn't pursue a formal degree in
                computer
                science or web development, I discovered my love for programming during my first year of college while
                studying
                english language. </p>
            <p> Since then, I've been honing my skills through various avenues, including online courses, personal projects,
                and
                most notably, a Professional Computer Programming course at the non-profit organization, Mogok Foundation.
                This
                course provided me with hands-on experience in the fundamentals of programming, as well as exposure to the
                latest technologies and industry best practices. </p>
            <p> When I'm not coding, you can find me reading about the latest web
                development trends, exploring new programming
                languages, or tinkering with personal projects. I'm always eager to learn and grow as a developer, and I'm
                excited to see where my journey takes me next. </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["getGradOne", "getGradTwo", "getActivePage"]),
        backgroundGradColor() {
            return `linear-gradient(50deg,${this.getGradOne}, ${this.getGradTwo})`;
        },
    }
}
</script>

<style scoped lang="scss">
.aboutme {
    max-height: 100vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    .sub_title {
        display: none;
    }

    .details {
        display: flex;

        .detail {
            font-size: 14px;
            font-weight: 200;
            line-height: 1.6;
            color: rgb(166, 165, 165);
            margin-left: 20px;
            display: grid;
            margin-top: 50px;
            font-weight: 400;
        }

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }

    p {
        margin-left: 25px;
        font-size: 15px;
        font-size: 16px;
        font-weight: 200;
        line-height: 1.6;
        color: whitesmoke;
        margin-bottom: 25px;
    }

    .container {
        margin-bottom: 250px;
        color: white;
        border-width: 2px;
        border-right: 0;
        border-style: solid;
        border-image:
            linear-gradient(to bottom,
                rgb(106, 87, 192),
                rgb(215, 154, 96)) 1 100%;
    }



}

@media screen and (max-width: 426px) {

    .aboutme {
        overflow-y: hidden !important;
        max-height: fit-content !important;
        width: 78vw !important;
    }
    .sub_title {
        margin-top: 30px;
        display: block !important;
        text-align: start;
    }
    .details {
        display: contents !important;
        text-align: center;

        .detail {
            margin-top: -10px !important;
            text-align: start;
            font-size: 12px !important;
        }
    }

    .container {
        margin-top: 20px;
        margin-bottom: 30px !important;

        p {
            font-size: 14px !important;
            padding-right: 20px !important;
        }
    }
}
@media screen and (min-width:427px) and (max-width:769px) {
    img {
            width: 120px;
            height: 120px;
          
        }
    .details {
        display: contents !important;
        text-align: center;

        .detail {
            margin-top: -10px !important;
            text-align: start;
            font-size: 12px !important;
        }
    }
    .container {
        margin-top: 20px;
        margin-bottom: 300px !important;

        p {
            font-size: 14px !important;
            padding-right: 20px !important;
      
        }
    }
}
</style>