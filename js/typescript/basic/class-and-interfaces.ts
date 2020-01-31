// 特性抽取接口，一个类允许实现多个接口
interface Alarm {
    alert()
}
interface Light {
    lightOn()
    lightOff()
}
class Door {  
}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert')
    }
}
class Car implements Alarm, Light {
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light on');
    }
    alert() {
        console.log('Car alert')
    }
}