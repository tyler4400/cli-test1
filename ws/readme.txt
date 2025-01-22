0. 在父目录下执行 Npm init -w/--workspace时候, 会创建一个子目录

1. 当在父目录(ws)安装依赖时，例如 npm install chalk -w/--wrokspace a
只要带上参数-w或--wrokspace， 就会为子目录a也安装上
子目录在package.json中的workspaces字段定义, 数组每一项代表文件夹名称

2. 子目录(a或b)是没有node_modules目录的，全都在父目录下统一管理。
当子目录使用某个库时， 它会一级一级向上查找

3. 当修改了 package 的内容后（如：package.json 中的 name）
npm install --workspaces /  -ws

4. 子目录之间如何引入。
另一个子目录可以通过import a from "@tyler4400/test-a";的方式引入同级子模块a的内容。
其中"@tyler4400/test-a"，为a模块package.json中的name
