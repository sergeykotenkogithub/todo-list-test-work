<template>
	<div class="home">
		<Home />
	</div>
</template>

<script lang="ts">
import Home from '@/components/Home.vue' // @ is an alias to /src
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HomeView',
	components: {
		Home,
	},
})
</script>
