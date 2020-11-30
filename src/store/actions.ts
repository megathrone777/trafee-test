import { TSmartLink } from "./initialState";

enum TActionTypes {
  SetLinks = "SET_LINKS",
  ArchiveLink = "ARCHIVE_LINK",
  SwitchTab = "SWITCH_TAB",
}

interface TAction {
  payload: any;
  type: TActionTypes;
}

const setLinks = (smartLinks: TSmartLink[]): TAction => ({
  payload: smartLinks,
  type: TActionTypes.SetLinks,
});

const archiveLink = (smartLink: TSmartLink): TAction => ({
  payload: smartLink,
  type: TActionTypes.ArchiveLink,
});

const switchTab = (tab: number): TAction => ({
  payload: tab,
  type: TActionTypes.SwitchTab,
});

export { TActionTypes, TAction, setLinks, archiveLink, switchTab };
