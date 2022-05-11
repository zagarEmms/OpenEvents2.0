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
        <section class="events_general_flex" v-if="veure">
            <!--Article that gathers interactions related to the events -->
            <article class="margins">
                <!--Div that enables the possibility to show only the user's events (created or attended) and their chronology-->
                <div class="my_events_button">
                    <a href="events.html">List MY EVENTS</a>
                    <a href="eventology.html">Visit your EVENTOLOGY</a>
                </div>
                <!--Div only visible for mobile screen sizes which links to a "filters" screen-->
                <!--This div is not displayed at desktop screen sizes-->
                <div class="filters">
                    <a class="show_categories" href="./events.html">show more categories</a>
                    <a  class="filters_icon" href="filter_events.html">
                        <img
                            src="../media/images/icons/settings_icon.png"
                            alt="settings icon"
                            width="50"
                        />
                    </a>
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
                        <div>
                            <input type="radio" id="ascending" name="order" value="order">
                            <label for="ascending">Ascending</label>
                        </div>
                        <div>
                            <input type="radio" id="descending" name="order" value="order">
                            <label for="descending">Descending</label>
                        </div>
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
                    <a href="create_event.html"><h4 class="button_create_event">Create an event</h4></a>
                </div>
            </article>
            <!--Article which gathers all the possible events depending on the chosen filters -->
            <article class="events_list">
                <!--Div which gathers all the information related to one single event: image, location, starting date and maximum participants-->
                <div class="events_details">
                    <!--Every event is clickable, so it redirects to the specific event page with all its information -->
                    <a href="event.html">
                        <div><img class="img_events" src="../media/images/events/roller_coaster_event.jpg" alt="rollercoaster_image" width="450"></div>
                        <h3 class="event_title_box category_travel">Annual Wonderland</h3>
                        <!--The details are set in a list with three specific points-->
                        <ul>
                            <li><img src="../media/images/icons/location_icon.png" alt=""> Location: Barcelona</li>
                            <li><img src="../media/images/icons/calendar_icon.png" alt="">Start date: 10 Mar, 2022</li>
                            <li><img src="../media/images/icons/group_icon.png" alt="">Max participants: 500</li>
                        </ul>
                    </a>
                </div>
                <div class="events_details">
                    <a href="event.html">
                        <div><img class="img_events" src="../media/images/events/eating_event.jpg" alt="food_image" width="450"></div>
                        <h3 class="event_title_box category_food">Eat Fest</h3>
                        <ul class="">
                            <li><img src="../media/images/icons/location_icon.png" alt=""> Location: Castelldefels</li>
                            <li><img src="../media/images/icons/calendar_icon.png" alt="">Start date: 24 April, 2022</li>
                            <li><img src="../media/images/icons/group_icon.png" alt="">Max participants: 1000</li>
                        </ul>
                    </a>
                </div>
                <div class="events_details">
                    <a href="event.html">
                        <div><img class="img_events" src="../media/images/events/gig_event.jpg" alt="concert_image"></div>
                        <h3 class="event_title_box category_music">NightMade music festival</h3>
                        <ul class="">
                            <li><img src="../media/images/icons/location_icon.png" alt=""> Location: Barcelona</li>
                            <li><img src="../media/images/icons/calendar_icon.png" alt="">Start date: 10 June, 2022</li>
                            <li><img src="../media/images/icons/group_icon.png" alt="">Max participants: 200</li>
                        </ul>
                    </a>
                </div>
                <div class="events_details">
                    <a href="event.html">
                        <div><img class="img_events" src="../media/images/events/sports_event.jpg" alt="basket_image" width="450"></div>
                        <h3 class="event_title_box category_sports">FightBall</h3>
                        <ul class="">
                            <li><img src="../media/images/icons/location_icon.png" alt=""> Location: Esplugues</li>
                            <li><img src="../media/images/icons/calendar_icon.png" alt="">Start date: 24 May, 2022</li>
                            <li><img src="../media/images/icons/group_icon.png" alt="">Max participants: 100</li>
                        </ul>
                    </a>
                </div>
                <div class="events_details">
                    <a href="event.html">
                        <div><img class="img_events" src="../media/images/events/games_event.jpg" alt="just_dance_image" width="450"></div>
                        <h3 class="event_title_box category_games">Share your move</h3>
                        <ul class="">
                            <li><img src="../media/images/icons/location_icon.png" alt=""> Location: Lloret de Mar</li>
                            <li><img src="../media/images/icons/calendar_icon.png" alt="">Start date: 24 June, 2022</li>
                            <li><img src="../media/images/icons/group_icon.png" alt="">Max participants: 2000</li>
                        </ul>
                    </a>
                </div>
            </article>
        </section>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                veure:1
            }
        },
            name: 'EventsListView',
    }
</script>