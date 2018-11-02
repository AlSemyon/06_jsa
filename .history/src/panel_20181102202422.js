import {Disputcher} from './flux'


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