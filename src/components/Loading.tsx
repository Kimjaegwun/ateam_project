import styled from "styled-components";
import { Spin } from "antd";
import "antd/lib/spin/style/index.css";

const LoadingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  display: flex;
  height: 15rem;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fa;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spin />
    </LoadingContainer>
  );
};

const ErrorContainer = styled.div`
  padding: 30px 50px;
  text-align: center;
  background-color: #f7f9fa;
  border-radius: 4px;
  height: 15rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 14px;
`;

export const Error = () => {
  return (
    <ErrorContainer>
      데이터를 불러올 수 없습니다.
      <br />
      잠시후에 다시 시도해주세요...
    </ErrorContainer>
  );
};

const EmptyContainer = styled.div`
  padding: 30px 50px;
  text-align: center;
  background-color: #f7f9fa;
  border-radius: 4px;
  height: 15rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 14px;
`;

export const Empty = () => {
  return (
    <EmptyContainer>
      카트에 상품이 없습니다. 상품을 담아주세요 :)
    </EmptyContainer>
  );
};
