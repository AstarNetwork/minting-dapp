import styled from 'styled-components';

export const ContainerDescription = styled.div`
  width: 370px;
  padding: 0 24px;
  background: #15243b;
  @media (min-width: 768px) {
    padding: 0;
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 340px;
  }
`;

export const ColumnTitle = styled.div``;

export const TextHeadline = styled.span`
  font-weight: bold;
  font-size: 38px;
  color: white;
  line-height: 45px;
`;

export const TextDescription = styled.span`
  color: #b1b7c1;
  font-weight: 400;
  font-size: 14px;
`;

export const RowDescription = styled.div`
  margin-top: 32px;
  line-height: 21px;
`;

export const LinkPrimary = styled.a`
  color: #05b6fd;
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
