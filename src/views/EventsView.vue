<template>
    <main>
        <!--h2 for the web's section title -->
        <h2 class="home_title">Discover Events</h2>
        <!--section that gathers the events' categories and filters the displayed events depending on the selected category -->
        <section class="categories_buttons">
            <a href="./events.html">TRENDING</a>
            <a href="./events.html">MUSIC</a>
            <a href="./events.html">EDUCATION</a>
            <a href="./events.html">SPORTS</a>
        </section>
        <!--Section which gathers the filters for the displayed events and all the matching events -->
        <section class="events_general_flex">
            <!--Article that gathers interactions related to the events -->
            <article class="margins">
                <!--Div that enables the possibility to show only the user's events (created or attended) and their chronology-->
                <div class="my_events_button">
                    <a href="events.html">List MY EVENTS</a>
                    <router-link to="/eventology">Visit your EVENTOLOGY</router-link>
                </div>
                <!--Div only visible for desktop screen sizes, which shows some filters to apply on the displayed events-->
                <div class="top_padding">
                    <!--Div that shows input filters about the event's date and location-->
                    <!--This div is not displayed at mobile screen sizes-->
                    <div class="filters_desktop">
                        <label for="location">Chose the starting date:</label>
                        <input type="date" id="start_date" name="event_start" min="2022-04-01">

                        <label for="start_date">Choose the location:</label>
                        <input type="text" id="location" name="location" required minlength="1" maxlength="30" placeholder="location" />
                    </div>
                    <!--Div that shows filters to sort the order on which the events are shown -->
                    <div class="filter_order filters_desktop">
                           <label><input type="checkbox" id="score_filter" value="score_filter" v-model="checked">Order by score</label>
                    </div>
                    <!--Div that allows deleting the filters on desktop events' web page -->
                    <div class="filters_desktop delete_filters">
                        <a href="./events.html">Delete filters</a>
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

        methods: {
            checked() {
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
                this.$root.$data.eventId = id;
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

    .categories_buttons a{
        font-size: 2.5rem;
        color: rgba(3, 50, 107, 0.96);
        border-radius: 10px;
        border: 2px solid rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin: 0 10px;
    }

    .categories_buttons a:hover{
        background: rgb(168, 190, 218);
        border-color: rgb(168, 190, 218);
        color: rgba(3, 50, 107, 0.96);
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
        margin-top: 20px;
    }

    .my_events_button a{
        font-size: 2.2rem;
        color: white;
        border-radius: 10px;
        background: rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin-top: 15px;
    }

    .top_padding {
        padding-top: 5rem;
    }

    .filters_desktop{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2.3rem;
    }

    .filters_desktop a {
        color: #38487c;
        font-weight: bold;
    }

    .filter_order div{
        display: flex;
        flex-direction: row;
        font-size: 2.3rem;
    }

    .filter_order div label{
        margin-bottom: 1.5rem;
    }

    input[type="radio"]{
        width: 1.15em;
        height: 1.15em;
    }

    .delete_filters{
        margin-top: 3rem;
        margin-bottom: 5rem;
        text-align: right;
        font-weight: bold;
    }

    .box_eventer{
        color: #000000;
        background-color: rgba(197, 209, 224, 0.86);
        box-shadow: 5px 3px 20px rgba(60, 83, 115, 0.51);
        border-radius: 8px;
        padding: 0 15px;
        margin: 20px 0;
        align-items: flex-start;
    }

    .box_eventer h5{
        font-size: 2.3rem;
        margin-bottom: 0;
    }

    .button_create_event{
        color: white;
        background: rgba(3, 50, 107, 0.96);
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