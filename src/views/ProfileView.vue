<template>
    <main>
        <section class="flex_profile">
            <article>
                <div>
                    <h2 class="home_title">Personal Information</h2>
                </div>
                <div class="div_inline">
                    <div class="div_inline">
                        <img class="profile_round" src="../assets/images/profileImg.jpg" alt="Profile Icon">
                    </div>
                    <div class="div_inline">
                        <a href="../index.html"><h3 class="logout_profile">LOG OUT</h3></a>
                    </div>
                </div>
                <div class="flex_profile_info">
                    <div class="profile_info_theme">
                        <h3>Name</h3>
                        <h3>Surnames</h3>
                        <h3>Email</h3>
                        <h3>Password</h3>
                    </div>
                    <div class="profile_info_theme_input">
                        <h3>Tom</h3>
                        <h3>Stanley Holland</h3>
                        <h3>tom@openevents.com</h3>
                        <h3>asdfgh</h3>
                    </div>
                </div>
                <div class="flex_edit_buttons">
                    <div class="div_inline">
                        <div class="div_inline"><a href="./profile.html"><img class="edit_profile_img" src="../assets/images/icons/edit_icon.png" alt="Edit Icon"></a></div>
                        <div class="div_inline"><a href="./profile.html"><h4 class="edit_profile_link">edit your information</h4></a></div>
                    </div>
                    <div>
                        <a href="./profile.html"><h3 class="done_profile">DONE</h3></a>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <h3 class="home_title">Your Statistics</h3>
                </div>
                <h3 class="score_profile">Score</h3>
                <div>
                    <div class="star-container">
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                    </div>
                </div>
                <div class="comments_profile">
                    <h3>users % with less comments </h3>
                    <h3 class="users_profile">30</h3>
                </div>
                <div class="divisor_color"></div>
                <div>
                    <a href="delete.html"><h3 class="delete_profile">DELETE ACCOUNT</h3></a>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
    .flex_profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

.flex_profile_info {
        width: 70rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .flex_profile_info div {
        align-items: flex-start;
    }

    .profile_info_theme h3 {
        justify-items: center;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
    }

    .profile_info_theme_input h3 {
        color: #0c2341;
        border: solid 0.2rem #5b5a5a;
        padding: 1.5rem;
        border-radius: 1rem;
        font-weight: lighter;
        width: 200px;
    }

    .edit_profile_link {
        color: black;
        margin-bottom: 10px;
    }

    .edit_profile_img {
        width: 3rem;
    }

    .done_profile {
        padding: 1.5rem;
        color: whitesmoke;
        background-color: darkgreen;
        border-radius: 5rem;
    }

    .done_profile:hover {
        color: darkgreen;
        background-color: whitesmoke;
    }

    .flex_edit_buttons {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-left: 35rem;
    }

</style>