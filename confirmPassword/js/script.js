window.onload = function(){
    document.getElementsByClassName('i1')[0].focus();
}

document.getElementsByClassName('i1')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i2')[0].focus();
    }
});

document.getElementsByClassName('i2')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i3')[0].focus();
    }
});
document.getElementsByClassName('i3')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i4')[0].focus();
    }
});
document.getElementsByClassName('i4')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i5')[0].focus();
    }
});
document.getElementsByClassName('i5')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i6')[0].focus();
    }
});

document.getElementsByClassName('i5')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
       document.getElementsByClassName('i6')[0].focus();
    }
});

document.getElementsByClassName('i6')[0].addEventListener('input', function() {
    if(this.value.length === 1) {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
        setTimeout(function() {
            document.getElementsByClassName('i7')[0].click();
        },1000);
    }
});