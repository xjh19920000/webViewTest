webpackJsonp([19],{KXqu:function(t,e){},ewoG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"WalletBackups",components:{"deal-password":i("Z175").a},data:function(){return{step:1,memorizing:"",memorizingWords:"",dealPassword:"",chooseArr:[],backups:[],newBackups:[],walletInfo:{}}},created:function(){for(var t in this.walletInfo=JSON.parse(this.$route.query.details),this.memorizing=this.walletInfo.secretSeed,this.backups=this.walletInfo.secretSeed.split(" "),this.backups)this.newBackups.push({id:1,name:this.backups[t],isChoose:!1})},methods:{oneStep:function(){},twoStep:function(){},stepFive:function(){this.memorizingWords==this.memorizing?this.step=5:this.$layer.open({content:"助记词验证错误",skin:"msg",time:2})},choose:function(t,e){var i=this.chooseArr.indexOf(t);if(e)for(var s in this.chooseArr.splice(i,1),this.memorizingWords=this.chooseArr.toString().replace(/,/g," "),this.newBackups)this.newBackups[s].name==t&&this.$set(this.newBackups[s],"isChoose",!1);else for(var o in this.chooseArr.push(t),this.memorizingWords=this.chooseArr.toString().replace(/,/g," "),this.newBackups)this.newBackups[o].name==t&&this.$set(this.newBackups[o],"isChoose",!0)},entryWallet:function(){this.$router.replace("/myWallet"),this.$router.go(-1)},shuffle:function(t){for(var e=t.length;e;){var i=Math.floor(Math.random()*e--),s=[t[e],t[i]];t[i]=s[0],t[e]=s[1]}return t}},computed:{},watch:{dealPassword:function(t,e){6==t.length&&(this.walletInfo.pwd==t?this.step=2:(this.$layer.open({content:"密码错误",skin:"msg",time:2}),this.dealPassword=""))},step:function(t,e){if(4==t)for(var i in this.newBackups=[],this.backups=this.walletInfo.secretSeed.split(" "),this.shuffle(this.backups),this.backups)this.newBackups.push({id:1,name:this.backups[i],isChoose:!1})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wallet-backups"},[1==t.step?i("div",{staticStyle:{padding:"20px 10%"}},[i("p",{staticStyle:{color:"#b5b5b5"}},[t._v("输入交易密码")]),t._v(" "),i("deal-password",{model:{value:t.dealPassword,callback:function(e){t.dealPassword=e},expression:"dealPassword"}})],1):t._e(),t._v(" "),2==t.step?i("div",{staticStyle:{padding:"30px"}},[i("p",{staticStyle:{"line-height":"1.4",padding:"8px","font-size":"14px",background:"#e5e5e5",color:"#838383","border-radius":"5px"}},[t._v(" \n\t\t\t\t注意：拥有钱包私匙就能安全控制钱包资产，因此强烈建议你在使用钱包前做好备份，将钱包私匙保存到安全的地方.建议备份完成后立即恢复一次，以确保安全。然后尝试转入，转出小额资产开始使用。\n\t\t\t")]),t._v(" "),i("mu-button",{staticStyle:{height:"44px","margin-top":"30px"},attrs:{"full-width":"",color:"#295DF1"},on:{click:function(e){t.step=3}}},[t._v("立即备份")])],1):t._e(),t._v(" "),3==t.step?i("div",[i("p",{staticStyle:{"font-size":"12px",color:"#a5a5a5",background:"#e5e5e5",padding:"10px 20px","margin-top":"0"}},[t._v("钱包助记词用于恢复钱包资产，拥有助记词即可完全控制钱包资产，请务必妥善保管，丢失助记词即丢失钱包资产，无法提供找回功能。")]),t._v(" "),i("div",{staticStyle:{margin:"40px","text-align":"center"}},[i("p",[t._v("请记下你的钱包助记词并保存到安全的地方")]),t._v(" "),i("mu-text-field",{staticStyle:{padding:"10px",border:"1px solid #e5e5e5"},attrs:{"multi-line":"",solo:!0,rows:6,"full-width":""},model:{value:t.memorizing,callback:function(e){t.memorizing=e},expression:"memorizing"}}),i("br"),t._v(" "),i("mu-button",{staticClass:"creatBtn",staticStyle:{width:"100%","margin-top":"40px",height:"44px"},attrs:{color:"#295DF1"},on:{click:function(e){t.step=4}}},[t._v("下一步")])],1)]):t._e(),t._v(" "),4==t.step?i("div",[i("p",{staticStyle:{margin:"30px auto","text-align":"center"}},[t._v("验证你的钱包助记词")]),t._v(" "),i("div",{staticStyle:{padding:"0 30px"}},[i("p",{staticStyle:{margin:"10px 0",color:"#a5a5a5"}},[t._v("请根据你记下的助记词,按顺序点击,验证你备份的助记词正确无误")]),t._v(" "),i("mu-text-field",{staticStyle:{padding:"10px",border:"1px solid #e5e5e5"},attrs:{readonly:"","multi-line":"",solo:!0,rows:4,"full-width":""},model:{value:t.memorizingWords,callback:function(e){t.memorizingWords=e},expression:"memorizingWords"}}),i("br"),t._v(" "),i("div",[i("div",{staticStyle:{margin:"10px 0"}},t._l(t.newBackups,function(e,s){return i("mu-button",{key:s,style:e.isChoose?"border: 1px solid #295DF1;margin: 5px;":"color:#295DF1;margin: 5px",attrs:{small:"",color:e.isChoose?"#295DF1":"#fff"},on:{click:function(i){t.choose(e.name,e.isChoose)}}},[t._v(t._s(e.name))])}),1)]),t._v(" "),i("mu-button",{staticClass:"creatBtn",staticStyle:{width:"100%","margin-top":"40px",height:"44px"},attrs:{color:"#295DF1"},on:{click:t.stepFive}},[t._v("下一步")])],1)]):t._e(),t._v(" "),5==t.step?i("div",[i("div",{staticStyle:{margin:"40px","text-align":"center"}},[i("i",{staticClass:"iconfont",staticStyle:{"font-size":"100px",color:"#295DF1","margin-top":"30px"}},[t._v("")]),t._v(" "),i("p",[t._v("钱包备份成功!")]),t._v(" "),i("mu-button",{staticClass:"creatBtn",staticStyle:{width:"100%","margin-top":"40px",height:"44px"},attrs:{color:"#295DF1"},on:{click:t.entryWallet}},[t._v("进入钱包")])],1)]):t._e()])},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("KXqu")},"data-v-4bb44dcc",null);e.default=a.exports}});
//# sourceMappingURL=19.7e97f37a3db867b1ba49.js.map