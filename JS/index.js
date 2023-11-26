
    document.addEventListener("DOMContentLoaded", function() {
        const groupName = document.getElementById('group-name');
        const mainPage = document.getElementById('main-page');
        const mainContent = document.getElementById('main-content-section');
        const loadingPath = document.getElementById('loading-path');
        setTimeout(function() {
          groupName.style.opacity = '0';
          loadingPath.style.opacity = '0'; 
          setTimeout(function() {
            groupName.style.display = 'none';
            mainPage.style.opacity = '1';
            mainPage.style.transform = 'translateY(0)';
            mainContent.style.opacity = '1';
            scrollToMainPage();
          }, 1000); 
        }, 3000); 
        function scrollToMainPage() {
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
