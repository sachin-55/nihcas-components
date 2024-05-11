import{a as l,u as _,d as w,t as y}from"./styled-components.browser.esm-50nrqITv.js";import{R as o}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useParameter:$,addons:A,useEffect:re,useMemo:B}=__STORYBOOK_MODULE_PREVIEW_API__;var D=Object.defineProperty,C=(e,r)=>{for(var i in r)D(e,i,{get:r[i],enumerable:!0})},v={};C(v,{initializeThemeState:()=>g,pluckThemeFromContext:()=>f,useThemeParameters:()=>u});var b="themes",S=`storybook/${b}}`,T="theme",R={},G={REGISTER_THEMES:`${S}/REGISTER_THEMES`};function f({globals:e}){return e[T]||""}function u(){return $(b,R)}function g(e,r){A.getChannel().emit(G.REGISTER_THEMES,{defaultTheme:r,themes:e})}var P=([e,r])=>r,M=({Provider:e,GlobalStyles:r,defaultTheme:i,themes:s={}})=>{let n=Object.keys(s),p=i||n[0];return g(n,p),(x,F)=>{let{themeOverride:c}=u(),d=f(F),E=B(()=>{let k=c||d||p,h=Object.entries(s);return h.length===1?P(h[0]):s[k]},[s,d,c]);return e?o.createElement(e,{theme:E},r&&o.createElement(r,null),x()):o.createElement(o.Fragment,null,r&&o.createElement(r,null),x())}};const O={base:"0px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1440px"},L={coolBlack:"#002e63",gray:"#666666",dimGray:"#696969",ebony:"#555d50",davysGrey:"#555555",charcoal:"#36454f",charcoal2:"#444444",darkCharcoal:"#333333",outerSpace:"#414a4c",raisinBlack:"#242124",eerieBlack:"#1b1b1b",licorice:"#1a1110",black:"#000000"},z={white:"#ffffff",gainsboro:"#dbdbdb",light:"#d7d0f2",snow:"#fffafa",seashell:"#FFF5EE",ivory:"#FFFFF0",whiteSmoke:"#f5f5f5",boneWhite:"#f9f6ee"},q={hex_00:"#000000",hex_08:"#080808",hex_11:"#111111",hex_1A:"#1A1A1A",hex_23:"#232323",hex_2C:"#2C2C2C",hex_33:"#333333",hex_3C:"#3C3C3C",hex_44:"#444444",hex_4D:"#4D4D4D",hex_55:"#555555",hex_5E:"#5E5E5E",hex_66:"#666666",hex_6F:"#6F6F6F",hex_77:"#777777",hex_80:"#808080",hex_88:"#888888",hex_91:"#919191",hex_99:"#999999",hex_A2:"#A2A2A2",hex_AA:"#AAAAAA",hex_B3:"#B3B3B3",hex_BB:"#BBBBBB",hex_C4:"#C4C4C4",hex_CC:"#CCCCCC",hex_D5:"#D5D5D5",hex_DD:"#DDDDDD",hex_E6:"#E6E6E6",hex_EE:"#EEEEEE",hex_F5:"#F5F5F5",hex_FC:"#fcfcfc",hex_FF:"#FFFFFF"},I={soilBrown:"#8B4513",fieldGreen:"#228B22",wheatYellow:"#FFD700",skyBlue:"#87CEEB",leafGreen:"#32CD32",waterBlue:"#4682B4",sunYellow:"#FFA500",earthBrown:"#A52A2A",cornYellow:"#F4A460",harvestGold:"#DAA520",barnRed:"#8B0000",hayYellow:"#FAF0E6",mossGreen:"#556B2F",orchardOrange:"#FF8C00",farmGray:"#708090",grassGreen:"#6B8E23",oliveGreen:"#808000",cloudWhite:"#F0F8FF",clayRed:"#A52A2A",grapePurple:"#6A0DAD",lavenderPurple:"#E6E6FA",pumpkinOrange:"#FF7514",duskBlue:"#2F4F4F",forestGreen:"#0B6623",riverBlue:"#4682B4",carrotOrange:"#FFA500",cedarBrown:"#5E3A22",stoneGray:"#708090",sunrisePink:"#FF69B4"},j={...L,...z,...q,...I,primary:"#9280D9",secondary:"#F1D56F",tertiary:"#198754",canceled:"#6c757d",paused:"#343a40",accent:"#F687B1",highlight:"#345B9F",warning:"#D8882E",caution:"#FED440",danger:"#D64960",success:"#37B75A",info:"#17a2b8",textColor:"#333333",caption:"#666666",borderColor:"#dbdbdb",background:"#fdfdfd",transparent:"transparent"},a={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},H={min:{mobileXS:`(min-width: ${a.xs})`,mobileSM:`(min-width: ${a.sm})`,tablet:`(min-width: ${a.md})`,laptop:`(min-width: ${a.lg})`,laptopXL:`(min-width: ${a.xl})`,Desktop:`(min-width: ${a.xxl})`},max:{mobileXS:`(max-width: ${a.xs})`,mobileSM:`(max-width: ${a.sm})`,tablet:`(max-width: ${a.md})`,laptop:`(max-width: ${a.lg})`,laptopXL:`(max-width: ${a.xl})`,Desktop:`(max-width: ${a.xxl})`}},N={Lato:"Lato",Roboto:"Roboto",Inter:"Inter",Montserrat:"Montserrat",Poppins:"Poppins","Fira Sans":"Fira Sans"},Y={hairline:100,thin:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},W={a_extraSmall:"6px",b_tiny:"8px",c_smallCaption:"9px",d_caption:"10px",e_smallSubtitle:"11px",f_subtitle:"12px",g_smallNormal:"13px",h_normal:"14px",i_largeNormal:"15px",j_title:"16px",k_largeTitle:"17px",l_highlight:"18px",m_subheading:"19px",n_heading:"20px",o_largeHeading:"22px",p_extraLargeHeading:"24px",q_smallDisplay:"26px",r_display:"28px",s_largeDisplay:"32px",t_extraLargeDisplay:"36px",u_jumboDisplay:"38px",v_superDisplay:"40px"},t=8,X={s_x0_25:`${t*.25}px`,s_x0_5:`${t*.5}px`,s_x0_75:`${t*.75}px`,s_x1:`${t*1}px`,s_x1_25:`${t*1.25}px`,s_x1_5:`${t*1.5}px`,s_x1_75:`${t*1.75}px`,s_x2:`${t*2}px`,s_x2_25:`${t*2.25}px`,s_x2_5:`${t*2.5}px`,s_x2_75:`${t*2.75}px`,s_x3:`${t*3}px`,s_x3_5:`${t*3.5}px`,s_x4:`${t*4}px`,s_x4_5:`${t*45}px`,s_x5:`${t*5}px`,s_x5_5:`${t*5.5}px`,s_x6:`${t*6}px`},K={hide:-1,auto:"auto",base:0,docked:10,sidebar:500,dropdown:1e3,sticky:1100,banner:1200,header:1300,overlay:1400,modal:1500,popover:1600,skipLink:1700,toast:1800,tooltip:1900},m={colors:j,fontSizes:W,breakpoints:O,spaces:X,zIndices:K,fontWeights:Y,devices:H,fontFamily:N},U=l`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,V=l`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-button {
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.defaultButton};
  }

  &::-webkit-scrollbar-track-piece {
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({theme:e})=>e.colors.scrollThumb};
  }

  &::-webkit-scrollbar-corner {
  }

  &::-webkit-resizer {
  }
`;l`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;const J=l`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;l`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;_.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({$space:e})=>e?e+"px":"12px"};
`;_.div`
  display: flex;
  align-items: ${({$direction:e})=>"flex-start"};
  justify-content: flex-start;
  flex-direction: ${({$direction:e})=>e||"row"};
  gap: ${({$direction:e})=>e==="column"?"8px":"12px"};

  & .title {
    flex-shrink: 0;
    color: ${({theme:e})=>e.colors.darkText};
  }

  & .value {
    ${J};
    gap: 8px;
    color: ${({theme:e})=>e.colors.tableBody};
    white-space: break-spaces;
    flex: 1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    // flex-direction: column;
    gap: 4px;

    .title {
      font-weight: 600;
    }
  }
`;const Z={createGlobalStyle:w},Q=Z.createGlobalStyle`
  ${U};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  body {
    margin: 0;
    padding: 0;
    background: #fcfcfc;
    font-family: "Poppins", Open-Sans, Helvetica, Sans-Serif;
    color: ${({theme:e})=>e.colors.black};
    font-size: ${({theme:e})=>e==null?void 0:e.fontSizes.h_normal};
    font-weight: ${({theme:e})=>e==null?void 0:e.fontWeights.regular};

    ${V};
  }
`,oe={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[M({themes:{light:m,dark:m},defaultTheme:"light",Provider:y,GlobalStyles:Q})]};export{oe as default};
