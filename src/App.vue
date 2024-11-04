<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from './modules/components/header.vue'
import Footer from './modules/components/footer.vue'

export default {
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Montserrat", sans-serif;
	font-size: 14px;
	line-height: 19.5px;
	font-weight: 500;
}

.align-full {
	width: 1440px;
	max-width: 1440px;
	margin-left: auto !important;
    margin-right: auto !important;
	padding: 0 50px;
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.column {
	display: flex;
	flex-direction: column;
}

.row {
	display: flex;
	flex-direction: row;
}

.pointer {
	cursor: pointer;
}

$spaces: 0, 2, 4, 6, 8, 10, 12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 50, 60;
@each $space in $spaces {
	.mb-#{$space} {
        margin-bottom: $space + px !important;
    }

    .mt-#{$space} {
        margin-top: $space + px !important;
    }

    .ml-#{$space} {
        margin-left: $space + px !important;
    }

    .mr-#{$space} {
        margin-right: $space + px !important;
    }
}

</style>
