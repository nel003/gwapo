import Header from "../Components/Header";
import Model from "../assets/model.jpg";
import { FaFacebookMessenger, FaFacebook, FaTiktok } from 'react-icons/fa';

function Home() {

  return (
    <>
    <Header/>
    <div className="flex h-screen w-screen bg-[#999997] justify-center">

      <div className="max-w-[1200px] w-full h-full flex p-2 relative justify-center ">
        <div className="w-full md:w-1/2 h-full flex justify-end items-start sm:items-center z-10 flex-col md:flex-row absolute md:relative">
            <div className="flex flex-col mr-16 m-10 mb-28 sm:mb-0">
                <span className="text-3xl sm:text-6xl font-bold text-white sm:mt-36">Jhef Lykenn</span>
                <span className="text-3xl sm:text-6xl font-bold text-white">Lachica</span>
                <p className="mt-2 mb-2 text-xl font-semibold text-amber-300">Gwapo.</p>
                <div className="flex w-36 h-full gap-4 p-1 -ml-1 sm:hidden">
                    <a target="_blank" href="https://m.me/100070283061573">
                        <FaFacebookMessenger className="text-white" size={25}/>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/100070283061573">
                        <FaFacebook className="text-white" size={25}/>
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@ken_lachica23">
                        <FaTiktok className="text-white" size={25}/>
                    </a>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex items-start sm:items-center z-0 p-2">
            <img className="h-[92%] lg:h-[80%] w-auto md:-ml-24 mt-16" src={Model} />
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home;
