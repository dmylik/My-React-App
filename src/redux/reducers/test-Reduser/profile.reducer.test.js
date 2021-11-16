import profileReducer, {addPostActionCreator} from '../profile-reducer'
import React from "react"


it('length of posts should be incremented', () => {
    // 1. test data (start data)
    let action = addPostActionCreator("Test Add new Post");
    let state = {
        postArray: [
            {id: 1, post: 'Hello Pes', likes: 234},
            {id: 2, post: 'This is first React project', likes: 1},
            {id: 3, post: 'I am lus', likes: 941},
            {id: 4, post: 'This is bad idea', likes: 6},
            {id: 5, post: 'I know((', likes: 23},
            {id: 6, post: 'oh no', likes: 1}]
    };

    // 2. action (то что получилось)
    let newState = profileReducer(state,action);

    // 3. Проверка результата и ожидаемых данных
     expect (newState.postArray.length).toBe(7);
});