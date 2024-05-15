import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{u as f}from"./styled-components.browser.esm-50nrqITv.js";const u=f.img`
  height: ${({imageHeight:e})=>e||"100%"};
  width: ${({imageWidth:e})=>e||"100%"};
  object-fit: ${({objectFit:e})=>e||"cover"};
  border-radius: ${({radius:e})=>e||"10px"};
  filter: blur(0px);
  animation: fadeIn 1.5s ease-in-out;
  background: transparent;

  &.noImage {
    object-fit: contain;
  }

  @keyframes fadeIn {
    from {
      filter: blur(10px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
  }
`,y="https://via.placeholder.com/500?text=Image+Not+Supported",v="https://via.placeholder.com/500?text=Image+Not+Found",m=({src:e,fallbackSrc:d=v,errorSrc:c=y,alt:t,className:r,...l})=>{const[i,n]=a.useState(e),[p,g]=a.useState(!1);a.useEffect(()=>{n(e)},[e]);const o=()=>{n(c),g(!0)};return i?s.jsx(u,{src:i,alt:t,onError:o,className:`${r} ${p?"noImage":""}`,loading:"lazy",...l}):s.jsx(u,{src:d,onError:o,alt:t,className:`${r} noImage`,loading:"lazy",...l})};try{m.displayName="Image",m.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},fallbackSrc:{defaultValue:{value:"https://via.placeholder.com/500?text=Image+Not+Found"},description:"",name:"fallbackSrc",required:!1,type:{name:"string"}},errorSrc:{defaultValue:{value:"https://via.placeholder.com/500?text=Image+Not+Supported"},description:"",name:"errorSrc",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"none"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"fill"'},{value:'"scale-down"'}]}},imageHeight:{defaultValue:null,description:"",name:"imageHeight",required:!1,type:{name:"string"}},imageWidth:{defaultValue:null,description:"",name:"imageWidth",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string"}}}}}catch{}export{m as I};
