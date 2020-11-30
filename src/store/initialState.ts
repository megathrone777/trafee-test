interface TSmartLink {
  balance: number;
  epm: number;
  name: string;
  smartlinkVertical: string;
}

interface TState {
  activeTab: number;
  smartLinks: TSmartLink[];
  archivedLinks: TSmartLink[];
}

const initialState: TState = {
  activeTab: 1,
  smartLinks: [],
  archivedLinks: [],
};

export { TSmartLink, TState, initialState };
