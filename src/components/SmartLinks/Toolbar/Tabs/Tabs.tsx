import React, { useContext } from "react";

import { MainContext } from "~/store";
import { switchTab } from "~/store/actions";
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledLink,
  StyledLinkIcon,
  StyledSVGSymbol,
  StyledPathSymbol,
} from "./styled";

const Tabs: React.FC = () => {
  const { state, dispatch } = useContext(MainContext);
  const { activeTab } = state;

  const handleTab = (
    event: React.SyntheticEvent<HTMLAnchorElement>,
    tab: number
  ): void => {
    event.preventDefault();
    dispatch(switchTab(tab));
  };

  return (
    <StyledWrapper>
      <StyledList>
        <StyledItem>
          <StyledLink
            href="#"
            isActive={activeTab === 1}
            onClick={(event) => handleTab(event, 1)}
          >
            <StyledLinkIcon>
              <StyledSVGSymbol
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <StyledPathSymbol d="M0 0h24v24H0z" fill="none" />
                <StyledPathSymbol
                  d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 
                0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                  fill="currentColor"
                />
              </StyledSVGSymbol>
            </StyledLinkIcon>
            Active
          </StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink
            href="#"
            isActive={activeTab === 2}
            onClick={(event) => handleTab(event, 2)}
          >
            <StyledLinkIcon>
              <StyledSVGSymbol
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <StyledPathSymbol d="M0 0h24v24H0V0z" fill="none" />
                <StyledPathSymbol
                  d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 
                    1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"
                  fill="currentColor"
                />
              </StyledSVGSymbol>
            </StyledLinkIcon>
            Archived
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { Tabs };
