customRender ((reactElement, container)=>{
    const domElement =  document.createElement("reactElement.type")
})

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    childen : "click me"
}

const mainCotainer = document.getElementById("#root")

//custom method (whatOparatin,whereToInject)
customRender(reactElemnt , mainCotainer)