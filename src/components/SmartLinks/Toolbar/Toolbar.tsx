import React from "react";

import { Tabs } from "./Tabs";
import { StyledWrapper, StyledLayout, StyledTitle, StyledAdd } from "./styled";

const Toolbar: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledTitle>Smart links</StyledTitle>
        <StyledAdd type="button">+ Add new</StyledAdd>
      </StyledLayout>

      <Tabs />
    </StyledWrapper>
  );
};

export { Toolbar };
