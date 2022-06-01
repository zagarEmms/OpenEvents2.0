<template>
    <main>
        <section class="friends_flex">
            <h2>Your Friends</h2>
            <!-- <a href="friend.html">
                <article class="friends_flex_info">
                    <div><img class="friends_profile_img" src="../media/images/profileImg.jpg" alt="Profile Icon"></div>
                    <div class="friend_info">
                        <h3 class="black">Luca</h3>
                        <h3 class="black">luca@openevents.com</h3>
                    </div>
                </article>
            </a> -->
            
        </section>
        <section class="friends_flex">
            <h2>Meet new people</h2>
            <div v-for="user in user" :key="user.id">
                <router-link to="/friendProfile" v-on:click="saveFriendId(user.id)">
                    <article class="friends_flex_info">
                        <div><img class="friends_profile_img" :src="user.image" alt="Profile Icon"></div>
                        <div class="friend_info">
                            <div><h3 class="black">{{user.name}} {{user.lastname}}</h3></div>
                            <div><h3 class="black">{{user.lastname}}</h3></div>
                        </div>
                    </article>
                </router-link>
            </div>
            
        </section>
    </main>
</template>

<script>
    export default {

        beforeMount() {
            fetch("http://puigmal.salle.url.edu/api/v2/users", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        alert("No users were found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    this.user = data;
                    console.log(this.user);
                }
            );
        },

        methods: {
            saveFriendId(id) {
                this.$root.$data.userId = id;
            }
        },

        data() {
            return {
                user: [],
            }
        },

        name: 'FriendsView',
            
        }
</script>

<style scoped>

    .friends_flex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .friend_info{
        align-items: flex-start;
    }

    .friends_flex_info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    

</style>