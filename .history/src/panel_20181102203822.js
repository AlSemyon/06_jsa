import {Dispatcher} from './flux/Dispatcher'

const panelDispatcher = new Dispatcher();

document.querySelector("#userNameInput").addEventListener('input', ({target}) => {
    const name = target.value;
    console.log("Dispatching ...");
    panelDispatcher.dispatch('TODO_NAMEINPUTACTION')
})

document.fontSizeForm.fontSize.forEach(item => {
    item.addEventListener('change', ({target}) => {
        console.log("Dispatching ...");
        panelDispatcher.dispatch('TODO_NAMEINPUTACTION')
    })
})

//Actions 

const UPDATE_USERANME = 'UPDATE_USERANME';
const UPDATE_FONTSIZE = 'UPDATE_FONTSIZE';

const userNameUpdate = name = ({
    type: UPDATE_USERANME,
    payload: name
});

const fontSizeUpdate = size = ({
    type: UPDATE_FONTSIZE,
    payload: size
});