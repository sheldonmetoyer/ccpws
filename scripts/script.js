const showButton = document.querySelector('.open-menu')
const closeButton = document.querySelector('.close-button');

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';

}
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';

}

showButton.addEventListener('click', showSidebar);

closeButton.addEventListener('click', closeSidebar);

