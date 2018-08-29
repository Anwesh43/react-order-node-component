class MainAnimator {
	constructor() {
		this.cbs = []  
	}

	start(cb) {
		if (this.cbs.length == 0) {
			this.interval = setInterval(() => {
				this.cbs.forEach((cb) => {
					if (cb()) {
						this.cbs.splice(0, 1)
						if (this.cbs.length == 0) {
							clearInterval(this.interval)
						}
					}
				})
			})
		}
		this.cbs.push(cb)
	}
}
const mainAnimator = new MainAnimator()
export {mainAnimator}