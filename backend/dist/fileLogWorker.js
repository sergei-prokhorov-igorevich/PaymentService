(()=>{"use strict";var e={729:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.logsFilePath=t.log=t.initLogger=t.ELogLevel=void 0;var o,s=n(612),a=n(292),c=n(17),u=n(147),l=c.resolve("".concat(__dirname,"/../logs/")),p="".concat(l,"/").concat(u.name,".txt");t.logsFilePath=p,function(e){e[e.Verbose=0]="Verbose",e[e.Debug=1]="Debug",e[e.Info=2]="Info",e[e.Warning=3]="Warning",e[e.Error=4]="Error"}(o||(o={})),t.ELogLevel=o,t.initLogger=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,a.stat(l)];case 1:case 3:return e.sent(),[3,4];case 2:return e.sent(),[4,a.mkdir(l)];case 4:return e.trys.push([4,6,,8]),[4,a.stat(p)];case 5:case 7:return e.sent(),[3,8];case 6:return e.sent(),[4,a.writeFile(p,"")];case 8:return[2]}}))}))},t.log=function(e,t,n){return r(this,void 0,void 0,(function(){var r,c;return i(this,(function(i){switch(i.label){case 0:return r={datetime:(new Date).toISOString(),level:o[e],message:t,obj:n},c="".concat(JSON.stringify(r)).concat(s.EOL),[4,a.appendFile(p,c)];case 1:return i.sent(),[2,c]}}))}))}},70:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(267),s=n(612),a=n(358),c=n(292),u=n(729);function l(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,c.stat(u.logsFilePath)];case 1:return t=n.sent().size,a.createReadStream(u.logsFilePath,{start:e,end:t}).on("data",(function(e){var t=(new TextDecoder).decode(e).split(s.EOL).slice(0,-1);null===o.parentPort||void 0===o.parentPort||o.parentPort.postMessage(t)})),[2,t]}}))}))}!function(){r(this,void 0,void 0,(function(){var e,t=this;return i(this,(function(n){switch(n.label){case 0:return[4,l(0)];case 1:return e=n.sent(),a.watchFile(u.logsFilePath,(function(){return r(t,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,l(e)];case 1:return e=t.sent(),[2]}}))}))})),[2]}}))}))}()},358:e=>{e.exports=require("fs")},292:e=>{e.exports=require("fs/promises")},612:e=>{e.exports=require("node:os")},17:e=>{e.exports=require("path")},267:e=>{e.exports=require("worker_threads")},147:e=>{e.exports=JSON.parse('{"name":"simple-payment-service-backend","description":"It\'s a simple payment service application. https://github.com/sergei-prokhorov-igorevich/PaymentService/tree/main/","author":"Sergei Prokhorov","version":"1.0.0","private":true,"scripts":{"build":"webpack","watch":"webpack --watch","server":"cross-env PORT=81 nodemon dist/server.js --watch dist -e js","start":"npm-run-all -p watch server"},"keywords":[],"license":"ISC","devDependencies":{"@types/cors":"^2.8.13","@types/express":"^4.17.17","@types/node":"^20.1.5","@typescript-eslint/eslint-plugin":"^5.59.6","@typescript-eslint/parser":"^5.59.6","cross-env":"^7.0.3","eslint":"^8.40.0","eslint-config-airbnb":"^19.0.4","eslint-config-airbnb-typescript":"^17.0.0","eslint-config-standard-with-typescript":"^34.0.1","eslint-plugin-import":"^2.27.5","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-n":"^15.7.0","eslint-plugin-promise":"^6.1.1","nodemon":"^2.0.22","npm-run-all":"^4.1.5","ts-loader":"^9.4.3","ts-node":"^10.9.1","typescript":"^5.0.4","webpack":"^5.85.0","webpack-cli":"^5.1.2","webpack-node-externals":"^3.0.0"},"dependencies":{"cors":"^2.8.5","express":"^4.18.2","mongodb":"^5.5.0","mongoose":"^7.3.0","socket.io":"^4.6.2"}}')}},t={};!function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(70)})();