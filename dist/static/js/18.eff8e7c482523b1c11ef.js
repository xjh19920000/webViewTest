webpackJsonp([18],{"4Rga":function(s,t){},fZ7c:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("mvHQ"),o=e.n(i),a={name:"Search",data:function(){return{keyword:"",selects:[],assetsList:[{name:"ALD",isChoose:!0,id:1},{name:"ETH",isChoose:!0,id:2},{name:"BTC",isChoose:!0,id:3},{name:"EOS",isChoose:!0,id:4},{name:"USDT",id:5},{name:"AE",id:6},{name:"BAT",id:7},{name:"BNB",id:8},{name:"HT",id:9},{name:"KNC",id:10},{name:"OMG",id:11},{name:"PAY",id:12},{name:"ZRX",id:13}]}},computed:{getLogo:function(){return function(s){}}},methods:{routerBack:function(){this.$router.back()},clear:function(){},changeChoose:function(s){var t=this.assetsList,e=[];for(var i in t)s==t[i].name&&this.$set(this.assetsList[i],"isChoose",!t[i].isChoose),t[i].isChoose&&e.push(this.assetsList[i]);var a=[];for(var n in e)a.push(e[n].name);this.$store.commit("backCoinsList",a),localStorage.setItem("chooseCoinsTypeArr",o()(a))}},mounted:function(){var s=JSON.parse(localStorage.getItem("chooseCoinsTypeArr"));console.log(this.$lib.libAssetsList);var t=this.assetsList;if(console.log(t),s)for(var e in t)for(var i in s)t[e].name==s[i]&&this.$set(t[e],"isChoose",!0);else if(this.$lib.libAssetsList.length>0){for(var o in t)for(var a in this.$lib.libAssetsList)t[o].name==this.$lib.libAssetsList[a].name&&this.$set(t[o],"isChoose",!0);console.log("newCoinsList",t)}console.log(t),this.assetsList=t},watch:{}},n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"assets"},[e("div",{staticStyle:{background:"white"}},[e("mu-list",{staticStyle:{margin:"0",padding:"0"}},s._l(s.assetsList,function(t,i){return e("mu-list-item",{key:i,staticStyle:{padding:"8px 0"},attrs:{avatar:"",button:"",ripple:!1}},[e("mu-list-item-action",[e("mu-avatar",[e("img",{staticStyle:{"border-radius":"50%"},attrs:{src:s.getLogo(t.name),width:"30",height:"30"}})])],1),s._v(" "),e("mu-list-item-title",[s._v(s._s(t.name))]),s._v(" "),e("mu-list-item-action",[e("mu-button",{attrs:{icon:""},on:{click:function(e){s.changeChoose(t.name)}}},[e("i",{staticClass:"iconfont",style:{color:t.isChoose?"#B9862F":"#DCDDDD"}},[s._v("")])])],1)],1)}),1)],1)])},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(s){e("4Rga")},"data-v-52878974",null);t.default=r.exports}});
//# sourceMappingURL=18.eff8e7c482523b1c11ef.js.map