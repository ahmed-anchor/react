import React from "react";
import { Link } from "react-router-dom";
import qr from "../assets/qr.jpeg";


export default function Login() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-[#D9D9D9] p-4">
      <div dir="rtl" className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch justify-between w-full max-w-6xl bg-white rounded-3xl shadow-lg p-4 md:p-8 h-full md:h-[90vh]">
        {/* QR Section - Now fills vertical space */}
        <div className="flex flex-col gap-3 items-center w-full md:w-2/5 bg-[#464448] p-3 md:p-8 rounded-2xl h-full">
          <h1 className="text-white text-sm sm:text-xl lg:text-2xl text-center font-medium">
            تسجيل الدخول باستخدام رمز الاستجابة
          </h1>
          <div className="flex-1 flex items-center justify-center">
            <img 
              src={qr}
              className="w-36 h-36 md:w-52 md:h-52 object-contain rounded-lg" 
              alt="QR code"
            />
          </div>
        </div>

        {/* Login Form - Responsive adjustments */}
        <form className="w-full md:w-2/4 flex flex-col items-center justify-center py-4 md:py-0">
          <div className="w-full max-w-md flex flex-col gap-6 md:gap-8 p-2 md:p-4">
            <div className="space-y-4 md:space-y-6 w-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 relative top-8 right-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <input 
                  placeholder="ادخل الاسم" 
                  name='username' 
                  type='text' 
                  className="w-full cursor-pointer pl-2 pr-10 py-2 text-right border-[1.3px] border-[#464448] rounded-xl focus:outline-none placeholder-gray-500 text-sm md:text-base"
                />
              </div>
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 relative top-8 right-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              <input 
                placeholder="كلمة المرور" 
                name='password' 
                type='password' 
                className="w-full cursor-pointer pl-2 pr-10 py-2 text-right border-[1.3px] border-[#464448] rounded-xl focus:outline-none placeholder-gray-500 text-sm md:text-base"
              />
              </div>
            </div>

            <Link 
              to="/chats" 
              className="w-full bg-black hover:bg-[#363438] text-white text-sm md:text-base font-medium py-3 rounded-xl text-center transition-colors"
            >
              دخول
            </Link>

            {/* Separator */}
            <div className="flex items-center gap-3 my-1 md:my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-xs md:text-sm">أو</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login Buttons - Mobile optimized */}
            <div className="space-y-3 md:space-y-4 w-full">

              <button className="w-full cursor-pointer flex items-center justify-center gap-2 border-2  rounded-xl py-2 md:py-2 text-white bg-[#1877F2] transition-colors text-sm md:text-base">
              <svg fill="white" viewBox="0 0 32 32" version="1.1" className="w-7 h-7 relative md:left-[21%] left-[21%] text-white" stroke="#1877F2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path> </g>
              </svg>
                <span className="font-medium">تواصل مع الفيسبوك</span>
              </button>

              <button className="w-full cursor-pointer flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl py-2 md:py-2 hover:bg-gray-50 transition-colors text-sm md:text-base">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" className="relative md:left-[24%] left-[24%]">
                  <path d="M23.15 12.4289C23.151 11.6399 23.0843 10.8522 22.9506 10.0746H12.0314V14.5339H18.2854C18.1574 15.2462 17.8866 15.9251 17.4891 16.5298C17.0917 17.1345 16.5759 17.6525 15.9729 18.0525V20.9472H19.7054C21.8909 18.9322 23.15 15.9523 23.15 12.4289Z" fill="#4285F4"/>
                  <path d="M12.0313 23.7438C15.1559 23.7438 17.7868 22.7178 19.7053 20.9489L15.9728 18.0542C14.934 18.7586 13.596 19.1606 12.0313 19.1606C9.01122 19.1606 6.44785 17.1247 5.53121 14.3812H1.68616V17.3643C2.64986 19.282 4.12759 20.8941 5.95438 22.0206C7.78116 23.1471 9.8851 23.7437 12.0313 23.7438Z" fill="#34A853"/>
                  <path d="M5.53121 14.3823C5.04662 12.9447 5.04662 11.3879 5.53121 9.95025V6.96716H1.68616C0.87546 8.58037 0.453247 10.3608 0.453247 12.1663C0.453247 13.9717 0.87546 15.7522 1.68616 17.3654L5.53121 14.3823Z" fill="#FBBC04"/>
                  <path d="M12.0315 5.17025C13.6828 5.14327 15.2783 5.76715 16.4732 6.90704L19.7779 3.60232C17.6824 1.63408 14.9063 0.553487 12.0315 0.587063C9.88534 0.587161 7.7814 1.18377 5.95462 2.31028C4.12784 3.43679 2.6501 5.04887 1.6864 6.96654L5.53145 9.94963C6.44809 7.20615 9.01146 5.17025 12.0315 5.17025Z" fill="#EA4335"/>
                </svg>
                <span className="font-medium text-gray-700">تواصل مع جوجل</span>
              </button>


              <button className="w-full cursor-pointer flex items-center justify-center gap-2 border-2 border-gray-300 rounded-xl py-2 md:py-3 text-white hover:bg-gray-700 bg-black transition-colors text-sm md:text-base ">
                <svg viewBox="-1.5 0 20 20" className="w-5 h-5 relative md:left-[26%] left-[26%]" version="1.1" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]"> </path> </g> </g> </g> </g></svg>
                <span className="font-medium">تواصل مع أبل</span>
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}