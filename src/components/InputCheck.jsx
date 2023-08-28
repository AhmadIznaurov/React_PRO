import React from 'react';
import ReactLoading from "react-loading";

export const InputCheck = ({handleChecked, id, completed, checking}) => {
    return (
        <>
            {  checking ? (
                <ReactLoading
                  type={"spokes"}
                  color={"blue"}
                  height={20}
                  width={20}
                />
              ) : (
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => handleChecked(id, completed)}
                />
              )
}       </>
    );
}

