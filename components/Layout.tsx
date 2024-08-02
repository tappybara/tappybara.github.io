import React, { FC } from 'react';

type Props = {
    children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <main>
            <div className="flex flex-row bg-gradient-to-r from-white from-50% to-slate to-50%">
                {children}
            </div>
        </main>
    );
};

export default Layout;
