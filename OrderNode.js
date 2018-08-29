import React, {Component} from 'react'
import {mainAnimator} from './MainAnimator'
const w = window.innerWidth, h = window.innerHeight 

class StateProp {
	constructor() {
		this.scale = 0
		this.dir = 0
		this.prevScale = 0
	}	

	update(updatecb) {
		this.scale += 0.1 * this.dir 
		updatecb(this.scale)
		if (Math.abs(this.scale - this.prevScale) > 1) {
			this.scale = this.prevScale + this.dir 
			this.dir = 0
			this.prevScale = this.scale
			return true 
		}
		return false
	}

	startUpdating(cb) {
		if (this.dir == 0) {
			this.dir = 1 - 2 * this.scale
			cb()
		}
	}
}

export default class OrderNode extends Component {
	constructor(props) {
		super(props)
		this.sProp = new StateProp()
		this.state = {size : Math.min(w, h)/20, x : this.props.i * Math.min(w, h) / 5}
	}

	handleClick() {
		const origX = this.props.i * Math.min(w, h) / 5
		const gap = Math.min(w, h) / 5
		this.sProp.startUpdating(() => {
			mainAnimator.start(() => {
				return this.sProp.update((sc) => {
					this.setState({x : origX + gap * sc})
				})	
			})
		})
	}

	render() {
		console.log(this)
		console.log(this.props.x)
		return <div ref="d1" onClick={this.handleClick.bind(this)}>
					<div style={{width:this.state.size, height : this.state.size, borderRadius:"50%", background:'#303F9F', position:'absolute', transform : `translateX(${this.state.x})translateY(${h/2})`}}>
					</div>
			   </div>
	}
}