var score = parseInt(prompt("Enter your score here:"))
if (score >= 0 && score < 20) {
    alert("your grade is an E")
} else if (score >= 20 && score < 40){
    alert("your grade is a D")
} else if (score >= 40 && score < 60){
    alert ("your grade is a C")
} else if (score >= 60 && score < 80){
    alert("your grade is a B")
} else {
    alert("your score is an A")
}
