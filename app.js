function hello() {

    var first_name=document.getElementById("firstname").value;
    var last_name=document.getElementById("lastname").value;
    var gender=document.getElementById("gender").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var student={

        firstname:first_name,
        lastname:last_name,
        gender:gender,
        email:email,
        password:pass

    }
    var no=0;
    console.log(student); 
    firebase.database().ref('student').push(student); 

}