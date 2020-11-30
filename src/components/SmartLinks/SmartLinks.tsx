import React, { useContext } from "react";
import NotificationsSystem, { bootstrapTheme, useNotifications } from "reapop";

import { MainContext } from "~/store";
import { Toolbar } from "./Toolbar";
import { List } from "./List";
import { Archive } from "./Archive";
import { StyledWrapper, StyledTab } from "./styled";

const SmartLinks: React.FC = () => {
  const { notifications, dismissNotification } = useNotifications();
  const { state } = useContext(MainContext);
  const { activeTab } = state;

  return (
    <StyledWrapper>
      <Toolbar />

      <StyledTab isVisible={activeTab === 1}>
        <List />
      </StyledTab>

      <StyledTab isVisible={activeTab === 2}>
        <Archive />
      </StyledTab>

      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={bootstrapTheme}
      />
    </StyledWrapper>
  );
};

export { SmartLinks };
