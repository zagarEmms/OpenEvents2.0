<template>
    <main class="container">
        <section class="margins">
            <article class="create_event_form">
                <h2 class="home_title">Create an event</h2>
                <form>
                    <label for="image">Select a picture for the event:</label>
                    <input type="file" id="image" name="event_image" accept="image/png, image/jpeg">

                    <label for="name">Select a name for the event:</label>
                    <input type="text" id="name" name="name" required minlength="1" maxlength="20" placeholder="name" />

                    <label for="location">Locate your event:</label>
                    <input type="text" id="location" name="location" required minlength="1" maxlength="30" placeholder="location" />

                    <label for="participants">Max. participants:</label>
                    <input type="number" id="participants" name="participants" min="1" placeholder="participants">

                    <label for="category">Choose a category:</label>
                    <select class="create_event_select" id="category" name="category">
                        <option value="0">Category</option>
                        <option value="1">Music</option>
                        <option value="2">Education</option>
                        <option value="3">Sports</option>
                        <option value="4">Games</option>
                        <option value="5">Travel</option>
                        <option value="6">Food</option>
                        <option value="6">Other</option>
                    </select>

                    <div class="create_event_textarea">
                        <label for="description">Give your event a description:</label>
                        <textarea rows="6" cols="40" id="description" name="description" placeholder="Describe your event..."></textarea>
                    </div>

                    <label for="start_date">Starting date:</label>
                    <input type="date" id="start_date" name="event_start" value="Today" min="2022-04-01">

                    <label for="end_date">Ending date:</label>
                    <input type="date" id="end_date" name="event_end" min="2022-04-01">

                    <label for="start_time">Starting hour:</label> <input type="time" id="start_time" name="start_time">
                    <label for="end_time">Ending hour:</label> <input type="time" id="end_time" name="end_time">

                </form>
                <button class="button_event_creation" type="button" onclick="window.location.href='home.html'">CREATE IT!</button>
            </article>
        </section>
    </main>  
</template>

<script>
    export default {
            name: 'CreateEventView',
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