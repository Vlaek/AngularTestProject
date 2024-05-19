import{A as h,B as u,D as L,E as z,F as v,G as y,H as r,I as m,J as p,M as F,N,O as b,P as s,Q as k,R as a,Z as A,_ as B,d as P,ea as D,f as w,fa as R,h as $,ha as V,i as f,ia as H,ja as U,k as j,m as x,ma as C,n as g,oa as q,q as E,r as T,ra as S,v as M,w as c,x as _}from"./chunk-XUTEY3TM.js";var d=(()=>{let t=class t{constructor(n){this._httpClient=n}getMusicStoreList(){return this._httpClient.get("https://64c9ec74b2980cec85c28b5f.mockapi.io/music")}getMusicStoreById(n){return this._httpClient.get(`https://64c9ec74b2980cec85c28b5f.mockapi.io/music?id=${n}`).pipe(P(l=>l[0]),w())}};t.\u0275fac=function(i){return new(i||t)(j(H))},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Y=(e,t)=>t.id;function Z(e,t){if(e&1){let o=F();r(0,"div",4),N("click",function(){let i=E(o).$implicit,l=b(2);return T(l.redirectTo(i.id))}),p(1,"img",5),r(2,"div",6)(3,"p",7),s(4),m(),r(5,"p",8),s(6),m(),r(7,"p",8),s(8),m()()()}if(e&2){let o=t.$implicit;c(),u("src","assets/img/"+o.img,M)("alt",o.title),c(3),a(" ",o.title," "),c(2),a(" ",o.author," "),c(2),a(" $",o.price," ")}}function tt(e,t){e&1&&v(0,Z,9,5,"div",3,Y),e&2&&y(t)}var J=(()=>{let t=class t{constructor(n,i,l){this.router=n,this.route=i,this.myMusicListService=l}redirectTo(n){this.router.navigate([`${n}`],{relativeTo:this.route})}ngOnInit(){this.myMusicStore$=this.myMusicListService.getMusicStoreList()}};t.\u0275fac=function(i){return new(i||t)(_(q),_(C),_(d))},t.\u0275cmp=x({type:t,selectors:[["my-music-list"]],decls:6,vars:3,consts:[[1,"music-list__title"],[1,"music-list__separator"],[1,"music-list"],[1,"music-list__album"],[1,"music-list__album",3,"click"],[1,"music-list__album__img",3,"src","alt"],[1,"music-list__album__info"],[1,"music-list__album__text"],[1,"music-list__album__text","music-list__album__text_bold"]],template:function(i,l){if(i&1&&(r(0,"h2",0),s(1,"Music Store Albums"),m(),p(2,"div",1),r(3,"div",2),h(4,tt,2,0),A(5,"async"),m()),i&2){let O;c(4),L(4,(O=B(5,1,l.myMusicStore$))?4:-1,O)}},dependencies:[R],styles:[".music-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,30%);grid-gap:40px 5%;width:100%}.music-list__title[_ngcontent-%COMP%]{font-weight:700;text-align:center}.music-list__separator[_ngcontent-%COMP%]{height:2px;background-color:#eee;width:100%;margin:50px 0}.music-list__album[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-bottom:40px;border:1px solid #eee;cursor:pointer;transition:all ease-in-out .3s;background-color:#eee;color:#000}.music-list__album[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.music-list__album__img[_ngcontent-%COMP%]{width:100%;object-fit:contain;border-bottom:1px solid #eee}.music-list__album__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px 0;gap:20px}.music-list__album__text[_ngcontent-%COMP%]{font-size:20px;text-align:center}.music-list__album__text_bold[_ngcontent-%COMP%]{font-weight:700;font-size:14px}"]});let e=t;return e})();function et(e,t){if(e&1&&(r(0,"div",13)(1,"div",14)(2,"p",15),s(3),m(),r(4,"p",16),s(5),m()(),r(6,"p",15),s(7),m()()),e&2){let o=t.$implicit;c(3),a(" ",o.id," "),c(2),k(o.name),c(2),a(" ",o.duration," ")}}function it(e,t){if(e&1&&(r(0,"div",1)(1,"h3",2),s(2),m(),p(3,"div",3),r(4,"div",4)(5,"div",5),p(6,"img",6),m(),r(7,"div",7)(8,"p",8),s(9),m(),r(10,"p",9),s(11),m()()(),r(12,"div",10)(13,"p",11),s(14),m(),p(15,"div",3),r(16,"div",12),v(17,et,8,3,"div",13,z),m()()()),e&2){let o=b();c(2),k(o.myMusicItem$.author),c(4),u("src","assets/img/"+o.myMusicItem$.img,M)("alt",o.myMusicItem$.title),c(3),a(" ",o.myMusicItem$.title," "),c(2),a(" ",o.myMusicItem$.genre," "),c(3),a(" ",o.myMusicItem$.desc," "),c(3),y(o.myMusicItem$.tracklist)}}var K=(()=>{let t=class t{constructor(n,i){this.route=n,this.myMusicListService=i}ngOnInit(){this.route.params.subscribe(n=>{this.myMusicListService.getMusicStoreById(n.id).subscribe(i=>{this.myMusicItem$=i})})}};t.\u0275fac=function(i){return new(i||t)(_(C),_(d))},t.\u0275cmp=x({type:t,selectors:[["my-music-item"]],decls:1,vars:1,consts:[["class","item",4,"ngIf"],[1,"item"],[1,"item__title"],[1,"item__separator"],[1,"item__container"],[1,"item__block","item__block_left"],["draggable","false",1,"item__block__img",3,"src","alt"],[1,"item__block","item__block_right"],[1,"item__block__text","item__block__text_bold"],[1,"item__block__text","item__block__text_small"],[1,"item__info"],[1,"item__info__text"],[1,"tracklist"],[1,"tracklist__item"],[1,"tracklist__item__block"],[1,"tracklist__item__text","tracklist__item__text_fix"],[1,"tracklist__item__text"]],template:function(i,l){i&1&&h(0,it,19,6,"div",0),i&2&&u("ngIf",l.myMusicItem$)},dependencies:[D],styles:[".item__separator[_ngcontent-%COMP%]{height:2px;background-color:#eee;width:100%;margin:50px 0}.item__title[_ngcontent-%COMP%]{font-size:32px;font-weight:700;text-align:center;text-transform:uppercase}.item__container[_ngcontent-%COMP%]{display:flex}.item__block_left[_ngcontent-%COMP%]{width:400px;height:400px;margin-right:50px}.item__block__img[_ngcontent-%COMP%]{width:100%}.item__block__text[_ngcontent-%COMP%]{margin-bottom:20px}.item__block__text_bold[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.item__block__text_small[_ngcontent-%COMP%]{font-size:18px;color:#eeeeee8e}.item__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:20px;text-align:justify}.item__info__text[_ngcontent-%COMP%]{font-size:20px;line-height:1.5}.tracklist[_ngcontent-%COMP%]{margin:0 auto;width:80%}.tracklist__item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:15px;transition:all .3s ease;cursor:pointer}.tracklist__item[_ngcontent-%COMP%]:hover{transform:scale(1.005);color:#28d250}.tracklist__item__block[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.tracklist__item__text[_ngcontent-%COMP%]{font-size:18px}.tracklist__item__text_fix[_ngcontent-%COMP%]{min-width:30px}"]});let e=t;return e})();var nt=[{path:"",component:J},{path:":id",component:K}],Q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[S.forChild(nt),S]});let e=t;return e})();var vt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({providers:[d],imports:[V,U,Q]});let e=t;return e})();export{vt as MyMusicListModule};