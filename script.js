const showModal = document.querySelector('.show__modal')
const modalWindow = document.querySelector('.modal__window')
const exitModal = document.querySelector('.wrap__exit')
const shopModal = document.querySelector('.window__buy')
const buyModal = document.querySelectorAll('.clock__context')
const taskList = document.querySelector('.ul__item')

document.querySelector('.burger__menu').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('.fa-bars').classList.toggle('active')
})

function closeMenu() {
    document.querySelector('.window__buy').classList.add('hidden')
}

function showModalFunc() {

    showModal.addEventListener('click', (e)=> {
        e.preventDefault()
        modalWindow.classList.remove('hidden')

    })
    exitModal.addEventListener('click', ()=> {
        modalWindow.classList.add('hidden')
    })
    buyModal.forEach((i) => {
        i.addEventListener('click', ()=> {
            const taskHTML = `
            <li class="list-group-item">
                <span class="task-title">Часы номер ${taskList.children.length}</span>
                <div class="button__deltete">
                    <button class="btn-action" data-action="delete">
                        <img src="img/delate.png" alt="">
                    </button>
                </div>
            </li>
            `
            taskList.insertAdjacentHTML('beforeend', taskHTML)
            document.querySelector('.window__buy').classList.remove('hidden')
            setTimeout(closeMenu, 3000)
        })
    });

}
const deleteTask = e => {
    if ((e.target.dataset.action == 'delete')) {
      const parentNode = e.target.closest('.list-group-item')
      parentNode.remove()
    }
}
// document.querySelector('.show__modal').addEventListener('click', function (event) {
taskList.addEventListener('click', deleteTask)

showModalFunc()