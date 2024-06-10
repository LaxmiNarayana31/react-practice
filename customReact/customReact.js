// function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute("target", reactElement.props.target)

//     container.appendChild(domElement)
// }



// The above code in more modular way
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



// whatever you written in App.jsx file. How this file was seen by react
// At the end the jsx files are converted to below format
const reactElement = {
    type: "a",
    props: {   // props means Properties. It is an object
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)