import styled from "styled-components";
import { Content, Img } from "../style/styles";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1360px;
  background-color: #1565c0;
  padding: 25px 40px;
  flex: 1;
`;

const PartnerTitleBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  color: #ffffff;
`;

const Bar = styled.div`
  border: 0px solid #c2c7cc;
  border-left-width: 1px;
  height: 16px;
  margin: 0px 32px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Img src="/images/logo.png" alt="logo-img" width="153px" height="20px" />
      <PartnerTitleBox>
        <Img
          src="/images/partner.png"
          alt="logo-img"
          width="16.7px"
          height="15px"
        />
        <Content size="14px" weight="500" style={{ marginLeft: "8px" }}>
          A 가공업체
        </Content>
        <Bar />
        <Content size="14px" weight="500">
          로그아웃
        </Content>
      </PartnerTitleBox>
    </HeaderWrapper>
  );
};

export default Header;
