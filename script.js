window.toggleStyle=toggleStyle;
document.getElementById("style").href = localStorage.getItem("style");
function toggleStyle(){
    if(localStorage.getItem("style")=="style.css"){
        localStorage.setItem("style","style2.css");
    }
    else{
        localStorage.setItem("style","style.css");
    }
    document.getElementById("style").href = localStorage.getItem("style");
}