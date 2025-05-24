'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import circle1Img from '@/../public/0.start/blur-circle-1.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 主背景漸變 - 溫暖麵包色調 */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100"></div>
        
        {/* 動態背景覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/40 via-amber-100/30 to-yellow-200/50 animate-pulse" style={{animationDuration: '5s'}}></div>
        
        {/* 額外光線掃過效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
        
        {/* 浮動麵包屑粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-orange-300/60 rounded-full animate-bounce top-1/6 left-1/5 shadow-sm" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute w-3 h-3 bg-amber-400/70 rounded-full animate-bounce top-1/4 right-1/4 shadow-md" style={{animationDelay: '0.8s', animationDuration: '2.5s'}}></div>
          <div className="absolute w-1 h-1 bg-yellow-400/50 rounded-full animate-bounce top-2/5 left-1/8 shadow-sm" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute w-2 h-2 bg-orange-400/60 rounded-full animate-bounce top-3/5 right-1/6 shadow-sm" style={{animationDelay: '2.2s', animationDuration: '2.8s'}}></div>
          <div className="absolute w-3 h-3 bg-amber-300/80 rounded-full animate-bounce top-4/5 left-2/3 shadow-md" style={{animationDelay: '3s', animationDuration: '2.3s'}}></div>
          <div className="absolute w-1 h-1 bg-yellow-300/40 rounded-full animate-bounce top-1/12 right-2/5 shadow-sm" style={{animationDelay: '3.8s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-2 h-2 bg-orange-200/70 rounded-full animate-bounce top-5/6 right-1/3 shadow-sm" style={{animationDelay: '1.2s', animationDuration: '4s'}}></div>
        </div>

        {/* 烘焙蒸氣效果 - 垂直飄散 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-white/30 opacity-60 animate-pulse left-1/6 top-1/4 blur-sm rounded-full" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-1 h-16 bg-white/25 opacity-50 animate-pulse right-1/5 top-1/3 blur-sm rounded-full" style={{animationDelay: '1.5s', animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-12 bg-white/20 opacity-40 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-1 h-24 bg-white/35 opacity-70 animate-pulse right-2/5 top-1/5 blur-sm rounded-full" style={{animationDelay: '2s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 溫暖光暈效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央溫暖光源 */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-200/40 rounded-full opacity-50 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-300/30 rounded-full opacity-40 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          
          {/* 角落溫暖光點 */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300/30 rounded-full opacity-30 animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-orange-300/25 rounded-full opacity-25 animate-ping" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          
          {/* 對角線溫暖光束 */}
          <div className="absolute -top-10 -left-10 w-32 h-[110%] bg-amber-200/20 opacity-15 blur-2xl animate-pulse rotate-12" style={{animationDuration: '8s'}}></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-[100%] bg-yellow-200/15 opacity-12 blur-xl animate-pulse -rotate-12" style={{animationDelay: '4s', animationDuration: '9s'}}></div>
        </div>

        {/* 旋轉烘焙光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-96 h-96 border-2 border-orange-300/30 rounded-full animate-spin opacity-40 shadow-lg" style={{animationDuration: '25s'}}></div>
          <div className="absolute w-80 h-80 border border-amber-300/25 rounded-full animate-spin opacity-30 shadow-md" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-yellow-300/20 rounded-full animate-spin opacity-25" style={{animationDuration: '15s'}}></div>
        </div>

        {/* 原有的模糊圓圈 - 增強效果 */}
        <Image className='absolute top-0 -translate-y-1/2 opacity-90 animate-pulse' src={circle1Img} alt='circle1Img' style={{animationDuration: '4s'}} />

        <div className='flex justify-center items-center flex-col gap-[60px] relative z-20'>
          
          {/* 標題 - 增加光暈效果 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-300/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image src={titleImg} alt='title' className="relative z-10 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300" />
          </div>
          
          {/* 描述文字 - 增加背景和動畫 */}
          <div className='text-[#B95F0F] font-[500] text-center text-[14px]
           leading-loose tracking-wide relative bg-white/20 backdrop-blur-sm 
           rounded-2xl p-6 border border-white/30 shadow-lg animate-pulse hover:animate-none
           hover:bg-white/30 transition-all duration-500 hover:shadow-xl'
           style={{animationDuration: '6s'}}>
            有些人天生酥脆，有些人出爐時就塌了。<br/>
            你努力發酵、翻滾、等待出爐，<br/>
            結果還是變成一坨可頌災難。<br/>
            沒關係，這世界不缺完美麵包，<br/>
            缺的是——像你一樣軟爛卻獨特的存在。<br/>
            現在就來看看你是什麼等級的失控可頌。
          </div>
          
          {/* 開始按鈕 - 超級增強效果 */}
          <div 
            className='cursor-pointer hover:translate-y-0.5 transition-all duration-300 w-[160px] relative group'
            onClick={nextStep}
          >
            {/* 按鈕光暈效果 */}
            <div className="absolute -inset-6 bg-orange-400/40 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
            <div className="absolute -inset-4 bg-amber-300/30 rounded-full blur-lg opacity-50 animate-pulse group-hover:opacity-80 transition-opacity duration-300" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            
            {/* 按鈕旋轉光環 */}
            <div className="absolute -inset-2 border-2 border-orange-300/40 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '2s'}}></div>
            
            {/* 按鈕本體 */}
            <Image 
              className='w-full h-auto relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl 
                        group-hover:scale-105 transition-all duration-300 animate-pulse group-hover:animate-none' 
              src={startBtn} 
              alt='startBtn'
              style={{animationDuration: '2s'}}
            />
            
            {/* 按鈕底部反射 */}
            <div className="absolute bottom-0 left-1/2 w-24 h-2 bg-orange-300/40 blur-md opacity-60 animate-pulse transform -translate-x-1/2 translate-y-2" style={{animationDuration: '2s'}}></div>
          </div>
          
        </div>

        {/* 底部模糊圓圈 - 增強效果 */}
        <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none opacity-90 animate-pulse' src={circle1Img} alt='circle1Img' style={{animationDelay: '2s', animationDuration: '4s'}} />
        
        {/* 四角烘焙裝飾 */}
        <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-orange-400/50 animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-amber-400/50 animate-pulse" style={{animationDelay: '1.2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-yellow-400/50 animate-pulse" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-orange-400/50 animate-pulse" style={{animationDelay: '3.8s', animationDuration: '5s'}}></div>

      </MobileFrame>
    </>
  );
}