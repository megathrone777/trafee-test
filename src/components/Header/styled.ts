import { css, styled } from "~/theme";

export const StyledWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.rem(70)};
  padding: 0 ${({ theme }) => theme.rem(12)};
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const StyledButtons = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledOptions = styled.div``;

export const StyledMenuToggle = styled.button<{ isOpened: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  height: ${({ theme }) => theme.rem(12)};
  margin-right: ${({ theme }) => theme.rem(20)};
  padding: 0;
  position: relative;
  width: ${({ theme }) => theme.rem(18)};

  &:focus {
    outline: none;
  }
`;

export const StyledMenuToggleHelper = styled.span<{ isOpened: boolean }>`
  background-color: white;
  display: block;
  height: ${({ theme }) => theme.rem(2)};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${({ isOpened }) =>
    isOpened &&
    css`
      top: 0;
      transform: translate3d(0, 5px, 0) rotate(135deg);
      transition-delay: 75ms;
    `}

  &::before,
  &::after {
    background-color: white;
    content: "";
    height: ${({ theme }) => theme.rem(2)};
    position: absolute;
    left: 0;
    right: 0;
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: ease;
  }

  &::before {
    top: 5px;

    ${({ isOpened }) =>
      isOpened &&
      css`
        opacity: 0;
        transition-delay: 0s;
      `}
  }

  &::after {
    top: 10px;

    ${({ isOpened }) =>
      isOpened &&
      css`
        top: 20px;
        transform: translate3d(0, -20px, 0) rotate(-270deg);
        transition-delay: 75ms;
      `}
  }
`;

export const StyledNotificationsLink = styled.a`
  color: white;
  display: block;
  width: ${({ theme }) => theme.rem(16)};
`;

export const StyledSVGSymbol = styled.svg``;
export const StyledPathSymbol = styled.path``;
