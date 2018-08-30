!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";var n=i(a(1)),r=i(a(3)),s=i(a(4));function i(t){return t&&t.__esModule?t:{default:t}}var o=d3.select("body"),l=0;o.classed("is-mobile",r.default.any()),window.addEventListener("resize",(0,n.default)(function(){var t=o.node().offsetWidth;l!==t&&(l=t,s.default.resize())},150)),function(){if(o.select("header").classed("is-sticky")){var t=o.select(".header__menu"),e=o.select(".header__toggle");e.on("click",function(){var a=t.classed("is-visible");t.classed("is-visible",!a),e.classed("is-visible",!a)})}}(),s.default.init()},function(t,e,a){(function(e){var a=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=d||c||Function("return this")(),p=Object.prototype.toString,f=Math.max,h=Math.min,y=function(){return u.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==n}(t))return a;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var d=i.test(t);return d||o.test(t)?l(t.slice(2),d?2:8):s.test(t)?a:+t}t.exports=function(t,e,a){var n,r,s,i,o,l,d=0,c=!1,u=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var a=n,s=r;return n=r=void 0,d=e,i=t.apply(s,a)}function b(t){var a=t-l;return void 0===l||a>=e||a<0||u&&t-d>=s}function x(){var t=y();if(b(t))return w(t);o=setTimeout(x,function(t){var a=e-(t-l);return u?h(a,s-(t-d)):a}(t))}function w(t){return o=void 0,p&&n?v(t):(n=r=void 0,i)}function k(){var t=y(),a=b(t);if(n=arguments,r=this,l=t,a){if(void 0===o)return function(t){return d=t,o=setTimeout(x,e),c?v(t):i}(l);if(u)return o=setTimeout(x,e),v(l)}return void 0===o&&(o=setTimeout(x,e)),i}return e=g(e)||0,m(a)&&(c=!!a.leading,s=(u="maxWait"in a)?f(g(a.maxWait)||0,e):s,p="trailing"in a?!!a.trailing:p),k.cancel=function(){void 0!==o&&clearTimeout(o),d=0,n=l=r=o=void 0},k.flush=function(){return void 0===o?i:w(y())},k}}).call(this,a(2))},function(t,e){var a;a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(a=window)}t.exports=a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.android()||n.blackberry()||n.ios()||n.opera()||n.windows()}};e.default=n},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a(5));function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default={init:function(){var t=document.createElement("audio");t.src="https://p.scdn.co/mp3-preview/208f2aedf7f913e69194e921eb354502c3f63dee",d3.selectAll(".audio-play").on("click",function(e,a){var n=t.src,r="https://p.scdn.co/mp3-preview/8963ef789499f72e9e10716bb431429877ff0ab7";1==a&&(r="https://p.scdn.co/mp3-preview/7add10ee576e9017030c09aa6d8bcaf682714859"),t.paused||n!=r?(t.src=r,"none"!=r&&(t.play(),d3.select(this).classed("playing",!0))):(t.pause(),d3.selectAll(".audio-play").classed("playing",!1))});var e=!0;Math.random()<.5&&(e=!1,d3.select(".read-more-button").remove()),n.default.send({category:"read a/b "+(e?"yes":"no"),action:"init",once:!0}),d3.select(".post-read-more").classed("post-hidden",e),d3.select(".patreon--yes").classed("is-visible",e),d3.select(".patreon--no").classed("is-visible",!e),d3.select(".read-more-button").select("button").on("click",function(t){n.default.send({category:"read more",action:"click",once:!0}),d3.select(".post-read-more").classed("post-hidden",!1),d3.select(this.parentNode).remove()});var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),s=(Math.max(document.documentElement.clientHeight,window.innerHeight||0),!1);a<450&&(s=!0);var i,o=document.getElementById("lucid-dreams"),l=d3.select(".audio-controls"),d=d3.scaleThreshold().domain([0,3,5.8,8.45,12.34,15,18,20.6,100]).range([0,1,2,3,4,5,6,7,8,9]),c=d3.select(".verses").selectAll("p");l.on("click",function(t){o.paused?(o.play(),l.select(".volume-on").style("display","none"),l.select(".volume-off").style("display","block"),l.select(".play-text").text("Pause"),d3.select(".verses").classed("playing",!0),i=d3.timer(function(t){var e=d(o.currentTime)-1;c.style("color",function(t,a){var n=a;return-1==e?null:(e==n?(d3.select(this).classed("show-face",!0),7==e?d3.select(this).select(".verse-face").style("background-position-x","-243px"):d3.select(this).select(".verse-face").style("background-position-x",30.375*(8-e)-243+"px")):d3.select(this).classed("show-face",!1),e>=n?null:"#dfdfdf")}),o.currentTime>22.8&&(i.stop(),d3.select(".verses").classed("playing",!1),l.select(".volume-on").style("display","block"),l.select(".volume-off").style("display","none"),l.select(".play-text").text("Play"),c.style("color",null))},150)):(o.pause(),l.select(".volume-on").style("display","block"),l.select(".volume-off").style("display","none"),l.select(".play-text").text("Play"),i.stop(),d3.select(".verses").classed("playing",!1),c.style("color",null))});var u=d3.select(".right-col"),p=["I don&rsquo;t really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said, Baby, I am not afraid to die","Push me to the edge","All my friends are dead"],f=["Are you alright?","I'm alright, I'm quite alright","And my money's right","8… (yeah)","Countin' them bands","All way to the top 'til they be fallin' over","(Yeah, yeah, yeah)","Countin' them bands","On my way to the top 'til we fallin' over","","I don't really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said, 'Baby, I am not afraid to die'","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","","Phantom that's all red, inside all white","Like somethin' you ride a sled down, I just want that head","My Brittany got mad, I'm barely her man now","Everybody got the same swag now","Watch the way that I tear it down","Stackin' my bands all the way to the top","All the way 'til my bands fallin' over","Every time that you leave your spot","Your girlfriend call me like, 'Come on over!'","I like the way that she treat me","Gon' leave you, won't leave me, I call it that Casanova","She say I'm insane, yeah","I might blow my brain out (hey)","Xanny, help the pain, yeah","Please, Xanny, make it go away","I'm committed, not addicted, but it keep control of me","All the pain, now I can't feel it","I swear that it's slowin' me, yeah","","I don't really care if you cry","On the real, you shoulda never lied","Saw the way she looked me in my eyes","She said: 'I am not afraid to die.'","All my friends are dead","Push me to the edge (yeah)","All my friends are dead, yeah, ooh","Push me to the edge","All my friends are dead, yeah","All my friends are dead, yeah","","That is not your swag, I swear you fake hard","Now these niggas wanna take my cadence","Rain on 'em, thunderstorm, rain on 'em (ooh, yeah)","Medicine, lil' nigga, take some (yeh, yeh)","Fast car, NASCAR, race on 'em","In the club, ain't got no ones, then we would beg them","Clothes from overseas, got the racks and they all C-Notes","You is not a G though","Lookin' at you stackin' all your money, it all green though","I was countin' that and these all twenties, that's a G-roll","","She say: 'You're the worst, you're the worst.'","I cannot die because this my universe","","I don't really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said: 'Baby, I am not afraid to die.'","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge"];u.append("p").attr("class","track-name").append("span").text("Lil Uzi Vert - XO Tour Llif3");var h=["Baby,","care","cry","real","lied","looked","eyes","baby","afraid","die","Push","edge","friends","dead"],y=["cry","die","afraid","die","dead"];u.append("div").attr("class","track-content").selectAll("p").data(p).enter().append("p").attr("class","track-line").selectAll("span").data(function(t){return t.split(" ")}).enter().append("span").attr("class","track-word").classed("big-word",function(t){return h.indexOf(t)>-1}).classed("sad-word",function(t){return y.indexOf(t)>-1}).html(function(t){return t});var m=u.append("div").attr("class","results");m.append("p").attr("class","percent").html(function(){return"<span>33%</span> emo"}),m.append("p").attr("class","break-down").html(function(){return"<span class='sad-breakdown'>4 emo words</span> of <span class='all-breakdown'>12 total words</span>"});var g=!0,v=u.append("button").attr("class","see-more").on("click",function(t){g?(g=!1,d3.select(".full-song").style("display","block"),b.text("Hide Song")):(d3.select(".full-song").style("display",null),b.text("Full Song"),g=!0)});v.append("div").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');var b=v.append("p").text("Full Song"),x=new ScrollMagic.Controller;d3.csv("assets/data/df.csv",function(t){d3.csv("assets/data/tracks.csv",function(e){d3.csv("assets/data/unique.csv",function(n){d3.csv("assets/data/track_words.csv",function(i){d3.csv("assets/data/lines.csv",function(o){var l,d=d3.map(d3.nest().key(function(t){return t.track_title+"$"+t.artist}).entries(o),function(t){return t.key}),c=["nothing_ruiner","deathgrips","drake","chemicalromance","where_you","paramore"],u=d3.map(n,function(t){return t.word}),h=(d3.map(d3.nest().key(function(t){return t.track_title+"$"+t.artist}).entries(i),function(t){return t.key}),0),y=0,m=d3.select(".full-song");m.selectAll("p").data(f).enter().append("p").attr("class","track-line").selectAll("span").data(function(t){return t.split(/[ -]+/).map(function(t){var e=t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?",""),a=0;return u.has(e)&&(a=1,h+=1,"TRUE"==u.get(e).sad_fear&&(y+=1,a=2)),[e,t,a]})}).enter().append("span").attr("class","track-word").classed("big-word",function(t){if(t[2]>0)return!0}).classed("sad-word",function(t){if(2==t[2])return!0}).text(function(t){return t[1]});var g=m.append("div").attr("class","results");g.append("p").attr("class","percent").html("<span>"+Math.round(y/h*100)+"%</span> emo"),g.append("p").attr("class","break-down").html("<span>"+y+" emo words</span> of <b>"+h+"</b> total words");var v=e.sort(function(t,e){return+e.pct_sad-+t.pct_sad}).filter(function(t){return-1==c.indexOf(t.artist)}),b=d3.map(d3.nest().key(function(t){return t.artist}).entries(v),function(t){return t.key}),w=["black_parade","panic","pilots","radiohead","queen"],k=["saves","panic","football","the_used","straylight","braid","sunny","queen","pilots","where_you","black_parade","dashboard","radiohead","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","brandnew"],O=["kanye college_dropout","tyler","lilpump","migos","earl_sweatshirt","postmalone","weeknd","kidcudi","kanye heartbreak","drake","future","kanye ye","young thug"],A=(r(l={dashboard:{artist:"Dashboard Confessional",album:"TPYHCtFtM"},pilots:{artist:"twenty one pilots",album:"vessel"},panic:{artist:"Panic at the Disco",album:"A Fever You Can't Sweat Out"},radiohead:{artist:"Radiohead",album:"High and Dry"},takingback:{artist:"Taking Back Sunday",album:"Tell All Your Friends"},chemicalromance:{artist:"My Chemical Romance",album:"Three Cheers..."},black_parade:{artist:"My Chemical Romance",album:"The Black Parade"},"fall out boy":{artist:"Fall Out Boy",album:"From Under the Cork Tree"},jimmyeatworld:{artist:"Jimmy Eat World",album:"Bleed American"},brandnew:{artist:"Brand New",album:"Deja Entendu"},where_you:{artist:"Taking Back Sunday",album:"Where You Want To Be"},paramore:{artist:"Paramore",album:"Riot"},xxxtentacion:{artist:"XXXTentacion",album:"?"},liluzivert:{artist:"Lil Uzi Vert",album:"Luv is Rage 2"},juicewrld:{artist:"Juice Wrld",album:"Goodbye & Good Riddance"},lilpeep:{artist:"Lil Peep",album:"Come Over When..."},postmalone:{artist:"Post Malone",album:"Beerbongs"},drake:{artist:"Drake",album:"Scorpion"},"kanye college_dropout":{artist:"Kanye",album:"College Dropout"},"kanye ye":{artist:"Kanye",album:"Ye"},migos:{artist:"Migos",album:"Culture"},lilpump:{artist:"Lil Pump",album:"Lil Pump"},"kanye heartbreak":{artist:"Kanye",album:"808s"},tyler:{artist:"Tyler the Creator",album:"Flower Boy"},kidcudi:{artist:"Kid Cudi",album:"Man on the Moon"},deathgrips:{artist:"Death Grips",album:"The Money Store"},princess_red:{artist:"Princess Nokia",album:"A Girl Cried Red"},tripple_trip:{artist:"Trippie Redd",album:"Life's a Trip"},yung_lean:{artist:"Yung Lean",album:"Stranger"},nothing_reaper:{artist:"nothing,nowhere",album:"Reaper"},nothing_ruiner:{artist:"nothing,nowhere",album:"Ruiner"},lilxan:{artist:"Lil Xan",album:"Reaper"},"rico nasty":{artist:"Rico Nasty",album:"Nasty"},"young thug":{artist:"Young Thug",album:"Beautiful Thugger..."},earl_sweatshirt:{artist:"Earl Sweatshirt",album:"I Don't Like..."},weeknd:{artist:"The Weeknd",album:"Trilogy"},future:{artist:"Future",album:"DS2"}},"where_you",{artist:"Taking Back Sunday",album:"Where You Want To Be"}),r(l,"queen",{artist:"The Smiths",album:"Queen is Dead"}),r(l,"saves",{artist:"Saves the Day",album:"Stay What You Are"}),r(l,"football",{artist:"American Football",album:"American Football"}),r(l,"the_used",{artist:"The Used",album:"In Love and Death"}),r(l,"straylight",{artist:"Straylight Run",album:"Straylight Run"}),r(l,"braid",{artist:"Braid",album:"Frame Canvas"}),r(l,"sunny",{artist:"Sunny Day Real Estate",album:"Diary"}),l);a<750&&(A.dashboard.artist="Dashboard"),a<600&&(A.where_you.album="where you...",A.takingback.album="tell all...",A.jimmyeatworld.album="Bleed...",A.kidcudi.album="Man on...",A.lilpeep.album="Come Over...",A.straylight.album="self-titled",A.queen.album="queen...",A.football.album="self-titled");var _=50,M=910;a<960&&(M=a-20-0-0);var S=650;a<1e3&&(S=1750);var P=d3.select(".emo-index"),T=P.append("svg").attr("width",M+0+0).attr("height",S+0+_).style("width",M+0+0+"px").style("height",S+0+_+"px"),B=.22;a<1e3&&(B=.2);var j=.01;a<1e3&&(j=.02);var C=150;a<1e3&&(C=500);var I=d3.scaleLinear().domain([j,B]).range([S,0]),E=P.append("div").attr("class","face-div").style("width",M+0+0+"px").style("height",S+0+_+"px").style("margin-top","50px"),L=E.append("div").attr("class","tool-tip"),N=E.append("div").attr("class","face-container").append("div").attr("class","face-img").attr("id","trigger").style("width",function(t){return"30px"}).style("height","30px").style("background-position-x","-243px").style("top",function(e){return I(Math.round(d3.max(t,function(t){return+t.percents})*C)/C)+"px"}).style("transform","translate(0,calc(-50% - 4px))"),D=t.filter(function(t){return-1==c.indexOf(t.artist)}),R=d3.nest().key(function(t){return s?"all-bands":-1==k.indexOf(t.artist)?"hiphop":"emo"}).key(function(t){return Math.round(+t.percents*C)/C}).entries(D),F=T.append("g").attr("transform","translate(0,50)").append("g").attr("transform",function(t){return s?"translate(0,0)":"translate("+(M/2-12.5)+",0)"});F.append("rect").attr("width",25).attr("height",S).attr("class","emo-index-axis").attr("x",0).attr("y",0);var W=F.append("g"),Y=F.append("g").selectAll("g").data(R).enter().append("g").selectAll("g").data(function(t){return t.values}).enter().append("g"),$=(Y.append("g").attr("class","rect-g"),Y.selectAll("text").data(function(t){return t.values}).enter().append("text").attr("class",function(t){return-1==k.indexOf(t.artist)?"hip-hop-artist emo-index-band":"emo-artist emo-index-band"}).classed("other-rock",function(t){return w.indexOf(t.artist)>-1}).classed("other-hip-hop",function(t){return O.indexOf(t.artist)>-1}).attr("y",function(t,e){return I(Math.round(+t.percents*C)/C)}).style("text-anchor",function(t){return-1!=k.indexOf(t.artist)||s?"start":"end"}));$.append("tspan").attr("class",function(t){return A[t.artist],-1!=k.indexOf(t.artist)||s?"artist-index":"album-index"}).text(function(t,e){var a=A[t.artist];return-1!=k.indexOf(t.artist)||s?a.artist:a.album}),$.append("tspan").attr("class",function(t){return A[t.artist],-1!=k.indexOf(t.artist)||s?"album-index":"artist-index"}).attr("dx",function(t){return"3"}).text(function(t,e){var a=A[t.artist];return-1!=k.indexOf(t.artist)||s?a.album:a.artist}),Y.append("g").append("text").attr("class","emo-band-hover-percent").attr("x",12.5).attr("y",function(t,e){return I(Math.round(+t.key*C)/C)}).text(function(t){return Math.round(100*t.key)+"%"}),Y.each(function(t){var e=[],a=[];d3.select(this).selectAll(".emo-index-band").each(function(t){e.push(d3.select(this).node().getBBox().width),a.push(d3.select(this).node().getBBox().height)}),t.offsetAmount=e,d3.select(this).selectAll(".emo-index-band").each(function(t,n){var r=n,i=1,o=39,l=t.percents,d=t.artist;-1!=k.indexOf(t.artist)||s||(i=-1,o=-14),1==n?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[r]+8).attr("height",a[0]+4).attr("class",function(t){return-1==k.indexOf(d)?"rap-rect":"emo-rect"}).style("fill",function(t){return O.indexOf(d)>-1?"rgba(230,230,230,0)":w.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("x",function(t){return-1!=k.indexOf(d)||s?o+i*e[r-1]+12*i-4:o+i*e[r-1]+12*i-(e[r]+4)}).attr("y",function(t,e){return I(Math.round(+l*C)/C)-(a[r]/2+7)}),d3.select(this).attr("x",o+i*e[r-1]+12*i)):2==n?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[r]+8).attr("height",a[0]+4).style("fill",function(t){return O.indexOf(d)>-1?"rgba(230,230,230,0)":w.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("class",function(t){return-1==k.indexOf(d)?"rap-rect":"emo-rect"}).attr("x",function(t){return-1!=k.indexOf(d)||s?o+i*(e[r-1]+e[r-2])+12*i*2:o+i*(e[r-1]+e[r-2])+12*i*2-(e[r]+4)}).attr("y",function(t,e){return I(Math.round(+l*C)/C)-(a[r]/2+7)}),d3.select(this).attr("x",o+i*(e[r-1]+e[r-2])+12*i*2)):(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[r]+8).attr("height",a[0]+4).attr("class",function(t){return-1==k.indexOf(d)?"rap-rect":"emo-rect"}).style("fill",function(t){return O.indexOf(d)>-1?"rgba(230,230,230,0)":w.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("x",function(t){return-1!=k.indexOf(d)||s?o-4:o-(e[r]+4)}).attr("y",function(t,e){return I(Math.round(+l*C)/C)-(a[r]/2+7)}),d3.select(this).attr("x",o)),d3.select(this.parentNode).select(".rect-g").selectAll("rect").filter(function(t,e){return e==r}).on("mouseover",function(t){!function(t,e,a){L.style("display","block").selectAll("div").remove(),L.append("div").attr("class","tool-tip-head").html(function(t){return"<span>Emo Data for</span> "+A[e].album});var n=L.selectAll(".tool-tip-track").data(b.get(e).values).enter().append("div").attr("class","tool-tip-track");n.selectAll("div").data(function(t){return[t.track_title,Math.round(100*t.pct_sad)+"%"]}).enter().append("div").attr("class",function(t,e){return 0==e?"tool-tip-track-track":"tool-tip-track-percent"}).html(function(t,e){return t.length>30?t.slice(0,27)+"...":t}).style("color",function(t,a){if(1==a)return-1==k.indexOf(e)?"#18604F":"#28115A"}),n.filter(function(t,e){return 0==e}).selectAll("div").each(function(t,e){if(1==e){var a=d3.select(this).text();d3.select(this).html(a+" <span>emo words</span>")}}),t.select(".emo-band-hover-percent").style("display","block"),Math.round(G(X)*C)/C==Math.round(t.datum().key*C)/C&&N.style("visibility","hidden")}(d3.select(this.parentNode.parentNode),d)}).on("mouseout",function(t){!function(t,e,a){t.select(".emo-band-hover-percent").style("display",null),N.style("visibility",null),L.style("display","none")}(d3.select(this.parentNode.parentNode))}).on("mousemove",function(t){var e=1;-1==k.indexOf(d)&&(e=-1);var a=[25,25],n=d3.mouse(this);L.style("left",function(){return e*a[0]+(M/2-12.5)+n[0]+"px"}),L.style("top",a[1]+n[1]+"px")})})}),W.append("text").attr("x",0).attr("y",-20).attr("class","axis-text").selectAll("tspan").data(["Most Emo","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",function(t){return s?"-5":12.5}).attr("text-anchor",function(t){return s?"start":"middle"}).text(function(t){return t}),W.append("text").attr("x",0).attr("y",S+15).attr("class","axis-text").selectAll("tspan").data(["Least Emo","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",function(t){return s?"-5":12.5}).attr("text-anchor",function(t){return s?"start":"middle"}).text(function(t){return t}),W.append("text").attr("x",0).attr("y",4).attr("class","axis-percent").selectAll("tspan").data([Math.round(100*B)+"%","Emo"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?17:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),W.append("text").attr("x",0).attr("y",S-17).attr("class","axis-percent").style("alignment-baseline","text-after-edge").style("dominant-baseline","text-after-edge").selectAll("tspan").data([Math.round(100*j)+"%","Emo"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?15:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t});var q=W.append("text").attr("x",39).attr("y",function(t){return s?10:0}).attr("class","axis-head emo-head");q.append("tspan").text("Emo Bands").attr("dx",8),q.append("tspan").text("+").attr("class","plus-sign").attr("dx",5).attr("dy",-3),q.append("tspan").attr("dx",5).attr("dy",function(t){return s?1:3}).attr("class","other-genre").style("fill","#5a5f67").text("Other rock");var z=W.append("text").attr("x",function(t){return s?39:-14}).attr("y",function(t){return s?40:0}).attr("class","axis-head hip-hop-head").attr("text-anchor",function(t){return s?"start":"end"});z.append("tspan").text(function(t){return s?"Emo rap":"other hip hop"}).style("fill",function(t){return s?null:"#5a5f67"}).attr("class",function(t){return s?null:"other-genre"}).attr("dx",function(t){return s?8:-8}),z.append("tspan").text("+").attr("class","plus-sign").attr("dx",5).attr("dy",-3),z.append("tspan").text(function(t){return s?"other hip hop":"Emo rap"}).attr("dx",function(t){return 5}).attr("class",function(t){return s?"other-genre":null}).style("fill",function(t){return s?"#5a5f67":null}).attr("dy",function(t){return s?1:3}),W.append("line").attr("x1",39).attr("x2",q.node().getBBox().width+14+25+14).attr("y1",function(t){return s?17:7}).attr("y2",function(t){return s?17:7}).attr("class","axis-head-line"),W.append("line").attr("x1",-14).attr("x2",-z.node().getBBox().width-14-14).attr("y1",7).attr("y2",7).attr("class","axis-head-line").style("display",function(t){return s?"none":null});var G=d3.scaleLinear().domain([0,1]).range([d3.max(t,function(t){return+t.percents}),.04815714285714286]),X=0,H=d3.scaleQuantize().domain([0,1]).range(d3.range(9)),U=N.append("p").attr("class","face-img-percent").style("width",function(t){return"30px"}).style("margin-top","30px").text(function(){return Math.round(100*G(X))+"%"}),K=24,J=d3.select(".saddest-songs"),Q=J.selectAll("div").data(v.slice(0,100)).enter().append("div").attr("class","saddest-song-track-div").style("display",function(t,e){return e<25?null:"none"}).on("mouseover",function(t){Q.classed("saddest-song-annotation-highlighted",!1),d3.select(this).classed("saddest-song-annotation-highlighted",!0)});Q.filter(function(t,e){return 0==e}).classed("saddest-song-annotation-highlighted",!0),Q.append("p").attr("class",function(t){return-1==k.indexOf(t.artist)?"saddest-song-track rap-top-song":"saddest-song-track emo-top-song"}).html(function(t,e){var a=A[t.artist],n=t.track_title;return n.length>25&&(n=n.slice(0,22)+"..."),"<span class='saddest-song-track-count'>"+(e+1)+".</span>"+a.artist+" - <span class='saddest-song-track-title'>"+n+"</span><span class='saddest-song-track-percent'>"+Math.round(100*t.pct_sad)+"%</span>"}).on("click",function(t){p.get(t.track_title+"$"+t.artist)});var V=Q.append("div").attr("class","saddest-song-annotation");V.append("svg").attr("xmlns","http://www.w3.org/2000/svg").attr("width",24).attr("height",24).attr("viewBox","0 0 24 24").attr("fill","none").attr("stroke","#29A9D1").attr("stroke-width","2").attr("stroke-linecap","round").attr("stroke-linejoin","round").append("polyline").attr("points","15 18 9 12 15 6"),V.append("div").attr("class","saddest-song-lines").selectAll("p").data(function(t){var e=d.get(t.track_title+"$"+t.artist).values,n=d3.nest().key(function(t){return t.lyric}).entries(e);return a<500?n.slice(0,3):n.slice(0,5)}).enter().append("p").attr("class","saddest-song-line").selectAll("span").data(function(t){var e=t.values.map(function(t){return t.word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?","")});return e.push("feel"),t.key.split(/[ -]+/).map(function(t){return[t,t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?",""),e]})}).enter().append("span").attr("class","saddest-song-word").classed("sad-word",function(t){return t[2].indexOf(t[1])>-1}).text(function(t){return t[0]});var Z=J.append("button").attr("class","see-more").on("click",function(t){(K+=25)>75&&Z.style("display","none"),Q.style("display",function(t,e){return e<K?null:"none"})});Z.append("div").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>'),Z.append("p").text("Next 25 Songs"),new ScrollMagic.Scene({triggerElement:"#trigger",duration:I(Math.round(.025*C)/C)-I(Math.round(d3.max(t,function(t){return+t.percents})*C)/C),triggerHook:.5}).setPin("#trigger",{pushFollowers:!1}).addTo(x).on("progress",function(t){var e=Math.round(100*t.progress)/100;e!=X&&(X=e,N.style("background-position-x",30.375*H(X)-243+"px"),U.text(function(){return 5==Math.round(100*G(X))?"":Math.round(100*G(X))+"%"}))})})})})})})},resize:function(){}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=window.location.hostname.indexOf("localhost")>-1,r={};e.default={send:function(t){var e=t.category,a=t.action,s=t.once;(function(t){var e=t.action;if(t.once){var a=""+t.category.toString().replace(/\W+/g,"")+e.toString().replace(/\W+/g,"");return!r[a]&&(r[a]=!0,!0)}return!0})({category:e,action:a,once:s})&&(n?console.log({category:e,action:a,once:s}):window.ga&&ga("send",{hitType:"event",eventCategory:e.toString(),eventAction:a.toString()}))}}}]);