import { FC, ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  toggleTheme: () => void;
};

const Layout: FC<LayoutProps> = ({ children, toggleTheme }) => (
  <>
    <Header toggleTheme={toggleTheme} />
    {children}
  </>
);

export default Layout;
