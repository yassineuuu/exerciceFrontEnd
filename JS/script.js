
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



// Fill The Table function
function buildTable(data){
    

    let table = document.getElementById('usersTable');
    var stat;

    for (let i = 0; i < data.length; i++) {
        console.log(data.status);
        if (data[i].status === "Validé") {
            stat = "btn btn-success";
        }else if(data[i].status === "Rejeté"){
            stat = "btn btn-danger";
        }else{
            stat = "btn btn-warning";
        }
        const row = `
        <tr>
                            
            <td>${data[i].id}</td>
            <td>${data[i].createdDate}</td>
            <td><div  class = "${stat} ">${data[i].status}</div></td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].userName}</td>
            <td>${data[i].registrationNumber}</td>
            <td>
                <a href="#editUserModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteUserModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
        `;

        table.innerHTML += row;
        
    }
}

// Add User function
function addUser(){

}

// Edit User fuction
function editUser(){

}

// Delete User function
function deleteUser(){

}


// Filling The Table
buildTable(users);


