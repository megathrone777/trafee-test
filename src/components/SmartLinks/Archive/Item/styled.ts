import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  cursor: pointer;
  height: ${({ theme }) => theme.rem(40)};
  margin-bottom: ${({ theme }) => theme.rem(12)};
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.rem(15)};
  position: relative;
`;

export const StyledLayout = styled.div`
  display: flex;
  position: relative;
  left: 0;
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
