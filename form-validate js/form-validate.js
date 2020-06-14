
function sayHello(){
    alert("visit our website to read more about our citadel objectives")
    }
    function juns(){
    alert("visit our website to read more about our citadel aims as well")
    }
    function validate(){
    var name1=document.myForm.name.value;
    var name2=document.myForm.firstname.value;
    var name3=document.myForm.lastname.value;
    var num=document.myForm.number.value;
    var sit=document.myForm.numberx.value;
    if(name1==""||name2==""||name3==""){
    document.getElementById('display').innerHTML=("<h1><b>you have to input your name and other data</b></h1>");
    
    return false;}
    if(name1==name2||name1==name2){
    document.getElementById('display').innerHTML=("<h1><b>you have to enter different name from your surname</b></h1>");
    return false;
    }
    if(num!==sit){
    
    document.getElementById('display').innerHTML=("<h1><b>your examination number must be the same with your sit number</b></h1>");
    return false;
    }
    
    return function cbt(){
        window.location= "cbt test.html"
    }
    
    } function dat(){
    var now=new Date()
    document.getElementById('date').innerHTML=(now.toUTCString());}
    