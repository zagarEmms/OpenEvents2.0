<template>
    <main class="container_index">
    <!--Section containing 2 articles, one for title and the other for user input-->
    <section class="backgroundImg">
        <article class="flex_login">
            <!--H1 for the main title of the html (the name of the website)-->
            <h1 class="white">OpenEvents</h1>
        </article>
        <article class="flex_login">
            <!--Form containing user inputs, wrapped together to send the information at the same time-->
            <form class="indexInput, input_box">
                <input type="email" id="mail" name="mail" v-model="email"
                       size="10" placeholder="e-mail" pattern="/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
                <input type="password" id="password" name="password" v-model="password" required
                       size="10" placeholder="password" />
                <!--Button that sends the login information-->
                <button class="buttonLogIn" type="button" v-on:click="logIn">Log in</button>
            </form>
        </article>
        <!--Section containing 2 articles, one for question and the other for user input-->
    </section>
    <section>
        <article class="flex_signup">
            <h3>Do you want to create an account?</h3>
        </article>
        <article class="flex_signup">
            <!--Form containing user inputs, wrapped together to send the information at the same time-->
            <form class="input_box">
                <!--Text type for normal input without hiding or requirements-->
                <input type="text" id="name" name="name" v-model="nameSignUp" required
                       minlength="1" maxlength="50" size="10" placeholder="name" />
                <input type="text" id="lastname" name="lastname" v-model="lastSignUp" required
                       minlength="1" maxlength="50" size="10" placeholder="lastname" />
                <!--Email type for email input with some email restrictions-->
                <input type="email" id="newMail" name="newMail" v-model="emailSignUp"
                       minlength="11" maxlength="150" size="10" placeholder="e-mail" pattern="/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
                <!--Password type for hided input for passwords-->
                <input type="password" id="newPassword" name="password" v-model="passwordSignUp" required
                       minlength="1" maxlength="15" size="10" placeholder="password" />
                <!--Button that sends the signup information-->
                <button class="buttonSignUp" type="button" v-on:click="signUp">Sign up</button>
            </form>
        </article>
    </section>
</main>
</template>

<script>

    export default {
        name: "IndexView",
       
        methods: {

            logIn() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
                })
                .then((res) => {
                    if (res.status == 200) {
                        return res.json();
                    } else {
                        alert("Wrong credentials");
                    }
                })
                .then((data) => {
                    this.$root.$data.token = data.accessToken;
                    localStorage.setItem("token", data.accessToken);
                });

                fetch("http://puigmal.salle.url.edu/api/v2/users", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status == 200) {
                        return res.json();
                    } else {
                        alert("Wrong credentials 2");
                    }
                })
                .then(data => {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].email == this.email) {
                            this.$root.$data.myId = data[i].id;
                            localStorage.setItem("myId", data[i].id);
                            this.$router.push('home');
                            console.log(data[i].id);
                            break;
                        }
                    }
                });

            },

            signUp() {
                fetch("http://puigmal.salle.url.edu/api/v2/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: this.nameSignUp,
                    last_name: this.lastSignUp,
                    email: this.emailSignUp,
                    password: this.passwordSignUp,
                    image: "imageTest",
                }),
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 201) {
                        alert("User created! Now logIn");
                        return res.json();
                    } else {
                        console.log(res);
                        alert("Information missing!");
                    }
                })
                .then((data) => {
                    console.log(data);
                });
            }
        }
    }

</script>

<style scoped>

    .container_index {
        padding: 0;
        width: 98%;
    }

    .backgroundImg{
        background-image: url("../assets/images/purple_background.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-bottom: 70px;
        padding-top: 30px;
    }

    .flex_login form, article{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .flex_signup form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .indexInput {
        padding-left: 20px;
    }

    .input_box input{
        font-size: 3rem;
        margin-bottom: 2rem;
        width: 50rem;
        box-shadow:5px 5px 10px rgba(48, 68, 94, 0.35);
        border-radius: 10px;
        padding: 8px 15px;
        border: none;
    }

    .buttonLogIn {
        background: #283d8f;
        border-radius: 999px;
        box-shadow: #283d8f 0 10px 20px -10px;
        box-sizing: border-box;
        color: #E8EEFFFF;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 4rem;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 10px 20px;
        user-select: none;
        touch-action: manipulation;
        border: 0;
    }

    .buttonLogIn:hover {
        background: #E8EEFFFF;
        color: #0d213a;
    }

    .buttonSignUp {
        background: rgb(168, 190, 218);
        border-radius: 999px;
        box-shadow: rgb(168, 190, 218) 0 10px 20px -10px;
        box-sizing: border-box;
        color: #15263a;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 4rem;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 10px 20px;
        user-select: none;
        touch-action: manipulation;
        border: 0;
    }

    .buttonSignUp:hover {
        background: rgb(1, 25, 54);
        color: rgb(168, 190, 218);
    }


</style>