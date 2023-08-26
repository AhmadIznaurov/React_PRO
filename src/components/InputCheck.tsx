import React from 'react';
import ReactLoading from "react-loading";

interface InputCheckProps {
    handleChecked: (id: number) => void
    id: number
}

export const InputCheck: React.FC<InputCheckProps> = ({handleChecked, id}) => {
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

