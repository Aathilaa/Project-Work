document.addEventListener("DOMContentLoaded", function() {
var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
// Debugging console.log statements
//console.log("productContainer:", productContainer);
//console.log("search:", search);
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none";
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
})
// The indexOf() method returns the index at which the specified value (enteredValue) is found within the string (productname). 
//If the value is not found, it returns -1.