<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input v-model="s"
      placeholder="Search item list" />
    <br/>

    <input v-model="newItem"
      v-on:keyup.enter="addItem"
      placeholder="Add a item" />

    <button v-show="removeBtnShow" @click="removeItem">Remove checked item</button>

    <TodoItem :itemList="showItemList" :checkedItemList="checkedItemList" @checkItem="checkItem" />

  </div>
</template>

<script>
import TodoItem from '_c/TodoItem'

export default {
  name: 'Todo',
  components: {
    TodoItem
  },
  props: {
    msg: String
  },
  data () {
    return {
      s: '',
      newItem: '',
      itemList: [
        'eat',
        'sleep',
        'play'
      ],
      checkedItemList: []
    }
  },
  computed: {
    showItemList () {
      return this.s === '' ? this.itemList : this.itemList.filter(item => item.includes(this.s))
    },
    removeBtnShow () {
      return this.checkedItemList.length > 0
    }
  },
  methods: {
    addItem () {
      if (this.newItem !== '') {
        this.itemList.unshift(this.newItem)
        this.newItem = ''
      } else {
        alert('please input item')
      }
    },
    checkItem (checkedItems) {
      this.checkedItemList = checkedItems
    },
    removeItem () {
      this.itemList = this.itemList.filter(item => !this.checkedItemList.includes(item))
    }
  }
}
</script>

<style scoped lang="less">
</style>
