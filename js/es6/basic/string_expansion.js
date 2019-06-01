
// 字符串的 unicode 表示法
function ex1() {
    console.info("\u0061") // a
    console.info("\uD842\uDFB7") // 吉
    console.info("\u{20BB7}") // 吉

    // 大括号表示法与四字节的UTF-16编码是等价的
    console.info('\u{1F680}' === '\uD83D\uDE80')

}
// ex1()

// 字符串的遍历器接口
function ex2() {

    for(let codePoint of 'foo') {
        console.info(codePoint)
    }

    // 可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
    let text = String.fromCodePoint(0x20BB7);

    for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    }
    // " "
    // " "

    for (let i of text) {
    console.log(i);
    }


}
// ex2()

// 模板字符串
// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
// 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
function ex3() {

    // 允许多行
    console.info(`i am 
    jiancheng_wang`)

    // ${} 可以放任何js表达式,运算,以及引用对象属性
    // 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。
    let user = {id: 1, name: 'ben'}
    let x = 1
    console.info(`${user.name} has ${x+1} girlfriends`)
    
    // 嵌套
    const tmpl = addrs => `
        <table>
        ${addrs.map(addr => `
            <tr><td>${addr.first}</td></tr>
            <tr><td>${addr.last}</td></tr>
        `).join('')}
        </table>
        `;
    const data = [
        { first: '<Jane>', last: 'Bond' },
        { first: 'Lars', last: '<Croft>' },
    ];
    
    console.info(tmpl(data));

    // 如果需要引用模板字符串本身,在需要时执行,可以写成函数
    let func = name => `Hello ${name}`
    console.info(func('Jack'))
}
// ex3()


// 标签模板
// 标签模板是函数调用的一种特殊形式,紧跟后面的模板字符串是它的参数
function ex4() {

    
    
    let a = 5
    let b = 10

    function tag(s, v1, v2) {
        console.log(s[0]);
        console.log(s[1]);
        console.log(s[2]);
        console.log(v1);
        console.log(v2);
      
        return "OK";
      }
    
    console.info(tag`Hello ${a + b} world ${a * b}`)
    // 等同于
    console.info(tag(["Hello ", ' world', ''], 15, 50))
    
    
    

}
// ex4()

// 字符串新增方法
function ex5() {
    
    // 除了indexOf 扩展
    let str = 'i love the world'
    console.info(str.includes('world')) // true
    console.info(str.startsWith('i')) // true
    console.info(str.endsWith('d')) // true

    // repeat() 方法一个新字符串,表示将原字符串重复N次
    console.info('x'.repeat(3)) // xxx
    // 如果参数是小数,会被取整
    console.info('na'.repeat(2.9)) // nana
    // 如果参数是负数或者Infinity会报错
    // console.info('na'.repeat(-1))

    // 字符串补全长度
    console.info('1'.padStart(4, '0')) // 0001
    console.info('x'.padEnd(4, 'ab')) // xaba
}
ex5()
