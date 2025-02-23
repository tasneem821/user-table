const users=[
    {name:"tasneem",age:22,email:"tasneemgomaa126@gmail.com"},
]
function displayUsers(){
    let table = document.getElementById("users-table");
   table.innerHTML ="";
    users.forEach((user)=>{
        let row = document.createElement("tr");
        row.classList.add("user-row");
        let nameCell = document.createElement("td");
        nameCell.innerHTML=user.name;
        let ageCell = document.createElement("td");
        ageCell.innerHTML=`${user.age}`;
        let emailCell = document.createElement("td");
        emailCell.innerHTML=user.email;
    let deleteButtonCell = document.createElement("td")
    let deleteButton = document.createElement("button");("button")
    deleteButton.classList.add("delete-btn");
        deleteButton.innerHTML="Delete";
    
        deleteButton.addEventListener("click",(event)=>{
    event.preventDefault();
    table.removeChild(row);
        })
        deleteButtonCell.appendChild(deleteButton);
    let editButtonCell = document.createElement("td")
    let editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
        editButton.innerHTML="Edit";
    
        editButton.addEventListener("click",(event)=>{
    event.preventDefault();
    
    let newName = prompt("Enter new name");
    let newAge = prompt("Enter new age");
    let newEmail = prompt("Enter new email");
    nameCell.innerHTML = newName;
        ageCell.innerHTML=`${newAge}`;
        emailCell.innerHTML=newEmail;
        })
        editButtonCell.appendChild(editButton);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(emailCell);
        row.appendChild(deleteButtonCell);
    row.appendChild(editButtonCell);
        table.appendChild(row);
    })
}


let addUserButton = document.getElementById("addUser");
addUserButton.addEventListener("click",(event)=>{
    let userName = document.getElementById("user-name").value;
    let userAge = document.getElementById("user-age").value;
    let userEmail = document.getElementById("user-email").value;

    users.push({name:userName, age:userAge, email:userEmail})
   displayUsers();
    event.preventDefault();
})

