<template>
    <main class="container">
        <div class="rc_bkg flex_event">
            <h3 class="event_title">{{event[0].name}}</h3>
        </div>
        <div class="flex_event_row">
            <section class="flex_event margins">
                <article>
                    <div>
                        <h3 class="event_subtitle">Description</h3>
                    </div>
                    <div>
                        <p class="event_description_size">
                            {{event[0].description}}
                        </p>
                    </div>
                </article>
                <article>
                    <h3 class="event_subtitle">Details</h3>
                </article>
                <article class="flex_details">
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/location_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>{{event[0].location}}</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/calendar_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Dates: {{event[0].eventStart_date}}, {{event[0].eventEnd_date}}</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/group_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Max. participants: {{event[0].n_participators}}</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/category_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Category: {{event[0].type}}</h3></div>
                    </div>
                </article>
            </section>
            <section class="flex_event" v-if="isMyEvent()">
                <div>
                    <button class="event_buttons_participate" v-on:click="editEvent()">Edit Event</button>
                    <button class="delete_profile" v-on:click="deleteEvent()">Delete Event</button>
                </div>
            </section>
            <section class="event_buttons_margin">
                <div class="event_buttons_participate"><a v-on:click="participate()">{{button}}</a></div>
                <div class="event_buttons"><a v-on:click="shareButton()">Share!</a></div>
            </section>
        </div>
    </main>
</template>

<script>
    export default {

        name: 'EventView',

        beforeMount() {

            let id = this.$root.$data.eventId;

            fetch("http://puigmal.salle.url.edu/api/v2/events/" + id, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("No events were found");
                        
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    this.event = data;
                    console.log(this.event);
                }
            );

            let user_id = this.$root.$data.myId;

            fetch("http://puigmal.salle.url.edu/api/v2/users/" + user_id + "/assistances", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("No events were found");
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    for (var i = 0; i < data.length; i++) {
                        console.log(data)
                        if (data[i].id == id) {
                            this.button = "Participating!";
                            break;
                        }
                    }
                }
            );
        },

        methods: {

            participate() {

                let id = this.$root.$data.eventId;
                this.button = "Participating!";
            
                fetch("http://puigmal.salle.url.edu/api/v2/events/" + id + "/assistances", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + this.$root.$data.token,
                    },
                    })
                    .then((res) => {
                        if (res.status != 200) {
                            console.log("Error in connection");
                        } else {
                            return res.json();
                        }
                    })
                    .then((data) => {
                        this.event = data;
                        console.log(this.event);
                    }
                );
            },
            shareButton() {
                var text = "http://localhost:8080/event";
                navigator.clipboard.writeText(text).then(function() {
                    console.log('Link copied to clipboard');
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });
            },
            isMyEvent() {

                let id = this.$root.$data.myId;
                let event_id = this.$root.$data.eventId;
                
                fetch("http://puigmal.salle.url.edu/api/v2/events/" + event_id, {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + this.$root.$data.token,
                    },
                    })
                    .then((res) => {
                        if (res.status != 200) {
                            console.log("Error in connection");
                        } else {
                            return res.json();
                        }
                    })
                    .then((data) => {
                        this.owner_id = data[0].owner_id;
                    }
                );  
                
                if (id == this.owner_id) {
                    return true;
                } else {
                    return false;
                }
            },
            editEvent() {
                this.$router.push({ path: '/editEvent' });
            },
            deleteEvent() {

                let id = this.$root.$data.eventId;

                fetch("http://puigmal.salle.url.edu/api/v2/events/" + id, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + this.$root.$data.token,
                    },
                    })
                    .then((res) => {
                        if (res.status != 200) {
                            console.log("Error in connection");
                        } else {
                            return res.json();
                        }
                    })
                    .then(() => {
                        this.$router.push({ path: '/events' });
                    }
                );
            },
        },
        data() {
            return {
                event: [],
                button: "Participate",
                owner_id: 0,
            }
        }
    }
</script>

<style scoped>
    .rc_bkg {
        background-image: url("../assets/images/events/roller_coaster_event.jpg");
        background-size: cover;
        background-position: center;
        padding-bottom: 70px;
        padding-top: 50px;
        width: 100%;
        margin-bottom: 2rem;
    }

    .flex_event article {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 15rem;
    }

    .event_title {
        font-size: 5rem;
        color: antiquewhite;
        background-color: rgba(62, 145, 142, 0.84);
        border-radius: 2rem;
        padding: 2rem;
    }

    .event_subtitle {
        display: flex;
        flex-direction: column;
        align-content: start;
        font-size: 5rem;
    }

    .flex_event_row {
        display: flex;
        flex-direction: row;
    }

    .event_description_size {
        font-size: 3rem;
        line-height: 4rem;
    }

    .flex_details div{
        display: flex;
        flex-direction: row;
        margin-right: 2rem;
    }

    .details_icons {
        width: 5rem;
    }

    .event_buttons_margin div {
        margin-top: 3rem;
        margin-bottom: 3rem;
        margin-right: 20rem;
        margin-left: 10rem;
    }

    .event_buttons_participate a, button {
        font-size: 4rem;
        padding: 1.5rem;
        background: #395c8a;
        color: white;
        border-radius: 2rem;
    }

    .event_buttons_participate a:hover {
        background: white;
        color: #395c8a;
    }

    .event_buttons a {
        font-size: 4rem;
        padding: 1.5rem;
        background: white;
        border: 2px solid #395C8AFF;
        color: #395C8AFF;
        border-radius: 2rem;
    }

    .event_buttons a:hover {
        background: #395c8a;
        color: white;
    }

</style>


