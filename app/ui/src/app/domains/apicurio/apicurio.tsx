import React from 'react';
import { Main } from '../../components/main/main';
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
    return (
      <Main>
        <apicurio-component embedded />
      </Main>
    );
  }

}
