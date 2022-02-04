import styled from "styled-components";

export const Content = styled.div`
  ${({ size, weight }: { size: string; weight: string }) => {
    return `font-size: ${size}; font-weight: ${weight}`;
  }}
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
