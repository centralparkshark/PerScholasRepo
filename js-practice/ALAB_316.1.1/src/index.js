//import "./styles.css"

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = `var(--main-bg)`
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add("flex-ctr")

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

for (let i = 0; i < menuLinks.length; i++) {
    let link = document.createElement("a")
    link.href = `${menuLinks[i].href}`
    link.textContent = `${menuLinks[i].text}`
    topMenuEl.appendChild(link)
}