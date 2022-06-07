<template>
    <main>
        <!--h2 for the web's section title -->
        <h2 class="home_title">Discover Events</h2>
        <!--section that gathers the events' categories and filters the displayed events depending on the selected category -->
        <section class="categories_buttons">
            <button type="button" v-on:click="filtersEvents(`Trending`)">TRENDING</button>
            <button type="button" v-on:click="filtersEvents(`Music`)">MUSIC</button>
            <button type="button" v-on:click="filtersEvents(`Education`)">EDUCATION</button>
            <button type="button" v-on:click="filtersEvents(`Sports`)">SPORTS</button>
            <button type="button" v-on:click="filtersEvents(`Games`)">GAMES</button>
            <button type="button" v-on:click="filtersEvents(`Travel`)">TRAVEL</button>
            <button type="button" v-on:click="filtersEvents(`Food`)">FOOD</button>
            <button type="button" v-on:click="filtersEvents(`Other`)">OTHER</button>
        </section>
        <!--Section which gathers the filters for the displayed events and all the matching events -->
        <section class="events_general_flex">
            <!--Article that gathers interactions related to the events -->
            <article class="margins">
                <!--Div that enables the possibility to show only the user's events (created or attended) and their chronology-->
                <div class="my_events_button">
                    <button type="button" v-on:click="myEvents">List MY EVENTS</button>
                    <router-link to ="/eventology"><button>Visit your EVENTOLOGY</button></router-link>
                </div>
                <!--Div only visible for desktop screen sizes, which shows some filters to apply on the displayed events-->
                <div class="top_padding">
                    <!--Div that shows input filters about the event's date and location-->
                    <!--This div is not displayed at mobile screen sizes-->
                    <div class="filters_desktop">
                        <label for="name">Search by name:</label>
                        <input type="text" id="name" name="name" required minlength="1" maxlength="30" placeholder="name" v-model="eventName">

                        <label for="start_date">Chose the starting date:</label>
                        <input type="date" id="start_date" name="event_start" min="2022-04-01" v-model="eventDate">

                        <label for="location">Choose the location:</label>
                        <input type="text" id="location" name="location" required minlength="1" maxlength="30" placeholder="location" v-model="eventLocation"/>
                    </div>
                    <div class="filters_desktop search_filters">
                        <button v-on:click="searchEvents">Search</button>
                    </div>
                    <!--Div that shows filters to sort the order on which the events are shown -->
                    <div class="my_events_button">
                        <button type="button" v-on:click="bestEvents">Order by SCORE</button>
                    </div>
                    <!--Div that allows deleting the filters on desktop events' web page -->
                    <div class="filters_desktop delete_filters">
                        <button v-on:click="getEvents">Delete filters</button>
                    </div>
                </div>
                <!--Div that displays the possibility of creating a new event -->
                <div class="box_eventer">
                    <h5>Are you an eventer?</h5>
                    <h5>Create your event now!</h5>
                    <!--A button made out of an "a" tag which links to the "create an event" screen-->
                    <router-link to ="/create"><h4 class="button_create_event">Create an event</h4></router-link>
                </div>
            </article>
            <!--Article which gathers all the possible events depending on the chosen filters -->
            <article class="events_list">
                <!--Div which gathers all the information related to one single event: image, location, starting date and maximum participants-->
                <div class="events_details" v-for="event in event" :key="event.id" >
                    <!--Every event is clickable, so it redirects to the specific event page with all its information -->
                    <router-link to = "/event" v-on:click="saveEventId(event.id)">
                        <div><img class="img_events" src="../assets/images/events/roller_coaster_event.jpg" alt="rollercoaster_image" width="450"></div>
                        <h3 class="event_title_box category_travel">{{event.name}}</h3>
                        <!--The details are set in a list with three specific points-->
                        <ul>
                            <li><img src="../assets/images/icons/location_icon.png" alt="">Location: {{event.location}}</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="">Start date: {{event.eventStart_date}}</li>
                            <li><img src="../assets/images/icons/group_icon.png" alt="">Max participants: {{event.n_participators}}</li>
                        </ul>
                    </router-link>
                </div>
            </article>
        </section>
    </main>
</template>

<script>
    
    export default {

        beforeMount() {
            this.getEvents();
        },

        methods: {
            getEvents() {
                fetch("http://puigmal.salle.url.edu/api/v2/events", {
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
            bestEvents() {
                fetch("http://puigmal.salle.url.edu/api/v2/events/best", {
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
            saveEventId(id) {
                localStorage.setItem("eventId", id);
                this.$root.$data.eventId = id;
            },
            myEvents() {
                fetch("http://puigmal.salle.url.edu/api/v2/events", {
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
                        let myEvents = [];
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].owner_id == this.$root.$data.myId) {
                                myEvents.push(data[i]);
                            }
                        }
                        this.event = myEvents;
                    }
                );
            },
            filtersEvents(type) {
                fetch("http://puigmal.salle.url.edu/api/v2/events", {
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
                        let filterEvents = [];
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].type == type) {
                                filterEvents.push(data[i]);
                            }
                        }
                        this.event = filterEvents;
                    }
                );
            },
            searchEvents() {

                var query = "?";

                if (this.eventLocation != undefined) {
                    query = query + 'location=' + this.eventLocation;
                }

                if (this.eventName != undefined) {
                    if (this.eventLocation != undefined) {
                        query = query + "&";
                    }
                    query = query + 'keyword=' + this.eventName;
                }

                if (this.eventDate != undefined) {
                    if (this.eveventNameentLocation != undefined || this.eventName != undefined) {
                        query = query + "&";
                    }
                    query = query + 'date=' + this.eventDate;
                }

                console.log(query)

                fetch("http://puigmal.salle.url.edu/api/v2/events/search" + query, {
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
                    }
                );
            }
        },

        data() {
            return {
                event: [],
            }
        },

        name: 'EventsListView',
        
    }
</script>

<style scoped>

    .categories_buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .categories_buttons button{
        font-size: 2.5rem;
        background: rgb(208, 221, 238);
        border-radius: 10px;
        border: 2px solid rgba(97, 117, 184, 0.32);
        padding: 10px 8px;
        margin: 0 10px;
    }

    .categories_buttons button:hover{
        border-color: rgb(168, 190, 218);
        background: rgba(51, 75, 153, 0.829);
        color: white;
        font-weight: bold;
        
    }

    .events_general_flex{
        display: flex;
        flex-direction: row;
    }

    .my_events_button {
        display: flex;
        flex-direction: column;
        min-width: 150px;
        align-items: flex-start;
    }

    .my_events_button button{
        font-size: 2.2rem;
        color: white;
        border-radius: 10px;
        border-color: rgb(203, 217, 236);
        background: rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin-top: 15px;
    }

    .my_events_button button:hover{
        font-size: 2.2rem;
        color: black;
        border-radius: 10px;
        background: rgb(203, 217, 236);
        border-color: rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin-top: 15px;
    }

    .top_padding {
        padding-top: 8rem;
    }

    .filters_desktop{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2.3rem;
    }

    .filters_desktop button {
        color: #38487c;
        font-weight: bold;
    }

    label {
        font-size: 2.5rem;
        font-weight: bold;
    }

    input {
        border-radius: 10px;
        border: 1px solid rgba(97, 117, 184, 0.32);
        padding: 5px 8px;
        margin-bottom: 12px;
        margin-top: 3px;
    }

    .search_filters button {
        font-size: 2.5rem;
        color: #38487c;
        border-radius: 10px;
        border: 1px solid rgba(97, 117, 184, 0.32);
        padding: 5px 8px;
    }

    .delete_filters{
        margin-top: 3rem;
        margin-bottom: 5rem;
        font-weight: bold;
    }

    .delete_filters button {
        font-size: 2.5rem;
        color: #7c3838;
        border-radius: 10px;
        border: 1px solid rgba(184, 97, 97, 0.32);
        padding: 5px 8px;
        margin-top: 4rem;
    }

    .box_eventer{
        color: #000000;
        background-color: rgba(197, 209, 224, 0.86);
        box-shadow: 5px 3px 20px rgba(60, 83, 115, 0.51);
        border-radius: 8px;
        padding: 0 15px;
        margin: 20px 0;
        align-items: center;
    }

    .box_eventer h5{
        font-size: 2.3rem;
        margin-bottom: 0;
    }

    .button_create_event{
        color: white;
        background: rgba(36, 46, 58, 0.96);
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 2.5rem;
    }

    .events_list {
        display: flex;
        flex-direction: row;
        padding: 8px;
        flex-wrap: wrap;
    }

    .event_title_box{
        margin-top: 0;
        margin-bottom: 10px;
        border-radius: 8px;
        width: 300px;
        padding: 15px 0;
        text-align: center;
        font-size: 3rem;
        background-color: rgba(97, 117, 184, 0.32);

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