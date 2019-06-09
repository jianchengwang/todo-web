
function convert (obj) {
    // Implement this!
    Object.keys(obj).forEach(key => {
      let internalValue = obj[key]
      Object.defineProperty(obj, key, {
        get () {
          console.log(`getting key "${key}" to: ${internalValue}`)
        },
        set (newValue) {
          console.log(`setting key "${key}" to: ${newValue}`)
          internalValue = newValue
        }
      })
    })
  }
  
  // Test
  const obj = { foo: 123 }
  convert(obj)
  
  obj.foo // should log: 'getting key "foo": 123'
  obj.foo = 234 // should log: 'setting key "foo" to 234'
  obj.foo // should log: 'getting key "foo": 234'