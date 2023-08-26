import React from 'react';

interface ButtonProps {
    id: number
    deleting: boolean
    handleRemove:  (id: number) => void
}

export const Button: React.FC<ButtonProps> = ({handleRemove, deleting, id}) =>  {
    return (
        <button className="button"
                onClick={() => handleRemove(id)}
                disabled={deleting}>Delete</button>
    );
}

