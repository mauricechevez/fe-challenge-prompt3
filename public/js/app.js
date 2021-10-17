const getYear = ()=>{
    const year = new Date().getFullYear();
    return year;
    }
    let yearPlaceholder = document.getElementById('year');
    yearPlaceholder.textContent = `Site created by Maurice Chevez © ${getYear()}`

    // Bootstrap dropdown menu - hover to open menu
    // Source: https://bootstrap-menu.com/detail-basic-hover.html
document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

    everyitem.addEventListener('mouseover', function(e){

        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
        }

    });
    everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');

        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
        }


    })
});
