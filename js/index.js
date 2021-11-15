var buttons = document.getElementById("add");
var form_share = document.querySelector("#commentsform");
var nameElement = document.getElementById("name");
var textareaElement = document.getElementById("textbox"); 
var nav = document.querySelector('nav');
var liItem = document.querySelectorAll(".nav-link");
var navbar = document.querySelector(".navbar");
var users_comments = document.querySelector(".users-commets");



// start UI object--------------------
const ui = new UI();

eventListeners();

// All events inside functions--------
function eventListeners(){
    form_share.addEventListener("submit",addComment);
    users_comments.addEventListener("click",deleteComment);
}

function addComment(e){
    var name = nameElement.value;
    var textarea = textareaElement.value;

    if(name === "" || textarea === ""){
        ui.displayMessages("please enter all the inputs","danger")


    }
    else{
        // new comment----------------
        const newComment = new Comment(name,textarea);
        ui.addCommentToUI(newComment);
        ui.displayMessages("add your comment","success")

    }
    e.preventDefault();
}

// delete comment-----
function deleteComment(e){
    if(e.target.id ==="removeComment"){
        ui.deleteFromToUI(e.target);
    }
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

