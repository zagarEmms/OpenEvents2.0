<template>
    <main>
        <article>
                <div>
                    <h2 class="home_title">Personal Information</h2>
                </div>
                <div class="flex_profile_info">
                    <div class="profile_info_theme">
                        <h3>Image</h3>
                        <h3>Name</h3>
                        <h3>Surnames</h3>
                        <h3>Email</h3>
                        <h3>Password</h3>
                        <h3>Password</h3>
                    </div>
                    <div class="profile_info_theme_input">
                        <form>
                            <input type="text" id="userImage" name="userImage" required minlength="5" maxlength="50" :placeholder= "currentInfo[0].image" v-model="userImage" />
                            <input type="text" id="userName" name="userName" required minlength="1" maxlength="50" :placeholder= "currentInfo[0].name" v-model="userName" />
                            <input type="text" id="userLastName" name="userLastName" required minlength="1" maxlength="50" :placeholder= "currentInfo[0].last_name" v-model="userLastName" />
                            <input type="email" id="userEmail" name="userEmail" required minlength="11" maxlength="150" :placeholder= "currentInfo[0].email" v-model="userMail" />
                            <input type="password" id="password" name="userPassword" required minlength="1" maxlength="30" placeholder= "new password" v-model="userPassword" />
                            <input type="password" id="password2" name="userPasswordCheck" required minlength="1" maxlength="30" placeholder= "confirm new password" v-model="userPasswordCheck" />
                        </form>
                    </div>
                </div>
                <div class="flex_edit_buttons">
                    <div class="div_inline">
                        <div class="div_inline">
                            <a v-on:click="updateUser()"><h4 class="done_button">SHAVE CHANGES</h4></a>
                        </div>
                    </div>
                </div>
            </article>
    </main>
</template>

<script>
    export default {
        name: 'EditProfileView',

        data() {
            return {
                currentInfo: [],
            }
        },

        beforeMount() {
            let id = this.$root.$data.myId;

            fetch("http://puigmal.salle.url.edu/api/v2/users/" + id, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("No information was found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    console.log(data);
                    this.currentInfo = data;
                }
            );
        },

        methods: {
            updateUser() {
                let id = this.$root.$data.myId;
                let user = {};
                
                if (this.userImage != undefined) {
                    user.image = this.userImage;
                } 

                if (this.userName != undefined) {
                    user.name = this.userName;
                } 

                if (this.userLastName != undefined) {
                    user.last_name = this.userLastName;
                } 

                if (this.userEmail != undefined) {
                    user.email = this.userEmail;
                } 

                if (this.userPassword != undefined && this.userPasswordCheck != undefined && this.userPassword == this.userPasswordCheck) {
                    user.password = this.userPassword

                    fetch("http://puigmal.salle.url.edu/api/v2/users/" + id, {
                        method: "PUT",
                        headers: {
                            Authorization: "Bearer " + this.$root.$data.token,
                        },
                        body: JSON.stringify({user}),
                        })
                        .then((res) => {
                            if (res.status != 200) {
                                console.log("No information was found");
                            } else {
                                return res.json();
                            }
                        })
                        .then(() => {
                            this.$router.push('profile');
                        }
                    );


                } else {
                    alert("Passwords do not match");
                }

            },
        },

    }
</script>

<style>
    .flex_profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .flex_profile_info {
        display: flex;
        flex-direction: row;
    }

    .flex_profile_info div {
        align-items: flex-start;
    }

    .profile_info_theme h3 {
        justify-items: center;
    }

    .profile_info_theme_input form input {
        display: flex;
        flex-direction: row;
        color: #0c2341;
        border: solid 0.2rem #5b5a5a;
        border-radius: 1rem;
        font-weight: lighter;
        width: 200px;
        padding: 1.5rem;
        margin-left: 2rem;
    }
    .done_button{
        border: none;
        font-size: 2rem;
        color: white;
        background-color: rgba(10, 7, 75, 0.81);
        border-radius: 30px;
        padding: 15px 30px;
        margin-bottom: 3rem;
    }

</style>