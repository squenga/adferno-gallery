function onButtonClick(event) {
    const button = event.target;
    
    const hiddenTextId = button.getAttribute('data-target');
    const hiddenImageId = button.getAttribute('data-target-image');
    
    const hiddenText = document.getElementById(hiddenTextId);
    const hiddenImage = document.getElementById(hiddenImageId);
    
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
    
    if (hiddenImage.style.display === 'none') {
        hiddenImage.style.display = 'block';
    } else {
        hiddenImage.style.display = 'none';
    }
}

function hideImage(hiddenImageId) {
    const hiddenImage = document.getElementById(hiddenImageId);
    if (hiddenImage) {
        hiddenImage.style.display = 'none';
    }
}

const buttons = document.querySelectorAll('.revealButton');
buttons.forEach(button => {
    button.addEventListener('click', onButtonClick);
});