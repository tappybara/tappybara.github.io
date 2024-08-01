import React, { FC } from "react";
import Link from 'next/link'

const Footer: FC = () => {
  return (
      <div className="flex flex-col col-start-2 col-span-4 row-start-6 p-4 justify-end">
        <div className="flex justify-between">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/works">works</Link>
          <Link href="/contact">contact</Link>
        </div>
      </div>
  );
};

export default Footer;
