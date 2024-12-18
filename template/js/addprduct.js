// sidebar Toggle and Submenu
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('header')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  header.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}


// Select the profile section and dropdown menu
const profileSection = document.querySelector('.profile-section');
const profileDropdown = document.querySelector('.profile-dropdown');

  profileSection.addEventListener('click', (event) => {
  event.stopPropagation();
  
  profileDropdown.style.display =
  profileDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
  profileDropdown.style.display = 'none';
});


const productImageInput = document.getElementById('productImage');
        const previewContainer = document.getElementById('previewContainer');

        productImageInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewContainer.innerHTML = `<img src="${e.target.result}" alt="Product Image Preview">`;
                };
                reader.readAsDataURL(file);
            } else {
                previewContainer.innerHTML = '<span>Image Preview</span>';
            }
        });
