/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],


  tutorialSidebar: [
    {
      type: 'doc',
      id: 'all-intro', // 文档 ID
      label: '开始', // 侧边栏标签
    },
    {
      type: 'category',
      label: 'html(18)',
      items: [
        'html/01第一个html',
        'html/02LocalStorage与SessionStorage',
        'html/03HTML DOM节点操作',
        'html/04iframe框架及优缺点',
        'html/05Cookie与Session',
        'html/06HTML5新特性',
        'html/07Canvas基础',
        'html/08前端性能优化方案',
        'html/09行内元素和块级元素',
        'html/10Web Worker',
        'html/11300ms点击延迟',
        'html/12事件冒泡与阻止冒泡机制',
        'html/13可替换元素和非替换元素',
        'html/14HTML与XHTML区别',
        'html/15常见的兼容性问题',
        'html/16DOM和BOM的区别',
        'html/17实现图片懒加载',
        'html/18Shadow DOM的理解',
      ],
    },
    {
      type: 'category',
      label: 'css(1)',
      items: ['css/01第一个css'],
    },
    {
      type: 'category',
      label: 'javascript(4)',
      items: [
        'javascript/01数据类型',
        'javascript/02this',
        'javascript/03闭包',
        'javascript/04原型与原型链',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'react(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: '微信小程序(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: 'HTTP(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: 'Browser(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: 'Webpack(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: 'git代码托管(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: '数据结构与算法(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: '设计模式(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: '编码规范(0)',
    //   items: []
    // },
    // {
    //   type: 'category',
    //   label: '杂谈(0)',
    //   items: []
    // },
  ],
}

export default sidebars
