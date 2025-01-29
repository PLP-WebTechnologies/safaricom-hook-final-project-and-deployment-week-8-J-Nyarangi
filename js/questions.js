document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    // Function to set max-height for animations
    function setMaxHeight(element) {
        element.style.maxHeight = element.scrollHeight + "px";
    }

    // Function to close all accordion items
    function closeAllAccordions() {
        document.querySelectorAll('.accordion-collapse').forEach(item => {
            item.classList.remove('show');
            item.style.maxHeight = null;
        });
        accordionButtons.forEach(button => {
            button.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Add click event listener to each button
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            const targetPanel = document.querySelector(targetId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all accordions
            closeAllAccordions();
            
            // If it wasn't expanded, expand it
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                targetPanel.classList.add('show');
                setMaxHeight(targetPanel);
            }
        });
    });
    
    // Open first panel by default
    if (accordionButtons.length > 0) {
        const firstButton = accordionButtons[0];
        const firstPanel = document.querySelector(firstButton.getAttribute('data-bs-target'));
        
        firstButton.setAttribute('aria-expanded', 'true');
        firstPanel.classList.add('show');
        setMaxHeight(firstPanel);
    }
});