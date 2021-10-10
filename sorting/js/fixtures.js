const speeds = [
	{
		label: 'fastest',
		ms: 2
	},
	{
		label: 'faster',
		ms: 25
	},
	{
		label: 'fast',
		ms: 250
	},
	{
		label: 'slow',
		ms: 500
	},
	{
		label: 'slower',
		ms: 1000 
	},
	{
		label: 'slowest',
		ms: 2000 
	},
]
let speedSelection = 2
function buildSelector(){
	const selectElement = document.querySelector('#demo-speed');
	selectElement.innerHTML = ``
	for(const index in speeds){
		const { label, ms } = speeds[index]
		const opt = document.createElement('option')
		opt.setAttribute('value', index)
		opt.innerText = label
		if(speeds[speedSelection].ms === ms){
			opt.setAttribute('selected', true)
		}
		selectElement.appendChild(opt)
	}
}
const sleep = ms => new Promise((res, rej) => {
	setTimeout(() => res('slept'), ms)
}) 

