<template>
    <main class="section_divider">
        <div>
            <section class="search">
                <h2>Discover new people</h2>
                <label for="name">Search people here:</label>
                <article class="inline_search">
                    <input type="text" id="name" name="name" required minlength="1" maxlength="30" placeholder="Name, last name or email" v-model="userSearch">
                    <a id="search" v-on:click="searchUser()"><img src="../assets/images/icons/search_icon.png" width="24" height="24" alt="Search"></a>
                </article>
                <div v-for="search in search" :key="search.id">
                    <router-link to="/friendProfile" v-on:click="saveFriendId(search.id)">
                        <article class="friends_flex_info">
                            <div><img class="friends_profile_img" :src="search.image" alt="Profile Icon"></div>
                            <div>
                                <div class="friend_info"><h3 class="black">{{search.name}} {{search.last_name}}</h3></div>
                                <div class="friend_info"><h3 class="black">{{search.email}}</h3></div>
                            </div>
                        </article>
                    </router-link>
                </div>
            </section>
        </div>

        <div>
            <section class="friends_flex">
                <h2>Friend requests</h2>
                <div v-if="request.length == 0">
                    <h3 class="home_title bold">Any pending requests</h3>
                </div>
                <div v-else, v-for="request in request" :key="request.id">
                    <router-link to="/friendProfile" v-on:click="saveFriendId(friend.id)">
                        <article class="friends_flex_info">
                            <div><img class="friends_profile_img" :src="request.image" alt="Profile Icon"></div>
                            <div>
                                <div class="friend_info"><h3 class="black">{{request.name}} {{request.last_name}}</h3></div>
                                <div class="friend_info"><h3 class="black">{{request.email}}</h3></div>
                            </div>
                        </article>
                    </router-link>
                    <div>
                        <button class="friend_request" v-on:click="acceptFriend(request.id)">Accept</button>
                        <button class="friend_request" v-on:click="declineFriend(request.id)">Decline</button>
                    </div>
                </div>
            </section>

            <section class="friends_flex">
                <h2>Your Friends</h2>
                <div v-if="friend.length == 0">
                    <h3 class="home_title bold">Any friend to show yet</h3>
                </div>
                <div v-else, v-for="friend in friend" :key="friend.id">
                    <router-link to="/friendProfile" v-on:click="saveFriendId(friend.id)">
                        <article class="friends_flex_info">
                            <div><img class="friends_profile_img" :src="friend.image" alt="Profile Icon"></div>
                            <div>
                                <div class="friend_info"><h3 class="black">{{friend.name}} {{friend.last_name}}</h3></div>
                                <div class="friend_info"><h3 class="black">{{friend.email}}</h3></div>
                            </div>
                        </article>
                    </router-link>
                </div>
            </section>
        </div>

        <div>
            <section class="friends_flex">
                <h2>Meet new people</h2>
                <div v-for="user in user" :key="user.id">
                    <router-link to="/friendProfile" v-on:click="saveFriendId(user.id)">
                        <article class="friends_flex_info">
                            <div><img class="friends_profile_img" :src="user.image" alt="Profile Icon"></div>
                            <div class="friend_info">
                                <h3 class="friend_info black">{{user.name}} {{user.last_name}}</h3>
                                <h3 class="friend_info black">{{user.email}}</h3>
                            </div>
                        </article>
                    </router-link>
                </div>
            </section>
        </div> 
    </main>
</template>

<script>
    export default {
        name: 'FriendsView',
        data() {
            return {
                user: [],
                friend: [],
                request: [],
                search: [],
            }
        },

        beforeMount() {
            fetch("http://puigmal.salle.url.edu/api/v2/friends/requests", {
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
                    this.request = data;
                    console.log(this.request);
                }
            );

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
            searchUser() {
                    
                    fetch("http://puigmal.salle.url.edu/api/v2/users/search?s=" + this.userSearch, {
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
                        this.search = data;
                        console.log(this.search);
                    }
                );
            },

            saveFriendId(id) {
                localStorage.setItem("friend_id", id);
                this.$root.$data.userId = id;
            },

            acceptFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + id, {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer " + this.$root.$data.token,
                    }
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("Friend request was not accepted");
                        
                    } else {
                        console.log("Friend request was accepted");
                        window.location.reload();
                    }
                })
            },

            declineFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + id, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + this.$root.$data.token,
                    }
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("Friend request was not declined");
                        
                    } else {
                        console.log("Friend request was declined");
                        window.location.reload();
                    }
                })
            },
            
        },
            
    }
</script>

<style scoped>

    .search {
        display: flex;
        flex-direction: column;
        padding: 0 10rem;
        padding-bottom:2rem;
    }

    .inline_search {
        background-color: #b3c1e5;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2rem 0;
        border-radius: 1em;
    }

    label {
        font-size: 4em;
        margin-bottom: 1rem;
    }
    
    input {
        padding: 1em 4rem;
        border-radius: 1em;
        border: 1px solid #ccc; 
    }

    .section_divider div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .friends_flex {
        display: flex;
        flex-direction: column;
        align-items: right;
        padding: 0 10rem;
    }

    .friends_flex h2 {
        text-align: center;
    }

    .friends_flex_info {
        display: flex;
        flex-direction: row;
        padding: 2rem;
    }

    .friends_profile_img {
        border-radius: 5rem;
        width: 10rem;
    }   

    .friend_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1rem;
    }

    .friend_request {
        padding: 1rem;
        background-color: #8046A887;
        color: black;
        border-radius: 2rem;
    }

    .friend_request:hover {
        background-color: whitesmoke;
        color: #8046A887;

    }
    

</style>