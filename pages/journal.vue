<template>
<div>
  <div class="journalContainer">
		<input type="text" v-model="search" class="search">
		<!-- {{tips}} -->

			<div class="journal" v-for="(tip, index) in filteredTips" :key="index" v-if="search != ''">
				<!-- <div class="date" v-html="tip.formattedDate"></div> -->
					<div class="comment" v-html="tip.comment"></div>
			</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
			tips: [],
			search: ''
		}
	},
	computed: {
		filteredTips() {
			return this.tips.filter (tip => {
				return tip.comment.match(this.search)
			})
		}
	},
	created() {
		this.$axios
			.get('journal/show.php?showAll&orderBy=desc')
			.then(data => this.tips = data.data)
	}
}
</script>

<style lang="scss" scoped>
* {
	// box-sizing: border-box;
}		
.search {
	display: flex;
	width: 300px;
	border: 1px solid #ccc;
	height: 30px;
	justify-content: center;
	align-items: center;
	margin: 5px auto;
	outline: none;
	padding: 10px;
}
.journalContainer {
	display: flex;
	flex-direction: column;
		width: 100%;
		margin: 0 auto;
	.journal {
		// border: 1px solid #ccc;
		.date {
			background-color: #e7e6e6;
			padding: 5px;
		}

		.comment {
			padding: 15px;
			word-wrap: break-word;
			// word-wrap: break-all;
			// word-wrap: normal;
			white-space: initial;
			// width: 550px;
		}
		display: flex;
		flex-direction: column;
		background-color: #f8f4f4;
		margin: 5px 0;
	}
	@media (min-width: 600px) {
		.journal {
			flex-direction: row;
			width: 580px;
			margin: 2px auto; 
			.date {
				width: 20%;
			}
			.comment {
				width: 80%;
			}
		}
	}
	@media (min-width: 800px) {
		.journal {
			width: 790px;
		}
	}

}
</style>