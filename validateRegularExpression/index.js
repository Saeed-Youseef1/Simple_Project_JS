let errorText = document.createElement('p');
let acceptText = document.createElement('p');
errorText.innerHTML = 'This Is Wrong Phone !!';
acceptText.innerHTML = 'This Is Accept Phone';
errorText.style.color = 'red';
acceptText.style.color = 'green';
let er=0;

document.getElementById('register').onsubmit = function(event) {
    event.preventDefault(); 
    
    let phone = document.getElementById('phone');
    let phoneValue = phone.value.trim();
    let phoneTest = /\(\d{4}\)\s\d{3}\-\d{4}/;
    
    if (!phoneTest.test(phoneValue)) {
        this.appendChild(errorText);
        er=1;
    } else {
        if(er){
            errorText.parentNode.removeChild(errorText);
        }
        this.appendChild(acceptText);
        setTimeout(function() {
            document.getElementById('register').submit();
        }, 500);
    }
};
