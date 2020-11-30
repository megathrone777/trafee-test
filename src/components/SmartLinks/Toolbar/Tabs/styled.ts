import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  flex: 1;
`;

export const StyledLink = styled.a<{ isActive: boolean }>`
  align-items: center;
  border-bottom: ${({ theme }) => theme.rem(1)} solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.orange : 'transparent'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orange : theme.colors.black};
  display: flex;
  font-size: ${({ theme }) => theme.rem(15)};
  height: ${({ theme }) => theme.rem(26)};
  justify-content: center;
  line-height: ${({ theme }) => theme.rem(26)};
  text-align: center;
  text-decoration: none;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledLinkIcon = styled.i`
  display: inline-block;
  margin-right: ${({ theme }) => theme.rem(5)};
  width: ${({ theme }) => theme.rem(20)};
`;

export const StyledSVGSymbol = styled.svg``;
export const StyledPathSymbol = styled.path``;
