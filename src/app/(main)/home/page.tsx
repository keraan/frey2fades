export default function Home() {
    return (
        <div>
            <div>
                <img src="/frey2fadeslogo.png"></img>
            </div>
            <div className="font-mono text-3xl text-center p-12">
                Some of my works..
            </div>
            <div className="h-96 flex">
                {/* <div className="w-1/2 font-mono text-3xl">
                    Portfolio
                </div> */}
                <div className="gap-3">
                    <div className="flex flex-row gap-3">
                        <div className="w-4/12">
                            <img src="/karina1.jpg" className="w-full object-cover"></img>
                        </div>
                        <div className="w-8/12">
                            <img src="/karinals.jpg" className="w-full object-cover"></img>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="w-8/12 mt-3">
                            <img src="/wonyoungls.jpg" className="w-full object-cover"></img>
                        </div>
                        <div className="w-4/12">
                            <img src="/wonyoung1.jpg" className="w-full object-cover"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}