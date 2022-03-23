const Mybutton1= document.getElementById("mybutton1");
Mybutton1.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightblue-background');
  body.classList.remove('lightpink-background','lightseagreen-background','lightyellow-background','lightsalmon-background')
  toggleNav ()
  
});
const Mybutton2= document.getElementById("mybutton2");
Mybutton2.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightpink-background');
  body.classList.remove('lightblue-background','lightseagreen-background','lightyellow-background','lightsalmon-background')
  toggleNav()
  
});
const Mybutton3= document.getElementById("mybutton3");
Mybutton3.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightseagreen-background');
  body.classList.remove('lightblue-background','lightpink-background','lightyellow-background','lightsalmon-background')
  toggleNav ()
  
});
const Mybutton4= document.getElementById("mybutton4");
Mybutton4.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightyellow-background');
  body.classList.remove('lightblue-background','lightpink-background','lightseagreen-background','lightsalmon-background')
  toggleNav ()
  
});
const Mybutton5= document.getElementById("mybutton5");
Mybutton5.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightsalmon-background');
  body.classList.remove('lightblue-background','lightpink-background','lightyellow-background','lightseagreen-background')
  toggleNav ()
  
});
let toggleNavStatus = true;
let toggleNav = function(){
  console.log(toggleNavStatus)
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl= document.querySelector(".nav-sidebar ul");
    let getSidebarTitle= document.querySelector(".nav-sidebar span");
    let getSidebarLinks= document.querySelectorAll(".nav-sidebar ul button ");
    
    
   if (toggleNavStatus === false) {
     getSidebarUl.style.visbilty = "visible";
     getSidebar.style.witdth = "272px";
     getSidebarTitle.style.opacity = "1";

    let arrayLength= getSidebarLinks.length;
    console.log (arrayLength);
    for (let i=0; i <arrayLength; i++){
      getSidebarLinks[i].style.opacity = "1"; 
    }
    toggleNavStatus =true

  }else{
    getSidebar.style.width ="50px";
    getSidebarTitle.style.opacity ="0";
    let arrayLength= getSidebarLinks.length;

    for (let i=0; i< arrayLength; i++ ){
      getSidebarLinks[i].style.opacity ="0"; 
    
   }
   getSidebarUl.style.visibilty="hidden";
   toggleNavStatus = false
  }

}
toggleNav ()

const MyBtnToggle= document.getElementById ("btn-toggle-nav")
MyBtnToggle.addEventListener("click", function () {
  toggleNav () 
})

