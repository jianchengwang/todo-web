class Dep {
    // Implement this!
    constructor () {
      this.subscribers = new Set()
    }
  
    depend () {
      if (activeUpdate) {
        this.subscribers.add(activeUpdate)
      }
    }
  
    notify () {
      this.subscribers.forEach(sub => sub())
    }
  }
  
  let activeUpdate = null
  
  function autorun (update) {
    // Implement this!
    const wrappedUpdate = () => {
      activeUpdate = wrappedUpdate
      update()
      activeUpdate = null
    }
    wrappedUpdate()
  }
  
  // Test
  const dep = new Dep()
  
  autorun(() => {
    dep.depend()
    console.log('updated')
  })
  // should log: "updated"
  
  dep.notify()
  // should log: "updated"
  