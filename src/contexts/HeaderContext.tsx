// import React, { Children, Dispatch, SetStateAction } from "react";

// export const headerContextDefault = {
//   menu: "is-closed",
//   setMenu: Dispatch<SetStateAction<string>>,
//   //  Function,
// };
// export const HeaderContext = React.createContext(headerContextDefault);

// export const useHeaderContext = () => React.useContext(HeaderContext);
// export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
//   const [menu, setMenu] = React.useState("is-closed");

//   return (
//     <HeaderContext.Provider value={{ menu, setMenu }}>
//       {children}
//     </HeaderContext.Provider>
//   );
// };

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface HeaderContextType {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}

export const headerContextDefault: HeaderContextType = {
  menu: "is-closed",
  setMenu: () => {}, // Placeholder function
};

export const HeaderContext = createContext(headerContextDefault);

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<string>("is-closed");

  return (
    <HeaderContext.Provider value={{ menu, setMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};
