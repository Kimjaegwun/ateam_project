import styled from "styled-components";
import { Img } from "../style/styles";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1565c0;
  padding: 16px 24px;
  flex: 1;
`;

const MobileHeader = ({ showSideMenu }: { showSideMenu: () => void }) => {
  return (
    <HeaderWrapper>
      <Img
        src="/images/tab.png"
        alt="tab-img"
        width="24px"
        height="24px"
        style={{ marginRight: "19px" }}
        onClick={showSideMenu}
      />
      <Img src="/images/logo.png" alt="logo-img" width="92px" height="12px" />
    </HeaderWrapper>
  );
};

export default MobileHeader;
