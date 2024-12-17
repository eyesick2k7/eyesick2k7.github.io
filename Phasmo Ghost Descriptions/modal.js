document.addEventListener('DOMContentLoaded', function() {
    const showModalButton = document.getElementById('listGhostsButton');
    const modal = document.getElementById('ghostNamesModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const ghostNamesList = document.getElementById('ghostNamesList');
    const backgroundWrapper = document.getElementById('background-wrapper');

    console.log("Button and modal elements loaded!");

    // Open the modal
    showModalButton.onclick = function() {
        console.log('Button clicked!');
        modal.style.display = "block";
        backgroundWrapper.classList.add('blur-background'); // Apply blur effect
        populateGhostNamesList();
    };

    // Close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
        backgroundWrapper.classList.remove('blur-background'); // Remove blur effect
    };

    // Close the modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            backgroundWrapper.classList.remove('blur-background'); // Remove blur effect
        }
    };

    // Populate the ghost names as a grid
    function populateGhostNamesList() {
        ghostNamesList.innerHTML = ''; // Clear existing list
        ghosts.forEach(ghost => {
            const li = document.createElement('li');
            li.textContent = ghost.name;
            li.onclick = () => {
                displayGhostProperties(ghost.name); // Display properties when a ghost is clicked
                modal.style.display = "none"; // Close modal after selecting a ghost
            };
            ghostNamesList.appendChild(li);
        });
    }

    // Display ghost properties (automatically populates output)
    function displayGhostProperties(name) {
        const properties = ghostProperties(name); // Fetch properties using the name
        updateOutput(properties); // Display the properties
    }

    function updateOutput(message) {
        const output = document.getElementById('output');
        output.innerHTML = `<p>${message}</p>`;
        backgroundWrapper.classList.remove('blur-background');
    }
});