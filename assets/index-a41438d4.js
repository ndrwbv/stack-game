(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="158",Eo=0,xs=1,wo=2,Wa=1,To=2,dn=3,Cn=0,Ve=1,pn=2,An=0,fi=1,ys=2,Ms=3,Ss=4,Ao=5,Fn=100,bo=101,Ro=102,Es=103,ws=104,Co=200,Po=201,Lo=202,Io=203,Qr=204,Jr=205,Uo=206,Do=207,No=208,Fo=209,Bo=210,Oo=211,zo=212,Vo=213,Go=214,Ho=0,Wo=1,ko=2,or=3,Xo=4,qo=5,Yo=6,jo=7,us=0,Zo=1,Ko=2,bn=0,$o=1,Qo=2,Jo=3,tl=4,el=5,ka=300,pi=301,mi=302,ts=303,es=304,dr=306,ns=1e3,nn=1001,is=1002,Be=1003,Ts=1004,_r=1005,je=1006,nl=1007,Ri=1008,Rn=1009,il=1010,rl=1011,fs=1012,Xa=1013,wn=1014,Tn=1015,Ci=1016,qa=1017,Ya=1018,On=1020,sl=1021,rn=1023,al=1024,ol=1025,zn=1026,vi=1027,ll=1028,ja=1029,cl=1030,Za=1031,Ka=1033,xr=33776,yr=33777,Mr=33778,Sr=33779,As=35840,bs=35841,Rs=35842,Cs=35843,hl=36196,Ps=37492,Ls=37496,Is=37808,Us=37809,Ds=37810,Ns=37811,Fs=37812,Bs=37813,Os=37814,zs=37815,Vs=37816,Gs=37817,Hs=37818,Ws=37819,ks=37820,Xs=37821,Er=36492,qs=36494,Ys=36495,ul=36283,js=36284,Zs=36285,Ks=36286,$a=3e3,Vn=3001,fl=3200,dl=3201,Qa=0,pl=1,Ze="",Ie="srgb",_n="srgb-linear",ds="display-p3",pr="display-p3-linear",lr="linear",ge="srgb",cr="rec709",hr="p3",Yn=7680,$s=519,ml=512,vl=513,gl=514,_l=515,xl=516,yl=517,Ml=518,Sl=519,Qs=35044,Js="300 es",rs=1035,mn=2e3,ur=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,ss=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function El(i,t){return(i%t+t)%t}function Tr(i,t,e){return(1-e)*i+e*t}function ta(i){return(i&i-1)===0&&i!==0}function as(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class me{constructor(t=0,e=0){me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,a,r,s,o,c,u){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,u)}set(t,e,n,a,r,s,o,c,u){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],f=n[2],p=n[5],v=n[8],g=a[0],m=a[3],d=a[6],x=a[1],y=a[4],_=a[7],E=a[2],P=a[5],D=a[8];return r[0]=s*g+o*x+c*E,r[3]=s*m+o*y+c*P,r[6]=s*d+o*_+c*D,r[1]=u*g+h*x+l*E,r[4]=u*m+h*y+l*P,r[7]=u*d+h*_+l*D,r[2]=f*g+p*x+v*E,r[5]=f*m+p*y+v*P,r[8]=f*d+p*_+v*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*s*h-e*o*u-n*r*h+n*o*c+a*r*u-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*s-o*u,f=o*c-h*r,p=u*r-s*c,v=e*l+n*f+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*u-h*n)*g,t[2]=(o*n-a*s)*g,t[3]=f*g,t[4]=(h*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-u*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*s+u*o)+s+t,-a*u,a*c,-a*(-u*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new oe;function Ja(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wl(){const i=fr("canvas");return i.style.display="block",i}const ea={};function bi(i){i in ea||(ea[i]=!0,console.warn(i))}const na=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ia=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[_n]:{transfer:lr,primaries:cr,toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:ge,primaries:cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pr]:{transfer:lr,primaries:hr,toReference:i=>i.applyMatrix3(ia),fromReference:i=>i.applyMatrix3(na)},[ds]:{transfer:ge,primaries:hr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ia),fromReference:i=>i.applyMatrix3(na).convertLinearToSRGB()}},Tl=new Set([_n,pr]),ve={enabled:!0,_workingColorSpace:_n,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ni[t].toReference,a=Ni[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ni[i].primaries},getTransfer:function(i){return i===Ze?lr:Ni[i].transfer}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class to{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=fr("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=di(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Al=0;class eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=Pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Rr(a[s].image)):r.push(Rr(a[s]))}else r=Rr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bl=0;class qe extends _i{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=nn,a=nn,r=je,s=Ri,o=rn,c=Rn,u=qe.DEFAULT_ANISOTROPY,h=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=Pi(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?Ie:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Vn:$a}set encoding(t){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vn?Ie:Ze}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=ka;qe.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,a=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,u=c[0],h=c[4],l=c[8],f=c[1],p=c[5],v=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,_=(p+1)/2,E=(d+1)/2,P=(h+f)/4,D=(l+g)/4,O=(v+m)/4;return y>_&&y>E?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=P/n,r=D/n):_>E?_<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),n=P/a,r=O/a):E<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(E),n=D/r,a=O/r),this.set(n,a,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(f-h)/x,this.w=Math.acos((u+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rl extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?Ie:Ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qe(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class no extends qe{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Be,this.minFilter=Be,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends qe{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Be,this.minFilter=Be,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],u=n[a+1],h=n[a+2],l=n[a+3];const f=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==f||u!==p||h!==v){let m=1-o;const d=c*f+u*p+h*v+l*g,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const E=Math.sqrt(y),P=Math.atan2(E,d*x);m=Math.sin(m*P)/E,o=Math.sin(o*P)/E}const _=o*x;if(c=c*m+f*_,u=u*m+p*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const E=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=E,u*=E,h*=E,l*=E}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],u=n[a+2],h=n[a+3],l=r[s],f=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+h*l+c*p-u*f,t[e+1]=c*v+h*f+u*l-o*p,t[e+2]=u*v+h*p+o*f-c*l,t[e+3]=h*v-o*l-c*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(a/2),l=o(r/2),f=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=f*h*l+u*p*v,this._y=u*p*l-f*h*v,this._z=u*h*v+f*p*l,this._w=u*h*l-f*p*v;break;case"YXZ":this._x=f*h*l+u*p*v,this._y=u*p*l-f*h*v,this._z=u*h*v-f*p*l,this._w=u*h*l+f*p*v;break;case"ZXY":this._x=f*h*l-u*p*v,this._y=u*p*l+f*h*v,this._z=u*h*v+f*p*l,this._w=u*h*l-f*p*v;break;case"ZYX":this._x=f*h*l-u*p*v,this._y=u*p*l+f*h*v,this._z=u*h*v-f*p*l,this._w=u*h*l+f*p*v;break;case"YZX":this._x=f*h*l+u*p*v,this._y=u*p*l+f*h*v,this._z=u*h*v-f*p*l,this._w=u*h*l-f*p*v;break;case"XZY":this._x=f*h*l-u*p*v,this._y=u*p*l-f*h*v,this._z=u*h*v+f*p*l,this._w=u*h*l+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],f=n+o+l;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+u)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-u)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+s*o+a*u-r*c,this._y=a*h+s*c+r*o-n*u,this._z=r*h+s*u+n*c-a*o,this._w=s*h-n*o-a*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=s*l+this._w*f,this._x=n*l+this._x*f,this._y=a*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,e=0,n=0){lt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,u=2*(s*a-o*n),h=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*u+s*l-o*h,this.y=n+c*h+o*u-r*l,this.z=a+c*l+r*h-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new lt,ra=new Li;class Ii{constructor(t=new lt(1/0,1/0,1/0),e=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,$e):$e.fromBufferAttribute(r,s),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fi.copy(n.boundingBox)),Fi.applyMatrix4(t.matrixWorld),this.union(Fi)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Bi.subVectors(this.max,Si),Zn.subVectors(t.a,Si),Kn.subVectors(t.b,Si),$n.subVectors(t.c,Si),xn.subVectors(Kn,Zn),yn.subVectors($n,Kn),Pn.subVectors(Zn,$n);let e=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-Pn.z,Pn.y,xn.z,0,-xn.x,yn.z,0,-yn.x,Pn.z,0,-Pn.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-Pn.y,Pn.x,0];return!Pr(e,Zn,Kn,$n,Bi)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,Zn,Kn,$n,Bi))?!1:(Oi.crossVectors(xn,yn),e=[Oi.x,Oi.y,Oi.z],Pr(e,Zn,Kn,$n,Bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],$e=new lt,Fi=new Ii,Zn=new lt,Kn=new lt,$n=new lt,xn=new lt,yn=new lt,Pn=new lt,Si=new lt,Bi=new lt,Oi=new lt,Ln=new lt;function Pr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Ln.fromArray(i,r);const o=a.x*Math.abs(Ln.x)+a.y*Math.abs(Ln.y)+a.z*Math.abs(Ln.z),c=t.dot(Ln),u=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Pl=new Ii,Ei=new lt,Lr=new lt;class ps{constructor(t=new lt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pl.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Ei,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Lr)),this.expandByPoint(Ei.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new lt,Ir=new lt,zi=new lt,Mn=new lt,Ur=new lt,Vi=new lt,Dr=new lt;class Ll{constructor(t=new lt,e=new lt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Ir.copy(t).add(e).multiplyScalar(.5),zi.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,s=-this.direction.dot(zi),o=Mn.dot(this.direction),c=-Mn.dot(zi),u=Mn.lengthSq(),h=Math.abs(1-s*s);let l,f,p,v;if(h>0)if(l=s*c-o,f=s*o-c,v=r*h,l>=0)if(f>=-v)if(f<=v){const g=1/h;l*=g,f*=g,p=l*(l+s*f+2*o)+f*(s*l+f+2*c)+u}else f=r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+u;else f=-r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+u;else f<=-v?(l=Math.max(0,-(-s*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+u):f<=v?(l=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+u):(l=Math.max(0,-(s*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+u);else f=s>0?-r:r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Ir).addScaledVector(zi,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),a=cn.dot(cn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,a=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,a=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,a,r){Ur.subVectors(e,t),Vi.subVectors(n,t),Dr.crossVectors(Ur,Vi);let s=this.direction.dot(Dr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Mn.subVectors(this.origin,t);const c=o*this.direction.dot(Vi.crossVectors(Mn,Vi));if(c<0)return null;const u=o*this.direction.dot(Ur.cross(Mn));if(u<0||c+u>s)return null;const h=-o*Mn.dot(Dr);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,a,r,s,o,c,u,h,l,f,p,v,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,u,h,l,f,p,v,g,m)}set(t,e,n,a,r,s,o,c,u,h,l,f,p,v,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=l,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),s=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),u=Math.sin(a),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+v*u,e[5]=f-g*u,e[9]=-o*c,e[2]=g-f*u,e[6]=v+p*u,e[10]=s*c}else if(t.order==="YXZ"){const f=c*h,p=c*l,v=u*h,g=u*l;e[0]=f+g*o,e[4]=v*o-p,e[8]=s*u,e[1]=s*l,e[5]=s*h,e[9]=-o,e[2]=p*o-v,e[6]=g+f*o,e[10]=s*c}else if(t.order==="ZXY"){const f=c*h,p=c*l,v=u*h,g=u*l;e[0]=f-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*h,e[9]=g-f*o,e[2]=-s*u,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const f=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*u-p,e[8]=f*u+g,e[1]=c*l,e[5]=g*u+f,e[9]=p*u-v,e[2]=-u,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const f=s*c,p=s*u,v=o*c,g=o*u;e[0]=c*h,e[4]=g-f*l,e[8]=v*l+p,e[1]=l,e[5]=s*h,e[9]=-o*h,e[2]=-u*h,e[6]=p*l+v,e[10]=f-g*l}else if(t.order==="XZY"){const f=s*c,p=s*u,v=o*c,g=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=f*l+g,e[5]=s*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Il,t,Ul)}lookAt(t,e,n){const a=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Sn.crossVectors(n,We),Sn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Sn.crossVectors(n,We)),Sn.normalize(),Gi.crossVectors(We,Sn),a[0]=Sn.x,a[4]=Gi.x,a[8]=We.x,a[1]=Sn.y,a[5]=Gi.y,a[9]=We.y,a[2]=Sn.z,a[6]=Gi.z,a[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],x=n[3],y=n[7],_=n[11],E=n[15],P=a[0],D=a[4],O=a[8],M=a[12],w=a[1],L=a[5],V=a[9],H=a[13],N=a[2],k=a[6],tt=a[10],F=a[14],B=a[3],Z=a[7],W=a[11],T=a[15];return r[0]=s*P+o*w+c*N+u*B,r[4]=s*D+o*L+c*k+u*Z,r[8]=s*O+o*V+c*tt+u*W,r[12]=s*M+o*H+c*F+u*T,r[1]=h*P+l*w+f*N+p*B,r[5]=h*D+l*L+f*k+p*Z,r[9]=h*O+l*V+f*tt+p*W,r[13]=h*M+l*H+f*F+p*T,r[2]=v*P+g*w+m*N+d*B,r[6]=v*D+g*L+m*k+d*Z,r[10]=v*O+g*V+m*tt+d*W,r[14]=v*M+g*H+m*F+d*T,r[3]=x*P+y*w+_*N+E*B,r[7]=x*D+y*L+_*k+E*Z,r[11]=x*O+y*V+_*tt+E*W,r[15]=x*M+y*H+_*F+E*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],d=t[15];return v*(+r*c*l-a*u*l-r*o*f+n*u*f+a*o*p-n*c*p)+g*(+e*c*p-e*u*f+r*s*f-a*s*p+a*u*h-r*c*h)+m*(+e*u*l-e*o*p-r*s*l+n*s*p+r*o*h-n*u*h)+d*(-a*o*h-e*c*l+e*o*f+a*s*l-n*s*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],d=t[15],x=l*m*u-g*f*u+g*c*p-o*m*p-l*c*d+o*f*d,y=v*f*u-h*m*u-v*c*p+s*m*p+h*c*d-s*f*d,_=h*g*u-v*l*u+v*o*p-s*g*p-h*o*d+s*l*d,E=v*l*c-h*g*c-v*o*f+s*g*f+h*o*m-s*l*m,P=e*x+n*y+a*_+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=x*D,t[1]=(g*f*r-l*m*r-g*a*p+n*m*p+l*a*d-n*f*d)*D,t[2]=(o*m*r-g*c*r+g*a*u-n*m*u-o*a*d+n*c*d)*D,t[3]=(l*c*r-o*f*r-l*a*u+n*f*u+o*a*p-n*c*p)*D,t[4]=y*D,t[5]=(h*m*r-v*f*r+v*a*p-e*m*p-h*a*d+e*f*d)*D,t[6]=(v*c*r-s*m*r-v*a*u+e*m*u+s*a*d-e*c*d)*D,t[7]=(s*f*r-h*c*r+h*a*u-e*f*u-s*a*p+e*c*p)*D,t[8]=_*D,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*d-e*l*d)*D,t[10]=(s*g*r-v*o*r+v*n*u-e*g*u-s*n*d+e*o*d)*D,t[11]=(h*o*r-s*l*r-h*n*u+e*l*u+s*n*p-e*o*p)*D,t[12]=E*D,t[13]=(h*g*a-v*l*a+v*n*f-e*g*f-h*n*m+e*l*m)*D,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*D,t[15]=(s*l*a-h*o*a+h*n*c-e*l*c-s*n*f+e*o*f)*D,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,u=r*s,h=r*o;return this.set(u*s+n,u*o-a*c,u*c+a*o,0,u*o+a*c,h*o+n,h*c-a*s,0,u*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,u=r+r,h=s+s,l=o+o,f=r*u,p=r*h,v=r*l,g=s*h,m=s*l,d=o*l,x=c*u,y=c*h,_=c*l,E=n.x,P=n.y,D=n.z;return a[0]=(1-(g+d))*E,a[1]=(p+_)*E,a[2]=(v-y)*E,a[3]=0,a[4]=(p-_)*P,a[5]=(1-(f+d))*P,a[6]=(m+x)*P,a[7]=0,a[8]=(v+y)*D,a[9]=(m-x)*D,a[10]=(1-(f+g))*D,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=Qn.set(a[0],a[1],a[2]).length();const s=Qn.set(a[4],a[5],a[6]).length(),o=Qn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Qe.copy(this);const u=1/r,h=1/s,l=1/o;return Qe.elements[0]*=u,Qe.elements[1]*=u,Qe.elements[2]*=u,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=l,Qe.elements[9]*=l,Qe.elements[10]*=l,e.setFromRotationMatrix(Qe),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=mn){const c=this.elements,u=2*r/(e-t),h=2*r/(n-a),l=(e+t)/(e-t),f=(n+a)/(n-a);let p,v;if(o===mn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===ur)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=mn){const c=this.elements,u=1/(e-t),h=1/(n-a),l=1/(s-r),f=(e+t)*u,p=(n+a)*h;let v,g;if(o===mn)v=(s+r)*l,g=-2*l;else if(o===ur)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new lt,Qe=new Ae,Il=new lt(0,0,0),Ul=new lt(1,1,1),Sn=new lt,Gi=new lt,We=new lt,sa=new Ae,aa=new Li;class mr{constructor(t=0,e=0,n=0,a=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],u=a[5],h=a[9],l=a[2],f=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return aa.setFromEuler(this),this.setFromQuaternion(aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dl=0;const oa=new lt,Jn=new Li,hn=new Ae,Hi=new lt,wi=new lt,Nl=new lt,Fl=new Li,la=new lt(1,0,0),ca=new lt(0,1,0),ha=new lt(0,0,1),Bl={type:"added"},Ol={type:"removed"};class Ne extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new lt,e=new mr,n=new Li,a=new lt(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ae},normalMatrix:{value:new oe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(la,t)}rotateY(t){return this.rotateOnAxis(ca,t)}rotateZ(t){return this.rotateOnAxis(ha,t)}translateOnAxis(t,e){return oa.copy(t).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(la,t)}translateY(t){return this.translateOnAxis(ca,t)}translateZ(t){return this.translateOnAxis(ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hi.copy(t):Hi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(wi,Hi,this.up):hn.lookAt(Hi,wi,this.up),this.quaternion.setFromRotationMatrix(hn),a&&(hn.extractRotation(a.matrixWorld),Jn.setFromRotationMatrix(hn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ol)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let a=0,r=this.children.length;a<r;a++){const s=this.children[a].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Nl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Fl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),u=s(t.textures),h=s(t.images),l=s(t.shapes),f=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ne.DEFAULT_UP=new lt(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new lt,un=new lt,Nr=new lt,fn=new lt,ti=new lt,ei=new lt,ua=new lt,Fr=new lt,Br=new lt,Or=new lt;let Wi=!1;class tn{constructor(t=new lt,e=new lt,n=new lt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Je.subVectors(t,e),a.cross(Je);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Je.subVectors(a,e),un.subVectors(n,e),Nr.subVectors(t,e);const s=Je.dot(Je),o=Je.dot(un),c=Je.dot(Nr),u=un.dot(un),h=un.dot(Nr),l=s*u-o*o;if(l===0)return r.set(-2,-1,-1);const f=1/l,p=(u*c-o*h)*f,v=(s*h-o*c)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,a,r,s,o,c){return Wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wi=!0),this.getInterpolation(t,e,n,a,r,s,o,c)}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,fn),c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(s,fn.y),c.addScaledVector(o,fn.z),c}static isFrontFacing(t,e,n,a){return Je.subVectors(n,e),un.subVectors(t,e),Je.cross(un).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return Wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wi=!0),tn.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}getInterpolation(t,e,n,a,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;ti.subVectors(a,n),ei.subVectors(r,n),Fr.subVectors(t,n);const c=ti.dot(Fr),u=ei.dot(Fr);if(c<=0&&u<=0)return e.copy(n);Br.subVectors(t,a);const h=ti.dot(Br),l=ei.dot(Br);if(h>=0&&l<=h)return e.copy(a);const f=c*l-h*u;if(f<=0&&c>=0&&h<=0)return s=c/(c-h),e.copy(n).addScaledVector(ti,s);Or.subVectors(t,r);const p=ti.dot(Or),v=ei.dot(Or);if(v>=0&&p<=v)return e.copy(r);const g=p*u-c*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(ei,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return ua.subVectors(r,a),o=(l-h)/(l-h+(p-v)),e.copy(a).addScaledVector(ua,o);const d=1/(m+g+f);return s=g*d,o=f*d,e.copy(n).addScaledVector(ti,s).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ki={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=ve.workingColorSpace){if(t=El(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=zr(s,r,t+1/3),this.g=zr(s,r,t),this.b=zr(s,r,t-1/3)}return ve.toWorkingColorSpace(this,a),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=ro[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ve.fromWorkingColorSpace(De.copy(this),t),Math.round(ze(De.r*255,0,255))*65536+Math.round(ze(De.g*255,0,255))*256+Math.round(ze(De.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(De.copy(this),e);const n=De.r,a=De.g,r=De.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,u;const h=(o+s)/2;if(o===s)c=0,u=0;else{const l=s-o;switch(u=h<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ie){ve.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,a=De.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ki);const n=Tr(En.h,ki.h,e),a=Tr(En.s,ki.s,e),r=Tr(En.l,ki.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new pe;pe.NAMES=ro;let zl=0;class Ui extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=fi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=Jr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$s,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$s&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class so extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new lt,Xi=new me;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qs,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ao extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oo extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gn extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vl=0;const Ye=new Ae,Vr=new Ne,ni=new lt,ke=new Ii,Ti=new Ii,Pe=new lt;class qn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ja(t)?oo:ao)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new lt,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(ke.min,Ti.min),ke.expandByPoint(Pe),Pe.addVectors(ke.max,Ti.max),ke.expandByPoint(Pe)):(ke.expandByPoint(Ti.min),ke.expandByPoint(Ti.max))}ke.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Pe.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Pe));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Pe.fromBufferAttribute(o,u),c&&(ni.fromBufferAttribute(t,u),Pe.add(ni)),a=Math.max(a,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,s=e.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let w=0;w<o;w++)u[w]=new lt,h[w]=new lt;const l=new lt,f=new lt,p=new lt,v=new me,g=new me,m=new me,d=new lt,x=new lt;function y(w,L,V){l.fromArray(a,w*3),f.fromArray(a,L*3),p.fromArray(a,V*3),v.fromArray(s,w*2),g.fromArray(s,L*2),m.fromArray(s,V*2),f.sub(l),p.sub(l),g.sub(v),m.sub(v);const H=1/(g.x*m.y-m.x*g.y);isFinite(H)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(H),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(H),u[w].add(d),u[L].add(d),u[V].add(d),h[w].add(x),h[L].add(x),h[V].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let w=0,L=_.length;w<L;++w){const V=_[w],H=V.start,N=V.count;for(let k=H,tt=H+N;k<tt;k+=3)y(n[k+0],n[k+1],n[k+2])}const E=new lt,P=new lt,D=new lt,O=new lt;function M(w){D.fromArray(r,w*3),O.copy(D);const L=u[w];E.copy(L),E.sub(D.multiplyScalar(D.dot(L))).normalize(),P.crossVectors(O,L);const H=P.dot(h[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=H}for(let w=0,L=_.length;w<L;++w){const V=_[w],H=V.start,N=V.count;for(let k=H,tt=H+N;k<tt;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const a=new lt,r=new lt,s=new lt,o=new lt,c=new lt,u=new lt,h=new lt,l=new lt;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)a.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,f=new u.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let d=0;d<h;d++)f[v++]=u[p++]}return new an(f,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const f=u[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const u=s[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,f=u.length;l<f;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(a[c]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let f=0,p=l.length;f<p;f++)h.push(l[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let u=0,h=s.length;u<h;u++){const l=s[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new Ae,In=new Ll,qi=new ps,da=new lt,ii=new lt,ri=new lt,si=new lt,Gr=new lt,Yi=new lt,ji=new me,Zi=new me,Ki=new me,pa=new lt,ma=new lt,va=new lt,$i=new lt,Qi=new lt;class vn extends Ne{constructor(t=new qn,e=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Yi.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(Gr.fromBufferAttribute(l,t),s?Yi.addScaledVector(Gr,h):Yi.addScaledVector(Gr.sub(e),h))}e.add(Yi)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(qi.containsPoint(In.origin)===!1&&(In.intersectSphere(qi,da)===null||In.origin.distanceToSquared(da)>(t.far-t.near)**2))&&(fa.copy(r).invert(),In.copy(t.ray).applyMatrix4(fa),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,E=y;_<E;_+=3){const P=o.getX(_),D=o.getX(_+1),O=o.getX(_+2);a=Ji(this,d,t,n,u,h,l,P,D,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);a=Ji(this,s,t,n,u,h,l,x,y,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,E=y;_<E;_+=3){const P=_,D=_+1,O=_+2;a=Ji(this,d,t,n,u,h,l,P,D,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=m,y=m+1,_=m+2;a=Ji(this,s,t,n,u,h,l,x,y,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Gl(i,t,e,n,a,r,s,o){let c;if(t.side===Ve?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===Cn,o),c===null)return null;Qi.copy(o),Qi.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Qi);return u<e.near||u>e.far?null:{distance:u,point:Qi.clone(),object:i}}function Ji(i,t,e,n,a,r,s,o,c,u){i.getVertexPosition(o,ii),i.getVertexPosition(c,ri),i.getVertexPosition(u,si);const h=Gl(i,t,e,n,ii,ri,si,$i);if(h){a&&(ji.fromBufferAttribute(a,o),Zi.fromBufferAttribute(a,c),Ki.fromBufferAttribute(a,u),h.uv=tn.getInterpolation($i,ii,ri,si,ji,Zi,Ki,new me)),r&&(ji.fromBufferAttribute(r,o),Zi.fromBufferAttribute(r,c),Ki.fromBufferAttribute(r,u),h.uv1=tn.getInterpolation($i,ii,ri,si,ji,Zi,Ki,new me),h.uv2=h.uv1),s&&(pa.fromBufferAttribute(s,o),ma.fromBufferAttribute(s,c),va.fromBufferAttribute(s,u),h.normal=tn.getInterpolation($i,ii,ri,si,pa,ma,va,new lt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new lt,materialIndex:0};tn.getNormal(ii,ri,si,l.normal),h.face=l}return h}class xi extends qn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],u=[],h=[],l=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(h,3)),this.setAttribute("uv",new Gn(l,2));function v(g,m,d,x,y,_,E,P,D,O,M){const w=_/D,L=E/O,V=_/2,H=E/2,N=P/2,k=D+1,tt=O+1;let F=0,B=0;const Z=new lt;for(let W=0;W<tt;W++){const T=W*L-H;for(let U=0;U<k;U++){const I=U*w-V;Z[g]=I*x,Z[m]=T*y,Z[d]=N,u.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[d]=P>0?1:-1,h.push(Z.x,Z.y,Z.z),l.push(U/D),l.push(1-W/O),F+=1}}for(let W=0;W<O;W++)for(let T=0;T<D;T++){const U=f+T+k*W,I=f+T+k*(W+1),C=f+(T+1)+k*(W+1),b=f+(T+1)+k*W;c.push(U,I,b),c.push(I,C,b),B+=6}o.addGroup(p,B,M),p+=B,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=gi(i[e]);for(const a in n)t[a]=n[a]}return t}function Hl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lo(i){return i.getRenderTarget()===null?i.outputColorSpace:ve.workingColorSpace}const Wl={clone:gi,merge:Fe};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Xl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Hl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class co extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends co{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/u,a*=s.width/c,n*=s.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class ql extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(ai,oi,t,e);a.layers=this.layers,this.add(a);const r=new en(ai,oi,t,e);r.layers=this.layers,this.add(r);const s=new en(ai,oi,t,e);s.layers=this.layers,this.add(s);const o=new en(ai,oi,t,e);o.layers=this.layers,this.add(o);const c=new en(ai,oi,t,e);c.layers=this.layers,this.add(c);const u=new en(ai,oi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const u of e)this.remove(u);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,u,h]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(l,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ho extends qe{constructor(t,e,n,a,r,s,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,a,r,s,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yl extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vn?Ie:Ze),this.texture=new ho(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new xi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:An});r.uniforms.tEquirect.value=e;const s=new vn(a,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=je),new ql(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const Hr=new lt,jl=new lt,Zl=new oe;class Dn{constructor(t=new lt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Hr.subVectors(n,e).cross(jl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zl.getNormalMatrix(t),a=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new ps,tr=new lt;class ms{constructor(t=new Dn,e=new Dn,n=new Dn,a=new Dn,r=new Dn,s=new Dn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],u=a[4],h=a[5],l=a[6],f=a[7],p=a[8],v=a[9],g=a[10],m=a[11],d=a[12],x=a[13],y=a[14],_=a[15];if(n[0].setComponents(c-r,f-u,m-p,_-d).normalize(),n[1].setComponents(c+r,f+u,m+p,_+d).normalize(),n[2].setComponents(c+s,f+h,m+v,_+x).normalize(),n[3].setComponents(c-s,f-h,m-v,_-x).normalize(),n[4].setComponents(c-o,f-l,m-g,_-y).normalize(),e===mn)n[5].setComponents(c+o,f+l,m+g,_+y).normalize();else if(e===ur)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(tr.x=a.normal.x>0?t.max.x:t.min.x,tr.y=a.normal.y>0?t.max.y:t.min.y,tr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uo(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kl(i,t){const e=t.isWebGL2,n=new WeakMap;function a(u,h){const l=u.array,f=u.usage,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,l,f),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,l){const f=h.array,p=h.updateRange;i.bindBuffer(l,u),p.count===-1?i.bufferSubData(l,0,f):(e?i.bufferSubData(l,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(l,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,a(u,h)):l.version<u.version&&(r(l.buffer,u,h),l.version=u.version)}return{get:s,remove:o,update:c}}class vs extends qn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),u=o+1,h=c+1,l=t/o,f=e/c,p=[],v=[],g=[],m=[];for(let d=0;d<h;d++){const x=d*f-s;for(let y=0;y<u;y++){const _=y*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const y=x+u*d,_=x+u*(d+1),E=x+1+u*(d+1),P=x+1+u*d;p.push(y,_,P),p.push(_,E,P)}this.setIndex(p),this.setAttribute("position",new Gn(v,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var $l=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ql=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ic=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_c=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ac=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ic=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,jc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$c=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ch=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ch=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ih=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,du=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Au=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:$l,alphahash_pars_fragment:Ql,alphamap_fragment:Jl,alphamap_pars_fragment:tc,alphatest_fragment:ec,alphatest_pars_fragment:nc,aomap_fragment:ic,aomap_pars_fragment:rc,begin_vertex:sc,beginnormal_vertex:ac,bsdfs:oc,iridescence_fragment:lc,bumpmap_pars_fragment:cc,clipping_planes_fragment:hc,clipping_planes_pars_fragment:uc,clipping_planes_pars_vertex:fc,clipping_planes_vertex:dc,color_fragment:pc,color_pars_fragment:mc,color_pars_vertex:vc,color_vertex:gc,common:_c,cube_uv_reflection_fragment:xc,defaultnormal_vertex:yc,displacementmap_pars_vertex:Mc,displacementmap_vertex:Sc,emissivemap_fragment:Ec,emissivemap_pars_fragment:wc,colorspace_fragment:Tc,colorspace_pars_fragment:Ac,envmap_fragment:bc,envmap_common_pars_fragment:Rc,envmap_pars_fragment:Cc,envmap_pars_vertex:Pc,envmap_physical_pars_fragment:Hc,envmap_vertex:Lc,fog_vertex:Ic,fog_pars_vertex:Uc,fog_fragment:Dc,fog_pars_fragment:Nc,gradientmap_pars_fragment:Fc,lightmap_fragment:Bc,lightmap_pars_fragment:Oc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Vc,lights_pars_begin:Gc,lights_toon_fragment:Wc,lights_toon_pars_fragment:kc,lights_phong_fragment:Xc,lights_phong_pars_fragment:qc,lights_physical_fragment:Yc,lights_physical_pars_fragment:jc,lights_fragment_begin:Zc,lights_fragment_maps:Kc,lights_fragment_end:$c,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:th,logdepthbuf_vertex:eh,map_fragment:nh,map_pars_fragment:ih,map_particle_fragment:rh,map_particle_pars_fragment:sh,metalnessmap_fragment:ah,metalnessmap_pars_fragment:oh,morphcolor_vertex:lh,morphnormal_vertex:ch,morphtarget_pars_vertex:hh,morphtarget_vertex:uh,normal_fragment_begin:fh,normal_fragment_maps:dh,normal_pars_fragment:ph,normal_pars_vertex:mh,normal_vertex:vh,normalmap_pars_fragment:gh,clearcoat_normal_fragment_begin:_h,clearcoat_normal_fragment_maps:xh,clearcoat_pars_fragment:yh,iridescence_pars_fragment:Mh,opaque_fragment:Sh,packing:Eh,premultiplied_alpha_fragment:wh,project_vertex:Th,dithering_fragment:Ah,dithering_pars_fragment:bh,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ch,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:Lh,shadowmap_vertex:Ih,shadowmask_pars_fragment:Uh,skinbase_vertex:Dh,skinning_pars_vertex:Nh,skinning_vertex:Fh,skinnormal_vertex:Bh,specularmap_fragment:Oh,specularmap_pars_fragment:zh,tonemapping_fragment:Vh,tonemapping_pars_fragment:Gh,transmission_fragment:Hh,transmission_pars_fragment:Wh,uv_pars_fragment:kh,uv_pars_vertex:Xh,uv_vertex:qh,worldpos_vertex:Yh,background_vert:jh,background_frag:Zh,backgroundCube_vert:Kh,backgroundCube_frag:$h,cube_vert:Qh,cube_frag:Jh,depth_vert:tu,depth_frag:eu,distanceRGBA_vert:nu,distanceRGBA_frag:iu,equirect_vert:ru,equirect_frag:su,linedashed_vert:au,linedashed_frag:ou,meshbasic_vert:lu,meshbasic_frag:cu,meshlambert_vert:hu,meshlambert_frag:uu,meshmatcap_vert:fu,meshmatcap_frag:du,meshnormal_vert:pu,meshnormal_frag:mu,meshphong_vert:vu,meshphong_frag:gu,meshphysical_vert:_u,meshphysical_frag:xu,meshtoon_vert:yu,meshtoon_frag:Mu,points_vert:Su,points_frag:Eu,shadow_vert:wu,shadow_frag:Tu,sprite_vert:Au,sprite_frag:bu},Ot={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},sn={basic:{uniforms:Fe([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Fe([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new pe(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Fe([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Fe([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Fe([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new pe(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Fe([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Fe([Ot.points,Ot.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Fe([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Fe([Ot.common,Ot.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Fe([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Fe([Ot.sprite,Ot.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Fe([Ot.common,Ot.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Fe([Ot.lights,Ot.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};sn.physical={uniforms:Fe([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const er={r:0,b:0,g:0};function Ru(i,t,e,n,a,r,s){const o=new pe(0);let c=r===!0?0:1,u,h,l=null,f=0,p=null;function v(m,d){let x=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),x=!0);const _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===dr)?(h===void 0&&(h=new vn(new xi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ve.getTransfer(y.colorSpace)!==ge,(l!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new vn(new vs(2,2),new kn({name:"BackgroundMaterial",uniforms:gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ve.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,d){m.getRGB(er,lo(i)),n.buffers.color.setClear(er.r,er.g,er.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function Cu(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},c=m(null);let u=c,h=!1;function l(N,k,tt,F,B){let Z=!1;if(s){const W=g(F,tt,k);u!==W&&(u=W,p(u.object)),Z=d(N,F,tt,B),Z&&x(N,F,tt,B)}else{const W=k.wireframe===!0;(u.geometry!==F.id||u.program!==tt.id||u.wireframe!==W)&&(u.geometry=F.id,u.program=tt.id,u.wireframe=W,Z=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,O(N,k,tt,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,k,tt){const F=tt.wireframe===!0;let B=o[N.id];B===void 0&&(B={},o[N.id]=B);let Z=B[k.id];Z===void 0&&(Z={},B[k.id]=Z);let W=Z[F];return W===void 0&&(W=m(f()),Z[F]=W),W}function m(N){const k=[],tt=[],F=[];for(let B=0;B<a;B++)k[B]=0,tt[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:F,object:N,attributes:{},index:null}}function d(N,k,tt,F){const B=u.attributes,Z=k.attributes;let W=0;const T=tt.getAttributes();for(const U in T)if(T[U].location>=0){const C=B[U];let b=Z[U];if(b===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(b=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(b=N.instanceColor)),C===void 0||C.attribute!==b||b&&C.data!==b.data)return!0;W++}return u.attributesNum!==W||u.index!==F}function x(N,k,tt,F){const B={},Z=k.attributes;let W=0;const T=tt.getAttributes();for(const U in T)if(T[U].location>=0){let C=Z[U];C===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(C=N.instanceColor));const b={};b.attribute=C,C&&C.data&&(b.data=C.data),B[U]=b,W++}u.attributes=B,u.attributesNum=W,u.index=F}function y(){const N=u.newAttributes;for(let k=0,tt=N.length;k<tt;k++)N[k]=0}function _(N){E(N,0)}function E(N,k){const tt=u.newAttributes,F=u.enabledAttributes,B=u.attributeDivisors;tt[N]=1,F[N]===0&&(i.enableVertexAttribArray(N),F[N]=1),B[N]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),B[N]=k)}function P(){const N=u.newAttributes,k=u.enabledAttributes;for(let tt=0,F=k.length;tt<F;tt++)k[tt]!==N[tt]&&(i.disableVertexAttribArray(tt),k[tt]=0)}function D(N,k,tt,F,B,Z,W){W===!0?i.vertexAttribIPointer(N,k,tt,B,Z):i.vertexAttribPointer(N,k,tt,F,B,Z)}function O(N,k,tt,F){if(n.isWebGL2===!1&&(N.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const B=F.attributes,Z=tt.getAttributes(),W=k.defaultAttributeValues;for(const T in Z){const U=Z[T];if(U.location>=0){let I=B[T];if(I===void 0&&(T==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),T==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),I!==void 0){const C=I.normalized,b=I.itemSize,q=e.get(I);if(q===void 0)continue;const rt=q.buffer,J=q.type,j=q.bytesPerElement,at=n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT||I.gpuType===Xa);if(I.isInterleavedBufferAttribute){const ct=I.data,X=ct.stride,Pt=I.offset;if(ct.isInstancedInterleavedBuffer){for(let ut=0;ut<U.locationSize;ut++)E(U.location+ut,ct.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ut=0;ut<U.locationSize;ut++)_(U.location+ut);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ut=0;ut<U.locationSize;ut++)D(U.location+ut,b/U.locationSize,J,C,X*j,(Pt+b/U.locationSize*ut)*j,at)}else{if(I.isInstancedBufferAttribute){for(let ct=0;ct<U.locationSize;ct++)E(U.location+ct,I.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ct=0;ct<U.locationSize;ct++)_(U.location+ct);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ct=0;ct<U.locationSize;ct++)D(U.location+ct,b/U.locationSize,J,C,b*j,b/U.locationSize*ct*j,at)}}else if(W!==void 0){const C=W[T];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(U.location,C);break;case 3:i.vertexAttrib3fv(U.location,C);break;case 4:i.vertexAttrib4fv(U.location,C);break;default:i.vertexAttrib1fv(U.location,C)}}}}P()}function M(){V();for(const N in o){const k=o[N];for(const tt in k){const F=k[tt];for(const B in F)v(F[B].object),delete F[B];delete k[tt]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const k=o[N.id];for(const tt in k){const F=k[tt];for(const B in F)v(F[B].object),delete F[B];delete k[tt]}delete o[N.id]}function L(N){for(const k in o){const tt=o[k];if(tt[N.id]===void 0)continue;const F=tt[N.id];for(const B in F)v(F[B].object),delete F[B];delete tt[N.id]}}function V(){H(),h=!0,u!==c&&(u=c,p(u.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:V,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:_,disableUnusedAttributes:P}}function Pu(i,t,e,n){const a=n.isWebGL2;let r;function s(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,l){if(l===0)return;let f,p;if(a)f=i,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,u,h,l),e.update(h,r,l)}this.setMode=s,this.render=o,this.renderInstances=c}function Lu(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=s||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,_=s||t.has("OES_texture_float"),E=y&&_,P=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:a,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:P}}function Iu(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Dn,o=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const p=l.length!==0||f||n!==0||a;return a=f,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=h(l,f,0)},this.setState=function(l,f,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,d=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?h(null):u();else{const x=r?0:n,y=x*4;let _=d.clippingState||null;c.value=_,_=h(v,f,y,p);for(let E=0;E!==y;++E)_[E]=e[E];d.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,f,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const d=p+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,_=p;y!==g;++y,_+=4)s.copy(l[y]).applyMatrix4(x,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Uu(i){let t=new WeakMap;function e(s,o){return o===ts?s.mapping=pi:o===es&&(s.mapping=mi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===ts||o===es)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const u=new Yl(c.height/2);return u.fromEquirectangularTexture(i,s),t.set(s,u),s.addEventListener("dispose",a),e(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gs extends co{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,ga=[.125,.215,.35,.446,.526,.582],Bn=20,Wr=new gs,_a=new pe;let kr=null,Xr=0,qr=0;const Nn=(1+Math.sqrt(5))/2,li=1/Nn,xa=[new lt(1,1,1),new lt(-1,1,1),new lt(1,1,-1),new lt(-1,1,-1),new lt(0,Nn,li),new lt(0,Nn,-li),new lt(li,0,Nn),new lt(-li,0,Nn),new lt(Nn,li,0),new lt(-Nn,li,0)];class ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){kr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Xr,qr),t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ci,format:rn,colorSpace:_n,depthBuffer:!1},a=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Du(r)),this._blurMaterial=Nu(r,t,e)}return a}_compileMaterial(t){const e=new vn(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,a){const o=new en(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,f=h.toneMapping;h.getClearColor(_a),h.toneMapping=bn,h.autoClear=!1;const p=new so({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),v=new vn(new xi,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(_a),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const y=this._cubeSize;nr(a,x*y,d>2?y:0,y,y),h.setRenderTarget(a),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===pi||t.mapping===mi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=xa[(a-1)%xa.length];this._blur(t,a-1,a,r,s)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new vn(this._lodPlanes[a],u),f=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Bn;m>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const d=[];let x=0;for(let D=0;D<Bn;++D){const O=D/g,M=Math.exp(-O*O/2);d.push(M),D===0?x+=M:D<m&&(x+=2*M)}for(let D=0;D<d.length;D++)d[D]=d[D]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const _=this._sizeLods[a],E=3*_*(a>y-ci?a-y+ci:0),P=4*(this._cubeSize-_);nr(e,E,P,3*_,2*_),c.setRenderTarget(e),c.render(l,Wr)}}function Du(i){const t=[],e=[],n=[];let a=i;const r=i-ci+1+ga.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-ci?c=ga[s-i+ci-1]:s===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,f=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,d=1,x=new Float32Array(g*v*p),y=new Float32Array(m*v*p),_=new Float32Array(d*v*p);for(let P=0;P<p;P++){const D=P%3*2/3-1,O=P>2?0:-1,M=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];x.set(M,g*v*P),y.set(f,m*v*P);const w=[P,P,P,P,P,P];_.set(w,d*v*P)}const E=new qn;E.setAttribute("position",new an(x,g)),E.setAttribute("uv",new an(y,m)),E.setAttribute("faceIndex",new an(_,d)),t.push(E),a>ci&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Nu(i,t,e){const n=new Float32Array(Bn),a=new lt(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Sa(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ea(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===ts||c===es,h=c===pi||c===mi;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new ya(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||h&&l&&a(l)){e===null&&(e=new ya(i));const f=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function a(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Bu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Ou(i,t,e,n){const a={},r=new WeakMap;function s(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const f=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,_=x.length;y<_;y+=3){const E=x[y+0],P=x[y+1],D=x[y+2];f.push(E,P,P,D,D,E)}}else if(v!==void 0){const x=v.array;g=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const E=y+0,P=y+1,D=y+2;f.push(E,P,P,D,D,E)}}else return;const m=new(Ja(f)?oo:ao)(f,1);m.version=g;const d=r.get(l);d&&t.remove(d),r.set(l,m)}function h(l){const f=r.get(l);if(f){const p=l.index;p!==null&&f.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function zu(i,t,e,n){const a=n.isWebGL2;let r;function s(f){r=f}let o,c;function u(f){o=f.type,c=f.bytesPerElement}function h(f,p){i.drawElements(r,p,o,f*c),e.update(p,r,1)}function l(f,p,v){if(v===0)return;let g,m;if(a)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,f*c,v),e.update(p,r,v)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=l}function Vu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Gu(i,t){return i[0]-t[0]}function Hu(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Wu(i,t,e){const n={},a=new Float32Array(8),r=new WeakMap,s=new Le,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,l){const f=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let k=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),E===!0&&(M=3);let w=h.attributes.position.count*M,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*L*4*g),H=new no(V,w,L,g);H.type=Tn,H.needsUpdate=!0;const N=M*4;for(let tt=0;tt<g;tt++){const F=P[tt],B=D[tt],Z=O[tt],W=w*L*4*tt;for(let T=0;T<F.count;T++){const U=T*N;y===!0&&(s.fromBufferAttribute(F,T),V[W+U+0]=s.x,V[W+U+1]=s.y,V[W+U+2]=s.z,V[W+U+3]=0),_===!0&&(s.fromBufferAttribute(B,T),V[W+U+4]=s.x,V[W+U+5]=s.y,V[W+U+6]=s.z,V[W+U+7]=0),E===!0&&(s.fromBufferAttribute(Z,T),V[W+U+8]=s.x,V[W+U+9]=s.y,V[W+U+10]=s.z,V[W+U+11]=Z.itemSize===4?s.w:1)}}m={count:g,texture:H,size:new me(w,L)},r.set(h,m),h.addEventListener("dispose",k)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const x=h.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",f),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let _=0;_<v;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<v;_++){const E=g[_];E[0]=_,E[1]=f[_]}g.sort(Hu);for(let _=0;_<8;_++)_<v&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Gu);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const E=o[_],P=E[0],D=E[1];P!==Number.MAX_SAFE_INTEGER&&D?(m&&h.getAttribute("morphTarget"+_)!==m[P]&&h.setAttribute("morphTarget"+_,m[P]),d&&h.getAttribute("morphNormal"+_)!==d[P]&&h.setAttribute("morphNormal"+_,d[P]),a[_]=D,x+=D):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),d&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),a[_]=0)}const y=h.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:c}}function ku(i,t,e,n){let a=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(a.get(l)!==u&&(t.update(l),a.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return l}function s(){a=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:s}}const fo=new qe,po=new no,mo=new Cl,vo=new ho,wa=[],Ta=[],Aa=new Float32Array(16),ba=new Float32Array(9),Ra=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=wa[a];if(r===void 0&&(r=new Float32Array(a),wa[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=Ta[t];e===void 0&&(e=new Int32Array(t),Ta[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Zu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(be(e,n))return;Ra.set(n),i.uniformMatrix2fv(this.addr,!1,Ra),Re(e,n)}}function Ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(be(e,n))return;ba.set(n),i.uniformMatrix3fv(this.addr,!1,ba),Re(e,n)}}function $u(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(be(e,n))return;Aa.set(n),i.uniformMatrix4fv(this.addr,!1,Aa),Re(e,n)}}function Qu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function of(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2D(t||fo,a)}function lf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||mo,a)}function cf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||vo,a)}function hf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||po,a)}function uf(i){switch(i){case 5126:return Xu;case 35664:return qu;case 35665:return Yu;case 35666:return ju;case 35674:return Zu;case 35675:return Ku;case 35676:return $u;case 5124:case 35670:return Qu;case 35667:case 35671:return Ju;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return rf;case 36295:return sf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return hf}}function ff(i,t){i.uniform1fv(this.addr,t)}function df(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function pf(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function mf(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function vf(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gf(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xf(i,t){i.uniform1iv(this.addr,t)}function yf(i,t){i.uniform2iv(this.addr,t)}function Mf(i,t){i.uniform3iv(this.addr,t)}function Sf(i,t){i.uniform4iv(this.addr,t)}function Ef(i,t){i.uniform1uiv(this.addr,t)}function wf(i,t){i.uniform2uiv(this.addr,t)}function Tf(i,t){i.uniform3uiv(this.addr,t)}function Af(i,t){i.uniform4uiv(this.addr,t)}function bf(i,t,e){const n=this.cache,a=t.length,r=vr(e,a);be(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||fo,r[s])}function Rf(i,t,e){const n=this.cache,a=t.length,r=vr(e,a);be(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||mo,r[s])}function Cf(i,t,e){const n=this.cache,a=t.length,r=vr(e,a);be(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||vo,r[s])}function Pf(i,t,e){const n=this.cache,a=t.length,r=vr(e,a);be(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||po,r[s])}function Lf(i){switch(i){case 5126:return ff;case 35664:return df;case 35665:return pf;case 35666:return mf;case 35674:return vf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return yf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return Ef;case 36294:return wf;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=uf(e.type)}}class Uf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Lf(e.type)}}class Df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Ca(i,t){i.seq.push(t),i.map[t.id]=t}function Nf(i,t,e){const n=i.name,a=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),s=Yr.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&s+2===a){Ca(e,u===void 0?new If(o,i,t):new Uf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Df(o),Ca(e,l)),e=l}}}class ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Nf(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Pa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ff=37297;let Bf=0;function Of(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function zf(i){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i);let n;switch(t===e?n="":t===hr&&e===cr?n="LinearDisplayP3ToLinearSRGB":t===cr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case pr:return[n,"LinearTransferOETF"];case Ie:case ds:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function La(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Of(i.getShaderSource(t),s)}else return a}function Vf(i,t){const e=zf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gf(i,t){let e;switch(t){case $o:e="Linear";break;case Qo:e="Reinhard";break;case Jo:e="OptimizedCineon";break;case tl:e="ACESFilmic";break;case el:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function Wf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Ai(i){return i!==""}function Ia(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(i){return i.replace(Xf,Yf)}const qf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yf(i,t){let e=re[t];if(e===void 0){const n=qf.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return os(e)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(jf,Zf)}function Zf(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Na(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===To?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function $f(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case us:t="ENVMAP_BLENDING_MULTIPLY";break;case Zo:t="ENVMAP_BLENDING_MIX";break;case Ko:t="ENVMAP_BLENDING_ADD";break}return t}function td(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ed(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=Kf(e),u=$f(e),h=Qf(e),l=Jf(e),f=td(e),p=e.isWebGL2?"":Hf(e),v=Wf(r),g=a.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ai).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ai).join(`
`),d.length>0&&(d+=`
`)):(m=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),d=[p,Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?re.tonemapping_pars_fragment:"",e.toneMapping!==bn?Gf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Vf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),s=os(s),s=Ia(s,e),s=Ua(s,e),o=os(o),o=Ia(o,e),o=Ua(o,e),s=Da(s),o=Da(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Js?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Js?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+m+s,_=x+d+o,E=Pa(a,a.VERTEX_SHADER,y),P=Pa(a,a.FRAGMENT_SHADER,_);a.attachShader(g,E),a.attachShader(g,P),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function D(L){if(i.debug.checkShaderErrors){const V=a.getProgramInfoLog(g).trim(),H=a.getShaderInfoLog(E).trim(),N=a.getShaderInfoLog(P).trim();let k=!0,tt=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,E,P);else{const F=La(a,E,"vertex"),B=La(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+F+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||N==="")&&(tt=!1);tt&&(L.diagnostics={runnable:k,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:N,prefix:d}})}a.deleteShader(E),a.deleteShader(P),O=new ar(a,g),M=kf(a,g)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(g,Ff)),w},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=P,this}let nd=0;class id{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rd(t),e.set(t,n)),n}}class rd{constructor(t){this.id=nd++,this.code=t,this.usedTimes=0}}function sd(i,t,e,n,a,r,s){const o=new io,c=new id,u=[],h=a.isWebGL2,l=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,L,V,H){const N=V.fog,k=H.geometry,tt=M.isMeshStandardMaterial?V.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),B=F&&F.mapping===dr?F.image.height:null,Z=v[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,T=W!==void 0?W.length:0;let U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let I,C,b,q;if(Z){const se=sn[Z];I=se.vertexShader,C=se.fragmentShader}else I=M.vertexShader,C=M.fragmentShader,c.update(M),b=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const rt=i.getRenderTarget(),J=H.isInstancedMesh===!0,j=!!M.map,at=!!M.matcap,ct=!!F,X=!!M.aoMap,Pt=!!M.lightMap,ut=!!M.bumpMap,nt=!!M.normalMap,ot=!!M.displacementMap,qt=!!M.emissiveMap,Tt=!!M.metalnessMap,Ht=!!M.roughnessMap,xt=M.anisotropy>0,Qt=M.clearcoat>0,ee=M.iridescence>0,R=M.sheen>0,A=M.transmission>0,$=xt&&!!M.anisotropyMap,mt=Qt&&!!M.clearcoatMap,ht=Qt&&!!M.clearcoatNormalMap,gt=Qt&&!!M.clearcoatRoughnessMap,Vt=ee&&!!M.iridescenceMap,wt=ee&&!!M.iridescenceThicknessMap,zt=R&&!!M.sheenColorMap,jt=R&&!!M.sheenRoughnessMap,ie=!!M.specularMap,_t=!!M.specularColorMap,ce=!!M.specularIntensityMap,Jt=A&&!!M.transmissionMap,Yt=A&&!!M.thicknessMap,Wt=!!M.gradientMap,Nt=!!M.alphaMap,ne=M.alphaTest>0,Y=!!M.alphaHash,Ct=!!M.extensions,yt=!!k.attributes.uv1,ft=!!k.attributes.uv2,At=!!k.attributes.uv3;let Zt=bn;return M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:I,fragmentShader:C,defines:M.defines,customVertexShaderID:b,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:J,instancingColor:J&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_n,map:j,matcap:at,envMap:ct,envMapMode:ct&&F.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:Pt,bumpMap:ut,normalMap:nt,displacementMap:f&&ot,emissiveMap:qt,normalMapObjectSpace:nt&&M.normalMapType===pl,normalMapTangentSpace:nt&&M.normalMapType===Qa,metalnessMap:Tt,roughnessMap:Ht,anisotropy:xt,anisotropyMap:$,clearcoat:Qt,clearcoatMap:mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:gt,iridescence:ee,iridescenceMap:Vt,iridescenceThicknessMap:wt,sheen:R,sheenColorMap:zt,sheenRoughnessMap:jt,specularMap:ie,specularColorMap:_t,specularIntensityMap:ce,transmission:A,transmissionMap:Jt,thicknessMap:Yt,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===fi,alphaMap:Nt,alphaTest:ne,alphaHash:Y,combine:M.combine,mapUv:j&&g(M.map.channel),aoMapUv:X&&g(M.aoMap.channel),lightMapUv:Pt&&g(M.lightMap.channel),bumpMapUv:ut&&g(M.bumpMap.channel),normalMapUv:nt&&g(M.normalMap.channel),displacementMapUv:ot&&g(M.displacementMap.channel),emissiveMapUv:qt&&g(M.emissiveMap.channel),metalnessMapUv:Tt&&g(M.metalnessMap.channel),roughnessMapUv:Ht&&g(M.roughnessMap.channel),anisotropyMapUv:$&&g(M.anisotropyMap.channel),clearcoatMapUv:mt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:jt&&g(M.sheenRoughnessMap.channel),specularMapUv:ie&&g(M.specularMap.channel),specularColorMapUv:_t&&g(M.specularColorMap.channel),specularIntensityMapUv:ce&&g(M.specularIntensityMap.channel),transmissionMapUv:Jt&&g(M.transmissionMap.channel),thicknessMapUv:Yt&&g(M.thicknessMap.channel),alphaMapUv:Nt&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(nt||xt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:ft,vertexUv3s:At,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(j||Nt),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:j&&M.map.isVideoTexture===!0&&ve.getTransfer(M.map.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ct&&M.extensions.derivatives===!0,extensionFragDepth:Ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ct&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(w,M),y(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const w=v[M.type];let L;if(w){const V=sn[w];L=Wl.clone(V.uniforms)}else L=M.uniforms;return L}function E(M,w){let L;for(let V=0,H=u.length;V<H;V++){const N=u[V];if(N.cacheKey===w){L=N,++L.usedTimes;break}}return L===void 0&&(L=new ed(i,w,M,r),u.push(L)),L}function P(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:O}}function ad(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ba(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,f,p,v,g,m){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:f,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=d):(d.id=l.id,d.object=l,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=l.renderOrder,d.z=g,d.group=m),t++,d}function o(l,f,p,v,g,m){const d=s(l,f,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?a.push(d):e.push(d)}function c(l,f,p,v,g,m){const d=s(l,f,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?a.unshift(d):e.unshift(d)}function u(l,f){e.length>1&&e.sort(l||od),n.length>1&&n.sort(f||Fa),a.length>1&&a.sort(f||Fa)}function h(){for(let l=t,f=i.length;l<f;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:u}}function ld(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ba,i.set(n,[s])):a>=r.length?(s=new Ba,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function cd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new lt,color:new pe};break;case"SpotLight":e={position:new lt,direction:new lt,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new lt,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new lt,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return i[t.id]=e,e}}}function hd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ud=0;function fd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dd(i,t){const e=new cd,n=hd(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new lt);const r=new lt,s=new Ae,o=new Ae;function c(h,l){let f=0,p=0,v=0;for(let V=0;V<9;V++)a.probe[V].set(0,0,0);let g=0,m=0,d=0,x=0,y=0,_=0,E=0,P=0,D=0,O=0,M=0;h.sort(fd);const w=l===!0?Math.PI:1;for(let V=0,H=h.length;V<H;V++){const N=h[V],k=N.color,tt=N.intensity,F=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*tt*w,p+=k.g*tt*w,v+=k.b*tt*w;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(N.sh.coefficients[Z],tt);M++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const W=N.shadow,T=n.get(N);T.shadowBias=W.bias,T.shadowNormalBias=W.normalBias,T.shadowRadius=W.radius,T.shadowMapSize=W.mapSize,a.directionalShadow[g]=T,a.directionalShadowMap[g]=B,a.directionalShadowMatrix[g]=N.shadow.matrix,_++}a.directional[g]=Z,g++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(k).multiplyScalar(tt*w),Z.distance=F,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,a.spot[d]=Z;const W=N.shadow;if(N.map&&(a.spotLightMap[D]=N.map,D++,W.updateMatrices(N),N.castShadow&&O++),a.spotLightMatrix[d]=W.matrix,N.castShadow){const T=n.get(N);T.shadowBias=W.bias,T.shadowNormalBias=W.normalBias,T.shadowRadius=W.radius,T.shadowMapSize=W.mapSize,a.spotShadow[d]=T,a.spotShadowMap[d]=B,P++}d++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(k).multiplyScalar(tt),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),a.rectArea[x]=Z,x++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*w),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const W=N.shadow,T=n.get(N);T.shadowBias=W.bias,T.shadowNormalBias=W.normalBias,T.shadowRadius=W.radius,T.shadowMapSize=W.mapSize,T.shadowCameraNear=W.camera.near,T.shadowCameraFar=W.camera.far,a.pointShadow[m]=T,a.pointShadowMap[m]=B,a.pointShadowMatrix[m]=N.shadow.matrix,E++}a.point[m]=Z,m++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(tt*w),Z.groundColor.copy(N.groundColor).multiplyScalar(tt*w),a.hemi[y]=Z,y++}}x>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=v;const L=a.hash;(L.directionalLength!==g||L.pointLength!==m||L.spotLength!==d||L.rectAreaLength!==x||L.hemiLength!==y||L.numDirectionalShadows!==_||L.numPointShadows!==E||L.numSpotShadows!==P||L.numSpotMaps!==D||L.numLightProbes!==M)&&(a.directional.length=g,a.spot.length=d,a.rectArea.length=x,a.point.length=m,a.hemi.length=y,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=E,a.pointShadowMap.length=E,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=E,a.spotLightMatrix.length=P+D-O,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=M,L.directionalLength=g,L.pointLength=m,L.spotLength=d,L.rectAreaLength=x,L.hemiLength=y,L.numDirectionalShadows=_,L.numPointShadows=E,L.numSpotShadows=P,L.numSpotMaps=D,L.numLightProbes=M,a.version=ud++)}function u(h,l){let f=0,p=0,v=0,g=0,m=0;const d=l.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const _=h[x];if(_.isDirectionalLight){const E=a.directional[f];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),f++}else if(_.isSpotLight){const E=a.spot[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),v++}else if(_.isRectAreaLight){const E=a.rectArea[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),o.identity(),s.copy(_.matrixWorld),s.premultiply(d),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const E=a.point[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const E=a.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:c,setupView:u,state:a}}function Oa(i,t){const e=new dd(i,t),n=[],a=[];function r(){n.length=0,a.length=0}function s(l){n.push(l)}function o(l){a.push(l)}function c(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function pd(i,t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Oa(i,t),e.set(r,[c])):s>=o.length?(c=new Oa(i,t),o.push(c)):c=o[s],c}function a(){e=new WeakMap}return{get:n,dispose:a}}class md extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vd extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_d=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xd(i,t,e){let n=new ms;const a=new me,r=new me,s=new Le,o=new md({depthPacking:dl}),c=new vd,u={},h=e.maxTextureSize,l={[Cn]:Ve,[Ve]:Cn,[pn]:pn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:gd,fragmentShader:_d}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let d=this.type;this.render=function(E,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const O=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(An),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=d!==dn&&this.type===dn,H=d===dn&&this.type!==dn;for(let N=0,k=E.length;N<k;N++){const tt=E[N],F=tt.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const B=F.getFrameExtents();if(a.multiply(B),r.copy(F.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/B.x),a.x=r.x*B.x,F.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/B.y),a.y=r.y*B.y,F.mapSize.y=r.y)),F.map===null||V===!0||H===!0){const W=this.type!==dn?{minFilter:Be,magFilter:Be}:{};F.map!==null&&F.map.dispose(),F.map=new Wn(a.x,a.y,W),F.map.texture.name=tt.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Z=F.getViewportCount();for(let W=0;W<Z;W++){const T=F.getViewport(W);s.set(r.x*T.x,r.y*T.y,r.x*T.z,r.y*T.w),L.viewport(s),F.updateMatrices(tt,W),n=F.getFrustum(),_(P,D,F.camera,tt,this.type)}F.isPointLightShadow!==!0&&this.type===dn&&x(F,D),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(O,M,w)};function x(E,P){const D=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(a.x,a.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,D,f,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,D,p,g,null)}function y(E,P,D,O){let M=null;const w=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const L=M.uuid,V=P.uuid;let H=u[L];H===void 0&&(H={},u[L]=H);let N=H[V];N===void 0&&(N=M.clone(),H[V]=N),M=N}if(M.visible=P.visible,M.wireframe=P.wireframe,O===dn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:l[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=D}return M}function _(E,P,D,O,M){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===dn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const V=t.update(E),H=E.material;if(Array.isArray(H)){const N=V.groups;for(let k=0,tt=N.length;k<tt;k++){const F=N[k],B=H[F.materialIndex];if(B&&B.visible){const Z=y(E,B,O,M);i.renderBufferDirect(D,null,V,Z,E,F)}}}else if(H.visible){const N=y(E,H,O,M);i.renderBufferDirect(D,null,V,N,E,null)}}const L=E.children;for(let V=0,H=L.length;V<H;V++)_(L[V],P,D,O,M)}}function yd(i,t,e){const n=e.isWebGL2;function a(){let Y=!1;const Ct=new Le;let yt=null;const ft=new Le(0,0,0,0);return{setMask:function(At){yt!==At&&!Y&&(i.colorMask(At,At,At,At),yt=At)},setLocked:function(At){Y=At},setClear:function(At,Zt,ae,se,st){st===!0&&(At*=se,Zt*=se,ae*=se),Ct.set(At,Zt,ae,se),ft.equals(Ct)===!1&&(i.clearColor(At,Zt,ae,se),ft.copy(Ct))},reset:function(){Y=!1,yt=null,ft.set(-1,0,0,0)}}}function r(){let Y=!1,Ct=null,yt=null,ft=null;return{setTest:function(At){At?j(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(At){Ct!==At&&!Y&&(i.depthMask(At),Ct=At)},setFunc:function(At){if(yt!==At){switch(At){case Ho:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=At}},setLocked:function(At){Y=At},setClear:function(At){ft!==At&&(i.clearDepth(At),ft=At)},reset:function(){Y=!1,Ct=null,yt=null,ft=null}}}function s(){let Y=!1,Ct=null,yt=null,ft=null,At=null,Zt=null,ae=null,se=null,st=null;return{setTest:function(it){Y||(it?j(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(it){Ct!==it&&!Y&&(i.stencilMask(it),Ct=it)},setFunc:function(it,dt,pt){(yt!==it||ft!==dt||At!==pt)&&(i.stencilFunc(it,dt,pt),yt=it,ft=dt,At=pt)},setOp:function(it,dt,pt){(Zt!==it||ae!==dt||se!==pt)&&(i.stencilOp(it,dt,pt),Zt=it,ae=dt,se=pt)},setLocked:function(it){Y=it},setClear:function(it){st!==it&&(i.clearStencil(it),st=it)},reset:function(){Y=!1,Ct=null,yt=null,ft=null,At=null,Zt=null,ae=null,se=null,st=null}}}const o=new a,c=new r,u=new s,h=new WeakMap,l=new WeakMap;let f={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,y=null,_=null,E=null,P=null,D=null,O=null,M=new pe(0,0,0),w=0,L=!1,V=null,H=null,N=null,k=null,tt=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let T=null,U={};const I=i.getParameter(i.SCISSOR_BOX),C=i.getParameter(i.VIEWPORT),b=new Le().fromArray(I),q=new Le().fromArray(C);function rt(Y,Ct,yt,ft){const At=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(Y,Zt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<yt;ae++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ct,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Ct+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Zt}const J={};J[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(J[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),j(i.DEPTH_TEST),c.setFunc(or),Tt(!1),Ht(xs),j(i.CULL_FACE),ot(An);function j(Y){f[Y]!==!0&&(i.enable(Y),f[Y]=!0)}function at(Y){f[Y]!==!1&&(i.disable(Y),f[Y]=!1)}function ct(Y,Ct){return p[Y]!==Ct?(i.bindFramebuffer(Y,Ct),p[Y]=Ct,n&&(Y===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ct),Y===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function X(Y,Ct){let yt=g,ft=!1;if(Y)if(yt=v.get(Ct),yt===void 0&&(yt=[],v.set(Ct,yt)),Y.isWebGLMultipleRenderTargets){const At=Y.texture;if(yt.length!==At.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,ae=At.length;Zt<ae;Zt++)yt[Zt]=i.COLOR_ATTACHMENT0+Zt;yt.length=At.length,ft=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,ft=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,ft=!0);ft&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Pt(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}const ut={[Fn]:i.FUNC_ADD,[bo]:i.FUNC_SUBTRACT,[Ro]:i.FUNC_REVERSE_SUBTRACT};if(n)ut[Es]=i.MIN,ut[ws]=i.MAX;else{const Y=t.get("EXT_blend_minmax");Y!==null&&(ut[Es]=Y.MIN_EXT,ut[ws]=Y.MAX_EXT)}const nt={[Co]:i.ZERO,[Po]:i.ONE,[Lo]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[Bo]:i.SRC_ALPHA_SATURATE,[No]:i.DST_COLOR,[Uo]:i.DST_ALPHA,[Io]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Fo]:i.ONE_MINUS_DST_COLOR,[Do]:i.ONE_MINUS_DST_ALPHA,[Oo]:i.CONSTANT_COLOR,[zo]:i.ONE_MINUS_CONSTANT_COLOR,[Vo]:i.CONSTANT_ALPHA,[Go]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(Y,Ct,yt,ft,At,Zt,ae,se,st,it){if(Y===An){d===!0&&(at(i.BLEND),d=!1);return}if(d===!1&&(j(i.BLEND),d=!0),Y!==Ao){if(Y!==x||it!==L){if((y!==Fn||P!==Fn)&&(i.blendEquation(i.FUNC_ADD),y=Fn,P=Fn),it)switch(Y){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}_=null,E=null,D=null,O=null,M.set(0,0,0),w=0,x=Y,L=it}return}At=At||Ct,Zt=Zt||yt,ae=ae||ft,(Ct!==y||At!==P)&&(i.blendEquationSeparate(ut[Ct],ut[At]),y=Ct,P=At),(yt!==_||ft!==E||Zt!==D||ae!==O)&&(i.blendFuncSeparate(nt[yt],nt[ft],nt[Zt],nt[ae]),_=yt,E=ft,D=Zt,O=ae),(se.equals(M)===!1||st!==w)&&(i.blendColor(se.r,se.g,se.b,st),M.copy(se),w=st),x=Y,L=!1}function qt(Y,Ct){Y.side===pn?at(i.CULL_FACE):j(i.CULL_FACE);let yt=Y.side===Ve;Ct&&(yt=!yt),Tt(yt),Y.blending===fi&&Y.transparent===!1?ot(An):ot(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const ft=Y.stencilWrite;u.setTest(ft),ft&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(Y){V!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),V=Y)}function Ht(Y){Y!==Eo?(j(i.CULL_FACE),Y!==H&&(Y===xs?i.cullFace(i.BACK):Y===wo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),H=Y}function xt(Y){Y!==N&&(B&&i.lineWidth(Y),N=Y)}function Qt(Y,Ct,yt){Y?(j(i.POLYGON_OFFSET_FILL),(k!==Ct||tt!==yt)&&(i.polygonOffset(Ct,yt),k=Ct,tt=yt)):at(i.POLYGON_OFFSET_FILL)}function ee(Y){Y?j(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function R(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),T!==Y&&(i.activeTexture(Y),T=Y)}function A(Y,Ct,yt){yt===void 0&&(T===null?yt=i.TEXTURE0+F-1:yt=T);let ft=U[yt];ft===void 0&&(ft={type:void 0,texture:void 0},U[yt]=ft),(ft.type!==Y||ft.texture!==Ct)&&(T!==yt&&(i.activeTexture(yt),T=yt),i.bindTexture(Y,Ct||J[Y]),ft.type=Y,ft.texture=Ct)}function $(){const Y=U[T];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Jt(Y){b.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),b.copy(Y))}function Yt(Y){q.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),q.copy(Y))}function Wt(Y,Ct){let yt=l.get(Ct);yt===void 0&&(yt=new WeakMap,l.set(Ct,yt));let ft=yt.get(Y);ft===void 0&&(ft=i.getUniformBlockIndex(Ct,Y.name),yt.set(Y,ft))}function Nt(Y,Ct){const ft=l.get(Ct).get(Y);h.get(Ct)!==ft&&(i.uniformBlockBinding(Ct,ft,Y.__bindingPointIndex),h.set(Ct,ft))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},T=null,U={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,y=null,_=null,E=null,P=null,D=null,O=null,M=new pe(0,0,0),w=0,L=!1,V=null,H=null,N=null,k=null,tt=null,b.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:j,disable:at,bindFramebuffer:ct,drawBuffers:X,useProgram:Pt,setBlending:ot,setMaterial:qt,setFlipSided:Tt,setCullFace:Ht,setLineWidth:xt,setPolygonOffset:Qt,setScissorTest:ee,activeTexture:R,bindTexture:A,unbindTexture:$,compressedTexImage2D:mt,compressedTexImage3D:ht,texImage2D:_t,texImage3D:ce,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:jt,texStorage3D:ie,texSubImage2D:gt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Jt,viewport:Yt,reset:ne}}function Md(i,t,e,n,a,r,s){const o=a.isWebGL2,c=a.maxTextures,u=a.maxCubemapSize,h=a.maxTextureSize,l=a.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,A){return d?new OffscreenCanvas(R,A):fr("canvas")}function y(R,A,$,mt){let ht=1;if((R.width>mt||R.height>mt)&&(ht=mt/Math.max(R.width,R.height)),ht<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const gt=A?as:Math.floor,Vt=gt(ht*R.width),wt=gt(ht*R.height);g===void 0&&(g=x(Vt,wt));const zt=$?x(Vt,wt):g;return zt.width=Vt,zt.height=wt,zt.getContext("2d").drawImage(R,0,0,Vt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Vt+"x"+wt+")."),zt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function _(R){return ta(R.width)&&ta(R.height)}function E(R){return o?!1:R.wrapS!==nn||R.wrapT!==nn||R.minFilter!==Be&&R.minFilter!==je}function P(R,A){return R.generateMipmaps&&A&&R.minFilter!==Be&&R.minFilter!==je}function D(R){i.generateMipmap(R)}function O(R,A,$,mt,ht=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt=A;if(A===i.RED&&($===i.FLOAT&&(gt=i.R32F),$===i.HALF_FLOAT&&(gt=i.R16F),$===i.UNSIGNED_BYTE&&(gt=i.R8)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(gt=i.R8UI),$===i.UNSIGNED_SHORT&&(gt=i.R16UI),$===i.UNSIGNED_INT&&(gt=i.R32UI),$===i.BYTE&&(gt=i.R8I),$===i.SHORT&&(gt=i.R16I),$===i.INT&&(gt=i.R32I)),A===i.RG&&($===i.FLOAT&&(gt=i.RG32F),$===i.HALF_FLOAT&&(gt=i.RG16F),$===i.UNSIGNED_BYTE&&(gt=i.RG8)),A===i.RGBA){const Vt=ht?lr:ve.getTransfer(mt);$===i.FLOAT&&(gt=i.RGBA32F),$===i.HALF_FLOAT&&(gt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(gt=Vt===ge?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(R,A,$){return P(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==je?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){return R===Be||R===Ts||R===_r?i.NEAREST:i.LINEAR}function L(R){const A=R.target;A.removeEventListener("dispose",L),H(A),A.isVideoTexture&&v.delete(A)}function V(R){const A=R.target;A.removeEventListener("dispose",V),k(A)}function H(R){const A=n.get(R);if(A.__webglInit===void 0)return;const $=R.source,mt=m.get($);if(mt){const ht=mt[A.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&N(R),Object.keys(mt).length===0&&m.delete($)}n.remove(R)}function N(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const $=R.source,mt=m.get($);delete mt[A.__cacheKey],s.memory.textures--}function k(R){const A=R.texture,$=n.get(R),mt=n.get(A);if(mt.__webglTexture!==void 0&&(i.deleteTexture(mt.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray($.__webglFramebuffer[ht]))for(let gt=0;gt<$.__webglFramebuffer[ht].length;gt++)i.deleteFramebuffer($.__webglFramebuffer[ht][gt]);else i.deleteFramebuffer($.__webglFramebuffer[ht]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[ht])}else{if(Array.isArray($.__webglFramebuffer))for(let ht=0;ht<$.__webglFramebuffer.length;ht++)i.deleteFramebuffer($.__webglFramebuffer[ht]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ht=0;ht<$.__webglColorRenderbuffer.length;ht++)$.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[ht]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ht=0,gt=A.length;ht<gt;ht++){const Vt=n.get(A[ht]);Vt.__webglTexture&&(i.deleteTexture(Vt.__webglTexture),s.memory.textures--),n.remove(A[ht])}n.remove(A),n.remove(R)}let tt=0;function F(){tt=0}function B(){const R=tt;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),tt+=1,R}function Z(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function W(R,A){const $=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const mt=R.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j($,R,A);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function T(R,A){const $=n.get(R);if(R.version>0&&$.__version!==R.version){j($,R,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function U(R,A){const $=n.get(R);if(R.version>0&&$.__version!==R.version){j($,R,A);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function I(R,A){const $=n.get(R);if(R.version>0&&$.__version!==R.version){at($,R,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}const C={[ns]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},b={[Be]:i.NEAREST,[Ts]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[nl]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},q={[ml]:i.NEVER,[Sl]:i.ALWAYS,[vl]:i.LESS,[_l]:i.LEQUAL,[gl]:i.EQUAL,[Ml]:i.GEQUAL,[xl]:i.GREATER,[yl]:i.NOTEQUAL};function rt(R,A,$){if($?(i.texParameteri(R,i.TEXTURE_WRAP_S,C[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,C[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,C[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,b[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,b[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==nn||A.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Be&&A.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,q[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Be||A.minFilter!==_r&&A.minFilter!==Ri||A.type===Tn&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===Ci&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function J(R,A){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",L));const mt=A.source;let ht=m.get(mt);ht===void 0&&(ht={},m.set(mt,ht));const gt=Z(A);if(gt!==R.__cacheKey){ht[gt]===void 0&&(ht[gt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ht[gt].usedTimes++;const Vt=ht[R.__cacheKey];Vt!==void 0&&(ht[R.__cacheKey].usedTimes--,Vt.usedTimes===0&&N(A)),R.__cacheKey=gt,R.__webglTexture=ht[gt].texture}return $}function j(R,A,$){let mt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=i.TEXTURE_3D);const ht=J(R,A),gt=A.source;e.bindTexture(mt,R.__webglTexture,i.TEXTURE0+$);const Vt=n.get(gt);if(gt.version!==Vt.__version||ht===!0){e.activeTexture(i.TEXTURE0+$);const wt=ve.getPrimaries(ve.workingColorSpace),zt=A.colorSpace===Ze?null:ve.getPrimaries(A.colorSpace),jt=A.colorSpace===Ze||wt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const ie=E(A)&&_(A.image)===!1;let _t=y(A.image,ie,!1,h);_t=ee(A,_t);const ce=_(_t)||o,Jt=r.convert(A.format,A.colorSpace);let Yt=r.convert(A.type),Wt=O(A.internalFormat,Jt,Yt,A.colorSpace,A.isVideoTexture);rt(mt,A,ce);let Nt;const ne=A.mipmaps,Y=o&&A.isVideoTexture!==!0,Ct=Vt.__version===void 0||ht===!0,yt=M(A,_t,ce);if(A.isDepthTexture)Wt=i.DEPTH_COMPONENT,o?A.type===Tn?Wt=i.DEPTH_COMPONENT32F:A.type===wn?Wt=i.DEPTH_COMPONENT24:A.type===On?Wt=i.DEPTH24_STENCIL8:Wt=i.DEPTH_COMPONENT16:A.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===zn&&Wt===i.DEPTH_COMPONENT&&A.type!==fs&&A.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=wn,Yt=r.convert(A.type)),A.format===vi&&Wt===i.DEPTH_COMPONENT&&(Wt=i.DEPTH_STENCIL,A.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=On,Yt=r.convert(A.type))),Ct&&(Y?e.texStorage2D(i.TEXTURE_2D,1,Wt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Wt,_t.width,_t.height,0,Jt,Yt,null));else if(A.isDataTexture)if(ne.length>0&&ce){Y&&Ct&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,ne[0].width,ne[0].height);for(let ft=0,At=ne.length;ft<At;ft++)Nt=ne[ft],Y?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Jt,Yt,Nt.data):e.texImage2D(i.TEXTURE_2D,ft,Wt,Nt.width,Nt.height,0,Jt,Yt,Nt.data);A.generateMipmaps=!1}else Y?(Ct&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,_t.width,_t.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Jt,Yt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,_t.width,_t.height,0,Jt,Yt,_t.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Y&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Wt,ne[0].width,ne[0].height,_t.depth);for(let ft=0,At=ne.length;ft<At;ft++)Nt=ne[ft],A.format!==rn?Jt!==null?Y?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,_t.depth,Jt,Nt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Wt,Nt.width,Nt.height,_t.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,_t.depth,Jt,Yt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Wt,Nt.width,Nt.height,_t.depth,0,Jt,Yt,Nt.data)}else{Y&&Ct&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,ne[0].width,ne[0].height);for(let ft=0,At=ne.length;ft<At;ft++)Nt=ne[ft],A.format!==rn?Jt!==null?Y?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Jt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Jt,Yt,Nt.data):e.texImage2D(i.TEXTURE_2D,ft,Wt,Nt.width,Nt.height,0,Jt,Yt,Nt.data)}else if(A.isDataArrayTexture)Y?(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Wt,_t.width,_t.height,_t.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Jt,Yt,_t.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,_t.width,_t.height,_t.depth,0,Jt,Yt,_t.data);else if(A.isData3DTexture)Y?(Ct&&e.texStorage3D(i.TEXTURE_3D,yt,Wt,_t.width,_t.height,_t.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Jt,Yt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,_t.width,_t.height,_t.depth,0,Jt,Yt,_t.data);else if(A.isFramebufferTexture){if(Ct)if(Y)e.texStorage2D(i.TEXTURE_2D,yt,Wt,_t.width,_t.height);else{let ft=_t.width,At=_t.height;for(let Zt=0;Zt<yt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Wt,ft,At,0,Jt,Yt,null),ft>>=1,At>>=1}}else if(ne.length>0&&ce){Y&&Ct&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,ne[0].width,ne[0].height);for(let ft=0,At=ne.length;ft<At;ft++)Nt=ne[ft],Y?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Jt,Yt,Nt):e.texImage2D(i.TEXTURE_2D,ft,Wt,Jt,Yt,Nt);A.generateMipmaps=!1}else Y?(Ct&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,_t.width,_t.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,Yt,_t)):e.texImage2D(i.TEXTURE_2D,0,Wt,Jt,Yt,_t);P(A,ce)&&D(mt),Vt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function at(R,A,$){if(A.image.length!==6)return;const mt=J(R,A),ht=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);const gt=n.get(ht);if(ht.version!==gt.__version||mt===!0){e.activeTexture(i.TEXTURE0+$);const Vt=ve.getPrimaries(ve.workingColorSpace),wt=A.colorSpace===Ze?null:ve.getPrimaries(A.colorSpace),zt=A.colorSpace===Ze||Vt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let ft=0;ft<6;ft++)!jt&&!ie?_t[ft]=y(A.image[ft],!1,!0,u):_t[ft]=ie?A.image[ft].image:A.image[ft],_t[ft]=ee(A,_t[ft]);const ce=_t[0],Jt=_(ce)||o,Yt=r.convert(A.format,A.colorSpace),Wt=r.convert(A.type),Nt=O(A.internalFormat,Yt,Wt,A.colorSpace),ne=o&&A.isVideoTexture!==!0,Y=gt.__version===void 0||mt===!0;let Ct=M(A,ce,Jt);rt(i.TEXTURE_CUBE_MAP,A,Jt);let yt;if(jt){ne&&Y&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Nt,ce.width,ce.height);for(let ft=0;ft<6;ft++){yt=_t[ft].mipmaps;for(let At=0;At<yt.length;At++){const Zt=yt[At];A.format!==rn?Yt!==null?ne?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,0,0,Zt.width,Zt.height,Yt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,Nt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,0,0,Zt.width,Zt.height,Yt,Wt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,Nt,Zt.width,Zt.height,0,Yt,Wt,Zt.data)}}}else{yt=A.mipmaps,ne&&Y&&(yt.length>0&&Ct++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Nt,_t[0].width,_t[0].height));for(let ft=0;ft<6;ft++)if(ie){ne?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,_t[ft].width,_t[ft].height,Yt,Wt,_t[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Nt,_t[ft].width,_t[ft].height,0,Yt,Wt,_t[ft].data);for(let At=0;At<yt.length;At++){const ae=yt[At].image[ft].image;ne?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,0,0,ae.width,ae.height,Yt,Wt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,Nt,ae.width,ae.height,0,Yt,Wt,ae.data)}}else{ne?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Yt,Wt,_t[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Nt,Yt,Wt,_t[ft]);for(let At=0;At<yt.length;At++){const Zt=yt[At];ne?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,0,0,Yt,Wt,Zt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,Nt,Yt,Wt,Zt.image[ft])}}}P(A,Jt)&&D(i.TEXTURE_CUBE_MAP),gt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ct(R,A,$,mt,ht,gt){const Vt=r.convert($.format,$.colorSpace),wt=r.convert($.type),zt=O($.internalFormat,Vt,wt,$.colorSpace);if(!n.get(A).__hasExternalTextures){const ie=Math.max(1,A.width>>gt),_t=Math.max(1,A.height>>gt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,gt,zt,ie,_t,A.depth,0,Vt,wt,null):e.texImage2D(ht,gt,zt,ie,_t,0,Vt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),xt(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,n.get($).__webglTexture,0,Ht(A)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,n.get($).__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(R,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let mt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||xt(A)){const ht=A.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Tn?mt=i.DEPTH_COMPONENT32F:ht.type===wn&&(mt=i.DEPTH_COMPONENT24));const gt=Ht(A);xt(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,mt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,mt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,mt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const mt=Ht(A);$&&xt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,A.width,A.height):xt(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const mt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ht=0;ht<mt.length;ht++){const gt=mt[ht],Vt=r.convert(gt.format,gt.colorSpace),wt=r.convert(gt.type),zt=O(gt.internalFormat,Vt,wt,gt.colorSpace),jt=Ht(A);$&&xt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,zt,A.width,A.height):xt(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,zt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,zt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const mt=n.get(A.depthTexture).__webglTexture,ht=Ht(A);if(A.depthTexture.format===zn)xt(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(A.depthTexture.format===vi)xt(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ut(R){const A=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pt(A.__webglFramebuffer,R)}else if($){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]=i.createRenderbuffer(),X(A.__webglDepthbuffer[mt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),X(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(R,A,$){const mt=n.get(R);A!==void 0&&ct(mt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ut(R)}function ot(R){const A=R.texture,$=n.get(R),mt=n.get(A);R.addEventListener("dispose",V),R.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=A.version,s.memory.textures++);const ht=R.isWebGLCubeRenderTarget===!0,gt=R.isWebGLMultipleRenderTargets===!0,Vt=_(R)||o;if(ht){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(o&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let zt=0;zt<A.mipmaps.length;zt++)$.__webglFramebuffer[wt][zt]=i.createFramebuffer()}else $.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)$.__webglFramebuffer[wt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(gt)if(a.drawBuffers){const wt=R.texture;for(let zt=0,jt=wt.length;zt<jt;zt++){const ie=n.get(wt[zt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&xt(R)===!1){const wt=gt?A:[A];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let zt=0;zt<wt.length;zt++){const jt=wt[zt];$.__webglColorRenderbuffer[zt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[zt]);const ie=r.convert(jt.format,jt.colorSpace),_t=r.convert(jt.type),ce=O(jt.internalFormat,ie,_t,jt.colorSpace,R.isXRRenderTarget===!0),Jt=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,ce,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,$.__webglColorRenderbuffer[zt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),X($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),rt(i.TEXTURE_CUBE_MAP,A,Vt);for(let wt=0;wt<6;wt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)ct($.__webglFramebuffer[wt][zt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else ct($.__webglFramebuffer[wt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);P(A,Vt)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const wt=R.texture;for(let zt=0,jt=wt.length;zt<jt;zt++){const ie=wt[zt],_t=n.get(ie);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),rt(i.TEXTURE_2D,ie,Vt),ct($.__webglFramebuffer,R,ie,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,0),P(ie,Vt)&&D(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?wt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(wt,mt.__webglTexture),rt(wt,A,Vt),o&&A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)ct($.__webglFramebuffer[zt],R,A,i.COLOR_ATTACHMENT0,wt,zt);else ct($.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,wt,0);P(A,Vt)&&D(wt),e.unbindTexture()}R.depthBuffer&&ut(R)}function qt(R){const A=_(R)||o,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let mt=0,ht=$.length;mt<ht;mt++){const gt=$[mt];if(P(gt,A)){const Vt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(gt).__webglTexture;e.bindTexture(Vt,wt),D(Vt),e.unbindTexture()}}}function Tt(R){if(o&&R.samples>0&&xt(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,mt=R.height;let ht=i.COLOR_BUFFER_BIT;const gt=[],Vt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),zt=R.isWebGLMultipleRenderTargets===!0;if(zt)for(let jt=0;jt<A.length;jt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let jt=0;jt<A.length;jt++){gt.push(i.COLOR_ATTACHMENT0+jt),R.depthBuffer&&gt.push(Vt);const ie=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(ie===!1&&(R.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),zt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[jt]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Vt])),zt){const _t=n.get(A[jt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,$,mt,0,0,$,mt,ht,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),zt)for(let jt=0;jt<A.length;jt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[jt]);const ie=n.get(A[jt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Ht(R){return Math.min(l,R.samples)}function xt(R){const A=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qt(R){const A=s.render.frame;v.get(R)!==A&&(v.set(R,A),R.update())}function ee(R,A){const $=R.colorSpace,mt=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===rs||$!==_n&&$!==Ze&&(ve.getTransfer($)===ge?o===!1?t.has("EXT_sRGB")===!0&&mt===rn?(R.format=rs,R.minFilter=je,R.generateMipmaps=!1):A=to.sRGBToLinear(A):(mt!==rn||ht!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=T,this.setTexture3D=U,this.setTextureCube=I,this.rebindTextures=nt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=xt}function Sd(i,t,e){const n=e.isWebGL2;function a(r,s=Ze){let o;const c=ve.getTransfer(s);if(r===Rn)return i.UNSIGNED_BYTE;if(r===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(r===il)return i.BYTE;if(r===rl)return i.SHORT;if(r===fs)return i.UNSIGNED_SHORT;if(r===Xa)return i.INT;if(r===wn)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Ci)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sl)return i.ALPHA;if(r===rn)return i.RGBA;if(r===al)return i.LUMINANCE;if(r===ol)return i.LUMINANCE_ALPHA;if(r===zn)return i.DEPTH_COMPONENT;if(r===vi)return i.DEPTH_STENCIL;if(r===rs)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ll)return i.RED;if(r===ja)return i.RED_INTEGER;if(r===cl)return i.RG;if(r===Za)return i.RG_INTEGER;if(r===Ka)return i.RGBA_INTEGER;if(r===xr||r===yr||r===Mr||r===Sr)if(c===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===As||r===bs||r===Rs||r===Cs)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===As)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ps||r===Ls)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ps)return c===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ls)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Is||r===Us||r===Ds||r===Ns||r===Fs||r===Bs||r===Os||r===zs||r===Vs||r===Gs||r===Hs||r===Ws||r===ks||r===Xs)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Is)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Us)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ds)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ns)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Os)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ws)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ks)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xs)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Er||r===qs||r===Ys)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Er)return c===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ys)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ul||r===js||r===Zs||r===Ks)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Er)return o.COMPRESSED_RED_RGTC1_EXT;if(r===js)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ks)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class Ed extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ir extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wd={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],f=h.position.distanceTo(l.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Td extends qe{constructor(t,e,n,a,r,s,o,c,u,h){if(h=h!==void 0?h:zn,h!==zn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=wn),n===void 0&&h===vi&&(n=On),super(null,a,r,s,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ad extends _i{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,u=null,h=null,l=null,f=null,p=null,v=null;const g=e.getContextAttributes();let m=null,d=null;const x=[],y=[],_=new en;_.layers.enable(1),_.viewport=new Le;const E=new en;E.layers.enable(2),E.viewport=new Le;const P=[_,E],D=new Ed;D.layers.enable(1),D.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let U=x[T];return U===void 0&&(U=new jr,x[T]=U),U.getTargetRaySpace()},this.getControllerGrip=function(T){let U=x[T];return U===void 0&&(U=new jr,x[T]=U),U.getGripSpace()},this.getHand=function(T){let U=x[T];return U===void 0&&(U=new jr,x[T]=U),U.getHandSpace()};function w(T){const U=y.indexOf(T.inputSource);if(U===-1)return;const I=x[U];I!==void 0&&(I.update(T.inputSource,T.frame,u||s),I.dispatchEvent({type:T.type,data:T.inputSource}))}function L(){a.removeEventListener("select",w),a.removeEventListener("selectstart",w),a.removeEventListener("selectend",w),a.removeEventListener("squeeze",w),a.removeEventListener("squeezestart",w),a.removeEventListener("squeezeend",w),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",V);for(let T=0;T<x.length;T++){const U=y[T];U!==null&&(y[T]=null,x[T].disconnect(U))}O=null,M=null,t.setRenderTarget(m),p=null,f=null,l=null,a=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(T){u=T},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(T){if(a=T,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",w),a.addEventListener("selectstart",w),a.addEventListener("selectend",w),a.addEventListener("squeeze",w),a.addEventListener("squeezestart",w),a.addEventListener("squeezeend",w),a.addEventListener("end",L),a.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,U),a.updateRenderState({baseLayer:p}),d=new Wn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,I=null,C=null;g.depth&&(C=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?vi:zn,I=g.stencil?On:wn);const b={colorFormat:e.RGBA8,depthFormat:C,scaleFactor:r};l=new XRWebGLBinding(a,e),f=l.createProjectionLayer(b),a.updateRenderState({layers:[f]}),d=new Wn(f.textureWidth,f.textureHeight,{format:rn,type:Rn,depthTexture:new Td(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const q=t.properties.get(d);q.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await a.requestReferenceSpace(o),W.setContext(a),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function V(T){for(let U=0;U<T.removed.length;U++){const I=T.removed[U],C=y.indexOf(I);C>=0&&(y[C]=null,x[C].disconnect(I))}for(let U=0;U<T.added.length;U++){const I=T.added[U];let C=y.indexOf(I);if(C===-1){for(let q=0;q<x.length;q++)if(q>=y.length){y.push(I),C=q;break}else if(y[q]===null){y[q]=I,C=q;break}if(C===-1)break}const b=x[C];b&&b.connect(I)}}const H=new lt,N=new lt;function k(T,U,I){H.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition(I.matrixWorld);const C=H.distanceTo(N),b=U.projectionMatrix.elements,q=I.projectionMatrix.elements,rt=b[14]/(b[10]-1),J=b[14]/(b[10]+1),j=(b[9]+1)/b[5],at=(b[9]-1)/b[5],ct=(b[8]-1)/b[0],X=(q[8]+1)/q[0],Pt=rt*ct,ut=rt*X,nt=C/(-ct+X),ot=nt*-ct;U.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ot),T.translateZ(nt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const qt=rt+nt,Tt=J+nt,Ht=Pt-ot,xt=ut+(C-ot),Qt=j*J/Tt*qt,ee=at*J/Tt*qt;T.projectionMatrix.makePerspective(Ht,xt,Qt,ee,qt,Tt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function tt(T,U){U===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(U.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(a===null)return;D.near=E.near=_.near=T.near,D.far=E.far=_.far=T.far,(O!==D.near||M!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,M=D.far);const U=T.parent,I=D.cameras;tt(D,U);for(let C=0;C<I.length;C++)tt(I[C],U);I.length===2?k(D,_,E):D.projectionMatrix.copy(_.projectionMatrix),F(T,D,U)};function F(T,U,I){I===null?T.matrix.copy(U.matrixWorld):(T.matrix.copy(I.matrixWorld),T.matrix.invert(),T.matrix.multiply(U.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(U.projectionMatrix),T.projectionMatrixInverse.copy(U.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=ss*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(T){c=T,f!==null&&(f.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)};let B=null;function Z(T,U){if(h=U.getViewerPose(u||s),v=U,h!==null){const I=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let C=!1;I.length!==D.cameras.length&&(D.cameras.length=0,C=!0);for(let b=0;b<I.length;b++){const q=I[b];let rt=null;if(p!==null)rt=p.getViewport(q);else{const j=l.getViewSubImage(f,q);rt=j.viewport,b===0&&(t.setRenderTargetTextures(d,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(d))}let J=P[b];J===void 0&&(J=new en,J.layers.enable(b),J.viewport=new Le,P[b]=J),J.matrix.fromArray(q.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(q.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(rt.x,rt.y,rt.width,rt.height),b===0&&(D.matrix.copy(J.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),C===!0&&D.cameras.push(J)}}for(let I=0;I<x.length;I++){const C=y[I],b=x[I];C!==null&&b!==void 0&&b.update(C,U,u||s)}B&&B(T,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),v=null}const W=new uo;W.setAnimationLoop(Z),this.setAnimationLoop=function(T){B=T},this.dispose=function(){}}}function bd(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,lo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,x,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),l(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,x,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ve&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ve&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Rd(i,t,e,n){let a={},r={},s=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function u(x,y){let _=a[x.id];_===void 0&&(v(x),_=h(x),a[x.id]=_,x.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(x,E);const P=t.render.frame;r[x.id]!==P&&(f(x),r[x.id]=P)}function h(x){const y=l();x.__bindingPointIndex=y;const _=i.createBuffer(),E=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function l(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=a[x.id],_=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,D=_.length;P<D;P++){const O=_[P];if(p(O,P,E)===!0){const M=O.__offset,w=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let V=0;V<w.length;V++){const H=w[V],N=g(H);typeof H=="number"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,M+L,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=H.elements[0],O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=H.elements[0],O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=H.elements[0]):(H.toArray(O.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,O.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,_){const E=x.value;if(_[y]===void 0){if(typeof E=="number")_[y]=E;else{const P=Array.isArray(E)?E:[E],D=[];for(let O=0;O<P.length;O++)D.push(P[O].clone());_[y]=D}return!0}else if(typeof E=="number"){if(_[y]!==E)return _[y]=E,!0}else{const P=Array.isArray(_[y])?_[y]:[_[y]],D=Array.isArray(E)?E:[E];for(let O=0;O<P.length;O++){const M=P[O];if(M.equals(D[O])===!1)return M.copy(D[O]),!0}}return!1}function v(x){const y=x.uniforms;let _=0;const E=16;let P=0;for(let D=0,O=y.length;D<O;D++){const M=y[D],w={boundary:0,storage:0},L=Array.isArray(M.value)?M.value:[M.value];for(let V=0,H=L.length;V<H;V++){const N=L[V],k=g(N);w.boundary+=k.boundary,w.storage+=k.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=_,D>0){P=_%E;const V=E-P;P!==0&&V-w.boundary<0&&(_+=E-P,M.__offset=_)}_+=w.storage}return P=_%E,P>0&&(_+=E-P),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=s.indexOf(y.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function d(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:u,dispose:d}}class go{constructor(t={}){const{canvas:e=wl(),context:n=null,depth:a=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const y=this;let _=!1,E=0,P=0,D=null,O=-1,M=null;const w=new Le,L=new Le;let V=null;const H=new pe(0);let N=0,k=e.width,tt=e.height,F=1,B=null,Z=null;const W=new Le(0,0,k,tt),T=new Le(0,0,k,tt);let U=!1;const I=new ms;let C=!1,b=!1,q=null;const rt=new Ae,J=new me,j=new lt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return D===null?F:1}let X=n;function Pt(S,G){for(let K=0;K<S.length;K++){const z=S[K],Q=e.getContext(z,G);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hs}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),X===null){const G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),X=Pt(G,S),X===null)throw Pt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ut,nt,ot,qt,Tt,Ht,xt,Qt,ee,R,A,$,mt,ht,gt,Vt,wt,zt,jt,ie,_t,ce,Jt,Yt;function Wt(){ut=new Bu(X),nt=new Lu(X,ut,t),ut.init(nt),ce=new Sd(X,ut,nt),ot=new yd(X,ut,nt),qt=new Vu(X),Tt=new ad,Ht=new Md(X,ut,ot,Tt,nt,ce,qt),xt=new Uu(y),Qt=new Fu(y),ee=new Kl(X,nt),Jt=new Cu(X,ut,ee,nt),R=new Ou(X,ee,qt,Jt),A=new ku(X,R,ee,qt),jt=new Wu(X,nt,Ht),Vt=new Iu(Tt),$=new sd(y,xt,Qt,ut,nt,Jt,Vt),mt=new bd(y,Tt),ht=new ld,gt=new pd(ut,nt),zt=new Ru(y,xt,Qt,ot,A,f,c),wt=new xd(y,A,nt),Yt=new Rd(X,qt,nt,ot),ie=new Pu(X,ut,qt,nt),_t=new zu(X,ut,qt,nt),qt.programs=$.programs,y.capabilities=nt,y.extensions=ut,y.properties=Tt,y.renderLists=ht,y.shadowMap=wt,y.state=ot,y.info=qt}Wt();const Nt=new Ad(y,X);this.xr=Nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const S=ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(k,tt,!1))},this.getSize=function(S){return S.set(k,tt)},this.setSize=function(S,G,K=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,tt=G,e.width=Math.floor(S*F),e.height=Math.floor(G*F),K===!0&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(k*F,tt*F).floor()},this.setDrawingBufferSize=function(S,G,K){k=S,tt=G,F=K,e.width=Math.floor(S*K),e.height=Math.floor(G*K),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,G,K,z){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,G,K,z),ot.viewport(w.copy(W).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(T)},this.setScissor=function(S,G,K,z){S.isVector4?T.set(S.x,S.y,S.z,S.w):T.set(S,G,K,z),ot.scissor(L.copy(T).multiplyScalar(F).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){ot.setScissorTest(U=S)},this.setOpaqueSort=function(S){B=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,G=!0,K=!0){let z=0;if(S){let Q=!1;if(D!==null){const vt=D.texture.format;Q=vt===Ka||vt===Za||vt===ja}if(Q){const vt=D.texture.type,Ft=vt===Rn||vt===wn||vt===fs||vt===On||vt===qa||vt===Ya,Rt=zt.getClearColor(),Dt=zt.getClearAlpha(),Et=Rt.r,Kt=Rt.g,$t=Rt.b;Ft?(p[0]=Et,p[1]=Kt,p[2]=$t,p[3]=Dt,X.clearBufferuiv(X.COLOR,0,p)):(v[0]=Et,v[1]=Kt,v[2]=$t,v[3]=Dt,X.clearBufferiv(X.COLOR,0,v))}else z|=X.COLOR_BUFFER_BIT}G&&(z|=X.DEPTH_BUFFER_BIT),K&&(z|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),ht.dispose(),gt.dispose(),Tt.dispose(),xt.dispose(),Qt.dispose(),A.dispose(),Jt.dispose(),Yt.dispose(),$.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",st),Nt.removeEventListener("sessionend",it),q&&(q.dispose(),q=null),dt.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=qt.autoReset,G=wt.enabled,K=wt.autoUpdate,z=wt.needsUpdate,Q=wt.type;Wt(),qt.autoReset=S,wt.enabled=G,wt.autoUpdate=K,wt.needsUpdate=z,wt.type=Q}function Ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yt(S){const G=S.target;G.removeEventListener("dispose",yt),ft(G)}function ft(S){At(S),Tt.remove(S)}function At(S){const G=Tt.get(S).programs;G!==void 0&&(G.forEach(function(K){$.releaseProgram(K)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,K,z,Q,vt){G===null&&(G=at);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,Rt=Gt(S,G,K,z,Q);ot.setMaterial(z,Ft);let Dt=K.index,Et=1;if(z.wireframe===!0){if(Dt=R.getWireframeAttribute(K),Dt===void 0)return;Et=2}const Kt=K.drawRange,$t=K.attributes.position;let he=Kt.start*Et,ye=(Kt.start+Kt.count)*Et;vt!==null&&(he=Math.max(he,vt.start*Et),ye=Math.min(ye,(vt.start+vt.count)*Et)),Dt!==null?(he=Math.max(he,0),ye=Math.min(ye,Dt.count)):$t!=null&&(he=Math.max(he,0),ye=Math.min(ye,$t.count));const fe=ye-he;if(fe<0||fe===1/0)return;Jt.setup(Q,z,Rt,K,Dt);let le,de=ie;if(Dt!==null&&(le=ee.get(Dt),de=_t,de.setIndex(le)),Q.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*ct()),de.setMode(X.LINES)):de.setMode(X.TRIANGLES);else if(Q.isLine){let kt=z.linewidth;kt===void 0&&(kt=1),ot.setLineWidth(kt*ct()),Q.isLineSegments?de.setMode(X.LINES):Q.isLineLoop?de.setMode(X.LINE_LOOP):de.setMode(X.LINE_STRIP)}else Q.isPoints?de.setMode(X.POINTS):Q.isSprite&&de.setMode(X.TRIANGLES);if(Q.isInstancedMesh)de.renderInstances(he,fe,Q.count);else if(K.isInstancedBufferGeometry){const kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ge=Math.min(K.instanceCount,kt);de.renderInstances(he,fe,Ge)}else de.render(he,fe)};function Zt(S,G,K){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,et(S,G,K),S.side=Cn,S.needsUpdate=!0,et(S,G,K),S.side=pn):et(S,G,K)}this.compile=function(S,G,K=null){K===null&&(K=S),m=gt.get(K),m.init(),x.push(m),K.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),S!==K&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights);const z=new Set;return S.traverse(function(Q){const vt=Q.material;if(vt)if(Array.isArray(vt))for(let Ft=0;Ft<vt.length;Ft++){const Rt=vt[Ft];Zt(Rt,K,Q),z.add(Rt)}else Zt(vt,K,Q),z.add(vt)}),x.pop(),m=null,z},this.compileAsync=function(S,G,K=null){const z=this.compile(S,G,K);return new Promise(Q=>{function vt(){if(z.forEach(function(Ft){Tt.get(Ft).currentProgram.isReady()&&z.delete(Ft)}),z.size===0){Q(S);return}setTimeout(vt,10)}ut.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ae=null;function se(S){ae&&ae(S)}function st(){dt.stop()}function it(){dt.start()}const dt=new uo;dt.setAnimationLoop(se),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(S){ae=S,Nt.setAnimationLoop(S),S===null?dt.stop():dt.start()},Nt.addEventListener("sessionstart",st),Nt.addEventListener("sessionend",it),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(G),G=Nt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,G,D),m=gt.get(S,x.length),m.init(),x.push(m),rt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),I.setFromProjectionMatrix(rt),b=this.localClippingEnabled,C=Vt.init(this.clippingPlanes,b),g=ht.get(S,d.length),g.init(),d.push(g),pt(S,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(B,Z),this.info.render.frame++,C===!0&&Vt.beginShadows();const K=m.state.shadowsArray;if(wt.render(K,S,G),C===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(g,S),m.setupLights(y._useLegacyLights),G.isArrayCamera){const z=G.cameras;for(let Q=0,vt=z.length;Q<vt;Q++){const Ft=z[Q];te(g,S,Ft,Ft.viewport)}}else te(g,S,G);D!==null&&(Ht.updateMultisampleRenderTarget(D),Ht.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(y,S,G),Jt.resetDefaultState(),O=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function pt(S,G,K,z){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||I.intersectsSprite(S)){z&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(rt);const Ft=A.update(S),Rt=S.material;Rt.visible&&g.push(S,Ft,Rt,K,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||I.intersectsObject(S))){const Ft=A.update(S),Rt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),j.copy(S.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),j.copy(Ft.boundingSphere.center)),j.applyMatrix4(S.matrixWorld).applyMatrix4(rt)),Array.isArray(Rt)){const Dt=Ft.groups;for(let Et=0,Kt=Dt.length;Et<Kt;Et++){const $t=Dt[Et],he=Rt[$t.materialIndex];he&&he.visible&&g.push(S,Ft,he,K,j.z,$t)}}else Rt.visible&&g.push(S,Ft,Rt,K,j.z,null)}}const vt=S.children;for(let Ft=0,Rt=vt.length;Ft<Rt;Ft++)pt(vt[Ft],G,K,z)}function te(S,G,K,z){const Q=S.opaque,vt=S.transmissive,Ft=S.transparent;m.setupLightsView(K),C===!0&&Vt.setGlobalState(y.clippingPlanes,K),vt.length>0&&Bt(Q,vt,G,K),z&&ot.viewport(w.copy(z)),Q.length>0&&Mt(Q,G,K),vt.length>0&&Mt(vt,G,K),Ft.length>0&&Mt(Ft,G,K),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Bt(S,G,K,z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const vt=nt.isWebGL2;q===null&&(q=new Wn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?Ci:Rn,minFilter:Ri,samples:vt?4:0})),y.getDrawingBufferSize(J),vt?q.setSize(J.x,J.y):q.setSize(as(J.x),as(J.y));const Ft=y.getRenderTarget();y.setRenderTarget(q),y.getClearColor(H),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Rt=y.toneMapping;y.toneMapping=bn,Mt(S,K,z),Ht.updateMultisampleRenderTarget(q),Ht.updateRenderTargetMipmap(q);let Dt=!1;for(let Et=0,Kt=G.length;Et<Kt;Et++){const $t=G[Et],he=$t.object,ye=$t.geometry,fe=$t.material,le=$t.group;if(fe.side===pn&&he.layers.test(z.layers)){const de=fe.side;fe.side=Ve,fe.needsUpdate=!0,It(he,K,z,ye,fe,le),fe.side=de,fe.needsUpdate=!0,Dt=!0}}Dt===!0&&(Ht.updateMultisampleRenderTarget(q),Ht.updateRenderTargetMipmap(q)),y.setRenderTarget(Ft),y.setClearColor(H,N),y.toneMapping=Rt}function Mt(S,G,K){const z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,vt=S.length;Q<vt;Q++){const Ft=S[Q],Rt=Ft.object,Dt=Ft.geometry,Et=z===null?Ft.material:z,Kt=Ft.group;Rt.layers.test(K.layers)&&It(Rt,G,K,Dt,Et,Kt)}}function It(S,G,K,z,Q,vt){S.onBeforeRender(y,G,K,z,Q,vt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(y,G,K,z,S,vt),Q.transparent===!0&&Q.side===pn&&Q.forceSinglePass===!1?(Q.side=Ve,Q.needsUpdate=!0,y.renderBufferDirect(K,G,z,Q,S,vt),Q.side=Cn,Q.needsUpdate=!0,y.renderBufferDirect(K,G,z,Q,S,vt),Q.side=pn):y.renderBufferDirect(K,G,z,Q,S,vt),S.onAfterRender(y,G,K,z,Q,vt)}function et(S,G,K){G.isScene!==!0&&(G=at);const z=Tt.get(S),Q=m.state.lights,vt=m.state.shadowsArray,Ft=Q.state.version,Rt=$.getParameters(S,Q.state,vt,G,K),Dt=$.getProgramCacheKey(Rt);let Et=z.programs;z.environment=S.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(S.isMeshStandardMaterial?Qt:xt).get(S.envMap||z.environment),Et===void 0&&(S.addEventListener("dispose",yt),Et=new Map,z.programs=Et);let Kt=Et.get(Dt);if(Kt!==void 0){if(z.currentProgram===Kt&&z.lightsStateVersion===Ft)return Ut(S,Rt),Kt}else Rt.uniforms=$.getUniforms(S),S.onBuild(K,Rt,y),S.onBeforeCompile(Rt,y),Kt=$.acquireProgram(Rt,Dt),Et.set(Dt,Kt),z.uniforms=Rt.uniforms;const $t=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($t.clippingPlanes=Vt.uniform),Ut(S,Rt),z.needsLights=St(S),z.lightsStateVersion=Ft,z.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),z.currentProgram=Kt,z.uniformsList=null,Kt}function bt(S){if(S.uniformsList===null){const G=S.currentProgram.getUniforms();S.uniformsList=ar.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Ut(S,G){const K=Tt.get(S);K.outputColorSpace=G.outputColorSpace,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Gt(S,G,K,z,Q){G.isScene!==!0&&(G=at),Ht.resetTextureUnits();const vt=G.fog,Ft=z.isMeshStandardMaterial?G.environment:null,Rt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_n,Dt=(z.isMeshStandardMaterial?Qt:xt).get(z.envMap||Ft),Et=z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Kt=!!K.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),$t=!!K.morphAttributes.position,he=!!K.morphAttributes.normal,ye=!!K.morphAttributes.color;let fe=bn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=y.toneMapping);const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=le!==void 0?le.length:0,kt=Tt.get(z),Ge=m.state.lights;if(C===!0&&(b===!0||S!==M)){const Ee=S===M&&z.id===O;Vt.setState(z,S,Ee)}let ue=!1;z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ge.state.version||kt.outputColorSpace!==Rt||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||kt.envMap!==Dt||z.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Vt.numPlanes||kt.numIntersection!==Vt.numIntersection)||kt.vertexAlphas!==Et||kt.vertexTangents!==Kt||kt.morphTargets!==$t||kt.morphNormals!==he||kt.morphColors!==ye||kt.toneMapping!==fe||nt.isWebGL2===!0&&kt.morphTargetsCount!==de)&&(ue=!0):(ue=!0,kt.__version=z.version);let _e=kt.currentProgram;ue===!0&&(_e=et(z,G,Q));let we=!1,Ce=!1,He=!1;const Xt=_e.getUniforms(),Se=kt.uniforms;if(ot.useProgram(_e.program)&&(we=!0,Ce=!0,He=!0),z.id!==O&&(O=z.id,Ce=!0),we||M!==S){Xt.setValue(X,"projectionMatrix",S.projectionMatrix),Xt.setValue(X,"viewMatrix",S.matrixWorldInverse);const Ee=Xt.map.cameraPosition;Ee!==void 0&&Ee.setValue(X,j.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ce=!0,He=!0)}if(Q.isSkinnedMesh){Xt.setOptional(X,Q,"bindMatrix"),Xt.setOptional(X,Q,"bindMatrixInverse");const Ee=Q.skeleton;Ee&&(nt.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),Xt.setValue(X,"boneTexture",Ee.boneTexture,Ht),Xt.setValue(X,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Me=K.morphAttributes;if((Me.position!==void 0||Me.normal!==void 0||Me.color!==void 0&&nt.isWebGL2===!0)&&jt.update(Q,K,_e),(Ce||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,Xt.setValue(X,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Se.envMap.value=Dt,Se.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Ce&&(Xt.setValue(X,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&Lt(Se,He),vt&&z.fog===!0&&mt.refreshFogUniforms(Se,vt),mt.refreshMaterialUniforms(Se,z,F,tt,q),ar.upload(X,bt(kt),Se,Ht)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ar.upload(X,bt(kt),Se,Ht),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Xt.setValue(X,"center",Q.center),Xt.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Xt.setValue(X,"normalMatrix",Q.normalMatrix),Xt.setValue(X,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ee=z.uniformsGroups;for(let Ke=0,gr=Ee.length;Ke<gr;Ke++)if(nt.isWebGL2){const Di=Ee[Ke];Yt.update(Di,_e),Yt.bind(Di,_e)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _e}function Lt(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function St(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,G,K){Tt.get(S.texture).__webglTexture=G,Tt.get(S.depthTexture).__webglTexture=K;const z=Tt.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=K===void 0,z.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const K=Tt.get(S);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,K=0){D=S,E=G,P=K;let z=!0,Q=null,vt=!1,Ft=!1;if(S){const Dt=Tt.get(S);Dt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(X.FRAMEBUFFER,null),z=!1):Dt.__webglFramebuffer===void 0?Ht.setupRenderTarget(S):Dt.__hasExternalTextures&&Ht.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Ft=!0);const Kt=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Kt[G])?Q=Kt[G][K]:Q=Kt[G],vt=!0):nt.isWebGL2&&S.samples>0&&Ht.useMultisampledRTT(S)===!1?Q=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Kt)?Q=Kt[K]:Q=Kt,w.copy(S.viewport),L.copy(S.scissor),V=S.scissorTest}else w.copy(W).multiplyScalar(F).floor(),L.copy(T).multiplyScalar(F).floor(),V=U;if(ot.bindFramebuffer(X.FRAMEBUFFER,Q)&&nt.drawBuffers&&z&&ot.drawBuffers(S,Q),ot.viewport(w),ot.scissor(L),ot.setScissorTest(V),vt){const Dt=Tt.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Dt.__webglTexture,K)}else if(Ft){const Dt=Tt.get(S.texture),Et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Et)}O=-1},this.readRenderTargetPixels=function(S,G,K,z,Q,vt,Ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Rt=Rt[Ft]),Rt){ot.bindFramebuffer(X.FRAMEBUFFER,Rt);try{const Dt=S.texture,Et=Dt.format,Kt=Dt.type;if(Et!==rn&&ce.convert(Et)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=Kt===Ci&&(ut.has("EXT_color_buffer_half_float")||nt.isWebGL2&&ut.has("EXT_color_buffer_float"));if(Kt!==Rn&&ce.convert(Kt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Kt===Tn&&(nt.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-z&&K>=0&&K<=S.height-Q&&X.readPixels(G,K,z,Q,ce.convert(Et),ce.convert(Kt),vt)}finally{const Dt=D!==null?Tt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(X.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(S,G,K=0){const z=Math.pow(2,-K),Q=Math.floor(G.image.width*z),vt=Math.floor(G.image.height*z);Ht.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,S.x,S.y,Q,vt),ot.unbindTexture()},this.copyTextureToTexture=function(S,G,K,z=0){const Q=G.image.width,vt=G.image.height,Ft=ce.convert(K.format),Rt=ce.convert(K.type);Ht.setTexture2D(K,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,z,S.x,S.y,Q,vt,Ft,Rt,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,z,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Ft,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,z,S.x,S.y,Ft,Rt,G.image),z===0&&K.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(S,G,K,z,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=S.max.x-S.min.x+1,Ft=S.max.y-S.min.y+1,Rt=S.max.z-S.min.z+1,Dt=ce.convert(z.format),Et=ce.convert(z.type);let Kt;if(z.isData3DTexture)Ht.setTexture3D(z,0),Kt=X.TEXTURE_3D;else if(z.isDataArrayTexture)Ht.setTexture2DArray(z,0),Kt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,z.unpackAlignment);const $t=X.getParameter(X.UNPACK_ROW_LENGTH),he=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ye=X.getParameter(X.UNPACK_SKIP_PIXELS),fe=X.getParameter(X.UNPACK_SKIP_ROWS),le=X.getParameter(X.UNPACK_SKIP_IMAGES),de=K.isCompressedTexture?K.mipmaps[0]:K.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,de.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,de.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,S.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,S.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,S.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D(Kt,Q,G.x,G.y,G.z,vt,Ft,Rt,Dt,Et,de.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Kt,Q,G.x,G.y,G.z,vt,Ft,Rt,Dt,de.data)):X.texSubImage3D(Kt,Q,G.x,G.y,G.z,vt,Ft,Rt,Dt,Et,de),X.pixelStorei(X.UNPACK_ROW_LENGTH,$t),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,he),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ye),X.pixelStorei(X.UNPACK_SKIP_ROWS,fe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,le),Q===0&&z.generateMipmaps&&X.generateMipmap(Kt),ot.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ht.setTextureCube(S,0):S.isData3DTexture?Ht.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ht.setTexture2DArray(S,0):Ht.setTexture2D(S,0),ot.unbindTexture()},this.resetState=function(){E=0,P=0,D=null,ot.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ds?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===pr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Vn:$a}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vn?Ie:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Cd extends go{}Cd.prototype.isWebGL1Renderer=!0;class Pd extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ld extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _o extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Zr=new Ae,za=new lt,Va=new lt;class Id{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;za.setFromMatrixPosition(t.matrixWorld),e.position.copy(za),Va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Va),e.updateMatrixWorld(),Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ud extends Id{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dd extends _o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nd extends _o{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);function rr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xo={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(u,h){if(!a[u]){if(!n[u]){var l=typeof rr=="function"&&rr;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=a[u]={exports:{}};n[u][0].call(f.exports,function(p){var v=n[u][1][p];return s(v||p)},f,f.exports,e,n,a,r)}return a[u].exports}for(var o=typeof rr=="function"&&rr,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;s.prototype.setFromPoints=function(u,h,l,f){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(u[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<u.length;m++){var d=u[m];g&&(g.vmult(d,o),d=o),d.x>v.x&&(v.x=d.x),d.x<p.x&&(p.x=d.x),d.y>v.y&&(v.y=d.y),d.y<p.y&&(p.y=d.y),d.z>v.z&&(v.z=d.z),d.z<p.z&&(p.z=d.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),f&&(p.x-=f,p.y-=f,p.z-=f,v.x+=f,v.y+=f,v.z+=f),this},s.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,p=u.upperBound;return(f.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(f.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(f.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,p=u.upperBound;return h.x<=f.x&&l.x>=p.x&&h.y<=f.y&&l.y>=p.y&&h.z<=f.z&&l.z>=p.z},s.prototype.getCorners=function(u,h,l,f,p,v,g,m){var d=this.lowerBound,x=this.upperBound;u.copy(d),h.set(x.x,d.y,d.z),l.set(x.x,x.y,d.z),f.set(d.x,x.y,x.z),p.set(x.x,d.y,d.z),v.set(d.x,x.y,d.z),g.set(d.x,d.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(u,h){var l=c,f=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],x=l[6],y=l[7];this.getCorners(f,p,v,g,m,d,x,y);for(var _=0;_!==8;_++){var E=l[_];u.pointToLocal(E,E)}return h.setFromPoints(l)},s.prototype.toWorldFrame=function(u,h){var l=c,f=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],x=l[6],y=l[7];this.getCorners(f,p,v,g,m,d,x,y);for(var _=0;_!==8;_++){var E=l[_];u.pointToWorld(E,E)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var u=o;o=s,s=u}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,d){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,d,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,d,x):this.doBoundingSphereBroadphase(g,m,d,x)};var h=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,d,x){var y=h;m.position.vsub(g.position,y);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),E=y.norm2();E<_&&(d.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,d,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(d.push(g),x.push(m))};var l={keys:[]},f=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var d=l,x=f,y=p,_=g.length,E=0;E!==_;E++)x[E]=g[E],y[E]=m[E];g.length=0,m.length=0;for(var E=0;E!==_;E++){var P=x[E].id,D=y[E].id,O=P<D?P+","+D:D+","+P;d[O]=E,d.keys.push(O)}for(var E=0;E!==d.keys.length;E++){var O=d.keys.pop(),M=d[O];g.push(x[M]),m.push(y[M]),delete d[O]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var d=v;return g.position.vsub(m.position,d),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>d.norm2()},c.prototype.aabbQuery=function(g,m,d){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,f,p,v){r.apply(this),this.nx=f||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new s;new s,c.prototype.collisionPairs=function(h,l,f){var p=h.numObjects(),v=h.bodies,rt=this.aabbMax,q=this.aabbMin,g=this.nx,m=this.ny,d=this.nz,x=m*d,y=d,_=1,E=rt.x,P=rt.y,D=rt.z,O=q.x,M=q.y,w=q.z,L=g/(E-O),V=m/(P-M),H=d/(D-w),N=(E-O)/g,k=(P-M)/m,tt=(D-w)/d,F=Math.sqrt(N*N+k*k+tt*tt)*.5,B=o.types,Z=B.SPHERE,W=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var T=this.bins,U=this.binLengths,I=this.bins.length,C=0;C!==I;C++)U[C]=0;var b=Math.ceil,q=Math.min,rt=Math.max;function J(wt,zt,jt,ie,_t,ce,Jt){var Yt=(wt-O)*L|0,Wt=(zt-M)*V|0,Nt=(jt-w)*H|0,ne=b((ie-O)*L),Y=b((_t-M)*V),Ct=b((ce-w)*H);Yt<0?Yt=0:Yt>=g&&(Yt=g-1),Wt<0?Wt=0:Wt>=m&&(Wt=m-1),Nt<0?Nt=0:Nt>=d&&(Nt=d-1),ne<0?ne=0:ne>=g&&(ne=g-1),Y<0?Y=0:Y>=m&&(Y=m-1),Ct<0?Ct=0:Ct>=d&&(Ct=d-1),Yt*=x,Wt*=y,Nt*=_,ne*=x,Y*=y,Ct*=_;for(var yt=Yt;yt<=ne;yt+=x)for(var ft=Wt;ft<=Y;ft+=y)for(var At=Nt;At<=Ct;At+=_){var Zt=yt+ft+At;T[Zt][U[Zt]++]=Jt}}for(var C=0;C!==p;C++){var j=v[C],at=j.shape;switch(at.type){case Z:var ct=j.position.x,X=j.position.y,Pt=j.position.z,ut=at.radius;J(ct-ut,X-ut,Pt-ut,ct+ut,X+ut,Pt+ut,j);break;case W:at.worldNormalNeedsUpdate&&at.computeWorldNormal(j.quaternion);var nt=at.worldNormal,ot=O+N*.5-j.position.x,qt=M+k*.5-j.position.y,Tt=w+tt*.5-j.position.z,Ht=u;Ht.set(ot,qt,Tt);for(var xt=0,Qt=0;xt!==g;xt++,Qt+=x,Ht.y=qt,Ht.x+=N)for(var ee=0,R=0;ee!==m;ee++,R+=y,Ht.z=Tt,Ht.y+=k)for(var A=0,$=0;A!==d;A++,$+=_,Ht.z+=tt)if(Ht.dot(nt)<F){var mt=Qt+R+$;T[mt][U[mt]++]=j}break;default:j.aabbNeedsUpdate&&j.computeAABB(),J(j.aabb.lowerBound.x,j.aabb.lowerBound.y,j.aabb.lowerBound.z,j.aabb.upperBound.x,j.aabb.upperBound.y,j.aabb.upperBound.z,j);break}}for(var C=0;C!==I;C++){var ht=U[C];if(ht>1)for(var gt=T[C],xt=0;xt!==ht;xt++)for(var j=gt[xt],ee=0;ee!==xt;ee++){var Vt=gt[ee];this.needBroadphaseCollision(j,Vt)&&this.intersectionTest(j,Vt,l,f)}}this.makePairsUnique(l,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,f=l.length,p,v,g,m;for(p=0;p!==f;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new s,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var f=c.bodies[l];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(u)&&h.push(f)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var u=o;o=s,s=u}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(I,C){this.from=I?I.clone():new r,this.to=C?C.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(b){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var f=new h,p=[];l.prototype.intersectWorld=function(I,C){return this.mode=C.mode||l.ANY,this.result=C.result||new c,this.skipBackfaces=!!C.skipBackfaces,this.collisionFilterMask=typeof C.collisionFilterMask<"u"?C.collisionFilterMask:-1,this.collisionFilterGroup=typeof C.collisionFilterGroup<"u"?C.collisionFilterGroup:-1,C.from&&this.from.copy(C.from),C.to&&this.to.copy(C.to),this.callback=C.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),p.length=0,I.broadphase.aabbQuery(I,f,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(I,C,b,q){q.vsub(C,W),b.vsub(C,v),I.vsub(C,g);var rt=W.dot(W),J=W.dot(v),j=W.dot(g),at=v.dot(v),ct=v.dot(g),X,Pt;return(X=at*j-J*ct)>=0&&(Pt=rt*ct-J*j)>=0&&X+Pt<rt*at-J*J}var d=new r,x=new s;l.prototype.intersectBody=function(I,C){C&&(this.result=C,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!I.collisionResponse)&&!(!(this.collisionFilterGroup&I.collisionFilterMask)||!(I.collisionFilterGroup&this.collisionFilterMask)))for(var q=d,rt=x,J=0,j=I.shapes.length;J<j;J++){var at=I.shapes[J];if(!(b&&!at.collisionResponse)&&(I.quaternion.mult(I.shapeOrientations[J],rt),I.quaternion.vmult(I.shapeOffsets[J],q),q.vadd(I.position,q),this.intersectShape(at,rt,q,I),this.result._shouldStop))break}},l.prototype.intersectBodies=function(I,C){C&&(this.result=C,this._updateDirection());for(var b=0,q=I.length;!this.result._shouldStop&&b<q;b++)this.intersectBody(I[b])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(I,C,b,q){var rt=this.from,J=U(rt,this._direction,b);if(!(J>I.boundingSphereRadius)){var j=this[I.type];j&&j.call(this,I,C,b,q)}},new r,new r;var y=new r,_=new r,E=new r,P=new r;new r,new c,l.prototype.intersectBox=function(I,C,b,q){return this.intersectConvex(I.convexPolyhedronRepresentation,C,b,q)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(I,C,b,q){var rt=this.from,J=this.to,j=this._direction,at=new r(0,0,1);C.vmult(at,at);var ct=new r;rt.vsub(b,ct);var X=ct.dot(at);J.vsub(b,ct);var Pt=ct.dot(at);if(!(X*Pt>0)&&!(rt.distanceTo(J)<X)){var ut=at.dot(j);if(!(Math.abs(ut)<this.precision)){var nt=new r,ot=new r,qt=new r;rt.vsub(b,nt);var Tt=-at.dot(nt)/ut;j.scale(Tt,ot),rt.vadd(ot,qt),this.reportIntersection(at,qt,I,q,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(I){var C=this.to,b=this.from;I.lowerBound.x=Math.min(C.x,b.x),I.lowerBound.y=Math.min(C.y,b.y),I.lowerBound.z=Math.min(C.z,b.z),I.upperBound.x=Math.max(C.x,b.x),I.upperBound.y=Math.max(C.y,b.y),I.upperBound.z=Math.max(C.z,b.z)};var D={faceList:[0]};l.prototype.intersectHeightfield=function(I,C,b,q){I.data,I.elementSize;var rt=new r,J=new l(this.from,this.to);o.pointToLocalFrame(b,C,J.from,J.from),o.pointToLocalFrame(b,C,J.to,J.to);var j=[],at=null,ct=null,X=null,Pt=null,ut=I.getIndexOfPosition(J.from.x,J.from.y,j,!1);if(ut&&(at=j[0],ct=j[1],X=j[0],Pt=j[1]),ut=I.getIndexOfPosition(J.to.x,J.to.y,j,!1),ut&&((at===null||j[0]<at)&&(at=j[0]),(X===null||j[0]>X)&&(X=j[0]),(ct===null||j[1]<ct)&&(ct=j[1]),(Pt===null||j[1]>Pt)&&(Pt=j[1])),at!==null){var nt=[];I.getRectMinMax(at,ct,X,Pt,nt),nt[0],nt[1];for(var ot=at;ot<=X;ot++)for(var qt=ct;qt<=Pt;qt++){if(this.result._shouldStop||(I.getConvexTrianglePillar(ot,qt,!1),o.pointToWorldFrame(b,C,I.pillarOffset,rt),this.intersectConvex(I.pillarConvex,C,rt,q,D),this.result._shouldStop))return;I.getConvexTrianglePillar(ot,qt,!0),o.pointToWorldFrame(b,C,I.pillarOffset,rt),this.intersectConvex(I.pillarConvex,C,rt,q,D)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var O=new r,M=new r;l.prototype.intersectSphere=function(I,C,b,q){var rt=this.from,J=this.to,j=I.radius,at=Math.pow(J.x-rt.x,2)+Math.pow(J.y-rt.y,2)+Math.pow(J.z-rt.z,2),ct=2*((J.x-rt.x)*(rt.x-b.x)+(J.y-rt.y)*(rt.y-b.y)+(J.z-rt.z)*(rt.z-b.z)),X=Math.pow(rt.x-b.x,2)+Math.pow(rt.y-b.y,2)+Math.pow(rt.z-b.z,2)-Math.pow(j,2),Pt=Math.pow(ct,2)-4*at*X,ut=O,nt=M;if(!(Pt<0))if(Pt===0)rt.lerp(J,Pt,ut),ut.vsub(b,nt),nt.normalize(),this.reportIntersection(nt,ut,I,q,-1);else{var ot=(-ct-Math.sqrt(Pt))/(2*at),qt=(-ct+Math.sqrt(Pt))/(2*at);if(ot>=0&&ot<=1&&(rt.lerp(J,ot,ut),ut.vsub(b,nt),nt.normalize(),this.reportIntersection(nt,ut,I,q,-1)),this.result._shouldStop)return;qt>=0&&qt<=1&&(rt.lerp(J,qt,ut),ut.vsub(b,nt),nt.normalize(),this.reportIntersection(nt,ut,I,q,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var w=new r;new r,new r;var L=new r;l.prototype.intersectConvex=function(C,b,q,rt,J){for(var j=w,at=L,ct=J&&J.faceList||null,X=C.faces,Pt=C.vertices,ut=C.faceNormals,nt=this._direction,ot=this.from,qt=this.to,Tt=ot.distanceTo(qt),Ht=ct?ct.length:X.length,xt=this.result,Qt=0;!xt._shouldStop&&Qt<Ht;Qt++){var ee=ct?ct[Qt]:Qt,R=X[ee],A=ut[ee],$=b,mt=q;at.copy(Pt[R[0]]),$.vmult(at,at),at.vadd(mt,at),at.vsub(ot,at),$.vmult(A,j);var ht=nt.dot(j);if(!(Math.abs(ht)<this.precision)){var gt=j.dot(at)/ht;if(!(gt<0)){nt.mult(gt,y),y.vadd(ot,y),_.copy(Pt[R[0]]),$.vmult(_,_),mt.vadd(_,_);for(var Vt=1;!xt._shouldStop&&Vt<R.length-1;Vt++){E.copy(Pt[R[Vt]]),P.copy(Pt[R[Vt+1]]),$.vmult(E,E),$.vmult(P,P),mt.vadd(E,E),mt.vadd(P,P);var wt=y.distanceTo(ot);!(m(y,_,E,P)||m(y,E,_,P))||wt>Tt||this.reportIntersection(j,y,C,rt,ee)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var V=new r,H=new r,N=new r,k=new r,tt=new r,F=new r;new h;var B=[],Z=new o;l.prototype.intersectTrimesh=function(C,b,q,rt,J){var j=V,at=B,ct=Z,X=L,Pt=H,ut=N,nt=k,ot=F,qt=tt;J&&J.faceList;var Tt=C.indices;C.vertices,C.faceNormals;var Ht=this.from,xt=this.to,Qt=this._direction;ct.position.copy(q),ct.quaternion.copy(b),o.vectorToLocalFrame(q,b,Qt,Pt),o.pointToLocalFrame(q,b,Ht,ut),o.pointToLocalFrame(q,b,xt,nt);var ee=ut.distanceSquared(nt);C.tree.rayQuery(this,ct,at);for(var R=0,A=at.length;!this.result._shouldStop&&R!==A;R++){var $=at[R];C.getNormal($,j),C.getVertex(Tt[$*3],_),_.vsub(ut,X);var mt=Pt.dot(j),ht=j.dot(X)/mt;if(!(ht<0)){Pt.scale(ht,y),y.vadd(ut,y),C.getVertex(Tt[$*3+1],E),C.getVertex(Tt[$*3+2],P);var gt=y.distanceSquared(ut);!(m(y,E,_,P)||m(y,_,E,P))||gt>ee||(o.vectorToWorldFrame(b,j,qt),o.pointToWorldFrame(q,b,y,ot),this.reportIntersection(qt,ot,C,rt,$))}}at.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(I,C,b,q,rt){var J=this.from,j=this.to,at=J.distanceTo(C),ct=this.result;if(!(this.skipBackfaces&&I.dot(this._direction)>0))switch(ct.hitFaceIndex=typeof rt<"u"?rt:-1,this.mode){case l.ALL:this.hasHit=!0,ct.set(J,j,I,C,b,q,at),ct.hasHit=!0,this.callback(ct);break;case l.CLOSEST:(at<ct.distance||!ct.hasHit)&&(this.hasHit=!0,ct.hasHit=!0,ct.set(J,j,I,C,b,q,at));break;case l.ANY:this.hasHit=!0,ct.hasHit=!0,ct.set(J,j,I,C,b,q,at),ct._shouldStop=!0;break}};var W=new r,T=new r;function U(I,C,b){b.vsub(I,W);var q=W.dot(C);C.mult(q,T),T.vadd(I,T);var rt=b.distanceTo(T);return rt}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,u,h,l,f,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=f,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},s.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,f=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,f))break;this.intersectionTest(g,m,c,u)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var f=o.boundingRadius,p=c.boundingRadius,v=h+f,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,f=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var d=p[m],x=d.position.x;o+=x,c+=x*x;var y=d.position.y;u+=y,h+=y*y;var _=d.position.z;l+=_,f+=_*_}var E=c-o*o*g,P=h-u*u*g,D=f-l*l*g;E>P?E>D?this.axisIndex=0:this.axisIndex=2:P>D?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var f=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<f.length;p++){var v=f[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6,v=f.pivotA?f.pivotA.clone():new c,g=f.pivotB?f.pivotB.clone():new c;this.axisA=f.axisA?f.axisA.clone():new c,this.axisB=f.axisB?f.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new s(h,l,f),d=this.twistEquation=new o(h,l,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-p,d.maxForce=0,d.minForce=-p,this.equations.push(m,d)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,f=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,f.axisA),l.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),f.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var f=this.distanceEquation=new s(c,u);this.equations.push(f),f.minForce=-l,f.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,f=h.ni;u.position.vsub(c.position,f),f.normalize(),f.mult(l,h.ri),f.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(f,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,d=v.pivotB?v.pivotB.clone():new c;r.call(this,f,m,p,d,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var _=this.rotationalEquation1=new s(f,p,v),E=this.rotationalEquation2=new s(f,p,v),P=this.motorEquation=new o(f,p,g);P.enabled=!1,this.equations.push(_,E,P)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},u.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var h=new c,l=new c;u.prototype.update=function(){var f=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,d=h,x=l,y=this.axisA,_=this.axisB;r.prototype.update.call(this),f.quaternion.vmult(y,d),p.quaternion.vmult(_,x),d.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var f=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,p),r.call(this,u,p,h,v,f);var m=this.rotationalEquation1=new s(u,h,l),d=this.rotationalEquation2=new s(u,h,l),x=this.rotationalEquation3=new s(u,h,l);this.equations.push(m,d,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,f=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,f.axisA),h.vectorToWorldFrame(o.UNIT_Z,f.axisB),u.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,f,p){r.call(this,u,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=f?f.clone():new o;var v=this.equationX=new s(u,l),g=this.equationY=new s(u,l),m=this.equationZ=new s(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,f=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,p=this.axisA,v=this.axisB,g=c,m=u,d=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),E=this.computeGiMf(),P=-y*l-_*f-h*E;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,d,x){x=typeof x<"u"?x:1e6,r.call(this,m,d,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,u=new s,h=new s;o.prototype.computeB=function(m){var d=this.a,x=this.b,y=this.bi,_=this.bj,E=this.ri,P=this.rj,D=c,O=u,M=y.velocity,w=y.angularVelocity;y.force,y.torque;var L=_.velocity,V=_.angularVelocity;_.force,_.torque;var H=h,N=this.jacobianElementA,k=this.jacobianElementB,tt=this.ni;E.cross(tt,D),P.cross(tt,O),tt.negate(N.spatial),D.negate(N.rotational),k.spatial.copy(tt),k.rotational.copy(O),H.copy(_.position),H.vadd(P,H),H.vsub(y.position,H),H.vsub(E,H);var F=tt.dot(H),B=this.restitution+1,Z=B*L.dot(tt)-B*M.dot(tt)+V.dot(O)-w.dot(D),W=this.computeGiMf(),T=-F*d-Z*x-m*W;return T};var l=new s,f=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,d=f,x=p,y=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(y,d),m.vsub(d,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,d,x){this.id=o.id++,this.minForce=typeof d>"u"?-1e6:d,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,d){var x=m,y=g,_=d;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},o.prototype.computeB=function(g,m,d){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*g-x*m-_*d},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,y=d.position,_=x.position;return g.spatial.dot(y)+m.spatial.dot(_)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,y=d.velocity,_=x.velocity,E=d.angularVelocity||c,P=x.angularVelocity||c;return g.multiplyVectors(y,E)+m.multiplyVectors(_,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,y=d.vlambda,_=x.vlambda,E=d.wlambda||c,P=x.wlambda||c;return g.multiplyVectors(y,E)+m.multiplyVectors(_,P)};var u=new s,h=new s,l=new s,f=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,y=d.force,_=d.torque,E=x.force,P=x.torque,D=d.invMassSolve,O=x.invMassSolve;return d.invInertiaWorldSolve?d.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,f):f.set(0,0,0),y.mult(D,u),E.mult(O,h),g.multiplyVectors(u,l)+m.multiplyVectors(h,f)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,y=d.invMassSolve,_=x.invMassSolve,E=d.invInertiaWorldSolve,P=x.invInertiaWorldSolve,D=y+_;return E&&(E.vmult(g.rotational,p),D+=p.dot(g.rotational)),P&&(P.vmult(m.rotational,p),D+=p.dot(m.rotational)),D};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,d=this.jacobianElementB,x=this.bi,y=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),d.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(d.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(h,l,f){r.call(this,h,l,-f,f),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,u=new s;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var f=this.ri,p=this.rj,v=c,g=u,m=this.t;f.cross(m,v),p.cross(m,g);var d=this.jacobianElementA,x=this.jacobianElementB;m.negate(d.spatial),v.negate(d.rotational),x.spatial.copy(m),x.rotational.copy(g);var y=this.computeGW(),_=this.computeGiMf(),E=-y*l-h*_;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,p=this.axisA,v=this.axisB,g=c,m=u,d=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),E=this.computeGiMf(),P=-y*l-_*f-h*E;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,s.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,f=this.jacobianElementA,p=this.jacobianElementB;f.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},s.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,f=o.z;return c.x=u[0]*h+u[1]*l+u[2]*f,c.y=u[3]*h+u[4]*l+u[5]*f,c.z=u[6]*h+u[7]*l+u[8]*f,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var u=c||new s,h=0;h<3;h++)for(var l=0;l<3;l++){for(var f=0,p=0;p<3;p++)f+=o.elements[h+p*3]*this.elements[p+l*3];u.elements[h+l*3]=f}return u},s.prototype.scale=function(o,c){c=c||new s;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],f=0;f<u*h;f++)l.push(0);var f,p;for(f=0;f<3;f++)for(p=0;p<3;p++)l[f+h*p]=this.elements[f+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,d=4,x;do{if(f=g-v,l[f+h*f]===0){for(p=f+1;p<g;p++)if(l[f+h*p]!==0){m=d;do x=d-m,l[x+h*f]+=l[x+h*p];while(--m);break}}if(l[f+h*f]!==0)for(p=f+1;p<g;p++){var y=l[f+h*p]/l[f+h*f];m=d;do x=d-m,l[x+h*p]=x<=f?0:l[x+h*p]-l[x+h*f]*y;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,f;for(l=0;l<3;l++)for(f=0;f<3;f++)h[l+u*f]=this.elements[l+3*f];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=u,d;do{if(l=v-p,h[l+u*l]===0){for(f=l+1;f<v;f++)if(h[l+u*f]!==0){g=m;do d=m-g,h[d+u*l]+=h[d+u*f];while(--g);break}}if(h[l+u*l]!==0)for(f=l+1;f<v;f++){var x=h[l+u*f]/h[l+u*l];g=m;do d=m-g,h[d+u*f]=d<=l?0:h[d+u*f]-h[d+u*l]*x;while(--g)}}while(--p);l=2;do{f=l-1;do{var x=h[l+u*f]/h[l+u*l];g=u;do d=u-g,h[d+u*f]=h[d+u*f]-h[d+u*l]*x;while(--g)}while(f--)}while(--l);l=2;do{var x=1/h[l+u*l];g=u;do d=u-g,h[d+u*l]=h[d+u*l]*x;while(--g)}while(l--);l=2;do{f=2;do{if(d=h[c+f+u*l],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,f,d)}while(f--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,f=c+c,p=u+u,v=h+h,g=c*f,m=c*p,d=c*v,x=u*p,y=u*v,_=h*v,E=l*f,P=l*p,D=l*v,O=this.elements;return O[3*0+0]=1-(x+_),O[3*0+1]=m-D,O[3*0+2]=d+P,O[3*1+0]=m+D,O[3*1+1]=1-(g+_),O[3*1+2]=y-E,O[3*2+0]=d-P,O[3*2+1]=y+E,O[3*2+2]=1-(g+x),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(f,p,v,g){this.x=f!==void 0?f:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(f,p,v,g){this.x=f,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(f,p){var v=Math.sin(p*.5);this.x=f.x*v,this.y=f.y*v,this.z=f.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(f){f=f||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/v,f.y=this.y/v,f.z=this.z/v),[f,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(f,p){if(f.isAntiparallelTo(p)){var v=o,g=c;f.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=f.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(p.norm(),2))+f.dot(p),this.normalize()}};var u=new r,h=new r,l=new r;s.prototype.mult=function(f,p){p=p||new s;var v=this.w,g=u,m=h,d=l;return g.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),p.w=v*f.w-g.dot(m),g.cross(m,d),p.x=v*m.x+f.w*g.x+d.x,p.y=v*m.y+f.w*g.y+d.y,p.z=v*m.z+f.w*g.z+d.z,p},s.prototype.inverse=function(f){var p=this.x,v=this.y,g=this.z,m=this.w;f=f||new s,this.conjugate(f);var d=1/(p*p+v*v+g*g+m*m);return f.x*=d,f.y*=d,f.z*=d,f.w*=d,f},s.prototype.conjugate=function(f){return f=f||new s,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},s.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.vmult=function(f,p){p=p||new r;var v=f.x,g=f.y,m=f.z,d=this.x,x=this.y,y=this.z,_=this.w,E=_*v+x*m-y*g,P=_*g+y*v-d*m,D=_*m+d*g-x*v,O=-d*v-x*g-y*m;return p.x=E*_+O*-d+P*-y-D*-x,p.y=P*_+O*-x+D*-d-E*-y,p.z=D*_+O*-y+E*-x-P*-d,p},s.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},s.prototype.toEuler=function(f,p){p=p||"YZX";var v,g,m,d=this.x,x=this.y,y=this.z,_=this.w;switch(p){case"YZX":var E=d*x+y*_;if(E>.499&&(v=2*Math.atan2(d,_),g=Math.PI/2,m=0),E<-.499&&(v=-2*Math.atan2(d,_),g=-Math.PI/2,m=0),isNaN(v)){var P=d*d,D=x*x,O=y*y;v=Math.atan2(2*x*_-2*d*y,1-2*D-2*O),g=Math.asin(2*E),m=Math.atan2(2*d*_-2*x*y,1-2*P-2*O)}break;default:throw new Error("Euler order "+p+" not supported yet.")}f.y=v,f.z=g,f.x=m},s.prototype.setFromEuler=function(f,p,v,g){g=g||"XYZ";var m=Math.cos(f/2),d=Math.cos(p/2),x=Math.cos(v/2),y=Math.sin(f/2),_=Math.sin(p/2),E=Math.sin(v/2);return g==="XYZ"?(this.x=y*d*x+m*_*E,this.y=m*_*x-y*d*E,this.z=m*d*E+y*_*x,this.w=m*d*x-y*_*E):g==="YXZ"?(this.x=y*d*x+m*_*E,this.y=m*_*x-y*d*E,this.z=m*d*E-y*_*x,this.w=m*d*x+y*_*E):g==="ZXY"?(this.x=y*d*x-m*_*E,this.y=m*_*x+y*d*E,this.z=m*d*E+y*_*x,this.w=m*d*x-y*_*E):g==="ZYX"?(this.x=y*d*x-m*_*E,this.y=m*_*x+y*d*E,this.z=m*d*E-y*_*x,this.w=m*d*x+y*_*E):g==="YZX"?(this.x=y*d*x+m*_*E,this.y=m*_*x+y*d*E,this.z=m*d*E-y*_*x,this.w=m*d*x-y*_*E):g==="XZY"&&(this.x=y*d*x-m*_*E,this.y=m*_*x-y*d*E,this.z=m*d*E+y*_*x,this.w=m*d*x+y*_*E),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new s,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new s;o.pointToLocalFrame=function(u,h,l,p){var p=p||new r;return l.vsub(u,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(u,p),p},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(h,l,f){this.x=h||0,this.y=l||0,this.z=f||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,l){var f=h.x,p=h.y,v=h.z,g=this.x,m=this.y,d=this.z;return l=l||new s,l.x=m*v-d*p,l.y=d*f-g*v,l.z=g*p-m*f,l},s.prototype.set=function(h,l,f){return this.x=h,this.y=l,this.z=f,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,l=this.y,f=this.z,p=Math.sqrt(h*h+l*l+f*f);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(h){h=h||new s;var l=this.x,f=this.y,p=this.z,v=Math.sqrt(l*l+f*f+p*p);return v>0?(v=1/v,h.x=l*v,h.y=f*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,l=this.y,f=this.z;return Math.sqrt(h*h+l*l+f*f)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var l=this.x,f=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-f)*(g-f)+(m-p)*(m-p))},s.prototype.distanceSquared=function(h){var l=this.x,f=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-f)*(g-f)+(m-p)*(m-p)},s.prototype.mult=function(h,l){l=l||new s;var f=this.x,p=this.y,v=this.z;return l.x=h*f,l.y=h*p,l.z=h*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new s,c=new s;s.prototype.tangents=function(h,l){var f=this.norm();if(f>0){var p=o,v=1/f;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,l,f){var p=this.x,v=this.y,g=this.z;f.x=p+(h.x-p)*l,f.y=v+(h.y-v)*l,f.z=g+(h.z-g)*l},s.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new s;s.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(L){L=L||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof L.collisionFilterGroup=="number"?L.collisionFilterGroup:1,this.collisionFilterMask=typeof L.collisionFilterMask=="number"?L.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,L.position&&this.position.copy(L.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,L.velocity&&this.velocity.copy(L.velocity),this.initVelocity=new s,this.force=new s;var V=typeof L.mass=="number"?L.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=L.material||null,this.linearDamping=typeof L.linearDamping=="number"?L.linearDamping:.01,this.type=V<=0?l.STATIC:l.DYNAMIC,typeof L.type==typeof l.STATIC&&(this.type=L.type),this.allowSleep=typeof L.allowSleep<"u"?L.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof L.sleepSpeedLimit<"u"?L.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof L.sleepTimeLimit<"u"?L.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,L.quaternion&&this.quaternion.copy(L.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,L.angularVelocity&&this.angularVelocity.copy(L.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof L.fixedRotation<"u"?L.fixedRotation:!1,this.angularDamping=typeof L.angularDamping<"u"?L.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new s,L.shape&&this.addShape(L.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var L=this.sleepState;this.sleepState=0,L===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(L){if(this.allowSleep){var V=this.sleepState,H=this.velocity.norm2()+this.angularVelocity.norm2(),N=Math.pow(this.sleepSpeedLimit,2);V===l.AWAKE&&H<N?(this.sleepState=l.SLEEPY,this.timeLastSleepy=L,this.dispatchEvent(l.sleepyEvent)):V===l.SLEEPY&&H>N?this.wakeUp():V===l.SLEEPY&&L-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(L,H){var H=H||new s;return L.vsub(this.position,H),this.quaternion.conjugate().vmult(H,H),H},l.prototype.vectorToLocalFrame=function(L,H){var H=H||new s;return this.quaternion.conjugate().vmult(L,H),H},l.prototype.pointToWorldFrame=function(L,H){var H=H||new s;return this.quaternion.vmult(L,H),H.vadd(this.position,H),H},l.prototype.vectorToWorldFrame=function(L,H){var H=H||new s;return this.quaternion.vmult(L,H),H};var f=new s,p=new c;l.prototype.addShape=function(L,V,H){var N=new s,k=new c;return V&&N.copy(V),H&&k.copy(H),this.shapes.push(L),this.shapeOffsets.push(N),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var L=this.shapes,V=this.shapeOffsets,H=L.length,N=0,k=0;k!==H;k++){var tt=L[k];tt.updateBoundingSphereRadius();var F=V[k].norm(),B=tt.boundingSphereRadius;F+B>N&&(N=F+B)}this.boundingRadius=N};var v=new u;l.prototype.computeAABB=function(){for(var L=this.shapes,V=this.shapeOffsets,H=this.shapeOrientations,N=L.length,k=f,tt=p,F=this.quaternion,B=this.aabb,Z=v,W=0;W!==N;W++){var T=L[W];H[W].mult(F,tt),tt.vmult(V[W],k),k.vadd(this.position,k),T.calculateWorldAABB(k,tt,Z.lowerBound,Z.upperBound),W===0?B.copy(Z):B.extend(Z)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(L){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!L)){var H=g,N=m;H.setRotationFromQuaternion(this.quaternion),H.transpose(N),H.scale(V,H),H.mmult(N,this.invInertiaWorld)}};var d=new s,x=new s;l.prototype.applyForce=function(L,V){if(this.type===l.DYNAMIC){var H=d;V.vsub(this.position,H);var N=x;H.cross(L,N),this.force.vadd(L,this.force),this.torque.vadd(N,this.torque)}};var y=new s,_=new s;l.prototype.applyLocalForce=function(L,V){if(this.type===l.DYNAMIC){var H=y,N=_;this.vectorToWorldFrame(L,H),this.pointToWorldFrame(V,N),this.applyForce(H,N)}};var E=new s,P=new s,D=new s;l.prototype.applyImpulse=function(L,V){if(this.type===l.DYNAMIC){var H=E;V.vsub(this.position,H);var N=P;N.copy(L),N.mult(this.invMass,N),this.velocity.vadd(N,this.velocity);var k=D;H.cross(L,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var O=new s,M=new s;l.prototype.applyLocalImpulse=function(L,V){if(this.type===l.DYNAMIC){var H=O,N=M;this.vectorToWorldFrame(L,H),this.pointToWorldFrame(V,N),this.applyImpulse(H,N)}};var w=new s;l.prototype.updateMassProperties=function(){var L=w;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,H=this.fixedRotation;this.computeAABB(),L.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(L,this.mass,V),this.invInertia.set(V.x>0&&!H?1/V.x:0,V.y>0&&!H?1/V.y:0,V.z>0&&!H?1/V.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(L,V){var H=new s;return L.vsub(this.position,H),this.angularVelocity.cross(H,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,f=new r;new o,u.prototype.addWheel=function(F){F=F||{};var B=new c(F),Z=this.wheelInfos.length;return this.wheelInfos.push(B),Z},u.prototype.setSteeringValue=function(F,B){var Z=this.wheelInfos[B];Z.steering=F},new r,u.prototype.applyEngineForce=function(F,B){this.wheelInfos[B].engineForce=F},u.prototype.setBrake=function(F,B){this.wheelInfos[B].brake=F},u.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},u.prototype.getVehicleAxisWorld=function(F,B){B.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},u.prototype.updateVehicle=function(F){for(var B=this.wheelInfos,Z=B.length,W=this.chassisBody,T=0;T<Z;T++)this.updateWheelTransform(T);this.currentVehicleSpeedKmHour=3.6*W.velocity.norm();var U=new r;this.getVehicleAxisWorld(this.indexForwardAxis,U),U.dot(W.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var T=0;T<Z;T++)this.castRay(B[T]);this.updateSuspension(F);for(var I=new r,C=new r,T=0;T<Z;T++){var b=B[T],q=b.suspensionForce;q>b.maxSuspensionForce&&(q=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(q*F,I),b.raycastResult.hitPointWorld.vsub(W.position,C),W.applyImpulse(I,b.raycastResult.hitPointWorld)}this.updateFriction(F);var rt=new r,J=new r,j=new r;for(T=0;T<Z;T++){var b=B[T];W.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,j);var at=1;switch(this.indexUpAxis){case 1:at=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,J);var ct=J.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(ct,rt),J.vsub(rt,J);var X=J.dot(j);b.deltaRotation=at*X*F/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*F),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},u.prototype.updateSuspension=function(F){for(var B=this.chassisBody,Z=B.mass,W=this.wheelInfos,T=W.length,U=0;U<T;U++){var I=W[U];if(I.isInContact){var C,b=I.suspensionRestLength,q=I.suspensionLength,rt=b-q;C=I.suspensionStiffness*rt*I.clippedInvContactDotSuspension;var J=I.suspensionRelativeVelocity,j;J<0?j=I.dampingCompression:j=I.dampingRelaxation,C-=j*J,I.suspensionForce=C*Z,I.suspensionForce<0&&(I.suspensionForce=0)}else I.suspensionForce=0}},u.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;u.prototype.castRay=function(F){var B=p,Z=v;this.updateWheelTransformWorld(F);var W=this.chassisBody,T=-1,U=F.suspensionRestLength+F.radius;F.directionWorld.scale(U,B);var I=F.chassisConnectionPointWorld;I.vadd(B,Z);var C=F.raycastResult;C.reset();var b=W.collisionResponse;W.collisionResponse=!1,this.world.rayTest(I,Z,C),W.collisionResponse=b;var q=C.body;if(F.raycastResult.groundObject=0,q){T=C.distance,F.raycastResult.hitNormalWorld=C.hitNormalWorld,F.isInContact=!0;var rt=C.distance;F.suspensionLength=rt-F.radius;var J=F.suspensionRestLength-F.maxSuspensionTravel,j=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<J&&(F.suspensionLength=J),F.suspensionLength>j&&(F.suspensionLength=j,F.raycastResult.reset());var at=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ct=new r;W.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ct);var X=F.raycastResult.hitNormalWorld.dot(ct);if(at>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Pt=-1/at;F.suspensionRelativeVelocity=X*Pt,F.clippedInvContactDotSuspension=Pt}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return T},u.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),B.vectorToWorldFrame(F.directionLocal,F.directionWorld),B.vectorToWorldFrame(F.axleLocal,F.axleWorld)},u.prototype.updateWheelTransform=function(F){var B=h,Z=l,W=f,T=this.wheelInfos[F];this.updateWheelTransformWorld(T),T.directionLocal.scale(-1,B),Z.copy(T.axleLocal),B.cross(Z,W),W.normalize(),Z.normalize();var U=T.steering,I=new s;I.setFromAxisAngle(B,U);var C=new s;C.setFromAxisAngle(Z,T.rotation);var b=T.worldTransform.quaternion;this.chassisBody.quaternion.mult(I,b),b.mult(C,b),b.normalize();var q=T.worldTransform.position;q.copy(T.directionWorld),q.scale(T.suspensionLength,q),q.vadd(T.chassisConnectionPointWorld,q)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,d=[],x=[],y=1;u.prototype.updateFriction=function(F){for(var B=m,Z=this.wheelInfos,W=Z.length,T=this.chassisBody,U=x,I=d,C=0;C<W;C++){var b=Z[C],q=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,U[C]||(U[C]=new r),I[C]||(I[C]=new r)}for(var C=0;C<W;C++){var b=Z[C],q=b.raycastResult.body;if(q){var rt=I[C],J=this.getWheelTransformWorld(C);J.vectorToWorldFrame(g[this.indexRightAxis],rt);var j=b.raycastResult.hitNormalWorld,at=rt.dot(j);j.scale(at,B),rt.vsub(B,rt),rt.normalize(),j.cross(rt,U[C]),U[C].normalize(),b.sideImpulse=tt(T,b.raycastResult.hitPointWorld,q,b.raycastResult.hitPointWorld,rt),b.sideImpulse*=y}}var ct=1,X=.5;this.sliding=!1;for(var C=0;C<W;C++){var b=Z[C],q=b.raycastResult.body,Pt=0;if(b.slipInfo=1,q){var ut=0,nt=b.brake?b.brake:ut;Pt=D(T,q,b.raycastResult.hitPointWorld,U[C],nt),Pt+=b.engineForce*F;var ot=nt/Pt;b.slipInfo*=ot}if(b.forwardImpulse=0,b.skidInfo=1,q){b.skidInfo=1;var qt=b.suspensionForce*F*b.frictionSlip,Tt=qt,Ht=qt*Tt;b.forwardImpulse=Pt;var xt=b.forwardImpulse*X,Qt=b.sideImpulse*ct,ee=xt*xt+Qt*Qt;if(b.sliding=!1,ee>Ht){this.sliding=!0,b.sliding=!0;var ot=qt/Math.sqrt(ee);b.skidInfo*=ot}}}if(this.sliding)for(var C=0;C<W;C++){var b=Z[C];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var C=0;C<W;C++){var b=Z[C],R=new r;if(R.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var A=new r;U[C].scale(b.forwardImpulse,A),T.applyImpulse(A,R)}if(b.sideImpulse!==0){var q=b.raycastResult.body,$=new r;$.copy(b.raycastResult.hitPointWorld);var mt=new r;I[C].scale(b.sideImpulse,mt),T.pointToLocalFrame(R,R),R["xyz"[this.indexUpAxis]]*=b.rollInfluence,T.pointToWorldFrame(R,R),T.applyImpulse(mt,R),mt.scale(-1,mt),q.applyImpulse(mt,$)}}};var _=new r,E=new r,P=new r;function D(F,B,Z,W,T){var U=0,I=Z,C=_,b=E,q=P;F.getVelocityAtWorldPoint(I,C),B.getVelocityAtWorldPoint(I,b),C.vsub(b,q);var rt=W.dot(q),J=V(F,Z,W),j=V(B,Z,W),at=1,ct=at/(J+j);return U=-rt*ct,T<U&&(U=T),U<-T&&(U=-T),U}var O=new r,M=new r,w=new r,L=new r;function V(F,B,Z){var W=O,T=M,U=w,I=L;return B.vsub(F.position,W),W.cross(Z,T),F.invInertiaWorld.vmult(T,I),I.cross(W,U),F.invMass+Z.dot(U)}var H=new r,N=new r,k=new r;function tt(F,B,Z,W,T,at){var I=T.norm2();if(I>1.1)return 0;var C=H,b=N,q=k;F.getVelocityAtWorldPoint(B,C),Z.getVelocityAtWorldPoint(W,b),C.vsub(b,q);var rt=T.dot(q),J=.2,j=1/(F.invMass+Z.invMass),at=-J*rt*j;return at}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var d=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(d);var x=new u(this.chassisBody,v,{pivotA:g,axisA:d,pivotB:c.ZERO,axisB:d,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),d=Math.sin(p),x=g.x,y=g.y;this.constraints[v].axisA.set(m*x-d*y,d*x+m*y,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],d=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),d.vadd(l,d)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var f=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,d=v.id,x=this.smoothingRadius*this.smoothingRadius,y=o,_=0;_!==m;_++){var E=this.particles[_];E.position.vsub(v.position,y),d!==E.id&&y.norm2()<x&&g.push(E)}};var c=new r,u=new r,h=new r,l=new r,f=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,d=this.eps,x=0;x!==v;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var E=_.length,P=0,D=0;D!==E;D++){y.position.vsub(_[D].position,g);var O=g.norm(),M=this.w(O);P+=_[D].mass*M}this.densities[x]=P,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var w=u,L=h,V=l,H=f,N=p,x=0;x!==v;x++){var k=this.particles[x];w.set(0,0,0),L.set(0,0,0);for(var tt,F,_=this.neighbors[x],E=_.length,D=0;D!==E;D++){var B=_[D];k.position.vsub(B.position,H);var Z=H.norm();tt=-B.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+d)+this.pressures[D]/(this.densities[D]*this.densities[D]+d)),this.gradw(H,V),V.mult(tt,V),w.vadd(V,w),B.velocity.vsub(k.velocity,N),N.mult(1/(1e-4+this.densities[x]*this.densities[D])*this.viscosity*B.mass,N),F=this.nablaw(Z),N.mult(F,N),L.vadd(N,L)}L.mult(k.mass,L),w.mult(k.mass,w),k.force.vadd(L,k.force),k.force.vadd(w,k.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),d=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(d,9))*Math.pow(d*d-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,u=new r,h=new r,l=new r,f=new r,p=new r,v=new r,g=new r,m=new r,d=new r;s.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,E=this.bodyA,P=this.bodyB,D=o,O=c,M=u,w=h,L=d,V=l,H=f,N=p,k=v,tt=g,F=m;this.getWorldAnchorA(V),this.getWorldAnchorB(H),V.vsub(E.position,N),H.vsub(P.position,k),H.vsub(V,D);var B=D.norm();O.copy(D),O.normalize(),P.velocity.vsub(E.velocity,M),P.angularVelocity.cross(k,L),M.vadd(L,M),E.angularVelocity.cross(N,L),M.vsub(L,M),O.mult(-x*(B-_)-y*M.dot(O),w),E.force.vsub(w,E.force),P.force.vadd(w,P.force),N.cross(w,tt),k.cross(w,F),E.torque.vsub(tt,E.torque),P.torque.vadd(F,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(f){f=c.defaults(f,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(f){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(f.position,h),f.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,f=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-f,-p),new v(l,-f,-p),new v(l,f,-p),new v(-l,f,-p),new v(-l,-f,p),new v(l,-f,p),new v(l,f,p),new v(-l,f,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var d=new o(g,m);this.convexPolyhedronRepresentation=d,d.material=this.material},c.prototype.calculateLocalInertia=function(l,f){return f=f||new s,c.calculateInertia(this.halfExtents,l,f),f},c.calculateInertia=function(l,f,p){var v=l;p.x=1/12*f*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*f*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*f*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,f){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),f!==void 0)for(var g=0;g!==p.length;g++)f.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new s;new s,c.prototype.forEachWorldCorner=function(l,f,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),f.vmult(u,u),l.vadd(u,u),p(u.x,u.y,u.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,f,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];f.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var d=1;d<8;d++){var m=h[d];f.vmult(m,m),l.vadd(m,m);var x=m.x,y=m.y,_=m.z;x>v.x&&(v.x=x),y>v.y&&(v.y=y),_>v.z&&(v.z=_),x<p.x&&(p.x=x),y<p.y&&(p.y=y),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(T,U,I){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=T||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=U||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=I?I.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new s;c.prototype.computeEdges=function(){var T=this.faces,U=this.vertices;U.length;var I=this.uniqueEdges;I.length=0;for(var C=u,b=0;b!==T.length;b++)for(var q=T[b],rt=q.length,J=0;J!==rt;J++){var j=(J+1)%rt;U[q[J]].vsub(U[q[j]],C),C.normalize();for(var at=!1,ct=0;ct!==I.length;ct++)if(I[ct].almostEquals(C)||I[ct].almostEquals(C)){at=!0;break}at||I.push(C.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var T=0;T<this.faces.length;T++){for(var U=0;U<this.faces[T].length;U++)if(!this.vertices[this.faces[T][U]])throw new Error("Vertex "+this.faces[T][U]+" not found!");var I=this.faceNormals[T]||new s;this.getFaceNormal(T,I),I.negate(I),this.faceNormals[T]=I;var C=this.vertices[this.faces[T][0]];if(I.dot(C)<0){console.error(".faceNormals["+T+"] = Vec3("+I.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var U=0;U<this.faces[T].length;U++)console.warn(".vertices["+this.faces[T][U]+"] = Vec3("+this.vertices[this.faces[T][U]].toString()+")")}}};var h=new s,l=new s;c.computeNormal=function(T,U,I,C){U.vsub(T,l),I.vsub(U,h),h.cross(l,C),C.isZero()||C.normalize()},c.prototype.getFaceNormal=function(T,U){var I=this.faces[T],C=this.vertices[I[0]],b=this.vertices[I[1]],q=this.vertices[I[2]];return c.computeNormal(C,b,q,U)};var f=new s;c.prototype.clipAgainstHull=function(T,U,I,C,b,q,rt,J,j){for(var at=f,ct=-1,X=-Number.MAX_VALUE,Pt=0;Pt<I.faces.length;Pt++){at.copy(I.faceNormals[Pt]),b.vmult(at,at);var ut=at.dot(q);ut>X&&(X=ut,ct=Pt)}for(var nt=[],ot=I.faces[ct],qt=ot.length,Tt=0;Tt<qt;Tt++){var Ht=I.vertices[ot[Tt]],xt=new s;xt.copy(Ht),b.vmult(xt,xt),C.vadd(xt,xt),nt.push(xt)}ct>=0&&this.clipFaceAgainstHull(q,T,U,nt,rt,J,j)};var p=new s,v=new s,g=new s,m=new s,d=new s,x=new s;c.prototype.findSeparatingAxis=function(T,U,I,C,b,q,rt,J){var j=p,at=v,ct=g,X=m,Pt=d,ut=x,nt=Number.MAX_VALUE,ot=this;if(ot.uniqueAxes)for(var Tt=0;Tt!==ot.uniqueAxes.length;Tt++){I.vmult(ot.uniqueAxes[Tt],j);var xt=ot.testSepAxis(j,T,U,I,C,b);if(xt===!1)return!1;xt<nt&&(nt=xt,q.copy(j))}else for(var qt=rt?rt.length:ot.faces.length,Tt=0;Tt<qt;Tt++){var Ht=rt?rt[Tt]:Tt;j.copy(ot.faceNormals[Ht]),I.vmult(j,j);var xt=ot.testSepAxis(j,T,U,I,C,b);if(xt===!1)return!1;xt<nt&&(nt=xt,q.copy(j))}if(T.uniqueAxes)for(var Tt=0;Tt!==T.uniqueAxes.length;Tt++){b.vmult(T.uniqueAxes[Tt],at);var xt=ot.testSepAxis(at,T,U,I,C,b);if(xt===!1)return!1;xt<nt&&(nt=xt,q.copy(at))}else for(var Qt=J?J.length:T.faces.length,Tt=0;Tt<Qt;Tt++){var Ht=J?J[Tt]:Tt;at.copy(T.faceNormals[Ht]),b.vmult(at,at);var xt=ot.testSepAxis(at,T,U,I,C,b);if(xt===!1)return!1;xt<nt&&(nt=xt,q.copy(at))}for(var ee=0;ee!==ot.uniqueEdges.length;ee++){I.vmult(ot.uniqueEdges[ee],X);for(var R=0;R!==T.uniqueEdges.length;R++)if(b.vmult(T.uniqueEdges[R],Pt),X.cross(Pt,ut),!ut.almostZero()){ut.normalize();var A=ot.testSepAxis(ut,T,U,I,C,b);if(A===!1)return!1;A<nt&&(nt=A,q.copy(ut))}}return C.vsub(U,ct),ct.dot(q)>0&&q.negate(q),!0};var y=[],_=[];c.prototype.testSepAxis=function(T,U,I,C,b,q){var rt=this;c.project(rt,T,I,C,y),c.project(U,T,b,q,_);var J=y[0],j=y[1],at=_[0],ct=_[1],X=J-ct,Pt=at-j,ut=X<Pt?X:Pt;return ut};var E=new s,P=new s;c.prototype.calculateLocalInertia=function(T,U){this.computeLocalAABB(E,P);var I=P.x-E.x,C=P.y-E.y,b=P.z-E.z;U.x=1/12*T*(2*C*2*C+2*b*2*b),U.y=1/12*T*(2*I*2*I+2*b*2*b),U.z=1/12*T*(2*C*2*C+2*I*2*I)},c.prototype.getPlaneConstantOfFace=function(T){var U=this.faces[T],I=this.faceNormals[T],C=this.vertices[U[0]],b=-I.dot(C);return b};var D=new s,O=new s,M=new s,w=new s,L=new s,V=new s,H=new s,N=new s;c.prototype.clipFaceAgainstHull=function(T,U,I,C,b,q,rt){for(var J=D,j=O,at=M,ct=w,X=L,Pt=V,ut=H,nt=N,ot=this,qt=[],Tt=C,Ht=qt,xt=-1,Qt=Number.MAX_VALUE,ee=0;ee<ot.faces.length;ee++){J.copy(ot.faceNormals[ee]),I.vmult(J,J);var R=J.dot(T);R<Qt&&(Qt=R,xt=ee)}if(!(xt<0)){var A=ot.faces[xt];A.connectedFaces=[];for(var $=0;$<ot.faces.length;$++)for(var mt=0;mt<ot.faces[$].length;mt++)A.indexOf(ot.faces[$][mt])!==-1&&$!==xt&&A.connectedFaces.indexOf($)===-1&&A.connectedFaces.push($);Tt.length;for(var ht=A.length,gt=0;gt<ht;gt++){var Vt=ot.vertices[A[gt]],wt=ot.vertices[A[(gt+1)%ht]];Vt.vsub(wt,j),at.copy(j),I.vmult(at,at),U.vadd(at,at),ct.copy(this.faceNormals[xt]),I.vmult(ct,ct),U.vadd(ct,ct),at.cross(ct,X),X.negate(X),Pt.copy(Vt),I.vmult(Pt,Pt),U.vadd(Pt,Pt),-Pt.dot(X);var ie;{var zt=A.connectedFaces[gt];ut.copy(this.faceNormals[zt]);var jt=this.getPlaneConstantOfFace(zt);nt.copy(ut),I.vmult(nt,nt);var ie=jt-nt.dot(U)}for(this.clipFaceAgainstPlane(Tt,Ht,nt,ie);Tt.length;)Tt.shift();for(;Ht.length;)Tt.push(Ht.shift())}ut.copy(this.faceNormals[xt]);var jt=this.getPlaneConstantOfFace(xt);nt.copy(ut),I.vmult(nt,nt);for(var ie=jt-nt.dot(U),$=0;$<Tt.length;$++){var _t=nt.dot(Tt[$])+ie;if(_t<=b&&(console.log("clamped: depth="+_t+" to minDist="+(b+"")),_t=b),_t<=q){var ce=Tt[$];if(_t<=0){var Jt={point:ce,normal:nt,depth:_t};rt.push(Jt)}}}}},c.prototype.clipFaceAgainstPlane=function(T,U,I,C){var b,q,rt=T.length;if(rt<2)return U;var J=T[T.length-1],j=T[0];b=I.dot(J)+C;for(var at=0;at<rt;at++){if(j=T[at],q=I.dot(j)+C,b<0)if(q<0){var ct=new s;ct.copy(j),U.push(ct)}else{var ct=new s;J.lerp(j,b/(b-q),ct),U.push(ct)}else if(q<0){var ct=new s;J.lerp(j,b/(b-q),ct),U.push(ct),U.push(j)}J=j,b=q}return U},c.prototype.computeWorldVertices=function(T,U){for(var I=this.vertices.length;this.worldVertices.length<I;)this.worldVertices.push(new s);for(var C=this.vertices,b=this.worldVertices,q=0;q!==I;q++)U.vmult(C[q],b[q]),T.vadd(b[q],b[q]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(T,U){var I=this.vertices.length,C=this.vertices;T.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),U.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<I;b++){var q=C[b];q.x<T.x?T.x=q.x:q.x>U.x&&(U.x=q.x),q.y<T.y?T.y=q.y:q.y>U.y&&(U.y=q.y),q.z<T.z?T.z=q.z:q.z>U.z&&(U.z=q.z)}},c.prototype.computeWorldFaceNormals=function(T){for(var U=this.faceNormals.length;this.worldFaceNormals.length<U;)this.worldFaceNormals.push(new s);for(var I=this.faceNormals,C=this.worldFaceNormals,b=0;b!==U;b++)T.vmult(I[b],C[b]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var T=0,U=this.vertices,I=0,C=U.length;I!==C;I++){var b=U[I].norm2();b>T&&(T=b)}this.boundingSphereRadius=Math.sqrt(T)};var k=new s;c.prototype.calculateWorldAABB=function(T,U,I,C){for(var b=this.vertices.length,q=this.vertices,rt,J,j,at,ct,X,Pt=0;Pt<b;Pt++){k.copy(q[Pt]),U.vmult(k,k),T.vadd(k,k);var ut=k;ut.x<rt||rt===void 0?rt=ut.x:(ut.x>at||at===void 0)&&(at=ut.x),ut.y<J||J===void 0?J=ut.y:(ut.y>ct||ct===void 0)&&(ct=ut.y),ut.z<j||j===void 0?j=ut.z:(ut.z>X||X===void 0)&&(X=ut.z)}I.set(rt,J,j),C.set(at,ct,X)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(T){T=T||new s;for(var U=this.vertices.length,I=this.vertices,C=0;C<U;C++)T.vadd(I[C],T);return T.mult(1/U,T),T},c.prototype.transformAllPoints=function(T,U){var I=this.vertices.length,C=this.vertices;if(U){for(var b=0;b<I;b++){var q=C[b];U.vmult(q,q)}for(var b=0;b<this.faceNormals.length;b++){var q=this.faceNormals[b];U.vmult(q,q)}}if(T)for(var b=0;b<I;b++){var q=C[b];q.vadd(T,q)}};var tt=new s,F=new s,B=new s;c.prototype.pointIsInside=function(T){var U=this.vertices.length,I=this.vertices,C=this.faces,b=this.faceNormals,q=null,rt=this.faces.length,J=tt;this.getAveragePointLocal(J);for(var j=0;j<rt;j++){this.faces[j].length;var U=b[j],at=I[C[j][0]],ct=F;T.vsub(at,ct);var X=U.dot(ct),Pt=B;J.vsub(at,Pt);var ut=U.dot(Pt);if(X<0&&ut>0||X>0&&ut<0)return!1}return q?1:-1},new s;var Z=new s,W=new s;c.project=function(T,U,I,C,b){var q=T.vertices.length,rt=Z,J=0,j=0,at=W,ct=T.vertices;at.setZero(),o.vectorToLocalFrame(I,C,U,rt),o.pointToLocalFrame(I,C,at,at);var X=at.dot(rt);j=J=ct[0].dot(rt);for(var Pt=1;Pt<q;Pt++){var ut=ct[Pt].dot(rt);ut>J&&(J=ut),ut<j&&(j=ut)}if(j-=X,J-=X,j>J){var nt=j;j=J,J=nt}b[0]=J,b[1]=j}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,f){var p=f,v=[],g=[],m=[],d=[],x=[],y=Math.cos,_=Math.sin;v.push(new s(h*y(0),h*_(0),-l*.5)),d.push(0),v.push(new s(u*y(0),u*_(0),l*.5)),x.push(1);for(var E=0;E<p;E++){var P=2*Math.PI/p*(E+1),D=2*Math.PI/p*(E+.5);E<p-1?(v.push(new s(h*y(P),h*_(P),-l*.5)),d.push(2*E+2),v.push(new s(u*y(P),u*_(P),l*.5)),x.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(p%2===1||E<p/2)&&g.push(new s(y(D),_(D),0))}m.push(x),g.push(new s(0,0,1));for(var O=[],E=0;E<d.length;E++)O.push(d[d.length-E-1]);m.push(O),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var p=0;p!==h[f].length;p++){var v=h[f][p];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var p=0;p!==h[f].length;p++){var v=h[f][p];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,f){var p=this.data;p[h][l]=f,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,f,p,v){v=v||[];for(var g=this.data,m=this.minValue,d=h;d<=f;d++)for(var x=l;x<=p;x++){var y=g[d][x];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,l,f,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),d=Math.floor(l/v);return f[0]=m,f[1]=d,p&&(m<0&&(m=0),d<0&&(d=0),m>=g.length-1&&(m=g.length-1),d>=g[0].length-1&&(d=g[0].length-1)),!(m<0||d<0||m>=g.length-1||d>=g[0].length-1)},u.prototype.getHeightAt=function(h,l,f){var p=[];this.getIndexOfPosition(h,l,p,f);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,f){return h+"_"+l+"_"+(f?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,f,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]={convex:p,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.getConvexTrianglePillar=function(h,l,f){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,f);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,d=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new o);d.length=5;for(var x=0;x<5;x++)d[x]||(d[x]=[]);var y=p.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;f?(v.set((h+.75)*m,(l+.75)*m,_),y[0].set(.25*m,.25*m,g[h+1][l+1]-_),y[1].set(-.75*m,.25*m,g[h][l+1]-_),y[2].set(.25*m,-.75*m,g[h+1][l]-_),y[3].set(.25*m,.25*m,-_-1),y[4].set(-.75*m,.25*m,-_-1),y[5].set(.25*m,-.75*m,-_-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=2,d[2][1]=5,d[2][2]=3,d[2][3]=0,d[3][0]=3,d[3][1]=4,d[3][2]=1,d[3][3]=0,d[4][0]=1,d[4][1]=4,d[4][2]=5,d[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),y[0].set(-.25*m,-.25*m,g[h][l]-_),y[1].set(.75*m,-.25*m,g[h+1][l]-_),y[2].set(-.25*m,.75*m,g[h][l+1]-_),y[3].set(-.25*m,-.25*m,-_-1),y[4].set(.75*m,-.25*m,-_-1),y[5].set(-.25*m,.75*m,-_-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=0,d[2][1]=2,d[2][2]=5,d[2][3]=3,d[3][0]=1,d[3][1]=0,d[3][2]=3,d[3][3]=4,d[4][0]=4,d[4][1]=5,d[4][2]=2,d[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,f,p,v)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,f,p){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new s,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new s,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(u,h,l,f){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),f.set(p,p,p),c.x===1&&(f.x=u.x),c.y===1&&(f.y=u.y),c.z===1&&(f.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new s;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var f=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-f,l[g]=c[g]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(O,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(O),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new s;h.prototype.updateTree=function(){var O=this.tree;O.reset(),O.aabb.copy(this.aabb);var M=this.scale;O.aabb.lowerBound.x*=1/M.x,O.aabb.lowerBound.y*=1/M.y,O.aabb.lowerBound.z*=1/M.z,O.aabb.upperBound.x*=1/M.x,O.aabb.upperBound.y*=1/M.y,O.aabb.upperBound.z*=1/M.z;for(var w=new c,L=new s,V=new s,H=new s,N=[L,V,H],k=0;k<this.indices.length/3;k++){var tt=k*3;this._getUnscaledVertex(this.indices[tt],L),this._getUnscaledVertex(this.indices[tt+1],V),this._getUnscaledVertex(this.indices[tt+2],H),w.setFromPoints(N),O.insert(w,k)}O.removeEmptyNodes()};var f=new c;h.prototype.getTrianglesInAABB=function(O,M){f.copy(O);var w=this.scale,L=w.x,V=w.y,H=w.z,N=f.lowerBound,k=f.upperBound;return N.x/=L,N.y/=V,N.z/=H,k.x/=L,k.y/=V,k.z/=H,this.tree.aabbQuery(f,M)},h.prototype.setScale=function(O){var M=this.scale.x===this.scale.y===this.scale.z,w=O.x===O.y===O.z;M&&w||this.updateNormals(),this.scale.copy(O),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var O=l,M=this.normals,w=0;w<this.indices.length/3;w++){var L=w*3,V=this.indices[L],H=this.indices[L+1],N=this.indices[L+2];this.getVertex(V,d),this.getVertex(H,x),this.getVertex(N,y),h.computeNormal(x,d,y,O),M[L]=O.x,M[L+1]=O.y,M[L+2]=O.z}},h.prototype.updateEdges=function(){for(var O={},M=function(tt,F){var B=V<H?V+"_"+H:H+"_"+V;O[B]=!0},w=0;w<this.indices.length/3;w++){var L=w*3,V=this.indices[L],H=this.indices[L+1];this.indices[L+2],M(),M(),M()}var N=Object.keys(O);this.edges=new Int16Array(N.length*2);for(var w=0;w<N.length;w++){var k=N[w].split("_");this.edges[2*w]=parseInt(k[0],10),this.edges[2*w+1]=parseInt(k[1],10)}},h.prototype.getEdgeVertex=function(O,M,w){var L=this.edges[O*2+(M?1:0)];this.getVertex(L,w)};var p=new s,v=new s;h.prototype.getEdgeVector=function(O,M){var w=p,L=v;this.getEdgeVertex(O,0,w),this.getEdgeVertex(O,1,L),L.vsub(w,M)};var g=new s,m=new s;h.computeNormal=function(O,M,w,L){M.vsub(O,m),w.vsub(M,g),g.cross(m,L),L.isZero()||L.normalize()};var d=new s,x=new s,y=new s;h.prototype.getVertex=function(O,M){var w=this.scale;return this._getUnscaledVertex(O,M),M.x*=w.x,M.y*=w.y,M.z*=w.z,M},h.prototype._getUnscaledVertex=function(O,M){var w=O*3,L=this.vertices;return M.set(L[w],L[w+1],L[w+2])},h.prototype.getWorldVertex=function(O,M,w,L){return this.getVertex(O,L),o.pointToWorldFrame(M,w,L,L),L},h.prototype.getTriangleVertices=function(O,M,w,L){var V=O*3;this.getVertex(this.indices[V],M),this.getVertex(this.indices[V+1],w),this.getVertex(this.indices[V+2],L)},h.prototype.getNormal=function(O,M){var w=O*3;return M.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var _=new c;h.prototype.calculateLocalInertia=function(O,M){this.computeLocalAABB(_);var w=_.upperBound.x-_.lowerBound.x,L=_.upperBound.y-_.lowerBound.y,V=_.upperBound.z-_.lowerBound.z;return M.set(1/12*O*(2*L*2*L+2*V*2*V),1/12*O*(2*w*2*w+2*V*2*V),1/12*O*(2*L*2*L+2*w*2*w))};var E=new s;h.prototype.computeLocalAABB=function(O){var M=O.lowerBound,w=O.upperBound,L=this.vertices.length;this.vertices;var V=E;this.getVertex(0,V),M.copy(V),w.copy(V);for(var H=0;H!==L;H++)this.getVertex(H,V),V.x<M.x?M.x=V.x:V.x>w.x&&(w.x=V.x),V.y<M.y?M.y=V.y:V.y>w.y&&(w.y=V.y),V.z<M.z?M.z=V.z:V.z>w.z&&(w.z=V.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var O=0,M=this.vertices,w=new s,L=0,V=M.length/3;L!==V;L++){this.getVertex(L,w);var H=w.norm2();H>O&&(O=H)}this.boundingSphereRadius=Math.sqrt(O)},new s;var P=new o,D=new c;h.prototype.calculateWorldAABB=function(O,M,w,L){var V=P,H=D;V.position=O,V.quaternion=M,this.aabb.toWorldFrame(V,H),w.copy(H.lowerBound),L.copy(H.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(O,M,w,L,V){O=O||1,M=M||.5,w=w||8,L=L||6,V=V||Math.PI*2;for(var H=[],N=[],k=0;k<=w;k++)for(var tt=0;tt<=L;tt++){var F=tt/L*V,B=k/w*Math.PI*2,Z=(O+M*Math.cos(B))*Math.cos(F),W=(O+M*Math.cos(B))*Math.sin(F),T=M*Math.sin(B);H.push(Z,W,T)}for(var k=1;k<=w;k++)for(var tt=1;tt<=L;tt++){var U=(L+1)*k+tt-1,I=(L+1)*(k-1)+tt-1,C=(L+1)*(k-1)+tt,b=(L+1)*k+tt;N.push(U,I,b),N.push(I,C,b)}return new h(H,N)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],u=[];s.prototype.solve=function(h,l){var f=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,d=l.bodies,x=d.length,y=h,_,E,P,D,O,M;if(m!==0)for(var w=0;w!==x;w++)d[w].updateSolveMassProperties();var L=c,V=u,H=o;L.length=m,V.length=m,H.length=m;for(var w=0;w!==m;w++){var N=g[w];H[w]=0,V[w]=N.computeB(y),L[w]=1/N.computeC()}if(m!==0){for(var w=0;w!==x;w++){var k=d[w],tt=k.vlambda,F=k.wlambda;tt.set(0,0,0),F&&F.set(0,0,0)}for(f=0;f!==p;f++){D=0;for(var B=0;B!==m;B++){var N=g[B];_=V[B],E=L[B],M=H[B],O=N.computeGWlambda(),P=E*(_-O-N.eps*M),M+P<N.minForce?P=N.minForce-M:M+P>N.maxForce&&(P=N.maxForce-M),H[B]+=P,D+=P>0?P:-P,N.addToWlambda(P)}if(D*D<v)break}for(var w=0;w!==x;w++){var k=d[w],Z=k.velocity,W=k.angularVelocity;Z.vadd(k.vlambda,Z),W&&W.vadd(k.wlambda,W)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(d){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=d,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=s.STATIC;function f(d){for(var x=d.length,y=0;y!==x;y++){var _=d[y];if(!_.visited&&!(_.body.type&l))return _}return!1}var p=[];function v(d,x,y,_){for(p.push(d),d.visited=!0,x(d,y,_);p.length;)for(var E=p.pop(),P;P=f(E.children);)P.visited=!0,x(P,y,_),p.push(P)}function g(d,x,y){x.push(d.body);for(var _=d.eqs.length,E=0;E!==_;E++){var P=d.eqs[E];y.indexOf(P)===-1&&y.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(d,x){for(var y=c,_=this.nodePool,E=x.bodies,P=this.equations,D=P.length,O=E.length,M=this.subsolver;_.length<O;)_.push(this.createNode());y.length=O;for(var w=0;w<O;w++)y[w]=_[w];for(var w=0;w!==O;w++){var L=y[w];L.body=E[w],L.children.length=0,L.eqs.length=0,L.visited=!1}for(var V=0;V!==D;V++){var H=P[V],w=E.indexOf(H.bi),N=E.indexOf(H.bj),k=y[w],tt=y[N];k.children.push(tt),k.eqs.push(H),tt.children.push(k),tt.eqs.push(H)}var F,B=0,Z=u;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var W=h;F=f(y);){Z.length=0,W.bodies.length=0,v(F,g,W.bodies,Z);var T=Z.length;Z=Z.sort(m);for(var w=0;w!==T;w++)M.addEquation(Z[w]);M.solve(d,W),M.removeAllEquations(),B++}return B};function m(d,x){return x.id-d.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var u=c[s].indexOf(o);return u!==-1&&c[s].splice(u,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,f){f=f||{},f.root=null,f.aabb=l,o.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,f){this.children.length=this.data.length=0},o.prototype.insert=function(l,f,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var d=0;d!==8;d++)if(g[d].insert(l,f,p+1))return!0;m&&(g.length=0)}return v.push(f),!0};var u=new s;o.prototype.subdivide=function(){var l=this.aabb,f=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(f,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var d=v[m];d.root=g;var x=d.aabb.lowerBound;x.x*=u.x,x.y*=u.y,x.z*=u.z,x.vadd(f,x),x.vadd(u,d.aabb.upperBound)}},o.prototype.aabbQuery=function(l,f){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(f,v.data),Array.prototype.push.apply(p,v.children)}return f};var h=new r;o.prototype.rayQuery=function(l,f,p){return l.getAABB(h),h.toLocalFrame(f,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var f=l.pop(),p=f.children.length-1;p>=0;p--)f.children[p].data.length||f.children.splice(p,1);Array.prototype.push.apply(l,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var u=o;o=s,s=u}var h=s+"-"+o;this.get(s,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),f=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(st,it,dt,pt,te,Bt){var Mt;this.contactPointPool.length?(Mt=this.contactPointPool.pop(),Mt.bi=st,Mt.bj=it):Mt=new f(st,it),Mt.enabled=st.collisionResponse&&it.collisionResponse&&dt.collisionResponse&&pt.collisionResponse;var It=this.currentContactMaterial;Mt.restitution=It.restitution,Mt.setSpookParams(It.contactEquationStiffness,It.contactEquationRelaxation,this.world.dt);var et=dt.material||st.material,bt=pt.material||it.material;return et&&bt&&et.restitution>=0&&bt.restitution>=0&&(Mt.restitution=et.restitution*bt.restitution),Mt.si=te||dt,Mt.sj=Bt||pt,Mt},v.prototype.createFrictionEquationsFromContact=function(st,it){var dt=st.bi,pt=st.bj,te=st.si,Bt=st.sj,Mt=this.world,It=this.currentContactMaterial,et=It.friction,bt=te.material||dt.material,Ut=Bt.material||pt.material;if(bt&&Ut&&bt.friction>=0&&Ut.friction>=0&&(et=bt.friction*Ut.friction),et>0){var Gt=et*Mt.gravity.length(),Lt=dt.invMass+pt.invMass;Lt>0&&(Lt=1/Lt);var St=this.frictionEquationPool,S=St.length?St.pop():new p(dt,pt,Gt*Lt),G=St.length?St.pop():new p(dt,pt,Gt*Lt);return S.bi=G.bi=dt,S.bj=G.bj=pt,S.minForce=G.minForce=-Gt*Lt,S.maxForce=G.maxForce=Gt*Lt,S.ri.copy(st.ri),S.rj.copy(st.rj),G.ri.copy(st.ri),G.rj.copy(st.rj),st.ni.tangents(S.t,G.t),S.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Mt.dt),G.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Mt.dt),S.enabled=G.enabled=st.enabled,it.push(S,G),!0}return!1};var g=new c,m=new c,d=new c;v.prototype.createFrictionFromAverage=function(st){var it=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(it,this.frictionResult)||st===1)){var dt=this.frictionResult[this.frictionResult.length-2],pt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),d.setZero();var te=it.bi;it.bj;for(var Bt=0;Bt!==st;Bt++)it=this.result[this.result.length-1-Bt],it.bodyA!==te?(g.vadd(it.ni,g),m.vadd(it.ri,m),d.vadd(it.rj,d)):(g.vsub(it.ni,g),m.vadd(it.rj,m),d.vadd(it.ri,d));var Mt=1/st;m.scale(Mt,dt.ri),d.scale(Mt,dt.rj),pt.ri.copy(dt.ri),pt.rj.copy(dt.rj),g.normalize(),g.tangents(dt.t,pt.t)}};var x=new c,y=new c,_=new h,E=new h;v.prototype.getContacts=function(st,it,dt,pt,te,Bt,Mt){this.contactPointPool=te,this.frictionEquationPool=Mt,this.result=pt,this.frictionResult=Bt;for(var It=_,et=E,bt=x,Ut=y,Gt=0,Lt=st.length;Gt!==Lt;Gt++){var St=st[Gt],S=it[Gt],G=null;St.material&&S.material&&(G=dt.getContactMaterial(St.material,S.material)||null);for(var K=0;K<St.shapes.length;K++){St.quaternion.mult(St.shapeOrientations[K],It),St.quaternion.vmult(St.shapeOffsets[K],bt),bt.vadd(St.position,bt);for(var z=St.shapes[K],Q=0;Q<S.shapes.length;Q++){S.quaternion.mult(S.shapeOrientations[Q],et),S.quaternion.vmult(S.shapeOffsets[Q],Ut),Ut.vadd(S.position,Ut);var vt=S.shapes[Q];if(!(bt.distanceTo(Ut)>z.boundingSphereRadius+vt.boundingSphereRadius)){var Ft=null;z.material&&vt.material&&(Ft=dt.getContactMaterial(z.material,vt.material)||null),this.currentContactMaterial=Ft||G||dt.defaultContactMaterial;var Rt=this[z.type|vt.type];Rt&&(z.type<vt.type?Rt.call(this,z,vt,bt,Ut,It,et,St,S,z,vt):Rt.call(this,vt,z,Ut,bt,et,It,S,St,z,vt))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(st,it,dt,pt,te,Bt,Mt,It){st.convexPolyhedronRepresentation.material=st.material,it.convexPolyhedronRepresentation.material=it.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,it.convexPolyhedronRepresentation.collisionResponse=it.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,it.convexPolyhedronRepresentation,dt,pt,te,Bt,Mt,It,st,it)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(st,it,dt,pt,te,Bt,Mt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,it,dt,pt,te,Bt,Mt,It,st,it)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(st,it,dt,pt,te,Bt,Mt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,it,dt,pt,te,Bt,Mt,It,st,it)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(st,it,dt,pt,te,Bt,Mt,It){var et=this.createContactEquation(Mt,It,st,it);pt.vsub(dt,et.ni),et.ni.normalize(),et.ri.copy(et.ni),et.rj.copy(et.ni),et.ri.mult(st.radius,et.ri),et.rj.mult(-it.radius,et.rj),et.ri.vadd(dt,et.ri),et.ri.vsub(Mt.position,et.ri),et.rj.vadd(pt,et.rj),et.rj.vsub(It.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)};var P=new c,D=new c,O=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(st,it,dt,pt,te,Bt,Mt,It){var et=new c,bt=P;bt.set(0,0,1),te.vmult(bt,bt);for(var Ut=0;Ut<it.vertices.length/3;Ut++){it.getVertex(Ut,et);var Gt=new c;Gt.copy(et),u.pointToWorldFrame(pt,Bt,Gt,et);var Lt=D;et.vsub(dt,Lt);var St=bt.dot(Lt);if(St<=0){var S=this.createContactEquation(Mt,It,st,it);S.ni.copy(bt);var G=O;bt.scale(Lt.dot(bt),G),et.vsub(G,G),S.ri.copy(G),S.ri.vsub(Mt.position,S.ri),S.rj.copy(et),S.rj.vsub(It.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}};var M=new c,w=new c;new c;var L=new c,V=new c,H=new c,N=new c,k=new c,tt=new c,F=new c,B=new c,Z=new c,W=new c,T=new c,U=new r,I=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(st,it,dt,pt,te,Bt,Mt,It){var et=H,bt=N,Ut=k,Gt=tt,Lt=F,St=B,S=U,G=V,K=w,z=I;u.pointToLocalFrame(pt,Bt,dt,Lt);var Q=st.radius;S.lowerBound.set(Lt.x-Q,Lt.y-Q,Lt.z-Q),S.upperBound.set(Lt.x+Q,Lt.y+Q,Lt.z+Q),it.getTrianglesInAABB(S,z);for(var vt=L,Ft=st.radius*st.radius,Rt=0;Rt<z.length;Rt++)for(var Dt=0;Dt<3;Dt++)if(it.getVertex(it.indices[z[Rt]*3+Dt],vt),vt.vsub(Lt,K),K.norm2()<=Ft){G.copy(vt),u.pointToWorldFrame(pt,Bt,G,vt),vt.vsub(dt,K);var Et=this.createContactEquation(Mt,It,st,it);Et.ni.copy(K),Et.ni.normalize(),Et.ri.copy(Et.ni),Et.ri.scale(st.radius,Et.ri),Et.ri.vadd(dt,Et.ri),Et.ri.vsub(Mt.position,Et.ri),Et.rj.copy(vt),Et.rj.vsub(It.position,Et.rj),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}for(var Rt=0;Rt<z.length;Rt++)for(var Dt=0;Dt<3;Dt++){it.getVertex(it.indices[z[Rt]*3+Dt],et),it.getVertex(it.indices[z[Rt]*3+(Dt+1)%3],bt),bt.vsub(et,Ut),Lt.vsub(bt,St);var Kt=St.dot(Ut);Lt.vsub(et,St);var $t=St.dot(Ut);if($t>0&&Kt<0){Lt.vsub(et,St),Gt.copy(Ut),Gt.normalize(),$t=St.dot(Gt),Gt.scale($t,St),St.vadd(et,St);var he=St.distanceTo(Lt);if(he<st.radius){var Et=this.createContactEquation(Mt,It,st,it);St.vsub(Lt,Et.ni),Et.ni.normalize(),Et.ni.scale(st.radius,Et.ri),u.pointToWorldFrame(pt,Bt,St,St),St.vsub(It.position,Et.rj),u.vectorToWorldFrame(Bt,Et.ni,Et.ni),u.vectorToWorldFrame(Bt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}}for(var ye=Z,fe=W,le=T,de=M,Rt=0,kt=z.length;Rt!==kt;Rt++){it.getTriangleVertices(z[Rt],ye,fe,le),it.getNormal(z[Rt],de),Lt.vsub(ye,St);var he=St.dot(de);if(de.scale(he,St),Lt.vsub(St,St),he=St.distanceTo(Lt),o.pointInTriangle(St,ye,fe,le)&&he<st.radius){var Et=this.createContactEquation(Mt,It,st,it);St.vsub(Lt,Et.ni),Et.ni.normalize(),Et.ni.scale(st.radius,Et.ri),u.pointToWorldFrame(pt,Bt,St,St),St.vsub(It.position,Et.rj),u.vectorToWorldFrame(Bt,Et.ni,Et.ni),u.vectorToWorldFrame(Bt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}z.length=0};var C=new c,b=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(st,it,dt,pt,te,Bt,Mt,It){var et=this.createContactEquation(Mt,It,st,it);if(et.ni.set(0,0,1),Bt.vmult(et.ni,et.ni),et.ni.negate(et.ni),et.ni.normalize(),et.ni.mult(st.radius,et.ri),dt.vsub(pt,C),et.ni.mult(et.ni.dot(C),b),C.vsub(b,et.rj),-C.dot(et.ni)<=st.radius){var bt=et.ri,Ut=et.rj;bt.vadd(dt,bt),bt.vsub(Mt.position,bt),Ut.vadd(pt,Ut),Ut.vsub(It.position,Ut),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)}};var q=new c,rt=new c,J=new c;function j(st,it,dt){for(var pt=null,te=st.length,Bt=0;Bt!==te;Bt++){var Mt=st[Bt],It=q;st[(Bt+1)%te].vsub(Mt,It);var et=rt;It.cross(it,et);var bt=J;dt.vsub(Mt,bt);var Ut=et.dot(bt);if(pt===null||Ut>0&&pt===!0||Ut<=0&&pt===!1){pt===null&&(pt=Ut>0);continue}else return!1}return!0}var at=new c,ct=new c,X=new c,Pt=new c,ut=[new c,new c,new c,new c,new c,new c],nt=new c,ot=new c,qt=new c,Tt=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(st,it,dt,pt,te,Bt,Mt,It){var et=this.v3pool,bt=ut;dt.vsub(pt,at),it.getSideNormals(bt,Bt);for(var Ut=st.radius,Gt=!1,Lt=ot,St=qt,S=Tt,G=null,K=0,z=0,Q=0,vt=null,Ft=0,Rt=bt.length;Ft!==Rt&&Gt===!1;Ft++){var Dt=ct;Dt.copy(bt[Ft]);var Et=Dt.norm();Dt.normalize();var Kt=at.dot(Dt);if(Kt<Et+Ut&&Kt>0){var $t=X,he=Pt;$t.copy(bt[(Ft+1)%3]),he.copy(bt[(Ft+2)%3]);var ye=$t.norm(),fe=he.norm();$t.normalize(),he.normalize();var le=at.dot($t),de=at.dot(he);if(le<ye&&le>-ye&&de<fe&&de>-fe){var Me=Math.abs(Kt-Et-Ut);(vt===null||Me<vt)&&(vt=Me,z=le,Q=de,G=Et,Lt.copy(Dt),St.copy($t),S.copy(he),K++)}}}if(K){Gt=!0;var Xt=this.createContactEquation(Mt,It,st,it);Lt.mult(-Ut,Xt.ri),Xt.ni.copy(Lt),Xt.ni.negate(Xt.ni),Lt.mult(G,Lt),St.mult(z,St),Lt.vadd(St,Lt),S.mult(Q,S),Lt.vadd(S,Xt.rj),Xt.ri.vadd(dt,Xt.ri),Xt.ri.vsub(Mt.position,Xt.ri),Xt.rj.vadd(pt,Xt.rj),Xt.rj.vsub(It.position,Xt.rj),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}for(var kt=et.get(),Ge=nt,ue=0;ue!==2&&!Gt;ue++)for(var _e=0;_e!==2&&!Gt;_e++)for(var we=0;we!==2&&!Gt;we++)if(kt.set(0,0,0),ue?kt.vadd(bt[0],kt):kt.vsub(bt[0],kt),_e?kt.vadd(bt[1],kt):kt.vsub(bt[1],kt),we?kt.vadd(bt[2],kt):kt.vsub(bt[2],kt),pt.vadd(kt,Ge),Ge.vsub(dt,Ge),Ge.norm2()<Ut*Ut){Gt=!0;var Xt=this.createContactEquation(Mt,It,st,it);Xt.ri.copy(Ge),Xt.ri.normalize(),Xt.ni.copy(Xt.ri),Xt.ri.mult(Ut,Xt.ri),Xt.rj.copy(kt),Xt.ri.vadd(dt,Xt.ri),Xt.ri.vsub(Mt.position,Xt.ri),Xt.rj.vadd(pt,Xt.rj),Xt.rj.vsub(It.position,Xt.rj),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}et.release(kt),kt=null;for(var Ce=et.get(),He=et.get(),Xt=et.get(),Se=et.get(),Me=et.get(),Ee=bt.length,ue=0;ue!==Ee&&!Gt;ue++)for(var _e=0;_e!==Ee&&!Gt;_e++)if(ue%3!==_e%3){bt[_e].cross(bt[ue],Ce),Ce.normalize(),bt[ue].vadd(bt[_e],He),Xt.copy(dt),Xt.vsub(He,Xt),Xt.vsub(pt,Xt);var Ke=Xt.dot(Ce);Ce.mult(Ke,Se);for(var we=0;we===ue%3||we===_e%3;)we++;Me.copy(dt),Me.vsub(Se,Me),Me.vsub(He,Me),Me.vsub(pt,Me);var gr=Math.abs(Ke),Di=Me.norm();if(gr<bt[we].norm()&&Di<Ut){Gt=!0;var xe=this.createContactEquation(Mt,It,st,it);He.vadd(Se,xe.rj),xe.rj.copy(xe.rj),Me.negate(xe.ni),xe.ni.normalize(),xe.ri.copy(xe.rj),xe.ri.vadd(pt,xe.ri),xe.ri.vsub(dt,xe.ri),xe.ri.normalize(),xe.ri.mult(Ut,xe.ri),xe.ri.vadd(dt,xe.ri),xe.ri.vsub(Mt.position,xe.ri),xe.rj.vadd(pt,xe.rj),xe.rj.vsub(It.position,xe.rj),this.result.push(xe),this.createFrictionEquationsFromContact(xe,this.frictionResult)}}et.release(Ce,He,Xt,Se,Me)};var Ht=new c,xt=new c,Qt=new c,ee=new c,R=new c,A=new c,$=new c,mt=new c,ht=new c,gt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(st,it,dt,pt,te,Bt,Mt,It){var et=this.v3pool;dt.vsub(pt,Ht);for(var bt=it.faceNormals,Ut=it.faces,Gt=it.vertices,Lt=st.radius,St=0;St!==Gt.length;St++){var S=Gt[St],G=R;Bt.vmult(S,G),pt.vadd(G,G);var K=ee;if(G.vsub(dt,K),K.norm2()<Lt*Lt){Q=!0;var z=this.createContactEquation(Mt,It,st,it);z.ri.copy(K),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Lt,z.ri),G.vsub(pt,z.rj),z.ri.vadd(dt,z.ri),z.ri.vsub(Mt.position,z.ri),z.rj.vadd(pt,z.rj),z.rj.vsub(It.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var Q=!1,St=0,vt=Ut.length;St!==vt&&Q===!1;St++){var Ft=bt[St],Rt=Ut[St],Dt=A;Bt.vmult(Ft,Dt);var Et=$;Bt.vmult(Gt[Rt[0]],Et),Et.vadd(pt,Et);var Kt=mt;Dt.mult(-Lt,Kt),dt.vadd(Kt,Kt);var $t=ht;Kt.vsub(Et,$t);var he=$t.dot(Dt),ye=gt;if(dt.vsub(Et,ye),he<0&&ye.dot(Dt)>0){for(var fe=[],le=0,de=Rt.length;le!==de;le++){var kt=et.get();Bt.vmult(Gt[Rt[le]],kt),pt.vadd(kt,kt),fe.push(kt)}if(j(fe,Dt,dt)){Q=!0;var z=this.createContactEquation(Mt,It,st,it);Dt.mult(-Lt,z.ri),Dt.negate(z.ni);var Ge=et.get();Dt.mult(-he,Ge);var ue=et.get();Dt.mult(-Lt,ue),dt.vsub(pt,z.rj),z.rj.vadd(ue,z.rj),z.rj.vadd(Ge,z.rj),z.rj.vadd(pt,z.rj),z.rj.vsub(It.position,z.rj),z.ri.vadd(dt,z.ri),z.ri.vsub(Mt.position,z.ri),et.release(Ge),et.release(ue),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var le=0,_e=fe.length;le!==_e;le++)et.release(fe[le]);return}else for(var le=0;le!==Rt.length;le++){var we=et.get(),Ce=et.get();Bt.vmult(Gt[Rt[(le+1)%Rt.length]],we),Bt.vmult(Gt[Rt[(le+2)%Rt.length]],Ce),pt.vadd(we,we),pt.vadd(Ce,Ce);var He=xt;Ce.vsub(we,He);var Xt=Qt;He.unit(Xt);var Se=et.get(),Me=et.get();dt.vsub(we,Me);var Ee=Me.dot(Xt);Xt.mult(Ee,Se),Se.vadd(we,Se);var Ke=et.get();if(Se.vsub(dt,Ke),Ee>0&&Ee*Ee<He.norm2()&&Ke.norm2()<Lt*Lt){var z=this.createContactEquation(Mt,It,st,it);Se.vsub(pt,z.rj),Se.vsub(dt,z.ni),z.ni.normalize(),z.ni.mult(Lt,z.ri),z.rj.vadd(pt,z.rj),z.rj.vsub(It.position,z.rj),z.ri.vadd(dt,z.ri),z.ri.vsub(Mt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var le=0,_e=fe.length;le!==_e;le++)et.release(fe[le]);et.release(we),et.release(Ce),et.release(Se),et.release(Ke),et.release(Me);return}et.release(we),et.release(Ce),et.release(Se),et.release(Ke),et.release(Me)}for(var le=0,_e=fe.length;le!==_e;le++)et.release(fe[le])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(st,it,dt,pt,te,Bt,Mt,It){it.convexPolyhedronRepresentation.material=it.material,it.convexPolyhedronRepresentation.collisionResponse=it.collisionResponse,this.planeConvex(st,it.convexPolyhedronRepresentation,dt,pt,te,Bt,Mt,It)};var Vt=new c,wt=new c,zt=new c,jt=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(st,it,dt,pt,te,Bt,Mt,It){var et=Vt,bt=wt;bt.set(0,0,1),te.vmult(bt,bt);for(var Ut=0,Gt=zt,Lt=0;Lt!==it.vertices.length;Lt++){et.copy(it.vertices[Lt]),Bt.vmult(et,et),pt.vadd(et,et),et.vsub(dt,Gt);var St=bt.dot(Gt);if(St<=0){var S=this.createContactEquation(Mt,It,st,it),G=jt;bt.mult(bt.dot(Gt),G),et.vsub(G,G),G.vsub(dt,S.ri),S.ni.copy(bt),et.vsub(pt,S.rj),S.ri.vadd(dt,S.ri),S.ri.vsub(Mt.position,S.ri),S.rj.vadd(pt,S.rj),S.rj.vsub(It.position,S.rj),this.result.push(S),Ut++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}}this.enableFrictionReduction&&Ut&&this.createFrictionFromAverage(Ut)};var ie=new c,_t=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(st,it,dt,pt,te,Bt,Mt,It,et,bt,Ut,Gt){var Lt=ie;if(!(dt.distanceTo(pt)>st.boundingSphereRadius+it.boundingSphereRadius)&&st.findSeparatingAxis(it,dt,te,pt,Bt,Lt,Ut,Gt)){var St=[],S=_t;st.clipAgainstHull(dt,te,it,pt,Bt,Lt,-100,100,St);for(var G=0,K=0;K!==St.length;K++){var z=this.createContactEquation(Mt,It,st,it,et,bt),Q=z.ri,vt=z.rj;Lt.negate(z.ni),St[K].normal.negate(S),S.mult(St[K].depth,S),St[K].point.vadd(S,Q),vt.copy(St[K].point),Q.vsub(dt,Q),vt.vsub(pt,vt),Q.vadd(dt,Q),Q.vsub(Mt.position,Q),vt.vadd(pt,vt),vt.vsub(It.position,vt),this.result.push(z),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var ce=new c,Jt=new c,Yt=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(st,it,dt,pt,te,Bt,Mt,It){var et=ce;et.set(0,0,1),Mt.quaternion.vmult(et,et);var bt=Jt;pt.vsub(Mt.position,bt);var Ut=et.dot(bt);if(Ut<=0){var Gt=this.createContactEquation(It,Mt,it,st);Gt.ni.copy(et),Gt.ni.negate(Gt.ni),Gt.ri.set(0,0,0);var Lt=Yt;et.mult(et.dot(pt),Lt),pt.vsub(Lt,Lt),Gt.rj.copy(Lt),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}};var Wt=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(st,it,dt,pt,te,Bt,Mt,It){var et=Wt;et.set(0,0,1),pt.vsub(dt,et);var bt=et.norm2();if(bt<=st.radius*st.radius){var Ut=this.createContactEquation(It,Mt,it,st);et.normalize(),Ut.rj.copy(et),Ut.rj.mult(st.radius,Ut.rj),Ut.ni.copy(et),Ut.ni.negate(Ut.ni),Ut.ri.set(0,0,0),this.result.push(Ut),this.createFrictionEquationsFromContact(Ut,this.frictionResult)}};var Nt=new h,ne=new c;new c;var Y=new c,Ct=new c,yt=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(st,it,dt,pt,te,Bt,Mt,It){var et=-1,bt=Y,Ut=yt,Gt=null,Lt=ne;if(Lt.copy(pt),Lt.vsub(dt,Lt),te.conjugate(Nt),Nt.vmult(Lt,Lt),st.pointIsInside(Lt)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(dt,te),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(te);for(var St=0,S=st.faces.length;St!==S;St++){var G=[st.worldVertices[st.faces[St][0]]],K=st.worldFaceNormals[St];pt.vsub(G[0],Ct);var z=-K.dot(Ct);(Gt===null||Math.abs(z)<Math.abs(Gt))&&(Gt=z,et=St,bt.copy(K))}if(et!==-1){var Q=this.createContactEquation(It,Mt,it,st);bt.mult(Gt,Ut),Ut.vadd(pt,Ut),Ut.vsub(dt,Ut),Q.rj.copy(Ut),bt.negate(Q.ni),Q.ri.set(0,0,0);var vt=Q.ri,Ft=Q.rj;vt.vadd(pt,vt),vt.vsub(It.position,vt),Ft.vadd(dt,Ft),Ft.vsub(Mt.position,Ft),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(st,it,dt,pt,te,Bt,Mt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,it,dt,pt,te,Bt,Mt,It)};var ft=new c,At=new c,Zt=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(st,it,dt,pt,te,Bt,Mt,It){var et=it.data,bt=it.elementSize,Ut=st.boundingSphereRadius,Gt=At,Lt=Zt,St=ft;u.pointToLocalFrame(pt,Bt,dt,St);var S=Math.floor((St.x-Ut)/bt)-1,G=Math.ceil((St.x+Ut)/bt)+1,K=Math.floor((St.y-Ut)/bt)-1,z=Math.ceil((St.y+Ut)/bt)+1;if(!(G<0||z<0||S>et.length||K>et[0].length)){S<0&&(S=0),G<0&&(G=0),K<0&&(K=0),z<0&&(z=0),S>=et.length&&(S=et.length-1),G>=et.length&&(G=et.length-1),z>=et[0].length&&(z=et[0].length-1),K>=et[0].length&&(K=et[0].length-1);var Q=[];it.getRectMinMax(S,K,G,z,Q);var vt=Q[0],Ft=Q[1];if(!(St.z-Ut>Ft||St.z+Ut<vt))for(var Rt=S;Rt<G;Rt++)for(var Dt=K;Dt<z;Dt++)it.getConvexTrianglePillar(Rt,Dt,!1),u.pointToWorldFrame(pt,Bt,it.pillarOffset,Gt),dt.distanceTo(Gt)<it.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,it.pillarConvex,dt,Gt,te,Bt,Mt,It,null,null,Lt,null),it.getConvexTrianglePillar(Rt,Dt,!0),u.pointToWorldFrame(pt,Bt,it.pillarOffset,Gt),dt.distanceTo(Gt)<it.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,it.pillarConvex,dt,Gt,te,Bt,Mt,It,null,null,Lt,null)}};var ae=new c,se=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(st,it,dt,pt,te,Bt,Mt,It){var et=it.data,bt=st.radius,Ut=it.elementSize,Gt=se,Lt=ae;u.pointToLocalFrame(pt,Bt,dt,Lt);var St=Math.floor((Lt.x-bt)/Ut)-1,S=Math.ceil((Lt.x+bt)/Ut)+1,G=Math.floor((Lt.y-bt)/Ut)-1,K=Math.ceil((Lt.y+bt)/Ut)+1;if(!(S<0||K<0||St>et.length||K>et[0].length)){St<0&&(St=0),S<0&&(S=0),G<0&&(G=0),K<0&&(K=0),St>=et.length&&(St=et.length-1),S>=et.length&&(S=et.length-1),K>=et[0].length&&(K=et[0].length-1),G>=et[0].length&&(G=et[0].length-1);var z=[];it.getRectMinMax(St,G,S,K,z);var Q=z[0],vt=z[1];if(!(Lt.z-bt>vt||Lt.z+bt<Q))for(var Ft=this.result,Rt=St;Rt<S;Rt++)for(var Dt=G;Dt<K;Dt++){var Et=Ft.length;it.getConvexTrianglePillar(Rt,Dt,!1),u.pointToWorldFrame(pt,Bt,it.pillarOffset,Gt),dt.distanceTo(Gt)<it.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,it.pillarConvex,dt,Gt,te,Bt,Mt,It),it.getConvexTrianglePillar(Rt,Dt,!0),u.pointToWorldFrame(pt,Bt,it.pillarOffset,Gt),dt.distanceTo(Gt)<it.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,it.pillarConvex,dt,Gt,te,Bt,Mt,It);var Kt=Ft.length-Et;if(Kt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=_;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),f=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),d=e("../collision/AABB"),x=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new d;var E=new x;if(_.prototype.getContactMaterial=function(B,Z){return this.contactMaterialTable.get(B.id,Z.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof v&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(B){this.constraints.push(B)},_.prototype.removeConstraint=function(B){var Z=this.constraints.indexOf(B);Z!==-1&&this.constraints.splice(Z,1)},_.prototype.rayTest=function(B,Z,W){W instanceof m?this.raycastClosest(B,Z,{skipBackfaces:!0},W):this.raycastAll(B,Z,{skipBackfaces:!0},W)},_.prototype.raycastAll=function(B,Z,W,T){return W.mode=x.ALL,W.from=B,W.to=Z,W.callback=T,E.intersectWorld(this,W)},_.prototype.raycastAny=function(B,Z,W,T){return W.mode=x.ANY,W.from=B,W.to=Z,W.result=T,E.intersectWorld(this,W)},_.prototype.raycastClosest=function(B,Z,W,T){return W.mode=x.CLOSEST,W.from=B,W.to=Z,W.result=T,E.intersectWorld(this,W)},_.prototype.remove=function(B){B.world=null;var Z=this.bodies.length-1,W=this.bodies,T=W.indexOf(B);if(T!==-1){W.splice(T,1);for(var U=0;U!==W.length;U++)W[U].index=U;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(B){this.materials.push(B)},_.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var D=new s;_.prototype.step=function(B,Z,W){if(W=W||10,Z=Z||0,Z===0)this.internalStep(B),this.time+=B;else{var T=Math.floor((this.time+Z)/B)-Math.floor(this.time/B);T=Math.min(T,W);for(var U=performance.now(),I=0;I!==T&&(this.internalStep(B),!(performance.now()-U>B*1e3));I++);this.time+=Z;for(var C=this.time%B,b=C/B,q=D,rt=this.bodies,J=0;J!==rt.length;J++){var j=rt[J];j.type!==v.STATIC&&j.sleepState!==v.SLEEPING?(j.position.vsub(j.previousPosition,q),q.scale(b,q),j.position.vadd(q,j.interpolatedPosition)):(j.interpolatedPosition.copy(j.position),j.interpolatedQuaternion.copy(j.quaternion))}}};var O={type:"postStep"},M={type:"preStep"},w={type:"collide",body:null,contact:null},L=[],V=[],H=[],N=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var k=new o,tt=new o,F=new s;_.prototype.internalStep=function(B){this.dt=B;var Z=this.contacts,W=H,T=N,U=this.numObjects(),I=this.bodies,C=this.solver,b=this.gravity,q=this.doProfiling,rt=this.profile,J=v.DYNAMIC,j,at=this.constraints,ct=V;b.norm();var X=b.x,Pt=b.y,ut=b.z,nt=0;for(q&&(j=performance.now()),nt=0;nt!==U;nt++){var ot=I[nt];if(ot.type&J){var qt=ot.force,Tt=ot.mass;qt.x+=Tt*X,qt.y+=Tt*Pt,qt.z+=Tt*ut}}for(var nt=0,Ht=this.subsystems.length;nt!==Ht;nt++)this.subsystems[nt].update();q&&(j=performance.now()),W.length=0,T.length=0,this.broadphase.collisionPairs(this,W,T),q&&(rt.broadphase=performance.now()-j);var ie=at.length;for(nt=0;nt!==ie;nt++){var xt=at[nt];if(!xt.collideConnected)for(var Qt=W.length-1;Qt>=0;Qt-=1)(xt.bodyA===W[Qt]&&xt.bodyB===T[Qt]||xt.bodyB===W[Qt]&&xt.bodyA===T[Qt])&&(W.splice(Qt,1),T.splice(Qt,1))}this.collisionMatrixTick(),q&&(j=performance.now());var ee=L,R=Z.length;for(nt=0;nt!==R;nt++)ee.push(Z[nt]);Z.length=0;var A=this.frictionEquations.length;for(nt=0;nt!==A;nt++)ct.push(this.frictionEquations[nt]);this.frictionEquations.length=0,this.narrowphase.getContacts(W,T,this,Z,ee,this.frictionEquations,ct),q&&(rt.narrowphase=performance.now()-j),q&&(j=performance.now());for(var nt=0;nt<this.frictionEquations.length;nt++)C.addEquation(this.frictionEquations[nt]);for(var $=Z.length,mt=0;mt!==$;mt++){var xt=Z[mt],ot=xt.bi,ht=xt.bj;xt.si,xt.sj;var gt;if(ot.material&&ht.material?gt=this.getContactMaterial(ot.material,ht.material)||this.defaultContactMaterial:gt=this.defaultContactMaterial,gt.friction,ot.material&&ht.material&&(ot.material.friction>=0&&ht.material.friction>=0&&ot.material.friction*ht.material.friction,ot.material.restitution>=0&&ht.material.restitution>=0&&(xt.restitution=ot.material.restitution*ht.material.restitution)),C.addEquation(xt),ot.allowSleep&&ot.type===v.DYNAMIC&&ot.sleepState===v.SLEEPING&&ht.sleepState===v.AWAKE&&ht.type!==v.STATIC){var Vt=ht.velocity.norm2()+ht.angularVelocity.norm2(),wt=Math.pow(ht.sleepSpeedLimit,2);Vt>=wt*2&&(ot._wakeUpAfterNarrowphase=!0)}if(ht.allowSleep&&ht.type===v.DYNAMIC&&ht.sleepState===v.SLEEPING&&ot.sleepState===v.AWAKE&&ot.type!==v.STATIC){var zt=ot.velocity.norm2()+ot.angularVelocity.norm2(),jt=Math.pow(ot.sleepSpeedLimit,2);zt>=jt*2&&(ht._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ot,ht,!0),this.collisionMatrixPrevious.get(ot,ht)||(w.body=ht,w.contact=xt,ot.dispatchEvent(w),w.body=ot,ht.dispatchEvent(w))}for(q&&(rt.makeContactConstraints=performance.now()-j,j=performance.now()),nt=0;nt!==U;nt++){var ot=I[nt];ot._wakeUpAfterNarrowphase&&(ot.wakeUp(),ot._wakeUpAfterNarrowphase=!1)}var ie=at.length;for(nt=0;nt!==ie;nt++){var xt=at[nt];xt.update();for(var Qt=0,_t=xt.equations.length;Qt!==_t;Qt++){var ce=xt.equations[Qt];C.addEquation(ce)}}C.solve(B,this),q&&(rt.solve=performance.now()-j),C.removeAllEquations();var Jt=Math.pow;for(nt=0;nt!==U;nt++){var ot=I[nt];if(ot.type&J){var Yt=Jt(1-ot.linearDamping,B),Wt=ot.velocity;Wt.mult(Yt,Wt);var Nt=ot.angularVelocity;if(Nt){var ne=Jt(1-ot.angularDamping,B);Nt.mult(ne,Nt)}}}for(this.dispatchEvent(M),nt=0;nt!==U;nt++){var ot=I[nt];ot.preStep&&ot.preStep.call(ot)}q&&(j=performance.now());var Y=k,Ct=tt,yt=this.stepnumber,ft=v.DYNAMIC|v.KINEMATIC,At=yt%(this.quatNormalizeSkip+1)===0,Zt=this.quatNormalizeFast,ae=B*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,nt=0;nt!==U;nt++){var se=I[nt],st=se.force,it=se.torque;if(se.type&ft&&se.sleepState!==v.SLEEPING){var dt=se.velocity,pt=se.angularVelocity,te=se.position,Bt=se.quaternion,Mt=se.invMass,It=se.invInertiaWorld;dt.x+=st.x*Mt*B,dt.y+=st.y*Mt*B,dt.z+=st.z*Mt*B,se.angularVelocity&&(It.vmult(it,F),F.mult(B,F),F.vadd(pt,pt)),te.x+=dt.x*B,te.y+=dt.y*B,te.z+=dt.z*B,se.angularVelocity&&(Y.set(pt.x,pt.y,pt.z,0),Y.mult(Bt,Ct),Bt.x+=ae*Ct.x,Bt.y+=ae*Ct.y,Bt.z+=ae*Ct.z,Bt.w+=ae*Ct.w,At&&(Zt?Bt.normalizeFast():Bt.normalize())),se.aabb&&(se.aabbNeedsUpdate=!0),se.updateInertiaWorld&&se.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,q&&(rt.integrate=performance.now()-j),this.time+=B,this.stepnumber+=1,this.dispatchEvent(O),nt=0;nt!==U;nt++){var ot=I[nt],et=ot.postStep;et&&et.call(ot)}if(this.allowSleep)for(nt=0;nt!==U;nt++)I[nt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var B=this.bodies,Z=B.length,W=0;W!==Z;W++){var T=B[W];T.force,T.torque,T.force.set(0,0,0),T.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(xo);var gn=xo.exports;const Xn=1;let Xe=[];const yo=(i,t,e,n,a,r,s)=>{const o=new xi(n,Xn,a),c=new pe(`hsl(${30+Xe.length*4}, 100%, 50%)`),u=new Ld({color:c}),h=new vn(o,u);h.position.set(i,t,e),on.add(h);const l=new gn.Box(new gn.Vec3(n/2,Xn/2,a/2));let f=r?5:0;const p=new gn.Body({mass:f,shape:l});return p.position.set(i,t,e),hi.addBody(p),{threejs:h,cannonjs:p,width:n,depth:a,direction:s}},ls=(i,t,e,n,a)=>{const r=Xn*Xe.length,s=yo(i,r,t,e,n,!1,a);Xe.push(s)},sr=3;let Hn,on,hi;const Fd=()=>{hi=new gn.World,hi.gravity.set(0,-10,0),hi.broadphase=new gn.NaiveBroadphase,hi.solver.iterations=40},Mo=()=>{Fd(),on=new Pd;const i=new Nd(16777215,.6);on.add(i);const t=new Dd(16777215,.6);t.position.set(10,20,0),on.add(t);const e=10,n=e*(window.innerHeight/window.innerWidth);Hn=new gs(e/-2,e/2,n/2,n/-2,1,100),Hn.position.set(4,4,4),Hn.lookAt(0,0,0),ls(0,0,sr,sr,"z"),ls(-10,2,sr,sr,"x")};let ui;const Bd=()=>{ui=new go({antialias:!0}),ui.setSize(window.innerWidth,window.innerHeight),ui.render(on,Hn),document.body.appendChild(ui.domElement)};let So=[];const Ga=(i,t,e,n)=>{const a=Xn*(Xe.length-1),r=yo(i,a,t,e,n,!0);So.push(r)};let Kr=!1,Od=1/60,zd=3,$r;const Vd=i=>{if($r!==void 0){let t=(i-$r)/1e3;hi.step(Od,t,zd)}So.forEach(t=>{t.threejs.position.copy(t.cannonjs.position),t.threejs.quaternion.copy(t.cannonjs.quaternion)}),$r=i},Gd=i=>{const e=Xe[Xe.length-1];e.threejs.position[e.direction||"x"]+=.15,e.cannonjs.position[e.direction||"x"]+=.15,Hn.position.y<Xn*(Xe.length-2)+4&&(Hn.position.y+=.15),Vd(i),ui.render(on,Hn)},Hd=()=>{if(!Kr)ui.setAnimationLoop(Gd),Kr=!0,cs(!1);else{const i=Xe[Xe.length-1],t=Xe[Xe.length-2],e=i.direction||"x",n=i.threejs.position[e]-t.threejs.position[e],a=Math.abs(n),r=e==="x"?i.width:i.depth,s=r-a;if(s>0){const o=e==="x"?s:i.width,c=e==="z"?s:i.depth;i.width=o,i.depth=c,i.threejs.scale[e]=s/r,i.threejs.position[e]-=n/2,i.cannonjs.position[e]-=n/2,i.cannonjs.position[e]-=n/2;const u=new gn.Box(new gn.Vec3(o/2,Xn/2,c/2));i.cannonjs.shapes=[],i.cannonjs.addShape(u);const h=(s/2+a/2)*Math.sign(n),l=e==="x"?i.threejs.position.x+h:i.threejs.position.x,f=e==="z"?i.threejs.position.z+h:i.threejs.position.z;Ga(l,f,e==="x"?a:o,e==="z"?a:c);const g=e==="x"?i.threejs.position.x:-10,m=e==="z"?i.threejs.position.z:-10;ls(g,m,o,c,e==="x"?"z":"x")}else{i.cannonjs.position[e]-=n/2,i.cannonjs.position[e]-=n/2;const o=new gn.Box(new gn.Vec3(i.width/2,Xn/2,i.depth/2));i.cannonjs.shapes=[],i.cannonjs.addShape(o),Ga(i.threejs.position.x,i.threejs.position.z,i.width,i.depth),on.remove(i.threejs),Kr=!1,cs(!0)}}},Wd=()=>{kd(),cs(!1)},kd=()=>{for(;on.children.length>0;)on.remove(on.children[0]);for(;Xe.length>0;)Xe.pop();Mo()},cs=i=>{const t=document.getElementById("game-start-screen");if(t){if(i){t.style.display="flex";return}t.style.display="none"}};var Ha;(Ha=document.getElementById("game-start-screen"))==null||Ha.addEventListener("click",()=>{Wd()});Mo();window.addEventListener("click",Hd);Bd();
