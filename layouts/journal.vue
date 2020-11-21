<template>
  <div>
      <div id="wys">
          <div class="input">
            <template v-if="!allow"> <!-- TO LOGIN --> 
                <input type="password"
                v-model="log.pass" placeholder="my secret journal" class="password">
                <i class="material-icons" @click="login">exit_to_app</i>
            </template>

            <template v-else> <!-- TO LOGOUT --> 
                <i class="material-icons" @click="logout">logout</i>
            </template>
            
            <template v-if="allow"> <!-- IF LOGGED IN -->
              <i v-if="noShow" @click="noShow = !noShow " class="material-icons">check_box_outline_blank</i>
              <i v-else @click="noShow = !noShow " class="material-icons">check_box</i>
            </template>

            <input type="text" v-model="searchComment" class="password">
            <i v-if="orderBy" class="material-icons" @click="refreshLog('asc')">keyboard_arrow_up</i>
            <i v-else class="material-icons" @click="refreshLog('desc')">keyboard_arrow_down</i>
          </div>

      <form :class="{ cssHide : noShow }"><!-- triggered by checkbox for a new entry -->s
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
        class="myFrame"
        ></iframe> 
            <template v-if="allow">
                
                <v-btn @click="submitLog">Submit</v-btn>
            </template>

      </form>

      </div>
        <div v-if="allow" style="text-align:center;float:left;margin-left:140px">
 
        </div>                     

        <!-- list of journals -->
        <div class="journal" v-for="(log, i) in filteredComments" :key="i">
            <div class="date" v-if="allow">
                {{ log.formattedDate }}
                <i class="material-icons" @click="editComment(log.id)">mode_edit</i>
            </div>
            <div class="comment" v-html="log.comment"></div>
        </div> <!-- end of journals -->

    <div class="modal2" v-if="edit"> <!-- popup to edit, triggered by to.edit -->
        <div id="edit" :class="{ editor : edit }" >             
            <i @click="noEdit" class="material-icons">&#xE5CD;</i>

        <div class="formatting">
            <button @click.prevent="format('richTextFielda', 'bold')"><i class="material-icons">&#xE238;</i></button>
            <button @click.prevent="format('richTextFielda', 'italic')"><i class="material-icons">&#xE23F;</i></button>
            <button @click.prevent="format('richTextFielda', 'underline')"><i class="material-icons">&#xE249;</i></button>
            <button @click.prevent="format('richTextFielda', 'insertunorderedlist')"><i class="material-icons">&#xE241;</i></button>
            <button @click.prevent="format('richTextFielda', 'insertorderedlist')"><i class="material-icons">&#xE242;</i></button>
            <button @click="show"><i class="material-icons">&#xE163;</i></button>

            <div class="selects">
              <select ref="FontName2" @change="formatMore('FontName2', 'richTextFielda', 'FontName')">
                  <option value="0">Change Font</option>
                  <template v-for="(font, index) in fontNames">
                      <option :value="font.name" :key="index" :class="font.key" class="fonts">{{ font.name }}</option>
                  </template>
              </select>
              <select ref="FontSize2" @change="formatMore('FontSize2', 'richTextFielda', 'FontSize')">
                  <option value="0">Font Size</option>
                  <template v-for="(size, index) in fontUnit">
                      <option :value="size.name" :key="index" class="fonts" :class="size.key">{{ size.name }}</option>
                  </template>
              </select>
            </div>
        </div>
        <textarea  style="display:none;font-family:Courier" 
            ref="myTextArea2" name="myTextArea2" id="myTextArea2" cols="30" rows="5"
        ></textarea> 
        <iframe frameborder="1" name="richTextFielda" id="richTextFielda" ref="richTextFielda"
        class="myFrame2"
        ></iframe>         
        <v-btn @click="submitChange">Submit Change</v-btn>
            
        </div>
      </div>
      <!-- end of edit popup -->
 
  </div>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  
}
</script>