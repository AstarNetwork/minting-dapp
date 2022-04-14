import React from 'react';
import {
  ContainerDescription,
  ColumnTitle,
  TextDescription,
  TextHeadline,
  RowDescription,
  TextDescriptionPrimary,
} from './styles/Description.styled';

const Description = () => {
  return (
    <ContainerDescription>
      <ColumnTitle>
        <TextHeadline>
          Free NFT for active stakers in dApp staking.
        </TextHeadline>
      </ColumnTitle>
      <div>
        <RowDescription>
          <TextDescription>
            To claim one free NFT you need to be an active staker in
            <TextDescriptionPrimary>
              {' '}
              dApp Staking on Astar{' '}
            </TextDescriptionPrimary>
            and you need to be regstered as
            <TextDescriptionPrimary> AstarPass </TextDescriptionPrimary>
            holder. Otherwise you can still mint 1 NFT but you need to pay.
            Please make sure you are connected to Astar Network and the correct
            address. Please note: Once you make the purchase, you cannot undo
            this acton
          </TextDescription>
        </RowDescription>
        <RowDescription>
          <TextDescription>
            Please make sure you are connected to Astar Network and the correct
            address. Please note: Once you make the purchase, you cannot undo
            this acton
          </TextDescription>
        </RowDescription>
      </div>
    </ContainerDescription>
  );
};

export default Description;
