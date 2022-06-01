<template>
    <main>
        <section class="friends_flex">
            <h2>Your Friends</h2>
            <div v-if="friend.length == 0">
                <h3 class="home_title bold">Any friend to show yet</h3>
            </div>
            <div v-else, v-for="friend in friend" :key="friend.id">
                <router-link to="/friendProfile" v-on:click="saveFriendId(friend.id)">
                    <article class="friends_flex_info">
                        <div><img class="friends_profile_img" :src="friend.image" alt="Profile Icon"></div>
                        <div class="friend_info">
                            <div><h3 class="black">{{friend.name}} {{friend.lastname}}</h3></div>
                            <div><h3 class="black">{{friend.lastname}}</h3></div>
                        </div>
                    </article>
                </router-link>
            </div>

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
        name: 'FriendsView',
        data() {
            return {
                user: [],
                friend: [],
            }
        },

        beforeMount() {
            fetch("http://puigmal.salle.url.edu/api/v2/friends", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                }
            })
            .then((res) => {
                    if (res.status != 200) {
                        alert("No friends were found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    this.friend = data;
                    console.log(this.friend);
                }
            );

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