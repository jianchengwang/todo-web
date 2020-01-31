// 代码检查
// 在 VSCode 中集成 ESLint 检查 
/**
 * .vscode/settings.json
 * {
        "eslint.autoFixOnSave": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            {
                "language": "typescript",
                "autoFix": true
            },
        ],
        "typescript.tsdk": "node_modules/typescript/lib"
    }
 */

 // 使用 Prettier 修复格式错误 https://prettier.io/
 // npm install --save-dev prettier
/**
 * prettier.config.js
 * // prettier.config.js or .prettierrc.js
    module.exports = {
        // 一行最多 100 字符
        printWidth: 100,
        // 使用 4 个空格缩进
        tabWidth: 4,
        // 不使用缩进符，而使用空格
        useTabs: false,
        // 行尾需要有分号
        semi: true,
        // 使用单引号
        singleQuote: true,
        // 对象的 key 仅在必要时用引号
        quoteProps: 'as-needed',
        // jsx 不使用单引号，而使用双引号
        jsxSingleQuote: false,
        // 末尾不需要逗号
        trailingComma: 'none',
        // 大括号内的首尾需要空格
        bracketSpacing: true,
        // jsx 标签的反尖括号需要换行
        jsxBracketSameLine: false,
        // 箭头函数，只有一个参数的时候，也需要括号
        arrowParens: 'always',
        // 每个文件格式化的范围是文件的全部内容
        rangeStart: 0,
        rangeEnd: Infinity,
        // 不需要写文件开头的 @prettier
        requirePragma: false,
        // 不需要自动在文件开头插入 @prettier
        insertPragma: false,
        // 使用默认的折行标准
        proseWrap: 'preserve',
        // 根据显示样式决定 html 要不要折行
        htmlWhitespaceSensitivity: 'css',
        // 换行符使用 lf
        endOfLine: 'lf'
    };

 * 安装插件然后配置 .vscode/settings.json
 * {
        "files.eol": "\n",
        "editor.tabSize": 4,
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "eslint.autoFixOnSave": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            {
                "language": "typescript",
                "autoFix": true
            }
        ],
        "typescript.tsdk": "node_modules/typescript/lib"
    }   
 * 
 */
