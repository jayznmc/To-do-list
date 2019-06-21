// DOM elements
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span"); // Will contain the bin icon
var lists = document.querySelectorAll("li");
var pencil = document.querySelector('#pencil');
var saveBtn = document.querySelector(".save");
var loadBtn = document.querySelector(".load");
var helpBtn = document.querySelector(".help");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay");

// Delete function
function deleteTask(){
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            event.stopPropagation(); // This stops creation of a new trash icon
        });
    }
}

// Event listener for task input
input.addEventListener("keypress",function(e){
    if(e.which === 13){ // 13 refers to 'enter' key
        //create list
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTask = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTask);

        deleteTask();
    }

});


// Function to load list from local storage
function loadTasks(){
    if(localStorage.getItem('tasks')){
        ul.innerHTML = localStorage.getItem('tasks');
        deleteTask();
    }
}


// Function to add line through effect
ul.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    },false);

// Hide input box, if pencil is clicked
pencil.addEventListener('click',function(){
    input.classList.toggle('display');
});

// Save list state
saveBtn.addEventListener('click',function(){
    localStorage.setItem('tasks', ul.innerHTML);
});

// Display help overlay
helpBtn.addEventListener("click", function(){
    overlay.style.height = "100%";
});
// Close help overlay
closeBtn.addEventListener("click", function(e){
    e.preventDefault;
    overlay.style.height = "0";
});

deleteTask();
