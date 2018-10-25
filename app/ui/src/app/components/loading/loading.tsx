import React from 'react';

export const Loading = (props: any) => {
  if (props.error) {
    return <div>problem loading component:</div>;
  } else if (props.pastDelay) {
    return <div>Loading Component...</div>;
  } else {
    return null;
  }
};
