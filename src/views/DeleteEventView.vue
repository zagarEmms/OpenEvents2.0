<template>
    <main class="grey_background">
        <section class="center_delete">
            <article>
                <h2>{{information.name}} {{information.last_name}}</h2>
            </article>
            <article>
                <p class="delete_size">{{information.email}}</p>
            </article>
            <article>
                <p class="delete_size">Are you sure you want to delete your account?</p>
            </article>
            <article>
                <p class="delete_size">All your personal information will be deleted </p>
            </article>
            <article>
                <a v-on:click="deleteUser()"><h3 class="delete_profile_anyway">DELETE ANYWAY</h3></a>
            </article>
            <article>
                <router-link to="/profile"><h3 class="delete_cancel">CANCEL</h3></router-link>
            </article>
        </section>
    </main>
</template>

<script>

    export default {
        
        name: 'DeleteView',

        data() {
            return {
                information: {},
            }
        },

        beforeMount() {

            let id = this.$root.$data.myId;
            console.log(id);

            fetch("http://puigmal.salle.url.edu/api/v2/users/" + id, {
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
                    this.information = data[0];
                }
            );

        },

        methods: {

            deleteUser () {
                fetch("http://puigmal.salle.url.edu/api/v2/users/", {
                    method: "DEELETE",
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
                    .then(() => {
                        this.$router.push('/');
                    }
                );
            }
        }

    }

</script>

<style scoped>

    .delete_size {
        font-size: 2.5rem;
    }

    .delete_profile_anyway {
        padding: 2rem;
        color: whitesmoke;
        background-color: darkred;
        border-radius: 5rem;
    }

    .delete_profile_anyway:hover {
        background-color: whitesmoke;
        color: darkred;
    }

    .delete_cancel {
        padding: 2rem;
        color: darkred;
        background-color: whitesmoke;
        border-radius: 5rem;
    }

    .delete_cancel:hover {
        background-color: darkred;
        color: whitesmoke;
    }

    .center_delete {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>