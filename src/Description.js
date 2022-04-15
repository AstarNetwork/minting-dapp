import React from 'react';
import {
  ContainerDescription,
  ColumnTitle,
  TextDescription,
  TextHeadline,
  RowDescription,
  LinkPrimary,
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
<<<<<<< HEAD
            To claim one free NFT you need to be an active staker in
            <TextDescriptionPrimary>
              {' '}
              dApp Staking on Astar{' '}
            </TextDescriptionPrimary>
            and you need to be registered as
            <TextDescriptionPrimary> AstarPass </TextDescriptionPrimary>
            holder. Otherwise, you can still mint 1 NFT but you need to pay.
=======
            To claim one free NFT you need to be an active staker in{' '}
            <LinkPrimary target='_blank' href='https://portal.astar.network/#/dapp-staking/discover'>dApp Staking on Astar</LinkPrimary>{' '}
            and you need to be registered as
            <LinkPrimary href='https://astarpass.astar.network/#/register' target='_blank'> AstarPass </LinkPrimary>
            holder. Otherwise you can still mint 1 NFT but you need to pay.
>>>>>>> 9048700961dfe2f833bf7c92f25cf1cd42abb741
            Please make sure you are connected to Astar Network and the correct
            address. Please note: Once you make the purchase, you cannot undo
            this action.
          </TextDescription>
        </RowDescription>
        <RowDescription>
          <TextDescription>
            Please make sure you are connected to Astar Network and the correct
            address.
          </TextDescription>
        </RowDescription>
      </div>
    </ContainerDescription>
  );
};

export default Description;
