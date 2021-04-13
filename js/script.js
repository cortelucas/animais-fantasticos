const tabMenu = document.querySelectorAll('#tab-menu li');
const tabContent = document.querySelectorAll('#tab-content section');

if (tabMenu.length && tabContent.length){
  tabContent[0].classList.add('ativo');
  
  function activeTab(i) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[i].classList.toggle('ativo');
  }
  
  tabMenu.forEach((itemMenu, i) => {
    itemMenu.addEventListener('click', () => {
      activeTab(i);
    });
  })
}