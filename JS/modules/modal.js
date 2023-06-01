export default function initModal(){
  const boataoAbrir = document.querySelector('[data-modal="abrir"]')
const boataoFechar = document.querySelector('[data-modal="fechar"]')
const conteinerModal = document.querySelector('[data-modal="container"]')
if (boataoAbrir && boataoFechar && conteinerModal) { 
  function taggleModal(event){
    event.preventDefault()
    conteinerModal.classList.toggle('ativo')
  }

  function cliqueForaModal(event){
    if(event.target === this)
    taggleModal(event)
  }


  boataoAbrir.addEventListener('click', taggleModal)
  boataoFechar.addEventListener('click', taggleModal)
  conteinerModal.addEventListener('click', cliqueForaModal)
}
}

