<template>
    <main>
        <section class="flex_profile">
            <article>
                <div class="top_padding">
                    <img class="profile_round" :src="user[0].image" alt="Profile Icon">
                </div>
                <div>
                    <h3 class="home_title">{{user[0].name}} {{user[0].last_name}}</h3>
                    <h3>{{user[0].email}}</h3>
                </div>
                <div>
                    <a v-on:click="addFriend(user[0].id)"><h3 class="friend_add">{{friendStatus}}</h3></a>

                </div>
            </article>

            <article v-if="event.length == 0">
                <h3 class="home_title bold">No events created yet</h3>
            </article>
            <article v-else>
                <div>
                    <h3 class="home_title bold">THEIR EVENTS</h3>
                </div>
                <div class="friends_flex_info" v-for="event in event" :key="event.id">
                    <router-link to = "/event" v-on:click="saveEventId(event.id)">
                        <div><img class="friends_profile_img" :src="event.image" alt="Profile Icon"></div>
                        <div class="friend_info">
                            <div><h3 class="black">{{event.name}}</h3></div>
                            <div><h3 class="black">{{event.type}}</h3></div>
                        </div>
                    </router-link>
                </div>
            </article>

            <article v-if="statistics">
                <h3 class="home_title bold">No statistics available</h3>
            </article>
            <article v-else>
                <div>
                    <h3 class="home_title bold">THEIR STATISTICS</h3>
                </div>
                <div class="comments_profile">
                    <h3>EVENTS SCORE</h3>
                    <h3 class="users_profile">{{this.statistics.avg_score}}</h3>
                </div>
                <div class="comments_profile">
                    <h3>NUMBER OF COMMENTS</h3>
                    <h3 class="users_profile">{{this.statistics.num_comments}}</h3>
                </div>
                <div class="comments_profile">
                    <h3>% commenters below</h3>
                    <h3 class="users_profile">{{this.statistics.percentage_commenters_below}}</h3>
                </div>
            </article>
            
             <article v-if="friend.length == 0">
                <h3 class="home_title bold">Any friend found</h3>
            </article>
            <article v-else>
                <div>
                    <h3 class="home_title bold">THEIR FRIENDS</h3>
                </div>
                <div class="friends_flex_info" v-for="friend in friend" :key="friend.id">
                    <router-link to ="/friendProfile" v-on:click="getInfo(friend.id)">
                        <div><img class="friends_profile_img" :src="friend.image" alt="Profile Icon"></div>
                        <div><h3 class="black">{{friend.name}} {{friend.last_name}}</h3></div>
                    </router-link>
                </div>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    name: 'FriendProfileView',
    data() {
        return {
            user: [],
            event: [],
            statistics: {},
            friend: [],
            friendStatus: "add friend",
        }
    },

    beforeMount() {

        let id = this.$root.$data.userId;
        this.getInfo(id);
        this.checkFriend(id);

    },

    methods: {

        getInfo(id) {
            fetch("http://puigmal.salle.url.edu/api/v2/users/" + id, {
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

        fetch("http://puigmal.salle.url.edu/api/v2/users/" + id + "/events", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        alert("No events were found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    this.event = data;  
                    console.log(this.event);
                }
            );
        
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
                    this.statistics = data;  
                    console.log(this.statistics);
                }
            );

        fetch("http://puigmal.salle.url.edu/api/v2/users/" + id + "/friends", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
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

           
        },

        checkFriend(id) {

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
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        console.log("You are already friends");
                        this.friendStatus = "friending";
                        break;
                        
                    } else {
                        console.log("You are not friends");
                        this.friendStatus = "add friend";
                    }

                }
                
            });
        },

        addFriend(id) {

            fetch("http://puigmal.salle.url.edu/api/v2/friends/" + id, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
            },
            })
            .then((res) => {
                if (res.status != 201) {
                    alert("Already requested");
                } else {
                    return res.json();
                }
            })
            .then(() => {
                    this.friendStatus = "requested";
                    console.log(this.friend);
                }
            );

        },

        saveEventId(id) {
            localStorage.setItem("eventId", id);
            this.$root.$data.eventId = id;
        },
    },

}
</script>

<style scoped>

.flex_profile {
        display: flex;
        flex-direction: column;
        align-items: center;
}

.friends_flex_info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.friends_profile_img {
    border-radius: 10rem;
    width: 10rem;
    padding-right: 2rem;
}



</style>