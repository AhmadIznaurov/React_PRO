import React from 'react';
import {useSelector} from "react-redux";
import {List} from "./List";

export const Lists = ({handleChecked, handleRemove}) => {
    const list = useSelector((state) => state.photos);
    const users = useSelector((state) => state.users)
    return (
        <div>
            {
                <ol>
                    {list.map(item => (
                        <List
                            albumId={item.albumId}
                            id={item.id}
                            key={item.id}
                            users={users}
                            deleting={item.deleting}
                            url={item.url}
                            handleChecked={handleChecked}
                            handleRemove={handleRemove}
                        />
                    ))}
                </ol>
            }
        </div>
    );
}

