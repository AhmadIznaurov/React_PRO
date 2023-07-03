import React from 'react';

export const Async = () => {
    const x = 1;
    const y = 5
    const str = 'start';
    const strForAsync = 'Please, start your job after 4 second';



    alert(y)
    alert(str);



    setTimeout(() => {
        alert(x);

    }, 3000)




   setTimeout(() => {
    alert(strForAsync);
}, 4000)


    return "Hello world"



}


// Синхронность

// Асинхронность
