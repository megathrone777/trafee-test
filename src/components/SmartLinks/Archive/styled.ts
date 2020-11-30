import { styled } from "~/theme";
import { scrollbar } from "~/theme/mixins/scrollbar";

export const StyledWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.21);
  height: calc(100% - ${({ theme }) => theme.rem(50)});
  margin: ${({ theme }) => theme.rem(14)};
  overflow-y: scroll;
  padding-top: ${({ theme }) => theme.rem(12)};

  ${scrollbar}
`;

export const StyledEmpty = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const StyledList = styled.div``;
