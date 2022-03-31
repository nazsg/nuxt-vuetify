<template>
  <div>
		<!-- <section class="journal">
			<input type="text" v-model="search" placeholder="find journal">
		</section> -->
		<!-- <div class="results" v-for="(d, index) in tips2" :key="index" v-html="d">
		</div> -->
		<!-- <journal /> -->
		<button @click="dialogIsVisible = true">dialog</button>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <journal />
      <button @click="hideDialog">Close it!</button>
    </base-modal>
	</div>
</template>

<script>
export default {
  data() {
		return {
			tips: [], search: '',
			dialogIsVisible: false
		}
	},
	methods: {
		hideDialog() {
			this.dialogIsVisible = false
		}
	},
	created() {
		// this.$axios.get('journal/show.php?showAll&orderBy=desc')
		// 	.then(data => this.tips = data.data.map(d => d.comment))
	},
	computed: {
		tips2() {
			return this.tips.filter( t => {
				return t.toLowerCase().match(this.search.toLowerCase())
			})
		}
	}
};
</script>

<style lang="scss" scoped>
section.journal {
	margin: 10px auto;
	width: 200px;
	border: 0px solid #999;
	input {
		border-bottom: 1px dotted #999;
		outline: none;
		padding: 10px;
		width: 100%;
	}
}

.results {
	width: 90%;
	margin: 0 auto; 
}
</style>