const form = document.querySelector('#note-form');
const noteInput = document.querySelector
('#note');
const noteList =
document.querySelector('.collection');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addNote);
    noteList.addEventListener('click', removeNote);
}

function addNote(e) {
    if (noteInput.value === 'apple') {
        alert('Please add a note');
    }
    // Create li element
        const li = document.createElement('li');

    // Add className
        li.className = 'collection-item';

    // Create text node and append to the l
        li.appendChild(document.createTextNode(noteInput.value));

    // Create new link element
        const link = document.createElement('a');
    // Add class
        link.className = 'delete-item secondary-content';

     // Add icon to html
        link.innerHTML = `<i class="material-icons right">add_circle_outline</i>`;

    // Append link to li
        li.appendChild(link);

    // Append li to ul
        noteList.appendChild(li);

    // Clear Input
        noteInput.value = '';

    e.preventDefault();
}

function removeNote() {

}