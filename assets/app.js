// Getting Elements

const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('item-list');
const ClearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');
const addBtn = document.getElementById('add');


let itemData = [];



// Form Submission

// This will prevent the form from loadning the page when a user press the submit btn as default 
itemForm.addEventListener('submit', function(event){
    event.preventDefault();

const textValue = itemInput.value;

 
if (textValue === ''){
    addBtn.addEventListener('click' , M.toast({html: 'Enter a Valid Input'}));
} else {
    addItem(textValue);
    itemInput.value = '';
    itemData.push(textValue);

    deleteNote(textValue); 
    
}
});

// Add item to list
function addItem(value){
const div = document.createElement('div');
div.classList.add('item', 'cool')
div.innerHTML = `<a href="#!" class="collection-item"> ${value} <i class="material-icons right">remove_circle_outline</i></a>`

itemList.appendChild(div);


};


// Delete Item from List 
function deleteNote(textValue) {
const items = itemList.querySelectorAll('.item');
 items.forEach(function(item){
     
    item.querySelector('.material-icons').addEventListener('click', function() {
        itemList.removeChild(item);

        itemData = itemData.filter(function(item){
            
        return item !== textValue;
        });

        M.toast({html: 'You have delted an item'});

    });

 });
};
