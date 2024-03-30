// window.addEventListener('scroll', function() {
//     var side4 = document.querySelector('.side4');
//     var side4Position = side4.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;
//     if (side4Position < windowHeight / 1.5) { // Adjust this value as needed for when you want the animation to start
//         var words = document.querySelectorAll('.side4 span');
//         words.forEach(function(word, index) {
//             word.style.transitionDelay = index * 0.1 + 's'; // Add a delay for each word
//             word.style.opacity = 1;
//             word.style.transform = 'translateX(-100%)'; // Move words from right to left
//         });
//     }
// });