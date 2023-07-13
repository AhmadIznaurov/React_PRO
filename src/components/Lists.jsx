import React from 'react';
import {useSelector} from "react-redux";
import {List} from "./List";

export const Lists = ({handleChecked, handleRemove}) => {
    const list = useSelector((state) => state.photos);

    return (
        <div>
            {
                <ol>
                    {list.map(item => (
                        <List
                            id={item.id} // Добавлено id к item внутри цикла map, чтобы ошибка не выбрасывалась в консоле DOM
                            key={item.id}
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

