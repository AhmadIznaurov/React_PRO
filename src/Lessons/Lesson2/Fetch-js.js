import React from 'react';
import {func} from "./export.module";

export const Fetch = () => {

    // const promise = new Promise((resolve, reject) => {
    //     const a = 700;
    //     const b = 500;
    //     const c = a > b
    //
    //     if (c) {
    //         resolve(console.log(`This component is ${c}`));
    //     } else {
    //         reject('ERROR')
    //     }
    // })
    //
    // promise.then((res) =>  {
    //     return console.log(res);
    // }).catch((error) => {
    //     console.log(error);
    // })




    // const getUsers = () => {
    //     return fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Not answer from the server');
    //         }
    //         return response.json();
    //     })
    // }
    // getUsers()
    //     .then((users) => {
    //         console.log(users);
    //     }).catch((e) => {
    //     console.log(e);
    // })


   console.log(func(8,9))



}
