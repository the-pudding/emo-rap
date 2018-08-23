/* global d3 */

function resize() {}

function init() {

	var lucidDreamsAudio = document.getElementById("lucid-dreams");

	var audioControls = d3.select(".audio-controls")

	var scaleTime = d3.scaleThreshold().domain([0,3,5.8,8.45,12.34,15,18,20.6,100]).range([0,1,2,3,4,5,6,7,8,9]);

	var lucidLines = d3.select(".verses").selectAll("p");
	var timerObject;

	audioControls.on("click",function(d){
		if(lucidDreamsAudio.paused){
			lucidDreamsAudio.play();
			audioControls.select(".volume-on").style("display","none");
			audioControls.select(".volume-off").style("display","block");
			audioControls.select(".play-text").text("Pause");
			d3.select(".verses").classed("playing",true);
			timerObject = d3.timer(function(elapsed) {

				var rows = scaleTime(lucidDreamsAudio.currentTime)-1;
				lucidLines.style("color",function(d,i){
					var row = i
					if(rows == -1){
						return null
					}
					if(rows == row){
						d3.select(this).classed("show-face",true);
						if(rows == 7){
							d3.select(this).select(".verse-face").style("background-position-x","-243px");
						}
						else{
							d3.select(this).select(".verse-face").style("background-position-x",-243+((8-rows)*30.375)+"px");
						}


					}
					else{
						d3.select(this).classed("show-face",false);
					}
					if(rows >= row){
						return null
					}
					return "#dfdfdf"
				})
  			if (lucidDreamsAudio.currentTime > 22.8){
					timerObject.stop()
					d3.select(".verses").classed("playing",false);
					audioControls.select(".volume-on").style("display","block");
					audioControls.select(".volume-off").style("display","none");
					audioControls.select(".play-text").text("Play");
					lucidLines.style("color",null);
				};
			}, 150);

		}
		else{
			lucidDreamsAudio.pause();
			audioControls.select(".volume-on").style("display","block");
			audioControls.select(".volume-off").style("display","none");
			audioControls.select(".play-text").text("Play");
			timerObject.stop()
			d3.select(".verses").classed("playing",false);
			lucidLines.style("color",null);
		}
	})

	var rightCol = d3.select(".right-col");

	var trackLines = [
		"I don&rsquo;t really care if you cry",
		"On the real, you shoulda never lied",
		"Shoulda saw the way she looked me in my eyes",
		"She said, Baby, I am not afraid to die",
		"Push me to the edge",
		"All my friends are dead"
	];

	rightCol.append("p")
		.attr("class","track-name")
		.append("span")
		.text("Lil Uzi Vert - XO Tour Llif3");

	var wordList = ["care","cry","real","lied","looked","eyes","baby","afraid","die","Push","edge","friends","dead"];
	var sadWords = ["cry","die","afraid","die","dead"];

	rightCol.append("div")
		.attr("class","track-content")
		.selectAll("p")
		.data(trackLines)
		.enter()
		.append("p")
		.attr("class","track-line")
		.selectAll("span")
		.data(function(d){
			return d.split(" ");
		})
		.enter()
		.append("span")
		.attr("class","track-word")
		.classed("big-word",function(d){
			if(wordList.indexOf(d) > -1){
				return true
			}
			return false;
		})
		.classed("sad-word",function(d){
			if(sadWords.indexOf(d) > -1){
				return true
			}
			return false;
		})
		.html(function(d){
			return d;
		});

	var results = rightCol.append("div")
		.attr("class","results")

	results.append("p")
		.attr("class","percent")
		.html(function(){
			return "<span>38%</span> sad"
		})

	results.append("p")
		.attr("class","break-down")
		.html(function(){
			return "<span>5 sad words</span> of <b>13</b> total words"
		})



	var controller = new ScrollMagic.Controller();

	const dataUploaded = d3.csv("assets/data/df.csv",function(data){
		const tracksUploaded = d3.csv("assets/data/tracks.csv",function(trackData){

			const toRemove = ["nothing_ruiner","deathgrips"];


			let topTracks = trackData.sort(function(a,b){
				return +b.pct_sad - +a.pct_sad;
			})
			.filter(function(d){
				return toRemove.indexOf(d.artist) == -1
			})
			;

			let tracksByArtist = d3.map(d3.nest().key(function(d){ return d.artist; })
				.entries(topTracks),function(d){return d.key});

			console.log(topTracks);




			const emoBands = ["black_parade","dashboard","radiohead","takingback","chemicalromance","fall out boy","jimmyeatworld","paramore","brandnew"];

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
				"black_parade": {
					"artist": "My Chemical Romance",
					"album": "The Black Parade"
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
				"where_you": {
					"artist": "Taking Back Sunday",
					"album": "Where You Want To Be"
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

			const margin = {"top":50,"bottom":0,"left":0,"right":0};
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
			let rectWidthGap = 14;
			let maxAmount = .22
			let minAmount = .01
			var roundAmount = 150

		  const yScale = d3.scaleLinear().domain([minAmount,maxAmount]).range([height,0]);

			const faceDiv = container.append("div")
				.attr("class","face-div")
				.style("width", width+margin.left+margin.right+"px")
				.style("height", height+margin.bottom+margin.top+"px")
				.style("margin-top",margin.top+"px")
				;

			let toolTipEmoIndex = faceDiv.append("div").attr("class","tool-tip");

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
						var offsetRect = rectWidth+rectWidthGap
						var additionalSpacing = 12;
						var percents = d.percents;
						var artist = d.artist;
						if(emoBands.indexOf(d.artist) == -1){
							direction = -1;
							var offsetRect = -rectWidthGap
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
									return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 7);
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
									return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 7);
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
								// .style("visibility",function(d){
								// 	if(artist == "dashboard" || artist == "juicewrld"){
								// 		return "visible"
								// 	}
								// 	return "hidden"
								// })
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
									return yScale(Math.round(+percents*roundAmount)/roundAmount) - (arrayHeight[count]/2 + 7);
								})
								;

							d3.select(this).attr("x",offsetRect);
						}

						function showPercent(element,artist,percent){

							toolTipEmoIndex.style("display","block").selectAll("div").remove();
							toolTipEmoIndex.append("div")
								.attr("class","tool-tip-head")
								.html(function(d){
									return "<span>Track Sadness of</span> "+crossWalk[artist].album
								});

							var toolTipTracks = toolTipEmoIndex.selectAll(".tool-tip-track")
								.data(tracksByArtist.get(artist).values)
								.enter()
								.append("div")
								.attr("class","tool-tip-track")

							toolTipTracks
								.selectAll("div")
								.data(function(d){
									return [d.track_title, Math.round(d.pct_sad*100)+"%"];
								})
								.enter()
								.append("div")
								.attr("class",function(d,i){
									if(i==0){
										return "tool-tip-track-track"
									}
									return "tool-tip-track-percent"
								})
								.html(function(d,i){
									if(d.length > 30){
										return d.slice(0,27)+"..."
									}
									return d;
								})
								.style("color",function(d,i){
									if (i==1){
										if(emoBands.indexOf(artist) == -1){
											return "#18604F"
										}
										else{
											return "#28115A"
										}
									}
								})
								;

							toolTipTracks.filter(function(d,i){
									return i==0;
								})
								.selectAll("div")
								.each(function(d,i){
									if(i==1){
										var percent = d3.select(this).text();
										d3.select(this).html(percent+" <span>sad words</span>")
									}
								})
								;

							element.select(".emo-band-hover-percent").style("display","block");

							if(Math.round(progressMap(progress)*roundAmount)/roundAmount == Math.round(element.datum().key*roundAmount)/roundAmount){
								faceImage.style("visibility","hidden")
							}
						}
						function hidePercent(element,artist,percent){
							element.select(".emo-band-hover-percent").style("display",null);
							faceImage.style("visibility",null)
							toolTipEmoIndex.style("display","none");
						}


						d3.select(this.parentNode).select(".rect-g").selectAll("rect")
							.filter(function(d,i){
								return i==count
							})
							.on("mouseover",function(d){
								showPercent(d3.select(this.parentNode.parentNode),artist,percents)
							})
							.on("mouseout",function(d){
								hidePercent(d3.select(this.parentNode.parentNode),artist,percents)
							})
							.on("mousemove",function(d){
								var direction = 1;
								if(emoBands.indexOf(artist) == -1){
									direction = -1;
								}
								var offset = [25,25];

								var mousePosition = d3.mouse(this);
								toolTipEmoIndex.style("left",function(){
									return (direction*offset[0])+(width/2 - rectWidth/2)+mousePosition[0]+"px";
								})
								toolTipEmoIndex.style("top",offset[1]+mousePosition[1]+"px")
							})

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
				.attr("x",rectWidth+rectWidthGap)
				.attr("y",0)
				.attr("class","axis-head emo-head")
				.text("Emo Bands (third wave, ‘00s - ‘10s)")
				;

			var hipHopText = axisText
				.append("text")
				.attr("x",-rectWidthGap)
				.attr("y",0)
				.attr("class","axis-head hip-hop-head")
				.text("Emo-rap / Hip Hop")
				.attr("text-anchor","end")
				;

			axisText
				.append("line")
				.attr("x1",rectWidth+rectWidthGap)
				.attr("x2", emoHeadText.node().getBBox().width+rectWidthGap+rectWidth+rectWidthGap)
				.attr("y1",5)
				.attr("y2",5)
				.attr("class","axis-head-line")
				;

			axisText
				.append("line")
				.attr("x1",-rectWidthGap)
				.attr("x2", -hipHopText.node().getBBox().width-rectWidthGap-(rectWidthGap))
				.attr("y1",5)
				.attr("y2",5)
				.attr("class","axis-head-line")
				;

			var progressMap = d3.scaleLinear().domain([0,1]).range([d3.max(data,function(d){return +d.percents;}),.04815714285714286]);

			var element = "#trigger"
			var progress = 0;
			var scaleFaces = d3.scaleQuantize().domain([0,1]).range(d3.range(9));
			var faceText = faceImage.append("p")
				.attr("class","face-img-percent")
				.style("width",function(d){
					return rectWidth+5+"px"
				})
				.style("margin-top",rectWidth+5+"px")
				.text(function(){
					return Math.round(progressMap(progress)*100)+"%";
				})
				;

			var saddestSongsContainer = d3.select(".saddest-songs");
			saddestSongsContainer.selectAll("p")
				.data(topTracks.slice(0,50))
				.enter()
				.append("p")
				.attr("class",function(d){
					if(emoBands.indexOf(d.artist) == -1){
						return "saddest-song-track rap-top-song"
					}
					return "saddest-song-track emo-top-song"
				})

				.html(function(d,i){
					var artistInfo = crossWalk[d.artist]
					var suffix = "%"
					var trackTitle = d.track_title;
					if(trackTitle.length > 25){
						trackTitle = trackTitle.slice(0,22)+"..."
					}
					return "<span class='saddest-song-track-count'>"+(i+1)+".</span>"+artistInfo["artist"] +" - <span class='saddest-song-track-title'>"+trackTitle+"</span><span class='saddest-song-track-percent'>"+Math.round(d.pct_sad*100)+suffix+"</span>"
				});

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
						faceImage.style("background-position-x",(-243+(scaleFaces(progress))*30.375)+"px");
						faceText.text(function(){
							if(Math.round(progressMap(progress)*100) == 5){
								return "";
							}
							return Math.round(progressMap(progress)*100)+"%";
						})

					}

				})
				;
		});
	});

}

export default { init, resize };
