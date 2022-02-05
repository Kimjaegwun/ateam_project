import styled from "styled-components";
import { ProtoData } from "../containers/PartnerContainer";
import { Content } from "../style/styles";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;
  border: 1px solid #e5e5e5;
  padding: 24px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  &:hover {
    border: 2px solid #2196f3;
    margin: -2px -2px 14px -2px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Counsel = styled.div`
  border: 1px solid #ffa000;
  padding: 2px 8px;
  color: #ffa000;
  font-size: 12px;
  border-radius: 12px;
`;

const Bar = styled.div`
  display: flex;
  flex: 1;
  border: 0px solid #e5e5e5;
  border-bottom-width: 1px;
  margin-bottom: 32px;
`;

const ContentBox = styled.div`
  display: flex;
  & + & {
    margin-top: 8px;
  }
`;

const ButtonWrappler = styled.div`
  display: flex;
  margin-top: 32px;
`;

const RequestButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  background-color: #2196f3;
  color: #ffffff;
  border-radius: 4px;
  margin-right: 10px;
  border-width: 0px;
  cursor: pointer;
`;

const ChatButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #2196f3;
  color: #2196f3;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
`;

const DetailCard = ({ data, index }: { data: ProtoData; index: number }) => {
  const { title, client, due, count, amount, status, method, material } = data;
  return (
    <CardWrapper style={{ marginLeft: index % 3 === 0 ? "0px" : "16px" }}>
      <TitleBox>
        <Content size="16px" weight="900" style={{ marginBottom: "4px" }}>
          {title}
        </Content>
        {status === "상담중" && (
          <FlexWrapper>
            <Counsel>상담중</Counsel>
          </FlexWrapper>
        )}
      </TitleBox>

      <Content size="14px" weight="500" style={{ marginBottom: "24px" }}>
        {client}
      </Content>

      <Content
        size="14px"
        weight="400"
        style={{ marginBottom: "16px", color: "#939FA5" }}
      >
        {due}까지 납기
      </Content>

      <Bar />

      <ContentBox>
        <Content
          size="14px"
          weight="400"
          style={{ width: "70px", marginRight: "32px" }}
        >
          도면개수
        </Content>
        <Content size="14px" weight="700">
          {count}개
        </Content>
      </ContentBox>

      <ContentBox>
        <Content
          size="14px"
          weight="400"
          style={{ width: "70px", marginRight: "32px" }}
        >
          총 수량
        </Content>
        <Content size="14px" weight="700">
          {amount}개
        </Content>
      </ContentBox>

      <ContentBox>
        <Content
          size="14px"
          weight="400"
          style={{ width: "70px", marginRight: "32px" }}
        >
          가공방식
        </Content>
        <Content size="14px" weight="700">
          {method.join(", ")}
        </Content>
      </ContentBox>

      <ContentBox>
        <Content
          size="14px"
          weight="400"
          style={{ width: "70px", marginRight: "32px" }}
        >
          재료
        </Content>
        <Content size="14px" weight="700">
          {material.join(", ")}
        </Content>
      </ContentBox>

      <ButtonWrappler>
        <RequestButton>요청 내역 보기</RequestButton>
        <ChatButton>채팅하기</ChatButton>
      </ButtonWrappler>
    </CardWrapper>
  );
};

export default DetailCard;
