import { type ReactNode, type FC } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background-dark text-white font-sans overflow-x-hidden selection:bg-primary selection:text-background-dark">
            {children}
        </div>
    );
};

export default Layout;
