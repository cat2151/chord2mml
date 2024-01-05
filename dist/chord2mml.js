!function(r,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var n in t)("object"==typeof exports?exports:r)[n]=t[n]}}(self,(()=>(()=>{"use strict";var r={699:r=>{function e(r,t,n,o){var s=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(s,e.prototype),s.expected=t,s.found=n,s.location=o,s.name="SyntaxError",s}function t(r,e,t){return t=t||" ",r.length>e?r:(e-=r.length,r+(t+=t.repeat(e)).slice(0,e))}!function(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}(e,Error),e.prototype.format=function(r){var e="Error: "+this.message;if(this.location){var n,o=null;for(n=0;n<r.length;n++)if(r[n].source===this.location.source){o=r[n].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,a=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(s):s,u=this.location.source+":"+a.line+":"+a.column;if(o){var c=this.location.end,i=t("",a.line.toString().length," "),l=o[s.line-1],h=(s.line===c.line?c.column:l.length+1)-s.column||1;e+="\n --\x3e "+u+"\n"+i+" |\n"+a.line+" | "+l+"\n"+i+" | "+t("",s.column-1," ")+t("",h,"^")}else e+="\n at "+u}return e},e.buildMessage=function(r,e){var t={literal:function(r){return'"'+o(r.text)+'"'},class:function(r){var e=r.parts.map((function(r){return Array.isArray(r)?s(r[0])+"-"+s(r[1]):s(r)}));return"["+(r.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function o(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function s(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function a(r){return t[r.type](r)}return"Expected "+function(r){var e,t,n=r.map(a);if(n.sort(),n.length>0){for(e=1,t=1;e<n.length;e++)n[e-1]!==n[e]&&(n[t]=n[e],t++);n.length=t}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(r)+" but "+function(r){return r?'"'+o(r)+'"':"end of input"}(e)+" found."},r.exports={SyntaxError:e,parse:function(r,t){var n,o,s,a,u={},c=(t=void 0!==t?t:{}).grammarSource,i={CHORDS:St},l=St,h="/",f="on",p="chord over bass note",v="slash chord inversion",b="upper structure triad",d="upper structure",m="ust",g="us",y="polychord",A="poly",w="/*",C="*/",k="root inv",L="1st inv",x="2nd inv",j="3rd inv",R="close harmony",S="close",O="drop2",E="drop-2",F="open triad",Q="drop4",I="drop-4",M="drop2and4",P="drop-2-and-4",q="no bass",T="bass is root",D="bass plays root",G="bass play root",U="bpm",B="tempo",J="|",N=" / ",_="maj",H="M",V="maj7",z="M7",K="△",W="min",X="m",Y="-",Z="min7",$="m7",rr="-7",er=" - ",tr="→",nr="^",or="Strings",sr="Ensemble",ar="1",ur="Str.",cr="2",ir="voice aahs",lr="choir aahs",hr="choir",fr="chor.",pr=/^[,.]/,vr=/^[^*\/]/,br=/^[0-9]/,dr=/^[A-G]/,mr=/^[#\uFF03\u266F]/,gr=/^[b\u266D]/,yr=/^[ \t\n\r]/,Ar=/^[0-3]/,wr=Ct("/",!1),Cr=Ct("on",!1),kr=Ct("chord over bass note",!0),Lr=kt([",","."],!1,!1),xr=Ct("slash chord inversion",!0),jr=Ct("upper structure triad",!0),Rr=Ct("upper structure",!0),Sr=Ct("UST",!0),Or=Ct("US",!0),Er=Ct("polychord",!0),Fr=Ct("poly",!0),Qr=Ct("/*",!1),Ir=kt(["*","/"],!0,!1),Mr=Ct("*/",!1),Pr=Ct("root inv",!0),qr=Ct("1st inv",!0),Tr=Ct("2nd inv",!0),Dr=Ct("3rd inv",!0),Gr=Ct("close harmony",!0),Ur=Ct("close",!0),Br=Ct("drop2",!0),Jr=Ct("drop-2",!0),Nr=Ct("open triad",!0),_r=Ct("drop4",!0),Hr=Ct("drop-4",!0),Vr=Ct("drop2and4",!0),zr=Ct("drop-2-and-4",!0),Kr=Ct("no bass",!0),Wr=Ct("bass is root",!0),Xr=Ct("bass plays root",!0),Yr=Ct("bass play root",!0),Zr=Ct("BPM",!0),$r=Ct("TEMPO",!0),re=kt([["0","9"]],!1,!1),ee=Ct("|",!1),te=Ct(" / ",!1),ne=kt([["A","G"]],!1,!1),oe=kt(["#","＃","♯"],!1,!1),se=kt(["b","♭"],!1,!1),ae=Ct("maj",!0),ue=Ct("M",!1),ce=Ct("maj7",!0),ie=Ct("M7",!1),le=Ct("△",!1),he=Ct("min",!0),fe=Ct("m",!1),pe=Ct("-",!1),ve=Ct("min7",!0),be=Ct("m7",!1),de=Ct("-7",!1),me=Lt("whitespace"),ge=kt([" ","\t","\n","\r"],!1,!1),ye=Lt("hyphen"),Ae=Ct(" - ",!1),we=Ct("→",!1),Ce=Ct("^",!1),ke=kt([["0","3"]],!1,!1),Le=Ct("Strings",!1),xe=Ct("Ensemble",!1),je=Ct("1",!0),Re=Ct("1",!1),Se=Ct("Str.",!1),Oe=Ct("2",!0),Ee=Ct("2",!1),Fe=Ct("Voice Aahs",!0),Qe=Ct("Choir Aahs",!0),Ie=Ct("Choir",!0),Me=Ct("Chor.",!0),Pe=function(r){return r},qe=function(r,e,t){return{event:"chord",root:r,quality:e,inversion:t}},Te=function(r,e,t,n,o,s){return{event:"slash chord",upperRoot:r,upperQuality:e,upperInversion:t,lowerRoot:n,lowerQuality:o,lowerInversion:s}},De=function(r,e,t,n,o,s){return{event:"chord over bass note",upperRoot:r,upperQuality:e,upperInversion:t,lowerRoot:n,lowerQuality:o,lowerInversion:s}},Ge=function(){return{event:"change slash chord mode to chord over bass note"}},Ue=function(){return{event:"change slash chord mode to inversion"}},Be=function(){return{event:"change slash chord mode to polychord"}},Je=function(r){return{event:"inline mml",mml:r.join("")}},Ne=function(){return{event:"change inversion mode to root inv"}},_e=function(){return{event:"change inversion mode to 1st inv"}},He=function(){return{event:"change inversion mode to 2nd inv"}},Ve=function(){return{event:"change inversion mode to 3rd inv"}},ze=function(){return{event:"change open harmony mode to close"}},Ke=function(){return{event:"change open harmony mode to drop2"}},We=function(){return{event:"change open harmony mode to drop4"}},Xe=function(){return{event:"change open harmony mode to drop2and4"}},Ye=function(){return{event:"change bass play mode to no bass"}},Ze=function(){return{event:"change bass play mode to root"}},$e=function(r){return{event:"inline mml",mml:"t"+r.join("")}},rt=function(){return{event:"bar"}},et=function(){return{event:"bar slash"}},tt=function(r,e,t){let n;switch(r){case"C":n=0;break;case"D":n=2;break;case"E":n=4;break;case"F":n=5;break;case"G":n=7;break;case"A":n=9;break;case"B":n=11}return n+=e.length-t.length,n%=12,n},nt=function(){return"#"},ot=function(){return"b"},st=function(r){return r},at=function(){return"maj"},ut=function(){return"maj"},ct=function(){return"maj7"},it=function(){return"min"},lt=function(){return"min"},ht=function(){return"min7"},ft=function(){switch(r.substring(mt,dt)){case"":return null;case"^0":return"root inv";case"^1":return"1st inv";case"^2":return"2nd inv";case"^3":return"3rd inv"}},pt=function(){return{event:"inline mml",mml:"@48"}},vt=function(){return{event:"inline mml",mml:"@49"}},bt=function(){return{event:"inline mml",mml:"@52"}},dt=0,mt=0,gt=[{line:1,column:1}],yt=0,At=[],wt=0;if("startRule"in t){if(!(t.startRule in i))throw new Error("Can't start parsing from rule \""+t.startRule+'".');l=i[t.startRule]}function Ct(r,e){return{type:"literal",text:r,ignoreCase:e}}function kt(r,e,t){return{type:"class",parts:r,inverted:e,ignoreCase:t}}function Lt(r){return{type:"other",description:r}}function xt(e){var t,n=gt[e];if(n)return n;for(t=e-1;!gt[t];)t--;for(n={line:(n=gt[t]).line,column:n.column};t<e;)10===r.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return gt[e]=n,n}function jt(r,e,t){var n=xt(r),o=xt(e),s={source:c,start:{offset:r,line:n.line,column:n.column},end:{offset:e,line:o.line,column:o.column}};return t&&c&&"function"==typeof c.offset&&(s.start=c.offset(s.start),s.end=c.offset(s.end)),s}function Rt(r){dt<yt||(dt>yt&&(yt=dt,At=[]),At.push(r))}function St(){var r,e,t;for(r=dt,e=[],t=Ot();t!==u;)e.push(t),t=Ot();return t=Mt(),mt=r,Pe(e)}function Ot(){var e;return(e=function(){var e,t,n,o;if(e=dt,r.substr(dt,2)===w?(t=w,dt+=2):(t=u,0===wt&&Rt(Qr)),t!==u){if(n=[],vr.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(Ir)),o!==u)for(;o!==u;)n.push(o),vr.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(Ir));else n=u;n!==u?(r.substr(dt,2)===C?(o=C,dt+=2):(o=u,0===wt&&Rt(Mr)),o!==u?(mt=e,e=Je(n)):(dt=e,e=u)):(dt=e,e=u)}else dt=e,e=u;return e}())===u&&(e=function(){var e,t;return e=dt,r.substr(dt,3)===N?(t=N,dt+=3):(t=u,0===wt&&Rt(te)),t!==u?(Mt(),mt=e,e=et()):(dt=e,e=u),e}())===u&&(e=function(){var e;return(e=function(){var e,t,n,o,s,a,c;return e=dt,Mt(),t=dt,r.substr(dt,7)===or?(n=or,dt+=7):(n=u,0===wt&&Rt(Le)),n!==u?(o=Mt(),r.substr(dt,8)===sr?(s=sr,dt+=8):(s=u,0===wt&&Rt(xe)),s!==u?(a=Mt(),r.substr(dt,1).toLowerCase()===ar?(c=r.charAt(dt),dt++):(c=u,0===wt&&Rt(je)),c!==u?t=n=[n,o,s,a,c]:(dt=t,t=u)):(dt=t,t=u)):(dt=t,t=u),t===u&&(t=dt,r.substr(dt,7)===or?(n=or,dt+=7):(n=u,0===wt&&Rt(Le)),n!==u?(o=Mt(),49===r.charCodeAt(dt)?(s=ar,dt++):(s=u,0===wt&&Rt(Re)),s!==u?t=n=[n,o,s]:(dt=t,t=u)):(dt=t,t=u),t===u&&(t=dt,r.substr(dt,4)===ur?(n=ur,dt+=4):(n=u,0===wt&&Rt(Se)),n!==u?(o=Mt(),49===r.charCodeAt(dt)?(s=ar,dt++):(s=u,0===wt&&Rt(Re)),s!==u?t=n=[n,o,s]:(dt=t,t=u)):(dt=t,t=u))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),o=Mt(),mt=e,e=pt()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n,o,s,a,c;return e=dt,Mt(),t=dt,r.substr(dt,7)===or?(n=or,dt+=7):(n=u,0===wt&&Rt(Le)),n!==u?(o=Mt(),r.substr(dt,8)===sr?(s=sr,dt+=8):(s=u,0===wt&&Rt(xe)),s!==u?(a=Mt(),r.substr(dt,1).toLowerCase()===cr?(c=r.charAt(dt),dt++):(c=u,0===wt&&Rt(Oe)),c!==u?t=n=[n,o,s,a,c]:(dt=t,t=u)):(dt=t,t=u)):(dt=t,t=u),t===u&&(t=dt,r.substr(dt,7)===or?(n=or,dt+=7):(n=u,0===wt&&Rt(Le)),n!==u?(o=Mt(),50===r.charCodeAt(dt)?(s=cr,dt++):(s=u,0===wt&&Rt(Ee)),s!==u?t=n=[n,o,s]:(dt=t,t=u)):(dt=t,t=u),t===u&&(t=dt,r.substr(dt,4)===ur?(n=ur,dt+=4):(n=u,0===wt&&Rt(Se)),n!==u?(o=Mt(),50===r.charCodeAt(dt)?(s=cr,dt++):(s=u,0===wt&&Rt(Ee)),s!==u?t=n=[n,o,s]:(dt=t,t=u)):(dt=t,t=u))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),o=Mt(),mt=e,e=vt()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,10).toLowerCase()===ir?(t=r.substr(dt,10),dt+=10):(t=u,0===wt&&Rt(Fe)),t===u&&(r.substr(dt,10).toLowerCase()===lr?(t=r.substr(dt,10),dt+=10):(t=u,0===wt&&Rt(Qe)),t===u&&(r.substr(dt,5).toLowerCase()===hr?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt(Ie)),t===u&&(r.substr(dt,5).toLowerCase()===fr?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt(Me))))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=bt()):(dt=e,e=u),e}()),e}())===u&&(e=function(){var e,t,n,o;if(e=dt,Mt(),r.substr(dt,3).toLowerCase()===U?(t=r.substr(dt,3),dt+=3):(t=u,0===wt&&Rt(Zr)),t===u&&(r.substr(dt,5).toLowerCase()===B?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt($r))),t!==u){if(Mt(),n=[],br.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(re)),o!==u)for(;o!==u;)n.push(o),br.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(re));else n=u;n!==u?(pr.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(Lr)),o===u&&(o=null),Mt(),mt=e,e=$e(n)):(dt=e,e=u)}else dt=e,e=u;return e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,20).toLowerCase()===p?(t=r.substr(dt,20),dt+=20):(t=u,0===wt&&Rt(kr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),mt=e,e=Ge()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,21).toLowerCase()===b?(t=r.substr(dt,21),dt+=21):(t=u,0===wt&&Rt(jr)),t===u&&(r.substr(dt,15).toLowerCase()===d?(t=r.substr(dt,15),dt+=15):(t=u,0===wt&&Rt(Rr)),t===u&&(r.substr(dt,3).toLowerCase()===m?(t=r.substr(dt,3),dt+=3):(t=u,0===wt&&Rt(Sr)),t===u&&(r.substr(dt,2).toLowerCase()===g?(t=r.substr(dt,2),dt+=2):(t=u,0===wt&&Rt(Or)),t===u&&(r.substr(dt,9).toLowerCase()===y?(t=r.substr(dt,9),dt+=9):(t=u,0===wt&&Rt(Er)),t===u&&(r.substr(dt,4).toLowerCase()===A?(t=r.substr(dt,4),dt+=4):(t=u,0===wt&&Rt(Fr))))))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),mt=e,e=Be()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,21).toLowerCase()===v?(t=r.substr(dt,21),dt+=21):(t=u,0===wt&&Rt(xr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),mt=e,e=Ue()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n,o,s,a,c,i;return e=dt,Mt(),(t=Et())!==u&&(n=It())!==u?(o=qt(),47===r.charCodeAt(dt)?(s=h,dt++):(s=u,0===wt&&Rt(wr)),s!==u&&(a=Et())!==u&&(c=It())!==u?(i=qt(),Pt(),mt=e,e=Te(t,n,o,a,c,i)):(dt=e,e=u)):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n,o,s,a,c,i;return e=dt,Mt(),(t=Et())!==u&&(n=It())!==u?(o=qt(),r.substr(dt,2)===f?(s=f,dt+=2):(s=u,0===wt&&Rt(Cr)),s!==u&&(a=Et())!==u&&(c=It())!==u?(i=qt(),Pt(),mt=e,e=De(t,n,o,a,c,i)):(dt=e,e=u)):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,8).toLowerCase()===k?(t=r.substr(dt,8),dt+=8):(t=u,0===wt&&Rt(Pr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Ne()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,7).toLowerCase()===L?(t=r.substr(dt,7),dt+=7):(t=u,0===wt&&Rt(qr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=_e()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,7).toLowerCase()===x?(t=r.substr(dt,7),dt+=7):(t=u,0===wt&&Rt(Tr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=He()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,7).toLowerCase()===j?(t=r.substr(dt,7),dt+=7):(t=u,0===wt&&Rt(Dr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Ve()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,9).toLowerCase()===M?(t=r.substr(dt,9),dt+=9):(t=u,0===wt&&Rt(Vr)),t===u&&(r.substr(dt,12).toLowerCase()===P?(t=r.substr(dt,12),dt+=12):(t=u,0===wt&&Rt(zr))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Xe()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,5).toLowerCase()===Q?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt(_r)),t===u&&(r.substr(dt,6).toLowerCase()===I?(t=r.substr(dt,6),dt+=6):(t=u,0===wt&&Rt(Hr))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=We()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,5).toLowerCase()===O?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt(Br)),t===u&&(r.substr(dt,6).toLowerCase()===E?(t=r.substr(dt,6),dt+=6):(t=u,0===wt&&Rt(Jr)),t===u&&(r.substr(dt,10).toLowerCase()===F?(t=r.substr(dt,10),dt+=10):(t=u,0===wt&&Rt(Nr)))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Ke()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,13).toLowerCase()===R?(t=r.substr(dt,13),dt+=13):(t=u,0===wt&&Rt(Gr)),t===u&&(r.substr(dt,5).toLowerCase()===S?(t=r.substr(dt,5),dt+=5):(t=u,0===wt&&Rt(Ur))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=ze()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,7).toLowerCase()===q?(t=r.substr(dt,7),dt+=7):(t=u,0===wt&&Rt(Kr)),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Ye()):(dt=e,e=u),e}())===u&&(e=function(){var e,t,n;return e=dt,Mt(),r.substr(dt,12).toLowerCase()===T?(t=r.substr(dt,12),dt+=12):(t=u,0===wt&&Rt(Wr)),t===u&&(r.substr(dt,15).toLowerCase()===D?(t=r.substr(dt,15),dt+=15):(t=u,0===wt&&Rt(Xr)),t===u&&(r.substr(dt,14).toLowerCase()===G?(t=r.substr(dt,14),dt+=14):(t=u,0===wt&&Rt(Yr)))),t!==u?(pr.test(r.charAt(dt))?(n=r.charAt(dt),dt++):(n=u,0===wt&&Rt(Lr)),n===u&&(n=null),Mt(),mt=e,e=Ze()):(dt=e,e=u),e}())===u&&(e=function(){var r,e,t,n;return r=dt,Mt(),(e=Et())!==u&&(t=It())!==u?(n=qt(),Pt(),mt=r,r=qe(e,t,n)):(dt=r,r=u),r}())===u&&(e=function(){var e,t;return e=dt,Mt(),124===r.charCodeAt(dt)?(t=J,dt++):(t=u,0===wt&&Rt(ee)),t!==u?(Mt(),mt=e,e=rt()):(dt=e,e=u),e}()),e}function Et(){var e,t,n,o,s;if(e=dt,dr.test(r.charAt(dt))?(t=r.charAt(dt),dt++):(t=u,0===wt&&Rt(ne)),t!==u){for(n=[],o=Ft();o!==u;)n.push(o),o=Ft();for(o=[],s=Qt();s!==u;)o.push(s),s=Qt();mt=e,e=tt(t,n,o)}else dt=e,e=u;return e}function Ft(){var e,t;return e=dt,mr.test(r.charAt(dt))?(t=r.charAt(dt),dt++):(t=u,0===wt&&Rt(oe)),t!==u&&(mt=e,t=nt()),t}function Qt(){var e,t;return e=dt,gr.test(r.charAt(dt))?(t=r.charAt(dt),dt++):(t=u,0===wt&&Rt(se)),t!==u&&(mt=e,t=ot()),t}function It(){var e,t;return e=dt,t=function(){var e,t;return e=dt,r.substr(dt,4).toLowerCase()===Z?(t=r.substr(dt,4),dt+=4):(t=u,0===wt&&Rt(ve)),t===u&&(r.substr(dt,2)===$?(t=$,dt+=2):(t=u,0===wt&&Rt(be)),t===u&&(r.substr(dt,2)===rr?(t=rr,dt+=2):(t=u,0===wt&&Rt(de)))),t!==u&&(mt=e,t=ht()),e=t}(),t===u&&(t=function(){var e,t;return e=dt,r.substr(dt,4).toLowerCase()===V?(t=r.substr(dt,4),dt+=4):(t=u,0===wt&&Rt(ce)),t===u&&(r.substr(dt,2)===z?(t=z,dt+=2):(t=u,0===wt&&Rt(ie)),t===u&&(9651===r.charCodeAt(dt)?(t=K,dt++):(t=u,0===wt&&Rt(le)))),t!==u&&(mt=e,t=ct()),e=t}(),t===u&&(t=function(){var e,t;return e=dt,r.substr(dt,3).toLowerCase()===_?(t=r.substr(dt,3),dt+=3):(t=u,0===wt&&Rt(ae)),t!==u&&(mt=e,t=at()),e=t}(),t===u&&(t=function(){var e,t;return e=dt,r.substr(dt,3).toLowerCase()===W?(t=r.substr(dt,3),dt+=3):(t=u,0===wt&&Rt(he)),t!==u&&(mt=e,t=it()),e=t}(),t===u&&(t=function(){var e,t;return e=dt,109===r.charCodeAt(dt)?(t=X,dt++):(t=u,0===wt&&Rt(fe)),t===u&&(45===r.charCodeAt(dt)?(t=Y,dt++):(t=u,0===wt&&Rt(pe))),t!==u&&(mt=e,t=lt()),e=t}(),t===u&&(t=function(){var e,t;return e=dt,77===r.charCodeAt(dt)?(t=H,dt++):(t=u,0===wt&&Rt(ue)),t===u&&(t=""),t!==u&&(mt=e,t=ut()),e=t}()))))),t!==u&&(mt=e,t=st(t)),t}function Mt(){var e,t;for(wt++,e=[],yr.test(r.charAt(dt))?(t=r.charAt(dt),dt++):(t=u,0===wt&&Rt(ge));t!==u;)e.push(t),yr.test(r.charAt(dt))?(t=r.charAt(dt),dt++):(t=u,0===wt&&Rt(ge));return wt--,t=u,0===wt&&Rt(me),e}function Pt(){var e,t,n,o;for(wt++,e=[],r.substr(dt,3)===er?(t=er,dt+=3):(t=u,0===wt&&Rt(Ae)),t===u&&(t=dt,n=Mt(),8594===r.charCodeAt(dt)?(o=tr,dt++):(o=u,0===wt&&Rt(we)),o!==u?t=n=[n,o,Mt()]:(dt=t,t=u));t!==u;)e.push(t),r.substr(dt,3)===er?(t=er,dt+=3):(t=u,0===wt&&Rt(Ae)),t===u&&(t=dt,n=Mt(),8594===r.charCodeAt(dt)?(o=tr,dt++):(o=u,0===wt&&Rt(we)),o!==u?t=n=[n,o,Mt()]:(dt=t,t=u));return wt--,t=u,0===wt&&Rt(ye),e}function qt(){var e,t,n,o;return e=dt,t=dt,94===r.charCodeAt(dt)?(n=nr,dt++):(n=u,0===wt&&Rt(Ce)),n!==u?(Ar.test(r.charAt(dt))?(o=r.charAt(dt),dt++):(o=u,0===wt&&Rt(ke)),o!==u?t=n=[n,o]:(dt=t,t=u)):(dt=t,t=u),t===u&&(t=null),mt=e,ft()}if((n=l())!==u&&dt===r.length)return n;throw n!==u&&dt<r.length&&Rt({type:"end"}),o=At,s=yt<r.length?r.charAt(yt):null,a=yt<r.length?jt(yt,yt+1):jt(yt,yt),new e(e.buildMessage(o,s),o,s,a)}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return r[n](s,s.exports,t),s.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{chord2mml:()=>b});var r=t(699);function e(r,e,t){for(var n=e.length*t,o=0,s=e;o<s.length;o++)r[s[o]].noteLength=n;return r}var o=function(r,e,t){if(t||2===arguments.length)for(var n,o=0,s=e.length;o<s;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))};function s(r){return delete r.event,delete r.root,delete r.quality,delete r.inversion,delete r.upperRoot,delete r.upperQuality,delete r.upperInversion,delete r.lowerRoot,delete r.lowerQuality,delete r.lowerInversion,r}function a(r,e,t,n){void 0===t&&(t="root inv"),void 0===n&&(n="close");var o=[];switch(e){case"maj":o=[0,4,7];break;case"maj7":o=[0,4,7,11];break;case"min":o=[0,3,7];break;case"min7":o=[0,3,7,10]}return u(o=c(o,r),t,n)}function u(r,e,t){switch(e){case"1st inv":r=p(r,1);break;case"2nd inv":r=p(r,2);break;case"3rd inv":r=p(r,3)}switch(t){case"drop2":r=function(r){if(r.length<2)return r;var e=r[r.length-2]-12;return r.splice(r.length-2,1),r.unshift(e),r}(r);break;case"drop4":r=function(r){if(r.length<4)return r;var e=r[r.length-4]-12;return r.splice(r.length-4,1),r.unshift(e),r}(r);break;case"drop2and4":r=function(r){if(r.length<4)return r;var e=r[r.length-2]-12,t=r[r.length-4]-12;return r.splice(r.length-2,1),r.splice(r.length-4+1,1),r.unshift(e),r.unshift(t),r}(r)}return r}function c(r,e){for(var t=0;t<r.length;t++)r[t]+=e;return r}function i(r,e,t,n,o){var s=[];s.push(t);var a=l(r,e,t);return a=u(a,n,o),s.push.apply(s,a),s}function l(r,e,t){var n=a(r,e);return r<=t&&(n=c(n,12)),n}function h(r,e,t,n){var o=[];if("root"==n){o.push(r);var s=l(r,e,r);s=f(s,t),o.push.apply(o,s),o=c(o,-12)}else o=f(o=a(r,e),t);return o}function f(r,e){for(var t=!1,n=0,o=r;n<o.length;n++){if(o[n],(r[0]%12+12)%12==(e%12+12)%12){t=!0;break}r.push(r.shift())}if(t)return v(r);throw new Error("ERROR : ".concat(JSON.stringify(r)," を転回しようとしましたが、chordに ").concat(JSON.stringify(e)," が含まれていません。chordに含まれるnoteを指定してください。"))}function p(r,e){for(var t=0;t<e;t++)r.push(r.shift());return v(r)}function v(r){for(var e=-1,t=0;t<r.length;t++){for(var n=0;n<128&&!(r[t]>e);n+=12)r[t]+=12;e=r[t]}return r}var b={parse:r.parse};b.parse=function(t){var n=(0,r.parse)(t);return function(r){for(var e="",t=0,n=r;t<n.length;t++){var o=n[t];switch(o.event){case"inline mml":e+=o.mml;continue;case"bar":e+="/*|*/";continue}var s=o.notes;if(s){var a=0;s.length&&(e+="'");for(var u=s[0];u<0;)u+=12,e+=">",a--;for(var c=0;c<s.length;c++){var i=s[c],l=Math.floor(i/12);switch(l>a&&(e+="<",a=l),(i%12+12)%12){case 0:e+="c";break;case 1:e+="c+";break;case 2:e+="d";break;case 3:e+="d+";break;case 4:e+="e";break;case 5:e+="f";break;case 6:e+="f+";break;case 7:e+="g";break;case 8:e+="g+";break;case 9:e+="a";break;case 10:e+="a+";break;case 11:e+="b"}!c&&o.noteLength&&(e+=o.noteLength)}s.length&&(e+="'")}}return e}(function(r){for(var e,t,n,u,l=[],f="root inv",p="close",b="no bass",d=0,m=r;d<m.length;d++){var g=m[d];switch(g.event){case"chord":g.notes=a(g.root,g.quality,null!==(e=g.inversion)&&void 0!==e?e:f,p),g=s(g),l.push(g);break;case"chord over bass note":g.notes=i(g.upperRoot,g.upperQuality,g.lowerRoot,null!==(t=g.upperInversion)&&void 0!==t?t:f,p),g.notes=c(g.notes,-12),g=s(g),l.push(g);break;case"inversion":g.notes=h(g.upperRoot,g.upperQuality,g.lowerRoot,b),g=s(g),l.push(g);break;case"polychord":g.notes=(y=g.upperRoot,A=g.upperQuality,w=null!==(n=g.upperInversion)&&void 0!==n?n:f,C=g.lowerRoot,k=g.lowerQuality,L=null!==(u=g.lowerInversion)&&void 0!==u?u:f,x=void 0,j=void 0,void 0,x=a(C,k,L),j=a(y,A,w),v(o(o([],x,!0),j,!0))),g=s(g),l.push(g);break;case"change inversion mode to root inv":f="root inv";break;case"change inversion mode to 1st inv":f="1st inv";break;case"change inversion mode to 2nd inv":f="2nd inv";break;case"change inversion mode to 3rd inv":f="3rd inv";break;case"change open harmony mode to close":p="close";break;case"change open harmony mode to drop2":p="drop2";break;case"change open harmony mode to drop4":p="drop4";break;case"change open harmony mode to drop2and4":p="drop2and4";break;case"change bass play mode to root":b="root";break;case"change bass play mode to no bass":b="no bass";break;default:l.push(g)}}var y,A,w,C,k,L,x,j;return l}(n=function(r){for(var t="chord over bass note",n="no bass",o=0,s=r;o<s.length;o++){var a=s[o];switch(a.event){case"change slash chord mode to chord over bass note":t="chord over bass note";break;case"change slash chord mode to inversion":t="inversion";break;case"change slash chord mode to polychord":t="polychord";break;case"slash chord":a.event=t;break;case"change bass play mode to root":n="root";break;case"change bass play mode to no bass":n="no bass";break;case"chord":"root"==n&&(a.event="chord over bass note",a.upperRoot=a.root,a.upperQuality=a.quality,a.upperInversion=a.inversion,a.lowerRoot=a.root,a.lowerQuality=a.quality,a.lowerInversion=a.inversion,delete a.root,delete a.quality,delete a.inversion)}}return function(r){for(var t=0,n=1,o=[],s=0;s<r.length;s++)switch(r[s].event){case"chord":case"chord over bass note":case"inversion":case"polychord":o.push(s);break;case"bar":t++,r=e(r,o,n),o=[],n=1;break;case"bar slash":t++,r=e(r,o,n=2),o=[]}return t&&(r=e(r,o,n)),r}(r)}(n)))}})(),n})()));