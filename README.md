<!--
 * @Description: 
 * @Author: chenju
 * @Date: 2021-05-26 17:24:59
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 17:30:32
-->
## .prettierrc文件配置

> 2021年5月26日

参考文档：[.prettierrc文件常见配置](https://blog.csdn.net/onlyliii/article/details/89312857)、[prettier配置选项说明](https://blog.csdn.net/guowenf/article/details/107346230#prettier_2)、[prettier配置项说明](https://blog.csdn.net/peade/article/details/103865934)

```
{
  // 让prettier使用eslint的代码格式进行校验
  "eslintIntegration": true,
  // 编辑器每行的长度，默认80
  "printWidth": 100,
  // tab缩进大小,默认为2
  "tabWidth": 2,
  // 代码缩进是否用制表符tab，默认false
  "useTabs": false,
  // 是否使用分号，默认true，使用分号
  "semi": true,
  // vue中script和style标签内代码是否缩进，默认false：false不缩进，true缩进
  "vueIndentScriptAndStyle": false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  "singleQuote": true,
  // 对象属性的引号使用，默认as-needed
  // as-needed - 仅在需要的时候使用
  // consistent - 有一个属性需要引号，就都需要引号
  // preserve - 保留用户输入的情况
  "quoteProps": "as-needed", 
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  "bracketSpacing": true,
  // 末尾逗号，默认es5
  // none 末尾没有逗号
  // es5 es5有效的地方保留
  // all 在可能的地方都加上逗号
  "trailingComma": "none",
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  "jsxBracketSameLine": false,
  // jsx中是否用单引号替换双引号，默认false
  "jsxSingleQuote": false,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  "arrowParens": "avoid",
  // 指定文件折行方式，默认preserve
  // always - 超出printWidth折行
  // never - 不折行
  // preserve - 按照文件原样折行
  "proseWrap": "never",
  // 指定html文件空格的敏感度，默认css
  // css - 遵循css display属性的默认值
  // strict - 空格敏感
  // ignore - 空格不敏感    
  "htmlWhitespaceSensitivity": "strict",
  // 行末尾标识
  // “auto” - 默认使用Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
  // “lf” – Line Feed only (\n), common on Linux and macOS as well as inside git repos
  // “crlf” - Carriage Return + Line Feed characters (\r\n), common on Windows
  // “cr” - Carriage Return character only (\r), used very rarely
  "endOfLine": "auto",
  // 文件顶部是否需要注释说明文件，默认false，示例如下：
  /**
   * @prettier
   */   
  "requirePragma": false,
  //  是否在文件顶部插入一个format注释，默认false
  "insertPragma": false
}
```

## template中写多个标签时vscode报错

> 2021年5月26日

参考文档：[Vue3 报错：[vue/no-multiple-template-root] The template root requires exactly one element](https://blog.csdn.net/qq_45909266/article/details/115084518 "Vue3 报错：[vue/no-multiple-template-root] The template root requires exactly one element")

vue3中安装了eslint-plugin-vue插件后，template中写多个标签时，vscode会有有个报错，如下两图：
![](https://www.showdoc.com.cn/server/api/attachment/visitfile/sign/6e7859a630da021a5e644ddd9a77698a)

![](https://www.showdoc.com.cn/server/api/attachment/visitfile/sign/11d8d434e27c899953f8a9b179ce2e8a)
#### 解决方法：
设置 -> 搜索：eslint-plugin-vue -> 取消勾选，如下图
![](https://www.showdoc.com.cn/server/api/attachment/visitfile/sign/73d9fc42ab311c6a9db2972174255da7)
