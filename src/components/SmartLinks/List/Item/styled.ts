import { css, styled } from "~/theme";

export const StyledWrapper = styled.div`
  cursor: pointer;
  height: ${({ theme }) => theme.rem(40)};
  margin-bottom: ${({ theme }) => theme.rem(12)};
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.rem(15)};
  position: relative;
`;

export const StyledLayout = styled.div<{ isOpened: boolean }>`
  display: flex;
  position: relative;
  left: ${({ isOpened }) => (isOpened ? "-55%" : 0)};
  transition: left 0.3s ease-in-out;
`;

const StyledColumn = styled.div`
  flex: 1;
`;

export const StyledInfo = styled(StyledColumn)``;

export const StyledOptions = styled(StyledColumn)`
  text-align: right;
`;

export const StyledName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.rem(14)};
  text-shadow: 0 0 ${({ theme }) => theme.rem(1)}
    ${({ theme }) => theme.colors.black};
`;

export const StyledType = styled.span`
  color: ${({ theme }) => theme.colors.grayDarker};
  font-size: ${({ theme }) => theme.rem(12)};
`;

export const StyledActions = styled.div<{ isOpened: boolean }>`
  bottom: 0;
  display: flex;
  left: ${({ isOpened }) => (isOpened ? "50%" : "100%")};
  position: absolute;
  top: 0;
  width: 50%;
  z-index: 2;
  transition: left 0.3s ease-in-out;
`;

const StyledActionButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.rem(12)};
  padding: 0;
  width: ${({ theme }) => theme.rem(60)};

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(110%);
  }
`;

export const StyledReports = styled(StyledActionButton)`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledArchive = styled(StyledActionButton)`
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const StyledDelete = styled(StyledActionButton)`
  background-color: ${({ theme }) => theme.colors.red};
`;

export const StyledActionIcon = styled.i`
  color: white;
  display: block;
  height: ${({ theme }) => theme.rem(16)};
  margin-bottom: ${({ theme }) => theme.rem(2)};
`;

export const StyledSVGSymbol = styled.svg``;
export const StyledPathSymbol = styled.path``;
