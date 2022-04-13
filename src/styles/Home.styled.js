import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperMint = styled.div`
  background: #15253b;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    column-gap: 12px;
    flex-direction: row;
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    column-gap: 38px;
  }
`;
