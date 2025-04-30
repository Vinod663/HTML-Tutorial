import {student_db,courses_db} from "../db/db.js";
import StudentModel from "../model/StudentModel.js";



//load student table
function loadStudentTable() {
    $('#student-tbody').empty();
    student_db.map((student,index) => {
        let fname = student.first_name;
        let lname = student.last_name;
        let address = student.address;

        let data = `<tr>
                                <td>${index+1}</td>
                                <td>${fname}</td>
                                <td>${lname}</td>
                                <td>${address}</td>
                           </tr>`

        $('#student-tbody').append(data);
    });
}

//save Student
$('#student_save').on('click', function(){
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let address = $('#address').val();

    if(fname === '' || lname === '' || address === ''){

        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    let student_data=new StudentModel(fname, lname, address);
    student_db.push(student_data);
    console.log(student_db);
    loadStudentTable();
    clearStudentFields();
    Swal.fire({
        title: "Added Successfully!",
        icon: "success",
        draggable: true
    });

});

$('#student-tbody').on('click','tr', function(){
    let index=$(this).index();
    console.log(index);
    let obj=student_db[index];
    console.log(obj);

    let fname=obj.first_name;
    let lname=obj.last_name;
    let address=obj.address;

    $('#fname').val(fname);
    $('#lname').val(lname);
    $('#address').val(address);
});

//reset button
$('#student_reset').on('click', function(){
   clearStudentFields();

});


function clearStudentFields(){
    $('#fname').val('');
    $('#lname').val('');
    $('#address').val('');
}
