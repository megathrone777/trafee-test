import React from "react";

import { TSmartLink } from "~/store/initialState";
import {
  StyledWrapper,
  StyledLayout,
  StyledInfo,
  StyledOptions,
  StyledName,
  StyledType,
} from "./styled";

const Item: React.FC<TSmartLink> = ({
  name,
  smartlinkVertical,
  balance,
  epm,
}) => {
  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledInfo>
          <StyledName>{name}</StyledName>
          <StyledType>{smartlinkVertical}</StyledType>
        </StyledInfo>

        <StyledOptions>
          <StyledName>${balance}</StyledName>
          <StyledType>EPM: {epm}</StyledType>
        </StyledOptions>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Item };
