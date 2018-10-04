import React from 'react';
import './apicurio-wc';

export interface Props {
  onCommandExecuted?: string;
  onSelectionChanged?: string;
  api: any;
  embedded: boolean;
}

export class ApicurioLoader extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <apicurio-component embedded={true} />;
  }

}
