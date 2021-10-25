//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
        navFriends: [
            {nameFriend: 'Elsa'},
            {nameFriend: 'Emma'},
            {nameFriend: 'Emilia'}]
    };

//Reducer для диалогов, принимает:
//state - только для себя (navPage) и
//action - набор всех возможных команд
const navReducer = (state = initialState, action) => {
    return state;
};

// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения


export default navReducer;