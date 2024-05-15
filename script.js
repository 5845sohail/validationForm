
function data()
{
    var a = document.getElementById("name").value;
    var b = document.getElementById("mobile").value;
    var c = document.getElementById("pass").value;
    var d = document.getElementById("cpass").value;
    var e = document.getElementById("email").value;
    var symbol = /@/;

    if(a==="" || b==="" || c==="" || d===""){
        alert("All fields are mendatory");
        return false;
    }
    else if(a.length < 5){
        alert("Name must not be less than 5 characters");
        return false;
    }
    
    else if(b.length < 10 || b.length>10){
        alert("Enter 10 digit mobile number");
        return false;
    }
    else if(isNaN(b)){
        alert("only number allowed in mobile number");
        return false;
    }
    else if(c!=d){
        alert("Please enter same password");
        return false;
    }
    else if(!symbol.test(e)){
        alert("Email must contain @");
        return false;
    }
    else
        {
            true;
        }
}