import React, { useState, useContext } from "react";
import { useNotifications } from "reapop";

import { archiveLink } from "~/store/actions";
import { MainContext } from "~/store";
import { TSmartLink } from "~/store/initialState";
import {
  StyledWrapper,
  StyledLayout,
  StyledInfo,
  StyledOptions,
  StyledName,
  StyledType,
  StyledActions,
  StyledReports,
  StyledArchive,
  StyledDelete,
  StyledActionIcon,
  StyledSVGSymbol,
  StyledPathSymbol,
} from "./styled";

const Item: React.FC<TSmartLink> = ({
  name,
  smartlinkVertical,
  balance,
  epm,
}) => {
  const { notify } = useNotifications();
  const { dispatch } = useContext(MainContext);
  const [isOpened, toggleIsOpened] = useState<boolean>(false);

  const handleOpened = (): void => {
    toggleIsOpened(!isOpened);
  };

  const handleReports = (): void => {
    notify({
      dismissAfter: 1000,
      position: "top-left",
      status: "success",
      title: `Link report`,
    });

    fetch(
      `https://www.trafee.com/reports/?reports%5Btype%5D=date&reports%5BdateRange%5D=19-11-2020%20-%2025-11-2020&reports%5Bsmartlink%5D%5B0%5D=281244?id=${name}`
    ).then((data) => {
      console.info(data);
    });
  };

  const handleArchive = (): void => {
    dispatch(archiveLink({ name, smartlinkVertical, balance, epm }));

    notify({
      dismissAfter: 1000,
      position: "top-left",
      status: "warning",
      title: `Link archived`,
    });

    fetch(`https://www.trafee.com/smartlink/delete/281244?id=${name}`).then(
      (data) => {
        console.info(data);
      }
    );
  };

  return (
    <StyledWrapper>
      <StyledLayout isOpened={isOpened} onClick={handleOpened}>
        <StyledInfo>
          <StyledName>{name}</StyledName>
          <StyledType>{smartlinkVertical}</StyledType>
        </StyledInfo>

        <StyledOptions>
          <StyledName>${balance}</StyledName>
          <StyledType>EPM: {epm}</StyledType>
        </StyledOptions>
      </StyledLayout>

      <StyledActions isOpened={isOpened}>
        <StyledReports onClick={handleReports} type="button">
          <StyledActionIcon>
            <StyledSVGSymbol
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <StyledPathSymbol d="M0 0h24v24H0V0z" fill="none" />
              <StyledPathSymbol
                d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
                fill="currentColor"
              />
            </StyledSVGSymbol>
          </StyledActionIcon>
          Reports
        </StyledReports>

        <StyledArchive onClick={handleArchive} type="button">
          <StyledActionIcon>
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
          </StyledActionIcon>
          Archive
        </StyledArchive>

        <StyledDelete type="button">
          <StyledActionIcon>
            <StyledSVGSymbol
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <StyledPathSymbol d="M0 0h24v24H0V0z" fill="none" />
              <StyledPathSymbol
                d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 
                1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                fill="currentColor"
              />
            </StyledSVGSymbol>
          </StyledActionIcon>
          Delete
        </StyledDelete>
      </StyledActions>
    </StyledWrapper>
  );
};

export { Item };
