(window.webpackJsonp=window.webpackJsonp||[]).push([["superstore"],{"3f59997e":function(t,e,s){var i=s("97bad3b7");function r(t,e){if(!e)throw"Namespace required";this.store=i[t],this.namespace="_ss."+e+"."}r.prototype.get=function(t){return new Promise(function(e){e(this.store.get(this.namespace+t))}.bind(this))},r.prototype.set=function(t,e){return new Promise(function(s){s(this.store.set(this.namespace+t,e))}.bind(this))},r.prototype.unset=function(t){return new Promise(function(e){e(this.store.unset(this.namespace+t))}.bind(this))},r.prototype.clear=function(){return new Promise(function(t){t(this.store.clear(this.namespace))}.bind(this))},r.isPersisting=i.isPersisting,t.exports=r},"97bad3b7":function(t,e){var s=!0;function i(t){try{this.storage=window[t]}catch(t){s=!1}this.keys={},this.store={},window.addEventListener("storage",function(t){this.keys[t.key]&&(this.keys[t.key]=!0,this.store[t.key]=JSON.parse(t.newValue))}.bind(this))}i.prototype.get=function(t){if(1!==arguments.length)throw Error("get expects 1 argument, "+arguments.length+" given; "+t);if(!this.keys[t]&&s){var e;try{e=this.storage[t]}catch(t){s=!1}e&&(e=JSON.parse(e)),this.store[t]=e,this.keys[t]=!0}return this.store[t]},i.prototype.set=function(t,e){if(2!==arguments.length)throw Error("set expects 2 arguments, "+arguments.length+" given; "+t);if(s)try{this.storage[t]=JSON.stringify(e)}catch(t){if(22!==t.code)throw t;s=!1}return this.store[t]=e,this.keys[t]=!0,e},i.prototype.unset=function(t){delete this.store[t],delete this.keys[t],this.storage.removeItem(t)},i.prototype.clear=function(t){if(!t)return s&&this.storage.clear(),this.store={},void(this.keys={});t=String(t).replace(/([.*+?=^!:${}()|[\]\/\\])/g,"\\$1");var e=new RegExp("^"+t);for(var i in this.keys)i.match(e)&&this.unset(i)},t.exports.isPersisting=function(){return s},t.exports.local=new i("localStorage"),t.exports.session=new i("sessionStorage")}}]);
//# sourceMappingURL=superstore.feca82f0c712.bundle.js.map