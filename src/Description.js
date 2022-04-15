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
            To claim one free NFT you need to be an active staker in{' '}
            <LinkPrimary
              target="_blank"
              href="https://portal.astar.network/#/dapp-staking/discover">
              dApp Staking on Astar
            </LinkPrimary>{' '}
            and you need to be registered as
            <LinkPrimary
              href="https://astarpass.astar.network/#/register"
              target="_blank">
              {' '}
              AstarPass{' '}
            </LinkPrimary>
            holder. Otherwise, you can still mint 1 NFT but you need to pay.
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
