!function(r,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var n in t)("object"==typeof exports?exports:r)[n]=t[n]}}(self,(()=>(()=>{"use strict";var r={699:r=>{function e(r){switch(r){case"ionian":return[0,2,4,5,7,9,11];case"dorian":return[0,2,3,5,7,9,10];case"phrygian":return[0,1,3,5,7,8,10];case"lydian":return[0,2,4,6,7,9,11];case"mixolydian":return[0,2,4,5,7,9,10];case"aeolian":return[0,2,3,5,7,8,10];case"locrian":return[0,1,3,5,6,8,10];default:throw new Error("ERROR : getOffsetsByScale")}}function t(r,e,t){let n;switch(r){case"C":n=0;break;case"D":n=2;break;case"E":n=4;break;case"F":n=5;break;case"G":n=7;break;case"A":n=9;break;case"B":n=11;break;default:throw new Error("ERROR : getRootCdefgabOffset")}return n+=e.length-t.length,n}function n(r,e,t,o){var s=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(s,n.prototype),s.expected=e,s.found=t,s.location=o,s.name="SyntaxError",s}function o(r,e,t){return t=t||" ",r.length>e?r:(e-=r.length,r+(t+=t.repeat(e)).slice(0,e))}!function(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}(n,Error),n.prototype.format=function(r){var e="Error: "+this.message;if(this.location){var t,n=null;for(t=0;t<r.length;t++)if(r[t].source===this.location.source){n=r[t].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,a=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(s):s,u=this.location.source+":"+a.line+":"+a.column;if(n){var c=this.location.end,i=o("",a.line.toString().length," "),l=n[s.line-1],f=(s.line===c.line?c.column:l.length+1)-s.column||1;e+="\n --\x3e "+u+"\n"+i+" |\n"+a.line+" | "+l+"\n"+i+" | "+o("",s.column-1," ")+o("",f,"^")}else e+="\n at "+u}return e},n.buildMessage=function(r,e){var t={literal:function(r){return'"'+o(r.text)+'"'},class:function(r){var e=r.parts.map((function(r){return Array.isArray(r)?s(r[0])+"-"+s(r[1]):s(r)}));return"["+(r.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function o(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function s(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function a(r){return t[r.type](r)}return"Expected "+function(r){var e,t,n=r.map(a);if(n.sort(),n.length>0){for(e=1,t=1;e<n.length;e++)n[e-1]!==n[e]&&(n[t]=n[e],t++);n.length=t}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(r)+" but "+function(r){return r?'"'+o(r)+'"':"end of input"}(e)+" found."},r.exports={SyntaxError:n,parse:function(r,o){var s,a={},u=(o=void 0!==o?o:{}).grammarSource,c={CHORDS:Ao},i=Ao,l="/",f="on",h="over",b="chord over bass note",v="slash chord inversion",p="upper structure triad",d="upper structure",A="ust",g="us",w="polychord",m="poly",y="/*",C="*/",k="root inv",L="1st inv",O="2nd inv",I="3rd inv",R="close harmony",x="close",S="drop2",E="drop-2",j="open triad",V="drop4",F="drop-4",Q="drop2and4",M="drop-2-and-4",P="no bass",q="bass is root",N="bass plays root",B="bass play root",D="bpm",J="tempo",T="|",G=" / ",U="key",K="ionian",_="dorian",H="phrygian",z="lydian",W="mixolydian",X="aeolian",Y="locrian",Z="octave",$="up",rr="down",er="VII",tr="III",nr="VI",or="IV",sr="II",ar="V",ur="I",cr="maj",ir="M",lr="maj7",fr="M7",hr="△",br="min",vr="m",pr="-",dr="min7",Ar="m7",gr="-7",wr="6",mr="7",yr="9",Cr="11",kr="13",Lr="sus2",Or="sus4",Ir="7sus2",Rr="7sus4",xr="(",Sr="omit",Er=")",jr="add",Vr="^",Fr="'",Qr=",",Mr=" - ",Pr="→",qr="Strings",Nr="Ensemble",Br="1",Dr="Str.",Jr="2",Tr="voice aahs",Gr="choir aahs",Ur="choir",Kr="chor.",_r=/^[,.]/,Hr=/^[^*\/]/,zr=/^[0-9]/,Wr=/^[ =]/,Xr=/^[A-G]/,Yr=/^[ \-]/,Zr=/^[#\uFF03\u266F]/,$r=/^[b\u266D]/,re=/^[135]/,ee=/^[0-3]/,te=/^[ \t\n\r]/,ne=lo("/",!1),oe=lo("on",!1),se=lo("over",!1),ae=lo("chord over bass note",!0),ue=fo([",","."],!1,!1),ce=lo("slash chord inversion",!0),ie=lo("upper structure triad",!0),le=lo("upper structure",!0),fe=lo("UST",!0),he=lo("US",!0),be=lo("polychord",!0),ve=lo("poly",!0),pe=lo("/*",!1),de=fo(["*","/"],!0,!1),Ae=lo("*/",!1),ge=lo("root inv",!0),we=lo("1st inv",!0),me=lo("2nd inv",!0),ye=lo("3rd inv",!0),Ce=lo("close harmony",!0),ke=lo("close",!0),Le=lo("drop2",!0),Oe=lo("drop-2",!0),Ie=lo("open triad",!0),Re=lo("drop4",!0),xe=lo("drop-4",!0),Se=lo("drop2and4",!0),Ee=lo("drop-2-and-4",!0),je=lo("no bass",!0),Ve=lo("bass is root",!0),Fe=lo("bass plays root",!0),Qe=lo("bass play root",!0),Me=lo("BPM",!0),Pe=lo("TEMPO",!0),qe=fo([["0","9"]],!1,!1),Ne=lo("|",!1),Be=lo(" / ",!1),De=lo("key",!0),Je=fo([" ","="],!1,!1),Te=fo([["A","G"]],!1,!1),Ge=lo("ionian",!0),Ue=lo("dorian",!0),Ke=lo("phrygian",!0),_e=lo("lydian",!0),He=lo("mixolydian",!0),ze=lo("aeolian",!0),We=lo("locrian",!0),Xe=lo("octave",!0),Ye=fo([" ","-"],!1,!1),Ze=lo("up",!0),$e=lo("down",!0),rt=lo("VII",!1),et=lo("III",!1),tt=lo("VI",!1),nt=lo("IV",!1),ot=lo("II",!1),st=lo("V",!1),at=lo("I",!1),ut=fo(["#","＃","♯"],!1,!1),ct=fo(["b","♭"],!1,!1),it=lo("maj",!0),lt=lo("M",!1),ft=lo("maj7",!0),ht=lo("M7",!1),bt=lo("△",!1),vt=lo("min",!0),pt=lo("m",!1),dt=lo("-",!1),At=lo("min7",!0),gt=lo("m7",!1),wt=lo("-7",!1),mt=lo("6",!1),yt=lo("7",!1),Ct=lo("9",!1),kt=lo("11",!1),Lt=lo("13",!1),Ot=lo("sus2",!0),It=lo("sus4",!0),Rt=lo("7sus2",!0),xt=lo("7sus4",!0),St=lo("(",!1),Et=lo("omit",!1),jt=fo(["1","3","5"],!1,!1),Vt=lo(")",!1),Ft=lo("add",!1),Qt=lo("^",!1),Mt=fo([["0","3"]],!1,!1),Pt=lo("'",!1),qt=lo(",",!1),Nt=ho("whitespace"),Bt=fo([" ","\t","\n","\r"],!1,!1),Dt=ho("hyphen"),Jt=lo(" - ",!1),Tt=lo("→",!1),Gt=lo("Strings",!1),Ut=lo("Ensemble",!1),Kt=lo("1",!0),_t=lo("1",!1),Ht=lo("Str.",!1),zt=lo("2",!0),Wt=lo("2",!1),Xt=lo("Voice Aahs",!0),Yt=lo("Choir Aahs",!0),Zt=lo("Choir",!0),$t=lo("Chor.",!0),rn=function(r){return r},en=function(r,e,t,n){return{event:"chord",root:r,quality:e,inversion:t,octaveOffset:n}},tn=function(r,e,t,n,o,s,a,u){return o??=r,s??=e,{event:"slash chord",upperRoot:r,upperQuality:e,upperInversion:t,upperOctaveOffset:n,lowerRoot:o,lowerQuality:s,lowerInversion:a,lowerOctaveOffset:u}},nn=function(r,e,t,n,o,s,a,u){return o??=r,s??=e,{event:"chord over bass note",upperRoot:r,upperQuality:e,upperInversion:t,upperOctaveOffset:n,lowerRoot:o,lowerQuality:s,lowerInversion:a,lowerOctaveOffset:u}},on=function(){return{event:"change slash chord mode to chord over bass note"}},sn=function(){return{event:"change slash chord mode to inversion"}},an=function(){return{event:"change slash chord mode to polychord"}},un=function(r){return{event:"inline mml",mml:r.join("")}},cn=function(){return{event:"change inversion mode to root inv"}},ln=function(){return{event:"change inversion mode to 1st inv"}},fn=function(){return{event:"change inversion mode to 2nd inv"}},hn=function(){return{event:"change inversion mode to 3rd inv"}},bn=function(){return{event:"change open harmony mode to close"}},vn=function(){return{event:"change open harmony mode to drop2"}},pn=function(){return{event:"change open harmony mode to drop4"}},dn=function(){return{event:"change open harmony mode to drop2and4"}},An=function(){return{event:"change bass play mode to no bass"}},gn=function(){return{event:"change bass play mode to root"}},wn=function(r){return{event:"inline mml",mml:"t"+r.join("")}},mn=function(){return{event:"bar"}},yn=function(){return{event:"bar slash"}},Cn=function(r){return r},kn=function(r,e,n){return So=t(r,e,n),{event:"key",root:r,sharpLength:e.length,flatLength:n.length,offset:So}},Ln=function(r){return Eo=r.toLowerCase(),{event:"scale",offsets:e(Eo)}},On=function(){return{event:"octave up"}},In=function(){return{event:"octave up upper"}},Rn=function(){return{event:"octave up lower"}},xn=function(){return{event:"octave down"}},Sn=function(){return{event:"octave down upper"}},En=function(){return{event:"octave down lower"}},jn=function(r,e,n){return t(r,e,n)},Vn=function(r,t,n){let o=function(r,t){return e(r)[function(r){switch(r){case"I":return 0;case"II":return 1;case"III":return 2;case"IV":return 3;case"V":return 4;case"VI":return 5;case"VII":return 6;default:throw new Error("ERROR : getDegreeIndex")}}(t)]}(Eo,n);return o+=r.length-t.length+So,o},Fn=function(){return"#"},Qn=function(){return"b"},Mn=function(r){return r.join("")},Pn=function(){return"maj"},qn=function(){return"maj"},Nn=function(){return"maj7"},Bn=function(){return"min"},Dn=function(){return"min"},Jn=function(){return"min7"},Tn=function(){return"6"},Gn=function(){return"7"},Un=function(){return"9"},Kn=function(){return"11"},_n=function(){return"13"},Hn=function(){return"sus2"},zn=function(){return"sus4"},Wn=function(){return"7sus2"},Xn=function(){return"7sus4"},Yn=function(r){return",omit"+r},Zn=function(r){return",add"+r.join("")},$n=function(){switch(r.substring(so,oo)){case"":return null;case"^0":return"root inv";case"^1":return"1st inv";case"^2":return"2nd inv";case"^3":return"3rd inv";default:throw new Error("ERROR : INVERSION")}},ro=function(r,e){return r.length-e.length},eo=function(){return{event:"inline mml",mml:"@48"}},to=function(){return{event:"inline mml",mml:"@49"}},no=function(){return{event:"inline mml",mml:"@52"}},oo=0,so=0,ao=[{line:1,column:1}],uo=0,co=[],io=0;if("startRule"in o){if(!(o.startRule in c))throw new Error("Can't start parsing from rule \""+o.startRule+'".');i=c[o.startRule]}function lo(r,e){return{type:"literal",text:r,ignoreCase:e}}function fo(r,e,t){return{type:"class",parts:r,inverted:e,ignoreCase:t}}function ho(r){return{type:"other",description:r}}function bo(e){var t,n=ao[e];if(n)return n;for(t=e-1;!ao[t];)t--;for(n={line:(n=ao[t]).line,column:n.column};t<e;)10===r.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return ao[e]=n,n}function vo(r,e,t){var n=bo(r),o=bo(e),s={source:u,start:{offset:r,line:n.line,column:n.column},end:{offset:e,line:o.line,column:o.column}};return t&&u&&"function"==typeof u.offset&&(s.start=u.offset(s.start),s.end=u.offset(s.end)),s}function po(r){oo<uo||(oo>uo&&(uo=oo,co=[]),co.push(r))}function Ao(){var r,e,t;for(r=oo,e=[],t=go();t!==a;)e.push(t),t=go();return t=Ro(),so=r,rn(e)}function go(){var e;return(e=function(){var e,t,n,o;if(e=oo,r.substr(oo,2)===y?(t=y,oo+=2):(t=a,0===io&&po(pe)),t!==a){if(n=[],Hr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(de)),o!==a)for(;o!==a;)n.push(o),Hr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(de));else n=a;n!==a?(r.substr(oo,2)===C?(o=C,oo+=2):(o=a,0===io&&po(Ae)),o!==a?(so=e,e=un(n)):(oo=e,e=a)):(oo=e,e=a)}else oo=e,e=a;return e}())===a&&(e=function(){var e,t;return e=oo,r.substr(oo,3)===G?(t=G,oo+=3):(t=a,0===io&&po(Be)),t!==a?(Ro(),so=e,e=yn()):(oo=e,e=a),e}())===a&&(e=function(){var e;return(e=function(){var e,t,n,o,s,u,c;return e=oo,Ro(),t=oo,r.substr(oo,7)===qr?(n=qr,oo+=7):(n=a,0===io&&po(Gt)),n!==a?(o=Ro(),r.substr(oo,8)===Nr?(s=Nr,oo+=8):(s=a,0===io&&po(Ut)),s!==a?(u=Ro(),r.substr(oo,1).toLowerCase()===Br?(c=r.charAt(oo),oo++):(c=a,0===io&&po(Kt)),c!==a?t=n=[n,o,s,u,c]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t===a&&(t=oo,r.substr(oo,7)===qr?(n=qr,oo+=7):(n=a,0===io&&po(Gt)),n!==a?(o=Ro(),49===r.charCodeAt(oo)?(s=Br,oo++):(s=a,0===io&&po(_t)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a),t===a&&(t=oo,r.substr(oo,4)===Dr?(n=Dr,oo+=4):(n=a,0===io&&po(Ht)),n!==a?(o=Ro(),49===r.charCodeAt(oo)?(s=Br,oo++):(s=a,0===io&&po(_t)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),o=Ro(),so=e,e=eo()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s,u,c;return e=oo,Ro(),t=oo,r.substr(oo,7)===qr?(n=qr,oo+=7):(n=a,0===io&&po(Gt)),n!==a?(o=Ro(),r.substr(oo,8)===Nr?(s=Nr,oo+=8):(s=a,0===io&&po(Ut)),s!==a?(u=Ro(),r.substr(oo,1).toLowerCase()===Jr?(c=r.charAt(oo),oo++):(c=a,0===io&&po(zt)),c!==a?t=n=[n,o,s,u,c]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t===a&&(t=oo,r.substr(oo,7)===qr?(n=qr,oo+=7):(n=a,0===io&&po(Gt)),n!==a?(o=Ro(),50===r.charCodeAt(oo)?(s=Jr,oo++):(s=a,0===io&&po(Wt)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a),t===a&&(t=oo,r.substr(oo,4)===Dr?(n=Dr,oo+=4):(n=a,0===io&&po(Ht)),n!==a?(o=Ro(),50===r.charCodeAt(oo)?(s=Jr,oo++):(s=a,0===io&&po(Wt)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),o=Ro(),so=e,e=to()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,10).toLowerCase()===Tr?(t=r.substr(oo,10),oo+=10):(t=a,0===io&&po(Xt)),t===a&&(r.substr(oo,10).toLowerCase()===Gr?(t=r.substr(oo,10),oo+=10):(t=a,0===io&&po(Yt)),t===a&&(r.substr(oo,5).toLowerCase()===Ur?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(Zt)),t===a&&(r.substr(oo,5).toLowerCase()===Kr?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po($t))))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=no()):(oo=e,e=a),e}()),e}())===a&&(e=function(){var e,t,n,o;if(e=oo,Ro(),r.substr(oo,3).toLowerCase()===D?(t=r.substr(oo,3),oo+=3):(t=a,0===io&&po(Me)),t===a&&(r.substr(oo,5).toLowerCase()===J?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(Pe))),t!==a){if(Ro(),n=[],zr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(qe)),o!==a)for(;o!==a;)n.push(o),zr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(qe));else n=a;n!==a?(_r.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(ue)),o===a&&(o=null),Ro(),so=e,e=wn(n)):(oo=e,e=a)}else oo=e,e=a;return e}())===a&&(e=function(){var e,t,n,o,s;return e=oo,Ro(),t=oo,r.substr(oo,6).toLowerCase()===Z?(n=r.substr(oo,6),oo+=6):(n=a,0===io&&po(Xe)),n!==a?(Yr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(Ye)),o!==a?(r.substr(oo,2).toLowerCase()===$?(s=r.substr(oo,2),oo+=2):(s=a,0===io&&po(Ze)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t!==a?(47===r.charCodeAt(oo)?(n=l,oo++):(n=a,0===io&&po(ne)),n!==a?(_r.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(ue)),o===a&&(o=null),s=Ro(),so=e,e=In()):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s;return e=oo,Ro(),t=oo,r.substr(oo,6).toLowerCase()===Z?(n=r.substr(oo,6),oo+=6):(n=a,0===io&&po(Xe)),n!==a?(Yr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(Ye)),o!==a?(r.substr(oo,4).toLowerCase()===rr?(s=r.substr(oo,4),oo+=4):(s=a,0===io&&po($e)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t!==a?(47===r.charCodeAt(oo)?(n=l,oo++):(n=a,0===io&&po(ne)),n!==a?(_r.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(ue)),o===a&&(o=null),s=Ro(),so=e,e=Sn()):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s,u;return e=oo,Ro(),47===r.charCodeAt(oo)?(t=l,oo++):(t=a,0===io&&po(ne)),t!==a?(n=oo,r.substr(oo,6).toLowerCase()===Z?(o=r.substr(oo,6),oo+=6):(o=a,0===io&&po(Xe)),o!==a?(Yr.test(r.charAt(oo))?(s=r.charAt(oo),oo++):(s=a,0===io&&po(Ye)),s!==a?(r.substr(oo,2).toLowerCase()===$?(u=r.substr(oo,2),oo+=2):(u=a,0===io&&po(Ze)),u!==a?n=o=[o,s,u]:(oo=n,n=a)):(oo=n,n=a)):(oo=n,n=a),n!==a?(_r.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(ue)),o===a&&(o=null),s=Ro(),so=e,e=Rn()):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s,u;return e=oo,Ro(),47===r.charCodeAt(oo)?(t=l,oo++):(t=a,0===io&&po(ne)),t!==a?(n=oo,r.substr(oo,6).toLowerCase()===Z?(o=r.substr(oo,6),oo+=6):(o=a,0===io&&po(Xe)),o!==a?(Yr.test(r.charAt(oo))?(s=r.charAt(oo),oo++):(s=a,0===io&&po(Ye)),s!==a?(r.substr(oo,4).toLowerCase()===rr?(u=r.substr(oo,4),oo+=4):(u=a,0===io&&po($e)),u!==a?n=o=[o,s,u]:(oo=n,n=a)):(oo=n,n=a)):(oo=n,n=a),n!==a?(_r.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(ue)),o===a&&(o=null),s=Ro(),so=e,e=En()):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s;return e=oo,Ro(),t=oo,r.substr(oo,6).toLowerCase()===Z?(n=r.substr(oo,6),oo+=6):(n=a,0===io&&po(Xe)),n!==a?(Yr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(Ye)),o!==a?(r.substr(oo,2).toLowerCase()===$?(s=r.substr(oo,2),oo+=2):(s=a,0===io&&po(Ze)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),o=Ro(),so=e,e=On()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s;return e=oo,Ro(),t=oo,r.substr(oo,6).toLowerCase()===Z?(n=r.substr(oo,6),oo+=6):(n=a,0===io&&po(Xe)),n!==a?(Yr.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(Ye)),o!==a?(r.substr(oo,4).toLowerCase()===rr?(s=r.substr(oo,4),oo+=4):(s=a,0===io&&po($e)),s!==a?t=n=[n,o,s]:(oo=t,t=a)):(oo=t,t=a)):(oo=t,t=a),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),o=Ro(),so=e,e=xn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,20).toLowerCase()===b?(t=r.substr(oo,20),oo+=20):(t=a,0===io&&po(ae)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),so=e,e=on()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,21).toLowerCase()===p?(t=r.substr(oo,21),oo+=21):(t=a,0===io&&po(ie)),t===a&&(r.substr(oo,15).toLowerCase()===d?(t=r.substr(oo,15),oo+=15):(t=a,0===io&&po(le)),t===a&&(r.substr(oo,3).toLowerCase()===A?(t=r.substr(oo,3),oo+=3):(t=a,0===io&&po(fe)),t===a&&(r.substr(oo,2).toLowerCase()===g?(t=r.substr(oo,2),oo+=2):(t=a,0===io&&po(he)),t===a&&(r.substr(oo,9).toLowerCase()===w?(t=r.substr(oo,9),oo+=9):(t=a,0===io&&po(be)),t===a&&(r.substr(oo,4).toLowerCase()===m?(t=r.substr(oo,4),oo+=4):(t=a,0===io&&po(ve))))))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),so=e,e=an()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,21).toLowerCase()===v?(t=r.substr(oo,21),oo+=21):(t=a,0===io&&po(ce)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),so=e,e=sn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s,u,c,i,f,h;return e=oo,Ro(),(t=wo())!==a&&(n=Co())!==a?(o=Oo(),s=Io(),47===r.charCodeAt(oo)?(u=l,oo++):(u=a,0===io&&po(ne)),u!==a?((c=wo())===a&&(c=null),(i=Co())===a&&(i=null),f=Oo(),h=Io(),xo(),so=e,e=tn(t,n,o,s,c,i,f,h)):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s,u,c,i,l,b;return e=oo,Ro(),(t=wo())!==a&&(n=Co())!==a?(o=Oo(),s=Io(),r.substr(oo,2)===f?(u=f,oo+=2):(u=a,0===io&&po(oe)),u===a&&(r.substr(oo,4)===h?(u=h,oo+=4):(u=a,0===io&&po(se))),u!==a?((c=wo())===a&&(c=null),(i=Co())===a&&(i=null),l=Oo(),b=Io(),xo(),so=e,e=nn(t,n,o,s,c,i,l,b)):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,8).toLowerCase()===k?(t=r.substr(oo,8),oo+=8):(t=a,0===io&&po(ge)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=cn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,7).toLowerCase()===L?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(we)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=ln()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,7).toLowerCase()===O?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(me)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=fn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,7).toLowerCase()===I?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(ye)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=hn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,9).toLowerCase()===Q?(t=r.substr(oo,9),oo+=9):(t=a,0===io&&po(Se)),t===a&&(r.substr(oo,12).toLowerCase()===M?(t=r.substr(oo,12),oo+=12):(t=a,0===io&&po(Ee))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=dn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,5).toLowerCase()===V?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(Re)),t===a&&(r.substr(oo,6).toLowerCase()===F?(t=r.substr(oo,6),oo+=6):(t=a,0===io&&po(xe))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=pn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,5).toLowerCase()===S?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(Le)),t===a&&(r.substr(oo,6).toLowerCase()===E?(t=r.substr(oo,6),oo+=6):(t=a,0===io&&po(Oe)),t===a&&(r.substr(oo,10).toLowerCase()===j?(t=r.substr(oo,10),oo+=10):(t=a,0===io&&po(Ie)))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=vn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,13).toLowerCase()===R?(t=r.substr(oo,13),oo+=13):(t=a,0===io&&po(Ce)),t===a&&(r.substr(oo,5).toLowerCase()===x?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(ke))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=bn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,7).toLowerCase()===P?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(je)),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=An()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,12).toLowerCase()===q?(t=r.substr(oo,12),oo+=12):(t=a,0===io&&po(Ve)),t===a&&(r.substr(oo,15).toLowerCase()===N?(t=r.substr(oo,15),oo+=15):(t=a,0===io&&po(Fe)),t===a&&(r.substr(oo,14).toLowerCase()===B?(t=r.substr(oo,14),oo+=14):(t=a,0===io&&po(Qe)))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=gn()):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n;return e=oo,Ro(),r.substr(oo,6).toLowerCase()===K?(t=r.substr(oo,6),oo+=6):(t=a,0===io&&po(Ge)),t===a&&(r.substr(oo,6).toLowerCase()===_?(t=r.substr(oo,6),oo+=6):(t=a,0===io&&po(Ue)),t===a&&(r.substr(oo,8).toLowerCase()===H?(t=r.substr(oo,8),oo+=8):(t=a,0===io&&po(Ke)),t===a&&(r.substr(oo,6).toLowerCase()===z?(t=r.substr(oo,6),oo+=6):(t=a,0===io&&po(_e)),t===a&&(r.substr(oo,10).toLowerCase()===W?(t=r.substr(oo,10),oo+=10):(t=a,0===io&&po(He)),t===a&&(r.substr(oo,7).toLowerCase()===X?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(ze)),t===a&&(r.substr(oo,7).toLowerCase()===Y?(t=r.substr(oo,7),oo+=7):(t=a,0===io&&po(We)))))))),t!==a?(_r.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(ue)),n===a&&(n=null),Ro(),so=e,e=Ln(t)):(oo=e,e=a),e}())===a&&(e=function(){var e,t,n,o,s;return e=oo,Ro(),r.substr(oo,3).toLowerCase()===U?(t=r.substr(oo,3),oo+=3):(t=a,0===io&&po(De)),t!==a?(Wr.test(r.charAt(oo))?(n=r.charAt(oo),oo++):(n=a,0===io&&po(Je)),n===a&&(n=null),o=function(){var e,t,n,o,s;if(e=oo,Xr.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(Te)),t!==a){for(n=[],o=mo();o!==a;)n.push(o),o=mo();for(o=[],s=yo();s!==a;)o.push(s),s=yo();so=e,e=kn(t,n,o)}else oo=e,e=a;return e}(),o!==a?(_r.test(r.charAt(oo))?(s=r.charAt(oo),oo++):(s=a,0===io&&po(ue)),s===a&&(s=null),Ro(),so=e,e=Cn(o)):(oo=e,e=a)):(oo=e,e=a),e}())===a&&(e=function(){var r,e,t,n,o;return r=oo,Ro(),(e=wo())!==a&&(t=Co())!==a?(n=Oo(),o=Io(),xo(),so=r,r=en(e,t,n,o)):(oo=r,r=a),r}())===a&&(e=function(){var e,t;return e=oo,Ro(),124===r.charCodeAt(oo)?(t=T,oo++):(t=a,0===io&&po(Ne)),t!==a?(Ro(),so=e,e=mn()):(oo=e,e=a),e}()),e}function wo(){var e;return(e=function(){var e,t,n,o,s;if(e=oo,Xr.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(Te)),t!==a){for(n=[],o=mo();o!==a;)n.push(o),o=mo();for(o=[],s=yo();s!==a;)o.push(s),s=yo();so=e,e=jn(t,n,o)}else oo=e,e=a;return e}())===a&&(e=function(){var e,t,n,o;for(e=oo,t=[],n=mo();n!==a;)t.push(n),n=mo();for(n=[],o=yo();o!==a;)n.push(o),o=yo();return r.substr(oo,3)===er?(o=er,oo+=3):(o=a,0===io&&po(rt)),o===a&&(r.substr(oo,3)===tr?(o=tr,oo+=3):(o=a,0===io&&po(et)),o===a&&(r.substr(oo,2)===nr?(o=nr,oo+=2):(o=a,0===io&&po(tt)),o===a&&(r.substr(oo,2)===or?(o=or,oo+=2):(o=a,0===io&&po(nt)),o===a&&(r.substr(oo,2)===sr?(o=sr,oo+=2):(o=a,0===io&&po(ot)),o===a&&(86===r.charCodeAt(oo)?(o=ar,oo++):(o=a,0===io&&po(st)),o===a&&(73===r.charCodeAt(oo)?(o=ur,oo++):(o=a,0===io&&po(at)))))))),o!==a?(so=e,e=Vn(t,n,o)):(oo=e,e=a),e}()),e}function mo(){var e,t;return e=oo,Zr.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(ut)),t!==a&&(so=e,t=Fn()),t}function yo(){var e,t;return e=oo,$r.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(ct)),t!==a&&(so=e,t=Qn()),t}function Co(){var e,t,n,o,s;if(e=oo,t=oo,n=function(){var e,t;return e=oo,r.substr(oo,4).toLowerCase()===dr?(t=r.substr(oo,4),oo+=4):(t=a,0===io&&po(At)),t===a&&(r.substr(oo,2)===Ar?(t=Ar,oo+=2):(t=a,0===io&&po(gt)),t===a&&(r.substr(oo,2)===gr?(t=gr,oo+=2):(t=a,0===io&&po(wt)))),t!==a&&(so=e,t=Jn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,4).toLowerCase()===lr?(t=r.substr(oo,4),oo+=4):(t=a,0===io&&po(ft)),t===a&&(r.substr(oo,2)===fr?(t=fr,oo+=2):(t=a,0===io&&po(ht)),t===a&&(9651===r.charCodeAt(oo)?(t=hr,oo++):(t=a,0===io&&po(bt)))),t!==a&&(so=e,t=Nn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,3).toLowerCase()===cr?(t=r.substr(oo,3),oo+=3):(t=a,0===io&&po(it)),t!==a&&(so=e,t=Pn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,3).toLowerCase()===br?(t=r.substr(oo,3),oo+=3):(t=a,0===io&&po(vt)),t!==a&&(so=e,t=Bn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,5).toLowerCase()===Rr?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(xt)),t!==a&&(so=e,t=Xn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,5).toLowerCase()===Ir?(t=r.substr(oo,5),oo+=5):(t=a,0===io&&po(Rt)),t!==a&&(so=e,t=Wn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,4).toLowerCase()===Or?(t=r.substr(oo,4),oo+=4):(t=a,0===io&&po(It)),t!==a&&(so=e,t=zn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,4).toLowerCase()===Lr?(t=r.substr(oo,4),oo+=4):(t=a,0===io&&po(Ot)),t!==a&&(so=e,t=Hn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,2)===kr?(t=kr,oo+=2):(t=a,0===io&&po(Lt)),t!==a&&(so=e,t=_n()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,r.substr(oo,2)===Cr?(t=Cr,oo+=2):(t=a,0===io&&po(kt)),t!==a&&(so=e,t=Kn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,57===r.charCodeAt(oo)?(t=yr,oo++):(t=a,0===io&&po(Ct)),t!==a&&(so=e,t=Un()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,55===r.charCodeAt(oo)?(t=mr,oo++):(t=a,0===io&&po(yt)),t!==a&&(so=e,t=Gn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,54===r.charCodeAt(oo)?(t=wr,oo++):(t=a,0===io&&po(mt)),t!==a&&(so=e,t=Tn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,109===r.charCodeAt(oo)?(t=vr,oo++):(t=a,0===io&&po(pt)),t===a&&(45===r.charCodeAt(oo)?(t=pr,oo++):(t=a,0===io&&po(dt))),t!==a&&(so=e,t=Dn()),e=t}(),n===a&&(n=function(){var e,t;return e=oo,77===r.charCodeAt(oo)?(t=ir,oo++):(t=a,0===io&&po(lt)),t===a&&(t=""),t!==a&&(so=e,t=qn()),e=t}())))))))))))))),n!==a){for(o=[],(s=ko())===a&&(s=Lo());s!==a;)o.push(s),(s=ko())===a&&(s=Lo());t=n=[n,o]}else oo=t,t=a;return t!==a&&(so=e,t=Mn(t)),t}function ko(){var e,t,n,o,s;return e=oo,40===r.charCodeAt(oo)?(t=xr,oo++):(t=a,0===io&&po(St)),t===a&&(t=null),r.substr(oo,4)===Sr?(n=Sr,oo+=4):(n=a,0===io&&po(Et)),n!==a?(re.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(jt)),o!==a?(41===r.charCodeAt(oo)?(s=Er,oo++):(s=a,0===io&&po(Vt)),s===a&&(s=null),so=e,e=Yn(o)):(oo=e,e=a)):(oo=e,e=a),e}function Lo(){var e,t,n,o,s;if(e=oo,40===r.charCodeAt(oo)?(t=xr,oo++):(t=a,0===io&&po(St)),t===a&&(t=null),r.substr(oo,3)===jr?(n=jr,oo+=3):(n=a,0===io&&po(Ft)),n!==a){if(o=[],zr.test(r.charAt(oo))?(s=r.charAt(oo),oo++):(s=a,0===io&&po(qe)),s!==a)for(;s!==a;)o.push(s),zr.test(r.charAt(oo))?(s=r.charAt(oo),oo++):(s=a,0===io&&po(qe));else o=a;o!==a?(41===r.charCodeAt(oo)?(s=Er,oo++):(s=a,0===io&&po(Vt)),s===a&&(s=null),so=e,e=Zn(o)):(oo=e,e=a)}else oo=e,e=a;return e}function Oo(){var e,t,n,o;return e=oo,t=oo,94===r.charCodeAt(oo)?(n=Vr,oo++):(n=a,0===io&&po(Qt)),n!==a?(ee.test(r.charAt(oo))?(o=r.charAt(oo),oo++):(o=a,0===io&&po(Mt)),o!==a?t=n=[n,o]:(oo=t,t=a)):(oo=t,t=a),t===a&&(t=null),so=e,$n()}function Io(){var e,t,n,o;for(e=oo,t=[],39===r.charCodeAt(oo)?(n=Fr,oo++):(n=a,0===io&&po(Pt));n!==a;)t.push(n),39===r.charCodeAt(oo)?(n=Fr,oo++):(n=a,0===io&&po(Pt));for(n=[],44===r.charCodeAt(oo)?(o=Qr,oo++):(o=a,0===io&&po(qt));o!==a;)n.push(o),44===r.charCodeAt(oo)?(o=Qr,oo++):(o=a,0===io&&po(qt));return so=e,ro(t,n)}function Ro(){var e,t;for(io++,e=[],te.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(Bt));t!==a;)e.push(t),te.test(r.charAt(oo))?(t=r.charAt(oo),oo++):(t=a,0===io&&po(Bt));return io--,t=a,0===io&&po(Nt),e}function xo(){var e,t,n,o;for(io++,e=[],r.substr(oo,3)===Mr?(t=Mr,oo+=3):(t=a,0===io&&po(Jt)),t===a&&(t=oo,n=Ro(),8594===r.charCodeAt(oo)?(o=Pr,oo++):(o=a,0===io&&po(Tt)),o!==a?t=n=[n,o,Ro()]:(oo=t,t=a));t!==a;)e.push(t),r.substr(oo,3)===Mr?(t=Mr,oo+=3):(t=a,0===io&&po(Jt)),t===a&&(t=oo,n=Ro(),8594===r.charCodeAt(oo)?(o=Pr,oo++):(o=a,0===io&&po(Tt)),o!==a?t=n=[n,o,Ro()]:(oo=t,t=a));return io--,t=a,0===io&&po(Dt),e}let So=0,Eo="ionian";if((s=i())!==a&&oo===r.length)return s;throw s!==a&&oo<r.length&&po({type:"end"}),jo=co,Vo=uo<r.length?r.charAt(uo):null,Fo=uo<r.length?vo(uo,uo+1):vo(uo,uo),new n(n.buildMessage(jo,Vo),jo,Vo,Fo);var jo,Vo,Fo}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return r[n](s,s.exports,t),s.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{chord2mml:()=>g});var r=t(699);function e(r,e,t){for(var n=e.length*t,o=0,s=e;o<s.length;o++)r[s[o]].noteLength=n;return r}var o=function(r,e,t){if(t||2===arguments.length)for(var n,o=0,s=e.length;o<s;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))};function s(r){return delete r.event,delete r.root,delete r.quality,delete r.inversion,delete r.octaveOffset,delete r.upperRoot,delete r.upperQuality,delete r.upperInversion,delete r.upperOctaveOffset,delete r.lowerRoot,delete r.lowerQuality,delete r.lowerInversion,delete r.lowerOctaveOffset,r}function a(r,e,t,n,o){var s=e.split(","),a=[];switch(s[0]){case"maj":a=[0,4,7];break;case"maj7":a=[0,4,7,11];break;case"min":a=[0,3,7];break;case"min7":a=[0,3,7,10];break;case"sus2":a=[0,2,7];break;case"sus4":a=[0,5,7];break;case"7sus2":a=[0,2,7,10];break;case"7sus4":a=[0,5,7,10];break;case"6":a=[0,4,7,9];break;case"7":a=[0,4,7,10];break;case"9":a=[0,4,7,10,14];break;case"11":a=[0,4,7,10,14,17];break;case"13":a=[0,4,7,10,14,17,21]}for(var l=0,f=s;l<f.length;l++)switch(f[l]){case"omit1":a=a.filter((function(r){return 0!==r}));break;case"omit3":a=a.filter((function(r){return![3,4].includes(r)}));break;case"omit5":a=a.filter((function(r){return 7!==r}));break;case"add2":a=u(a,2);break;case"add9":a=u(a,14);break;case"add4":a=u(a,5);break;case"add11":a=u(a,17);break;case"add6":a=u(a,9);break;case"add13":a=u(a,21)}return a=i(a,r),i(a=c(a,t,n),12*o)}function u(r,e){return r.includes(e)||(r.push(e),r.sort((function(r,e){return r-e}))),r}function c(r,e,t){switch(e){case"1st inv":r=v(r,1);break;case"2nd inv":r=v(r,2);break;case"3rd inv":r=v(r,3)}switch(t){case"drop2":r=function(r){if(r.length<2)return r;var e=r[r.length-2]-12;return r.splice(r.length-2,1),r.unshift(e),r}(r);break;case"drop4":r=function(r){if(r.length<4)return r;var e=r[r.length-4]-12;return r.splice(r.length-4,1),r.unshift(e),r}(r);break;case"drop2and4":r=function(r){if(r.length<4)return r;var e=r[r.length-2]-12,t=r[r.length-4]-12;return r.splice(r.length-2,1),r.splice(r.length-4+1,1),r.unshift(e),r.unshift(t),r}(r)}return r}function i(r,e){for(var t=0;t<r.length;t++)r[t]+=e;return r}function l(r,e,t,n,o,s,a){var u=[];u.push(t+12*a);var i=f(r,e,t,s);return i=c(i,n,o),u.push.apply(u,i),u}function f(r,e,t,n){var o=a(r,e,"root inv","close",n);return r<=t&&(o=i(o,12)),o}function h(r,e,t,n,o){var s=[];if("root"==n){s.push(r);var u=f(r,e,r,o);u=b(u,t),s.push.apply(s,u),s=i(s,-12)}else s=b(s=a(r,e,"root inv","close",o),t);return s}function b(r,e){for(var t=!1,n=0,o=r;n<o.length;n++){if(o[n],(r[0]%12+12)%12==(e%12+12)%12){t=!0;break}r.push(r.shift())}if(t)return p(r);throw new Error("ERROR : ".concat(JSON.stringify(r)," を転回しようとしましたが、chordに ").concat(JSON.stringify(e)," が含まれていません。chordに含まれるnoteを指定してください。"))}function v(r,e){for(var t=0;t<e;t++)r.push(r.shift());return p(r)}function p(r){for(var e=-128,t=0;t<r.length;t++){for(var n=-128;n<128&&!(r[t]>e);n+=12)r[t]+=12;e=r[t]}return r}function d(r,e,t,n,s,u,c,i){var l=a(r,e,t,"close",c),f=a(n,s,u,"close",i),h=o(o([],f,!0),l,!0);return p(h)}function A(r,e,t){var n=function(r,e,t){for(var n=e.map((function(e){return e+r})).map((function(r){return r%12})).sort((function(r,e){return r-e})),o=0;o<t.length;o++)if(JSON.stringify(t[o])===JSON.stringify(n))return o;throw new Error("ERROR : isSharpByKeyAndScale searchIonians")}(r,e,t);switch(n){case 0:case 2:case 4:case 7:case 9:case 11:return!0;case 1:case 3:case 5:case 6:case 8:case 10:return!1;default:throw new Error("ERROR : isSharpByKeyAndScale")}}var g={parse:r.parse};g.parse=function(t){var n=(0,r.parse)(t);return function(r){for(var e=function(r){for(var e=[],t=function(t){var n=r.map((function(r){return(r+t)%12}));e.push(n)},n=0;n<12;n++)t(n);return e}([0,2,4,5,7,9,11]).map((function(r){return r.sort((function(r,e){return r-e}))})),t="",n={event:"key",root:"C",sharpLength:0,flatLength:0,offset:0},o={event:"scale",offsets:[0,2,4,5,7,9,11]},s=A(n.offset,o.offsets,e),a=0,u=r;a<u.length;a++){var c=u[a];switch(c.event){case"inline mml":t+=c.mml;continue;case"bar":t+="/*|*/";continue;case"key":s=A((n=c).offset,o.offsets,e);continue;case"scale":o=c,s=A(n.offset,o.offsets,e);continue}var i=c.notes;if(i){var l=0;i.length&&(t+="'");for(var f=i[0];f<0;)f+=12,t+=">",l--;for(var h=0;h<i.length;h++){for(var b=i[h],v=Math.floor(b/12);v>l;)t+="<",l++;if(s)switch((b%12+12)%12){case 0:t+="c";break;case 1:t+="c+";break;case 2:t+="d";break;case 3:t+="d+";break;case 4:t+="e";break;case 5:t+="f";break;case 6:t+="f+";break;case 7:t+="g";break;case 8:t+="g+";break;case 9:t+="a";break;case 10:t+="a+";break;case 11:t+="b"}else switch((b%12+12)%12){case 0:t+="c";break;case 1:t+="d-";break;case 2:t+="d";break;case 3:t+="e-";break;case 4:t+="e";break;case 5:t+="f";break;case 6:t+="g-";break;case 7:t+="g";break;case 8:t+="a-";break;case 9:t+="a";break;case 10:t+="b-";break;case 11:t+="b"}!h&&c.noteLength&&(t+=c.noteLength)}i.length&&(t+="'")}}return t}(function(r){for(var e,t,n,o,u=[],c="root inv",f="close",b="no bass",v=0,p=0,A=0,g=r;A<g.length;A++){var w=g[A];switch(w.event){case"chord":w.notes=a(w.root,w.quality,null!==(e=w.inversion)&&void 0!==e?e:c,f,v+w.octaveOffset),w=s(w),u.push(w);break;case"chord over bass note":w.notes=l(w.upperRoot,w.upperQuality,w.lowerRoot,null!==(t=w.upperInversion)&&void 0!==t?t:c,f,v+w.upperOctaveOffset,p+w.lowerOctaveOffset),w.notes=i(w.notes,-12),w=s(w),u.push(w);break;case"inversion":w.notes=h(w.upperRoot,w.upperQuality,w.lowerRoot,b,v+w.upperOctaveOffset),w=s(w),u.push(w);break;case"polychord":w.notes=d(w.upperRoot,w.upperQuality,null!==(n=w.upperInversion)&&void 0!==n?n:c,w.lowerRoot,w.lowerQuality,null!==(o=w.lowerInversion)&&void 0!==o?o:c,v+w.upperOctaveOffset,p+w.lowerOctaveOffset),w.notes=i(w.notes,-12),w=s(w),u.push(w);break;case"change inversion mode to root inv":c="root inv";break;case"change inversion mode to 1st inv":c="1st inv";break;case"change inversion mode to 2nd inv":c="2nd inv";break;case"change inversion mode to 3rd inv":c="3rd inv";break;case"change open harmony mode to close":f="close";break;case"change open harmony mode to drop2":f="drop2";break;case"change open harmony mode to drop4":f="drop4";break;case"change open harmony mode to drop2and4":f="drop2and4";break;case"change bass play mode to root":b="root";break;case"change bass play mode to no bass":b="no bass";break;case"octave up":v++,p++;break;case"octave up upper":v++;break;case"octave up lower":p++;break;case"octave down":v--,p--;break;case"octave down upper":v--;break;case"octave down lower":p--;break;default:u.push(w)}}return u}(n=function(r){for(var t="chord over bass note",n="no bass",o=0,s=r;o<s.length;o++){var a=s[o];switch(a.event){case"change slash chord mode to chord over bass note":t="chord over bass note";break;case"change slash chord mode to inversion":t="inversion";break;case"change slash chord mode to polychord":t="polychord";break;case"slash chord":a.event=t;break;case"change bass play mode to root":n="root";break;case"change bass play mode to no bass":n="no bass";break;case"chord":"root"==n&&(a.event="chord over bass note",a.upperRoot=a.root,a.upperQuality=a.quality,a.upperInversion=a.inversion,a.upperOctaveOffset=a.octaveOffset,a.lowerRoot=a.root,a.lowerQuality=a.quality,a.lowerInversion=a.inversion,a.lowerOctaveOffset=a.octaveOffset,delete a.root,delete a.quality,delete a.inversion,delete a.octaveOffset)}}return r=function(r){for(var t=0,n=1,o=[],s=0;s<r.length;s++){var a=r[s];switch(a.event){case"chord":case"chord over bass note":case"inversion":case"polychord":a.noteLength=1,o.push(s);break;case"bar":t++,r=e(r,o,n),o=[],n=1;break;case"bar slash":t++,r=e(r,o,n=2),o=[]}}return t&&(r=e(r,o,n)),r}(r),r}(n)))}})(),n})()));