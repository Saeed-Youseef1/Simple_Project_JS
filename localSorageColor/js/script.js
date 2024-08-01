let lst  = document.querySelectorAll('ul li');
let div = document.querySelector('div');

lst.forEach((element) => {
    element.style.backgroundColor=element.dataset.color;
});


if(localStorage.getItem('color')) {
    div.style.backgroundColor=localStorage.getItem('color');
        lst.forEach((li) => {
            li.classList.remove('active');
            if(li.dataset.color==localStorage.getItem('color'))
            {
                li.classList.add('active');
            }
    });
}else 
{
    div.style.backgroundColor='red';
}


lst.forEach((element) => {
    element.addEventListener('click',(e) => {
        lst.forEach((li) => {
            li.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
        localStorage.setItem('color',e.currentTarget.dataset.color);
        div.style.backgroundColor=localStorage.getItem('color');
    });
});