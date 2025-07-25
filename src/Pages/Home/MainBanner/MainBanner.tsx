import Logo from "../../../assets/Images/banner/logo.png"
import "./MainBanner.css"

function MainBanner() {
    return (

        <div className="w-full bg-opacity-30 bg-black">
            <div className="banner max-w-[1440px] h-[600px]   m-auto">

                <div className="w-full h-full flex items-center justify-center">
                    <div className="ml-5 text-center max-w-[700px]">
                        <div className="b-logo max-w-[500px] mx-auto text-center">
                            <img className="w-full h-full m-auto object-contain bg-top" src={Logo} alt="Logo" />
                        </div>
                        <div className="w-full main-text-w">
                            <h1 className="main-text max-w-[300px] mx-auto font-[700] text-white text-center text-[24px] my-10">JOIN THE BATTLE DOMINATE THE FIELD</h1>

                        </div>
                        <div className="main-btns flex justify-center gap-2">
                            <button className="text-black font-[600] text-[18px] bg-[#26FFDF] p-3 rounded-lg">Sotib Olish</button>
                            <button className="text-black font-[600] text-[18px] bg-[#26FFDF] p-3 rounded-lg">Boshlash</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default MainBanner
