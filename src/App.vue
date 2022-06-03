<template>
	<HeaderHeader v-show="$route.path != '/'"/>
    <router-view />
    <FooterFooter v-show="$route.path != '/'"/>
</template>
<script>

    import HeaderHeader from '@/components/Header.vue'
    import FooterFooter from '@/components/Footer.vue'

	export default {
		name: 'HeaderFooter',
		components: {
			HeaderHeader,
			FooterFooter
		},
        
        data() {
            return {
                token: localStorage.getItem("token"),
                myId: localStorage.getItem("myId"),
                eventId: localStorage.getItem("eventId"),
                userId: localStorage.getItem("friendId"),
            }
        },
	}

</script>

<style>
  
.container {
    width: 100%;
}

:root {
    --footer-height: 50px;
    --footer-padding: 10px;
}

body {
    margin: 0;
}

* {
    font-family: "Helvetica", sans-serif ;
    font-weight: lighter;
    line-height: 1em;
}

a {
    text-decoration: none;
}

.white{
    color: white;
}

.black{
    color: black;
}

.searchText {
    margin-top: 20px;
}

.friend_add {
    padding: 2rem;
    background-color: #8046A887;
    color: black;
    border-radius: 2rem;
}

.friend_add:hover {
    background-color: whitesmoke;
    color: #8046A887;

}

.bold {
    font-weight: bold;
}

.category_music{
    background-color: rgba(140, 64, 143, 0.71);
}

.category_education{
    background-color: rgba(215, 52, 52, 0.32);
}

.category_sports{
    background-color: rgba(52, 128, 215, 0.32);
}

.category_games{
    background-color: rgba(128, 70, 168, 0.32);
}

.category_travel{
    background-color: rgba(65, 155, 67, 0.59);
}

.category_food{
    background-color: rgba(220, 103, 6, 0.62);
}

.category_other{
    background-color: rgba(215, 174, 36, 0.87);
}

.delete_size {
    font-size: 2.5rem;
}

.delete_profile_anyway {
    padding: 2rem;
    color: whitesmoke;
    background-color: darkred;
    border-radius: 5rem;
}

.delete_profile_anyway:hover {
    background-color: whitesmoke;
    color: darkred;
}

.delete_cancel {
    padding: 2rem;
    color: darkred;
    background-color: whitesmoke;
    border-radius: 5rem;
}

.delete_cancel:hover {
    background-color: darkred;
    color: whitesmoke;
}

    main {
        padding: 20px;
        min-height: calc(
                100vh - 20px - 115px - var(--footer-padding) * 2 - var(--footer-height)
        );
    }

    html {
        font-size: 5px;
    }

    h1 {
        font-size: 6rem;
    }

    h2 {
        font-size: 7rem;
    }

    h3 {
        font-size: 3.5rem;
    }

    h4 {
        font-size: 3rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    .margins {
        padding-left: 30px;
        padding-right: 30px;
    }

    .flex_header {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgb(1, 25, 54);
        justify-content: space-between;
    }

    .flex_header div nav a {
        padding: 1.5rem;
    }

    .flex_header div nav a img {
        background: rgb(217, 231, 253);
        border-radius: 80px;
        padding: 5px;
        width: 25px;
    }

    .flex_header div nav a img:hover {
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 9px;
    }

    .star-container {
        display: flex;
        align-items: flex-start;
    }

    .star:before {
        content: "\f005";
        font-family: fontAwesome;
        font-size: 60px;
        position: relative;
        display: block;
        color: #aaa;
    }

    .star:after {
        content: "\f005";
        font-family: fontAwesome;
        top: 7px;
        font-size: 60px;
        color: gold;
        opacity: 0;
    }

    .star:hover:after,
    .star:hover ~ .star:after,
    .star.star__checked:after,
    .star.star__checked ~ .star:after{
        opacity: 1;
    }

    footer {
        background: #011936;
    }

    .flex_footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inlineNav div{
        display: inline-block;
        margin-right: 4rem;
    }

    .inlineNav div h4 {
        margin-left: 9rem;
        font-size: 2.5rem;
    }

    .inlineNav div nav a h5{
        font-size: 2rem;
    }

    .inlineNav a:hover{
        text-decoration: underline;
        text-decoration-color: #338f8f;
    }

    .home_title {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    .searchBox:focus {
        width: 700px;
    }

    .searchBox {
        margin-top: 25px;
        width: 500px;
        box-sizing: border-box;
        border: 1px solid #395c8a;
        border-radius: 4px;
        background-color: white;
        background-image: url('assets/images/icons/search_icon.png');
        background-position: 2px;
        background-size: 30px;
        background-repeat: no-repeat;
        padding: 15px 20px 15px 40px;
        transition: width 0.5s ease-in-out;
        font-size: 2.2rem;
    }

    .searchBox:focus {
        width: 600px;
    }

    .searchImage {
        width: 50%;
        height: auto;
    }

    .profile_round {
        border-radius: 50rem;
        width: 20rem;
    }

    .logout_profile {
        color: darkred;
        padding: 1.5rem;
    }

    .logout_profile:hover {
        color: whitesmoke;
        background-color: darkred;
        border-radius: 50rem;
    }

    .div_inline {
        display: inline-block;
    }

    

    .star-container {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
    }

    .star:before {
        content: "\f005";
        font-family: fontAwesome;
        font-size: 30px;
        position: relative;
        display: block;
        color: #aaa;
    }

    .star:after {
        content: "\f005";
        font-family: fontAwesome;
        top: 7px;
        font-size: 30px;
        color: gold;
        opacity: 0;
    }

    .star:hover:after,
    .star:hover ~ .star:after,
    .star.star__checked:after,
    .star.star__checked ~ .star:after{
        opacity: 1;
    }

    .users_profile {
        font-size: 5rem;
        color: #0c2341;
    }

    .delete_profile {
        padding: 2rem;
        color: whitesmoke;
        background-color: darkred;
        border-radius: 5rem;
    }

    .delete_profile:hover {
        background-color: whitesmoke;
        color: darkred;

    }

    .comments_profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .divisor_color {
        padding-top: 1rem;
        border-top: 3px solid #0d213a;
        width: 50rem;
    }

    .top_padding {
        padding-top: 5rem;
    }

    .filters article{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px 10px;
    }

    .show_categories{
        display: none;
    }

    .filters_icon {
        display: none;
    }

    .filter_order {
        align-items: flex-start;
    }

    .order_filter{
        display: flex;
        flex-direction: row;
    }

    .img_events{
        border-radius: 8px;
        width: 300px;
    }

    .bottom_margin {
        margin-bottom: 2rem;
    }

    .event_score_margin {
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 10rem;
    }

    .flex_event_buttons {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .flex_event_bkg div h3, div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .create_event_select {
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: none;
        color: #fff;
        background: rgba(46, 50, 93, 0.89);
        text-align: left;
        padding: 0 15px;
        font-size: 2.5rem;
        cursor: pointer;
    }

    .create_event_select:active {
        color: rgba(46, 50, 93, 0.89);
        background-color: white;
    }

    .button_event_creation{
        border: none;
        font-size: 2rem;
        color: white;
        background-color: rgba(10, 7, 75, 0.81);
        border-radius: 30px;
        padding: 15px 30px;
        margin-bottom: 3rem;
    }

</style>
