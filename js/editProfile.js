//get data from local storage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

//variable
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

//setting values
userInput.value = get_user;
userEmailInput.value = get_email;
//events
editForm.addEventListener('submit', editprofileData);

function editprofileData(e) {
    e.preventDefault();

    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);

    setTimeout(() => {
        window.location = "profile.html";
    }, 500)

}