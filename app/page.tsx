import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-3/6 min-h-screen ">
        <div className="grid w-full grid-cols-6 grid-rows-6 gap-5">
          <Header />
          <div className="flex justify-center col-span-6 row-start-3 row-end-5 overflow-hidden">
            <div className="flex w-full max-w-3xl flex-col h-full">
              <div className="flex flex-grow justify-start items-end text-[300px] opacity-70 leading-[165px] -ml-6 select-none">
                ALEX
              </div>
              <div className="flex justify-center gap-32 flex-row w-full h-5">
                <span className="text-center">FULL STACK DEVELOPER</span>
                <span className="text-center">VANCOUVER, CANADA</span>
              </div>
              <div className="flex flex-grow justify-end items-start text-[300px] opacity-40 leading-[144px] -mr-8 sel5 sel5 sel5 sel5 select-none">
                HSIEH
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <div className="flex w-3/6 screen">
        <div className="grid w-full grid-col-6 gap-5">
          <div className="flex col-span-6 justify-center items-center">
            <div className="flex flex-row">
              <div>inventing through code</div>
              <div className="animate-blink">_</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
