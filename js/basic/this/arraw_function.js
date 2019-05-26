

var test = () => {
    console.log(this.a);
}
//形式上等价于
var test = function(){
    console.log(this.a);
}
//实质上等价于
function fn(){
    var that = this;
    var test = function(){
        console.log(that.a);
    }
}

var a = 0;
function foo(){
    var test = () => {
        console.log(this.a);
    }
    return test;
};
var obj = {
    a : 2,
    foo:foo
}
obj.foo()();//2
