/* global d3 */

function resize() {}

function init() {
	const data = d3.csv("assets/data/df.csv")
	console.log(data);
	console.log("jere");

}

export default { init, resize };
