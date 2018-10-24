import React from 'react';

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export class Chrome extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="pf-l-page" id="page">
        {this.props.header}
        {this.props.sidebar}
        {this.props.children}
      </div>
    );
  }
}
