<template>
	<div>
		<div class="journalContainer">
			<input type="text" v-model="search" class="search">
			<!-- {{tips}} -->
			<template v-if="search != ''">
				<div class="journal" v-for="(tip, index) in filteredTips" :key="index" >
					<!-- <div class="date" v-html="tip.formattedDate"></div> -->
						<div class="comment" v-html="tip.comment"></div>
				</div>
			</template>
		</div>
		<div class="newEvent">

			<form >
				<div class="formats">
					<div class="group1">
						<button @click.prevent="format('richTextField', 'bold')"><i class="material-icons">&#xE238;</i></button>
						<button @click.prevent="format('richTextField', 'italic')"><i class="material-icons">&#xE23F;</i></button>
						<button @click.prevent="format('richTextField', 'underline')"><i class="material-icons">&#xE249;</i></button>
						<button @click.prevent="format('richTextField', 'insertunorderedlist')"><i class="material-icons">&#xE241;</i></button>
						<button @click.prevent="format('richTextField', 'insertorderedlist')"><i class="material-icons">&#xE242;</i></button>
					</div>
					<div class="group2">

						<div class="selects">
							<select ref="FontName" @change="formatMore('FontName','richTextField', 'FontName')">
									<option value="0">Change Font</option>
									<template v-for="(font, index) in fontNames">
											<option :value="font.name" class="fonts" :key="index" :class="font.key">{{ font.name }}</option>
									</template>
							</select>

							<select ref="FontSize" @change="formatMore('FontSize','richTextField', 'FontSize')">
									<option value="0">Font Size</option>
									<template v-for="(size, index) in fontUnit">
											<option :value="size.name" class="fonts" :key="index" :class="size.key">{{ size.name }}</option>
									</template>
							</select>
						</div>
					</div>

				</div>
				<textarea  style="display:none;font-family:Courier" name="myTextArea" id="myTextArea" cols="30" rows="5"></textarea> 
				<iframe frameborder="1" name="richTextField" id="richTextField" ref="richTextField"
				class="myFrame"
				></iframe> 
				<div  class="actions">					
					<v-btn @click="clear">Clear</v-btn>
					<v-btn @click="submitLog">Submit</v-btn>
				</div>
			</form>
		<button @click="login">login</button>
		</div>

	</div>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
			tips: [],
			search: '',
			fontNames: wys.fontNames,
			fontUnit: wys.fontUnit,
			el: ''
		}
	},
	computed: {
		filteredTips() {
			return this.tips.filter (tip => {
				return tip.comment.match(this.search)
			})
		}
	},
	mounted() {
		this.el = this.$refs.richTextField.name
		wys.editableFrame(this.el)  
	},
	created() {
		this.$axios
			.get('api/journals')
			.then(data => this.tips = data.data)
	},
	methods :{
		login() {
			this.$axios.post('/api/user/login', {email: 'test@google.org', password: '123456'})
			.then(res => {
				console.log(res.data)
				localStorage.setItem('token', res.data.token)
			})
		},
    clear() {
       window.frames['richTextField'].document.body.innerHTML = ''
    },		
		format(el, att) {
				wys.formatBasic(el, att)
		},		
		formatMore(ref, el, att) {
				// let item = opt == 'font' ? 'FontName' : 'FontSize' 
			var ele = this.$refs[ref]
			console.log(ele)
			var myFont = ele.options[ele.selectedIndex].value          
			console.log(myFont)
			wys.formatMore(el, att, myFont)
			ele.value = 0;
		},
		submitLog() {
			// this.log.comment = wys.showForm(this.el)
			
			let info = { comment: window.frames['richTextField'].document.body.innerHTML, topic: 'testing only'}
			console.log(info);
			this.$axios.post('/api/journals', info, { headers: {token: localStorage.getItem('token')} } )
			.then(data => {
				console.log(data.data)
			})
			this.clearFrame()
		},
		clearFrame() {
			setTimeout( () => {
				// this.log.topic = ''
				document.getElementById(this.el).contentDocument.body.innerHTML = ''
			}, 1000)
		}				
	}
}
</script>

<style lang="scss" scoped>

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