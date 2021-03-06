import * as H from '@syndesis/history';
import { APISummary } from '@syndesis/models';
import {
  ApiClientConnectorCreateSecurity,
  ApiConnectorCreatorLayout,
  PageSection,
} from '@syndesis/ui';
import { useRouteData } from '@syndesis/utils';
import * as React from 'react';
import { Translation } from 'react-i18next';
import { PageTitle } from '../../../../shared';
import { WithLeaveConfirmation } from '../../../../shared/WithLeaveConfirmation';
import {
  ApiConnectorCreatorBreadcrumb,
  ApiConnectorCreatorWizardSteps,
} from '../../components';
import resolvers from '../../resolvers';
import routes from '../../routes';

export interface ISecurityPageRouteState {
  specification: APISummary;
}

export const SecurityPage: React.FunctionComponent = () => {
  const { state, history } = useRouteData<null, ISecurityPageRouteState>();
  const { specification } = state;
  const { properties } = specification;
  const backHref = resolvers.create.review({
    specification: specification.configuredProperties!.specification,
  });
  const onNext = (authType?: string, authUrl?: string, tokenUrl?: string) => {
    if (authType === 'unselected') {
      throw new Error('Invalid authentication typp allowed');
    }
    history.push(
      resolvers.create.save({
        authenticationType: authType,
        authorizationEndpoint: authUrl,
        specification,
        tokenEndpoint: tokenUrl,
      })
    );
  };
  const extractAuthType = (authType?: string): string => {
    // avoid npe
    if (typeof authType === 'undefined') {
      return 'unselected';
    }
    // mask out this special value
    if (authType === 'none') {
      return 'none';
    }
    // extract the type from the type:value scheme that this field uses
    return authType.split(':')[0];
  };
  const isValid = (authType?: string, authUrl?: string, tokenUrl?: string) => {
    const type = extractAuthType(authType);
    switch (type) {
      case 'apiKey':
      case 'basic':
      case 'none':
        return true;
      case 'oauth2':
        return (
          typeof authUrl !== 'undefined' &&
          typeof tokenUrl !== 'undefined' &&
          authUrl !== '' &&
          tokenUrl !== ''
        );
      default:
        return false;
    }
  };
  return (
    <Translation ns={['apiClientConnectors', 'shared']}>
      {t => (
        <WithLeaveConfirmation
          i18nTitle={t('apiClientConnectors:create:unsavedChangesTitle')}
          i18nConfirmationMessage={t(
            'apiClientConnectors:create:unsavedChangesMessage'
          )}
          shouldDisplayDialog={(location: H.LocationDescriptor) => {
            const url =
              typeof location === 'string' ? location : location.pathname!;
            return !url.startsWith(routes.create.root);
          }}
        >
          {() => (
            <>
              <PageTitle
                title={t('apiClientConnectors:create:security:title')}
              />
              <ApiConnectorCreatorBreadcrumb cancelHref={resolvers.list()} />
              <ApiConnectorCreatorLayout
                header={<ApiConnectorCreatorWizardSteps step={3} />}
                content={
                  <PageSection>
                    <ApiClientConnectorCreateSecurity
                      initialAccessTokenUrl={
                        (properties!.tokenEndpoint &&
                          properties!.tokenEndpoint.defaultValue)
                      }
                      initialAuthenticationType={
                        properties!.authenticationType.defaultValue
                      }
                      initialAuthorizationUrl={
                        (properties!.authorizationEndpoint &&
                          properties!.authorizationEndpoint.defaultValue)
                      }
                      authenticationTypes={
                        properties!.authenticationType &&
                        (
                          properties!.authenticationType.enum || []
                        ).sort((a, b) => a.value!.localeCompare(b.value!))
                      }
                      backHref={backHref}
                      extractAuthType={extractAuthType}
                      i18nAccessTokenUrl={t(
                        'apiClientConnectors:create:security:accessTokenUrl'
                      )}
                      i18nAuthorizationUrl={t(
                        'apiClientConnectors:create:security:authorizationUrl'
                      )}
                      i18nBtnBack={t('Back')}
                      i18nBtnNext={t('Next')}
                      i18nNoSecurity={t(
                        'apiClientConnectors:create:security:noSecurity'
                      )}
                      i18nTitle={t('apiClientConnectors:create:security:title')}
                      i18nDescription={t(
                        'apiClientConnectors:create:security:description'
                      )}
                      isValid={isValid}
                      onNext={onNext}
                    />
                  </PageSection>
                }
              />
            </>
          )}
        </WithLeaveConfirmation>
      )}
    </Translation>
  );
};
