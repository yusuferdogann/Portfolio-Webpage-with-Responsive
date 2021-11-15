function UI(){

}

UI.prototype.addCommentToUI = function(newComment){
    

    var users_commets = document.querySelector(".users-commets");

    users_commets.innerHTML +=
                    `  <div class="body mx-3 my-4">
                    <div class="d-flex">
                        <div class="col user-image ">
                            <img src="./images/profile.jpg" alt="">
                        </div>
                        <div class="user-comment ms-2">
                            <h6 class="header fw-bold">${newComment.name}</h6>
                            <small>${newComment.textarea}</small>
                        </div>
    
                    </div>
                </div>`

}


