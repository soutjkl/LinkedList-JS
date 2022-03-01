import {LinkedList} from './LinkedList.js'
console.log("Script loaded!")
var form1 = document.getElementById("form-1"); 
var deleteForm = document.getElementById("delete-form")
var list = new LinkedList();

form1.addEventListener("submit", function(event) {
	event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries()); 
    console.log(event);
	console.log("submit");
    console.log(data); 
    list.add(data.name); 

    console.log(list);
    showElements();
});

deleteForm.addEventListener("submit", function(event){
    event.preventDefault();
    const elements = document.getElementById("elements");
    var selected = elements.options[elements.selectedIndex].text;
    list.removeData(selected);
    showElements();
    console.log(list)
});

function showElements(){
    console.log("Eliminando")
    var actual = list.getHead();
    const elements = document.getElementById("elements");
    cleanElements(elements)
    while(actual != null){
            const option = document.createElement('option');
            const value = actual.getData();
            option.value = value;
            option.text = value;
            elements.appendChild(option);
            actual = actual.getNext();
    }
}

function cleanElements(elements){
    for (let i = elements.options.length; i >= 0; i--) {
        elements.remove(i);
    }
}