let today = new Date()

thisYear = today.getFullYear()

let footer = document.querySelector('footer')
footer.style = 'border: dotted;'

let copyright = document.createElement('p')

copyright.innerHTML = `Alyssa Easterly ${thisYear}`

footer.appendChild(copyright)

let skills = ['Mermaid', 'Software Engineer', 'Musician', 'Javascript', 'React']

let skillsSection = document.getElementById('skills')

let skillsList = skillsSection.querySelector('ul')

for ( let i = 0; i < skills.length; i++){
    let skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

let messageForm = document.querySelectorAll("form.leave_message")
// let messageForm = document.querySelector("leave_message")

messageForm.addEventListener(() => )