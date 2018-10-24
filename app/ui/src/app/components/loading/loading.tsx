import React from 'react';

export const Loading = (props: any) => {
    {
        return (props.error) ?
        <div>problem loading component:</div> :
        <div>Loading Component...</div>;
    }
};
