<template>
    <!-- <div>
   I am looking for now
</div> -->
    <div class="experience">
        <h3 class="sub_title">Experience</h3>
        <div class="time">2022 September - 2023 February</div>
        <div class="container">
            <div class="company"> <span class="title">Unity Power</span> ( Front-End Developer )
            </div>
            <ul>

                <li>
                    Developed and maintain web applications using HTML, CSS, and JavaScript.
                </li>
                <li>
                    Collaborated with project managers and designers to determine project scope and requirements.
                </li>
                <li>Wrote and maintain code using Vue and React, as well as vanilla JavaScript.</li>
                <li>Use version control (Git) to manage codebase and collaborate with other developers.</li>
            </ul>
        </div>


        <div class="time">2021 April - 2022 August</div>

        <div class="container">
            <div class="company"> <span class="title">TASTYSOFT Software Co.,LTD</span> ( Junior
                Full-Stack Developer )</div>
            <ul>
                <li>Worked on various projects, including QR Coupon Pricing, Payroll, CRM system, and Connect 365 which
                    is a
                    multipurpose mobile application for time tracking, collaboration, productivity and e-learning
                    platform
                    for
                    employees, responsible for both frontend and backend development.</li>

                <li>Developed Serverless REST API With Python And AWS Lambda and implemented various frontend
                    technologies,
                    including Angular and Flutter.</li>
                <li>Developed multiple mobile applications for both Android and IOS using Flutter.</li>
                <li>Collaborated with clients to understand their requirements and provide technical guidance.</li>
            </ul>
        </div>

        <div class="time">2019 January - 2021 January</div>

        <div class="container-second">
            <div class="company"> <span class="title">Mogok Foundation</span>Professional Computer Programming</div>
            <ul>


                <li> Basic programming with Java.</li>

                <li>Fundamental web development with HTML, CSS, JavaScript,
                    Bootstrap, jQuery and Angular.</li>
                <li>Mobile app development with Ionic 3 and Flutter</li>
            </ul>
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
.experience {
    font-size: 15px;
    font-size: 16px;
    font-weight: 200;
    line-height: 1.6;
    color: whitesmoke;
    font-weight: 100;
    // height: 500px;
    max-height: 100vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;


    .sub_title {
        display: none;
    }

    .container,
    .container-second {

        color: white;
        border-width: 2px;
        border-right: 0;
        border-style: solid;
        border-image:
            linear-gradient(to bottom,
                rgb(106, 87, 192),
                rgb(215, 154, 96)) 1 100%;
    }

    .container-second {
        margin-bottom: 300px;
    }

    .title {
        font-weight: bold;
        font-size: 20px;
    }

    .time {
        font-size: 13px;
        color: grey;
        font-weight: bold;
        margin-top: 40px;
    }

    .company {
        margin-left: 15px;
        font-size: 17px;
    }

    ul li {
        font-size: 15px;
        color: gray;

    }
}

@media screen and (max-width: 426px) {
    .container-second {
        margin-bottom: 10px !important;
    }

    .experience {
        overflow-y: hidden !important;
        max-height: fit-content !important;
        width: 78vw !important;
    }

    .time {

        margin-top: 20px !important;
    }

    .sub_title {
        display: block !important;
        text-align: start;
    }

    .company {
        font-size: 14px !important;
    }

    .title {

        font-size: 17px !important;
    }

    ul li {
        font-size: 14px !important;


    }
}

@media screen and (min-width:427px) and (max-width:769px) {

    .company {
        font-size: 14px !important;
    }

    .title {

        font-size: 17px !important;
    }

    ul li {
        font-size: 14px !important;
    }
}
</style>