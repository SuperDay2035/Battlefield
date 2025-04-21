import gallary1 from "../../../assets/Images/banner/gallary1.png";
import gallary2 from "../../../assets/Images/banner/gallary2.png";
import gallary3 from "../../../assets/Images/banner/gallary3.png";
import gallary4 from "../../../assets/Images/banner/gallary4.png";
import "./Home.css"

function Home() {
    return (
        <div className="max-w-[1440px] m-auto py-5 px-2 ">

            <div className="top-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="top-text text-[18px] font-[500] text-[#57D5D3]">Top Player</h3>
                    <h2 className="top-score text-[22px] text-white font-bold">1.230</h2>
                </div>
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="top-text text-[18px] font-[500] text-[#57D5D3]">Top Squad</h3>
                    <h2 className="top-score text-[22px] text-white font-bold">Asadbek</h2>
                </div>
                <div className="bg-[#051c1e] w-full p-2">
                    <h3 className="top-text text-[18px] font-[500] text-[#57D5D3]">Recent Match</h3>
                    <h2 className="top-score text-[22px] text-white font-bold">4/17/2025</h2>
                </div>
            </div>


            <div className="mt-5">
                <h2 className="text-[23px] text-[#48D3D0] font-[500]">NEWS</h2>
                <div className="mt-2 bg-[#051c1e] p-2 text-[white]">
                    <h3 className="text-[24px] news-header py-3">LATEST UPDATE RELEASED</h3>
                    <p className="news-text text-[15px]">We are releasing Update 8.6.1 on Tuesday, April 1st (no, we are not kidding!), <br /> which will enable the King of the Hill mode for Battlefield 2042, as part of the War Machine time-limited event!
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

            <div className="my-5">
                <h2 className="text-[23px] text-[#48D3D0] font-[500] py-3">GALLARY</h2>

                <div className="gallery flex gap-3 overflow-auto">
                    <img className="max-w-[350px] rounded-lg h-auto" src={gallary1} alt="" />
                    <img className="max-w-[350px] rounded-lg h-auto" src={gallary2} alt="" />
                    <img className="max-w-[350px] rounded-lg h-auto" src={gallary3} alt="" />
                    <img className="max-w-[350px] rounded-lg h-auto" src={gallary4} alt="" />
                </div>
            </div>

            <div className="my-5">
                <h2 className="text-[23px] text-[#48D3D0] font-[500] py-3">COMMUNITY</h2>

                <div className=" py-2 text-[white] flex items-center flex-wrap justify-between gap-3">
                    <p className="text-[18px] comunity-text py-2">
                        <span className=" text-[#48D3D0]">Battlefield Community </span>
                        is community for passionate Battlefield player, <br /> Join us on Telegram and
                        Discord to connect with following gamers, share your experience
                    </p>

                    <div className="flex items-center gap-7 my-2">
                        <button className="bg-[#43B0DF] text-[20px] font-[400] p-2 px-6 rounded-lg">Telegram</button>
                        <button className="bg-[#43B0DF] text-[20px] font-[400] p-2 px-6 rounded-lg">Discord</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
