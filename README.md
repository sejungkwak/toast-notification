# Toast Notification

![screen recording](https://media.giphy.com/media/y5NlIFTX69qRG739SY/giphy.gif)

#### project notes

1. HTML
- button: Show Notification

2. CSS

3. JavaScript
- click event
- setTimeout 1000ms
- random

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor
1. HTML
- div#toasts > div.toast
- button

2. CSS
- #toasts => position: fixed;, display: flex;

3. JavaScript
```
const messages = [......]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    tosts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
```
if want more specifics, set messages and types
```
const types = ['info', 'success', 'error'] // set different colour in CSS

button.addEventListener('click', () => createNotification('This is invalid data', 'success'))

function createNotification(message = null, type = null) {
    ...
    nofit.classList.add(type ? type : getRandomType())
    
    notif.innerText = message ? message : getRandomMessage()
    ...
}
```