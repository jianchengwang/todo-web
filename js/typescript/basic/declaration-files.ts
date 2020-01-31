// 声明文件
// https://ts.xcatliu.com/basics/declaration-files
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码不全，接口提示等
/**
 *  declare var 声明全局变量
​    declare function 声明全局方法
    ​declare class 声明全局类
    ​declare enum 声明全局枚举类型
    ​declare namespace 声明（含有子属性的）全局对象
    ​interface 和 type 声明全局类型
    ​export 导出变量
    ​export namespace 导出（含有子属性的）对象
    ​export default ES6 默认导出
    ​export = commonjs 导出模块
    ​export as namespace UMD 库声明全局变量
    ​declare global 扩展全局变量
    ​declare module 扩展模块
    ​/// <reference /> 三斜线指令
 */

// 声明语句
// declare var jQuery: (selector: string) => any
// jQuery('#foo')

// 声明文件
// 通常我们会把语句放到一个单独的文件 jQuery.d.ts 中
// src/jQuery.d.ts
declare var jQuery: (selector: string) => any;
// src/index.ts
jQuery('#foo');
// 一般来说，ts会解析项目中所有 *.ts 文件，当然也包含以 .d.ts 结尾的文件

// 第三方声明文件，可以直接下载
// 更推荐使用 @types 统一管理第三方库的声明文件
// npm install @types/jquery --save-dev

// 当一个第三方库没有提供声明文件时，我们就需要自己书写了
// 全局变量
// 通过 <script> 标签引入
// 全局声明语句

// npm 包
// import foo from 'foo'
