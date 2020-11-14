


const navUl = document.getElementById("nav-ul");
const navLinks = navUl.querySelectorAll("a");

const output = document.getElementById("output");

const.log( navLinks );

const showView = ( e ) => {
    //alert( e.target.dataset.view );
    fetch(`sider/${e.target.dataset.view}.html`)
        .then( ( result ) => { return result.text() } )
        .then( ( html )  => { 
             output.innerHTML = html;
        
          
    } )
    .error()
    
}

navLinks.forEach( link => {
    link.addEventListener("click", showView );
    
} ) 