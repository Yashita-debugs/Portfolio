// const navBar=document.querySelector(".nav-bar");

//  window.addEventListener('scroll', function() 
//  {

//  if(window.scrollY>50)
//     { navBar.classList.add('scroll')

//     }
//     else
//         {navBar.classList.remove('scroll')
//         }
//  })
const navBar = document.querySelector(".nav-bar");

window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
        navBar.classList.add('scroll')
    } else {
        navBar.classList.remove('scroll')
    }
})