<template>
	<header class="container">
		<section class="flex_header margins">
            <!--Article which displays the main title, which is an "a" clickable tag that redirects to the home page-->
            <article>
                <router-link to="/home"><h1 id="mainTitle">OpenEvents</h1></router-link>
            </article>
            <!--Article which displays the navigation bar with the sections of the OpenEvents' website-->
            <article>
                <div>
                    <!--Nav which gathers the links (presented into the shape of images) to the sections of the OpenEvents' website-->
                    <nav>
                        <a href="search.html">
                            <img
                                src="../assets/images/icons/search_icon.png"
                                alt="search icon"
                            />
                        </a>
                        <a href="./events.html">
                            <img
                                src="../assets/images/icons/party_icon.png"
                                alt="events icon"
                            />
                        </a>
                        <a href="friends.html">
                            <img
                                src="../assets/images/icons/friends_icon.png"
                                alt="friends icon"
                            />
                        </a>
                        <a href="profile.html">
                            <img
                                src="../assets/images/icons/profile_icon.png"
                                alt="profile icon"
                            />
                        </a>
                        <a href="../index.html">
                            <img
                                src="../assets/images/icons/logout_icon.png"
                                alt="log out icon"
                            />
                        </a>
                    </nav>
                </div>
            </article>
        </section>
	</header>
</template>
<script>
	export default {
		name: 'HeaderHeader',
	}
</script>

<style scoped>

    #mainTitle {
        color: #D9E7FDFF;
        font-weight: bolder;
        letter-spacing: 0.05em;
        text-shadow: 5px 3px 2px #3c5373, 6px 4px 5px #1e2538, 8px 5px 15px #ffffff;
    }

</style>
