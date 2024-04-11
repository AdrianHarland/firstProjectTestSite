import React, { Children } from "react";

export const headerContextDefault = {
  menu: "is-closed",
  setMenu: Function,
};
export const HeaderContext = React.createContext(headerContextDefault);

export const useHeaderContext = () => React.useContext(HeaderContext);
export const HeaderProvider = ({ children }) => {
  const [menu, setMenu] = React.useState("is-closed");

  return (
    <HeaderContext.Provider value={{ menu, setMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};
