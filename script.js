// Function to create and append a new despair word
function createDespairWord() {
    const word = document.createElement('div');
    word.textContent = 'despair';
    word.classList.add('despair-word');
    document.getElementById('despair-container').appendChild(word);
}

// Function to handle scroll event
function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;

    // Condition to trigger creating a new despair word
    if (scrollY + viewportHeight > document.body.clientHeight - 100) {
        createDespairWord();
    }
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);
