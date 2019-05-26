
// ex1
var createGreeting = function(message, name) {
    return message + name;
}

var arrowGreeting = (message, name) => message + name
var arrowGeetingToBen = message => message + 'Ben'

console.info(createGreeting('Hi', 'Ben'))
console.info(arrowGreeting('Hi', 'Ben'))
console.info(arrowGeetingToBen('Hi'))

// ex2
var deliveryBody = {
    name: 'Ben',
    
    handleMessage: function(message, handler) {
        handler(message)
    },

    receive: function() {

        var that = this
        
        this.handleMessage("Hello ", function(message) {
            console.info(message + that.name)
        })
    }
}

deliveryBody.receive()

var arrowDeliveryBody = {
    name: 'Ben',
    
    handleMessage: function(message, handler) {
        handler(message)
    },

    receive: function() {
        this.handleMessage("Hello ", message => console.info(message + this.name))
    }
 }

 arrowDeliveryBody.receive()


 // ex3
var foo = () =>{return 1;}
foo();//1
var obj = new foo();//Uncaught TypeError: foo is not a constructor

// 下面这个例子要在浏览器环境下，在node环境下，因为有全局的arguments所以不会报错
console.info(arguments)
var foo = () => {
    console.log(arguments);//Uncaught ReferenceError: arguments is not defined
    return 1;
}
foo();
