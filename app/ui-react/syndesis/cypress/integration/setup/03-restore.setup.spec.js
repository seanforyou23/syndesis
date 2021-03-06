const constants = require('../../fixtures/constants');

/**
 * 03: RESTORE SNAPSHOT/DATA
 *
 * The purpose of this "test" is to restore the snapshot and, therefore, data
 * to the database. We first reset the database to increase the likelihood
 * of having a predictable test environment, then test to see if the data
 * exists as expected, from the perspective of the user.
 */

describe('Restore Snapshot', () => {
  let latestSnapshot;

  it.skip('gets the snapshot', () => {
    cy.log('Retrieving latest snapshot...');
    cy.task('getSnapshot').then(snapshot => {
      latestSnapshot = snapshot;
    });
  });

  it.skip('restores the snapshot', () => {
    cy.request({
      method: 'POST',
      url: 'api/v1/test-support/restore-db',
      headers: {
        'SYNDESIS-XSRF-TOKEN': constants.XSRF_TOKEN,
      },
      body: latestSnapshot,
    });
  });
});
