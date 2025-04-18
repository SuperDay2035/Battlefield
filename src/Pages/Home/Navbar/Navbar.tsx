import Logo from "../../../assets/Images/banner/logo.png"
import MainBanner from "../MainBanner/MainBanner";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="hero">

      {/* <div className=" w-full opacity-100 bg-black bg-opacity-80">
        <nav className="max-w-[1440px] m-auto py-5 flex justify-between items-center">
          <ul className="text-[16px] font-bold text-white flex gap-[24px] items-center">
            <li>Asosiy</li>
            <li>Statistika</li>
            <li>Yangiliklar</li>
            <li>Community</li>
            <li>Aloqa</li>
          </ul>

          <div className="max-w-[150px]">
            <img className="w-full h-full object-contain bg-top" src={Logo} alt="Logo" />
          </div>
        </nav>
      </div> */}

      <MainBanner></MainBanner>
    </div>
  )
}

export default Navbar;