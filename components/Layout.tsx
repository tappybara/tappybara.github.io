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
            <div className="flex flex-col relative min-h-screen h-auto lg:bg-gradient-to-r lg:from-white from-50% lg:to-slate to-50%">
                <Header colour={theme} />
                <div className="flex overflow-scroll grow h-0">{children}</div>
                <Footer colour={theme} />
            </div>
        </main>
    );
};

export default Layout;
