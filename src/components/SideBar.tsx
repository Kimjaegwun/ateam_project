import React from "react";
import styled, { css } from "styled-components";
import { Content, Img } from "../style/styles";

const SideMenuBackground: any = styled.div`
  display: flex;
  opacity: 0.5;
  background-color: #000000;
  display: ${(props: any) => (props.sideMenu ? "flex" : "none")};
  position: absolute;
`;

const SideMenuContainer: any = styled.div`
  display: ${(props: any) => (props.sideMenu ? "flex" : "none")};
  position: absolute;
  z-index: 10;
  ${(props: any) =>
    props.sideMenu !== null &&
    css`
      animation: 0.7s ${(props: any) => (props.sideMenu ? "showUp" : "showOut")}
        forwards;
    `}

  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
`;

const TitleBox = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const MenuBox = styled.div`
  padding: 36px 32px;
`;
const SideBar = React.memo(
  ({
    sideMenu,
    hideSideMenu,
  }: {
    sideMenu: boolean;
    hideSideMenu: () => void;
  }) => {
    return (
      <>
        <SideMenuContainer sideMenu={sideMenu}>
          <ContentWrapper
            style={{
              width: window.innerWidth * 0.6,
              height: window.innerHeight,
            }}
          >
            <TitleBox>
              <Img
                src="/images/side_logo.png"
                alt="side-logo-img"
                width="92px"
                height="12px"
              />
            </TitleBox>
            <MenuBox>
              <Content
                size="14px"
                weight="900"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <Img
                  src="/images/partner_black.png"
                  alt="side-logo-img"
                  width="15px"
                  height="15px"
                  style={{ marginRight: "8px" }}
                />
                파트너정밀가공
              </Content>
              <Content size="14px" weight="900">
                로그아웃
              </Content>
            </MenuBox>
          </ContentWrapper>
        </SideMenuContainer>
        <SideMenuBackground
          sideMenu={sideMenu}
          style={{ width: window.innerWidth, height: window.innerHeight }}
          onClick={hideSideMenu}
        />
      </>
    );
  }
);

export default SideBar;
