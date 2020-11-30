import React, { useContext } from "react";

import { Item } from "./Item";
import { MainContext } from "~/store";
import { TSmartLink } from "~/store/initialState";
import { StyledWrapper, StyledList } from "./styled";

const Archive: React.FC = () => {
  const { state } = useContext(MainContext);
  const { archivedLinks } = state;

  return (
    <StyledWrapper>
      {archivedLinks && !!archivedLinks.length && (
        <StyledList>
          {archivedLinks.map(
            ({ name, smartlinkVertical, balance, epm }: TSmartLink, index) => (
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

export { Archive };
