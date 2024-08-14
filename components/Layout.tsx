import React, { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {
    theme?: string;
    children?: React.ReactNode;
};

const Layout: FC<Props> = ({ theme, children }) => {
    return (
        <main>
            <div className="flex flex-col relative min-h-screen bg-gradient-to-r from-white from-50% to-slate to-50%">
                <Header colour={theme} />
                <div className="flex overflow-scroll grow">{children}</div>
                <Footer colour={theme} />
            </div>
        </main>
    );
};

export default Layout;
