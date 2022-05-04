<template>
	<HeaderHeader/>
	<FooterFooter/>
</template>

<script>

	import HeaderHeader from '@/components/Header.vue'
	import FooterFooter from '@/components/Footer.vue'

	export default {
		name: 'HomeView',
		components: {
			HeaderHeader,
			FooterFooter
		}
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

#mainTitle {
    color: #D9E7FDFF;
    font-weight: bolder;
    letter-spacing: 0.05em;
    text-shadow: 5px 3px 2px #3c5373, 6px 4px 5px #1e2538, 8px 5px 15px #ffffff;
}

#home_background{
    background: #eef3f8;
    background: linear-gradient(60deg, #bfbaff 0%, #ecedfd 70%);
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

.friends_flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.friend_info{
    align-items: flex-start;
}

.friends_profile_img {
    border-radius: 10rem;
    width: 10rem;
    padding-right: 2rem;
}

.friends_flex_info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.info_friend{
    align-items: flex-start;
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
        font-size: 8rem;
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

    .flex_login form, article{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .backgroundImg{
        background-image: url("assets/images/purple_background.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-bottom: 70px;
        padding-top: 30px;
    }

    .flex_signup form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .input_box input{
        font-size: 3rem;
        margin-bottom: 3rem;
        width: 30rem;
        box-shadow:5px 5px 10px rgba(48, 68, 94, 0.35);
        border-radius: 10px;
        padding: 8px 20px;
        border: none;
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

    .indexInput {
        padding-left: 20px;
    }

    .buttonLogIn {
        background: #283d8f;
        border-radius: 999px;
        box-shadow: #283d8f 0 10px 20px -10px;
        box-sizing: border-box;
        color: #E8EEFFFF;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 4rem;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 10px 20px;
        user-select: none;
        touch-action: manipulation;
        border: 0;
    }

    .buttonLogIn:hover {
        background: #E8EEFFFF;
        color: #0d213a;
    }

    .buttonSignUp {
        background: rgb(168, 190, 218);
        border-radius: 999px;
        box-shadow: rgb(168, 190, 218) 0 10px 20px -10px;
        box-sizing: border-box;
        color: #15263a;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 4rem;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 10px 20px;
        user-select: none;
        touch-action: manipulation;
        border: 0;
    }

    .buttonSignUp:hover {
        background: rgb(1, 25, 54);
        color: rgb(168, 190, 218);
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

    .bkgFriends {
        background-image: url("assets/images/friends_bkg.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 400px;
        height: 300px
    }

    .bkgEvents {
        background-image: url("assets/images/events_bkg.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 400px;
        height: 300px;
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
        padding-top: 6rem;
        padding-bottom: 3rem;
    }

    .divisor_color {
        padding-top: 1rem;
        border-top: 3px solid #0d213a;
        width: 50rem;
    }

    .terms_flex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .terms_title {
        width: 25rem;
        font-weight: bold;
    }

    .terms_description {
        font-size: 3rem;
    }

    .top_padding {
        padding-top: 5rem;
    }

    .categories_buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .categories_buttons a{
        font-size: 2.5rem;
        color: rgba(3, 50, 107, 0.96);
        border-radius: 10px;
        border: 2px solid rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin: 0 10px;
    }

    .categories_buttons a:hover{
        background: rgb(168, 190, 218);
        border-color: rgb(168, 190, 218);
        color: rgba(3, 50, 107, 0.96);
    }

    .events_general_flex{
        display: flex;
        flex-direction: row;
    }

    .my_events_button {
        display: flex;
        flex-direction: column;
        min-width: 150px;
        align-items: flex-start;
        margin-top: 20px;
    }

    .my_events_button a{
        font-size: 2.2rem;
        color: white;
        border-radius: 10px;
        background: rgba(3, 50, 107, 0.96);
        padding: 10px 8px;
        margin-top: 15px;
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

    .filters_desktop{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2.3rem;
    }

    .filters_desktop a {
        color: #38487c;
        font-weight: bold;
    }

    .filter_order {
        align-items: flex-start;
    }

    .filter_order div{
        display: flex;
        flex-direction: row;
        font-size: 2.3rem;
    }

    .filter_order div label{
        margin-bottom: 1.5rem;
    }

    input[type="radio"]{
        width: 1.15em;
        height: 1.15em;
    }

    .delete_filters{
        margin-top: 3rem;
        margin-bottom: 5rem;
        text-align: right;
        font-weight: bold;
    }

    .order_filter{
        display: flex;
        flex-direction: row;
    }

    .box_eventer{
        color: #000000;
        background-color: rgba(197, 209, 224, 0.86);
        box-shadow: 5px 3px 20px rgba(60, 83, 115, 0.51);
        border-radius: 8px;
        padding: 0 15px;
        margin: 20px 0;
        align-items: flex-start;
    }

    .button_create_event{
        color: white;
        background: rgba(3, 50, 107, 0.96);
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 2.5rem;
    }

    .box_eventer h5{
        font-size: 2.3rem;
        margin-bottom: 0;
    }

    .events_list {
        display: flex;
        flex-direction: row;
        padding: 8px;
        flex-wrap: wrap;
    }

    .img_events{
        border-radius: 8px;
        width: 300px;
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

    .flex_event article {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 15rem;
    }

    .rc_bkg {
        background-image: url("assets/images/events/roller_coaster_event.jpg");
        background-size: cover;
        background-position: center;
        padding-bottom: 70px;
        padding-top: 50px;
        width: 100%;
        margin-bottom: 2rem;
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

    .flex_details div{
        display: flex;
        flex-direction: row;
        margin-right: 2rem;
    }

    .details_icons {
        width: 5rem;
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

    .bottom_margin {
        margin-bottom: 2rem;
    }

    .event_buttons_margin div {
        margin-top: 3rem;
        margin-bottom: 3rem;
        margin-right: 20rem;
        margin-left: 10rem;
    }

    .event_score_margin {
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 10rem;
    }

    .event_description_size {
        font-size: 3rem;
        line-height: 4rem;
    }

    .flex_event_buttons {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .flex_event_row {
        display: flex;
        flex-direction: row;
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

</style>
