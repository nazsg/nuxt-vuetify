<template>
	<div>
		<div class="backdrop" @click="$emit('close')"></div>
		<dialog open>
			<slot></slot>
		</dialog>
	</div>
</template>

<script>
export default {
	emits: ['close']
}
</script>

<style>

</style>