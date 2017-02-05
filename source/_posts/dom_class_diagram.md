---
title: DOM类的UML类图
date: 2016-10-25 20:40:55
categories:
- technology
tags:
- dom
- UML
- class diagram

---

- 今天聊下客户端javascript中的dom类的关系

![](/images/html_dom_class_diagram.png)
<!-- more -->
- EventTarget, Node, HTMLElement, Element, CharacterData, Document, FromControl, HTMLCollection 都是抽象类
- Document, HTMLElement, CharacterData, Attr, DocumentFragment 直接实现了Node类
- Text, Comment 实现了CharacterData抽象类
- Element实现了抽象类HTMLElement
- HTMLStyleElement, HTMLLinkElement, HTMLScriptElement, HTMLImageElement, HTMLIframeElement, HTMLFormElement, HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement 实现了抽象类Element
- HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement　还实现了抽象类FormControl
- Node 与 NodeList　是聚合关系
- HTMLElement 与 HTMLCollection 是聚合关系
- Text　与 Element　是聚合关系

![](/images/css_dom_class_diagram.png)

- 在CSS中，一个样式表可以包含多个样式规则，一个样式规则可以包含多个样式声明
- CSSStyleDeclaration是一个声明对象
- CSSRule是一个css规则对象
- CSSStyleSheet是一个样式表对象
- 一个css规则对象包含多个声明对象
- 一个样式表对象包含多个css规则对象
- document.styleSheets包含多个样式表
- 
