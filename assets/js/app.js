const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const searchContainer = document.querySelector(".search-container");
const URL = "https://www.google.com/search?q=";

const displayResult = () => {
    const inputVal = searchInput.value.trim();
    if (inputVal) {
        const searchURL = URL + inputVal;
        window.open(searchURL);
    } else {
        const warning = document.querySelector("#warning");
        warning.style.display = 'inline'
        
        setTimeout(function() {
            warning.style.display = 'none'
        }, 2000);
    }
};

searchBtn.addEventListener('click', displayResult);

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        displayResult();
    }
});
