const buttons = document.querySelectorAll('#controls div')
const list = document.querySelector('#list')
const thumbs = document.querySelector('.thumbs')
const container = document.querySelector('.container')
// const defaultBg = document.querySelector('.list-content:nth-child(4)')

let i = 3

function moveIntemOnClick(type){
    
    const thumbContents = document.querySelectorAll('.thumbs .thumb-item')
    const backgroundContent = document.querySelectorAll('#list .list-content')

    if (type === 'forward'){
        list.appendChild(backgroundContent[0])
        thumbs.appendChild(thumbContents[0])
        thumbs.classList.add('move-forward')
    }else {
        list.prepend(backgroundContent[backgroundContent.length-1])
        thumbs.prepend(thumbContents[thumbContents.length-1])
        container.classList.add('back')
        thumbs.classList.add('move-back')
    }
}

document.addEventListener('click', (element)=>{
    switch (element.target.id){
        case 'forward':
            moveIntemOnClick(element.target.id)
            break
        case 'back':
            moveIntemOnClick(element.target.id)
            break
    }
})

