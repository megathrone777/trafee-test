import React, { useContext } from "react";

import { Item } from "./Item";
import { MainContext } from "~/store";
import { TSmartLink } from "~/store/initialState";
import { StyledWrapper, StyledList } from "./styled";

const List: React.FC = () => {
  const { state } = useContext(MainContext);
  const { smartLinks } = state;

  return (
    <StyledWrapper>
      {smartLinks && !!smartLinks.length && (
        <StyledList>
          {smartLinks.map(
            (
              { name, smartlinkVertical, balance, epm }: TSmartLink,
              index
            ): React.ReactElement => (
              <Item
                key={`${name}-${smartlinkVertical}-${index}`}
                name={name}
                smartlinkVertical={smartlinkVertical}
                balance={balance}
                epm={epm}
              />
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { List };
