function enviarFormulario() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    alert("Enviado com Sucesso!"); 
  }
  
  const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const menu = document.querySelector('.dropdown_menu')
  
  toggleBtn.addEventListener('click', () => {
    toggleBtnIcon.classList.toggle('fa-bars')
    toggleBtnIcon.classList.toggle('fa-times')
    menu.classList.toggle('open')
  })
  