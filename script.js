function toggleMode() {
    const html = document.documentElement

    //if(html.classList.contains("light")) {
    //    html.classList.remove ("light")
    //} else {
    //   html.classList.add ("light")
    //}
    html.classList.toggle("light")

    // pegar a tag imagem
    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        // se tiver o light mode adiciona a imagem da jinx happy
        img.setAttribute(
            "src",
            "https://img.wattpad.com/451d3e1f43ab53940abd58b05082f644856d1085/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f505a73615f4c704e5154484563773d3d2d313139303738343634362e313664326131626263356135333133313437323435363339323333342e6a7067?s=fit&w=720&h=720"
        )
    } else {
        // senão tiver o light mode adiciona a imagem da jinx pistola
        img.setAttribute(
            "src",
            "https://para-pc.net/wp-content/uploads/2022/09/328902.jpg"
        )
    }
}
