(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},a=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1788:function(e,t,n){},2267:function(e,t,n){"use strict";var s=n("3209"),i=n.n(s);i.a},3209:function(e,t,n){},"569d":function(e){e.exports=JSON.parse('{"data":[{"id":1,"type":"mulit choice","name":"下列程序的运行结果是() <br>#include \'stdio.h\'<br> main() {<br> int m=5;<br> if(m++>5)<br>&nbsp;&nbsp;&nbsp;printf(“%dn”,m);<br> else printf(“%dn”,m--);<br>}","A":"7","B":"6","C":"5","D":"4","E":"","answer":["A","B"],"grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"type":"single choice","id":2,"name":"以下错误的语句是（）","A":"if(x>y)","B":"if(x=y)&&(x!=0) x+=y","C":"if(x!=y) scanf(“%d”,&x); else scanf(“%d”,&y)","D":"if(x<y) {x++;y++;}","answer":"B","grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"id":3,"type":"single choice","name":"三维Cohen-Surtherland裁剪算法中直线端点编码需要多少位？","A":"3","B":"4","C":"6","D":"8","answer":"C","grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"id":4,"type":"mulit choice","name":"下面哪些是图形的优点?","A":"直观形象","B":"无语言限制","C":"信息量大","D":"准确","E":"","answer":["A","B","C","D"],"grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"id":5,"type":"single choice","name":"灰度等级为256级，分辨率为2048*1024的显示器，至少需要的帧缓存容量为:","A":"512KB","B":"1MB","C":"2MB","D":"3MB","answer":"C","grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"id":6,"type":"single choice","name":"下列有关Liang-Barsky算法的叙述中,正确的论述是:","A":"算法的基本出发点是直线的点斜式方程","B":"算法主要是针对凸多边形的裁剪算法","C":"算法的思想是把被裁剪的线段看成是有向线段","D":"窗口入边的两个交点和被裁减直线的终点为一组，窗口出边的两个交点和被裁剪直线的起始点为一组","answer":"C","grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"},{"id":7,"type":"single choice","name":"假设场景中有k个多边形构成,显示分辨率为m*n,则图像空间消隐算法的算法复杂度为：","A":"k*k","B":"m*n*k","C":"m*n*k*k","D":"都不是","answer":"B","grade":1,"difficult":"easy","chapter":"第一章","knowledge_point":"XXXXXX","analysis":"XXXXXXX"}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r={name:"App",components:{}},o=r,c=n("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null),u=l.exports,d=n("5c96"),p=n.n(d),_=(n("0fae"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"main"},[n("el-button",{staticClass:"select_button",attrs:{type:"primary",round:""},on:{click:e.go_to_question_page}},[e._v("批量")]),n("el-button",{staticClass:"select_button",attrs:{type:"primary",round:""},on:{click:e.go_to_question_page}},[e._v("一题")])],1)])},m=[],f={name:"select_page",data:function(){return{message:""}},methods:{go_to_question_page:function(){this.$router.push({name:"question_main_page",params:{username:"123"}})}}},x=f,g=(n("2267"),Object(c["a"])(x,h,m,!1,null,"7017a343",null)),X=g.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",round:""},on:{click:e.previous_question}},[e._v("上一题 ")]),n("span",{staticStyle:{"margin-top":"3px","font-size":"25px"}},[e._v("试题")]),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",round:""},on:{click:e.next_question}},[e._v("下一题")])],1),"single choice"===e.type_name?n("div",[e._v(" "+e._s(e.index+1)+".(单选) "),n("div",{staticClass:"text",staticStyle:{"margin-top":"5px"},domProps:{innerHTML:e._s(e.select_question[e.index].name)}}),n("br"),n("el-radio-group",{on:{change:function(t){return e.set_select_answer(t,e.index)}},model:{value:e.single_select_answer[e.index],callback:function(t){e.$set(e.single_select_answer,e.index,t)},expression:"single_select_answer[index]"}},[n("el-radio",{staticClass:"item",attrs:{label:1,border:""}},[e._v(e._s(e.select_question[e.index].A))]),n("br"),n("br"),n("el-radio",{staticClass:"item",attrs:{label:2,border:""}},[e._v(e._s(e.select_question[e.index].B))]),n("br"),n("br"),n("el-radio",{staticClass:"item",attrs:{label:3,border:""}},[e._v(e._s(e.select_question[e.index].C))]),n("br"),n("br"),n("el-radio",{staticClass:"item",attrs:{label:4,border:""}},[e._v(e._s(e.select_question[e.index].D))]),n("br")],1)],1):e._e(),"mulit choice"===e.type_name?n("div",[e._v(" "+e._s(e.index+1)+".(多选) "),n("div",{staticClass:"text",staticStyle:{"margin-top":"5px"},domProps:{innerHTML:e._s(e.select_question[e.index].name)}}),n("br"),n("el-checkbox-group",{model:{value:e.mulit_select_answer[e.index],callback:function(t){e.$set(e.mulit_select_answer,e.index,t)},expression:"mulit_select_answer[index]"}},[n("el-checkbox",{staticClass:"item",attrs:{label:"A",border:""}},[e._v(e._s(e.select_question[e.index].A)+" ")]),n("br"),n("br"),n("el-checkbox",{staticClass:"item",attrs:{label:"B",border:""}},[e._v(e._s(e.select_question[e.index].B)+" ")]),n("br"),n("br"),n("el-checkbox",{staticClass:"item",attrs:{label:"C",border:""}},[e._v(e._s(e.select_question[e.index].C)+" ")]),n("br"),n("br"),n("el-checkbox",{staticClass:"item",attrs:{label:"D",border:""}},[e._v(e._s(e.select_question[e.index].D)+" ")]),n("br"),""!==e.select_question[e.index].E&&null!==e.select_question[e.index].E?n("div",[n("el-checkbox",{staticClass:"item",attrs:{label:"E"}},[e._v(e._s(e.select_question[e.index].E)+" ")]),n("br")],1):e._e()],1),n("br"),n("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){return e.check_mulit_select(e.index)}}},[e._v("检查")])],1):e._e()])},y=[],v=(n("b0c0"),n("d3b7"),n("25f0"),n("569d")),w={name:"question_main_page",components:{},mounted:function(){this.getShiTi();for(var e=0;e<v.data.length;e++)this.mulit_select_answer[e]=[]},create:{},methods:{getShiTi:function(){console.log(this.index);var e={type:v.data[this.index].type,id:v.data[this.index].id,name:v.data[this.index].name,A:v.data[this.index].A,B:v.data[this.index].B,C:v.data[this.index].C,D:v.data[this.index].D,E:v.data[this.index].E,answer:v.data[this.index].answer};this.max_index=v.data.length-1,this.select_question.push(e),this.type_name=this.select_question[this.index].type},shuzizhuanzimu:function(e){switch(e){case 1:return"A";case 2:return"B";case 3:return"C";case 4:return"D";case 5:return"E";default:break}},check_mulit_select:function(e){var t=this;console.log(this.mulit_select_answer[e]),this.mulit_select_answer[e].sort().toString()===v.data[e].answer.sort().toString()?this.$alert("<h1>恭喜你，答对了！</h1>","系统消息",{confirmButtonText:"太棒了！下一题!",dangerouslyUseHTMLString:!0,type:"success",center:!0,callback:function(e){"confirm"===e&&(t.index++>=t.max_index?(t.index=t.max_index,t.$message({type:"error",showClose:!0,duration:2e3,message:"没有下一题了哦!",center:!0})):t.getShiTi())}}):this.$alert("<h1>答错了！</h1>","系统消息",{distinguishCancelAndClose:!0,showCancelButton:!0,confirmButtonText:"显示答案",cancelButtonText:"继续思考",dangerouslyUseHTMLString:!0,type:"error",center:!0,callback:function(n){"confirm"===n&&t.$message({type:"success",showClose:!0,duration:2e3,message:"正确答案是："+v.data[e].answer,center:!0})}})},set_select_answer:function(e,t){var n=this;console.log(e+"||"+t),v.data[t].answer===this.shuzizhuanzimu(e)?this.$alert("<h1>恭喜你，答对了！</h1>","系统消息",{confirmButtonText:"太棒了！下一题!",dangerouslyUseHTMLString:!0,type:"success",center:!0,callback:function(e){"confirm"===e&&(n.index++>=n.max_index?(n.index=n.max_index,n.$message({type:"error",showClose:!0,duration:2e3,message:"没有下一题了哦!",center:!0})):n.getShiTi())}}):this.$alert("<h1>答错了！</h1>","系统消息",{distinguishCancelAndClose:!0,showCancelButton:!0,confirmButtonText:"显示答案",cancelButtonText:"继续思考",dangerouslyUseHTMLString:!0,type:"error",center:!0,callback:function(e){"confirm"===e&&n.$message({type:"success",showClose:!0,duration:2e3,message:"正确答案是："+v.data[t].answer,center:!0})}})},previous_question:function(){this.index--<=0&&(this.index=0,this.$message({type:"error",showClose:!0,duration:2e3,message:"没有上一题了哦!",center:!0})),this.getShiTi()},next_question:function(){this.index++>=this.max_index&&(this.index=this.max_index,this.$message({type:"error",showClose:!0,duration:2e3,message:"没有下一题了哦!",center:!0})),this.getShiTi()}},data:function(){return{type_name:"",index:0,max_index:0,select_question:[],select_answer:[],single_select_answer:[],mulit_select_answer:[[],[]]}}},C=w,k=(n("7644"),Object(c["a"])(C,b,y,!1,null,null,null)),B=k.exports;s["default"].config.productionTip=!1,s["default"].use(p.a),s["default"].use(_["a"]);var q=new _["a"]({routes:[{path:"/",component:X},{path:"/question_main_page",name:"question_main_page",component:B}]});new s["default"]({render:function(e){return e(u)},router:q}).$mount("#app")},7644:function(e,t,n){"use strict";var s=n("1788"),i=n.n(s);i.a}});
//# sourceMappingURL=app.0cef87a8.js.map