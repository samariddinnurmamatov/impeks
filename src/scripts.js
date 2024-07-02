// Add this to your JavaScript file
document.getElementById('languageButton').addEventListener('click', function() {
    var dropdown = document.getElementById('languageDropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
});

document.querySelectorAll('#languageDropdown a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        var selectedLang = event.target.getAttribute('data-lang');
        document.getElementById('languageButton').innerText = selectedLang;
        document.getElementById('languageDropdown').style.display = 'none';
    });
});

// Hide the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('languageDropdown');
    var button = document.getElementById('languageButton');
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

function changeInsurance(title, description, imageUrl) {
    var section = document.getElementById('insurance-section');
    var insuranceTitle = section.querySelector('h2');
    var insuranceDescription = section.querySelector('p');
    var insuranceImage = section.querySelector('img');

    insuranceTitle.textContent = title;
    insuranceDescription.textContent = description;
    insuranceImage.src = imageUrl;
}
