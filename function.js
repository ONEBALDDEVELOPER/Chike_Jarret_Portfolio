/** Contact form — submit to Formspree without leaving the page **/
const contactForm = document.querySelector('#contact-form')
const contactFormStatus = document.querySelector('.contact__form-status')

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  contactFormStatus.textContent = 'Sending...'

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      contactFormStatus.textContent = "Thanks! Your message has been sent — I'll get back to you soon."
      contactFormStatus.classList.remove('contact__form-status--error')
      contactFormStatus.classList.add('contact__form-status--success')
      contactForm.reset()
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    contactFormStatus.textContent = 'Something went wrong. Please try again or email me directly.'
    contactFormStatus.classList.remove('contact__form-status--success')
    contactFormStatus.classList.add('contact__form-status--error')
  }
})

/** Render project cards from the list in projects.js **/
const projectsList = document.querySelector('.projects__content')

projects.forEach((project) => {
  const isExternalLink = /^https?:\/\//.test(project.link)

  const row = document.createElement('div')
  row.className = 'projects__row'
  row.innerHTML = `
    <div class="projects__row-img-cont">
      <img src="${project.image}" alt="${project.title} screenshot" class="projects__row-img" loading="lazy" />
    </div>
    <div class="projects__row-content">
      <h3 class="projects__row-content-title">${project.title}</h3>
      <p class="projects__row-content-desc">${project.description}</p>
      <div class="btn-group">
        <a href="${project.link}" class="btn"${isExternalLink ? ' target="_blank" rel="noreferrer"' : ''}>View Project</a>
      </div>
    </div>
  `
  projectsList.appendChild(row)
})

/** typed.js typing effect for the hero heading **/
var typed = new Typed(".input", {
  strings: ["Frontend Developer", "Web Developer", "Software Developer"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true
})

/** Header hamburger menu (mobile nav) **/
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

/** Clicking the logo returns to the top of the page **/
const headerLogoContainer = document.querySelector('.header__logo-container')

headerLogoContainer.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

/** Scroll down mouse icon **/
var mouseScrollDown = document.querySelector(".mouse-scroll-down");
mouseScrollDown.addEventListener("click", function () {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
