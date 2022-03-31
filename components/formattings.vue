<template>
  <div class="group1">
    <button @click.prevent="format('richTextField', 'bold')">
      <i class="material-icons">&#xE238;</i>
    </button>
    <button @click.prevent="format('richTextField', 'italic')">
      <i class="material-icons">&#xE23F;</i>
    </button>
    <button @click.prevent="format('richTextField', 'underline')">
      <i class="material-icons">&#xE249;</i>
    </button>
    <button @click.prevent="format('richTextField', 'insertunorderedlist')">
      <i class="material-icons">&#xE241;</i>
    </button>
    <button @click.prevent="format('richTextField', 'insertorderedlist')">
      <i class="material-icons">&#xE242;</i>
    </button>
    <div class="group2">
      <div class="selects">
        <select
          ref="FontName"
          @change="formatMore('FontName', 'richTextField', 'FontName')"
        >
          <option value="0">Change Font</option>
          <template v-for="(font, index) in fontNames">
            <option :value="font.name" class="fonts" :key="index" :class="font.key">
              {{ font.name }}
            </option>
          </template>
        </select>

        <select
          ref="FontSize"
          @change="formatMore('FontSize', 'richTextField', 'FontSize')"
        >
          <option value="0">Font Size</option>
          <template v-for="(size, index) in fontUnit">
            <option :value="size.name" class="fonts" :key="index" :class="size.key">
              {{ size.name }}
            </option>
          </template>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
      fontNames: wys.fontNames,
      fontUnit: wys.fontUnit,
    }
  },
  methods: {
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
      ele.value = 0
    },
  },
}
</script>

<style>
.fonts.arial {
  font-family: Arial;
}
.fonts.courier {
  font-family: Courier;
}
.fonts.georgia {
  font-family: Georgia;
}
.fonts.helvetica {
  font-family: Helvetica;
}
.fonts.impact {
  font-family: Impact;
}
.fonts.segoe {
  font-family: 'Segoe Print';
}
.fonts.tahoma {
  font-family: Tahoma;
}
.fonts.times {
  font-family: 'Times New Roman';
}
.fonts.verdana {
  font-family: Verdana;
}
.fonts.two {
  font-size: 10px;
}
.fonts.three {
  font-size: 12px;
}
.fonts.four {
  font-size: 14px;
}
.fonts.five {
  font-size: 16px;
}
.fonts.six {
  font-size: 20px;
}
.fonts.seven {
  font-size: 22px;
}
select {
  outline: none;
}
</style>
