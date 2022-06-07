<template>
    <main class="container">
        <section class="margins">
            <article class="create_event_form">
                <h2 class="home_title">Create an event</h2>
                <form>
                    <label for="eventName">Select a name for the event:</label>
                    <input type="text" id="eventName" name="eventName" required minlength="1" maxlength="30" placeholder="name" v-model="eventName" />

                    <label for="image">Select a picture for the event:</label>
                    <input type="text" id="image" name="event_image" placeholder="image" v-model="image" >

                    <label for="location">Locate your event:</label>
                    <input type="text" id="location" name="location" required minlength="1" maxlength="30" placeholder="location" v-model="location" />

                    <label for="participants">Max. participants:</label>
                    <input type="number" id="participants" name="participants" min="1" placeholder="participants" v-model="n_participators">

                    <label for="category">Choose a category:</label>
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
                        <label for="description">Give your event a description:</label>
                        <textarea rows="6" cols="40" id="description" name="description" placeholder="Describe your event..." v-model="description"></textarea>
                    </div>

                    <label for="start_date">Starting date:</label>
                    <input type="date" id="start_date" name="event_start" min="2022-04-01" v-model="sDate">

                    <label for="end_date">Ending date:</label>
                    <input type="date" id="end_date" name="event_end" min="2022-04-01" v-model="eDate">

                    <label for="start_time">Starting hour:</label> <input type="time" id="start_time" name="start_time" v-model="sTime">
                    <label for="end_time">Ending hour:</label> <input type="time" id="end_time" name="end_time" v-model="eTime">

                </form>
                <button class="button_event_creation" type="button" v-on:click="create">CREATE IT!</button>
            </article>
        </section>
    </main>  
</template>

<script>
    export default {
        name: 'CreateEventView',
        methods: {
            create() {
                fetch("http://puigmal.salle.url.edu/api/v2/events", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + this.$root.$data.token,
                },
                body: JSON.stringify({
                    name: this.eventName,	
                    image: this.image,
                    location: this.location,
                    description: this.description,
                    eventStart_date: this.sDate + ", " + this.sTime,
                    eventEnd_date: this.eDate+ ", " + this.eTime,
                    n_participators: this.n_participators,
                    type: this.type,
                }),
                })
                .then((res) => {
                    if (res.status != 200) {
                        alert("Missing parameters");
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