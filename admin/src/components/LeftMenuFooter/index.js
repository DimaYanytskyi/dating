/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import {PropTypes} from 'prop-types';

import Wrapper from './Wrapper';

import messages from './messages.json';

defineMessages(messages);

function LeftMenuFooter({ version, ...rest }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage {...messages.poweredBy} key="poweredBy" />
        <a
          key="website"
          href="https://codecanyon.net/user/morningstarcode/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          morningstarcode
        </a>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
