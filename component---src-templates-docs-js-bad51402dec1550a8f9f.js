webpackJsonp([0xd72e590acfcb],{42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=n(4),s=a(u),c=n(22),d=a(c),f=n(50),m=a(f),p=function(e){return s.default.createElement("div",{className:m.default.section},s.default.createElement("h3",{className:m.default.title},e.title),s.default.createElement(b,o({},e,{title:e.title})))},b=function(e){return s.default.createElement("ul",{className:m.default.items},e.items.map(function(e,t){return s.default.createElement(y,{node:e,children:e.items,key:t})}))},y=function e(t){var n=null;t.children&&(n=t.children.map(function(t,n){return s.default.createElement(e,{key:n,node:t,children:t.items})}));var a=t.node;return s.default.createElement("li",{className:m.default.item,key:a.title},s.default.createElement(d.default,{to:a.link,activeClassName:m.default.linkActive,className:m.default.link},a.title),n?s.default.createElement("ul",{className:m.default.subItems},n):null)},v=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.yaml;return s.default.createElement("div",{className:m.default.body},e.map(function(e,t){return s.default.createElement("div",{key:t},s.default.createElement(p,o({},e,{title:e.title,index:t})))}))},t}(s.default.Component);t.default=v,e.exports=t.default},50:function(e,t){e.exports={body:"src-components-sidebar----sidebar-module---body---3IrXM",section:"src-components-sidebar----sidebar-module---section---172Kz",items:"src-components-sidebar----sidebar-module---items---3OHAN",subItems:"src-components-sidebar----sidebar-module---subItems---2j1u0",item:"src-components-sidebar----sidebar-module---item---1cDa9",link:"src-components-sidebar----sidebar-module---link---1O-1B",linkActive:"src-components-sidebar----sidebar-module---linkActive---2vYx_ src-components-sidebar----sidebar-module---link---1O-1B",title:"src-components-sidebar----sidebar-module---title---1-63-"}},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data,n=t.markdownRemark;return i.default.createElement("div",null,i.default.createElement("div",{style:{paddingLeft:"340px"}},i.default.createElement("div",{style:{maxWidth:1200,padding:"24px",margin:"0 auto"}},i.default.createElement("h1",null,n.frontmatter.title),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))),i.default.createElement("div",null,i.default.createElement(s.default,{inline:!0,yaml:d.default})))}t.__esModule=!0,t.pageQuery=void 0,t.default=r;var l=n(4),i=a(l),o=n(22),u=(a(o),n(42)),s=a(u),c=n(!function(){var e=new Error('Cannot find module "../pages/docs/doc-links.yaml"');throw e.code="MODULE_NOT_FOUND",e}()),d=a(c);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-docs-js-bad51402dec1550a8f9f.js.map