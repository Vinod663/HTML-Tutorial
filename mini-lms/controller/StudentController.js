import { students_db, courses_db } from "../db/db.js"; //named export
import StudentModel from "../model/StudentModel.js";//default export

// load student records
function loadStudents() {

    $('#student-tbody').empty();

    students_db.map((item, index) => {
        let fname = item.first_name;
        let lname = item.last_name;
        let address = item.address;

        let data = `<tr>
                       <td>${index + 1}</td>
                       <td>${fname}</td>
                       <td>${lname}</td>
                       <td>${address}</td>
                  </tr>`

        $('#student-tbody').append(data);
    })

}

// save
$('#student-save').on('click', function(){
    // let fname = document.getElementById('fname').value;
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let address = $('#address').val();

    if(fname === '' || lname === '' || address === '') {
        // alert("Invalid inputs!");

        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {


        /*let student_data = {
            first_name: fname,
            last_name: lname,
            address: address
        };*/

        let student_data=new StudentModel(fname, lname, address);

        students_db.push(student_data);

        console.log(students_db);

        loadStudents();

        // .push(), .pop(), .shift(), unshift()

        Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true
        });
    }
});

$('#student-Reset').on('click', function(){
    $('#fname').val('');
    $('#lname').val('');
    $('#address').val('');

    Swal.fire({
        title: "Reset Successfully!",
        icon: "success",
        draggable: true
    });
});