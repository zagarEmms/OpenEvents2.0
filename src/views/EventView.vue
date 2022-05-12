<template>
    <main class="container">
        <div class="rc_bkg flex_event">
            <h3 class="event_title">Annual Wonderland</h3>
        </div>
        <div class="flex_event_row">
            <section class="flex_event margins">
                <article>
                    <div>
                        <h3 class="event_subtitle">Description</h3>
                    </div>
                    <div>
                        <p class="event_description_size">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique tortor eu quam dignissim, et fringilla ante egestas. Aenean elementum elementum metus, eget condimentum eros finibus non. Proin finibus, ex eget ultrices egestas, augue neque egestas turpis, non imperdiet eros orci quis mauris. Donec eget vulputate mauris. Nullam faucibus consequat mattis. Duis vitae turpis a sem lobortis vestibulum at ac libero.
                        </p>
                    </div>
                </article>
                <article>
                    <h3 class="event_subtitle">Details</h3>
                </article>
                <article class="flex_details">
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/location_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Location: Barcelona</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/calendar_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Dates: 10 Mar, 2022 - 12 Mar, 2022</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/group_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Max. participants: 500</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/category_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Category: music</h3></div>
                    </div>
                    <div>
                        <div class="div_inline"><img class="details_icons" src="../assets/images/icons/person_icon.png" alt="Location Icon"></div>
                        <div class="div_inline"><h3>Creator: Luca</h3></div>
                    </div>
                </article>
            </section>
            <section class="flex_event">
                <h3 class="bold">Creator Score</h3>
                <div class="star-container bottom_margin">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
            </section>
            <section class="event_buttons_margin">
                <div class="event_buttons_participate"><a  href="./event.html">Participate!</a></div>
                <div class="event_buttons"><a href="./event.html">Share!</a></div>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
            name: 'EventView',
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

    .event_buttons_participate a {
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


