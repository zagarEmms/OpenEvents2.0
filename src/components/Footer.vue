<template>
	<footer class=" container flex_footer">
        <!--Section which places in two rows the links to legal information-->
        <section class="inlineNav">
            <!--Div which places OpenEvents title-->
            <div>
                <h4 class="white">OpenEvents</h4>
            </div>
            <!--Div which gathers the two links to legal information-->
            <div>
                <nav>
                    <div><router-link to="/terms"><h5 class="white">Terms of use</h5></router-link></div>
                    <div><router-link to="/privacy"><h5 class="white">Privacy Policy</h5></router-link></div>
                </nav>
            </div>
        </section>
        <!--Div which places on a second row the legal label about OpenEvents-->
        <div>
            <h5 class="white">© 1996-2022 OpenEvents.com, Inc. or its affiliates</h5>
        </div>
    </footer>
</template>
<script>
	export default {
		name: 'FooterFooter',
	}
</script>
<style scoped>
</style>
