function UI(){

}

// add Comment
UI.prototype.addCommentToUI = function(newComment){
    
    var users_commets = document.querySelector(".users-commets");

    users_commets.innerHTML +=
                `
                <div class="body col-sm-12 mx-3 my-4">
                <div class="d-flex justify-content-between">
                   <div class="d-flex">
                    <div class="user-image ">
                        <img class="user-image" src="./images/profile3.png" alt="">
                    </div>
                    <div class="user-comment ms-2">
                        <div class="d-flex justify-content-between">
                            <h6 class="header fw-bold">${newComment.name}</h6>
                        </div>
                        <small class="textcomment float-start">${newComment.textarea}</small>
                    </div>
                   </div>
                    <div><i id="removeComment" class="fas fa-times"></i></div>

                </div>
            </div>`;
}

// add Comment
UI.prototype.deleteFromToUI = function(element){
    element.parentElement.parentElement.parentElement.remove();
    // console.log(e.target)
}

   // alert div------
UI.prototype.displayMessages = function(message,type){
    var comments = document.querySelector(".alertmessage");
 
comments.innerHTML +=
`<div class="alert alert-${type}" role="alert">
    ${message}
</div>`

setTimeout(function(){
    comments.remove();
},1000)
}