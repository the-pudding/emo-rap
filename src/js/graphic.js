/* global d3 */

function resize() {}

function init() {

	var controller = new ScrollMagic.Controller();

	const dataUploaded = d3.csv("assets/data/df.csv",function(data){

	const emoBands = ["dashboard","radiohead","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","brandnew"];

  const crossWalk = {
	  "dashboard": {
		  "artist": "Dashboard Confessional",
  		"album": "TPYHCtFtM"
	  },
    "radiohead": {
		  "artist": "Radiohead",
  		"album": "High and Dry"
	  },
    "takingback": {
		  "artist": "Taking Back Sunday",
  		"album": "Tell All Your Friends"
	  },
    "chemicalromance": {
		  "artist": "My Chemical Romance",
  		"album": "Three Cheers..."
	  },
    "fall out boy": {
		  "artist": "Fall Out Boy",
  		"album": "From Under the Cork Tree"
	  },
    "jimmyeatworld": {
		  "artist": "Jimmy Eat World",
  		"album": "Bleed American"
	  },
    "brandnew": {
		  "artist": "Brand New",
  		"album": "Deja Entendu"
	  },
    "paramore": {
		  "artist": "Paramore",
  		"album": "Riot"
	  },
    "xxxtentacion": {
		  "artist": "XXXTentacion",
  		"album": "?"
	  },
     "liluzivert": {
		  "artist": "Lil Uzi Vert",
  		"album": "Luv is Rage 2"
	  },
    "juicewrld": {
		  "artist": "Juice Wrld",
  		"album": "Goodbye & Good Riddance"
	  },
    "lilpeep": {
		  "artist": "Lil Peep",
  		"album": "Come Over When You're Sober"
	  },
    "postmalone": {
		  "artist": "Post Malone",
  		"album": "Beerbongs & Bentleys"
	  },
    "drake": {
		  "artist": "Drake",
  		"album": "Scorpion"
	  },
    "kanye college_dropout": {
		  "artist": "Kanye",
  		"album": "College Dropout"
	  },
    "kanye ye": {
		  "artist": "Kanye",
  		"album": "Ye"
	  },
    "migos": {
		  "artist": "Migos",
  		"album": "Culture"
	  },
    "lilpump": {
		  "artist": "Lil Pump",
  		"album": "Lil Pump"
	  },
    "kanye heartbreak": {
		  "artist": "Kanye",
  		"album": "808s"
	  },
    "tyler": {
		  "artist": "Tyler the Creator",
  		"album": "Flower Boy"
	  },
    "kidcudi": {
		  "artist": "Kid Cudi",
  		"album": "Man on the Moon"
	  },
    "deathgrips": {
		  "artist": "Death Grips",
  		"album": "The Money Store"
	  },
    "princess_red": {
		  "artist": "Princess Nokia",
  		"album": "A Girl Cried Red"
	  },
    "tripple_trip": {
		  "artist": "Trippie Redd",
  		"album": "Life's a Trip"
	  },
    "yung_lean": {
		  "artist": "Yung Lean",
  		"album": "Stranger"
	  },
    "nothing_reaper": {
		  "artist": "nothing,nowhere",
  		"album": "Reaper"
	  },
    "nothing_ruiner": {
		  "artist": "nothing,nowhere",
  		"album": "Ruiner"
	  },
    "lilxan": {
		  "artist": "Lil Xan",
  		"album": "Reaper"
	  },
    "rico nasty": {
		  "artist": "Rico Nasty",
  		"album": "Nasty"
	  },
    "young thug": {
		  "artist": "Young Thug",
  		"album": "Beautiful Thugger Girls"
	  }
	}


	const margin = {"top":100,"bottom":0,"left":0,"right":0};
	const width = 960-margin.left-margin.top;
	const height = 700-margin.top-margin.bottom;
	const container = d3.select(".emo-index");

  const svg = container.append("svg")
			.attr("width", width+margin.left+margin.right)
			.attr("height", height+margin.bottom+margin.top)
			.style("width", width+margin.left+margin.right+"px")
			.style("height", height+margin.bottom+margin.top+"px")
			;

	let rectWidth = 25
	let maxAmount = .19
	let minAmount = .03
	var roundAmount = 150

  const yScale = d3.scaleLinear().domain([minAmount,maxAmount]).range([height,0]);

	const faceDiv = container.append("div")
		.attr("class","face-div")
		.style("width", width+margin.left+margin.right+"px")
		.style("height", height+margin.bottom+margin.top+"px")
		.style("margin-top",margin.top+"px")
		;

	let faceImage = faceDiv.append("div")
		.attr("class","face-container")
		.append("div")
		.attr("class","face-img")
		.attr("id","trigger")
		.style("width",function(d){
			return rectWidth+5+"px"
		})
		.style("height",(+rectWidth+5)+"px")
		.style("background-position-x","-243px")
		.style("top",function(d){
			var spacing = yScale(Math.round(d3.max(data,function(d){return +d.percents;})*roundAmount)/roundAmount)+"px";
			return spacing;
		})
		.style("transform","translate(0,calc(-50% - 4px))")
		;

  const toRemove = ["nothing_ruiner","deathgrips"];
  let dataFiltered = data
		.filter(function(d){ return toRemove.indexOf(d.artist) == -1})
		;


	let dataNested = d3.nest()
		.key(function(d){
			if(emoBands.indexOf(d.artist) == -1){
				return "hiphop";
			}
			return "emo"
		})
		.key(function(d){

			return Math.round(+d.percents*roundAmount)/roundAmount;
		})
		.entries(dataFiltered)
		;


  let g = svg
		.append("g")
		.attr("transform","translate("+margin.left+","+margin.top+")")
		.append("g")
		.attr("transform","translate("+(width/2 - rectWidth/2)+",0)")
		;


	g.append("rect")
		.attr("width",rectWidth)
		.attr("height",height)
		.attr("class","emo-index-axis")
		.attr("x",0)
		.attr("y",0)
		;

	var axisText = g.append("g");

	const percentGs = g.append("g")
		.selectAll("g")
		.data(dataNested)
		.enter()
		.append("g")
    .selectAll("g")
		.data(function(d){
			return d.values;
		})
    .enter()
    .append("g")
		;

	const rectG = percentGs
		.append("g")
		.attr("class","rect-g")
		;

	const textElements = percentGs
		.selectAll("text")
		.data(function(d){
			return d.values
		})
		.enter()
		.append("text")
		.attr("class",function(d){
			if(emoBands.indexOf(d.artist) == -1){
				return "hip-hop-artist emo-index-band";
			}
			return "emo-artist emo-index-band";
		})
    .attr("y",function(d,i){
      return yScale(Math.round(+d.percents*roundAmount)/roundAmount);
    })
    .style("text-anchor",function(d){
      if(emoBands.indexOf(d.artist) == -1){
        return "end";
      }
      return "start";
    })
    ;

  textElements.append("tspan").attr("class",function(d){
			 var artistInfo = crossWalk[d.artist]
			 if(emoBands.indexOf(d.artist) == -1){
				 return "album-index";
			 }
			 return "artist-index";
		})
    .text(function(d,i){
      var artistInfo = crossWalk[d.artist]
      if(emoBands.indexOf(d.artist) == -1){
        return artistInfo["album"];
      }
      return artistInfo["artist"];
    })
    ;

	textElements.append("tspan")
		.attr("class",function(d){
			var artistInfo = crossWalk[d.artist]
			if(emoBands.indexOf(d.artist) == -1){
				return "artist-index";
			}
			return "album-index";
		})
		.attr("dx",function(d){
			return "3"
		})
		.text(function(d,i){
			var artistInfo = crossWalk[d.artist]
			if(emoBands.indexOf(d.artist) == -1){
				return artistInfo["artist"];
			}
			return artistInfo["album"];
		})
		;

	percentGs
		// .filter(function(d){
		// 	return emoBands.indexOf(d.values[0].artist) > -1
		// })
		.append("g")
		.append("text")
		.attr("class","emo-band-hover-percent")
		.attr("x",rectWidth/2)
		.attr("y",function(d,i){
			return yScale(Math.round(+d.key*roundAmount)/roundAmount);
		})
		.text(function(d){
			return Math.round(d.key*100)+"%";
		})
		;

	percentGs
		.each(function(d){
			var arrayOffset = [];
			var arrayHeight = [];
			d3.select(this).selectAll(".emo-index-band").each(function(d){
				arrayOffset.push(d3.select(this).node().getBBox().width);
				arrayHeight.push(d3.select(this).node().getBBox().height);
			});

			d.offsetAmount = arrayOffset;

			d3.select(this).selectAll(".emo-index-band").each(function(d,i){
				var count = i;
				var direction = 1;
				var offsetRect = rectWidth+10
				var additionalSpacing = 12;
				var percents = d.percents;
				var artist = d.artist;
				if(emoBands.indexOf(d.artist) == -1){
					direction = -1;
					var offsetRect = -10
				}
				if(i==1){

					d3.select(this.parentNode)
						.select(".rect-g")
						.append("rect")
						.attr("width",arrayOffset[count]+8)
						.attr("height",arrayHeight[0]+4)
						.attr("class",function(d){
							if(emoBands.indexOf(artist) == -1){
								return "rap-rect"
							}
							return "emo-rect"
						})
						.attr("x",function(d){
							if(emoBands.indexOf(artist) == -1){
								return (offsetRect+direction*arrayOffset[count-1]+additionalSpacing*direction)-(arrayOffset[count]+4)
							}
							return offsetRect+direction*arrayOffset[count-1]+additionalSpacing*direction-4
						})
						.attr("y",function(d,i){
							return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 6);
						})
						.on("mouseover",function(d){
							showPercent(d3.select(this.parentNode.parentNode))
						})
						.on("mouseout",function(d){
							hidePercent(d3.select(this.parentNode.parentNode))
						})
						;

					d3.select(this).attr("x",offsetRect+direction*arrayOffset[count-1]+additionalSpacing*direction)
				}
				else if(i==2){

					d3.select(this.parentNode)
						.select(".rect-g")
						.append("rect")
						.attr("width",arrayOffset[count]+8)
						.attr("height",arrayHeight[0]+4)
						.attr("class",function(d){
							if(emoBands.indexOf(artist) == -1){
								return "rap-rect"
							}
							return "emo-rect"
						})
						.attr("x",function(d){
							if(emoBands.indexOf(artist) == -1){
								return (offsetRect+direction*(arrayOffset[count-1]+arrayOffset[count-2])+additionalSpacing*direction*2)-(arrayOffset[count]+4)
							}
							return offsetRect+direction*(arrayOffset[count-1]+arrayOffset[count-2])+additionalSpacing*direction*2
						})
						.attr("y",function(d,i){
							return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 6);
						})
						.on("mouseover",function(d){
							showPercent(d3.select(this.parentNode.parentNode))
						})
						.on("mouseout",function(d){
							hidePercent(d3.select(this.parentNode.parentNode))
						})
						;

					d3.select(this).attr("x",offsetRect+direction*(arrayOffset[count-1]+arrayOffset[count-2])+additionalSpacing*direction*2)
				}
				else{

					d3.select(this.parentNode)
						.select(".rect-g")
						.append("rect")
						.attr("width",arrayOffset[count]+8)
						.attr("height",arrayHeight[0]+4)
						.attr("class",function(d){
							if(emoBands.indexOf(artist) == -1){
								return "rap-rect"
							}
							return "emo-rect"
						})
						.attr("x",function(d){
							if(emoBands.indexOf(artist) == -1){
								return (offsetRect)-(arrayOffset[count]+4)
							}
							return offsetRect-4
						})
						.attr("y",function(d,i){
							return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 6);
						})
						.on("mouseover",function(d){
							showPercent(d3.select(this.parentNode.parentNode))
						})
						.on("mouseout",function(d){
							hidePercent(d3.select(this.parentNode.parentNode))
						})
						;


					d3.select(this).attr("x",offsetRect);
				}

				function showPercent(element){
					element.select(".emo-band-hover-percent").style("display","block");
				}
				function hidePercent(element){
					element.select(".emo-band-hover-percent").style("display",null);
				}

			});
		})
		// .attr("x",function(d,i){
		// 	console.log(d);
		// 	var count = i;
		// 	if(emoBands.indexOf(d.artist) == -1){
		// 		return -10 - i*50;
		// 	}
		// 	return rectWidth + 10 + i*50;
		// })
		;

	axisText
		.append("text")
		.attr("x",0)
		.attr("y",-20)
		.attr("class","axis-text")
		.selectAll("tspan")
		.data(["Most Sad","Lyrics"])
		.enter()
		.append("tspan")
		.attr("dy",function(d,i){
			if(i==1){
				return 12;
			}
			return 0;
		})
		.attr("x",rectWidth/2)
		.attr("text-anchor","middle")
		.text(function(d){
			return d;
		})
		;

	axisText
		.append("text")
		.attr("x",0)
		.attr("y",height+15)
		.attr("class","axis-text")
		.selectAll("tspan")
		.data(["Least Sad","Lyrics"])
		.enter()
		.append("tspan")
		.attr("dy",function(d,i){
			if(i==1){
				return 12;
			}
			return 0;
		})
		.attr("x",rectWidth/2)
		.attr("text-anchor","middle")
		.text(function(d){
			return d;
		})
		;

	var maxSad = axisText
		.append("text")
		.attr("x",0)
		.attr("y",4)
		.attr("class","axis-percent")

	maxSad
		.selectAll("tspan")
		.data([Math.round(maxAmount*100)+"%","Sad"])
		.enter()
		.append("tspan")
		.attr("dy",function(d,i){
			if(i==1){
				return 17;
			}
			return 0;
		})
		.attr("x",rectWidth/2)
		.attr("text-anchor","middle")
		.text(function(d){
			return d;
		})
		;

	axisText
		.append("text")
		.attr("x",0)
		.attr("y",height-17)
		.attr("class","axis-percent")
		.style("alignment-baseline","text-after-edge")
		.style("dominant-baseline","text-after-edge")
		.selectAll("tspan")
		.data([Math.round(minAmount*100)+"%","Sad"])
		.enter()
		.append("tspan")
		.attr("dy",function(d,i){
			if(i==1){
				return 15;
			}
			return 0;
		})
		.attr("x",rectWidth/2)
		.attr("text-anchor","middle")
		.text(function(d){
			return d;
		})
		;

	var emoHeadText = axisText
		.append("text")
		.attr("x",rectWidth+10)
		.attr("y",0)
		.attr("class","axis-head emo-head")
		.text("Emo Bands (third wave, 00s - 10s)")
		;

	var hipHopText = axisText
		.append("text")
		.attr("x",-10)
		.attr("y",0)
		.attr("class","axis-head hip-hop-head")
		.text("Emo-Hip Hop")
		.attr("text-anchor","end")
		;

	axisText
		.append("line")
		.attr("x1",rectWidth+10)
		.attr("x2", emoHeadText.node().getBBox().width+10+rectWidth+10)
		.attr("y1",5)
		.attr("y2",5)
		.attr("class","axis-head-line")
		;

	axisText
		.append("line")
		.attr("x1",-10)
		.attr("x2", -hipHopText.node().getBBox().width-10-(10))
		.attr("y1",5)
		.attr("y2",5)
		.attr("class","axis-head-line")
		;

	var element = "#trigger"
	var progress = 0;
	var scaleFaces = d3.scaleQuantize().domain([0,1]).range(d3.range(9));
	var scene = new ScrollMagic.Scene({
			triggerElement: element
			,duration: yScale(Math.round(.04815714285714286*roundAmount)/roundAmount) - yScale(Math.round(d3.max(data,function(d){return +d.percents;})*roundAmount)/roundAmount)
			,triggerHook:.5
		})
		.setPin(element, {pushFollowers: false})
		// .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)
		.on("progress",function(e){
			var progressOnScroll = Math.round(e.progress*100)/100;
			if(progressOnScroll != progress){
				progress = progressOnScroll
			}
			faceImage
				.style("background-position-x",(-243+(scaleFaces(progress))*30.375)+"px")

			console.log();

		})
		;


	});

}

export default { init, resize };
