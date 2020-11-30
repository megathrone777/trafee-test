import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  border: ${({ theme }) => theme.rem(1)} solid
    ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(375)};
  position: relative;
`;
