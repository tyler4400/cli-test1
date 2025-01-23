0. 在父目录下执行 Npm init -w/--workspace时候, 会创建一个子目录

1. 当在父目录(ws)安装依赖时，例如 npm install chalk -w/--wrokspace a
只要带上参数-w或--wrokspace， 就会为子目录a也安装上
子目录在package.json中的workspaces字段定义, 数组每一项代表文件夹名称

2. 子目录(a或b)是没有node_modules目录的，全都在父目录下统一管理。
当子目录使用某个库时， 它会一级一级向上查找
在父目录下， 给子目录安装库 Npm i {some-package} -w {a}
这里是-w，而不是-ws

3. 当修改了 package 的内容后（如：package.json 中的 name）
npm install --workspaces /  -ws

4. 子目录之间如何引入。
另一个子目录可以通过import a from "@tyler4400/test-a";的方式引入同级子模块a的内容。
其中"@tyler4400/test-a"，为a模块package.json中的name

5. lerna使用
在空文件夹下执行npx lerna init. lerna会创建git和package.json并安装lerna依赖

6. 使用npx lerna create a。 创建一个子目录

7. Npm i {some-package} -w {a} 给子目录安装依赖， 和第2步一样






另外 cjs 和 mjs 如何相互使用
1. cjs 引入 mjs 并使用
安装第三方插件npm install esm
require = require("esm")(module);
const Test = require("./test.mjs");
console.log(Test); // { name: 'berserker', default: 'fate' }

2. mjs 引入 cjs 并使用
在 Node.js 中，使用 ECMAScript 模块（ESM）的文件通常使用 .mjs 扩展名。要在 .mjs 文件中引入 CommonJS 模块（CJS），可以使用 Node.js 提供的 createRequire() 函数。
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const cjsModule = require('./cjs-module');
