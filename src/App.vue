<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/todo">Todo</router-link>
	</nav>
	<router-view />
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
	background: radial-gradient(
		circle at 10% 20%,
		rgb(4, 159, 108) 0%,
		rgb(194, 254, 113) 90.1%
	);

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #2b7a56;
		}
	}
}
</style>
