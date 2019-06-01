
// es6 class 可以看做是一个语法糖
function ex1() {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }

        static classMethod() {
            return 'hello';
        }
    }

   
    console.info(typeof Point) // function
    console.info(Point === Point.prototype.constructor) // true

    var p = new Point(1,2)
    console.info(Point.classMethod())
}
ex1()