(()=>{var T=(u=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(u,{get:(E,b)=>(typeof require!="undefined"?require:E)[b]}):u)(function(u){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+u+'" is not supported')});var K=(u,E)=>()=>(E||u((E={exports:{}}).exports,E),E.exports);var P=K((H,U)=>{(function(){function u(b,r){return r?T(b):b.slice?u[t(b)]:function(s,f){b(s={exports:{}}),u[t(f)]=s.exports};function t(s){return s.split("/").slice(-1).toString().replace(".js","")}}var E;typeof U<"u"&&(E=U),u(function(b){typeof window<"u"&&(b.window=window);var r=(b.window||b).SEA||{};(r.window=b.window)&&(r.window.SEA=r);try{void 0+""!=typeof E&&(E.exports=r)}catch{}b.exports=r})(u,"./root"),u(function(b){var r=u("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTP is not supported. Redirecting to HTTPS..."),location.protocol="https:")}catch{}})(u,"./https"),u(function(b){var r;if(r+""==typeof btoa){if(r+""==typeof Buffer)try{global.Buffer=u("buffer",1).Buffer}catch{}global.btoa=function(t){return Buffer.from(t,"binary").toString("base64")},global.atob=function(t){return Buffer.from(t,"base64").toString("binary")}}})(u,"./base64"),u(function(b){function r(){}u("./base64"),Object.assign(r,{from:Array.from}),(r.prototype=Object.create(Array.prototype)).toString=function(t,s,f){s=s||0;var n=this.length;if((t=t||"utf8")!=="hex")return t==="utf8"?Array.from({length:(f||n)-s},(o,i)=>String.fromCharCode(this[i+s])).join(""):t==="base64"?btoa(this):void 0;{let o=new Uint8Array(this);return[...Array((f&&f+1||n)-s).keys()].map(i=>o[i+s].toString(16).padStart(2,"0")).join("")}},b.exports=r})(u,"./array"),u(function(b){u("./base64");var r=u("./array");function t(...s){return t.from(...s)}t.prototype=Object.create(Array.prototype),Object.assign(t,{from(){if(!Object.keys(arguments).length||arguments[0]==null)throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");let s=arguments[0],f;if(typeof s=="string"){var n=arguments[1]||"utf8";if(n==="hex"){var o=s.match(/([\da-fA-F]{2})/g).map(p=>parseInt(p,16));if(!o||!o.length)throw new TypeError("Invalid first argument for type 'hex'.");f=r.from(o)}else if(n==="utf8"||n==="binary"){let p=s.length,g=new Uint16Array(p);Array.from({length:p},(y,a)=>g[a]=s.charCodeAt(a)),f=r.from(g)}else if(n==="base64"){let p=atob(s),g=p.length,y=new Uint8Array(g);Array.from({length:g},(a,l)=>y[l]=p.charCodeAt(l)),f=r.from(y)}else n==="binary"?f=r.from(s):console.info("SafeBuffer.from unknown encoding: "+n);return f}if(s.byteLength,s.byteLength||s.length){let p;return s instanceof ArrayBuffer&&(p=new Uint8Array(s)),r.from(p||s)}},alloc(s,f=0){return r.from(new Uint8Array(Array.from({length:s},()=>f)))},allocUnsafe(s){return r.from(new Uint8Array(Array.from({length:s})))},concat(s){if(Array.isArray(s))return r.from(s.reduce((f,n)=>f.concat(Array.from(n)),[]));throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.")}}),t.prototype.from=t.from,t.prototype.toString=r.prototype.toString,b.exports=t})(u,"./buffer"),u(function(b){var r=u("./root");let t={Buffer:u("./buffer")};var s={};if(JSON.parseAsync=JSON.parseAsync||function(n,o,i){try{o(void 0,JSON.parse(n,i))}catch(p){o(p)}},JSON.stringifyAsync=JSON.stringifyAsync||function(n,o,i,p){try{o(void 0,JSON.stringify(n,i,p))}catch(g){o(g)}},t.parse=function(n,o){return new Promise(function(i,p){JSON.parseAsync(n,function(g,y){g?p(g):i(y)},o)})},t.stringify=function(n,o,i){return new Promise(function(p,g){JSON.stringifyAsync(n,function(y,a){y?g(y):p(a)},o,i)})},r.window&&(t.crypto=window.crypto||window.msCrypto,t.subtle=(t.crypto||s).subtle||(t.crypto||s).webkitSubtle,t.TextEncoder=window.TextEncoder,t.TextDecoder=window.TextDecoder,t.random=n=>t.Buffer.from(t.crypto.getRandomValues(new Uint8Array(t.Buffer.alloc(n))))),t.TextDecoder||({TextEncoder:r,TextDecoder:s}=u((void 0+""==typeof E?".":"")+"./lib/text-encoding",1),t.TextDecoder=s,t.TextEncoder=r),!t.crypto)try{var f=u("crypto",1);Object.assign(t,{crypto:f,random:o=>t.Buffer.from(f.randomBytes(o))});let n=u("@peculiar/webcrypto",1).Crypto;t.ossl=t.subtle=new n({directory:"ossl"}).subtle}catch{}b.exports=t})(u,"./shim"),u(function(b){var r=u("./root"),t=u("./shim"),s={pbkdf2:{hash:{name:"SHA-256"},iter:1e5,ks:64},ecdsa:{pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},ecdh:{name:"ECDH",namedCurve:"P-256"},jwk:function(f,n){return f={kty:"EC",crv:"P-256",x:(f=f.split("."))[0],y:f[1],ext:!0},f.key_ops=n?["sign"]:["verify"],n&&(f.d=n),f},keyToJwk:function(f){let n=f.toString("base64");return{kty:"oct",k:n.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""),ext:!1,alg:"A256GCM"}},recall:{validity:43200,hook:function(f){return f}},check:function(f){return typeof f=="string"&&f.slice(0,4)==="SEA{"},parse:async function(f){try{var n=typeof f=="string";return n&&f.slice(0,4)==="SEA{"&&(f=f.slice(3)),n?await t.parse(f):f}catch{}return f}};r.opt=s,b.exports=s})(u,"./settings"),u(function(b){var r=u("./shim");b.exports=async function(t,s){return t=typeof t=="string"?t:await r.stringify(t),s=await r.subtle.digest({name:s||"SHA-256"},new r.TextEncoder().encode(t)),r.Buffer.from(s)}})(u,"./sha256"),u(function(b){var r=u("./shim"),t=r.subtle;let s=r.ossl||t;b.exports=f=>s.digest({name:"SHA-1"},new ArrayBuffer(f))})(u,"./sha1"),u(function(b){var r=u("./root"),t=u("./shim"),s=u("./settings"),f=u("./sha256");r.work=r.work||(async(n,o,i,p)=>{try{var y=(o||{}).epub||o;if(p=p||{},y instanceof Function&&(i=y,y=void 0),n=typeof n=="string"?n:await t.stringify(n),(p.name||"").toLowerCase().slice(0,3)==="sha"){var g=t.Buffer.from(await f(n,p.name),"binary").toString(p.encode||"base64");if(i)try{i(g)}catch(d){console.log(d)}return g}var y=y||t.random(9),a=await(t.ossl||t.subtle).importKey("raw",new t.TextEncoder().encode(n),{name:p.name||"PBKDF2"},!1,["deriveBits"]),l=await(t.ossl||t.subtle).deriveBits({name:p.name||"PBKDF2",iterations:p.iterations||s.pbkdf2.iter,salt:new t.TextEncoder().encode(p.salt||y),hash:p.hash||s.pbkdf2.hash},a,p.length||8*s.pbkdf2.ks),w=(n=t.random(n.length),t.Buffer.from(l,"binary").toString(p.encode||"base64"));if(i)try{i(w)}catch(d){console.log(d)}return w}catch(d){if(console.log(d),r.err=d,r.throw)throw d;return void(i&&i())}}),b.exports=r.work})(u,"./work"),u(function(b){var r=u("./root"),t=u("./shim");u("./settings"),r.name=r.name||(async(s,f)=>{try{if(s)try{s()}catch(n){console.log(n)}return}catch(n){if(console.log(n),r.err=n,r.throw)throw n;return void(s&&s())}}),r.pair=r.pair||(async(s,f)=>{try{var n=t.ossl||t.subtle,o=await t.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then(async a=>{var y={},a=(y.priv=(await t.subtle.exportKey("jwk",a.privateKey)).d,await t.subtle.exportKey("jwk",a.publicKey));return y.pub=a.x+"."+a.y,y});try{var i=await n.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then(async l=>{var a={},l=(a.epriv=(await n.exportKey("jwk",l.privateKey)).d,await n.exportKey("jwk",l.publicKey));return a.epub=l.x+"."+l.y,a})}catch(g){if(r.window||g!="Error: ECDH is not a supported algorithm")throw g;console.log("Ignoring ECDH...")}var i=i||{},p={pub:o.pub,priv:o.priv,epub:i.epub,epriv:i.epriv};if(s)try{s(p)}catch(g){console.log(g)}return p}catch(g){if(console.log(g),r.err=g,r.throw)throw g;return void(s&&s())}}),b.exports=r.pair})(u,"./pair"),u(function(b){var r=u("./root"),t=u("./shim"),s=u("./settings"),f=u("./sha256");r.sign=r.sign||(async(n,o,i,p)=>{try{if(p=p||{},!(o||p).priv){if(!r.I)throw"No signing key.";o=await r.I(null,{what:n,how:"sign",why:p.why})}if(n===void 0)throw"`undefined` not allowed.";var g=await s.parse(n),y=p.check=p.check||g;if(r.verify&&(r.opt.check(y)||y&&y.s&&y.m)&&await r.verify(y,o)!==void 0){var e=await s.parse(y);if(p.raw||(e="SEA"+await t.stringify(e)),i)try{i(e)}catch(v){console.log(v)}return e}var a=o.pub,l=o.priv,w=s.jwk(a,l),d=await f(g),h=await(t.ossl||t.subtle).importKey("jwk",w,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then(c=>(t.ossl||t.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},c,new Uint8Array(d))),e={m:g,s:t.Buffer.from(h,"binary").toString(p.encode||"base64")};if(p.raw||(e="SEA"+await t.stringify(e)),i)try{i(e)}catch(c){console.log(c)}return e}catch(c){if(console.log(c),r.err=c,r.throw)throw c;return void(i&&i())}}),b.exports=r.sign})(u,"./sign"),u(function(b){var r=u("./root"),t=u("./shim"),s=u("./settings"),f=u("./sha256"),n=(r.verify=r.verify||(async(i,p,g,y)=>{try{var a=await s.parse(i);if(p===!1){var l=await s.parse(a.m);if(g)try{g(l)}catch(k){console.log(k)}return l}y=y||{};var w,d,h,e=p.pub||p,c=r.opt.slow_leak?await r.opt.slow_leak(e):await(t.ossl||t.subtle).importKey("jwk",s.jwk(e),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),v=await f(a.m);try{if(w=t.Buffer.from(a.s,y.encode||"base64"),d=new Uint8Array(w),!(h=await(t.ossl||t.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},c,d,new Uint8Array(v))))throw"Signature did not match."}catch{if(r.opt.fallback)return await r.opt.fall_verify(i,p,g,y)}var m=h?await s.parse(a.m):void 0;if(g)try{g(m)}catch(k){console.log(k)}return m}catch(k){if(console.log(k),r.err=k,r.throw)throw k;return void(g&&g())}}),b.exports=r.verify,{}),o=(r.opt.slow_leak=i=>{if(n[i])return n[i];var p=s.jwk(i);return n[i]=(t.ossl||t.subtle).importKey("jwk",p,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),n[i]},r.opt);r.opt.fall_verify=async function(i,c,g,y,v){if(v===r.opt.fallback)throw"Signature did not match";v=v||1;var l,w,d,h=i||"",e=(i=r.opt.unpack(i)||i,await s.parse(i)),c=c.pub||c,c=await r.opt.slow_leak(c),v=v<=r.opt.fallback?t.Buffer.from(await t.subtle.digest({name:"SHA-256"},new t.TextEncoder().encode(await s.parse(e.m)))):await f(e.m);try{if(l=t.Buffer.from(e.s,y.encode||"base64"),w=new Uint8Array(l),!(d=await(t.ossl||t.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},c,w,new Uint8Array(v))))throw"Signature did not match."}catch{try{l=t.Buffer.from(e.s,"utf8"),w=new Uint8Array(l),d=await(t.ossl||t.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},c,w,new Uint8Array(v))}catch{if(!d)throw"Signature did not match."}}if(y=d?await s.parse(e.m):void 0,o.fall_soul=h["#"],o.fall_key=h["."],o.fall_val=i,o.fall_state=h[">"],g)try{g(y)}catch(m){console.log(m)}return y},r.opt.fallback=2})(u,"./verify"),u(function(b){var r=u("./shim"),t=u("./settings"),s=u("./sha256");b.exports=async(f,n,o)=>(f+=(n||r.random(8)).toString("utf8"),n=r.Buffer.from(await s(f),"binary"),f=t.keyToJwk(n),r.subtle.importKey("jwk",f,{name:"AES-GCM"},!1,["encrypt","decrypt"]))})(u,"./aeskey"),u(function(b){var r=u("./root"),t=u("./shim"),s=(u("./settings"),u("./aeskey"));r.encrypt=r.encrypt||(async(f,n,o,i)=>{try{i=i||{};var p=(n||i).epriv||n;if(f===void 0)throw"`undefined` not allowed.";if(!p){if(!r.I)throw"No encryption key.";p=(n=await r.I(null,{what:f,how:"encrypt",why:i.why})).epriv||n}var g=typeof f=="string"?f:await t.stringify(f),y={s:t.random(9),iv:t.random(15)},a=await s(p,y.s,i).then(w=>t.subtle.encrypt({name:i.name||"AES-GCM",iv:new Uint8Array(y.iv)},w,new t.TextEncoder().encode(g))),l={ct:t.Buffer.from(a,"binary").toString(i.encode||"base64"),iv:y.iv.toString(i.encode||"base64"),s:y.s.toString(i.encode||"base64")};if(i.raw||(l="SEA"+await t.stringify(l)),o)try{o(l)}catch(w){console.log(w)}return l}catch(w){if(console.log(w),r.err=w,r.throw)throw w;return void(o&&o())}}),b.exports=r.encrypt})(u,"./encrypt"),u(function(b){var r=u("./root"),t=u("./shim"),s=u("./settings"),f=u("./aeskey");r.decrypt=r.decrypt||(async(n,o,i,p)=>{try{p=p||{};var g=(o||p).epriv||o;if(!g){if(!r.I)throw"No decryption key.";g=(o=await r.I(null,{what:n,how:"decrypt",why:p.why})).epriv||o}var y=await s.parse(n);try{var a=t.Buffer.from(y.s,p.encode||"base64"),l=t.Buffer.from(y.iv,p.encode||"base64"),w=t.Buffer.from(y.ct,p.encode||"base64"),d=await f(g,a,p).then(e=>t.subtle.decrypt({name:p.name||"AES-GCM",iv:new Uint8Array(l),tagLength:128},e,new Uint8Array(w)))}catch{if(p.encode==="utf8")throw"Could not decrypt";if(r.opt.fallback)return p.encode="utf8",await r.decrypt(n,o,i,p)}var h=await s.parse(new t.TextDecoder("utf8").decode(d));if(i)try{i(h)}catch(e){console.log(e)}return h}catch(e){if(console.log(e),r.err=e,r.throw)throw e;return void(i&&i())}}),b.exports=r.decrypt})(u,"./decrypt"),u(function(b){var r=u("./root"),t=u("./shim"),s=(u("./settings"),r.secret=r.secret||(async(f,n,o,i)=>{try{if(i=i||{},!n||!n.epriv||!n.epub){if(!r.I)throw"No secret mix.";n=await r.I(null,{what:f,how:"secret",why:i.why})}var p=f.epub||f,g=n.epub,y=n.epriv,a=t.ossl||t.subtle,l=s(p),w=Object.assign({public:await a.importKey(...l,!0,[])},{name:"ECDH",namedCurve:"P-256"}),d=s(g,y),h=await a.importKey(...d,!1,["deriveBits"]).then(async e=>(e=await a.deriveBits(w,e,256),e=new Uint8Array(e),e=await a.importKey("raw",e,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),a.exportKey("jwk",e).then(({k:c})=>c)));if(o)try{o(h)}catch(e){console.log(e)}return h}catch(e){if(console.log(e),r.err=e,r.throw)throw e;return void(o&&o())}}),(o,n)=>{var[o,i]=o.split(".");return["jwk",Object.assign(n?{d:n}:{},{x:o,y:i,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]});b.exports=r.secret})(u,"./secret"),u(function(b){var r=u("./root");r.certify=r.certify||(async(t,s={},f,n,o={})=>{try{if(!(t=(()=>{var h=[];if(t){if((typeof t=="string"||Array.isArray(t))&&-1<t.indexOf("*"))return"*";if(typeof t=="string")return t;if(Array.isArray(t)){if(t.length===1&&t[0])return typeof t[0]=="object"&&t[0].pub?t[0].pub:typeof t[0]=="string"?t[0]:null;t.map(e=>{typeof e=="string"?h.push(e):typeof e=="object"&&e.pub&&h.push(e.pub)})}return typeof t=="object"&&t.pub?t.pub:0<h.length?h:null}})()))return console.log("No certificant found.");var i=!o.expiry||typeof o.expiry!="number"&&typeof o.expiry!="string"?null:parseFloat(o.expiry),p=(s||{}).read?s.read:null,g=(s||{}).write?s.write:typeof s=="string"||Array.isArray(s)||s["+"]||s["#"]||s["."]||s["="]||s["*"]||s[">"]||s["<"]?s:null,y=(o||{}).block||(o||{}).blacklist||(o||{}).ban||{},a=y.read&&(typeof y.read=="string"||(y.read||{})["#"])?y.read:null,l=typeof y=="string"?y:y.write&&(typeof y.write=="string"||y.write["#"])?y.write:null;if(!p&&!g)return console.log("No policy found.");var w=JSON.stringify({c:t,...i?{e:i}:{},...p?{r:p}:{},...g?{w:g}:{},...a?{rb:a}:{},...l?{wb:l}:{}}),d=await r.sign(w,f,null,{raw:1});if(o.raw||(d="SEA"+JSON.stringify(d)),n)try{n(d)}catch(h){console.log(h)}return d}catch(h){if(r.err=h,r.throw)throw h;return void(n&&n())}}),b.exports=r.certify})(u,"./certify"),u(function(b){var r=u("./shim"),t=u("./root");t.work=u("./work"),t.sign=u("./sign"),t.verify=u("./verify"),t.encrypt=u("./encrypt"),t.decrypt=u("./decrypt"),t.certify=u("./certify"),t.random=t.random||r.random,t.Buffer=t.Buffer||u("./buffer"),t.keyid=t.keyid||(async s=>{try{var f=r.Buffer.concat(s.replace(/-/g,"+").replace(/_/g,"/").split(".").map(p=>r.Buffer.from(p,"base64"))),n=r.Buffer.concat([r.Buffer.from([153,f.length/256,f.length%256]),f]),o=await sha1hash(n);let i=r.Buffer.from(o,"binary");return i.toString("hex",i.length-8)}catch(i){throw console.log(i),i}}),((t.window||{}).Database||{}).SEA=t,b.exports=t})(u,"./sea"),u(function(b){var r,t=u("./sea");function s(o){this._={$:this}}function f(){}function n(){return r.state().toString(36).replace(".","")}r=t.window.Database,t.Database=r,f.prototype=r.chain,(s.prototype=new f).constructor=s,r.chain.user=function(o){var i=this.back(-1);if(o)return o=t.opt.pub((o._||"")["#"])||o,i.get("~"+o);if(o=i.back("user"))return o;var p=i=i._,g=p.opt.uuid||n;return(p=(o=p.user=this.chain(new s))._).opt={},p.opt.uuid=function(y){var a=g(),l=i.user;return(l=l&&l.is)&&(l=l.pub)&&(a="~"+l+"/"+a,y&&y.call&&y(null,a)),a},o},(r.User=s).Database=r,s.SEA=r.SEA=t,b.exports=s})(u,"./user"),u(function(b){window.Database.chain.then=function(r,t){var s=this,f=new Promise(function(n,o){s.once(n,t)});return r?f.then(r):f}})(u,"./then"),u(function(b){var r=u("./user"),t=r.SEA,s=r.Database,f=function(){};r.prototype.create=function(...n){var o,i=typeof n[0]=="object"&&(n[0].pub||n[0].epub)?n[0]:typeof n[1]=="object"&&(n[1].pub||n[1].epub)?n[1]:null,p=i&&(i.pub||i.epub)?i.pub:typeof n[0]=="string"?n[0]:null,g=i&&(i.pub||i.epub)?i:p&&typeof n[1]=="string"?n[1]:null,w=n.filter(e=>typeof e=="function")[0]||null,d=n&&1<n.length&&typeof n[n.length-1]=="object"?n[n.length-1]:{},y=this,a=y._,l=y.back(-1),w=w||f,d=d||{};if(d.check!==!1&&(p||(o="No user."),o=(g||"").length<8?"Password is too short":o))return w({err:s.log(o)}),y;if(a.ing)return(w||f)({err:s.log("User is already being created or authenticated!"),wait:!0}),y;a.ing=!0;var h={a:function(e){if((h.pubs=e)&&!d.already)return e={err:s.log("User already created!")},a.ing=!1,(w||f)(e),void y.leave();h.salt=String.random(64),t.work(g,h.salt,h.b)},b:function(e){h.proof=e,i?h.c(i):t.pair(h.c)},c:function(e){var c;h.pair=e||{},(c=a.root.user)&&(c._.sea=e,c.is={pub:e.pub,epub:e.epub,alias:p}),h.data={pub:e.pub},h.d()},d:function(){h.data.alias=p,h.e()},e:function(){h.data.epub=h.pair.epub,t.encrypt({priv:h.pair.priv,epriv:h.pair.epriv},h.proof,h.f,{raw:1})},f:function(e){h.data.auth=JSON.stringify({ek:e,s:h.salt}),h.g(h.data.auth)},g:function(e){h.data.auth=h.data.auth||e,l.get(e="~"+h.pair.pub).put(h.data).on(h.h);var c={};c[e]={"#":e},l.get("~@"+p).put(c).get(e).on(h.i)},h:function(e,c,v,m){m.off(),h.h.ok=1,h.i()},i:function(e,c,v,m){m&&(h.i.ok=1,m.off()),h.h.ok&&h.i.ok&&(a.ing=!1,w({ok:0,pub:h.pair.pub}),f===w&&(i?y.auth(i):y.auth(p,g)))}};return l.get("~@"+p).once(h.a),y},r.prototype.leave=function(n,o){var i=this.back(-1)._.user;if(i&&(delete i.is,delete i._.is,delete i._.sea),t.window)try{var p={};delete(p=window.sessionStorage).recall,delete p.pair}catch{}return this}})(u,"./create"),u(function(b){var r=u("./user"),t=r.SEA,s=r.Database,f=function(){};function n(o){if(typeof o!="string")return o;try{o=JSON.parse(o)}catch{o={}}return o}r.prototype.auth=function(...o){var i=typeof o[0]=="object"&&(o[0].pub||o[0].epub)?o[0]:typeof o[1]=="object"&&(o[1].pub||o[1].epub)?o[1]:null,p=i||typeof o[0]!="string"?null:o[0],g=p&&typeof o[1]=="string"?o[1]:null,y=o.filter(c=>typeof c=="function")[0]||null,a=o&&1<o.length&&typeof o[o.length-1]=="object"?o[o.length-1]:{},l=this,w=l._,d=l.back(-1);if(w.ing)return(y||f)({err:s.log("User is already being created or authenticated!"),wait:!0}),l;w.ing=!0;var h,e={a:function(c){return c?c.pub?e.name?e.f(c):void e.c((e.data=c).auth):(v=[],Object.keys(c).forEach(function(m){m!="_"&&v.push(c[m])}),e.b(v)):e.b();var v},b:function(c){if(c=(e.list=(e.list||[]).concat(c||[])).shift(),h===c)return e.name?e.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer."):e.err("Wrong user or password.");d.get(c).once(e.a)},c:function(c){return h===c?e.b():typeof c=="string"?e.c(n(c)):void t.work(g,(e.auth=c).s,e.d,e.enc)},d:function(c){t.decrypt(e.auth.ek,c,e.e,e.enc)},e:function(c){if(h===c)return e.enc?(e.enc=null,e.b()):(e.enc={encode:"utf8"},e.c(e.auth));e.half=c,e.f(e.data)},f:function(c){var v=e.half||{},m=e.data||{};e.g(e.lol={pub:c.pub||m.pub,epub:c.epub||m.epub,priv:c.priv||v.priv,epriv:c.epriv||v.epriv})},g:function(c){if(!c||!c.pub||!c.epub)return e.b();e.pair=c;var v=d._.user,m=v._,k=(m.tag,m.opt);(m=v._=d.get("~"+c.pub)._).opt=k,v.is={pub:c.pub,epub:c.epub,alias:p||c.pub},m.sea=e.pair,w.ing=!1;try{g&&h==(n(w.root.graph["~"+c.pub].auth)||"")[":"]&&(a.shuffle=a.change=g)}catch{}if(a.change?e.z():(y||f)(m),t.window&&(l.back("user")._.opt||a).remember)try{var _={};(_=window.sessionStorage).recall=!0,_.pair=JSON.stringify(c)}catch{}try{d._.tag.auth?d._.on("auth",m):setTimeout(function(){d._.on("auth",m)},1)}catch(C){s.log("Your 'auth' callback crashed with:",C)}},z:function(){e.salt=String.random(64),t.work(a.change,e.salt,e.y)},y:function(c){t.encrypt({priv:e.pair.priv,epriv:e.pair.epriv},c,e.x,{raw:1})},x:function(c){e.w(JSON.stringify({ek:c,s:e.salt}))},w:function(c){var v;a.shuffle&&(v={},Object.keys(e.data).forEach(function(m){v[m]=e.data[m]}),delete v._,v.auth=c,d.get("~"+e.pair.pub).put(v)),d.get("~"+e.pair.pub).get("auth").put(c,y||f)},err:function(c){c={err:s.log(c||"User cannot be found!")},w.ing=!1,(y||f)(c)},plugin:function(c){if(!(e.name=c))return e.err();var v=[c];c[0]!=="~"&&(v[1]="~"+c,v[2]="~@"+c),e.b(v)}};return i?e.g(i):p?d.get("~@"+p).once(e.a):g||t.name(e.plugin),l}})(u,"./auth"),u(function(b){var r=u("./user"),t=r.SEA;r.Database,r.prototype.recall=function(s,f){var n=this.back(-1);if((s=s||{})&&s.sessionStorage){if(t.window)try{var o;(o=window.sessionStorage)&&(n._.opt.remember=!0,(this.back("user")._.opt||s).remember=!0,(o.recall||o.pair)&&n.user().auth(JSON.parse(o.pair),f))}catch{}return this}return this}})(u,"./recall"),u(function(b){var r=u("./user"),t=r.SEA,s=r.Database;r.prototype.pair=function(){var f,n=this;try{f=new Proxy({DANGER:"\u2620"},{get:function(o,i,p){if(n.is&&(n._||"").sea)return n._.sea[i]}})}catch{}return f},r.prototype.delete=async function(f,n,o){this.back(-1);var i=this.back("user");try{i.auth(f,n,function(p){(i.is||{}).pub,i.map().once(function(){this.put(null)}),i.leave(),(o||function(){})({ok:0})})}catch(p){s.log("User.delete failed! Error:",p)}return this},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");var f=this.back(-1);try{return await authRecall(f),f._.user._}catch{throw f="No session!",s.log(f),{err:f}}},r.prototype.trust=async function(f){s.is(f)&&f.get("pub").get((n,o)=>{console.log(n,o)}),f.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(f,n){var o=this.back(-1).user(),i=o._.sea,p="";return this.back(function(g){g.is||(p+=g.get||"")}),async function(){var g=await o.get("grant").get(i.pub).get(p).then(),y=((g=await t.decrypt(g,i))||(g=t.random(16).toString(),l=await t.encrypt(g,i),o.get("grant").get(i.pub).get(p).put(l)),f.get("pub").then()),a=f.get("epub").then(),y=await y,a=await a,a=await t.secret(a,i),l=await t.encrypt(g,a);o.get("grant").get(y).get(p).put(l,n)}(),this},r.prototype.secret=function(f,n){var o=this,i=o.back(-1).user(),p=i.pair(),g="";return o.back(function(y){y.is||(g+=y.get||"")}),async function(){var y,a=await i.get("trust").get(p.pub).get(g).then();(a=await t.decrypt(a,p))||(a=t.random(16).toString(),y=await t.encrypt(a,p),i.get("trust").get(p.pub).get(g).put(y)),y=await t.encrypt(f,a),o.put(y,n)}(),o},b.exports=r})(u,"./share"),u(function(b){var r,t=u("./sea"),s=u("./settings"),f=window.Database;function n(a){var l,w,d=this,h=d.as,e=a.put,c=e["#"],v=e["."],m=e[":"],k=e[">"],_=a["#"];c&&v&&((a._||"").faith&&(h.opt||"").faith&&typeof a._=="function"?t.opt.pack(e,function(C){t.verify(C,!1,function(D){e["="]=t.opt.unpack(D),d.to.next(a)})}):(w=function(C){h.on("in",{"@":_,err:a.err=C})},(a._||"").DBG&&((a._||"").DBG.c=+new Date),0<=c.indexOf("<?")&&(l=parseFloat(c.split("<?")[1]||""))&&k<f.state()-1e3*l?(l=a._)&&l.stun&&l.stun--:c==="~@"?n.alias(d,a,m,v,c,h,w):c.slice(0,2)==="~@"?n.pubs(d,a,m,v,c,h,w):(l=t.opt.pub(c))?n.pub(d,a,m,v,c,h,w,h.user||"",l):0<=c.indexOf("#")?n.hash(d,a,m,v,c,h,w):n.any(d,a,m,v,c,h,w,h.user||"")))}f.on("opt",function(a){a.sea||(a.sea={own:{}},a.on("put",n,a)),this.to.next(a)}),n.hash=function(a,l,w,d,h,e,c){t.work(w,null,function(v){if(v&&v===d.split("#").slice(-1)[0])return a.to.next(l);c("Data hash not same as hash!")},{name:"SHA-256"})},n.alias=function(a,l,w,d,h,e,c){return w?"~@"+d===i(w)?a.to.next(l):void c("Alias not same!"):c("Data must exist!")},n.pubs=function(a,l,w,d,h,e,c){return w?d===i(w)?a.to.next(l):void c("Alias not same!"):c("Alias must exist!")},n.pub=async function(a,l,w,d,h,e,c,v,m){var k;let _=await s.parse(w)||{},C=(D,S,x)=>{if(D.m&&D.s&&S&&m)return t.verify(D,m,A=>{if(r!==A&&r!==A.e&&l.put[">"]&&l.put[">"]>parseFloat(A.e))return c("Certificate expired.");if(r!==A&&A.c&&A.w&&(A.c===S||-1<A.c.indexOf("*"))){let O=-1<h.indexOf("/")?h.replace(h.substring(0,h.indexOf("/")+1),""):"";var j;String.match=String.match||f.text.match;for(let B of Array.isArray(A.w)?A.w:typeof A.w=="object"||typeof A.w=="string"?[A.w]:[])if(String.match(O,B["#"])&&String.match(d,B["."])||!B["."]&&String.match(O,B["#"])||!B["#"]&&String.match(d,B["."])||String.match(O?O+"/"+d:d,B["#"]||B))return B["+"]&&-1<B["+"].indexOf("*")&&O&&O.indexOf(S)==-1&&d.indexOf(S)==-1?c(`Path "${O}" or key "${d}" must contain string "${S}".`):A.wb&&(typeof A.wb=="string"||(A.wb||{})["#"])?(j=a.as.root.$.back(-1),(j=typeof A.wb=="string"&&A.wb.slice(0,1)!=="~"?j.get("~"+m):j).get(A.wb).get(S).once(N=>!N||N!==1&&N!==!0?x(A):c(`Certificant ${S} blocked.`))):x(A);return c("Certificate verification fail.")}})};if(d==="pub"&&"~"+m===h)return w===m?a.to.next(l):c("Account not same!");(k=v.is)&&k.pub&&!_["*"]&&!_["+"]&&(m===k.pub||m!==k.pub&&((l._.msg||{}).opt||{}).cert)?t.opt.pack(l.put,D=>{t.sign(D,v._.sea,async function(S){if(r===S)return c(t.err||"Signature fail.");if(l.put[":"]={":":k=t.opt.unpack(S.m),"~":S.s},l.put["="]=k,m===v.is.pub)return(k=i(w))&&((e.sea.own[k]=e.sea.own[k]||{})[m]=1),void JSON.stringifyAsync(l.put[":"],function(x,A){return x?c(x||"Stringify error."):(l.put[":"]=A,a.to.next(l))});if(m!==v.is.pub&&((l._.msg||{}).opt||{}).cert){let x=await s.parse(l._.msg.opt.cert);x&&x.m&&x.s&&C(x,v.is.pub,A=>{l.put[":"]["+"]=x,l.put[":"]["*"]=v.is.pub,JSON.stringifyAsync(l.put[":"],function(j,O){return j?c(j||"Stringify error."):(l.put[":"]=O,a.to.next(l))})})}},{raw:1})}):t.opt.pack(l.put,D=>{t.verify(D,_["*"]||m,function(S){var x;return S=t.opt.unpack(S),r===S?c("Unverified data."):((x=i(S))&&m===t.opt.pub(x)&&((e.sea.own[x]=e.sea.own[x]||{})[m]=1),_["+"]&&_["+"].m&&_["+"].s&&_["*"]?void C(_["+"],_["*"],A=>(l.put["="]=S,a.to.next(l))):(l.put["="]=S,a.to.next(l)))})})},n.any=function(a,l,w,d,h,e,c,v){if(e.opt.secure)return c("Soul missing public key at '"+d+"'.");e.on("secure",function(m){if(this.off(),!e.opt.secure)return a.to.next(m);c("Data cannot be changed.")}).on.on("secure",l)};var o=f.valid,i=function(a,l){return typeof(l=o(a))=="string"&&l},p=((f.state||"").ify,/[^\w_-]/),g=(t.opt.pub=function(a){if((a=a&&(a=a.split("~"))&&a[1])&&(a=a.split(p).slice(0,2))&&a.length==2&&(a[0]||"")[0]!=="@")return a=a.slice(0,2).join(".")},t.opt.stringy=function(a){},t.opt.pack=function(a,l,w,d,h){var e,c;if(t.opt.check(a))return l(a);a&&a["#"]&&a["."]&&a[">"]&&(e=a[":"],c=1),JSON.parseAsync(c?e:a,function(v,m){var k=r!==(m||"")[":"]&&(m||"")["~"];l(k?{m:{"#":h||a["#"],".":w||a["."],":":(m||"")[":"],">":a[">"]||f.state.is(d,w)},s:k}:a)})},t.opt),y=(t.opt.unpack=function(a,l,w){if(r!==a){if(a&&r!==(d=a[":"]))return d;if(l=l||g.fall_key,!w&&g.fall_val&&((w={})[l]=g.fall_val),l&&w){if(a===w[l]||!t.opt.check(w[l]))return a;var d=w&&w._&&w._["#"]||g.fall_soul,w=f.state.is(w,l)||g.fall_state;return a&&a.length===4&&d===a[0]&&l===a[1]&&y(w)===y(a[3])?a[2]:w<t.opt.shuffle_attack?a:void 0}}},t.opt.shuffle_attack=15463296e5,Math.floor)})(u,"./index")})()});P();})();
