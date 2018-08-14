!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n=o(r(1)),a=o(r(3)),i=o(r(4));function o(t){return t&&t.__esModule?t:{default:t}}var s=d3.select("body"),u=0;s.classed("is-mobile",a.default.any()),window.addEventListener("resize",(0,n.default)(function(){var t=s.node().offsetWidth;u!==t&&(u=t,i.default.resize())},150)),function(){if(s.select("header").classed("is-sticky")){var t=s.select(".header__menu"),e=s.select(".header__toggle");e.on("click",function(){var r=t.classed("is-visible");t.classed("is-visible",!r),e.classed("is-visible",!r)})}}(),i.default.init()},function(t,e,r){(function(e){var r=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=d||c||Function("return this")(),p=Object.prototype.toString,f=Math.max,h=Math.min,m=function(){return l.Date.now()};function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==n}(t))return r;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var d=o.test(t);return d||s.test(t)?u(t.slice(2),d?2:8):i.test(t)?r:+t}t.exports=function(t,e,r){var n,a,i,o,s,u,d=0,c=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var r=n,i=a;return n=a=void 0,d=e,o=t.apply(i,r)}function b(t){var r=t-u;return void 0===u||r>=e||r<0||l&&t-d>=i}function v(){var t=m();if(b(t))return w(t);s=setTimeout(v,function(t){var r=e-(t-u);return l?h(r,i-(t-d)):r}(t))}function w(t){return s=void 0,p&&n?g(t):(n=a=void 0,o)}function M(){var t=m(),r=b(t);if(n=arguments,a=this,u=t,r){if(void 0===s)return function(t){return d=t,s=setTimeout(v,e),c?g(t):o}(u);if(l)return s=setTimeout(v,e),g(u)}return void 0===s&&(s=setTimeout(v,e)),o}return e=y(e)||0,x(r)&&(c=!!r.leading,i=(l="maxWait"in r)?f(y(r.maxWait)||0,e):i,p="trailing"in r?!!r.trailing:p),M.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=u=a=s=void 0},M.flush=function(){return void 0===s?o:w(m())},M}}).call(this,r(2))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.android()||n.blackberry()||n.ios()||n.opera()||n.windows()}};e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={init:function(){var t=new ScrollMagic.Controller;d3.csv("assets/data/df.csv",function(e){var r=["dashboard","radiohead","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","brandnew"],n={dashboard:{artist:"Dashboard Confessional",album:"TPYHCtFtM"},radiohead:{artist:"Radiohead",album:"High and Dry"},takingback:{artist:"Taking Back Sunday",album:"Tell All Your Friends"},chemicalromance:{artist:"My Chemical Romance",album:"Three Cheers..."},"fall out boy":{artist:"Fall Out Boy",album:"From Under the Cork Tree"},jimmyeatworld:{artist:"Jimmy Eat World",album:"Bleed American"},brandnew:{artist:"Brand New",album:"Deja Entendu"},paramore:{artist:"Paramore",album:"Riot"},xxxtentacion:{artist:"XXXTentacion",album:"?"},liluzivert:{artist:"Lil Uzi Vert",album:"Luv is Rage 2"},juicewrld:{artist:"Juice Wrld",album:"Goodbye & Good Riddance"},lilpeep:{artist:"Lil Peep",album:"Come Over When You're Sober"},postmalone:{artist:"Post Malone",album:"Beerbongs & Bentleys"},drake:{artist:"Drake",album:"Scorpion"},"kanye college_dropout":{artist:"Kanye",album:"College Dropout"},"kanye ye":{artist:"Kanye",album:"Ye"},migos:{artist:"Migos",album:"Culture"},lilpump:{artist:"Lil Pump",album:"Lil Pump"},"kanye heartbreak":{artist:"Kanye",album:"808s"},tyler:{artist:"Tyler the Creator",album:"Flower Boy"},kidcudi:{artist:"Kid Cudi",album:"Man on the Moon"},deathgrips:{artist:"Death Grips",album:"The Money Store"},princess_red:{artist:"Princess Nokia",album:"A Girl Cried Red"},tripple_trip:{artist:"Trippie Redd",album:"Life's a Trip"},yung_lean:{artist:"Yung Lean",album:"Stranger"},nothing_reaper:{artist:"nothing,nowhere",album:"Reaper"},nothing_ruiner:{artist:"nothing,nowhere",album:"Ruiner"},lilxan:{artist:"Lil Xan",album:"Reaper"},"rico nasty":{artist:"Rico Nasty",album:"Nasty"},"young thug":{artist:"Young Thug",album:"Beautiful Thugger Girls"}},a=100,i=600,o=d3.select(".emo-index"),s=o.append("svg").attr("width",860).attr("height",700).style("width","860px").style("height","700px"),u=d3.scaleLinear().domain([.03,.19]).range([i,0]),d=o.append("div").attr("class","face-div").style("width","860px").style("height","700px").style("margin-top",a+"px").append("div").attr("class","face-container").append("div").attr("class","face-img").attr("id","trigger").style("width",function(t){return"30px"}).style("height","30px").style("background-position-x","-243px").style("top",function(t){return u(Math.round(150*d3.max(e,function(t){return+t.percents}))/150)+"px"}).style("transform","translate(0,calc(-50% - 4px))"),c=["nothing_ruiner","deathgrips"],l=e.filter(function(t){return-1==c.indexOf(t.artist)}),p=d3.nest().key(function(t){return-1==r.indexOf(t.artist)?"hiphop":"emo"}).key(function(t){return Math.round(150*+t.percents)/150}).entries(l),f=s.append("g").attr("transform","translate(0,100)").append("g").attr("transform","translate(417.5,0)");f.append("rect").attr("width",25).attr("height",i).attr("class","emo-index-axis").attr("x",0).attr("y",0);var h=f.append("g"),m=f.append("g").selectAll("g").data(p).enter().append("g").selectAll("g").data(function(t){return t.values}).enter().append("g"),x=(m.append("g").attr("class","rect-g"),m.selectAll("text").data(function(t){return t.values}).enter().append("text").attr("class",function(t){return-1==r.indexOf(t.artist)?"hip-hop-artist emo-index-band":"emo-artist emo-index-band"}).attr("y",function(t,e){return u(Math.round(150*+t.percents)/150)}).style("text-anchor",function(t){return-1==r.indexOf(t.artist)?"end":"start"}));x.append("tspan").attr("class",function(t){return t.artist,-1==r.indexOf(t.artist)?"album-index":"artist-index"}).text(function(t,e){var a=n[t.artist];return-1==r.indexOf(t.artist)?a.album:a.artist}),x.append("tspan").attr("class",function(t){return t.artist,-1==r.indexOf(t.artist)?"artist-index":"album-index"}).attr("dx",function(t){return"3"}).text(function(t,e){var a=n[t.artist];return-1==r.indexOf(t.artist)?a.artist:a.album}),m.append("g").append("text").attr("class","emo-band-hover-percent").attr("x",12.5).attr("y",function(t,e){return u(Math.round(150*+t.key)/150)}).text(function(t){return Math.round(100*t.key)+"%"}),m.each(function(t){var e=[],n=[];d3.select(this).selectAll(".emo-index-band").each(function(t){e.push(d3.select(this).node().getBBox().width),n.push(d3.select(this).node().getBBox().height)}),t.offsetAmount=e,d3.select(this).selectAll(".emo-index-band").each(function(t,a){var i=a,o=1,s=35,d=t.percents,c=t.artist;function l(t){t.select(".emo-band-hover-percent").style("display","block")}function p(t){t.select(".emo-band-hover-percent").style("display",null)}-1==r.indexOf(t.artist)&&(o=-1,s=-10),1==a?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[i]+8).attr("height",n[0]+4).attr("class",function(t){return-1==r.indexOf(c)?"rap-rect":"emo-rect"}).attr("x",function(t){return-1==r.indexOf(c)?s+o*e[i-1]+12*o-(e[i]+4):s+o*e[i-1]+12*o-4}).attr("y",function(t,e){return u(Math.round(150*+d)/150)-(n[i]/2+6)}).on("mouseover",function(t){l(d3.select(this.parentNode.parentNode))}).on("mouseout",function(t){p(d3.select(this.parentNode.parentNode))}),d3.select(this).attr("x",s+o*e[i-1]+12*o)):2==a?(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[i]+8).attr("height",n[0]+4).attr("class",function(t){return-1==r.indexOf(c)?"rap-rect":"emo-rect"}).attr("x",function(t){return-1==r.indexOf(c)?s+o*(e[i-1]+e[i-2])+12*o*2-(e[i]+4):s+o*(e[i-1]+e[i-2])+12*o*2}).attr("y",function(t,e){return u(Math.round(150*+d)/150)-(n[i]/2+6)}).on("mouseover",function(t){l(d3.select(this.parentNode.parentNode))}).on("mouseout",function(t){p(d3.select(this.parentNode.parentNode))}),d3.select(this).attr("x",s+o*(e[i-1]+e[i-2])+12*o*2)):(d3.select(this.parentNode).select(".rect-g").append("rect").attr("width",e[i]+8).attr("height",n[0]+4).attr("class",function(t){return-1==r.indexOf(c)?"rap-rect":"emo-rect"}).attr("x",function(t){return-1==r.indexOf(c)?s-(e[i]+4):s-4}).attr("y",function(t,e){return u(Math.round(150*+d)/150)-(n[i]/2+6)}).on("mouseover",function(t){l(d3.select(this.parentNode.parentNode))}).on("mouseout",function(t){p(d3.select(this.parentNode.parentNode))}),d3.select(this).attr("x",s))})}),h.append("text").attr("x",0).attr("y",-20).attr("class","axis-text").selectAll("tspan").data(["Most Sad","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),h.append("text").attr("x",0).attr("y",615).attr("class","axis-text").selectAll("tspan").data(["Least Sad","Lyrics"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?12:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),h.append("text").attr("x",0).attr("y",4).attr("class","axis-percent").selectAll("tspan").data([Math.round(19)+"%","Sad"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?17:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t}),h.append("text").attr("x",0).attr("y",583).attr("class","axis-percent").style("alignment-baseline","text-after-edge").style("dominant-baseline","text-after-edge").selectAll("tspan").data([Math.round(3)+"%","Sad"]).enter().append("tspan").attr("dy",function(t,e){return 1==e?15:0}).attr("x",12.5).attr("text-anchor","middle").text(function(t){return t});var y=h.append("text").attr("x",35).attr("y",0).attr("class","axis-head emo-head").text("Emo Bands (third wave, 00s - 10s)"),g=h.append("text").attr("x",-10).attr("y",0).attr("class","axis-head hip-hop-head").text("Emo-Hip Hop").attr("text-anchor","end");h.append("line").attr("x1",35).attr("x2",y.node().getBBox().width+10+25+10).attr("y1",5).attr("y2",5).attr("class","axis-head-line"),h.append("line").attr("x1",-10).attr("x2",-g.node().getBBox().width-10-10).attr("y1",5).attr("y2",5).attr("class","axis-head-line");var b=0,v=d3.scaleQuantize().domain([0,1]).range(d3.range(9));new ScrollMagic.Scene({triggerElement:"#trigger",duration:u(Math.round(7.223571428571429)/150)-u(Math.round(150*d3.max(e,function(t){return+t.percents}))/150),triggerHook:.5}).setPin("#trigger",{pushFollowers:!1}).addTo(t).on("progress",function(t){var e=Math.round(100*t.progress)/100;e!=b&&(b=e),d.style("background-position-x",30.375*v(b)-243+"px"),console.log()})})},resize:function(){}}}]);