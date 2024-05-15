import{j as G}from"./jsx-runtime-CKrituN3.js";import{a as v,u as C}from"./styled-components.browser.esm-50nrqITv.js";const n=v`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  outline: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`,F=a=>{switch(a){case"primary":return v`
        background-color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.primary}};
        color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.white}};
      `;case"secondary":return v`
        background-color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.secondary}};
        color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.white}};
      `;case"danger":return v`
        background-color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.danger}};
        color: ${({theme:e})=>{var l;return(l=e==null?void 0:e.colors)==null?void 0:l.white}};
      `;case"solid":return v`
        background-color: ${({theme:e,$bgColor:l})=>{var u;return l?e==null?void 0:e.colors[l]:(u=e==null?void 0:e.colors)==null?void 0:u.primary}};
        color: ${({theme:e,$color:l})=>{var u;return l?e==null?void 0:e.colors[l]:(u=e==null?void 0:e.colors)==null?void 0:u.white}};
      `;case"outline":return v`
        background-color: ${({theme:e,$bgColor:l})=>{var u;return l?e==null?void 0:e.colors[l]:(u=e==null?void 0:e.colors)==null?void 0:u.transparent}};
        color: ${({theme:e,$color:l})=>{var u;return l?e==null?void 0:e.colors[l]:(u=e==null?void 0:e.colors)==null?void 0:u.primary}};
        border: 2px solid
          ${({theme:e,$borderColor:l})=>{var u;return l?e==null?void 0:e.colors[l]:(u=e==null?void 0:e.colors)==null?void 0:u.primary}};
      `;case"no-style":return v`
        all: initial;
        cursor: pointer;
        box-sizing: border-box;
        color: inherit;
        max-width: fit-content;
        ${n};
      `;default:return v``}},r={xsm:{height:"30px",fontSize:"g_smallNormal",padding:"6px 16px"},sm:{height:"36px",fontSize:"h_normal",padding:"8px 20px"},md:{height:"42px",fontSize:"i_largeNormal",padding:"10px 24px"},lg:{height:"48px",fontSize:"j_title",padding:"12px 28px"},xl:{height:"54px",fontSize:"m_subheading",padding:"14px 32px"}},S=C.button`
  ${n};
  ${({$variant:a})=>F(a)};
  font-weight: ${({theme:a,$fontWeight:e})=>{var l;return e?a==null?void 0:a.fontWeights[e]:(l=a==null?void 0:a.fontWeights)==null?void 0:l.medium}};

  font-size: ${({theme:a,$fontSize:e,$size:l})=>e?a==null?void 0:a.fontSizes[e]:l?a==null?void 0:a.fontSizes[r[l].fontSize]:a==null?void 0:a.fontSizes.h_normal};

  font-family: ${({theme:a,$fontFamily:e})=>{var l;return e?a==null?void 0:a.fontFamily[e]:(l=a==null?void 0:a.fontFamily)==null?void 0:l.Poppins}};
  margin: ${({$margin:a})=>a};
  padding: ${({$padding:a,$size:e})=>a||(e?r[e].padding:"8px 20px")};
  border-radius: ${({$borderRadius:a})=>a};
  width: ${({$width:a})=>a};
  height: ${({$height:a,$size:e})=>a||(e?r[e].height:"36px")};
  min-height: fit-content;
  min-width: fit-content;

  &:hover:not(:disabled) {
    background-color: ${({theme:a,$hoverBgColor:e})=>{var l;return e?a==null?void 0:a.colors[e]:(l=a==null?void 0:a.colors)==null?void 0:l.transparent}};
    color: ${({theme:a,$hoverColor:e})=>{var l;return e?a==null?void 0:a.colors[e]:(l=a==null?void 0:a.colors)==null?void 0:l.primary}};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`,o=({children:a,variant:e="primary",borderColor:l="primary",borderRadius:u="12px",bgColor:i,color:s,hoverColor:c="whiteSmoke",hoverBgColor:d="accent",width:t="270px",height:x,fontSize:_,padding:h,margin:p="0px",title:g="OK",fontFamily:y="Inter",fontWeight:f,isDisabled:w,isLoading:b,size:B="sm",...k})=>G.jsx(S,{$bgColor:i,$borderColor:l,$borderRadius:u,$fontSize:_,$margin:p,$padding:h,$color:s,$variant:e,$fontFamily:y,$fontWeight:f,$height:x,$width:t,$hoverColor:c,$hoverBgColor:d,$size:B,disabled:w||b,...k,children:a||g});try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"solid"'},{value:'"outline"'},{value:'"no-style"'}]}},title:{defaultValue:{value:"OK"},description:"",name:"title",required:!1,type:{name:"string"}},borderRadius:{defaultValue:{value:"12px"},description:"",name:"borderRadius",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"primary"},description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"caption"'},{value:'"transparent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"canceled"'},{value:'"paused"'},{value:'"accent"'},{value:'"highlight"'},{value:'"caution"'},{value:'"danger"'},{value:'"textColor"'},{value:'"borderColor"'},{value:'"background"'},{value:'"soilBrown"'},{value:'"fieldGreen"'},{value:'"wheatYellow"'},{value:'"skyBlue"'},{value:'"leafGreen"'},{value:'"waterBlue"'},{value:'"sunYellow"'},{value:'"earthBrown"'},{value:'"cornYellow"'},{value:'"harvestGold"'},{value:'"barnRed"'},{value:'"hayYellow"'},{value:'"mossGreen"'},{value:'"orchardOrange"'},{value:'"farmGray"'},{value:'"grassGreen"'},{value:'"oliveGreen"'},{value:'"cloudWhite"'},{value:'"clayRed"'},{value:'"grapePurple"'},{value:'"lavenderPurple"'},{value:'"pumpkinOrange"'},{value:'"duskBlue"'},{value:'"forestGreen"'},{value:'"riverBlue"'},{value:'"carrotOrange"'},{value:'"cedarBrown"'},{value:'"stoneGray"'},{value:'"sunrisePink"'},{value:'"hex_00"'},{value:'"hex_08"'},{value:'"hex_11"'},{value:'"hex_1A"'},{value:'"hex_23"'},{value:'"hex_2C"'},{value:'"hex_33"'},{value:'"hex_3C"'},{value:'"hex_44"'},{value:'"hex_4D"'},{value:'"hex_55"'},{value:'"hex_5E"'},{value:'"hex_66"'},{value:'"hex_6F"'},{value:'"hex_77"'},{value:'"hex_80"'},{value:'"hex_88"'},{value:'"hex_91"'},{value:'"hex_99"'},{value:'"hex_A2"'},{value:'"hex_AA"'},{value:'"hex_B3"'},{value:'"hex_BB"'},{value:'"hex_C4"'},{value:'"hex_CC"'},{value:'"hex_D5"'},{value:'"hex_DD"'},{value:'"hex_E6"'},{value:'"hex_EE"'},{value:'"hex_F5"'},{value:'"hex_FC"'},{value:'"hex_FF"'},{value:'"white"'},{value:'"gainsboro"'},{value:'"light"'},{value:'"snow"'},{value:'"seashell"'},{value:'"ivory"'},{value:'"whiteSmoke"'},{value:'"boneWhite"'},{value:'"coolBlack"'},{value:'"gray"'},{value:'"dimGray"'},{value:'"ebony"'},{value:'"davysGrey"'},{value:'"charcoal"'},{value:'"charcoal2"'},{value:'"darkCharcoal"'},{value:'"outerSpace"'},{value:'"raisinBlack"'},{value:'"eerieBlack"'},{value:'"licorice"'},{value:'"black"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"caption"'},{value:'"transparent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"canceled"'},{value:'"paused"'},{value:'"accent"'},{value:'"highlight"'},{value:'"caution"'},{value:'"danger"'},{value:'"textColor"'},{value:'"borderColor"'},{value:'"background"'},{value:'"soilBrown"'},{value:'"fieldGreen"'},{value:'"wheatYellow"'},{value:'"skyBlue"'},{value:'"leafGreen"'},{value:'"waterBlue"'},{value:'"sunYellow"'},{value:'"earthBrown"'},{value:'"cornYellow"'},{value:'"harvestGold"'},{value:'"barnRed"'},{value:'"hayYellow"'},{value:'"mossGreen"'},{value:'"orchardOrange"'},{value:'"farmGray"'},{value:'"grassGreen"'},{value:'"oliveGreen"'},{value:'"cloudWhite"'},{value:'"clayRed"'},{value:'"grapePurple"'},{value:'"lavenderPurple"'},{value:'"pumpkinOrange"'},{value:'"duskBlue"'},{value:'"forestGreen"'},{value:'"riverBlue"'},{value:'"carrotOrange"'},{value:'"cedarBrown"'},{value:'"stoneGray"'},{value:'"sunrisePink"'},{value:'"hex_00"'},{value:'"hex_08"'},{value:'"hex_11"'},{value:'"hex_1A"'},{value:'"hex_23"'},{value:'"hex_2C"'},{value:'"hex_33"'},{value:'"hex_3C"'},{value:'"hex_44"'},{value:'"hex_4D"'},{value:'"hex_55"'},{value:'"hex_5E"'},{value:'"hex_66"'},{value:'"hex_6F"'},{value:'"hex_77"'},{value:'"hex_80"'},{value:'"hex_88"'},{value:'"hex_91"'},{value:'"hex_99"'},{value:'"hex_A2"'},{value:'"hex_AA"'},{value:'"hex_B3"'},{value:'"hex_BB"'},{value:'"hex_C4"'},{value:'"hex_CC"'},{value:'"hex_D5"'},{value:'"hex_DD"'},{value:'"hex_E6"'},{value:'"hex_EE"'},{value:'"hex_F5"'},{value:'"hex_FC"'},{value:'"hex_FF"'},{value:'"white"'},{value:'"gainsboro"'},{value:'"light"'},{value:'"snow"'},{value:'"seashell"'},{value:'"ivory"'},{value:'"whiteSmoke"'},{value:'"boneWhite"'},{value:'"coolBlack"'},{value:'"gray"'},{value:'"dimGray"'},{value:'"ebony"'},{value:'"davysGrey"'},{value:'"charcoal"'},{value:'"charcoal2"'},{value:'"darkCharcoal"'},{value:'"outerSpace"'},{value:'"raisinBlack"'},{value:'"eerieBlack"'},{value:'"licorice"'},{value:'"black"'}]}},hoverColor:{defaultValue:{value:"whiteSmoke"},description:"",name:"hoverColor",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"caption"'},{value:'"transparent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"canceled"'},{value:'"paused"'},{value:'"accent"'},{value:'"highlight"'},{value:'"caution"'},{value:'"danger"'},{value:'"textColor"'},{value:'"borderColor"'},{value:'"background"'},{value:'"soilBrown"'},{value:'"fieldGreen"'},{value:'"wheatYellow"'},{value:'"skyBlue"'},{value:'"leafGreen"'},{value:'"waterBlue"'},{value:'"sunYellow"'},{value:'"earthBrown"'},{value:'"cornYellow"'},{value:'"harvestGold"'},{value:'"barnRed"'},{value:'"hayYellow"'},{value:'"mossGreen"'},{value:'"orchardOrange"'},{value:'"farmGray"'},{value:'"grassGreen"'},{value:'"oliveGreen"'},{value:'"cloudWhite"'},{value:'"clayRed"'},{value:'"grapePurple"'},{value:'"lavenderPurple"'},{value:'"pumpkinOrange"'},{value:'"duskBlue"'},{value:'"forestGreen"'},{value:'"riverBlue"'},{value:'"carrotOrange"'},{value:'"cedarBrown"'},{value:'"stoneGray"'},{value:'"sunrisePink"'},{value:'"hex_00"'},{value:'"hex_08"'},{value:'"hex_11"'},{value:'"hex_1A"'},{value:'"hex_23"'},{value:'"hex_2C"'},{value:'"hex_33"'},{value:'"hex_3C"'},{value:'"hex_44"'},{value:'"hex_4D"'},{value:'"hex_55"'},{value:'"hex_5E"'},{value:'"hex_66"'},{value:'"hex_6F"'},{value:'"hex_77"'},{value:'"hex_80"'},{value:'"hex_88"'},{value:'"hex_91"'},{value:'"hex_99"'},{value:'"hex_A2"'},{value:'"hex_AA"'},{value:'"hex_B3"'},{value:'"hex_BB"'},{value:'"hex_C4"'},{value:'"hex_CC"'},{value:'"hex_D5"'},{value:'"hex_DD"'},{value:'"hex_E6"'},{value:'"hex_EE"'},{value:'"hex_F5"'},{value:'"hex_FC"'},{value:'"hex_FF"'},{value:'"white"'},{value:'"gainsboro"'},{value:'"light"'},{value:'"snow"'},{value:'"seashell"'},{value:'"ivory"'},{value:'"whiteSmoke"'},{value:'"boneWhite"'},{value:'"coolBlack"'},{value:'"gray"'},{value:'"dimGray"'},{value:'"ebony"'},{value:'"davysGrey"'},{value:'"charcoal"'},{value:'"charcoal2"'},{value:'"darkCharcoal"'},{value:'"outerSpace"'},{value:'"raisinBlack"'},{value:'"eerieBlack"'},{value:'"licorice"'},{value:'"black"'}]}},hoverBgColor:{defaultValue:{value:"accent"},description:"",name:"hoverBgColor",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"caption"'},{value:'"transparent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"canceled"'},{value:'"paused"'},{value:'"accent"'},{value:'"highlight"'},{value:'"caution"'},{value:'"danger"'},{value:'"textColor"'},{value:'"borderColor"'},{value:'"background"'},{value:'"soilBrown"'},{value:'"fieldGreen"'},{value:'"wheatYellow"'},{value:'"skyBlue"'},{value:'"leafGreen"'},{value:'"waterBlue"'},{value:'"sunYellow"'},{value:'"earthBrown"'},{value:'"cornYellow"'},{value:'"harvestGold"'},{value:'"barnRed"'},{value:'"hayYellow"'},{value:'"mossGreen"'},{value:'"orchardOrange"'},{value:'"farmGray"'},{value:'"grassGreen"'},{value:'"oliveGreen"'},{value:'"cloudWhite"'},{value:'"clayRed"'},{value:'"grapePurple"'},{value:'"lavenderPurple"'},{value:'"pumpkinOrange"'},{value:'"duskBlue"'},{value:'"forestGreen"'},{value:'"riverBlue"'},{value:'"carrotOrange"'},{value:'"cedarBrown"'},{value:'"stoneGray"'},{value:'"sunrisePink"'},{value:'"hex_00"'},{value:'"hex_08"'},{value:'"hex_11"'},{value:'"hex_1A"'},{value:'"hex_23"'},{value:'"hex_2C"'},{value:'"hex_33"'},{value:'"hex_3C"'},{value:'"hex_44"'},{value:'"hex_4D"'},{value:'"hex_55"'},{value:'"hex_5E"'},{value:'"hex_66"'},{value:'"hex_6F"'},{value:'"hex_77"'},{value:'"hex_80"'},{value:'"hex_88"'},{value:'"hex_91"'},{value:'"hex_99"'},{value:'"hex_A2"'},{value:'"hex_AA"'},{value:'"hex_B3"'},{value:'"hex_BB"'},{value:'"hex_C4"'},{value:'"hex_CC"'},{value:'"hex_D5"'},{value:'"hex_DD"'},{value:'"hex_E6"'},{value:'"hex_EE"'},{value:'"hex_F5"'},{value:'"hex_FC"'},{value:'"hex_FF"'},{value:'"white"'},{value:'"gainsboro"'},{value:'"light"'},{value:'"snow"'},{value:'"seashell"'},{value:'"ivory"'},{value:'"whiteSmoke"'},{value:'"boneWhite"'},{value:'"coolBlack"'},{value:'"gray"'},{value:'"dimGray"'},{value:'"ebony"'},{value:'"davysGrey"'},{value:'"charcoal"'},{value:'"charcoal2"'},{value:'"darkCharcoal"'},{value:'"outerSpace"'},{value:'"raisinBlack"'},{value:'"eerieBlack"'},{value:'"licorice"'},{value:'"black"'}]}},width:{defaultValue:{value:"270px"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"a_extraSmall"'},{value:'"b_tiny"'},{value:'"c_smallCaption"'},{value:'"d_caption"'},{value:'"e_smallSubtitle"'},{value:'"f_subtitle"'},{value:'"g_smallNormal"'},{value:'"h_normal"'},{value:'"i_largeNormal"'},{value:'"j_title"'},{value:'"k_largeTitle"'},{value:'"l_highlight"'},{value:'"m_subheading"'},{value:'"n_heading"'},{value:'"o_largeHeading"'},{value:'"p_extraLargeHeading"'},{value:'"q_smallDisplay"'},{value:'"r_display"'},{value:'"s_largeDisplay"'},{value:'"t_extraLargeDisplay"'},{value:'"u_jumboDisplay"'},{value:'"v_superDisplay"'}]}},fontFamily:{defaultValue:{value:"Inter"},description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"Lato"'},{value:'"Roboto"'},{value:'"Inter"'},{value:'"Montserrat"'},{value:'"Poppins"'},{value:'"Fira Sans"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"caption"'},{value:'"transparent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"canceled"'},{value:'"paused"'},{value:'"accent"'},{value:'"highlight"'},{value:'"caution"'},{value:'"danger"'},{value:'"textColor"'},{value:'"borderColor"'},{value:'"background"'},{value:'"soilBrown"'},{value:'"fieldGreen"'},{value:'"wheatYellow"'},{value:'"skyBlue"'},{value:'"leafGreen"'},{value:'"waterBlue"'},{value:'"sunYellow"'},{value:'"earthBrown"'},{value:'"cornYellow"'},{value:'"harvestGold"'},{value:'"barnRed"'},{value:'"hayYellow"'},{value:'"mossGreen"'},{value:'"orchardOrange"'},{value:'"farmGray"'},{value:'"grassGreen"'},{value:'"oliveGreen"'},{value:'"cloudWhite"'},{value:'"clayRed"'},{value:'"grapePurple"'},{value:'"lavenderPurple"'},{value:'"pumpkinOrange"'},{value:'"duskBlue"'},{value:'"forestGreen"'},{value:'"riverBlue"'},{value:'"carrotOrange"'},{value:'"cedarBrown"'},{value:'"stoneGray"'},{value:'"sunrisePink"'},{value:'"hex_00"'},{value:'"hex_08"'},{value:'"hex_11"'},{value:'"hex_1A"'},{value:'"hex_23"'},{value:'"hex_2C"'},{value:'"hex_33"'},{value:'"hex_3C"'},{value:'"hex_44"'},{value:'"hex_4D"'},{value:'"hex_55"'},{value:'"hex_5E"'},{value:'"hex_66"'},{value:'"hex_6F"'},{value:'"hex_77"'},{value:'"hex_80"'},{value:'"hex_88"'},{value:'"hex_91"'},{value:'"hex_99"'},{value:'"hex_A2"'},{value:'"hex_AA"'},{value:'"hex_B3"'},{value:'"hex_BB"'},{value:'"hex_C4"'},{value:'"hex_CC"'},{value:'"hex_D5"'},{value:'"hex_DD"'},{value:'"hex_E6"'},{value:'"hex_EE"'},{value:'"hex_F5"'},{value:'"hex_FC"'},{value:'"hex_FF"'},{value:'"white"'},{value:'"gainsboro"'},{value:'"light"'},{value:'"snow"'},{value:'"seashell"'},{value:'"ivory"'},{value:'"whiteSmoke"'},{value:'"boneWhite"'},{value:'"coolBlack"'},{value:'"gray"'},{value:'"dimGray"'},{value:'"ebony"'},{value:'"davysGrey"'},{value:'"charcoal"'},{value:'"charcoal2"'},{value:'"darkCharcoal"'},{value:'"outerSpace"'},{value:'"raisinBlack"'},{value:'"eerieBlack"'},{value:'"licorice"'},{value:'"black"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"black"'},{value:'"hairline"'},{value:'"thin"'},{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string"}},margin:{defaultValue:{value:"0px"},description:"",name:"margin",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xsm"'}]}}}}}catch{}export{o as B};