import React from "react";

function Screen(props) {
	let style = {
		display: "none"
	};
	if (props.sym) {
		style.display = "inline";
	}

	return (
		<div className="container-fluid" id="screen1">
			<p className="text-light" id="logo">
				MathGenie 3000
			</p>
			<div className="container-fluid " id="screen2">
				<i style={style} id="sym">
					$
				</i>
				<h1 id="d">
					{/*Format final output */}
					{(() => {
						if (props.sym) {
							if (props.display.toString().length > 8) {
								return Number(props.display.toFixed(2)).toPrecision(8);
							}
							return Number(props.display).toFixed(2);
						} else if (props.display.toString().length > 8) {
							return Number(props.display).toPrecision(8);
						} else {
							return props.display;
						}
					})()}
				</h1>
			</div>
		</div>
	);
}

export default Screen;
