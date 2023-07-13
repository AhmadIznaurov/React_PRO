import React from 'react';

export const Button = ({handleRemove, deleting, id}) =>  {
    return (
        <button className="button"
                onClick={() => handleRemove(id)}
                disabled={deleting}>Delete</button>
    );
}

