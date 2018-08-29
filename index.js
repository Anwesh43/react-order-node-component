import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import OrderNode from './OrderNode'
// class DemoComponent extends Component {
	
// 	constructor(props) {
// 		super(props)
// 		this.state = {i : 0}
// 	}

// 	componentDidMount(){
// 		this.interval = setInterval(() => {
// 			const i = this.state.i + 1
// 			this.setState({i})
// 		}, 1000)
// 	}
// 	componentWillUnmount() {

// 	}
// 	render() {
// 		return <div>
// 					{this.state.i}
// 				</div>
// 	}
// }

class OrdersComponent extends Component {
	constructor(props) {
		super(props)
	} 

	render() {
		const numArray = [0, 1, 2, 3, 4]
		return (<div>
			<OrderNode i = {0}/>
		</div>)
	}
}

ReactDOM.render(<OrdersComponent/>, document.getElementById('container'))