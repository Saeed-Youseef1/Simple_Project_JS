function calcAge() {
    let inputValue =document.getElementById('inputyears').value;
    let outDays = document.getElementById('outputDay')
    let outHours = document.getElementById('outputHour')
    let outMinutes = document.getElementById('outputMinute')
    if(inputValue === "" || inputValue<0) {
        outDays.value="";
        outMinutes.value="";
        outHours.value="";
        return;
    }

    outDays.value = inputValue * 365;
    outHours.value = inputValue * 365 * 24;
    outMinutes.value = inputValue * 365 * 24 * 60;

}