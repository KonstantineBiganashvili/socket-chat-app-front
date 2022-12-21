import React from 'react';
import { Oval } from 'react-loader-spinner';

import { ActionButtonContainer, LoaderContainer } from './ActionButton.styles';

const ActionButton = ({ text, onClick, loading, disabled }) => (
  <ActionButtonContainer onClick={onClick} disabled={loading || disabled}>
    {loading ? (
      <LoaderContainer>
        <Oval
          height={15}
          width={15}
          color="#D5BDAF"
          visible
          ariaLabel="oval-loading"
          secondaryColor="#EDEDE9"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        Loading...
      </LoaderContainer>
    ) : (
      text
    )}
  </ActionButtonContainer>
);

export default ActionButton;
