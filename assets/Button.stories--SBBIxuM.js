import{r as d}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=d,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,p){var e,o={},a=null,u=null;p!==void 0&&(a=""+p),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(u=r.ref);for(e in r)v.call(r,e)&&!O.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:y,type:t,key:a,ref:u,props:o,_owner:E.current}}s.Fragment=x;s.jsx=_;s.jsxs=_;l.exports=s;var R=l.exports;const b=()=>R.jsx("div",{children:"Button"}),k={title:"Atomic/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},n={args:{primary:!0,label:"Button"}};var c,m,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const B=["Primary"];export{n as Primary,B as __namedExportsOrder,k as default};
