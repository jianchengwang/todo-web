
const Vue = require("../node_modules/vue/dist/vue.js")

const RulesPlugin = {
    install (Vue) {
      Vue.mixin({
        created () {
          const rules = this.$options.rules
          if (rules) {
            Object.keys(rules).forEach(key => {
              const { validate, message } = rules[key]
              this.$watch(key, newValue => {
                const valid = validate(newValue)
                if (!valid) {
                  console.log(message)
                }
              })
            })
          }
        }
      })
    }
  }
  
  Vue.use(RulesPlugin)
  
// Test
const vm = new Vue({
    data: { foo: 10 },
    rules: {
      foo: {
        validate: value => value > 1,
        message: 'foo must be greater than one'
      }
    }
  })
  
  vm.foo = 0 // should log: "foo must be greater than one"