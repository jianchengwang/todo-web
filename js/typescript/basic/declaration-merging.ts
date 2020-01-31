// 定义两个相同名字函数，接口，类，那么会合并成一个类型
// 函数合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口，类合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
// 相当于，合并属性的类型必须是唯一的
interface Alarm {
    price: number;
    weight: number;
}