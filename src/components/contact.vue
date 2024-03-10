<template>
    <div class="contact">
        <div class="title">Message me</div>
        <div class="sub_text"> Please feel free to contact me any time. Will get back to you as soon as I can. </div>

        <form action="https://formsubmit.co/458027bd690044d7dd0ca6069688ffc5 " method="POST">
            <div class="form-group">
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="name" class="form-control " placeholder="Your Name" required>
                    </div>
                    <div class="col">
                        <input type="email" name="email" class="form-control " placeholder="Your Email Address" required>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <textarea type="textarea" placeholder="Your Message goes here..." class="form-control " name="message"
                    rows="10" required></textarea>
                <div class="send-btn">
                    <button type="submit" class="btn btn-lg btn-dark btn-block">Send Message</button>
                </div>
            </div>


        </form>
    </div>
</template>
   
<script>
export default {

}
</script>
   
<style lang="scss" scoped>
.sub_text {
    margin-top: 20px;
    font-size: 13px;
    color: whitesmoke;

}

.form-row {
    display: inline-flex;
}

input[type=text],
input[type=email] {
    width: 245px;
    height: 40px;
    background: #e5e7eb;
    border-radius: 5px;
    margin-top: 15px;
    outline: none;
    font-size: 15px;
    border: none;
    font-family: "Montserrat-Regular";
    margin-right: 10px;
}

textarea:focus,
input:focus {
    outline: none;
}

textarea {
    border-radius: 5px;
    background: #e5e7eb;
    margin-top: 15px;
    width: 500px;
    height: 150px;
    font-size: 15px;
    resize: none;
    border: none;
    font-family: "Montserrat-Regular";
    margin-right: 10px;
}

.send-btn {
    text-align: end;
    margin-right: 10px;

}

button {
    margin-right: 5px;
    height: 40px;
    width: 150px;
    border: none;
    border-radius: 5px;
    color: antiquewhite;
    font-size: 15px;
    background-image: linear-gradient(to right, rgb(215, 154, 96), rgb(106, 87, 192));
}

form {
    height: 200px;
    width: fit-content;
}



@media screen and (max-width:769px) {
    .contact {
        overflow-y: scroll !important;
        -ms-overflow-style: none;
        scrollbar-width: none;
        margin-bottom: 300px !important;

    }

    .form-row {
        display: block;
    }

    .sub_text {
        font-size: 12px;
    }

    input[type=text],
    input[type=email] {
        width: 270px;
        height: 35px;

    }

    ::placeholder {
        font-size: 13px;
    }

    textarea {
        width: 270px;
        height: 120px;
    }

    .send-btn {
        // width: 87%;
        margin-top: -10px;
        text-align: end;
    }

    button {
        height: 30px;
        width: 120px;
        font-size: 13px;
margin-bottom: 100px ;
    }
}

@media screen and (max-width:376px) {

    input[type=text],
    input[type=email] {
        width: 230px;

    }

    textarea {
        width: 230px;

    }

    .contact {
        margin-left: -20px;
    }

    .title {
        font-size: 25px;
    }
}
</style>