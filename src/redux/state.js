import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, my name is Alesha', likesCount: 15},
            {id: 2, message: 'Hi, Alesha', likesCount: 20},
        ],
        newPostText: 'I am a new post text',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi! How are you?'},
            {id: 3, message: 'I`m OK'},
        ],
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sergey'},
            {id: 3, name: 'Ekaterina'},
            {id: 4, name: 'Alexey'},
            {id: 5, name: 'Igor'},
            {id: 6, name: 'Olga'},
            {id: 7, name: 'Valera'},
        ],
    },
}


 export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;