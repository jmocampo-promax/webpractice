let openFAQ = null;

function toggleFAQ(index) {
    const answers = document.querySelectorAll('.faq-answer');

    if (openFAQ !== null && openFAQ !== index) {
        answers[openFAQ].style.display = 'none';
        answers[openFAQ].innerHTML = answers[openFAQ].dataset.fullText; // Reset previous answer
    }

    if (answers[index].style.display === 'block') {
        answers[index].style.display = 'none';
        openFAQ = null;
    } else {
        answers[index].style.display = 'block';
        answers[index].innerHTML = ''; // Clear text for typing effect
        openFAQ = index;

        let text = answers[index].dataset.fullText;
        let i = 0;

        function typeEffect() {
            if (i < text.length) {
                answers[index].innerHTML += text.charAt(i);
                i++;
                setTimeout(typeEffect, 50); // Adjust speed of typing effect
            }
        }

        typeEffect();
    }
}