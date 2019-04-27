import { Text, Title } from '@patternfly/react-core';
import { ListView } from 'patternfly-react';
import * as React from 'react';
import { Container } from '../Layout';

export interface IIntegrationEditorChooseActionProps {
  /**
   * The internationalized title.
   */
  i18nTitle: string;
  /**
   * The internationalized subtitle.
   */
  i18nSubtitle: string;
}

/**
 * A component to render a list of actions, to be used in the integration
 * editor.
 * @see [i18nTitle]{@link IIntegrationEditorChooseActionProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorChooseActionProps#i18nSubtitle}
 */
export class IntegrationEditorChooseAction extends React.Component<
  IIntegrationEditorChooseActionProps
> {
  public render() {
    return (
      <>
        <Container className="pf-u-my-md">
          <Title size="xl">{this.props.i18nTitle} - Choose Action</Title>
          <Text>{this.props.i18nSubtitle}</Text>
        </Container>
        <Container>
          <ListView>{this.props.children}</ListView>
        </Container>
      </>
    );
  }
}
