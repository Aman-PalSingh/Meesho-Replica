let button = document.getElementById("expansion");
button.addEventListener('click', function()
{
    let angle_down = document.getElementById('buttonChange');    
    let aboutContent = document.getElementById("aboutMeeshoContent")
    if (aboutContent.style.display === "none")
    {
        aboutContent.style.display = "block"

        angle_down.removeAttribute("class");
        angle_down.setAttribute("class","fa-solid fa-angle-up")
        
    } else {
        aboutContent.style.display = "none";
        angle_down.removeAttribute("class");
        angle_down.setAttribute("class","fa-solid fa-angle-down")
    }
})