const deck = shuffleDeck()
let dragLeaveHandlerIndex
let dragOverHandlerIndex
let dragStartHandlerIndex
let dropHandlerIndex 

function dragEndHandler({}){
	clearDragZone()
}
function dropHandler({target}){
	event.preventDefault();
	const { id, className } = target
	if(id){
		clearDragZone()
		makeSwap(dragStartHandlerIndex, Number(id))
	}
}
function dragLeaveHandler({target}){
	const { id, className } = target
	if(id){
		event.preventDefault();
		if(dragLeaveHandlerIndex === undefined){
			dragLeaveHandlerIndex = Number(id)
			return
		}
		if(Number(id) !== Number(dragLeaveHandlerIndex)){
			dragLeaveHandlerIndex = Number(id) 
		}
	}
}
function dragOverHandler({target}){
	const { id } = target
	if(id){
		event.preventDefault();
		if(dragOverHandlerIndex === undefined){
			dragOverHandlerIndex = Number(id)
			clearDragZone()
			target.className = `${target.className} drag-zone`
		}
		if(Number(id) !== Number(dragOverHandlerIndex)){
			dragOverHandlerIndex =  undefined
		}
	}
}
function dragStartHandler({target}){
	const { id } = target
	event.preventDefault();
	if(id && id !== dragStartHandlerIndex){
		dragStartHandlerIndex = Number(id)
	}
}
function clearDragZone(){
	const zoned = document.querySelector('.drag-zone')
	if(!zoned) return
	const [ divType, suit ] = zoned.className.split(' ')
	zoned.setAttribute('class', `${divType} ${suit}`)
}

