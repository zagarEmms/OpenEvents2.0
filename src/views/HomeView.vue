<template>
<div>
    <main id="home_background">
        <section class="container">
            <article class="flex_home">
                <div>
                    <h2 class="home_title">Hey! What are you up to?</h2>
                </div>
            </article>
            <article class="margins flex_bkg_home">
                <div class="bkgFriends">
<<<<<<< HEAD
                    <router-link to="/friends"><h1 class="friendsHome">MEET FRIENDS</h1></router-link>
                </div>
                <div class="bkgEvents">
                    <router-link to="/events"><h1 class="friendsHome">ENJOY EVENTS</h1></router-link>
=======
                    <router-link to = "/friends"><h1 class="friendsHome">MEET FRIENDS</h1></router-link>
                </div>
                <div class="bkgEvents">
                    <router-link to = "/events"><h1 class="friendsHome">ENJOY EVENTS</h1></router-link>
>>>>>>> 08b72c8dcce8264324bf4688ef717f93f433d252
                </div>
            </article>
        </section>
    </main>
</div>

</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style scoped>

    #home_background {
        background: #eef3f8;
        background: linear-gradient(60deg, #bfbaff 0%, #ecedfd 70%);
    }

    .flex_home div  {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .flex_bkg_home {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 20px 200px;
    }

    .friendsHome {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(225, 234, 241);
        background: rgba(76, 83, 117, 0.82);
        border-radius: 7px;
        padding: 4px;
        transition: transform 250ms, opacity 400ms;
        font-weight: bold;
    }

    .friendsHome:hover{
        transform: translate3d(3%, -6%, 10px);
        background: rgb(77, 76, 117);
    }

    .bkgFriends {
        background-image: url("../assets/images/friends_bkg.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 400px;
        height: 300px
    }

    .bkgEvents {
        background-image: url("../assets/images/events_bkg.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 400px;
        height: 300px;
    }

</style>
