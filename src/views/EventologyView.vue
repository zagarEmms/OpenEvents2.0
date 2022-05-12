<template>
    <main>
        <div>
            <h2>Eventology</h2>
            <h3>TODAY: 6 Sep. 2022</h3>
        </div>
        <div>
            <article class="flex_eventology">
                <div class="eventology_icons"><a href="./eventology.html"><img src="../assets/images/icons/left_icon.png" alt="Left icon"></a></div>
                <div><h4 class="bold">MARCH 2022</h4></div>
                <div class="eventology_icons"><a href="./eventology.html"><img src="../assets/images/icons/right_icon.png" alt="Right icon"></a></div>
            </article>
            <article class="flex_eventology_events events_list eventology_list">
                <div class="events_details eventology_details">
                    <a href="event.html">
                        <h3 class="event_title_box category_music">Annual Wonderland</h3>
                        <ul>
                            <li><img src="../assets/images/icons/party_icon.png" alt="Party icon">Description: Music Festival</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Started: 28 March 2022</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Ended: 30 March 2022</li>
                        </ul>
                    </a>
                </div>
                <img class="eventology_desktop_arrow" src="../assets/images/icons/arrow_icon.png" alt="Arrow">
                <div class="events_details eventology_details">
                    <a href="event.html">
                        <h3 class="event_title_box category_food">Eat Fest</h3>
                        <ul>
                            <li><img src="../assets/images/icons/party_icon.png" alt="Party icon">Description: Eating Festival</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Started: 21 March 2022</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Ended: 25 March 2022</li>
                        </ul>
                    </a>
                </div>
                <img class="eventology_desktop_arrow" src="../assets/images/icons/arrow_icon.png" alt="Arrow">
                <div class="events_details eventology_details">
                    <a href="event.html">
                        <h3 class="event_title_box category_travel">NightMade Travel Festival</h3>
                        <ul>
                            <li><img src="../assets/images/icons/party_icon.png" alt="Party icon">Description: Travel Festival</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Started: 1 March 2022</li>
                            <li><img src="../assets/images/icons/calendar_icon.png" alt="Calendar icon">Ended: 5 March 2022</li>
                        </ul>
                    </a>
                </div>
            </article>
        </div>
    </main>
</template>

<style scoped>
    .eventology_list div {
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