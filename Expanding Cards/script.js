// Using querySelectorAll will create an array of panels
const panels = document.querySelectorAll('.panel')

// Loop through every panel to run the removeActiveClasses function, and adding active to the panel that's being clicked on
// ClassList is a special object with methods to add/remove/toggle a single class

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})


// Use function declaration to remove active

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     }) 
// }

// Use arrow function to remove active

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

