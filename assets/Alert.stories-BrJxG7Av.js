import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{B as c}from"./Button-C-f8nIgG.js";import{u as y}from"./styled-components.browser.esm-50nrqITv.js";import{T as x}from"./index-BgAm8cQK.js";import"./_commonjsHelpers-BosuxZz1.js";const h=r=>a.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z",fill:"#000000"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53035 18.5303C6.23745 18.8232 5.76258 18.8232 5.46969 18.5303C5.17679 18.2374 5.17679 17.7626 5.46968 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z",fill:"#000000"})),w=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 10px 20px 10px 30px;
  width: 100%;

  & .alert-action-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  & svg.close-icon {
    height: 24px;
    width: 24px;
  }

  &.info {
    background-color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.info}};
    color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.cloudWhite}};
    & svg.close-icon {
      path {
        fill: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.boneWhite}};
      }
    }
  }
  &.success {
    background-color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.success}};
    color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.cloudWhite}};
    & svg.close-icon {
      path {
        fill: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.boneWhite}};
      }
    }
  }
  &.error {
    background-color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.danger}};
    color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.cloudWhite}};
    & svg.close-icon {
      path {
        fill: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.boneWhite}};
      }
    }
  }
  &.warning {
    background-color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.warning}};
    color: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.cloudWhite}};
    & svg.close-icon {
      path {
        fill: ${({theme:r})=>{var e;return(e=r.colors)==null?void 0:e.boneWhite}};
      }
    }
  }
`,n=({style:r={},actions:e=void 0,onClose:s=void 0,text:m,type:i="info",className:f="",textProps:g={}})=>{const v=t=>t==="error"?"barnRed":t==="info"?"duskBlue":t==="warning"?"hayYellow":t==="success"?"grassGreen":"duskBlue";return o.jsxs(w,{className:`${f} ${i||"info"}`,style:r,children:[o.jsx(x,{color:"cloudWhite",...g,children:m}),o.jsxs("div",{className:"alert-action-wrapper",children:[!!e&&o.jsx(c,{variant:"solid",onClick:e==null?void 0:e.action,style:{padding:"0px 6px",flexShrink:0,background:"rgba(0,0,0,0.2)"},bgColor:v(i),size:"xsm",width:"fit-content",children:e==null?void 0:e.label}),s&&o.jsx(c,{onClick:s,hoverBgColor:"hex_B3",hoverColor:"whiteSmoke",size:"xsm",variant:"no-style",padding:"3px 5px",width:"34px",children:o.jsx(h,{className:"close-icon"})})]})]})};try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"error"'}]}},actions:{defaultValue:{value:"undefined"},description:"",name:"actions",required:!1,type:{name:"{ label: string; action: () => void; }"}},onClose:{defaultValue:{value:"undefined"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},textProps:{defaultValue:{value:"{}"},description:"",name:"textProps",required:!1,type:{name:"ITypographyProps"}}}}}catch{}try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"error"'}]}},actions:{defaultValue:{value:"undefined"},description:"",name:"actions",required:!1,type:{name:"{ label: string; action: () => void; }"}},onClose:{defaultValue:{value:"undefined"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},textProps:{defaultValue:{value:"{}"},description:"",name:"textProps",required:!1,type:{name:"ITypographyProps"}}}}}catch{}const k={title:"Atomic/Alert",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},l={args:{text:"HELLO WORLD",type:"info"}};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: "HELLO WORLD",
    type: "info"
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Info"];export{l as Info,N as __namedExportsOrder,k as default};
