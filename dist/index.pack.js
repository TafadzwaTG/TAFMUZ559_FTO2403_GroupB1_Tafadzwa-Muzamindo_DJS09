(()=>{"use strict";var e,t;!function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(e||(e={})),function(e){e.GOLD_USER="GOLD_USER",e.SILVER_USER="SILVER_USER",e.BRONZE_USER="BRONZE_USER"}(t||(t={}));const n=document.querySelector("#reviews"),o=document.querySelector("#returning-user"),i=document.querySelector("#user");function a(e,t,n){if(e){const e=document.createElement("div");e.innerHTML=n.toString()+"/night",t.appendChild(e)}}const r=document.querySelector(".properties"),s=document.querySelector(".reviews"),c=document.querySelector(".container"),l=document.querySelector("button"),m=document.querySelector(".footer"),d=document.querySelector(".main-image");if(!(r&&s&&c&&l&&m&&d))throw new Error("One or more required elements not found in the DOM.");const u=[{name:"Sheila",stars:5,loyaltyUser:t.GOLD_USER,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:t.BRONZE_USER,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:t.SILVER_USER,date:"27-03-2021"}],y={firstName:"McNorman",lastName:"Muzamindo",permissions:e.ADMIN,isReturning:!0,age:35,stayedAt:["florida-home","oman-flat","tokyo-bungalow"]},g=[{image:"images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"src/assets/images/poland-property.jpg",title:"Polish Cottage",price:30,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"src/assets/images/london-property.jpg",title:"London Flat",price:25,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0},{image:"src/assets/images/malaysian-hotel.jpeg",title:"Malia Hotel",price:35,location:{firstLine:"Room 4",city:"Malia",code:45334,country:"Malaysia"},contact:[60349822083,"lee34@gmail.com"],isAvailable:!1}];var p;!function(e,o){const i=t.GOLD_USER?"⭐":"";n.innerHTML=e.toString()+" review"+function(e){return e>1||0==e?"s":""}(e)+" | last reviewed by "+o+" "+i}(u.length,u[0].name,u[0].loyaltyUser),p=y.firstName,y.isReturning&&(o.innerHTML="back"),i.innerHTML=p,console.log(g.length);for(let e=0;e<g.length;e++){const t=document.createElement("div");t.classList.add("card"),t.innerHTML=g[e].title;const n=document.createElement("img");n.setAttribute("src",g[e].image),t.appendChild(n),a(y.permissions,t,g[e].price),r.appendChild(t)}let S=0;l.addEventListener("click",(()=>function(e){if(!S){S++;const t=function(e){return e.sort(((e,t)=>t.stars-e.stars)).slice(0,2)}(e);for(let e=0;e<t.length;e++){const n=document.createElement("div");n.classList.add("review-card"),n.innerHTML=t[e].stars+" stars from "+t[e].name,s.appendChild(n)}c.removeChild(l)}}(u)));let E=["Cape Town","13:23",15];m.innerHTML=E[0]+" "+E[1]+" "+E[2]+"°";let L=new class{constructor(e,t,n){this.src=e,this.title=t,this.reviews=n}}("src/assets/images/italian-property.jpg","Italian House",[{name:"Olive",stars:5,loyaltyUser:t.GOLD_USER,date:"12-04-2021"}]);const f=document.createElement("img");f.setAttribute("src",L.src),d.appendChild(f)})();
//# sourceMappingURL=index.pack.js.map