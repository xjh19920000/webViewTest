webpackJsonp([21],{"40GB":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Home",data:function(){return{transitionName:"slide-right",notice:"",opacityStyle:"opacity:1",fixedHeader:"",fixedHeaderTitle:!1,refreshing:!1,scroll:"",totalAssets:0,walletCoinsList:[],quotationList:[],newCoinsList:[{id:1,symbol:"ETH",rate:"0.03832",usdt_rmb:"0.27263",rate_percent:"-2.93"}]}},methods:{refresh:function(){var t=this;this.refreshing=!0,setTimeout(function(){t.getQuotation()},1e3)},goToDetails:function(t){this.$store.commit("setHomeDetailsTitle",t.symbol),this.$router.push("/homeDetails")}},computed:{getLogo:function(){return function(t){}}},mounted:function(){},watch:{$route:function(t,e){"/home"==t.path&&e.path}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"home"},[i("div",{staticClass:"home-header",style:t.opacityStyle},[i("div",{staticStyle:{"padding-left":"30px",display:"table-cell","vertical-align":"middle"}},[i("p",{staticStyle:{color:"#CEBC98",margin:"0"}},[t._v("总资产")]),t._v(" "),i("h2",{staticStyle:{color:"#B9862F","margin-top":"20px","margin-bottom":"0"}},[t._v(t._s(Number(t.totalAssets).toFixed(5)))]),t._v(" "),i("div",{staticClass:"home-btn"},[i("router-link",{attrs:{to:"/assets"}},[i("mu-button",{attrs:{flat:"",color:"#fff"}},[i("i",{staticClass:"iconfont",staticStyle:{color:"#fff","margin-right":"5px"}},[t._v("")]),t._v("\n\t\t\t\t      \t添加资产\n\t\t\t\t    ")])],1)],1)])]),t._v(" "),i("mu-load-more",{attrs:{refreshing:t.refreshing},on:{refresh:t.refresh}},[i("mu-list",{staticStyle:{background:"white","margin-bottom":"50px"}},t._l(t.newCoinsList,function(e,s){return i("mu-list-item",{key:s,staticStyle:{padding:"10px 0",margin:"0 16px"},attrs:{avatar:"",button:""},on:{click:function(i){t.goToDetails(e)}}},[i("mu-list-item-action",[i("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.getLogo(e.symbol),alt:"",width:"40",height:"40"}})]),t._v(" "),i("mu-list-item-content",{staticStyle:{"margin-left":"10px"}},[i("mu-list-item-title",[t._v(t._s(e.symbol))]),t._v(" "),i("mu-list-item-sub-title",[t._v("≈"+t._s(e.rate))])],1),t._v(" "),i("mu-list-item-action",{staticClass:"right",staticStyle:{"text-align":"right"}},[i("span",{staticClass:"black-color"},[t._v(t._s(e.usdt_rmb)),i("br"),i("span",{staticClass:"gray-color"},[t._v(t._s(e.rate_percent))])])])],1)}),1)],1)],1)])},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("FBHg")},"data-v-42d39136",null);e.default=o.exports},FBHg:function(t,e){}});
//# sourceMappingURL=21.f42dd409cf110ec7feaf.js.map