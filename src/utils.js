// RepeatedProperty: from node input, output, or property list
function getPortRect(RP, name){
	if(Blackprint.settings.windowless){ // Use fake data
		let temp = {bottom:90,height:90,left:90,right:90,top:90,width:90,x:90,y:90};
		Object.setPrototypeOf(temp, DOMRect.prototype);
		return temp;
	}

	let _list = RP._list;
	if(_list.getElement === void 0)
		console.error("It seems the JSON was imported when sketch view haven't been loaded");

	return _list.getElement(RP[name]).querySelector('.port').getBoundingClientRect();
}

// deepProperty(obj, path, value, onCreate)
let deepProperty = Blackprint._utils.deepProperty;

function deepCopy(target, source){
	for(var key in source){
		// Skip any character that contain $ or _
		// Because it's marked as private property
		if(key.includes('$') || key.includes('_'))
			continue;

		if(typeof source[key] === 'object'){
			if(source[key] instanceof Array)
				target[key] = [];
			else
				target[key] = {};

			deepCopy(target[key], source[key]);
			continue;
		}

		target[key] = source[key];
	}
}

function deepMerge(target, source){
	for(var key in source){
		// Skip any character that contain $ or _
		// Because it's marked as private property
		if(key.includes('$') || key.includes('_'))
			continue;

		if(typeof target[key] === 'object'){
			deepMerge(target[key], source[key]);
			continue;
		}

		target[key] = source[key];
	}
}

const isClass = Blackprint._utils.isClass;

function isTouchDevice(){
	return navigator.maxTouchPoints !== 0;
}

function createNodesMenu(list, sketch, ev, pos){
	var menu = [];
	var strArr = [];
	function deep(obj, target){
		for(var name in obj){
			let that = obj[name];
			if(that == null || that.hidden || that.disabled)
				continue;

			if(that.constructor === Function){
				target.push({
					title: name,
					args: [strArr.length !== 0 ? strArr.join('/')+'/'+name : name],
					callback: createNode
				});
				continue;
			}

			var newMenu = [];

			strArr.push(name);
			deep(that, newMenu);
			strArr.pop();

			newMenu = newMenu.sort((a, b) => a.title < b.title ? -1 : 1);
			target.push({title: name, deep: newMenu});
		}
	}

	let container = sketch.scope('container');
	function createNode(namespace){
		sketch.createNode(namespace, {
			x: (pos ? pos.x : ev.clientX) / container.scale - container.offset.x - container.pos.x,
			y: (pos ? pos.y : ev.clientY) / container.scale - container.offset.y - container.pos.y,
		});
	}

	deep(list, menu);

	menu = menu.sort((a, b) => a.title < b.title ? -1 : 1);
	menu.event = ev;
	return menu;
}

Blackprint.utils.setEnumerablePrototype = function(clazz, props){
	let temp = clazz.prototype;
	let desc = Object.getOwnPropertyDescriptors(temp);

	for(let key in props){
		let ref = desc[key];
		if(ref == null){
			console.error("Error:", key, desc);
			throw new Error(`"${key}" property was not found on the prototype`);
		}
		ref.enumerable = props[key];
	}

	Object.defineProperties(temp, desc);
}