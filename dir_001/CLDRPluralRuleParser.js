!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.pluralRuleParser=r()}(this,function(){return function(n,r){"use strict";if(!(n=n.split("@")[0].replace(/^\s*/,"").replace(/\s*$/,"")).length)return!0;var t,u,l,e,o=0,i=z(/^\s+/),a=z(/^\d+/),f=q("n"),s=q("i"),c=q("f"),p=q("t"),v=q("v"),h=q("w"),I=q("is"),g=q("is not"),d=q("!="),b=q("="),m=q("mod"),w=q("%"),F=q("not"),$=q("in"),x=q("within"),y=q(".."),P=q(","),j=q("or"),E=q("and");function R(n){return function(){var r,t;for(r=0;r<n.length;r++)if(null!==(t=n[r]()))return t;return null}}function S(n){var r,t,u=o,l=[];for(r=0;r<n.length;r++){if(null===(t=n[r]()))return o=u,null;l.push(t)}return l}function k(n,r){return function(){for(var t=o,u=[],l=r();null!==l;)u.push(l),l=r();return u.length<n?(o=t,null):u}}function q(r){var t=r.length;return function(){var u=null;return n.substr(o,t)===r&&(u=r,o+=t),u}}function z(r){return function(){var t=n.substr(o).match(r);return null===t?null:(o+=t[0].length,t[0])}}function A(){var n=S([i,F]);return null===n?null:n[1]}function B(){var n=S([R([D,a]),k(0,C)]),r=[];return null!==n?(r=r.concat(n[0]),n[1][0]&&(r=r.concat(n[1][0])),r):null}function C(){var n=S([P,B]);return null!==n?n[1]:null}function D(){var n,r,t,u,l=S([a,y,a]);if(null!==l){for(r=[],t=parseInt(l[0],10),u=parseInt(l[2],10),n=t;n<=u;n++)r.push(n);return r}return null}function G(){var n,r=S([l,k(0,H)]);if(r){if(!r[0])return!1;for(n=0;n<r[1].length;n++)if(!r[1][n])return!1;return!0}return null}function H(){var n=S([i,E,i,l]);return null!==n?n[3]:null}function J(){var n=S([i,j,i,G]);return null!==n?(n[3],n[3]):null}if(t=R([function(){var n=f();return null===n?n:n=parseFloat(r,10)},function(){var n=s();return null===n?(parseInt(r,10),n):n=parseInt(r,10)},function(){var n=c();return null===n?n:n=(r+".").split(".")[1]||0},function(){var n=p();return null===n?n:n=(r+".").split(".")[1].replace(/0$/,"")||0},function(){var n=v();return null===n?n:n=(r+".").split(".")[1].length||0},function(){var n=h();return null===n?n:n=(r+".").split(".")[1].replace(/0$/,"").length||0}]),u=R([function(){var n=S([t,i,R([m,w]),i,a]);return null===n?null:(parseInt(n[0],10),n[2],parseInt(n[4],10),parseFloat(n[0])%parseInt(n[4],10))},t]),l=R([function(){var n=S([u,i,R([I]),i,a]);return null!==n?(n[0],parseInt(n[4],10),n[0]===parseInt(n[4],10)):null},function(){var n,r,t=S([u,i,d,i,B]);if(null!==t){for(t[0],t[4],r=t[4],n=0;n<r.length;n++)if(parseInt(r[n],10)===parseInt(t[0],10))return!1;return!0}return null},function(){var n=S([u,i,R([g,d]),i,a]);return null!==n?(n[0],parseInt(n[4],10),n[0]!==parseInt(n[4],10)):null},function(){var n,r,t;if(null!==(n=S([u,k(0,A),i,R([$,b]),i,B]))){for(r=n[5],t=0;t<r.length;t++)if(parseInt(r[t],10)===parseFloat(n[0]))return"not"!==n[1][0];return"not"===n[1][0]}return null},function(){var n,r;return null!==(r=S([u,k(0,A),i,x,i,B]))?(n=r[5],r[0]>=parseInt(n[0],10)&&r[0]<parseInt(n[n.length-1],10)?"not"!==r[1][0]:"not"===r[1][0]):null}]),null===(e=function(){var n,r=S([G,k(0,J)]);if(r){for(n=0;n<r[1].length;n++)if(r[1][n])return!0;return r[0]}return!1}()))throw new Error("Parse error at position "+o.toString()+" for rule: "+n);return o!==n.length&&n.substr(0,o),e}});