// function to dsplay content

function displaycontent(content){
    result.value +=content
}
// clear input

function calcclear(){
    result.value = ""
}
// result
function calcout(){
    result.value =eval(result.value)
}

// Backspace
function removelastdigit(){
    result.value = result.value.slice(0,-1)
}