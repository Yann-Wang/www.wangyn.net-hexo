---
title: 跨域请求技术
date: 2016-07-16 21:40:55
categories:
- technology
tags:
- cross origin
- CORS
- imgPing
- jsonp
- Comet
- Server-Sent Events
- Web Socket
---

1. 跨域资源共享CORS（Cross-Origin Resource Sharing）------**xhr  需要服务端返回带有  `Access-Control-Allow-Origin` 的响应头**

2. 图像Ping------**动态生成img标签**

3. JSONP------**动态生成script标签**

4. Comet `['kɒmɪt]`------**长链接   http 流**

5. 服务器发送事件------**EventSource 对象**

6. Web Socket------**WebSocket 对象**

<!-- more -->

#### 前后端代码实现
- 请访问我的 [github](https://github.com/Yann-Wang/cross-origin-request-technology)