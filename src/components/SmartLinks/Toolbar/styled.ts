import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background-color: white;
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: ${({ theme }) => theme.rem(40)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
  padding: 0 ${({ theme }) => theme.rem(14)};
`;

export const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.rem(13)};
`;

export const StyledAdd = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.rem(11)};
  height: ${({ theme }) => theme.rem(22)};

  &:hover {
    filter: brightness(110%);
  }
`;
