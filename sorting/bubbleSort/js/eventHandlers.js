const deck = shuffleDeck()
let dragLeaveHandlerIndex
let dragOverHandlerIndex
let dragStartHandlerIndex
let dropHandlerIndex 

function dropHandler(event){
	event.preventDefault();
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
			console.log(dragLeaveHandlerIndex, id, "<---- drag leave handler")
			dragLeaveHandlerIndex = Number(id) 
		}
	}
}
function clearDragZone(){
	const zoned = document.querySelector('.drag-zone')
	if(!zoned) return
	const [ divType, suit ] = zoned.className.split(' ')
	zoned.setAttribute('class', `${divType} ${suit}`)
}
function dragOverHandler({target}){
	const { id } = target
	if(id){
		event.preventDefault();
		if(dragOverHandlerIndex === undefined){
			dragOverHandlerIndex = Number(id)
			clearDragZone()
			target.className = `${target.className} drag-zone`
			console.log(
				dragOverHandlerIndex, "\n<---- drag over handler", 
				dragLeaveHandlerIndex, "\n<---- drag leave handler"
			)
		}
		if(Number(id) !== Number(dragOverHandlerIndex)){
			console.log(dragOverHandlerIndex, "<---- drag over handler")
			dragOverHandlerIndex =  undefined
		}
	}
}
function dragStartHandler({target}){
	const { id } = target
	event.preventDefault();
	if(id !== dragStartHandlerIndex){
		dragStartHandlerIndex = id
	}
	if(id === dragStartHandlerIndex){
		dragStartHandlerIndex = undefined 
	}
}

