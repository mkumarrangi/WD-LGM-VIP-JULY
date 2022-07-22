import Task from './helper/Task.js'
const DateSelec = document.querySelector('.date-info');
const submitForm = document.querySelector('.add-btn');
const Textvalues = document.querySelector('.input-Text');
const MainBox = document.querySelector('.all-tasks');
const pending = document.querySelector('.pending');
const compIcon = document.querySelector('.completed-icon');
const taskStatus = document.querySelector('.get-task-status');
const button = document.querySelector('.clear-button');
class App {
    #list = [];
    constructor() {
        this._getCurrentDate();
        submitForm.addEventListener("click", this._submit.bind(this));
        button.addEventListener('click', this._clearAll.bind(this));
        window.addEventListener('click', this._deleteItem.bind(this));

    }
    _deleteItem(e) {
        if (e.target.classList.contains('cross-img')) {
            let dataIndex = e.target.closest('.one').dataset.numb;
            this.#list.splice(dataIndex, 1);
            console.log(this.#list);
            this._renderThings();
        }
    }
    _clearAll() {
        this.#list = [];
        pending.classList.add('hide');
        this._renderThings();
    }
    _getCurrentDate() {
        let datenow = new Date();
        let options = { month: 'long', day: 'numeric', year: 'numeric' }
        let currentDate = new Intl.DateTimeFormat('en-GB', options).format(datenow);
        DateSelec.value = '';
        DateSelec.innerHTML = currentDate;
    }
    _submit() {
        let input = Textvalues.value;
        if (!input) {
            alert("Empty fields");
            return;
        }
        let obj = new Task(input);
        this.#list.unshift(obj);
        this._renderThings();
        Textvalues.value = '';

    }
    _renderThings() {
        MainBox.innerHTML = '';
        this.#list.forEach((data, index) => {
            let html = `<div class="one" data-numb="${index}">${data.inputvalue}<img class="cross-img" src="https://i.ibb.co/Yyxv7qC/remove.png" alt="photo"></div>`;
            MainBox.insertAdjacentHTML('beforeend', html);
        })
        if (this.#list.length > 0) {
            compIcon.classList.add('hide');
            pending.classList.remove('hide');
            taskStatus.innerHTML = '';
            taskStatus.innerHTML = `You have ${this.#list.length} pending task`;
        }
        else {
            compIcon.classList.remove('hide');
            pending.classList.add('hide');
        }

    }
}
const newApp = new App();
window.addEventListener('click', (e) => {
    console.log(e.target);
})


