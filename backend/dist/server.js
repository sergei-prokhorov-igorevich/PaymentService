(()=>{"use strict";var e={607:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(860),a=r(428),c=r(88),u=r(582),s=r(529),l=r(889),d="/api/v1",f=process.env.PORT||80;n(void 0,void 0,void 0,(function(){var e,t,r,n;return o(this,(function(o){switch(o.label){case 0:return(0,s.initLogger)(),(e=i()).use(u()),e.use(i.json()),e.listen(f,(function(){return console.log("Server started at http://localhost:".concat(f).concat(d))})),[4,(0,a.createOrderRouter)()];case 1:return t=o.sent(),e.use("".concat(d,"/order"),t),[4,(0,c.createPayRouter)()];case 2:return r=o.sent(),e.use("".concat(d,"/pay"),r),[4,(0,l.createLoggerRouter)()];case 3:return n=o.sent(),e.use("".concat(d,"/logger"),n),[2]}}))}))},67:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.payByOrder=t.getOrderByGuid=void 0;var i=r(826);t.getOrderByGuid=function(e){return n(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,i.ordersCollection.findOne({orderGuid:e})];case 1:return[2,t.sent()]}}))}))},t.payByOrder=function(e,t){return n(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,i.ordersCollection.findOne({orderGuid:e})];case 1:return[2,t.sent()?200:404]}}))}))}},826:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ordersCollection=void 0;var n=r(13),o=r(501),i=new n.MongoClient(o.mongodbConnectionString).db("Moment").collection("orders");t.ordersCollection=i},889:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createLoggerRouter=void 0;var n=r(860),o=r(529);t.createLoggerRouter=function(){var e=(0,n.Router)();return e.get("/getAll",(function(e,t){var r=(0,o.readAllLogs)().replace("\r\n","<br>");t.send(r)})),e}},428:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.createOrderRouter=void 0;var i=r(860),a=r(67);t.createOrderRouter=function(){return n(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){return(e=(0,i.Router)()).get("/:orderGuid",(function(e,t){return n(void 0,void 0,void 0,(function(){var r,n;return o(this,(function(o){switch(o.label){case 0:return r=e.params.orderGuid,[4,(0,a.getOrderByGuid)(r)];case 1:return(n=o.sent())?t.send(n):t.sendStatus(404),[2]}}))}))})),[2,e]}))}))}},88:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.createPayRouter=void 0;var i=r(860),a=r(67),c=r(529);t.createPayRouter=function(){return n(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){return(e=(0,i.Router)()).post("/:orderGuid",(function(e,t){return n(void 0,void 0,void 0,(function(){var r,n,i;return o(this,(function(o){switch(o.label){case 0:return r=e.params.orderGuid,(n=e.body.password)?[4,(0,a.payByOrder)(r,n)]:((0,c.log)(c.ELogLevel.Warning,"password is empty."),t.sendStatus(400),[2]);case 1:return i=o.sent(),t.sendStatus(i),[2]}}))}))})),[2,e]}))}))}},529:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.readAllLogs=t.log=t.initLogger=t.ELogLevel=void 0;var n,o=r(147),i=r(17),a=r(598),c=i.resolve("".concat(__dirname,"/../../logs/")),u="".concat(c,"/").concat(a.name,".txt");!function(e){e[e.Verbose=0]="Verbose",e[e.Debug=1]="Debug",e[e.Info=2]="Info",e[e.Warning=3]="Warning",e[e.Error=4]="Error"}(n||(n={})),t.ELogLevel=n,t.initLogger=function(){o.existsSync(c)||o.mkdirSync(c),o.existsSync(u)||o.writeFileSync(u,"")},t.log=function(e,t,r){var i={datetime:(new Date).toISOString(),level:n[e],message:t,obj:r},a="".concat(JSON.stringify(i),"\r\n");o.appendFileSync(u,a)},t.readAllLogs=function(){return o.readFileSync(u).toString()}},501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mongodbConnectionString=void 0,t.mongodbConnectionString="mongodb://test:1234567890@ac-jtr4crw-shard-00-00.ewby6hr.mongodb.net:27017,ac-jtr4crw-shard-00-01.ewby6hr.mongodb.net:27017,ac-jtr4crw-shard-00-02.ewby6hr.mongodb.net:27017/?ssl=true&replicaSet=atlas-8y3te6-shard-0&authSource=admin&retryWrites=true&w=majority"},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")},13:e=>{e.exports=require("mongodb")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")},598:e=>{e.exports=JSON.parse('{"name":"simple-payment-service-backend","description":"It\'s a simple payment service application. https://github.com/sergei-prokhorov-igorevich/PaymentService/tree/main/","author":"Sergei Prokhorov","version":"1.0.0","private":true,"scripts":{"build":"webpack","watch":"webpack --watch","server":"cross-env PORT=80 nodemon dist/server.js --watch dist -e js","start":"npm-run-all -p watch server"},"keywords":[],"license":"ISC","devDependencies":{"@types/cors":"^2.8.13","@types/express":"^4.17.17","@types/node":"^20.1.5","@typescript-eslint/eslint-plugin":"^5.59.6","@typescript-eslint/parser":"^5.59.6","cross-env":"^7.0.3","eslint":"^8.40.0","eslint-config-airbnb":"^19.0.4","eslint-config-airbnb-typescript":"^17.0.0","eslint-config-standard-with-typescript":"^34.0.1","eslint-plugin-import":"^2.27.5","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-n":"^15.7.0","eslint-plugin-promise":"^6.1.1","nodemon":"^2.0.22","npm-run-all":"^4.1.5","ts-loader":"^9.4.3","ts-node":"^10.9.1","typescript":"^5.0.4","webpack":"^5.85.0","webpack-cli":"^5.1.2","webpack-node-externals":"^3.0.0"},"dependencies":{"cors":"^2.8.5","express":"^4.18.2","mongodb":"^5.5.0"}}')}},t={};!function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(607)})();