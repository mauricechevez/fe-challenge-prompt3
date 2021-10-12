console.log('Hello World')

const getYear = ()=>{
    const year = new Date().getFullYear();
    return year;
    }
    let yearPlaceholder = document.getElementById('year');
    yearPlaceholder.textContent = `Site created by Maurice Chevez © ${getYear()}`