document.addEventListener('DOMContentLoaded', function () {
    // Retrieve values from localStorage
    const selectedFont = localStorage.getItem('selectedFont') || 'Open Sans';
    const selectedColor = localStorage.getItem('selectedColor') || 'black';
    const selectedSize = localStorage.getItem('selectedSize') || '16px';

    // Set default values for select boxes
    document.getElementById('fontSelect').value = selectedFont;
    document.getElementById('colorSelect').value = selectedColor;
    document.getElementById('sizeSelect').value = selectedSize;
    // Apply initial styles
    applyStyles(selectedFont, selectedColor, selectedSize);

    // Event listeners for select boxes
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function () {
            applyChanges();
        });
    });

    // Function to apply changes
    function applyChanges() {
        const font = document.getElementById('fontSelect').value;
        const color = document.getElementById('colorSelect').value;
        const size = document.getElementById('sizeSelect').value;
        // Save selected options to localStorage
        localStorage.setItem('selectedFont', font);
        localStorage.setItem('selectedColor', color);
        localStorage.setItem('selectedSize', size);
        // Apply selected styles
        applyStyles(font, color, size);
    }

    // Function to apply styles
    function applyStyles(font, color, size) {
        document.body.style.fontFamily = font;
        document.body.style.color = color;
        document.body.style.fontSize = size;
    }
});