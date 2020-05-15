import React from "react";
import Screen from "./Screen";

function Buttons(props) {
	let {
		multiply,
		display,
		add,
		reset,
		subtract,
		divide,
		input,
		o,
		square,
		sqrt,
		money,
		sym
	} = props;
	return (
		<div className="container-fluid" id="calculator">
			<div className="container-fluid text-center" id="buttons">
				<Screen display={display} sym={sym} />
				<div className="container-fluid" id="buttonsRow0">
					<button className="btn btn-dark m-1" onClick={square}>
						x&sup2;
					</button>
					<button className="btn btn-dark m-1" onClick={sqrt}>
						√
					</button>
					<button className="btn btn-dark m-1" onClick={money}>
						$
					</button>
					<button className="btn btn-dark m-1" onClick={reset}>
						C
					</button>
				</div>
				<div className="container-fluid" id="buttonsRow1">
					<button className="btn btn-dark m-1" onClick={input} value="7">
						7
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="8">
						8
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="9">
						9
					</button>
					<button className="btn btn-dark m-1" onClick={divide}>
						÷
					</button>
				</div>
				<div className="container-fluid" id="buttonsRow2">
					<button className="btn btn-dark m-1" onClick={input} value="4">
						4
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="5">
						5
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="6">
						6
					</button>
					<button className="btn btn-dark m-1" onClick={multiply}>
						x
					</button>
				</div>
				<div className="container-fluid" id="buttonsRow3">
					<button className="btn btn-dark m-1" onClick={input} value="1">
						1
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="2">
						2
					</button>
					<button className="btn btn-dark m-1" onClick={input} value="3">
						3
					</button>
					<button className="btn btn-dark m-1" onClick={subtract}>
						-
					</button>
				</div>
				<div className="container-fluid" id="buttonsRow4">
					<button className="btn btn-dark m-1" onClick={input} value="0">
						0
					</button>
					<button className="btn btn-dark m-1" onClick={input} value=".">
						.
					</button>
					<button className="btn btn-dark m-1" onClick={o}>
						=
					</button>
					<button className="btn btn-dark m-1" onClick={add}>
						+
					</button>
				</div>
			</div>
		</div>
	);
}

export default Buttons;
