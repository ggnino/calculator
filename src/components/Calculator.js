import React, { Component } from "react";
import Buttons from "./Buttons";

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			num: false,
			input: [],
			operators: [],
			output: 0,
			count: 0,
			money: false
		};
	}
	// Money symbol toggle function
	money = () => {
		return this.setState({
			num: false,
			input: [this.state.output],
			operators: [...this.state.operators],
			output: this.state.output,
			count: this.state.count,
			money: !this.state.money
		});
	};
	// Number squared function
	squared = () => {
		if (this.state.count !== 0) {
			return this.setState({
				num: false,
				input: [this.state.output],
				operators: [...this.state.operators],
				output: Number(this.algo() * this.algo()),
				count: 0
			});
		}
		return this.setState({
			num: false,
			input: [this.state.output],
			operators: [...this.state.operators],
			output: Number(this.state.output * this.state.output),
			count: 0
		});
	};
	// Square root function
	sqrt = () => {
		let nora = 1;
		let resultado = 1;
		if (this.state.output === 0 || this.state.output === 1) {
			return this.setState({
				num: false,
				input: [this.state.output],
				operators: [...this.state.operators],
				output: this.state.output,
				count: 0
			});
		} else {
			while (resultado <= this.state.output) {
				nora++;
				resultado = nora * nora;
			}

			nora -= 1;
			return this.setState({
				num: false,
				input: [this.state.output],
				operators: [...this.state.operators],
				output: nora,
				count: 0
			});
		}
	};
	// Multiply function that resets both the output and the count
	// Saves user input and the operator used for later calculations
	multiply = () => {
		let x = "*";
		if (this.state.count !== 0) {
			return this.setState({
				num: true,
				input: [...this.state.input, Number(this.algo())],
				operators: [...this.state.operators, x],
				output: 0,
				count: 0
			});
		} else {
			return this.setState({
				num: true,
				input: [this.state.output],
				operators: [...this.state.operators, x],
				output: this.state.output,
				count: 0
			});
		}
	};
	// Division function that resets both the output and the count
	// Saves user input and the operator used for later calculations
	divide = () => {
		let d = "/";
		if (this.state.count !== 0) {
			return this.setState({
				num: true,
				input: [...this.state.input, Number(this.algo())],
				operators: [...this.state.operators, d],
				output: 0,
				count: 0
			});
		} else {
			return this.setState({
				num: true,
				input: [this.state.output],
				operators: [...this.state.operators, d],
				output: this.state.output,
				count: 0
			});
		}
	};
	// Addition function that resets both the output and the count
	// Saves user input and the operator used for later calculations
	add = () => {
		let a = "+";
		this.algo();
		if (this.state.count !== 0) {
			return this.setState({
				num: true,
				input: [...this.state.input, Number(this.algo())],
				operators: [...this.state.operators, a],
				output: 0,
				count: 0
			});
		} else {
			return this.setState({
				num: true,
				input: [this.state.output],
				operators: [...this.state.operators, a],
				output: this.state.output,
				count: 0
			});
		}
	};
	// Subtraction function that resets both the output and the count
	// Saves user input and the operator used for later calculations
	subtract = () => {
		console.log(this.algo());
		let s = "-";
		if (this.state.count !== 0) {
			return this.setState({
				num: true,
				input: [...this.state.input, Number(this.algo())],
				operators: [...this.state.operators, s],
				output: 0,
				count: 0
			});
		} else {
			return this.setState({
				num: true,
				input: [this.state.output],
				operators: [...this.state.operators, s],
				output: this.state.output,
				count: 0
			});
		}
	};
	// Reset function that resets the state completely
	reset = () => {
		console.log("SI Si");
		return this.setState({
			num: false,
			input: [],
			operators: [],
			output: 0,
			count: 0
		});
	};

	// Perform calculations based on user input that was saved
	// Iterates through the user input array and the operators array
	// Knowing which operation to perform correctly
	output = () => {
		let c = 0;
		let op = [...this.state.operators];
		console.log(this.state.num);
		console.log("Buffer: " + this.state.count);
		console.log("shifty: " + op.length);
		let sol = this.state.input[0];

		console.log("Initial Value: " + sol);
		console.log("Second Value: " + this.state.input[1]);
		console.log("Operator: " + op);
		console.log("arrLgth: " + this.state.input.length);

		for (let s = 1; s < this.state.input.length; s++) {
			for (c; c < op.length; c++) {
				if (op[c] === "*") {
					console.log("In Loop1");
					if (!Number.isInteger(this.state.input[s])) {
						sol *= Number(this.state.input[s]);
						break;
					}
					sol *= this.state.input[s];
					break;
				}
				if (op[c] === "+") {
					console.log("In Loop2: " + this.state.input[s]);
					if (!Number.isInteger(this.state.input[s])) {
						console.log("action");
						sol += Number(this.state.input[s]);
						break;
					}

					sol += this.state.input[s];
					break;
				}
				if (op[c] === "-") {
					console.log("In Loop3");
					if (!Number.isInteger(this.state.input[s])) {
						sol -= Number(this.state.input[s]);
						break;
					}
					sol -= this.state.input[s];
					break;
				}
				if (op[c] === "/") {
					console.log("In Loop4");
					if (!Number.isInteger(this.state.input[s])) {
						sol /= Number(this.state.input[s]);
						break;
					}
					sol /= this.state.input[s];
					break;
				}
			}
		}
		console.log("Final value: " + sol + "\nIsNumber: " + sol.toString().length);

		op.shift();

		return this.setState({
			num: false,
			input: [],
			operators: [...op],
			output: sol,
			count: this.state.count
		});
	};
	// Organizes user input for continous input and calculations
	o = () => {
		console.log("Cuando: " + this.state.count);
		console.log("TIPO: " + Number.isInteger(this.state.input[0]));
		console.log(
			"Value: " +
				this.state.input[0] +
				"\nIsNumber?: " +
				Number.isInteger(Number.parseInt(this.state.input[0]))
		);
		console.log(
			"Value: " +
				this.state.input[1] +
				"\nIsNumber?: " +
				Number.isInteger(Number.parseInt(this.state.input[1]).valueOf)
		);

		if (
			Number.isInteger(Number.parseInt(this.state.input[0])) &&
			Number.isInteger(Number.parseInt(this.state.input[1]))
		) {
			console.log("B$$$4: " + this.state.input.length);
			if (this.state.input.length >= 2 && this.state.operators.length > 1) {
				console.log("yoloy");
				return this.setState(
					{
						num: false,
						input: [...this.state.input, this.algo()],
						operators: [...this.state.operators],
						output: this.state.output,
						count: 0
					},
					() => this.output()
				);
			}

			let [, , ...x] = [...this.state.input];

			console.log("NEWNEW");
			console.log(x);
			return this.setState(
				{
					num: false,
					input: [...x, this.state.count],
					operators: [...this.state.operators],
					output: this.state.output,
					count: 0
				},
				() => this.output()
			);
		}
		return this.setState(
			{
				num: false,
				input: [...this.state.input, this.state.count],
				operators: [...this.state.operators],
				output: this.state.output,
				count: 0
			},
			() => this.output()
		);
	};
	// Returns user input
	algo = () => {
		console.log("Yala" + this.state.count);

		return this.state.count;
	};
	// Saves user input
	input = e => {
		let f = "";

		if (this.state.count === 0) {
			console.log("algo: " + e.target.value);
			if (e.target.value === ".") {
				f = e.target.value;
				if (this.state.input.length > 1) {
					console.log("sdsd");
					return this.setState(
						{
							num: false,
							input: [...this.state.input],
							operators: [...this.state.operators],
							output: this.state.output,
							count: f
						},
						() => console.log("Nino14 " + this.state.count)
					);
				}
				console.log("Nora");
				return this.setState(
					{
						num: false,
						input: [...this.state.input],
						operators: [...this.state.operators],
						output: this.state.output,
						count: this.state.count + f
					},
					() => console.log("Nino13 " + this.state.count)
				);
			}
			f = Number(this.state.count) + Number(e.target.value);
			console.log("kklklk" + f);

			if (this.state.output > 0 && this.state.operators.length > 1) {
				console.log("the shift");
				let arr = this.state.operators;
				arr.shift();
				return this.setState({
					num: false,
					input: [...this.state.input],
					operators: [...arr],
					output: this.state.output,
					count: f
				});
			} else if (this.state.output > 0 && this.state.input.length > 1) {
				console.log("nino");

				let arr = [...this.state.input];
				let op = [this.state.operators];
				op.shift();
				while (arr.length > 0) {
					console.log("Working");
					arr.shift();
				}
				console.log("Aqui");
				return this.setState({
					num: false,
					input: [...arr],
					operators: [...op],
					output: this.state.output,
					count: f
				});
			}
			console.log("Im Here");
			return this.setState({
				num: false,
				input: [...this.state.input],
				operators: [...this.state.operators],
				output: f,
				count: f
			});
		}

		f = e.target.value;
		console.log("hood");
		let op = [...this.state.operators];
		let arr = [...this.state.input];
		if (0 < f && this.state.operators.length > 1) {
			console.log("drake");
			while (op.length > 1) op.shift();
		}

		return this.setState(
			{
				num: false,
				input: [...this.state.input],
				operators: [...op],
				count: this.state.count + f,
				output: this.state.count + f
			},
			() => console.log("Nino12 " + this.state.count)
		);
	};

	render() {
		return (
			<div className="container-fluid mt-4">
				<Buttons
					multiply={this.multiply}
					add={this.add}
					subtract={this.subtract}
					divide={this.divide}
					output={this.output}
					display={this.state.output}
					reset={this.reset}
					input={this.input}
					o={this.o}
					square={this.squared}
					sqrt={this.sqrt}
					money={this.money}
					sym={this.state.money}
				/>
			</div>
		);
	}
}

export default Calculator;
