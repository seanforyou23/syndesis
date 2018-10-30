import React from 'react';

export const Loading = (props: any) => {
  if (props.error) {
    return (
      <div className={'pf-l-page__main-section'}>
        <div>problem loading component: {props.error.message}</div>
        <pre>{props.error.stack}</pre>
      </div>
    )
  } else if (props.pastDelay) {
    return <div>Loading Component...</div>;
  } else {
    return null;
  }
};
