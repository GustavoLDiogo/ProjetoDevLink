function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("alt", "Imagem de perfil do Gustavo modo escuro")
    } else {
        img.setAttribute("alt", "Imagem de perfil do Gustavo modo claro")
    }


}