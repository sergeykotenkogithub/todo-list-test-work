<template>
	<div class="wrapper">
		<h2 class="text">
			<span>This is a test assignment.</span>
			<span>In this application is implemented:</span>
		</h2>
		<ul class="list">
			<li class="item" v-for="li in list" :key="li">- {{ li }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HomeComponent',
	setup() {
		const list = [
			'Creating a todo',
			'Editing todo',
			'Deleting todo',
			'Saving a list',
			'Work with Vuex',
			'Work with Router',
		]

		return {
			list,
		}
	},
})
</script>

<style scoped lang="scss">
.wrapper {
	width: 900px;
	margin: 0 auto;
	padding-top: 10px;
	@media (max-width: 970px) {
		width: 100%;
	}
}
.list {
	list-style-type: none;
	padding: 0;
}

.item {
	margin: 10px;
}

.text {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
