import React from 'react';
import ReactLoading from "react-loading";

export const InputCheck = ({handleChecked, id}) => {
    return (
        <>
            <input
                type="checkbox"
                checked={id % 2 === 1}
                onChange={() => handleChecked(id)}
            />
            {id || (
                <ReactLoading
                    type={"spokes"}
                    color={"blue"}
                    height={20}
                    width={20}
                />
            )}
        </>

    );
}

