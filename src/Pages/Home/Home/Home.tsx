

function Home() {
    return (
        <div className="max-w-[1440px] m-auto py-5 px-2 ">

            <div className="top-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="text-[20px] font-[500] text-[#57D5D3]">Top Player</h3>
                    <h2 className="text-[24px] text-white font-bold">1.230</h2>
                </div>
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="text-[20px] font-[500] text-[#57D5D3]">Top Squad</h3>
                    <h2 className="text-[24px] text-white font-bold">Asadbek</h2>
                </div>
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="text-[20px] font-[500] text-[#57D5D3]">Recent Match</h3>
                    <h2 className="text-[24px] text-white font-bold">4/17/2025</h2>
                </div>
            </div>


            <div className="mt-5">
                <h2 className="text-[20px] text-[#48D3D0] font-[500]">NEWS</h2>
                <div className="mt-2 bg-[#051c1e] p-2 text-[white]">
                    <h3 className="text-[24px]">LATEST UPDATE RELEASED</h3>
                    <p className="text-[18px]">We are releasing Update 8.6.1 on Tuesday, April 1st (no, we are not kidding!), <br /> which will enable the King of the Hill mode for Battlefield 2042, as part of the War Machine time-limited event!
                        <br />
                        War Machine has been underway since March 18th and will continue to run through to April 15!
                        <br />
                        //The Battlefield Team
                        <br />
                        Community Calendar
                        <br />
                        Discover a wide variety of Community Events, Featured Experiences and Double XP moments taking place on Battlefield 2042 via our frequently updated Community Calendar.
                        <br />
                        Stay Informed
                        <br />
                        Follow us on Reddit and @Battlefield to stay informed on the latest news, and on @BattlefieldComm for the rollout of updates and other live service changes. Join the official Battlefield Discord server over at discord.gg/Battlefield.

                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home
