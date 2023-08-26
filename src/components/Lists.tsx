import React from 'react';
import {List} from "./List";
import {useTypedSelector} from "../hooks";

interface ListsProps {
    handleChecked: (id: number) => void
    handleRemove:  (id: number) => void
}

export const Lists: React.FC<ListsProps> = ({handleChecked, handleRemove}) => {
    const list = useTypedSelector((state) => state.photos);
    const users = useTypedSelector((state) => state.users)
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

