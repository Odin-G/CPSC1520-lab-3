//Task 1
let resourcesDiv = document.getElementById('resources')
let showResourcesButton = document.getElementById('show-resources')

showResourcesButton.addEventListener('click', onClickShowResourcesButton)

function onClickShowResourcesButton(e) {
    resourcesDiv.classList.remove('d-none')
}

//Task 2
resourcesDiv.addEventListener('mouseover', onMouseOverResourcesDiv)

function onMouseOverResourcesDiv(e) {
    console.log(e.target)
    e.target.classList.add('fw-bold')
}

//Task 3
resourcesDiv.addEventListener('mouseout', onMouseOutResourcesDiv)

function onMouseOutResourcesDiv(e) {
    e.target.classList.remove('fw-bold')

    //Task 5
    e.target.classList.remove('fst-italic')
}

//Task 4
resourcesDiv.addEventListener('click', onClickResourcesDiv)

function onClickResourcesDiv(e) {
    e.target.classList.add('fst-italic')
}