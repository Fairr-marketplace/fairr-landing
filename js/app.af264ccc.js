(function(){var e={6525:function(e,t,o){"use strict";var n=o(5130),r=o(6768),a=o(6450);function i(e,t){const o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(o)])),_:1})}var s=o(1241);const l={},u=(0,s.A)(l,[["render",i]]);var c=u,d=o(1387),f=o(4232),p=o.p+"img/logo.4ce81ee8.svg",h=o(3524),m=o(9562);const g=(0,r.Lk)("img",{src:p,alt:"Logo",key:"logo"},null,-1),v={key:0,class:"app-header__title"},k={class:"app-header__actions"};function b(e,t,o,n,a,i){const s=(0,r.g2)("view-toggle-button"),l=(0,r.g2)("open-basket-button"),u=(0,r.g2)("language-switcher"),c=(0,r.g2)("auth-toggle-button");return(0,r.uX)(),(0,r.Wv)(h.z,{class:"app-header"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:(0,f.C4)(["app-header__logo",{mini:!n.isHomePage}]),onClick:t[0]||(t[0]=(...e)=>n.openHomePage&&n.openHomePage(...e))},[(0,r.bF)(m.mM,null,{default:(0,r.k6)((()=>[g])),_:1})],2),n.pageTitle?((0,r.uX)(),(0,r.CE)("div",v,(0,f.v_)(n.pageTitle),1)):(0,r.Q3)("",!0),(0,r.Lk)("div",k,[(0,r.bF)(s,{class:"mr-1"}),(0,r.bF)(l,{class:"mr-1"}),(0,r.bF)(u),(0,r.bF)(c)])])),_:1})}o(4114);var y=o(5360),w=o(3462),F=o(2807),S=o(9669),A={__name:"OpenBasketButton",setup(e){const t=(0,d.lq)(),o=(0,y.e)(),n=(0,r.EW)((()=>o.basket.length)),a=(0,r.EW)((()=>"basket"!==t.name&&n.value>0)),i=(0,r.EW)((()=>0===n.value));return(e,t)=>a.value?((0,r.uX)(),(0,r.Wv)(F.D,{key:0,variant:"text",icon:"mdi-shopping",color:"primary",disabled:i.value,to:{name:"basket"}},{default:(0,r.k6)((()=>[i.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(w.Q,{key:0,content:n.value,color:"info"},{default:(0,r.k6)((()=>[(0,r.bF)(S.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-shopping")])),_:1})])),_:1},8,["content"]))])),_:1},8,["disabled"])):(0,r.Q3)("",!0)}};const _=A;var P=_;function T(e,t,o,n,a,i){return n.isButtonVisible?((0,r.uX)(),(0,r.Wv)(F.D,{key:0,variant:"text",icon:n.buttonIcon,color:"primary",onClick:n.toggleView},null,8,["icon","onClick"])):(0,r.Q3)("",!0)}var E=o(8353),C=o(6258),O={name:"ViewToggleButton",setup(){const e=(0,d.lq)(),t=(0,C.l)(),{smAndDown:o}=(0,E._F)(),n=(0,r.EW)((()=>{const t="home"===e.name;return o.value&&t})),a=(0,r.EW)((()=>"map"===t.currentHomeView)),i=(0,r.EW)((()=>a.value?"mdi-list-box":"mdi-map")),s=()=>{const e=a.value?"list":"map";t.setHomeView(e)};return{toggleView:s,buttonIcon:i,isButtonVisible:n}}};const L=(0,s.A)(O,[["render",T]]);var D=L,j=o(7009),x=o(6498),W=o(7294),I=o(8249);function N(e,t,o,n,a,i){return(0,r.uX)(),(0,r.Wv)(I.q,null,{activator:(0,r.k6)((({props:t})=>[(0,r.bF)(F.D,(0,f._B)((0,r.Ng)(t)),{default:(0,r.k6)((()=>[(0,r.bF)(S.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-translate")])),_:1}),(0,r.eW)(" "+(0,f.v_)(e.$i18n.locale),1)])),_:2},1040)])),default:(0,r.k6)((()=>[(0,r.bF)(j.x8,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.languages,((e,t)=>((0,r.uX)(),(0,r.Wv)(x.g,{key:t,onClick:t=>i.changeLanguage(e)},{default:(0,r.k6)((()=>[(0,r.bF)(W.U,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,f.v_)(e.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}var B={data(){return{currentLanguage:"English",languages:[{code:"en",label:"English"},{code:"pl",label:"Polski"}]}},methods:{changeLanguage({code:e}){localStorage.setItem("language",e),this.$i18n.locale=e}}};const V=(0,s.A)(B,[["render",N]]);var U=V;function H(e,t,o,n,a,i){const s=(0,r.g2)("auth-dialog");return(0,r.uX)(),(0,r.CE)(r.FK,null,[n.isUserLoggedIn?((0,r.uX)(),(0,r.Wv)(I.q,{key:1},{activator:(0,r.k6)((({props:e})=>[(0,r.bF)(F.D,(0,r.v6)(e,{variant:"text",color:"primary",icon:"mdi-account"}),null,16)])),default:(0,r.k6)((()=>[(0,r.bF)(j.x8,null,{default:(0,r.k6)((()=>[(0,r.bF)(x.g,{to:"/profile"},{default:(0,r.k6)((()=>[(0,r.bF)(W.U,null,{default:(0,r.k6)((()=>[(0,r.eW)("Profile")])),_:1})])),_:1}),(0,r.bF)(x.g,{to:"/orders"},{default:(0,r.k6)((()=>[(0,r.bF)(W.U,null,{default:(0,r.k6)((()=>[(0,r.eW)("My Orders")])),_:1})])),_:1}),(0,r.bF)(x.g,{onClick:n.logout},{default:(0,r.k6)((()=>[(0,r.bF)(W.U,null,{default:(0,r.k6)((()=>[(0,r.eW)("Logout")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})):((0,r.uX)(),(0,r.Wv)(F.D,{key:0,variant:"text",color:"primary",onClick:n.showDialog},{default:(0,r.k6)((()=>[(0,r.eW)(" Login ")])),_:1},8,["onClick"])),(0,r.bF)(s,{modelValue:n.isDialogOpen,"onUpdate:modelValue":t[0]||(t[0]=e=>n.isDialogOpen=e)},null,8,["modelValue"])],64)}var q=o(144),X=o(7882),z=o(9004),R={name:"AuthToggleButton",components:{AuthDialog:z.A},setup(){const e=(0,d.lq)(),t=(0,d.rd)(),o=(0,q.KR)(!1),n=(0,X.k)(),a=(0,r.EW)((()=>n.isUserLoggedIn)),i=()=>{n.logout(),"/"!==e.path&&t.push("/")},s=()=>{o.value=!0};return{isUserLoggedIn:a,isDialogOpen:o,showDialog:s,logout:i}}};const Z=(0,s.A)(R,[["render",H]]);var $=Z,M={name:"AppHeader",components:{OpenBasketButton:P,ViewToggleButton:D,LanguageSwitcher:U,AuthToggleButton:$},props:{title:String},setup(){const e=(0,d.lq)(),t=(0,d.rd)(),o=(0,r.EW)((()=>"/"===e.path)),n=(0,r.EW)((()=>o.value?null:e.meta?.title)),a=()=>{o.value||t.push("/")};return{isHomePage:o,pageTitle:n,openHomePage:a}}};const G=(0,s.A)(M,[["render",b]]);var Q=G,K=o(2598),J=o(8477),Y={__name:"AppLayout",setup(e){return(0,r.sV)((()=>{(0,X.k)().checkUserToken()})),(e,t)=>{const o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(K.L,{class:"rounded rounded-md"},{default:(0,r.k6)((()=>[(0,r.bF)(Q),(0,r.bF)(J.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(o)])),_:1})])),_:1})}}};const ee=Y;var te=ee;const oe=[{path:"/",component:te,children:[{path:"",name:"home",component:()=>Promise.all([o.e(948),o.e(191),o.e(664),o.e(431)]).then(o.bind(o,2369))},{path:"basket",name:"basket",meta:{title:"Order"},component:()=>Promise.all([o.e(948),o.e(191),o.e(689),o.e(174)]).then(o.bind(o,7819))},{path:"orders",name:"orders",meta:{title:"Orders"},component:()=>Promise.all([o.e(948),o.e(191),o.e(689),o.e(812)]).then(o.bind(o,4686))},{path:"orders/:id",name:"order-details",meta:{title:"Order"},component:()=>o.e(630).then(o.bind(o,3630))},{path:"profile",name:"profile",meta:{title:"Profile"},component:()=>o.e(204).then(o.bind(o,5204))},{path:"shops/:id",name:"shop",props:!0,meta:{title:"Store Details"},component:()=>Promise.all([o.e(191),o.e(664),o.e(200)]).then(o.bind(o,1520))},{path:"products/:id",name:"product",props:!0,meta:{title:"Product Details"},component:()=>o.e(567).then(o.bind(o,1567))},{path:"/:catchAll(.*)",name:"not-found",meta:{title:"Not Found"},component:()=>o.e(412).then(o.bind(o,8412))}]}],ne=(0,d.aE)({history:(0,d.LA)(),routes:oe});var re=ne,ae=o(5234);const ie=(0,ae.Ey)();var se=ie,le=(o(5524),o(5790));const ue=(0,le.$N)({icons:{defaultSet:"mdi"},theme:{themes:{light:{dark:!1,colors:{primary:"#228B22",secondary:"#8B4513",inactive:"#F5F5F5"}}}}});var ce=ue,de=o(5384);const fe=e=>{const t=localStorage.getItem("language");let o=navigator.language||"";o.includes("-")&&(o=o.split("-").shift());let n=t||o;return e.includes(n)?n:"pl"},pe=()=>{const e=o(857),t={};return e.keys().forEach((o=>{const n=o.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){const r=n[1];t[r]=e(o)}})),{locale:fe(Object.keys(t)),fallbackLocale:"en",legacy:!1,messages:t}},he=(0,de.hU)(pe());var me=he,ge=o(5847);(0,n.Ef)(c).use(se).use(re).use(ce).use(me).use(ge.A).mount("#app")},159:function(e,t,o){"use strict";var n=o(4373);const r="https://ec2-35-159-181-100.eu-central-1.compute.amazonaws.com/",a=n.A.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}});a.interceptors.request.use((e=>{const t=["/orders","/customers","/auth/refresh-token"],o=t.some((t=>e.url.startsWith(t)));if(o){const t=localStorage.getItem("authToken");t&&(e.headers.Authorization=`Bearer ${t}`)}return e}),(e=>Promise.reject(e))),a.interceptors.response.use((e=>e),(e=>(e.response&&e.response.status,Promise.reject(e)))),t.A=a},6258:function(e,t,o){"use strict";o.d(t,{l:function(){return r}});var n=o(5234);const r=(0,n.nY)("layout",{state:()=>({homeView:null}),getters:{currentHomeView:e=>e.homeView||"map"},actions:{setHomeView(e){this.homeView=e}}})},5360:function(e,t,o){"use strict";o.d(t,{e:function(){return s}});o(4114);var n=o(5234),r=o(3574),a=o(159),i=o(9634);const s=(0,n.nY)("order",{state:()=>({orders:[],basket:(0,i.g)("fairr-basket")||[],loading:!1}),actions:{addToBasket(e){this.basket.push({...e,quantity:1}),(0,i.G)("fairr-basket",this.basket)},removeFromBasket(e){this.basket=this.basket.filter((({id:t})=>t!==e)),(0,i.G)("fairr-basket",this.basket)},clearBasket(){this.basket=[],(0,i.G)("fairr-basket",this.basket)},updateProductQuantity(e,t){const o=this.basket.find((({id:t})=>t===e));o&&(o.quantity=t,(0,i.G)("fairr-basket",this.basket))},async submitOrder({items:e,description:t}){if(!this.loading)try{this.loading=!0;const o=e.map((({id:e,quantity:t})=>({productOfferId:e,quantity:t+""}))),n=(await a.A.post("/orders",{description:t,items:o})).data;return this.clearBasket(),n}catch(o){console.error("Failed to submit order",o)}finally{this.loading=!1}},async fetchOrders(){try{this.loading=!0;const e=(await a.A.get("/orders/for-customer")).data;this.orders=l(e),console.log(this.orders)}catch(e){console.error("Failed to fetch orders",e)}finally{this.loading=!1}}}}),l=e=>e.reduce(((e,t)=>{const{orderDate:o,id:n,storeOrders:a}=t,i=a.map((e=>({...e,orderDate:o,orderId:n,uuid:(0,r.A)()})));return e.push(...i),e}),[])},9634:function(e,t,o){"use strict";o.d(t,{G:function(){return n},g:function(){return r}});const n=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},r=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null}},7882:function(e,t,o){"use strict";o.d(t,{k:function(){return i}});o(4114);var n=o(5234),r=o(159),a=o(9634);const i=(0,n.nY)("user",{state:()=>({favoriteShops:(0,a.g)("user-favoriteShops")||[],isLoading:!1,profile:null}),getters:{isFavoriteShop:e=>t=>e.favoriteShops.includes(t),isUserLoggedIn:e=>!!e.profile},actions:{toggleFavoriteShop(e){this.isFavoriteShop(e)?this.favoriteShops=this.favoriteShops.filter((t=>t!==e)):this.favoriteShops.push(e),(0,a.G)("user-favoriteShops",this.favoriteShops)},async login(e){const{email:t,password:o}=e;this.isLoading=!0;try{const e=(await r.A.post("/auth/login",{email:t,password:o})).data,{token:n,expiresAt:a}=e;n&&(localStorage.setItem("authToken",n),localStorage.setItem("authTokenExpires",a),this.fetchProfile())}catch(n){throw console.error("Login failed",n),n}finally{this.isLoading=!1}},async register(e){this.isLoading=!0;try{const t=await r.A.post("/auth/signup",e);console.log("Signup successful",t.data)}catch(t){throw console.error("Signup failed",t),t}finally{this.isLoading=!1}},async refreshToken(){try{const e=await r.A.get("/auth/refresh-token"),{token:t,expiresAt:o}=e.data;t&&(localStorage.setItem("authToken",t),localStorage.setItem("authTokenExpires",o))}catch(e){throw console.error("Refresh token failed",e),e}},logout(){this.profile=null,localStorage.removeItem("authToken"),localStorage.removeItem("authTokenExpires")},async fetchProfile(){this.isLoading=!0;try{const e=(await r.A.get("/customers/for-current-user")).data;this.profile=u(e)}catch(e){throw console.error("Fetch profile failed",e),e}finally{this.isLoading=!1}},async updateProfile(e){this.isLoading=!0;try{const t=await r.A.post("/customers/for-current-user",e);console.log("Profile updated",t.data)}catch(t){throw console.error("Fetch profile failed",t),t}finally{this.isLoading=!1}},async checkUserToken(){const e=s();e&&(l(e)&&(console.log("token expired"),localStorage.removeItem("authToken"),localStorage.removeItem("authTokenExpires")),this.setTokenRefreshTimeout(e),await this.fetchProfile())},setTokenRefreshTimeout(e){const{timeUntilRefresh:t}=e;t<=0?this.refreshToken():setTimeout((()=>{this.refreshToken()}),t)}}}),s=()=>{const e=36e5,t=localStorage.getItem("authToken"),o=localStorage.getItem("authTokenExpires");if(!t||!o)return null;const n=new Date(+o).getTime(),r=Date.now(),a=n-r,i=a-e;return{token:t,expirationTime:n,timeUntilRefresh:i,timeUntilExpiration:a}},l=({timeUntilExpiration:e})=>e<=0,u=e=>({email:e.userEmail,name:e.userFullName,details:e.customer})},9004:function(e,t,o){"use strict";o.d(t,{A:function(){return u}});var n=o(6768),r=o(1772);function a(e,t,o,a,i,s){return(0,n.uX)(),(0,n.Wv)(r.p,{modelValue:s.isDialogOpen,"onUpdate:modelValue":t[0]||(t[0]=e=>s.isDialogOpen=e),"max-width":"420"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.Wv)((0,n.$y)(s.activeFormComponent),{context:o.context,onClose:s.closeDialog,onAuthCompleted:s.authCompleted,onSwitchForm:s.switchForm,class:"auth-form"},null,40,["context","onClose","onAuthCompleted","onSwitchForm"]))])),_:1},8,["modelValue"])}var i={props:{modelValue:Boolean,context:String},data(){return{activeForm:"login"}},computed:{isDialogOpen:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},activeFormComponent(){return this.isLoginActive?(0,n.$V)((()=>Promise.all([o.e(948),o.e(545)]).then(o.bind(o,2545)))):(0,n.$V)((()=>Promise.all([o.e(948),o.e(810)]).then(o.bind(o,3810))))},isLoginActive(){return"login"===this.activeForm}},methods:{closeDialog(){this.isDialogOpen=!1},switchForm(){this.activeForm=this.isLoginActive?"register":"login"},authCompleted(){this.isDialogOpen=!1,this.$emit("authCompleted")}}},s=o(1241);const l=(0,s.A)(i,[["render",a]]);var u=l},857:function(e,t,o){var n={"./en.json":1166,"./pl.json":6277};function r(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=857},1166:function(e){"use strict";e.exports=JSON.parse('{"common":{"save":"Save","send":"Send","done":"Done","search":"Search","close":"Close","edit":"Edit","reset":"Reset","cancel":"Cancel"},"form":{"name":"Name","email":"Email","password":"Password","confirmPassword":"Confirm Password","phone":"Phone Number","address":"Address","message":"Message","login":"Login","fullName":"Full Name","register":"Register","signIn":"Sign In","signUp":"Sign Up","dontHaveAccount":"Don\'t have an account?","alreadyHaveAccount":"Already have an account?"},"products":{"products":"Products","product":"Product","quantity":"Quantity","price":"Price","totalPrice":"Total Price","total":"Total","addToBasket":"Add to Basket","added":"Added","viewProducts":"View Products"},"stores":{"stores":"Stores","addToFavorites":"Add to Favorites"},"posts":{"posts":"Posts"}}')},6277:function(e){"use strict";e.exports=JSON.parse('{"common":{"save":"Zapisz","send":"Wyślij","done":"Gotowe","search":"Szukaj","close":"Zamknij","edit":"Edytuj","reset":"Zresetuj","cancel":"Anuluj"},"form":{"name":"Imię","email":"Email","password":"Hasło","confirmPassword":"Potwierdź Hasło","phone":"Numer Telefonu","address":"Adres","message":"Wiadomość","login":"Zaloguj się","fullName":"Imię i Nazwisko","register":"Zarejestruj się","signIn":"Zaloguj","signUp":"Zarejestruj","dontHaveAccount":"Nie masz konta?","alreadyHaveAccount":"Masz już konto?"},"products":{"products":"Produkty","product":"Produkt","quantity":"Ilość","price":"Cena","totalPrice":"Łączna Cena","total":"Razem","addToBasket":"Do Koszyka","added":"Dodano","viewProducts":"Zobacz Produkty"},"stores":{"stores":"Sklepy","addToFavorites":"Dodaj do Ulubionych"},"posts":{"posts":"Posty"}}')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{174:"ff2c054a",191:"066ca225",200:"04976434",204:"eda81a33",412:"f46e23bf",431:"01aa263b",545:"123c3df5",567:"64d916ca",630:"cea76990",664:"c709cde1",689:"3fb1dc17",810:"690b27b8",812:"938a5720",948:"1d58919d"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{174:"32785233",191:"e0cabaf0",200:"70b033ed",204:"0b0d5c0f",412:"89cd1881",431:"6e68798f",545:"18aff0b8",567:"134bc900",630:"0b0d5c0f",810:"18aff0b8",812:"0b001b75",948:"ad4a5bad"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fairr-web-client:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var f=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",o.nc&&(i.nonce=o.nc);var s=function(o){if(i.onerror=i.onload=null,"load"===o.type)r();else{var n=o&&o.type,s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=s,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,null,r,a)}))},r={524:0};o.f.miniCss=function(e,t){var o={174:1,191:1,200:1,204:1,412:1,431:1,545:1,567:1,630:1,810:1,812:1,948:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var c=l(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkfairr_web_client"]=self["webpackChunkfairr_web_client"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6525)}));n=o.O(n)})();
//# sourceMappingURL=app.af264ccc.js.map