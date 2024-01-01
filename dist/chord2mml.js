!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(()=>(()=>{"use strict";var e={699:e=>{function r(e,t,n,o){var a=Error.call(this,e);return Object.setPrototypeOf&&Object.setPrototypeOf(a,r.prototype),a.expected=t,a.found=n,a.location=o,a.name="SyntaxError",a}function t(e,r,t){return t=t||" ",e.length>r?e:(r-=e.length,e+(t+=t.repeat(r)).slice(0,r))}!function(e,r){function t(){this.constructor=e}t.prototype=r.prototype,e.prototype=new t}(r,Error),r.prototype.format=function(e){var r="Error: "+this.message;if(this.location){var n,o=null;for(n=0;n<e.length;n++)if(e[n].source===this.location.source){o=e[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,c=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,u=this.location.source+":"+c.line+":"+c.column;if(o){var i=this.location.end,s=t("",c.line.toString().length," "),l=o[a.line-1],f=(a.line===i.line?i.column:l.length+1)-a.column||1;r+="\n --\x3e "+u+"\n"+s+" |\n"+c.line+" | "+l+"\n"+s+" | "+t("",a.column-1," ")+t("",f,"^")}else r+="\n at "+u}return r},r.buildMessage=function(e,r){var t={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var r=e.parts.map((function(e){return Array.isArray(e)?a(e[0])+"-"+a(e[1]):a(e)}));return"["+(e.inverted?"^":"")+r.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function c(e){return t[e.type](e)}return"Expected "+function(e){var r,t,n=e.map(c);if(n.sort(),n.length>0){for(r=1,t=1;r<n.length;r++)n[r-1]!==n[r]&&(n[t]=n[r],t++);n.length=t}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(r)+" found."},e.exports={SyntaxError:r,parse:function(e,t){var n,o,a,c,u={},i=(t=void 0!==t?t:{}).grammarSource,s={CHORDS:K},l=K,f="maj",p="M",h="maj7",g="△",d=/^[A-G]/,b=/^[#\uFF03\u266F]/,v=/^[b\u266D]/,m=/^[ \t\n\r]/,y=q([["A","G"]],!1,!1),x=q(["#","＃","♯"],!1,!1),A=q(["b","♭"],!1,!1),j=U("maj",!0),k=U("M",!1),w=U("maj7",!0),C=U("△",!1),F={type:"other",description:"whitespace"},S=q([" ","\t","\n","\r"],!1,!1),O=function(e,r){return{root:e,chordType:r}},E=function(e,r,t){let n;switch(e){case"C":n=0;break;case"D":n=2;break;case"E":n=4;break;case"F":n=5;break;case"G":n=7;break;case"A":n=9;break;case"B":n=11}return n+=r.length-t.length,n%=12,n},M=function(){return"#"},P=function(){return"b"},R=function(e){return e},T=function(){return"maj"},D=function(){return"maj7"},G=0,L=[{line:1,column:1}],_=0,B=[],H=0;if("startRule"in t){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".');l=s[t.startRule]}function U(e,r){return{type:"literal",text:e,ignoreCase:r}}function q(e,r,t){return{type:"class",parts:e,inverted:r,ignoreCase:t}}function z(r){var t,n=L[r];if(n)return n;for(t=r-1;!L[t];)t--;for(n={line:(n=L[t]).line,column:n.column};t<r;)10===e.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return L[r]=n,n}function I(e,r,t){var n=z(e),o=z(r),a={source:i,start:{offset:e,line:n.line,column:n.column},end:{offset:r,line:o.line,column:o.column}};return t&&i&&"function"==typeof i.offset&&(a.start=i.offset(a.start),a.end=i.offset(a.end)),a}function J(e){G<_||(G>_&&(_=G,B=[]),B.push(e))}function K(){var e,r;for(e=[],r=N();r!==u;)e.push(r),r=N();return e}function N(){var r,t,n,o;return r=G,W(),t=function(){var r,t,n,o,a;if(r=G,d.test(e.charAt(G))?(t=e.charAt(G),G++):(t=u,0===H&&J(y)),t!==u){for(n=[],o=Q();o!==u;)n.push(o),o=Q();for(o=[],a=V();a!==u;)o.push(a),a=V();r=E(t,n,o)}else G=r,r=u;return r}(),t!==u?((o=function(){var r;return e.substr(G,4).toLowerCase()===h?(r=e.substr(G,4),G+=4):(r=u,0===H&&J(w)),r===u&&(9651===e.charCodeAt(G)?(r=g,G++):(r=u,0===H&&J(C))),r!==u&&(r=D()),r}())===u&&(o=function(){var r;return e.substr(G,3).toLowerCase()===f?(r=e.substr(G,3),G+=3):(r=u,0===H&&J(j)),r===u&&(77===e.charCodeAt(G)?(r=p,G++):(r=u,0===H&&J(k)),r===u&&(r="")),r!==u&&(r=T()),r}()),o!==u&&(o=R(o)),(n=o)!==u?(W(),r=O(t,n)):(G=r,r=u)):(G=r,r=u),r}function Q(){var r;return G,b.test(e.charAt(G))?(r=e.charAt(G),G++):(r=u,0===H&&J(x)),r!==u&&(r=M()),r}function V(){var r;return G,v.test(e.charAt(G))?(r=e.charAt(G),G++):(r=u,0===H&&J(A)),r!==u&&(r=P()),r}function W(){var r,t;for(H++,r=[],m.test(e.charAt(G))?(t=e.charAt(G),G++):(t=u,0===H&&J(S));t!==u;)r.push(t),m.test(e.charAt(G))?(t=e.charAt(G),G++):(t=u,0===H&&J(S));return H--,t=u,0===H&&J(F),r}if((n=l())!==u&&G===e.length)return n;throw n!==u&&G<e.length&&J({type:"end"}),o=B,a=_<e.length?e.charAt(_):null,c=_<e.length?I(_,_+1):I(_,_),new r(r.buildMessage(o,a),o,a,c)}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{chord2mml:()=>r});var e=t(699),r={parse:(e.parse,function(r){var t=function(e){for(var r=[],t=0;t<e.length;t++){var n=e[t],o=[];switch(n.chordType){case"maj":o=[0,4,7];break;case"maj7":o=[0,4,7,11]}for(var a=0;a<o.length;a++)o[a]+=n.root;r.push(o)}return r}((0,e.parse)(r)),n=function(e){for(var r="",t=0;t<e.length;t++){var n=e[t],o=0;n.length&&(r+="'");for(var a=0;a<n.length;a++){var c=n[a],u=Math.floor(c/12);switch(u>o&&(r+="<",o=u),c%12){case 0:r+="c";break;case 1:r+="c+";break;case 2:r+="d";break;case 3:r+="d+";break;case 4:r+="e";break;case 5:r+="f";break;case 6:r+="f+";break;case 7:r+="g";break;case 8:r+="g+";break;case 9:r+="a";break;case 10:r+="a+";break;case 11:r+="b"}}n.length&&(r+="'")}return r}(t);return n})}})(),n})()));