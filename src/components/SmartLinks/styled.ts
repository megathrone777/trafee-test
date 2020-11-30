import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const StyledTab = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => isVisible ? "block" : "none"};
  height: ${({ theme }) => theme.rem(520)};
`;
