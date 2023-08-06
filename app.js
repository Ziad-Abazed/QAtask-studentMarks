
userInput()



function userInput(){
  userName = prompt("Please enter your name:");

if (userName) {


}else{
    alert("please Enter your name");
    userInput()
}
}







studentGrad();


function studentGrad(){
    let StudentMark =parseFloat(prompt("please enter your mark"));

    if(StudentMark){

        if (StudentMark >=0 && StudentMark <= 49) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is F  \n failed  ");
        }
        else if (StudentMark >= 50 && StudentMark <= 60) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is D  \n \n                       PASS    ");
        }
        else if (StudentMark>=61 && StudentMark<=70) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is C \n \n                       PASS  ");
        } else if (StudentMark>=71 && StudentMark<=80) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is B  \n \n                       PASS    ");
        } else if (StudentMark>=81 && StudentMark<=90) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is A  \n \n                       PASS    ");
        }else if (StudentMark>=91 && StudentMark<=100) {
            alert("welcome "+userName+" your mark is {"+Math.floor(StudentMark)+"} and your grade is A+  \n \n                       PASS    ");
        } else {

            alert("please enter valid value")
            studentGrad()
            
            
        }
    }

else {

    alert("please enter valid value")
    studentGrad()
    
    
}

}