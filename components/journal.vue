<template>
      <div id="wys">

      <form><!-- triggered by checkbox for a new entry -->
        <div class="formatting">
          <button @click.prevent="format('richTextField', 'bold')"><i class="material-icons">&#xE238;</i></button>
          <button @click.prevent="format('richTextField', 'italic')"><i class="material-icons">&#xE23F;</i></button>
          <button @click.prevent="format('richTextField', 'underline')"><i class="material-icons">&#xE249;</i></button>
          <button @click.prevent="format('richTextField', 'insertunorderedlist')"><i class="material-icons">&#xE241;</i></button>
          <button @click.prevent="format('richTextField', 'insertorderedlist')"><i class="material-icons">&#xE242;</i></button>

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

        <textarea  style="display:none;font-family:Courier" name="myTextArea" id="myTextArea" cols="30" rows="5"></textarea> 
        <iframe frameborder="1" name="richTextField" id="richTextField" ref="richTextField"
        class="myFrame" ></iframe> 
        <div class="actions">
          <v-btn @click="submitLog">Submit</v-btn>
          <v-btn @click="clear">Clear</v-btn>
        </div>
      </form>

      </div>
                 

 
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
      return {
          allow: false, // auth ok
          edit: false,
          noShow: true,
          orderBy: true, // true means asc
          editValue: '',    // boolean to show popup
          editRecord: '',   // current record being edited
          pwd: '',
          journal: [],
          log : {
              topic: '',
              comment: '',
              createLog: '',
              checkAuth: 1,
              pass: '',
              find:''
          },
          passChecked: '',
          el: '', // id of iframe to be passed as argument 
          ell: '',
          fontNames: wys.fontNames,
          fontUnit: wys.fontUnit,
          searchComment: ''  ,
          xhr: ''       
      }
  },

  mounted() {
  //   console.log(this.$refs)
  //   console.log(this.$refs)
    this.el = this.$refs.richTextField.name  
    setTimeout( () => { this.setEditable() }, 1000);      
    console.log(this.checkOrderBy())
    this.orderBy = true
  },
  created() {
    this.log2(); // method from eventBus via local method
    // eventBus.myLog() // method direct from eventBus
    this.refreshLog('asc')
    // console.log(localStorage.getItem("password"))
    // if(localStorage.getItem("permission")) {
    // this.log.pass = localStorage.getItem("password")
    //   this.allow = true
    // } 
  },
  computed: {
    filteredComments: function() {
      return this.journal.filter((result) => {
      return result.comment.toLowerCase().match(this.searchComment.toLowerCase())
    });
    }
  },
  methods: {
    clear() {
       window.frames['richTextField'].document.body.innerHTML = ''
    },
    log2() {
      // eventBus.log()
    },      
    logout() {
      localStorage.removeItem("permission")
      this.allow = false
    },
    login() {
      this.$axios.post(this.$store.state.url + 'auth', this.log)
      .then(data => {
        this.passChecked = data.data
        if(this.passChecked == 'success') {
          localStorage.setItem("permission", 'GRANTED')
          this.allow = true
        } else {
          this.allow = false
        }
        console.log(this.passChecked)
      })
    },
  editComment(n) {
    this.edit = true
    console.log(n)          
    console.log(this.orderBy)          
    this.$axios.get(this.$store.state.url + 'journal/show.php?id=' + n)
    .then(data => this.editRecord = data.data)
    setTimeout( () => window.frames['richTextFielda'].document.designMode = 'On', 50)
    setTimeout( () => window.frames['richTextFielda'].document.body.innerHTML = this.editRecord.comment, 500)
  },
  checkOrderBy() {
    return (this.orderBy == true) ? 'asc' : 'desc'
  },
  submitChange() {
    const order = this.checkOrderBy()
    console.log(this.checkOrderBy())
    let change = { 
      "updateLog" : 1,
      "id" : this.editRecord.id,
      "comment" : window.frames['richTextFielda'].document.body.innerHTML,
      "topic" : this.editRecord.topic
    }
    this.$axios.post(this.$store.state.url + 'journal/index.php', change)
    .then( () => {
      this.edit = false
      console.log(order)
      this.refreshLog('desc')
    })
  },
    refreshLog(order) {
      this.$axios.get(this.$store.state.url + 'journal/show.php?showAll&orderBy=' + order)
      .then(data => {
        this.journal = data.data
        console.log('desc')
      })
      this.orderBy = !this.orderBy
    },

  noEdit() {
    this.edit = false
  },
  find() {
    this.refreshLog('asc')
  },
  showForm() {
  //   this.el = 'richTextField'
  // console.log(this.$refs)
  //   this.el = this.$refs.richTextField.name  
  //   setTimeout( () => { this.setEditable() }, 1000);      
  },
  submitLog() {
    this.log.comment = wys.showForm(this.el)
    //   console.log(this.log)
    this.$axios.post(this.$store.state.url + 'journal/index.php', this.log)
    .then(data => {
      console.log(data.data)
      this.refreshLog('asc')
    })
    this.clearFrame()
  },
  clearFrame() {
    setTimeout( () => {
      this.log.topic = ''
      document.getElementById(this.el).contentDocument.body.innerHTML = ''
    }, 1000)
  },
    show() {
        //   wys.showForm()
        //   this.content = wys.showForm(this.el)
        // console.log(this.$refs.richTextFields.name);
      },
      forIE() {
          // this.$refs.forIE.style.display = "block";
        let el = this.$refs.forIE.id
        document.getElementById(el).contentDocument.body.style.display = "block";
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
      
      slider(el, ref) {
          let slider = this.$refs[ref].value
          let color = wys.hslToHex(slider, 100, 50)
          wys.setColor(el, color)
      },
      setEditable() {
          wys.editableFrame(this.el)
        //   wys.editableFrame(this.el2)
      }
    
  }
     
}
</script>
<style lang="scss" scoped>
// @import './style/journal';
</style>

