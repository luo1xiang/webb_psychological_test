'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function() {
    window.location.reload();
  }

  // 根據分數選擇結果和主題配色
  const getResultData = () => {
    if (psyState.score >= 3 && psyState.score <= 7) {
      return {
        image: result1,
        title: "氣扁可頌",
        bgClass: "bg-gradient-to-tr from-pink-200 via-rose-300 to-pink-400",
        overlayClass: "bg-gradient-to-bl from-pink-500/30 via-rose-400/20 to-pink-300/40",
        glowClass: "bg-pink-400/80",
        buttonClass: "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700",
        shadowClass: "shadow-pink-500/60",
        particleClass: "bg-pink-500/70",
        ringClass: "border-pink-400/60",
        accentGlow: "bg-rose-500/90"
      };
    } else if (psyState.score >= 8 && psyState.score <= 10) {
      return {
        image: result2,
        title: "燒焦可頌",
        bgClass: "bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-700",
        overlayClass: "bg-gradient-to-bl from-slate-900/40 via-gray-700/30 to-slate-600/50",
        glowClass: "bg-slate-400/80",
        buttonClass: "bg-gradient-to-r from-gray-600 to-slate-800 hover:from-gray-700 hover:to-slate-900",
        shadowClass: "shadow-slate-500/60",
        particleClass: "bg-slate-500/70",
        ringClass: "border-slate-400/60",
        accentGlow: "bg-gray-500/90"
      };
    } else {
      return {
        image: result3,
        title: "軟爛可頌",
        bgClass: "bg-gradient-to-tr from-yellow-200 via-orange-300 to-amber-400",
        overlayClass: "bg-gradient-to-bl from-orange-400/30 via-amber-300/20 to-yellow-300/40",
        glowClass: "bg-orange-400/80",
        buttonClass: "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700",
        shadowClass: "shadow-orange-500/60",
        particleClass: "bg-orange-500/70",
        ringClass: "border-orange-400/60",
        accentGlow: "bg-amber-500/90"
      };
    }
  };

  const resultData = getResultData();

  return (
    <>
      <MobileFrame>
        {/* 主背景 - 使用對角漸變 */}
        <div className={`absolute inset-0 ${resultData.bgClass}`}></div>
        
        {/* 動態背景覆蓋層 - 反向漸變 */}
        <div className={`absolute inset-0 ${resultData.overlayClass} animate-pulse`} style={{animationDuration: '4s'}}></div>
        
        {/* 額外波紋效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        
        {/* 浮動星星效果 - 不同於光點 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute w-2 h-2 ${resultData.particleClass} rotate-45 animate-bounce top-1/5 left-1/6 shadow-lg`} style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className={`absolute w-3 h-3 ${resultData.particleClass} rotate-12 animate-bounce top-1/4 right-1/5 shadow-xl`} style={{animationDelay: '0.8s', animationDuration: '2.8s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className={`absolute w-2 h-2 ${resultData.particleClass} -rotate-45 animate-bounce top-3/5 left-1/8 shadow-md`} style={{animationDelay: '1.2s', animationDuration: '3.2s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className={`absolute w-1 h-1 ${resultData.particleClass} rotate-90 animate-bounce top-2/3 right-1/6 shadow-sm`} style={{animationDelay: '2s', animationDuration: '2.4s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className={`absolute w-3 h-3 ${resultData.particleClass} rotate-180 animate-bounce top-4/5 left-2/3 shadow-xl`} style={{animationDelay: '2.8s', animationDuration: '2s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className={`absolute w-2 h-2 ${resultData.particleClass} rotate-75 animate-bounce top-1/12 right-2/5 shadow-lg`} style={{animationDelay: '3.5s', animationDuration: '3.8s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        </div>

        {/* 螺旋光影效果 - 不同於直線光束 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 螺旋光束 */}
          <div className={`absolute w-1 h-96 ${resultData.glowClass} opacity-50 animate-spin left-1/3 top-1/2 origin-bottom blur-md`} 
               style={{animationDuration: '8s', transform: 'translate(-50%, -100%)'}}></div>
          <div className={`absolute w-1 h-80 ${resultData.accentGlow} opacity-60 animate-spin right-1/3 top-1/2 origin-bottom blur-sm`} 
               style={{animationDelay: '2s', animationDuration: '6s', animationDirection: 'reverse', transform: 'translate(50%, -100%)'}}></div>
          
          {/* 波紋擴散效果 */}
          <div className={`absolute top-1/2 left-1/2 w-20 h-20 ${resultData.glowClass} rounded-full opacity-40 animate-ping transform -translate-x-1/2 -translate-y-1/2`} 
               style={{animationDuration: '2s'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-32 h-32 ${resultData.glowClass} rounded-full opacity-30 animate-ping transform -translate-x-1/2 -translate-y-1/2`} 
               style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-48 h-48 ${resultData.accentGlow} rounded-full opacity-20 animate-ping transform -translate-x-1/2 -translate-y-1/2`} 
               style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          
          {/* 交叉光束 */}
          <div className={`absolute top-0 left-0 w-full h-1 ${resultData.glowClass} opacity-25 blur-lg animate-pulse rotate-45 origin-left`} 
               style={{animationDuration: '5s'}}></div>
          <div className={`absolute bottom-0 left-0 w-full h-1 ${resultData.accentGlow} opacity-20 blur-xl animate-pulse -rotate-45 origin-left`} 
               style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
        </div>

        {/* 主要內容 */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* 圖片展示區域 - 增加高度給圖片更多空間 */}
          <div className="flex justify-center items-center p-4 relative" style={{ height: 'calc(100% - 80px)' }}>
            
            {/* 多層脈動光暈 - 相應放大 */}
            <div className={`absolute w-[450px] h-[450px] rounded-full ${resultData.glowClass} blur-3xl opacity-50 animate-pulse`} style={{animationDuration: '3s'}}></div>
            <div className={`absolute w-96 h-96 rounded-full ${resultData.accentGlow} blur-2xl opacity-40 animate-pulse`} style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className={`absolute w-80 h-80 rounded-full ${resultData.glowClass} blur-xl opacity-30 animate-pulse`} style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            
            {/* 多邊形旋轉光環 - 相應放大 */}
            <div className={`absolute w-96 h-96 border-4 ${resultData.ringClass} animate-spin opacity-60 shadow-2xl`} 
                 style={{animationDuration: '20s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
            <div className={`absolute w-80 h-80 border-2 ${resultData.ringClass} animate-spin opacity-50 shadow-xl`} 
                 style={{animationDuration: '15s', animationDirection: 'reverse', clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'}}></div>
            <div className={`absolute w-64 h-64 border-2 ${resultData.ringClass} animate-spin opacity-40 shadow-lg`} 
                 style={{animationDuration: '12s', clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}></div>
            
            {/* 結果圖片 - 大幅放大 */}
            <div className="relative transform hover:scale-110 transition-all duration-1000 ease-out hover:rotate-2 w-full h-full flex justify-center items-center group">
              <div className={`absolute -inset-10 ${resultData.shadowClass} blur-2xl opacity-80 animate-pulse rounded-full group-hover:opacity-100 transition-opacity duration-500`}></div>
              <Image 
                src={resultData.image} 
                alt={resultData.title}
                className="relative z-10 object-contain drop-shadow-2xl w-full h-full max-w-[380px] max-h-[480px] group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-all duration-500"
                width={380}
                height={480}
                priority
              />
              
              {/* 圖片周圍能量場效果 - 相應調整 */}
              <div className={`absolute -inset-14 ${resultData.accentGlow} rounded-full opacity-15 animate-ping group-hover:opacity-25 transition-opacity duration-500`} 
                   style={{animationDuration: '2s'}}></div>
              <div className={`absolute -inset-18 ${resultData.glowClass} rounded-full opacity-10 animate-ping group-hover:opacity-20 transition-opacity duration-500`} 
                   style={{animationDelay: '1s', animationDuration: '3s'}}></div>
            </div>
          </div>

          {/* 底部按鈕區域 - 縮小高度為圖片讓出更多空間 */}
          <div className="h-[80px] px-4 pb-4 pt-1 flex items-center justify-center relative">
            
            {/* 按鈕底部光束 */}
            <div className={`absolute bottom-0 left-1/2 w-32 h-1 ${resultData.accentGlow} blur-md opacity-40 animate-pulse transform -translate-x-1/2`} 
                 style={{animationDuration: '2s'}}></div>
            
            {/* 再玩一次按鈕 - 超級增強版 */}
            <button 
              className={`relative z-50 w-full max-w-sm rounded-2xl text-white font-bold text-base py-3 px-6
                         ${resultData.buttonClass} transition-all duration-700 transform 
                         hover:scale-110 hover:-translate-y-2 active:scale-95 active:translate-y-0
                         shadow-2xl hover:shadow-3xl border-2 border-white/40 overflow-hidden group
                         backdrop-blur-md h-12 flex items-center justify-center
                         hover:border-white/60 animate-pulse hover:animate-none`}
              onClick={playAgain}
              style={{animationDuration: '3s'}}
            >
              {/* 按鈕內部雙重光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-1000 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent 
                            transform skew-x-12 translate-x-full group-hover:-translate-x-full 
                            transition-transform duration-1200 ease-out"></div>
              
              {/* 按鈕文字 */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-xl animate-spin group-hover:animate-pulse" style={{animationDuration: '1.5s'}}>✨</span>
                <span className="drop-shadow-lg">再玩一次</span>
                <span className="text-xl animate-spin group-hover:animate-pulse" style={{animationDuration: '1.5s', animationDirection: 'reverse'}}>✨</span>
              </div>
              
              {/* 按鈕邊緣能量效果 */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* 四角裝飾光線 - 不同於頂部光線 */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/40 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/40 animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
      </MobileFrame>
    </>
  );
}