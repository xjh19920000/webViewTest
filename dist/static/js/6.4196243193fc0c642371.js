webpackJsonp([6],{"GpP/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ExportKey",components:{"deal-password":a("Z175").a},data:function(){return{step:1,address:"",privateKey:"",dealPassword:"",walletInfo:{}}},created:function(){this.walletInfo=JSON.parse(this.$route.query.details),this.address=this.walletInfo.address,this.privateKey=this.walletInfo.privateKey},methods:{entryWallet:function(){this.$router.replace("/myWallet"),this.$router.go(-1)}},computed:{},watch:{dealPassword:function(t,e){6==t.length&&(this.walletInfo.pwd==t?this.step=2:(this.$layer.open({content:"密码错误",skin:"msg",time:2}),this.dealPassword=""))}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export-key"},[1==t.step?a("div",{staticStyle:{padding:"20px 10%"}},[a("p",{staticStyle:{color:"#b5b5b5"}},[t._v("请输入交易密码")]),t._v(" "),a("deal-password",{model:{value:t.dealPassword,callback:function(e){t.dealPassword=e},expression:"dealPassword"}})],1):t._e(),t._v(" "),2==t.step?a("div",[a("p",{staticStyle:{margin:"20px","font-size":"12px",color:"black",background:"#e5e5e5",padding:"10px 20px"}},[t._v("注意！拥有钱包私钥可安全控制该地址的资产，不要分享给任何人。")]),t._v(" "),a("div",{staticStyle:{margin:"0 40px"}},[a("p",{staticStyle:{"font-size":"14px","text-align":"center"}},[t._v("以下是ETH的地址和私钥，点击可复制")]),t._v(" "),a("p",{staticStyle:{"margin-top":"25px","margin-bottom":"5px",color:"#a5a5a5"}},[t._v("地址")]),t._v(" "),a("mu-text-field",{staticStyle:{padding:"10px",border:"1px solid #e5e5e5"},attrs:{readonly:"","multi-line":"",solo:!0,rows:4,"full-width":""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),a("br"),t._v(" "),a("p",{staticStyle:{"margin-bottom":"5px",color:"#a5a5a5"}},[t._v("私钥")]),t._v(" "),a("mu-text-field",{staticStyle:{padding:"10px",border:"1px solid #e5e5e5"},attrs:{readonly:"","multi-line":"",solo:!0,rows:4,"full-width":""},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}}),a("br")],1)]):t._e(),t._v(" "),3==t.step?a("div",[a("div",{staticStyle:{margin:"40px","text-align":"center"}},[a("i",{staticClass:"iconfont",staticStyle:{"font-size":"100px",color:"#295DF1","margin-top":"30px"}},[t._v("")]),t._v(" "),a("p",[t._v("钱包导出成功!")]),t._v(" "),a("mu-button",{staticClass:"creatBtn",staticStyle:{width:"100%","margin-top":"40px",height:"44px"},attrs:{color:"#295DF1"},on:{click:t.entryWallet}},[t._v("进入钱包")])],1)]):t._e()])},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("k1nT")},"data-v-bdacd3ba",null);e.default=l.exports},k1nT:function(t,e){}});
//# sourceMappingURL=6.4196243193fc0c642371.js.map