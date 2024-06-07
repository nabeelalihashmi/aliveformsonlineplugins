(function() {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'new-alert-popup';
    popupContainer.style.cssText = `
      display: none;
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 2001;
    `;
    document.body.appendChild(popupContainer);
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      opacity: 1;
    `;
    popupContainer.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
      hide();
    });
  
    function alert(message, style = 'default', timeout = 3000) {
      const thisStyle = 'new-alert-' + style;
  
      popupContainer.textContent = message;
      popupContainer.classList.add(thisStyle);
  
      switch (style) {
        case 'success':
          popupContainer.style.backgroundColor = '#f1f5f8';
          popupContainer.style.color = '#43b581';
          break;
        case 'danger':
          popupContainer.style.backgroundColor = '#ffe3e3';
          popupContainer.style.color = '#c0392b';
          break;
        default:
          popupContainer.style.backgroundColor = '#fff';
          popupContainer.style.color = '#333';
      }
  
      popupContainer.style.display = 'block';
  
      if (timeout > 0) {
        setTimeout(() => {
          hide();
        }, timeout);
      }
    }
  
    function hide() {
      popupContainer.style.display = 'none';
      popupContainer.classList.remove('new-alert-success', 'new-alert-danger');
    }
  
    window.Run.Toast = alert;
  })();
  