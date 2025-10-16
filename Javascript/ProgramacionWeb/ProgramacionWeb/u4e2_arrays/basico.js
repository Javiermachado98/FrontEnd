function countElements(list){
    return list.length;   
}

function showElements(list){
    return list
}

function showElementsReverse(list){
    return list.toReversed();
}

function orderElements(list){
    return list.toSorted();
}

function addValue(list){
    list.unshift("New Country");
}

function addLastValue(list){
    list.push("Last Country");
}

function deleteFirstValue(list){
    let firstValueDeleted = list.shift();
    return firstValueDeleted;
}

function deleteLastValue(list){
    let lastValueDeleted = list.pop();
    return lastValueDeleted;
}

function showPosition(list, position){
    return list[position]
}

function showIndexOf(list, element){
    return list.indexOf(element);
}

function showIntervals(list,elementOne,elementTwo){
    return list.slice(elementOne,elementTwo);
}

function addValueParam(list, object){
    return list.unshift(object);
}
function addLastValueParam(list, object){
    return list.push(object);
}

