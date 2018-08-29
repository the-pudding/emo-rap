!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";var n=i(a(1)),r=i(a(3)),s=i(a(4));function i(t){return t&&t.__esModule?t:{default:t}}var o=d3.select("body"),l=0;o.classed("is-mobile",r.default.any()),window.addEventListener("resize",(0,n.default)(function(){var t=o.node().offsetWidth;l!==t&&(l=t,s.default.resize())},150)),function(){if(o.select("header").classed("is-sticky")){var t=o.select(".header__menu"),e=o.select(".header__toggle");e.on("click",function(){var a=t.classed("is-visible");t.classed("is-visible",!a),e.classed("is-visible",!a)})}}(),s.default.init()},function(t,e,a){(function(e){var a=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=d||u||Function("return this")(),p=Object.prototype.toString,h=Math.max,f=Math.min,y=function(){return c.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==n}(t))return a;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var d=i.test(t);return d||o.test(t)?l(t.slice(2),d?2:8):s.test(t)?a:+t}t.exports=function(t,e,a){var n,r,s,i,o,l,d=0,u=!1,c=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(e){var a=n,s=r;return n=r=void 0,d=e,i=t.apply(s,a)}function v(t){var a=t-l;return void 0===l||a>=e||a<0||c&&t-d>=s}function b(){var t=y();if(v(t))return w(t);o=setTimeout(b,function(t){var a=e-(t-l);return c?f(a,s-(t-d)):a}(t))}function w(t){return o=void 0,p&&n?x(t):(n=r=void 0,i)}function k(){var t=y(),a=v(t);if(n=arguments,r=this,l=t,a){if(void 0===o)return function(t){return d=t,o=setTimeout(b,e),u?x(t):i}(l);if(c)return o=setTimeout(b,e),x(l)}return void 0===o&&(o=setTimeout(b,e)),i}return e=g(e)||0,m(a)&&(u=!!a.leading,s=(c="maxWait"in a)?h(g(a.maxWait)||0,e):s,p="trailing"in a?!!a.trailing:p),k.cancel=function(){void 0!==o&&clearTimeout(o),d=0,n=l=r=o=void 0},k.flush=function(){return void 0===o?i:w(y())},k}}).call(this,a(2))},function(t,e){var a;a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(a=window)}t.exports=a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.android()||n.blackberry()||n.ios()||n.opera()||n.windows()}};e.default=n},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={init:function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=(Math.max(document.documentElement.clientHeight,window.innerHeight||0),!1);t<450&&(e=!0);var a,n=document.getElementById("lucid-dreams"),r=d3.select(".audio-controls"),s=d3.scaleThreshold().domain([0,3,5.8,8.45,12.34,15,18,20.6,100]).range([0,1,2,3,4,5,6,7,8,9]),i=d3.select(".verses").selectAll("p");r.on("click",function(t){n.paused?(n.play(),r.select(".volume-on").style("display","none"),r.select(".volume-off").style("display","block"),r.select(".play-text").text("Pause"),d3.select(".verses").classed("playing",!0),a=d3.timer(function(t){var e=s(n.currentTime)-1;i.style("color",function(t,a){var n=a;return-1==e?null:(e==n?(d3.select(this).classed("show-face",!0),7==e?d3.select(this).select(".verse-face").style("background-position-x","-243px"):d3.select(this).select(".verse-face").style("background-position-x",30.375*(8-e)-243+"px")):d3.select(this).classed("show-face",!1),e>=n?null:"#dfdfdf")}),n.currentTime>22.8&&(a.stop(),d3.select(".verses").classed("playing",!1),r.select(".volume-on").style("display","block"),r.select(".volume-off").style("display","none"),r.select(".play-text").text("Play"),i.style("color",null))},150)):(n.pause(),r.select(".volume-on").style("display","block"),r.select(".volume-off").style("display","none"),r.select(".play-text").text("Play"),a.stop(),d3.select(".verses").classed("playing",!1),i.style("color",null))});var o=d3.select(".right-col"),l=["I don&rsquo;t really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said, Baby, I am not afraid to die","Push me to the edge","All my friends are dead"],d=["Are you alright?","I'm alright, I'm quite alright","And my money's right","8… (yeah)","Countin' them bands","All way to the top 'til they be fallin' over","(Yeah, yeah, yeah)","Countin' them bands","On my way to the top 'til we fallin' over","","I don't really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said, 'Baby, I am not afraid to die'","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","","Phantom that's all red, inside all white","Like somethin' you ride a sled down, I just want that head","My Brittany got mad, I'm barely her man now","Everybody got the same swag now","Watch the way that I tear it down","Stackin' my bands all the way to the top","All the way 'til my bands fallin' over","Every time that you leave your spot","Your girlfriend call me like, 'Come on over!'","I like the way that she treat me","Gon' leave you, won't leave me, I call it that Casanova","She say I'm insane, yeah","I might blow my brain out (hey)","Xanny, help the pain, yeah","Please, Xanny, make it go away","I'm committed, not addicted, but it keep control of me","All the pain, now I can't feel it","I swear that it's slowin' me, yeah","","I don't really care if you cry","On the real, you shoulda never lied","Saw the way she looked me in my eyes","She said: 'I am not afraid to die.'","All my friends are dead","Push me to the edge (yeah)","All my friends are dead, yeah, ooh","Push me to the edge","All my friends are dead, yeah","All my friends are dead, yeah","","That is not your swag, I swear you fake hard","Now these niggas wanna take my cadence","Rain on 'em, thunderstorm, rain on 'em (ooh, yeah)","Medicine, lil' nigga, take some (yeh, yeh)","Fast car, NASCAR, race on 'em","In the club, ain't got no ones, then we would beg them","Clothes from overseas, got the racks and they all C-Notes","You is not a G though","Lookin' at you stackin' all your money, it all green though","I was countin' that and these all twenties, that's a G-roll","","She say: 'You're the worst, you're the worst.'","I cannot die because this my universe","","I don't really care if you cry","On the real, you shoulda never lied","Shoulda saw the way she looked me in my eyes","She said: 'Baby, I am not afraid to die.'","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge","All my friends are dead","Push me to the edge"];o.append("p").attr("class","track-name").append("span").text("Lil Uzi Vert - XO Tour Llif3");var u=["Baby,","care","cry","real","lied","looked","eyes","baby","afraid","die","Push","edge","friends","dead"],c=["cry","die","afraid","die","dead"];o.append("div").attr("class","track-content").selectAll("p").data(l).enter().append("p").attr("class","track-line").selectAll("span").data(function(t){return t.split(" ")}).enter().append("span").attr("class","track-word").classed("big-word",function(t){return u.indexOf(t)>-1}).classed("sad-word",function(t){return c.indexOf(t)>-1}).html(function(t){return t});var p=o.append("div").attr("class","results");p.append("p").attr("class","percent").html(function(){return"<span>33%</span> emo"}),p.append("p").attr("class","break-down").html(function(){return"<span class='sad-breakdown'>4 emo words</span> of <span class='all-breakdown'>12 total words</span>"});var h=!0,f=o.append("button").attr("class","see-more").on("click",function(t){h?(h=!1,d3.select(".full-song").style("display","block"),y.text("Hide Song")):(d3.select(".full-song").style("display",null),y.text("Full Song"),h=!0)});f.append("div").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');var y=f.append("p").text("Full Song"),m=new ScrollMagic.Controller;d3.csv("assets/data/df.csv",function(a){d3.csv("assets/data/tracks.csv",function(n){d3.csv("assets/data/unique.csv",function(r){d3.csv("assets/data/track_words.csv",function(s){d3.csv("assets/data/lines.csv",function(i){var o=d3.map(d3.nest().key(function(t){return t.track_title+"$"+t.artist}).entries(i),function(t){return t.key}),u=["nothing_ruiner","deathgrips","drake","chemicalromance"],c=d3.map(r,function(t){return t.word}),p=(d3.map(d3.nest().key(function(t){return t.track_title+"$"+t.artist}).entries(s),function(t){return t.key}),0),h=0,f=d3.select(".full-song");f.selectAll("p").data(d).enter().append("p").attr("class","track-line").selectAll("span").data(function(t){return t.split(/[ -]+/).map(function(t){var e=t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?",""),a=0;return c.has(e)&&(a=1,p+=1,"TRUE"==c.get(e).sad_fear&&(h+=1,a=2)),[e,t,a]})}).enter().append("span").attr("class","track-word").classed("big-word",function(t){if(t[2]>0)return!0}).classed("sad-word",function(t){if(2==t[2])return!0}).text(function(t){return t[1]});var y=f.append("div").attr("class","results");y.append("p").attr("class","percent").html("<span>"+Math.round(h/p*100)+"%</span> emo"),y.append("p").attr("class","break-down").html("<span>"+h+" emo words</span> of <b>"+p+"</b> total words");var g=n.sort(function(t,e){return+e.pct_sad-+t.pct_sad}).filter(function(t){return-1==u.indexOf(t.artist)}),x=d3.map(d3.nest().key(function(t){return t.artist}).entries(g),function(t){return t.key}),v=["pilots","radiohead"],b=["pilots","where_you","black_parade","dashboard","radiohead","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","brandnew"],w=["kanye college_dropout","tyler","lilpump","migos","earl_sweatshirt","postmalone","weeknd","kidcudi","kanye heartbreak","drake","future","kanye ye","young thug"],k=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({dashboard:{artist:"Dashboard Confessional",album:"TPYHCtFtM"},pilots:{artist:"twenty one pilots",album:"vessel"},radiohead:{artist:"Radiohead",album:"High and Dry"},takingback:{artist:"Taking Back Sunday",album:"Tell All Your Friends"},chemicalromance:{artist:"My Chemical Romance",album:"Three Cheers..."},black_parade:{artist:"My Chemical Romance",album:"The Black Parade"},"fall out boy":{artist:"Fall Out Boy",album:"From Under the Cork Tree"},jimmyeatworld:{artist:"Jimmy Eat World",album:"Bleed American"},brandnew:{artist:"Brand New",album:"Deja Entendu"},where_you:{artist:"Taking Back Sunday",album:"Where You Want To Be"},paramore:{artist:"Paramore",album:"Riot"},xxxtentacion:{artist:"XXXTentacion",album:"?"},liluzivert:{artist:"Lil Uzi Vert",album:"Luv is Rage 2"},juicewrld:{artist:"Juice Wrld",album:"Goodbye & Good Riddance"},lilpeep:{artist:"Lil Peep",album:"Come Over When..."},postmalone:{artist:"Post Malone",album:"Beerbongs"},drake:{artist:"Drake",album:"Scorpion"},"kanye college_dropout":{artist:"Kanye",album:"College Dropout"},"kanye ye":{artist:"Kanye",album:"Ye"},migos:{artist:"Migos",album:"Culture"},lilpump:{artist:"Lil Pump",album:"Lil Pump"},"kanye heartbreak":{artist:"Kanye",album:"808s"},tyler:{artist:"Tyler the Creator",album:"Flower Boy"},kidcudi:{artist:"Kid Cudi",album:"Man on the Moon"},deathgrips:{artist:"Death Grips",album:"The Money Store"},princess_red:{artist:"Princess Nokia",album:"A Girl Cried Red"},tripple_trip:{artist:"Trippie Redd",album:"Life's a Trip"},yung_lean:{artist:"Yung Lean",album:"Stranger"},nothing_reaper:{artist:"nothing,nowhere",album:"Reaper"},nothing_ruiner:{artist:"nothing,nowhere",album:"Ruiner"},lilxan:{artist:"Lil Xan",album:"Reaper"},"rico nasty":{artist:"Rico Nasty",album:"Nasty"},"young thug":{artist:"Young Thug",album:"Beautiful Thugger..."},earl_sweatshirt:{artist:"Earl Sweatshirt",album:"I Don't Like..."},weeknd:{artist:"The Weeknd",album:"Trilogy"},future:{artist:"Future",album:"DS2"}},"where_you",{artist:"Taking Back Sunday",album:"Where You Want To Be"});t<750&&(k.dashboard.artist="Dashboard"),t<600&&(k.where_you.album="where you...",k.takingback.album="tell all...",k.jimmyeatworld.album="Bleed...",k.kidcudi.album="Man on...");var O=50,A=910;t<960&&(A=t-0-O);var M=650;t<1e3&&(M=1750);var _=d3.select(".emo-index"),P=_.append("svg").attr("width",A+0+0).attr("height",M+0+O).style("width",A+0+0+"px").style("height",M+0+O+"px"),S=.22;t<1e3&&(S=.2);var T=.01;t<1e3&&(T=.02);var B=150;t<1e3&&(B=500),t<550&&(B=500);var j=d3.scaleLinear().domain([T,S]).range([M,0]),I=_.append("div").attr("class","face-div").style("width",A+0+0+"px").style("height",M+0+O+"px").style("margin-top","50px"),C=I.append("div").attr("class","tool-tip"),E=I.append("div").attr("class","face-container").append("div").attr("class","face-img").attr("id","trigger").style("width",function(t){return"30px"}).style("height","30px").style("background-position-x","-243px").style("top",function(t){return j(Math.round(d3.max(a,function(t){return+t.percents})*B)/B)+"px"}).style("transform","translate(0,calc(-50% - 4px))"),L=a.filter(function(t){return-1==u.indexOf(t.artist)}),N=d3.nest().key(function(t){return e?"all-bands":-1==b.indexOf(t.artist)?"hiphop":"emo"}).key(function(t){return Math.round(+t.percents*B)/B}).entries(L),R=P.append("g").attr("transform","translate(0,50)").append("g").attr("transform",function(t){return e?"translate(0,0)":"translate("+(A/2-12.5)+",0)"});R.append("rect").attr("width",25).attr("height",M).attr("class","emo-index-axis").attr("x",0).attr("y",0);var W=R.append("g"),F=R.append("g").selectAll("g").data(N).enter().append("g").selectAll("g").data(function(t){return t.values}).enter().append("g"),D=(F.append("g").attr("class","rect-g"),F.selectAll("text").data(function(t){return t.values}).enter().append("text").attr("class",function(t){return-1==b.indexOf(t.artist)?"hip-hop-artist emo-index-band":"emo-artist emo-index-band"}).classed("other-rock",function(t){return v.indexOf(t.artist)>-1}).classed("other-hip-hop",function(t){return w.indexOf(t.artist)>-1}).attr("y",function(t,e){return j(Math.round(+t.percents*B)/B)}).style("text-anchor",function(t){return-1!=b.indexOf(t.artist)||e?"start":"end"}));D.append("tspan").attr("class",function(t){return k[t.artist],-1!=b.indexOf(t.artist)||e?"artist-index":"album-index"}).text(function(t,a){var n=k[t.artist];return-1!=b.indexOf(t.artist)||e?n.artist:n.album}),D.append("tspan").attr("class",function(t){return k[t.artist],-1!=b.indexOf(t.artist)||e?"album-index":"artist-index"}).attr("dx",function(t){return"3"}).text(function(t,a){var n=k[t.artist];return-1!=b.indexOf(t.artist)||e?n.album:n.artist}),F.append("g").append("text").attr("class","emo-band-hover-percent").attr("x",12.5).attr("y",function(t,e){return j(Math.round(+t.key*B)/B)}).text(function(t){return Math.round(100*t.key)+"%"}),F.each(function(t){var a=[],n=[];d3.select(this).selectAll(".emo-index-band").each(function(t){a.push(d3.select(this).node().getBBox().width),n.push(d3.select(this).node().getBBox().height)}),t.offsetAmount=a,d3.select(this).selectAll(".emo-index-band").each(function(t,r){var s=r,i=1,o=39,l=t.percents,d=t.artist;-1!=b.indexOf(t.artist)||e||(i=-1,o=-14),1==r?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",a[s]+8).attr("height",n[0]+4).attr("class",function(t){return-1==b.indexOf(d)?"rap-rect":"emo-rect"}).style("fill",function(t){return w.indexOf(d)>-1?(console.log(d,"rgba(230,230,230,0)"),"rgba(230,230,230,0)"):v.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("x",function(t){return-1!=b.indexOf(d)||e?o+i*a[s-1]+12*i-4:o+i*a[s-1]+12*i-(a[s]+4)}).attr("y",function(t,e){return j(Math.round(+l*B)/B)-(n[s]/2+7)}),d3.select(this).attr("x",o+i*a[s-1]+12*i)):2==r?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",a[s]+8).attr("height",n[0]+4).style("fill",function(t){return w.indexOf(d)>-1?"rgba(230,230,230,0)":v.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("class",function(t){return-1==b.indexOf(d)?"rap-rect":"emo-rect"}).attr("x",function(t){return-1!=b.indexOf(d)||e?o+i*(a[s-1]+a[s-2])+12*i*2:o+i*(a[s-1]+a[s-2])+12*i*2-(a[s]+4)}).attr("y",function(t,e){return j(Math.round(+l*B)/B)-(n[s]/2+7)}),d3.select(this).attr("x",o+i*(a[s-1]+a[s-2])+12*i*2)):(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",a[s]+8).attr("height",n[0]+4).attr("class",function(t){return-1==b.indexOf(d)?"rap-rect":"emo-rect"}).style("fill",function(t){return w.indexOf(d)>-1?"rgba(230,230,230,0)":v.indexOf(d)>-1?"rgba(230,230,230,0)":null}).attr("x",function(t){return-1!=b.indexOf(d)||e?o-4:o-(a[s]+4)}).attr("y",function(t,e){return j(Math.round(+l*B)/B)-(n[s]/2+7)}),d3.select(this).attr("x",o)),d3.select(this.parentNode).select(".rect-g").selectAll("rect").filter(function(t,e){return e==s}).on("mouseover",function(t){!function(t,e,a){C.style("display","block").selectAll("div").remove(),C.append("div").attr("class","tool-tip-head").html(function(t){return"<span>Emo Data for</span> "+k[e].album});var n=C.selectAll(".tool-tip-track").data(x.get(e).values).enter().append("div").attr("class","tool-tip-track");n.selectAll("div").data(function(t){return[t.track_title,Math.round(100*t.pct_sad)+"%"]}).enter().append("div").attr("class",function(t,e){return 0==e?"tool-tip-track-track":"tool-tip-track-percent"}).html(function(t,e){return t.length>30?t.slice(0,27)+"...":t}).style("color",function(t,a){if(1==a)return-1==b.indexOf(e)?"#18604F":"#28115A"}),n.filter(function(t,e){return 0==e}).selectAll("div").each(function(t,e){if(1==e){var a=d3.select(this).text();d3.select(this).html(a+" <span>emo words</span>")}}),t.select(".emo-band-hover-percent").style("display","block"),Math.round(z(G)*B)/B==Math.round(t.datum().key*B)/B&&E.style("visibility","hidden")}(d3.select(this.parentNode.parentNode),d)}).on("mouseout",function(t){!function(t,e,a){t.select(".emo-band-hover-percent").style("display",null),E.style("visibility",null),C.style("display","none")}(d3.select(this.parentNode.parentNode))}).on("mousemove",function(t){var e=1;-1==b.indexOf(d)&&(e=-1);var a=[25,25],n=d3.mouse(this);C.style("left",function(){return e*a[0]+(A/2-12.5)+n[0]+"px"}),C.style("top",a[1]+n[1]+"px")})})}),W.append("text").attr("x",0).attr("y",-20).attr("class","axis-text").selectAll("tspan").data(["Most Emo","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),W.append("text").attr("x",0).attr("y",M+15).attr("class","axis-text").selectAll("tspan").data(["Least Emo","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),W.append("text").attr("x",0).attr("y",4).attr("class","axis-percent").selectAll("tspan").data([Math.round(100*S)+"%","Emo"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?17:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),W.append("text").attr("x",0).attr("y",M-17).attr("class","axis-percent").style("alignment-baseline","text-after-edge").style("dominant-baseline","text-after-edge").selectAll("tspan").data([Math.round(100*T)+"%","Emo"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?15:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t});var Y=W.append("text").attr("x",39).attr("y",0).attr("class","axis-head emo-head");Y.append("tspan").text("Emo Bands").attr("dx",8),Y.append("tspan").text("+").attr("class","plus-sign").attr("dx",5).attr("dy",-3),Y.append("tspan").attr("dx",5).attr("dy",1).attr("class","other-genre").style("fill","#5a5f67").text("Other rock");var $=W.append("text").attr("x",function(t){return e?39:-14}).attr("y",function(t){return e?30:0}).attr("class","axis-head hip-hop-head").attr("text-anchor",function(t){return e?"start":"end"});$.append("tspan").text(function(t){return e?"Emo-rap":"other hip hop"}).style("fill",function(t){return e?null:"#5a5f67"}).attr("class",function(t){return e?null:"other-genre"}).attr("dx",function(t){return e?8:-8}),$.append("tspan").text("+").attr("class","plus-sign").attr("dx",5).attr("dy",-3),$.append("tspan").text(function(t){return e?"other hip hop":"Emo-rap"}).attr("dx",function(t){return 5}).attr("class",function(t){return e?"other-genre":null}).style("fill",function(t){return e?"#5a5f67":null}).attr("dy",function(t){return e?1:3}),W.append("line").attr("x1",39).attr("x2",Y.node().getBBox().width+14+25+14).attr("y1",7).attr("y2",7).attr("class","axis-head-line"),W.append("line").attr("x1",-14).attr("x2",-$.node().getBBox().width-14-14).attr("y1",7).attr("y2",7).attr("class","axis-head-line").style("display",function(t){return e?"none":null});var z=d3.scaleLinear().domain([0,1]).range([d3.max(a,function(t){return+t.percents}),.04815714285714286]),G=0,X=d3.scaleQuantize().domain([0,1]).range(d3.range(9)),H=E.append("p").attr("class","face-img-percent").style("width",function(t){return"30px"}).style("margin-top","30px").text(function(){return Math.round(100*z(G))+"%"}),K=24,U=d3.select(".saddest-songs"),q=U.selectAll("div").data(g.slice(0,100)).enter().append("div").attr("class","saddest-song-track-div").style("display",function(t,e){return e<25?null:"none"}).on("mouseover",function(t){q.classed("saddest-song-annotation-highlighted",!1),d3.select(this).classed("saddest-song-annotation-highlighted",!0)});q.filter(function(t,e){return 0==e}).classed("saddest-song-annotation-highlighted",!0),q.append("p").attr("class",function(t){return-1==b.indexOf(t.artist)?"saddest-song-track rap-top-song":"saddest-song-track emo-top-song"}).html(function(t,e){var a=k[t.artist],n=t.track_title;return n.length>25&&(n=n.slice(0,22)+"..."),"<span class='saddest-song-track-count'>"+(e+1)+".</span>"+a.artist+" - <span class='saddest-song-track-title'>"+n+"</span><span class='saddest-song-track-percent'>"+Math.round(100*t.pct_sad)+"%</span>"}).on("click",function(t){var e=l.get(t.track_title+"$"+t.artist);console.log(e)});var J=q.append("div").attr("class","saddest-song-annotation");J.append("svg").attr("xmlns","http://www.w3.org/2000/svg").attr("width",24).attr("height",24).attr("viewBox","0 0 24 24").attr("fill","none").attr("stroke","#29A9D1").attr("stroke-width","2").attr("stroke-linecap","round").attr("stroke-linejoin","round").append("polyline").attr("points","15 18 9 12 15 6"),J.append("div").attr("class","saddest-song-lines").selectAll("p").data(function(e){var a=o.get(e.track_title+"$"+e.artist).values,n=d3.nest().key(function(t){return t.lyric}).entries(a);return t<500?n.slice(0,3):n.slice(0,5)}).enter().append("p").attr("class","saddest-song-line").selectAll("span").data(function(t){var e=t.values.map(function(t){return t.word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?","")});return e.push("feel"),t.key.split(/[ -]+/).map(function(t){return[t,t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/'/g,"").replace("?",""),e]})}).enter().append("span").attr("class","saddest-song-word").classed("sad-word",function(t){return t[2].indexOf(t[1])>-1}).text(function(t){return t[0]});var V=U.append("button").attr("class","see-more").on("click",function(t){(K+=25)>75&&V.style("display","none"),q.style("display",function(t,e){return e<K?null:"none"})});V.append("div").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>'),V.append("p").text("Next 25 Songs"),new ScrollMagic.Scene({triggerElement:"#trigger",duration:j(Math.round(.025*B)/B)-j(Math.round(d3.max(a,function(t){return+t.percents})*B)/B),triggerHook:.5}).setPin("#trigger",{pushFollowers:!1}).addTo(m).on("progress",function(t){var e=Math.round(100*t.progress)/100;e!=G&&(G=e,E.style("background-position-x",30.375*X(G)-243+"px"),H.text(function(){return 5==Math.round(100*z(G))?"":Math.round(100*z(G))+"%"}))})})})})})})},resize:function(){}}}]);