<template>
    <main>
        <section class="flex_profile">
            <article>
                <div>
                    <h2 class="home_title">Personal Information</h2>
                </div>
                <div class="div_inline">
                    <div class="div_inline">
                        <img class="profile_round" src="../assets/images/profileImg.jpg" alt="Profile Icon">
                    </div>
                    <div class="div_inline">
                        <a href="../index.html"><h3 class="logout_profile">LOG OUT</h3></a>
                    </div>
                </div>
                <div class="flex_profile_info">
                    <div class="profile_info_theme">
                        <h3>Name</h3>
                        <h3>Surnames</h3>
                        <h3>Email</h3>
                        <h3>Password</h3>
                    </div>
                    <div class="profile_info_theme_input">
                        <h3>Tom</h3>
                        <h3>Stanley Holland</h3>
                        <h3>tom@openevents.com</h3>
                        <h3>asdfgh</h3>
                    </div>
                </div>
                <div class="flex_edit_buttons">
                    <div class="div_inline">
                        <div class="div_inline"><router-link to="/editProfile"><img class="edit_profile_img" src="../assets/images/icons/edit_icon.png" alt="Edit Icon"></router-link></div>
                        <div class="div_inline"><router-link to="/editProfile"><h4 class="edit_profile_link">edit your information</h4></router-link></div>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <h3 class="home_title bold">Your Statistics</h3>
                </div>
                <div class="comments_profile">
                    <h4>Average Score:</h4>
                    <h4 class="users_profile" v-if="statistics.avg_score == null">0</h4>
                    <h4 class="users_profile" v-if="statistics.avg_score != null">{{statistics.avg_score}}</h4>
                </div>
                <div class="comments_profile">
                    <h4>Number of Comments:</h4>
                    <h4 class="users_profile" v-if="statistics.num_comments == 0">0</h4>
                    <h4 class="users_profile" v-if="statistics.num_comments != 0">{{statistics.num_comments}}</h4>
                </div>
                <div class="comments_profile">
                    <h4>Users % with Less Comments:</h4>
                    <h4 class="users_profile" v-if="statistics.percentage_commenters_below == null">0</h4>
                    <h4 class="users_profile" v-if="statistics.percentage_commenters_below != null">{{statistics.percentage_commenters_below}}</h4>
                </div>
                <div class="divisor_color"></div>
                <div>
                    <router-link to="/delete"><h3 class="delete_profile">DELETE ACCOUNT</h3></router-link>
                </div>
            </article>
        </section>
    </main>
</template>

<script>

    export default {
        
        name: 'ProfileView',

        data() {
            return {
                statistics: {},
            }
        },

        beforeMount() {

            let id = this.$root.$data.myId;

            fetch("http://puigmal.salle.url.edu/api/v2/users/" + id + "/statistics", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        alert("No statistics were found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    console.log(data);
                    this.statistics = data;
                }
            );
        },

        methods: {
        
        }

    }

</script>


<style scoped>
    .flex_profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

.flex_profile_info {
        width: 70rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .flex_profile_info div {
        align-items: flex-start;
    }

    .profile_info_theme h3 {
        justify-items: center;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
    }

    .profile_info_theme_input h3 {
        color: #0c2341;
        border: solid 0.2rem #5b5a5a;
        padding: 1.5rem;
        border-radius: 1rem;
        font-weight: lighter;
        width: 200px;
    }

    .edit_profile_link {
        color: black;
        margin-bottom: 10px;
    }

    .edit_profile_img {
        width: 3rem;
    }

    .done_profile {
        padding: 1.5rem;
        color: whitesmoke;
        background-color: darkgreen;
        border-radius: 5rem;
    }

    .done_profile:hover {
        color: darkgreen;
        background-color: whitesmoke;
    }

    .flex_edit_buttons {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-left: 35rem;
    }

</style>