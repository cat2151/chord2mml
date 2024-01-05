!function(r,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var n in t)("object"==typeof exports?exports:r)[n]=t[n]}}(self,(()=>(()=>{"use strict";var r={699:r=>{function e(r,e,t){let n;switch(r){case"C":n=0;break;case"D":n=2;break;case"E":n=4;break;case"F":n=5;break;case"G":n=7;break;case"A":n=9;break;case"B":n=11;break;default:throw new Error("ERROR : getRootCdefgabOffset")}return n+=e.length-t.length,n}function t(r,e,n,o){var s=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(s,t.prototype),s.expected=e,s.found=n,s.location=o,s.name="SyntaxError",s}function n(r,e,t){return t=t||" ",r.length>e?r:(e-=r.length,r+(t+=t.repeat(e)).slice(0,e))}!function(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}(t,Error),t.prototype.format=function(r){var e="Error: "+this.message;if(this.location){var t,o=null;for(t=0;t<r.length;t++)if(r[t].source===this.location.source){o=r[t].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,a=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(s):s,u=this.location.source+":"+a.line+":"+a.column;if(o){var c=this.location.end,i=n("",a.line.toString().length," "),l=o[s.line-1],h=(s.line===c.line?c.column:l.length+1)-s.column||1;e+="\n --\x3e "+u+"\n"+i+" |\n"+a.line+" | "+l+"\n"+i+" | "+n("",s.column-1," ")+n("",h,"^")}else e+="\n at "+u}return e},t.buildMessage=function(r,e){var t={literal:function(r){return'"'+o(r.text)+'"'},class:function(r){var e=r.parts.map((function(r){return Array.isArray(r)?s(r[0])+"-"+s(r[1]):s(r)}));return"["+(r.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function o(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function s(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function a(r){return t[r.type](r)}return"Expected "+function(r){var e,t,n=r.map(a);if(n.sort(),n.length>0){for(e=1,t=1;e<n.length;e++)n[e-1]!==n[e]&&(n[t]=n[e],t++);n.length=t}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(r)+" but "+function(r){return r?'"'+o(r)+'"':"end of input"}(e)+" found."},r.exports={SyntaxError:t,parse:function(r,n){var o,s={},a=(n=void 0!==n?n:{}).grammarSource,u={CHORDS:Ln},c=Ln,i="/",l="on",h="over",f="chord over bass note",b="slash chord inversion",v="upper structure triad",p="upper structure",d="ust",w="us",g="polychord",m="poly",A="/*",y="*/",I="root inv",C="1st inv",k="2nd inv",L="3rd inv",R="close harmony",V="close",E="drop2",x="drop-2",O="open triad",S="drop4",j="drop-4",F="drop2and4",Q="drop-2-and-4",B="no bass",M="bass is root",P="bass plays root",q="bass play root",D="bpm",G="tempo",N="|",T=" / ",U="key",J="ionian",_="dorian",H="phrygian",K="lydian",z="mixolydian",W="aeolian",X="locrian",Y="octave",Z="up",$="down",rr="VII",er="III",tr="VI",nr="IV",or="II",sr="V",ar="I",ur="maj",cr="M",ir="maj7",lr="M7",hr="△",fr="min",br="m",vr="-",pr="min7",dr="m7",wr="-7",gr="^",mr=" - ",Ar="→",yr="Strings",Ir="Ensemble",Cr="1",kr="Str.",Lr="2",Rr="voice aahs",Vr="choir aahs",Er="choir",xr="chor.",Or=/^[,.]/,Sr=/^[^*\/]/,jr=/^[0-9]/,Fr=/^[ =]/,Qr=/^[A-G]/,Br=/^[ \-]/,Mr=/^[#\uFF03\u266F]/,Pr=/^[b\u266D]/,qr=/^[0-3]/,Dr=/^[ \t\n\r]/,Gr=mn("/",!1),Nr=mn("on",!1),Tr=mn("over",!1),Ur=mn("chord over bass note",!0),Jr=An([",","."],!1,!1),_r=mn("slash chord inversion",!0),Hr=mn("upper structure triad",!0),Kr=mn("upper structure",!0),zr=mn("UST",!0),Wr=mn("US",!0),Xr=mn("polychord",!0),Yr=mn("poly",!0),Zr=mn("/*",!1),$r=An(["*","/"],!0,!1),re=mn("*/",!1),ee=mn("root inv",!0),te=mn("1st inv",!0),ne=mn("2nd inv",!0),oe=mn("3rd inv",!0),se=mn("close harmony",!0),ae=mn("close",!0),ue=mn("drop2",!0),ce=mn("drop-2",!0),ie=mn("open triad",!0),le=mn("drop4",!0),he=mn("drop-4",!0),fe=mn("drop2and4",!0),be=mn("drop-2-and-4",!0),ve=mn("no bass",!0),pe=mn("bass is root",!0),de=mn("bass plays root",!0),we=mn("bass play root",!0),ge=mn("BPM",!0),me=mn("TEMPO",!0),Ae=An([["0","9"]],!1,!1),ye=mn("|",!1),Ie=mn(" / ",!1),Ce=mn("key",!0),ke=An([" ","="],!1,!1),Le=An([["A","G"]],!1,!1),Re=mn("ionian",!0),Ve=mn("dorian",!0),Ee=mn("phrygian",!0),xe=mn("lydian",!0),Oe=mn("mixolydian",!0),Se=mn("aeolian",!0),je=mn("locrian",!0),Fe=mn("octave",!0),Qe=An([" ","-"],!1,!1),Be=mn("up",!0),Me=mn("down",!0),Pe=mn("VII",!1),qe=mn("III",!1),De=mn("VI",!1),Ge=mn("IV",!1),Ne=mn("II",!1),Te=mn("V",!1),Ue=mn("I",!1),Je=An(["#","＃","♯"],!1,!1),_e=An(["b","♭"],!1,!1),He=mn("maj",!0),Ke=mn("M",!1),ze=mn("maj7",!0),We=mn("M7",!1),Xe=mn("△",!1),Ye=mn("min",!0),Ze=mn("m",!1),$e=mn("-",!1),rt=mn("min7",!0),et=mn("m7",!1),tt=mn("-7",!1),nt=mn("^",!1),ot=An([["0","3"]],!1,!1),st=yn("whitespace"),at=An([" ","\t","\n","\r"],!1,!1),ut=yn("hyphen"),ct=mn(" - ",!1),it=mn("→",!1),lt=mn("Strings",!1),ht=mn("Ensemble",!1),ft=mn("1",!0),bt=mn("1",!1),vt=mn("Str.",!1),pt=mn("2",!0),dt=mn("2",!1),wt=mn("Voice Aahs",!0),gt=mn("Choir Aahs",!0),mt=mn("Choir",!0),At=mn("Chor.",!0),yt=function(r){return r},It=function(r,e,t){return{event:"chord",root:r,quality:e,inversion:t}},Ct=function(r,e,t,n,o,s){return{event:"slash chord",upperRoot:r,upperQuality:e,upperInversion:t,lowerRoot:n,lowerQuality:o,lowerInversion:s}},kt=function(r,e,t,n,o,s){return{event:"chord over bass note",upperRoot:r,upperQuality:e,upperInversion:t,lowerRoot:n,lowerQuality:o,lowerInversion:s}},Lt=function(){return{event:"change slash chord mode to chord over bass note"}},Rt=function(){return{event:"change slash chord mode to inversion"}},Vt=function(){return{event:"change slash chord mode to polychord"}},Et=function(r){return{event:"inline mml",mml:r.join("")}},xt=function(){return{event:"change inversion mode to root inv"}},Ot=function(){return{event:"change inversion mode to 1st inv"}},St=function(){return{event:"change inversion mode to 2nd inv"}},jt=function(){return{event:"change inversion mode to 3rd inv"}},Ft=function(){return{event:"change open harmony mode to close"}},Qt=function(){return{event:"change open harmony mode to drop2"}},Bt=function(){return{event:"change open harmony mode to drop4"}},Mt=function(){return{event:"change open harmony mode to drop2and4"}},Pt=function(){return{event:"change bass play mode to no bass"}},qt=function(){return{event:"change bass play mode to root"}},Dt=function(r){return{event:"inline mml",mml:"t"+r.join("")}},Gt=function(){return{event:"bar"}},Nt=function(){return{event:"bar slash"}},Tt=function(r){return r},Ut=function(r,t,n){return Qn=e(r,t,n),{event:"key",root:r,sharpLength:t.length,flatLength:n.length}},Jt=function(r){return Bn=r.toLowerCase(),{event:""}},_t=function(){return{event:"octave up"}},Ht=function(){return{event:"octave up upper"}},Kt=function(){return{event:"octave up lower"}},zt=function(){return{event:"octave down"}},Wt=function(){return{event:"octave down upper"}},Xt=function(){return{event:"octave down lower"}},Yt=function(r,t,n){return e(r,t,n)},Zt=function(r,e,t){let n=function(r,e){switch(r){case"ionian":switch(e){case"I":return 0;case"II":return 2;case"III":return 4;case"IV":return 5;case"V":return 7;case"VI":return 9;case"VII":return 11;default:throw new Error("ERROR : getOffsetByScale")}case"dorian":switch(e){case"I":return 0;case"II":return 2;case"III":return 3;case"IV":return 5;case"V":return 7;case"VI":return 9;case"VII":return 10;default:throw new Error("ERROR : getOffsetByScale")}case"phrygian":switch(e){case"I":return 0;case"II":return 1;case"III":return 3;case"IV":return 5;case"V":return 7;case"VI":return 8;case"VII":return 10;default:throw new Error("ERROR : getOffsetByScale")}case"lydian":switch(e){case"I":return 0;case"II":return 2;case"III":return 4;case"IV":return 6;case"V":return 7;case"VI":return 9;case"VII":return 11;default:throw new Error("ERROR : getOffsetByScale")}case"mixolydian":switch(e){case"I":return 0;case"II":return 2;case"III":return 4;case"IV":return 5;case"V":return 7;case"VI":return 9;case"VII":return 10;default:throw new Error("ERROR : getOffsetByScale")}case"aeolian":switch(e){case"I":return 0;case"II":return 2;case"III":return 3;case"IV":return 5;case"V":return 7;case"VI":return 8;case"VII":return 10;default:throw new Error("ERROR : getOffsetByScale")}case"locrian":switch(e){case"I":return 0;case"II":return 1;case"III":return 3;case"IV":return 5;case"V":return 6;case"VI":return 8;case"VII":return 10;default:throw new Error("ERROR : getOffsetByScale")}default:throw new Error("ERROR : getOffsetByScale")}}(Bn,t);return n+=r.length-e.length+Qn,n},$t=function(){return"#"},rn=function(){return"b"},en=function(r){return r},tn=function(){return"maj"},nn=function(){return"maj"},on=function(){return"maj7"},sn=function(){return"min"},an=function(){return"min"},un=function(){return"min7"},cn=function(){switch(r.substring(vn,bn)){case"":return null;case"^0":return"root inv";case"^1":return"1st inv";case"^2":return"2nd inv";case"^3":return"3rd inv";default:throw new Error("ERROR : INVERSION")}},ln=function(){return{event:"inline mml",mml:"@48"}},hn=function(){return{event:"inline mml",mml:"@49"}},fn=function(){return{event:"inline mml",mml:"@52"}},bn=0,vn=0,pn=[{line:1,column:1}],dn=0,wn=[],gn=0;if("startRule"in n){if(!(n.startRule in u))throw new Error("Can't start parsing from rule \""+n.startRule+'".');c=u[n.startRule]}function mn(r,e){return{type:"literal",text:r,ignoreCase:e}}function An(r,e,t){return{type:"class",parts:r,inverted:e,ignoreCase:t}}function yn(r){return{type:"other",description:r}}function In(e){var t,n=pn[e];if(n)return n;for(t=e-1;!pn[t];)t--;for(n={line:(n=pn[t]).line,column:n.column};t<e;)10===r.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return pn[e]=n,n}function Cn(r,e,t){var n=In(r),o=In(e),s={source:a,start:{offset:r,line:n.line,column:n.column},end:{offset:e,line:o.line,column:o.column}};return t&&a&&"function"==typeof a.offset&&(s.start=a.offset(s.start),s.end=a.offset(s.end)),s}function kn(r){bn<dn||(bn>dn&&(dn=bn,wn=[]),wn.push(r))}function Ln(){var r,e,t;for(r=bn,e=[],t=Rn();t!==s;)e.push(t),t=Rn();return t=jn(),vn=r,yt(e)}function Rn(){var e;return(e=function(){var e,t,n,o;if(e=bn,r.substr(bn,2)===A?(t=A,bn+=2):(t=s,0===gn&&kn(Zr)),t!==s){if(n=[],Sr.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn($r)),o!==s)for(;o!==s;)n.push(o),Sr.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn($r));else n=s;n!==s?(r.substr(bn,2)===y?(o=y,bn+=2):(o=s,0===gn&&kn(re)),o!==s?(vn=e,e=Et(n)):(bn=e,e=s)):(bn=e,e=s)}else bn=e,e=s;return e}())===s&&(e=function(){var e,t;return e=bn,r.substr(bn,3)===T?(t=T,bn+=3):(t=s,0===gn&&kn(Ie)),t!==s?(jn(),vn=e,e=Nt()):(bn=e,e=s),e}())===s&&(e=function(){var e;return(e=function(){var e,t,n,o,a,u,c;return e=bn,jn(),t=bn,r.substr(bn,7)===yr?(n=yr,bn+=7):(n=s,0===gn&&kn(lt)),n!==s?(o=jn(),r.substr(bn,8)===Ir?(a=Ir,bn+=8):(a=s,0===gn&&kn(ht)),a!==s?(u=jn(),r.substr(bn,1).toLowerCase()===Cr?(c=r.charAt(bn),bn++):(c=s,0===gn&&kn(ft)),c!==s?t=n=[n,o,a,u,c]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t===s&&(t=bn,r.substr(bn,7)===yr?(n=yr,bn+=7):(n=s,0===gn&&kn(lt)),n!==s?(o=jn(),49===r.charCodeAt(bn)?(a=Cr,bn++):(a=s,0===gn&&kn(bt)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s),t===s&&(t=bn,r.substr(bn,4)===kr?(n=kr,bn+=4):(n=s,0===gn&&kn(vt)),n!==s?(o=jn(),49===r.charCodeAt(bn)?(a=Cr,bn++):(a=s,0===gn&&kn(bt)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),o=jn(),vn=e,e=ln()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a,u,c;return e=bn,jn(),t=bn,r.substr(bn,7)===yr?(n=yr,bn+=7):(n=s,0===gn&&kn(lt)),n!==s?(o=jn(),r.substr(bn,8)===Ir?(a=Ir,bn+=8):(a=s,0===gn&&kn(ht)),a!==s?(u=jn(),r.substr(bn,1).toLowerCase()===Lr?(c=r.charAt(bn),bn++):(c=s,0===gn&&kn(pt)),c!==s?t=n=[n,o,a,u,c]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t===s&&(t=bn,r.substr(bn,7)===yr?(n=yr,bn+=7):(n=s,0===gn&&kn(lt)),n!==s?(o=jn(),50===r.charCodeAt(bn)?(a=Lr,bn++):(a=s,0===gn&&kn(dt)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s),t===s&&(t=bn,r.substr(bn,4)===kr?(n=kr,bn+=4):(n=s,0===gn&&kn(vt)),n!==s?(o=jn(),50===r.charCodeAt(bn)?(a=Lr,bn++):(a=s,0===gn&&kn(dt)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),o=jn(),vn=e,e=hn()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,10).toLowerCase()===Rr?(t=r.substr(bn,10),bn+=10):(t=s,0===gn&&kn(wt)),t===s&&(r.substr(bn,10).toLowerCase()===Vr?(t=r.substr(bn,10),bn+=10):(t=s,0===gn&&kn(gt)),t===s&&(r.substr(bn,5).toLowerCase()===Er?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(mt)),t===s&&(r.substr(bn,5).toLowerCase()===xr?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(At))))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=fn()):(bn=e,e=s),e}()),e}())===s&&(e=function(){var e,t,n,o;if(e=bn,jn(),r.substr(bn,3).toLowerCase()===D?(t=r.substr(bn,3),bn+=3):(t=s,0===gn&&kn(ge)),t===s&&(r.substr(bn,5).toLowerCase()===G?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(me))),t!==s){if(jn(),n=[],jr.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Ae)),o!==s)for(;o!==s;)n.push(o),jr.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Ae));else n=s;n!==s?(Or.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Jr)),o===s&&(o=null),jn(),vn=e,e=Dt(n)):(bn=e,e=s)}else bn=e,e=s;return e}())===s&&(e=function(){var e,t,n,o,a;return e=bn,jn(),t=bn,r.substr(bn,6).toLowerCase()===Y?(n=r.substr(bn,6),bn+=6):(n=s,0===gn&&kn(Fe)),n!==s?(Br.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Qe)),o!==s?(r.substr(bn,2).toLowerCase()===Z?(a=r.substr(bn,2),bn+=2):(a=s,0===gn&&kn(Be)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t!==s?(47===r.charCodeAt(bn)?(n=i,bn++):(n=s,0===gn&&kn(Gr)),n!==s?(Or.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Jr)),o===s&&(o=null),a=jn(),vn=e,e=Ht()):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a;return e=bn,jn(),t=bn,r.substr(bn,6).toLowerCase()===Y?(n=r.substr(bn,6),bn+=6):(n=s,0===gn&&kn(Fe)),n!==s?(Br.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Qe)),o!==s?(r.substr(bn,4).toLowerCase()===$?(a=r.substr(bn,4),bn+=4):(a=s,0===gn&&kn(Me)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t!==s?(47===r.charCodeAt(bn)?(n=i,bn++):(n=s,0===gn&&kn(Gr)),n!==s?(Or.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Jr)),o===s&&(o=null),a=jn(),vn=e,e=Wt()):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a,u;return e=bn,jn(),47===r.charCodeAt(bn)?(t=i,bn++):(t=s,0===gn&&kn(Gr)),t!==s?(n=bn,r.substr(bn,6).toLowerCase()===Y?(o=r.substr(bn,6),bn+=6):(o=s,0===gn&&kn(Fe)),o!==s?(Br.test(r.charAt(bn))?(a=r.charAt(bn),bn++):(a=s,0===gn&&kn(Qe)),a!==s?(r.substr(bn,2).toLowerCase()===Z?(u=r.substr(bn,2),bn+=2):(u=s,0===gn&&kn(Be)),u!==s?n=o=[o,a,u]:(bn=n,n=s)):(bn=n,n=s)):(bn=n,n=s),n!==s?(Or.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Jr)),o===s&&(o=null),a=jn(),vn=e,e=Kt()):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a,u;return e=bn,jn(),47===r.charCodeAt(bn)?(t=i,bn++):(t=s,0===gn&&kn(Gr)),t!==s?(n=bn,r.substr(bn,6).toLowerCase()===Y?(o=r.substr(bn,6),bn+=6):(o=s,0===gn&&kn(Fe)),o!==s?(Br.test(r.charAt(bn))?(a=r.charAt(bn),bn++):(a=s,0===gn&&kn(Qe)),a!==s?(r.substr(bn,4).toLowerCase()===$?(u=r.substr(bn,4),bn+=4):(u=s,0===gn&&kn(Me)),u!==s?n=o=[o,a,u]:(bn=n,n=s)):(bn=n,n=s)):(bn=n,n=s),n!==s?(Or.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Jr)),o===s&&(o=null),a=jn(),vn=e,e=Xt()):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a;return e=bn,jn(),t=bn,r.substr(bn,6).toLowerCase()===Y?(n=r.substr(bn,6),bn+=6):(n=s,0===gn&&kn(Fe)),n!==s?(Br.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Qe)),o!==s?(r.substr(bn,2).toLowerCase()===Z?(a=r.substr(bn,2),bn+=2):(a=s,0===gn&&kn(Be)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),o=jn(),vn=e,e=_t()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a;return e=bn,jn(),t=bn,r.substr(bn,6).toLowerCase()===Y?(n=r.substr(bn,6),bn+=6):(n=s,0===gn&&kn(Fe)),n!==s?(Br.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(Qe)),o!==s?(r.substr(bn,4).toLowerCase()===$?(a=r.substr(bn,4),bn+=4):(a=s,0===gn&&kn(Me)),a!==s?t=n=[n,o,a]:(bn=t,t=s)):(bn=t,t=s)):(bn=t,t=s),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),o=jn(),vn=e,e=zt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,20).toLowerCase()===f?(t=r.substr(bn,20),bn+=20):(t=s,0===gn&&kn(Ur)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),vn=e,e=Lt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,21).toLowerCase()===v?(t=r.substr(bn,21),bn+=21):(t=s,0===gn&&kn(Hr)),t===s&&(r.substr(bn,15).toLowerCase()===p?(t=r.substr(bn,15),bn+=15):(t=s,0===gn&&kn(Kr)),t===s&&(r.substr(bn,3).toLowerCase()===d?(t=r.substr(bn,3),bn+=3):(t=s,0===gn&&kn(zr)),t===s&&(r.substr(bn,2).toLowerCase()===w?(t=r.substr(bn,2),bn+=2):(t=s,0===gn&&kn(Wr)),t===s&&(r.substr(bn,9).toLowerCase()===g?(t=r.substr(bn,9),bn+=9):(t=s,0===gn&&kn(Xr)),t===s&&(r.substr(bn,4).toLowerCase()===m?(t=r.substr(bn,4),bn+=4):(t=s,0===gn&&kn(Yr))))))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),vn=e,e=Vt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,21).toLowerCase()===b?(t=r.substr(bn,21),bn+=21):(t=s,0===gn&&kn(_r)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),vn=e,e=Rt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a,u,c,l;return e=bn,jn(),(t=Vn())!==s&&(n=On())!==s?(o=Sn(),47===r.charCodeAt(bn)?(a=i,bn++):(a=s,0===gn&&kn(Gr)),a!==s&&(u=Vn())!==s&&(c=On())!==s?(l=Sn(),Fn(),vn=e,e=Ct(t,n,o,u,c,l)):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a,u,c,i;return e=bn,jn(),(t=Vn())!==s&&(n=On())!==s?(o=Sn(),r.substr(bn,2)===l?(a=l,bn+=2):(a=s,0===gn&&kn(Nr)),a===s&&(r.substr(bn,4)===h?(a=h,bn+=4):(a=s,0===gn&&kn(Tr))),a!==s&&(u=Vn())!==s&&(c=On())!==s?(i=Sn(),Fn(),vn=e,e=kt(t,n,o,u,c,i)):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,8).toLowerCase()===I?(t=r.substr(bn,8),bn+=8):(t=s,0===gn&&kn(ee)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=xt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,7).toLowerCase()===C?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(te)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Ot()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,7).toLowerCase()===k?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(ne)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=St()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,7).toLowerCase()===L?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(oe)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=jt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,9).toLowerCase()===F?(t=r.substr(bn,9),bn+=9):(t=s,0===gn&&kn(fe)),t===s&&(r.substr(bn,12).toLowerCase()===Q?(t=r.substr(bn,12),bn+=12):(t=s,0===gn&&kn(be))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Mt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,5).toLowerCase()===S?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(le)),t===s&&(r.substr(bn,6).toLowerCase()===j?(t=r.substr(bn,6),bn+=6):(t=s,0===gn&&kn(he))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Bt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,5).toLowerCase()===E?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(ue)),t===s&&(r.substr(bn,6).toLowerCase()===x?(t=r.substr(bn,6),bn+=6):(t=s,0===gn&&kn(ce)),t===s&&(r.substr(bn,10).toLowerCase()===O?(t=r.substr(bn,10),bn+=10):(t=s,0===gn&&kn(ie)))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Qt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,13).toLowerCase()===R?(t=r.substr(bn,13),bn+=13):(t=s,0===gn&&kn(se)),t===s&&(r.substr(bn,5).toLowerCase()===V?(t=r.substr(bn,5),bn+=5):(t=s,0===gn&&kn(ae))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Ft()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,7).toLowerCase()===B?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(ve)),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Pt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,12).toLowerCase()===M?(t=r.substr(bn,12),bn+=12):(t=s,0===gn&&kn(pe)),t===s&&(r.substr(bn,15).toLowerCase()===P?(t=r.substr(bn,15),bn+=15):(t=s,0===gn&&kn(de)),t===s&&(r.substr(bn,14).toLowerCase()===q?(t=r.substr(bn,14),bn+=14):(t=s,0===gn&&kn(we)))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=qt()):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n;return e=bn,jn(),r.substr(bn,6).toLowerCase()===J?(t=r.substr(bn,6),bn+=6):(t=s,0===gn&&kn(Re)),t===s&&(r.substr(bn,6).toLowerCase()===_?(t=r.substr(bn,6),bn+=6):(t=s,0===gn&&kn(Ve)),t===s&&(r.substr(bn,8).toLowerCase()===H?(t=r.substr(bn,8),bn+=8):(t=s,0===gn&&kn(Ee)),t===s&&(r.substr(bn,6).toLowerCase()===K?(t=r.substr(bn,6),bn+=6):(t=s,0===gn&&kn(xe)),t===s&&(r.substr(bn,10).toLowerCase()===z?(t=r.substr(bn,10),bn+=10):(t=s,0===gn&&kn(Oe)),t===s&&(r.substr(bn,7).toLowerCase()===W?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(Se)),t===s&&(r.substr(bn,7).toLowerCase()===X?(t=r.substr(bn,7),bn+=7):(t=s,0===gn&&kn(je)))))))),t!==s?(Or.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(Jr)),n===s&&(n=null),jn(),vn=e,e=Jt(t)):(bn=e,e=s),e}())===s&&(e=function(){var e,t,n,o,a;return e=bn,jn(),r.substr(bn,3).toLowerCase()===U?(t=r.substr(bn,3),bn+=3):(t=s,0===gn&&kn(Ce)),t!==s?(Fr.test(r.charAt(bn))?(n=r.charAt(bn),bn++):(n=s,0===gn&&kn(ke)),n===s&&(n=null),o=function(){var e,t,n,o,a;if(e=bn,Qr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(Le)),t!==s){for(n=[],o=En();o!==s;)n.push(o),o=En();for(o=[],a=xn();a!==s;)o.push(a),a=xn();vn=e,e=Ut(t,n,o)}else bn=e,e=s;return e}(),o!==s?(Or.test(r.charAt(bn))?(a=r.charAt(bn),bn++):(a=s,0===gn&&kn(Jr)),a===s&&(a=null),jn(),vn=e,e=Tt(o)):(bn=e,e=s)):(bn=e,e=s),e}())===s&&(e=function(){var r,e,t,n;return r=bn,jn(),(e=Vn())!==s&&(t=On())!==s?(n=Sn(),Fn(),vn=r,r=It(e,t,n)):(bn=r,r=s),r}())===s&&(e=function(){var e,t;return e=bn,jn(),124===r.charCodeAt(bn)?(t=N,bn++):(t=s,0===gn&&kn(ye)),t!==s?(jn(),vn=e,e=Gt()):(bn=e,e=s),e}()),e}function Vn(){var e;return(e=function(){var e,t,n,o,a;if(e=bn,Qr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(Le)),t!==s){for(n=[],o=En();o!==s;)n.push(o),o=En();for(o=[],a=xn();a!==s;)o.push(a),a=xn();vn=e,e=Yt(t,n,o)}else bn=e,e=s;return e}())===s&&(e=function(){var e,t,n,o;for(e=bn,t=[],n=En();n!==s;)t.push(n),n=En();for(n=[],o=xn();o!==s;)n.push(o),o=xn();return r.substr(bn,3)===rr?(o=rr,bn+=3):(o=s,0===gn&&kn(Pe)),o===s&&(r.substr(bn,3)===er?(o=er,bn+=3):(o=s,0===gn&&kn(qe)),o===s&&(r.substr(bn,2)===tr?(o=tr,bn+=2):(o=s,0===gn&&kn(De)),o===s&&(r.substr(bn,2)===nr?(o=nr,bn+=2):(o=s,0===gn&&kn(Ge)),o===s&&(r.substr(bn,2)===or?(o=or,bn+=2):(o=s,0===gn&&kn(Ne)),o===s&&(86===r.charCodeAt(bn)?(o=sr,bn++):(o=s,0===gn&&kn(Te)),o===s&&(73===r.charCodeAt(bn)?(o=ar,bn++):(o=s,0===gn&&kn(Ue)))))))),o!==s?(vn=e,e=Zt(t,n,o)):(bn=e,e=s),e}()),e}function En(){var e,t;return e=bn,Mr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(Je)),t!==s&&(vn=e,t=$t()),t}function xn(){var e,t;return e=bn,Pr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(_e)),t!==s&&(vn=e,t=rn()),t}function On(){var e,t;return e=bn,t=function(){var e,t;return e=bn,r.substr(bn,4).toLowerCase()===pr?(t=r.substr(bn,4),bn+=4):(t=s,0===gn&&kn(rt)),t===s&&(r.substr(bn,2)===dr?(t=dr,bn+=2):(t=s,0===gn&&kn(et)),t===s&&(r.substr(bn,2)===wr?(t=wr,bn+=2):(t=s,0===gn&&kn(tt)))),t!==s&&(vn=e,t=un()),e=t}(),t===s&&(t=function(){var e,t;return e=bn,r.substr(bn,4).toLowerCase()===ir?(t=r.substr(bn,4),bn+=4):(t=s,0===gn&&kn(ze)),t===s&&(r.substr(bn,2)===lr?(t=lr,bn+=2):(t=s,0===gn&&kn(We)),t===s&&(9651===r.charCodeAt(bn)?(t=hr,bn++):(t=s,0===gn&&kn(Xe)))),t!==s&&(vn=e,t=on()),e=t}(),t===s&&(t=function(){var e,t;return e=bn,r.substr(bn,3).toLowerCase()===ur?(t=r.substr(bn,3),bn+=3):(t=s,0===gn&&kn(He)),t!==s&&(vn=e,t=tn()),e=t}(),t===s&&(t=function(){var e,t;return e=bn,r.substr(bn,3).toLowerCase()===fr?(t=r.substr(bn,3),bn+=3):(t=s,0===gn&&kn(Ye)),t!==s&&(vn=e,t=sn()),e=t}(),t===s&&(t=function(){var e,t;return e=bn,109===r.charCodeAt(bn)?(t=br,bn++):(t=s,0===gn&&kn(Ze)),t===s&&(45===r.charCodeAt(bn)?(t=vr,bn++):(t=s,0===gn&&kn($e))),t!==s&&(vn=e,t=an()),e=t}(),t===s&&(t=function(){var e,t;return e=bn,77===r.charCodeAt(bn)?(t=cr,bn++):(t=s,0===gn&&kn(Ke)),t===s&&(t=""),t!==s&&(vn=e,t=nn()),e=t}()))))),t!==s&&(vn=e,t=en(t)),t}function Sn(){var e,t,n,o;return e=bn,t=bn,94===r.charCodeAt(bn)?(n=gr,bn++):(n=s,0===gn&&kn(nt)),n!==s?(qr.test(r.charAt(bn))?(o=r.charAt(bn),bn++):(o=s,0===gn&&kn(ot)),o!==s?t=n=[n,o]:(bn=t,t=s)):(bn=t,t=s),t===s&&(t=null),vn=e,cn()}function jn(){var e,t;for(gn++,e=[],Dr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(at));t!==s;)e.push(t),Dr.test(r.charAt(bn))?(t=r.charAt(bn),bn++):(t=s,0===gn&&kn(at));return gn--,t=s,0===gn&&kn(st),e}function Fn(){var e,t,n,o;for(gn++,e=[],r.substr(bn,3)===mr?(t=mr,bn+=3):(t=s,0===gn&&kn(ct)),t===s&&(t=bn,n=jn(),8594===r.charCodeAt(bn)?(o=Ar,bn++):(o=s,0===gn&&kn(it)),o!==s?t=n=[n,o,jn()]:(bn=t,t=s));t!==s;)e.push(t),r.substr(bn,3)===mr?(t=mr,bn+=3):(t=s,0===gn&&kn(ct)),t===s&&(t=bn,n=jn(),8594===r.charCodeAt(bn)?(o=Ar,bn++):(o=s,0===gn&&kn(it)),o!==s?t=n=[n,o,jn()]:(bn=t,t=s));return gn--,t=s,0===gn&&kn(ut),e}let Qn=0,Bn="ionian";if((o=c())!==s&&bn===r.length)return o;throw o!==s&&bn<r.length&&kn({type:"end"}),Mn=wn,Pn=dn<r.length?r.charAt(dn):null,qn=dn<r.length?Cn(dn,dn+1):Cn(dn,dn),new t(t.buildMessage(Mn,Pn),Mn,Pn,qn);var Mn,Pn,qn}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return r[n](s,s.exports,t),s.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{chord2mml:()=>w});var r=t(699);function e(r,e,t){for(var n=e.length*t,o=0,s=e;o<s.length;o++)r[s[o]].noteLength=n;return r}var o=function(r,e,t){if(t||2===arguments.length)for(var n,o=0,s=e.length;o<s;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))};function s(r){return delete r.event,delete r.root,delete r.quality,delete r.inversion,delete r.upperRoot,delete r.upperQuality,delete r.upperInversion,delete r.lowerRoot,delete r.lowerQuality,delete r.lowerInversion,r}function a(r,e,t,n,o){var s=[];switch(e){case"maj":s=[0,4,7];break;case"maj7":s=[0,4,7,11];break;case"min":s=[0,3,7];break;case"min7":s=[0,3,7,10]}return s=c(s,r),c(s=u(s,t,n),12*o)}function u(r,e,t){switch(e){case"1st inv":r=b(r,1);break;case"2nd inv":r=b(r,2);break;case"3rd inv":r=b(r,3)}switch(t){case"drop2":r=function(r){if(r.length<2)return r;var e=r[r.length-2]-12;return r.splice(r.length-2,1),r.unshift(e),r}(r);break;case"drop4":r=function(r){if(r.length<4)return r;var e=r[r.length-4]-12;return r.splice(r.length-4,1),r.unshift(e),r}(r);break;case"drop2and4":r=function(r){if(r.length<4)return r;var e=r[r.length-2]-12,t=r[r.length-4]-12;return r.splice(r.length-2,1),r.splice(r.length-4+1,1),r.unshift(e),r.unshift(t),r}(r)}return r}function c(r,e){for(var t=0;t<r.length;t++)r[t]+=e;return r}function i(r,e,t,n,o,s,a){var c=[];c.push(t+12*a);var i=l(r,e,t,s);return i=u(i,n,o),c.push.apply(c,i),c}function l(r,e,t,n){var o=a(r,e,"root inv","close",n);return r<=t&&(o=c(o,12)),o}function h(r,e,t,n,o){var s=[];if("root"==n){s.push(r);var u=l(r,e,r,o);u=f(u,t),s.push.apply(s,u),s=c(s,-12)}else s=f(s=a(r,e,"root inv","close",o),t);return s}function f(r,e){for(var t=!1,n=0,o=r;n<o.length;n++){if(o[n],(r[0]%12+12)%12==(e%12+12)%12){t=!0;break}r.push(r.shift())}if(t)return v(r);throw new Error("ERROR : ".concat(JSON.stringify(r)," を転回しようとしましたが、chordに ").concat(JSON.stringify(e)," が含まれていません。chordに含まれるnoteを指定してください。"))}function b(r,e){for(var t=0;t<e;t++)r.push(r.shift());return v(r)}function v(r){for(var e=-1,t=0;t<r.length;t++){for(var n=0;n<128&&!(r[t]>e);n+=12)r[t]+=12;e=r[t]}return r}function p(r,e,t,n,s,u,c,i){var l=a(r,e,t,"close",c),h=a(n,s,u,"close",i),f=o(o([],h,!0),l,!0);return v(f)}function d(r){var e=r.sharpLength?"#":"",t=r.flatLength?"b":"",n=r.root+e+t;if(e)return!0;if(t)return!1;switch(n){case"C":case"D":case"E":case"G":case"A":case"B":return!0;case"F":return!1;default:throw new Error("ERROR : isKeySharp")}}var w={parse:r.parse};w.parse=function(t){var n=(0,r.parse)(t);return function(r){for(var e="",t={event:"key",root:"C",sharpLength:0,flatLength:0},n=0,o=r;n<o.length;n++){var s=o[n];switch(s.event){case"inline mml":e+=s.mml;continue;case"bar":e+="/*|*/";continue;case"key":t=s}var a=s.notes;if(a){var u=0;a.length&&(e+="'");for(var c=a[0];c<0;)c+=12,e+=">",u--;for(var i=0;i<a.length;i++){for(var l=a[i],h=Math.floor(l/12);h>u;)e+="<",u++;if(d(t))switch((l%12+12)%12){case 0:e+="c";break;case 1:e+="c+";break;case 2:e+="d";break;case 3:e+="d+";break;case 4:e+="e";break;case 5:e+="f";break;case 6:e+="f+";break;case 7:e+="g";break;case 8:e+="g+";break;case 9:e+="a";break;case 10:e+="a+";break;case 11:e+="b"}else switch((l%12+12)%12){case 0:e+="c";break;case 1:e+="d-";break;case 2:e+="d";break;case 3:e+="e-";break;case 4:e+="e";break;case 5:e+="f";break;case 6:e+="g-";break;case 7:e+="g";break;case 8:e+="a-";break;case 9:e+="a";break;case 10:e+="b-";break;case 11:e+="b"}!i&&s.noteLength&&(e+=s.noteLength)}a.length&&(e+="'")}}return e}(function(r){for(var e,t,n,o,u=[],l="root inv",f="close",b="no bass",v=0,d=0,w=0,g=r;w<g.length;w++){var m=g[w];switch(m.event){case"chord":m.notes=a(m.root,m.quality,null!==(e=m.inversion)&&void 0!==e?e:l,f,v),m=s(m),u.push(m);break;case"chord over bass note":m.notes=i(m.upperRoot,m.upperQuality,m.lowerRoot,null!==(t=m.upperInversion)&&void 0!==t?t:l,f,v,d),m.notes=c(m.notes,-12),m=s(m),u.push(m);break;case"inversion":m.notes=h(m.upperRoot,m.upperQuality,m.lowerRoot,b,v),m=s(m),u.push(m);break;case"polychord":m.notes=p(m.upperRoot,m.upperQuality,null!==(n=m.upperInversion)&&void 0!==n?n:l,m.lowerRoot,m.lowerQuality,null!==(o=m.lowerInversion)&&void 0!==o?o:l,v,d),m=s(m),u.push(m);break;case"change inversion mode to root inv":l="root inv";break;case"change inversion mode to 1st inv":l="1st inv";break;case"change inversion mode to 2nd inv":l="2nd inv";break;case"change inversion mode to 3rd inv":l="3rd inv";break;case"change open harmony mode to close":f="close";break;case"change open harmony mode to drop2":f="drop2";break;case"change open harmony mode to drop4":f="drop4";break;case"change open harmony mode to drop2and4":f="drop2and4";break;case"change bass play mode to root":b="root";break;case"change bass play mode to no bass":b="no bass";break;case"octave up":v++,d++;break;case"octave up upper":v++;break;case"octave up lower":d++;break;case"octave down":v--,d--;break;case"octave down upper":v--;break;case"octave down lower":d--;break;default:u.push(m)}}return u}(n=function(r){for(var t="chord over bass note",n="no bass",o=0,s=r;o<s.length;o++){var a=s[o];switch(a.event){case"change slash chord mode to chord over bass note":t="chord over bass note";break;case"change slash chord mode to inversion":t="inversion";break;case"change slash chord mode to polychord":t="polychord";break;case"slash chord":a.event=t;break;case"change bass play mode to root":n="root";break;case"change bass play mode to no bass":n="no bass";break;case"chord":"root"==n&&(a.event="chord over bass note",a.upperRoot=a.root,a.upperQuality=a.quality,a.upperInversion=a.inversion,a.lowerRoot=a.root,a.lowerQuality=a.quality,a.lowerInversion=a.inversion,delete a.root,delete a.quality,delete a.inversion)}}return r=function(r){for(var t=0,n=1,o=[],s=0;s<r.length;s++){var a=r[s];switch(a.event){case"chord":case"chord over bass note":case"inversion":case"polychord":a.noteLength=1,o.push(s);break;case"bar":t++,r=e(r,o,n),o=[],n=1;break;case"bar slash":t++,r=e(r,o,n=2),o=[]}}return t&&(r=e(r,o,n)),r}(r),r}(n)))}})(),n})()));