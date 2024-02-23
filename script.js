const search = document.getElementById('toSearch'),
images = document.querySelectorAll('.card')

search.addEventListener("keyup", e=> {
    e.preventDefault()
    if (e.key == "Enter") {
        let searchValue =  search.value,
        value = searchValue.toLowerCase(),
        warning = document.querySelector('.warning')

        images.forEach(img => {
            if (value === "" || value === img.dataset.name.toLowerCase()) {
                img.style.display = "block";
                warning.style.display = "none";
            } else {
                warning.style.display = "block";
                img.style.display = "none";
            }
        })
    }
} )