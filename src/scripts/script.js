document.addEventListener('DOMContentLoaded', () => {
    // Initialize collapsible sections
    const collapsibles = document.querySelectorAll('.collapsible-header');
    
    // Function to toggle section
    const toggleSection = (header) => {
        const content = header.nextElementSibling;
        const isExpanded = header.classList.contains('active');
        
        // Toggle active state
        header.classList.toggle('active');
        
        // Animate content height
        if (isExpanded) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    // Add click handlers
    collapsibles.forEach(header => {
        // Initially collapse all sections
        const content = header.nextElementSibling;
        content.style.maxHeight = null;
        
        // Add click handler
        header.addEventListener('click', () => {
            toggleSection(header);
        });
    });
});
