
// DATA
let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
];

let newUser = {
    id: "345612789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "yassine",
    lastName: "MAKHLOUK",
    userName: "YCN",
    registrationNumber: "1995",
  }

// Table body
var table = document.getElementById('usersTable');

// Fill The Table function
function buildTable(data){
    

    
    var stat;

    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "Validé") {
            stat = "btn btn-success";
        }else if(data[i].status === "Rejeté"){
            stat = "btn btn-danger";
        }else{
            stat = "btn btn-warning";
        }
        row = `
        <tr>
                            
            <td>${data[i].id}</td>
            <td>${data[i].createdDate}</td>
            <td><div  class = "${stat} ">${data[i].status}</div></td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].userName}</td>
            <td>${data[i].registrationNumber}</td>
            <td>
                <a href="#" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#" id="${i}" onClick="deleteUser(${i})" class="delete"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
        `;

        table.innerHTML += row;
        
    }
}

// Add User function
function addUser(){

    // get the data from the inputs
    let currentDate = new Date;
    let id = Math.floor(Math.random() * 999999999)
    let nom = document.getElementById('addNom');
    let prenom = document.getElementById('addPrenom');
    let username = document.getElementById('addUsername');
    let matricule = document.getElementById('addMatricule');
    let creationDate = currentDate;


    // assemble the data in user
    let data = {
        id: id,
        createdDate: creationDate,
        status: "En validation",
        firstName: prenom.value,
        lastName: nom.value,
        userName: username.value,
        registrationNumber: matricule.value,
    }

    // add the user to the table
    table.innerHTML = "";
    users.push(data);
    buildTable(users);

    // empty the inputs
    nom.value = "";
    prenom.value = "";
    username.value = "";
    matricule.value = "";
}

// Edit User fuction
function editUser(){
    let nom = document.getElementById('updateNom');
    let prenom = document.getElementById('updatePrenom');
    let username = document.getElementById('updateUsername');
    let matricule = document.getElementById('updateMatricule');
    let state = document.getElementById('Etat');

    let data = {
        id: id,
        createdDate: creationDate,
        status: "En validation",
        firstName: prenom.value,
        lastName: nom.value,
        userName: username.value,
        registrationNumber: matricule.value,
    }
    console.log(users.find(data.id));

    

}

// Delete User function
function deleteUser(i){
    
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?") == true) {
        table.innerHTML = "";
        users.splice(i,1);
        buildTable(users);
    
      } else {
        console.log("Annulé");
      }

    
}


// Filling The Table
buildTable(users);


