import { styled } from "~/theme";

export const StyledWrapper = styled.footer`
  align-items: center;
  background-color: white;
  bottom: 0;
  border-top: ${({ theme }) => theme.rem(1)} solid
    ${({ theme }) => theme.colors.gray};
  display: flex;
  height: ${({ theme }) => theme.rem(50)};
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
`;
