window.addEventListener('scroll', onScroll)
const navigation = document.querySelector('#navigation')

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha imaginaria
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a sessao passou da linha
  // quais dados vou precisar

  //Topo da sessao
  const sectionTop = section.offsetTop
  //Altura da sessao
  const sectionHeight = section.offsetHeight

  // verificar se a parte do topo passou ou ultrapassou da linha imaginaria
  const sectionTopReachOrPassedLine = targetLine >= sectionTop

  // VERIFICAR SE A BASE ESTA ABAIXO DA LINAH IMAGINARIA
  // a sessao termina onde ? (base)
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da sessao passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da sessao
  const sectionBoundaries =
    sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.menu ul:nth-child(1) li a[href*=${sectionId}]`
  )

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
