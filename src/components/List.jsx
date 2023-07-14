import React from 'react';
import ReactLoading from "react-loading";
import {Button} from "./Button";
import {InputCheck} from "./InputCheck";



export  const List = ({id, deleting, url, handleChecked, handleRemove, albumId, users}) => {

    const user = users.find((u) => u.id === albumId)

    return (

        <li key={id}>
            <InputCheck handleChecked={handleChecked} id={id}/>
            {url}
            <b>
              (email: {user.email})
            </b>
            <Button
                id={id}
                deleting={deleting}
                handleRemove={handleRemove}
            />
            {deleting && (
                <ReactLoading
                    type={"balls"}
                    color={"green"}
                    height={32}
                    width={32}
                />
            )}
        </li>
    );
}
