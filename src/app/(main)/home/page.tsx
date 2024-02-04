import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image src="/frey2fadeslogo.png" alt="logo" />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center bg-gray-50 w-full gap-36">
        <div className="">
          <h1 className="font-mono text-3xl text-center">Some of my works..</h1>
        </div>
        <div className="h-96 flex items-center">
          {/* <div className="w-1/2 font-mono text-3xl">
                        Portfolio
                    </div> */}
          <div className="space-y-2">
            <div className="flex flex-row space-x-2">
              <div className="">
                <Image src="/karina1.png" alt="Example portfolio photo" />
              </div>
              <div className="">
                <Image src="/karinals.png" alt="Example portfolio photo" />
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="">
                <Image src="/wonyoungls.png" alt="Example portfolio photo" />
              </div>
              <div className="">
                <Image src="/wonyoung1.png" alt="Example portfolio photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row flex-wrap items-center justify-center bg-gray-50 w-full gap-36">
                <div>
                    hello
                </div>
                <div>
                    <h1 className="font-mono text-3xl text-center">
                        Where we are
                    </h1>
                </div>
            </div> */}
    </div>
  );
}
