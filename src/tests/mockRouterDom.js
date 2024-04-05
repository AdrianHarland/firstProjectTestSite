import { MemoryRouter } from "react-router-dom";

const mockRouterDom = (component) => {
  return <MemoryRouter>{component}</MemoryRouter>;
};

export { mockRouterDom };
