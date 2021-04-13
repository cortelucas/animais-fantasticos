function initTabNav() {
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
}
initTabNav();

function initAccordion() {  
  const accordionList = document.querySelectorAll('#accordion dt');
  const ativoClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.toggle(ativoClass);
    
    function activeAccordion() {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }  
}
initAccordion();