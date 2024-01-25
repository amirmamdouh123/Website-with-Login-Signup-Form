const container =document.querySelector('.container');
const div_links = document.querySelectorAll('.div-link');

div_links.forEach(link => {

    link.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(link.id)
        container.classList[link.id ==='signup-link'? 'add' : 'remove']('show-signup');
    }
    )
})

const login =document.querySelector('nav .menu .login button');
login.addEventListener('click',()=>{
    document.body.classList.add('show-login');
    container.classList.remove('show-signup');
});


const close_button =document.querySelectorAll('.rightPart .close-btn');

close_button.forEach((each)=>{
    each.addEventListener('click',()=>{
        container.classList.remove('show-signup'); 
        document.body.classList.remove('show-login');
    });
})




















