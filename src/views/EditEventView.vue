<template>
    <main class="container">
        <section class="margins">
            <article class="create_event_form">
                <h2 class="home_title">Edit your event</h2>
                <h3 class="home_title">Fill only the edited:</h3>
                <form>
                    <label for="eventName">Select a new name for the event:</label>
                    <input type="text" id="eventName" name="eventName" required minlength="1" maxlength="30" placeholder="name" v-model="eventName" />

                    <label for="image">Select a new picture for the event:</label>
                    <input type="text" id="image" name="event_image" placeholder="image" v-model="image" >

                    <label for="location">Relocate your event:</label>
                    <input type="text" id="location" name="location" required minlength="1" maxlength="30" placeholder="location" v-model="location" />

                    <label for="participants">New Max. participants:</label>
                    <input type="number" id="participants" name="participants" min="1" placeholder="participants" v-model="n_participators">

                    <label for="category">Choose a new category:</label>
                    <select class="create_event_select" id="category" name="category" v-model="type">
                        <option value="Category">Category</option>
                        <option value="Music">Music</option>
                        <option value="Education">Education</option>
                        <option value="Sports">Sports</option>
                        <option value="Games">Games</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>

                    <div class="create_event_textarea">
                        <label for="description">Give your event a new description:</label>
                        <textarea rows="6" cols="40" id="description" name="description" placeholder="Describe your event..." v-model="description"></textarea>
                    </div>

                    <h4 class="home_title">Date and time must be all completed if edited:</h4>

                    <label for="start_date">New starting date:</label>
                    <input type="date" id="start_date" name="event_start" min="2022-04-01" v-model="sDate">

                    <label for="end_date">New ending date:</label>
                    <input type="date" id="end_date" name="event_end" min="2022-04-01" v-model="eDate">

                    <label for="start_time">New starting hour:</label> <input type="time" id="start_time" name="start_time" v-model="sTime">
                    <label for="end_time">New ending hour:</label> <input type="time" id="end_time" name="end_time" v-model="eTime">

                </form>
                <button class="button_event_creation" type="button" v-on:click="edit">EDIT IT!</button>
            </article>
        </section>
    </main>  
</template>

<script>
    export default {
        name: 'CreateEventView',
        methods: {
            edit() {

                let eventId = this.$root.$data.eventId;
                console.log(this.$root.$data.eventId)

                let event = {};

                if (this.eventName != undefined) {
                    event.name = this.eventName
                }

                if (this.image != undefined) {
                    event.image = this.image
                }

                if (this.location != undefined) {
                    event.location = this.location
                }

                if (this.n_participators != undefined) {
                    event.n_participators = this.n_participators
                }

                if (this.type != undefined) {
                    event.type = this.type
                }

                if (this.description != undefined) {
                    event.description = this.description
                }

                if (this.sDate != undefined) {
                    event.sDate = this.sDate + ", " + this.sTime
                }

                if (this.eDate != undefined) {
                    event.eDate = this.eDate + ", " + this.eTime
                }

                console.log(event)

                fetch("http://puigmal.salle.url.edu/api/v2/events/" + eventId, {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                body: JSON.stringify({ event }),
                })
                .then((res) => {
                    if (res.status != 200) {
                        console.log("Missing parameters");
                    } else {
                        return res.json();
                    }
                })
                .then(() => {
                    this.$router.push('events');
                });
            },
        }
    }
</script>

<style scoped>

.create_event_form{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.3rem;
}

.create_event_form form label {
    font-weight: bold;
}

.create_event_form form input, form div textarea, form div input {
    font-size: 2.3rem;
    margin-bottom: 50px;
}

.create_event_form form div textarea{
    display: flex;
    flex-direction: column;
    padding: 7px;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-color: #9ba3da;
    border-radius: 10px;
    align-self: center;
}

.create_event_form input, div input{
    box-sizing: border-box;
    outline: none;
    display: block;
    width: 100%;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #9ba3da;
    margin-top: 1rem;
    margin-bottom: 3rem;
    height: 45px;
}

.create_event_textarea{
    margin-top: 4rem;
    align-items: flex-start;
}
    
</style>