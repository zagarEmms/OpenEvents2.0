<template>
    <main>
        <div>
            <h2>Eventology</h2>
            <h3>TODAY: {{currentDay}}</h3>
        </div>
        <div>
            <article class="flex_eventology_events events_list eventology_list">
                <div v-for="event in event" :key="event.id">
                    <router-link to = "/event" v-on:click="saveEventId(event.id)">
                        <div class="events_details eventology_details">
                            <a href="event.html">
                                <h3 class="event_title_box category_music">{{event.name}}</h3>
                                <ul>
                                    <li><img src="../assets/images/icons/party_icon.png" alt="Party icon">Description: {{event.description}}</li>
                                    <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Started: {{event.eventStart_date}}</li>
                                    <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Ended: {{event.eventEnd_date}}</li>
                                </ul>
                            </a>
                        </div>
                    </router-link>
                    <img class="eventology_desktop_arrow" src="../assets/images/icons/arrow_icon.png" alt="Arrow">
                </div>
            </article>
        </div>
    </main>
</template>

<script>
    
    export default {

        beforeMount() {
            this.getEvents();
        },

         data() {
            return {
                event: [],
                currentDay: this.getDay(),
            }
        },

        methods: {
                
            getEvents() {

                let id = this.$root.$data.myId;

                fetch("http://puigmal.salle.url.edu/api/v2/users/" + id + "/assistances", {
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
            },
            getDay() {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = dd + '/' + mm + '/' + yyyy;
                return today;
            },
            saveEventId(id) {
                this.$root.$data.eventId = id;
            },

        },
        name: 'EventologyView',

    }

</script>


<style scoped>
    .eventology_list div div {
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0.5rem solid #434952;
        border-radius: 3rem;
    }

    .flex_eventology {
        display: flex;
        flex-direction: row;
    }

    .eventology_icons img {
        width: 5rem;
        padding: 3rem;
    }

    .flex_eventology_events {
        display: flex;
        flex-direction: column;
        max-width: 50rem;
    }

    .eventology_desktop_arrow {
        width: 8rem;
    }

    .eventology_details a {
        margin: 0;
    }

    .eventology_details ul, ul li{
        margin-right: 3rem;
        padding-top: 1.5rem;
    }

    .event_title_box{
        margin-top: 0;
        margin-bottom: 10px;
        border-radius: 8px;
        width: 300px;
        padding: 15px 0;
        text-align: center;
        font-size: 3rem;
    }

    .events_list {
        display: flex;
        flex-direction: column;
        padding: 8px;
        flex-wrap: wrap;
    }

    .events_details a{
        margin: 30px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
    }

    .events_details ul, ul li{
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
        font-size: 2.5rem;
        padding-bottom: 20px;
    }

    .events_details ul li img{
        width: 20px;
    }

</style>