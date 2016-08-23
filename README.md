## www.wangyn.net-hexo

- combine with [www.wangyn.net-node](https://github.com/Yann-Wang/www.wangyn.net-node) project, copy the public directory of hexo project to the public directory of node project. 

- use [hexo](https://hexo.io/) blog framework with the ["Hacker"](https://github.com/CodeDaraW/Hacker) theme to generate the static files.

- includes my modification about the template.

- use gulp to minify static files.

### usage

```shell
hexo clean  # 清除缓存文件 (db.json) 和已生成的静态文件 (public)
hexo generate | hexo g # 生成静态文件
gulp   # 压缩静态文件（html, css, js），将压缩后静态文件保存在public文件夹， 删除中间状态dst文件夹,
       # 将public文件夹复制到www.wangyn.net-node项目的public目录
hexo server  |  hexo s  # 启动服务器, 默认情况下，访问网址为： http://localhost:4000/

# hexo deploy  |  hexo d  # 不再使用， 不需要public单独上传， 改为 随 www.wangyn.net-node 项目一起上传
```

### schedule
- performance optimization.
- remove comment module of index page.