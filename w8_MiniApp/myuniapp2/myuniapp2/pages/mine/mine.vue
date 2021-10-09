<template>
	<div>
		Mine
		
		<p v-bind:title="title">{{title}}</p>
		<h1>span</h1>
		<span>span</span>
		<button @click="changeCount">count:{{count}}</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Mine',
				count:1
			}
		},
		onLoad() {
	
		},
		methods: {
			changeCount(){
				this.count++;
			}
		}
	}
</script>

<style>
	h1{color:#f00}
</style>
