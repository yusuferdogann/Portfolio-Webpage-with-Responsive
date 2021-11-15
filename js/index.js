var buttons = document.getElementById("add");
var form_share = document.querySelector("#commentsform");
var nameElement = document.getElementById("name");
var textareaElement = document.getElementById("textbox"); 
var nav = document.querySelector('nav');
var liItem = document.querySelectorAll(".nav-link");
var navbar = document.querySelector(".navbar");



// start UI object--------------------
const ui = new UI();

eventListeners();

// All events inside functions--------
function eventListeners(){
    form_share.addEventListener("submit",addComment);
}

function addComment(e){
    var name = nameElement.value;
    var textarea = textareaElement.value;

    if(name === "" || textarea === ""){

    }
    else{
        // new comment----------------
        const newComment = new Comment(name,textarea);
        ui.addCommentToUI(newComment);
    }

    e.preventDefault();
}

// navbar script-----
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow')

    }
    else {
        nav.classList.remove("bg-dark", "shadow")
    }
})

