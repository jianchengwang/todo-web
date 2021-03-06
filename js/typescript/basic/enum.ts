// 枚举类型用于取值被限定在一定范围内的场景
// 比如一周只能有7天，三原色限定为红绿蓝等
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 事实上，上面例子会被编译为
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "Tue";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Thu"] = 4] = "Thu";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}))

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
