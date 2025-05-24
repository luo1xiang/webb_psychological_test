'use client';

import MobileFrame from '@/component/layout/MobileFrame'

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 主背景漸變 - 神秘揭曉色調 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-blue-200"></div>
        
        {/* 動態背景覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-300/40 via-indigo-200/30 to-blue-300/50 animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* 魔法光芒掃過效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        
        {/* 魔法星塵粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-purple-400/80 rounded-full animate-bounce top-1/5 left-1/6 shadow-sm" 
               style={{animationDelay: '0s', animationDuration: '2.5s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-2 h-2 bg-indigo-400/90 rounded-full animate-bounce top-1/4 right-1/4 shadow-md" 
               style={{animationDelay: '0.5s', animationDuration: '3s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-1 h-1 bg-blue-400/70 rounded-full animate-bounce top-2/5 left-1/8 shadow-sm" 
               style={{animationDelay: '1s', animationDuration: '2.8s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-2 h-2 bg-purple-500/85 rounded-full animate-bounce top-3/5 right-1/6 shadow-md" 
               style={{animationDelay: '1.5s', animationDuration: '2.2s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-3 h-3 bg-indigo-300/95 rounded-full animate-bounce top-4/5 left-2/3 shadow-lg" 
               style={{animationDelay: '2s', animationDuration: '3.5s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-1 h-1 bg-blue-300/60 rounded-full animate-bounce top-1/12 right-2/5 shadow-sm" 
               style={{animationDelay: '2.5s', animationDuration: '4s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-2 h-2 bg-purple-300/75 rounded-full animate-bounce top-5/6 right-1/3 shadow-md" 
               style={{animationDelay: '3s', animationDuration: '2.7s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute w-1 h-1 bg-indigo-500/80 rounded-full animate-bounce top-1/8 left-3/4 shadow-sm" 
               style={{animationDelay: '0.8s', animationDuration: '3.8s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        </div>

        {/* 魔法能量波紋效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央能量源 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/30 rounded-full opacity-60 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-300/25 rounded-full opacity-50 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '1.5s', animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full opacity-40 blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          
          {/* 擴散波紋 */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-400/40 rounded-full opacity-50 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-400/35 rounded-full opacity-40 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/30 rounded-full opacity-30 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          
          {/* 神秘光束 */}
          <div className="absolute w-1 h-32 bg-purple-400/50 opacity-60 animate-pulse left-1/4 top-1/3 blur-sm rotate-12" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-1 h-28 bg-indigo-400/45 opacity-50 animate-pulse right-1/5 top-2/5 blur-sm -rotate-12" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-24 bg-blue-400/40 opacity-40 animate-pulse left-2/3 top-1/5 blur-sm rotate-45" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
        </div>

        {/* 魔法陣旋轉光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[400px] h-[400px] border-2 border-purple-300/40 rounded-full animate-spin opacity-50 shadow-xl" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-80 h-80 border border-indigo-300/35 rounded-full animate-spin opacity-40 shadow-lg" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-blue-300/30 rounded-full animate-spin opacity-30 shadow-md" style={{animationDuration: '20s'}}></div>
          <div className="absolute w-48 h-48 border border-purple-400/25 rounded-full animate-spin opacity-25" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>

        {/* 主要內容區域 */}
        <div className="relative z-20 flex justify-center items-center h-full">
          <div className="flex flex-col items-center gap-12 p-8">
            
            {/* 標題區域 - 神秘揭曉效果 */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-purple-400/30 rounded-2xl blur-xl opacity-60 animate-pulse group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-4 bg-indigo-300/25 rounded-xl blur-lg opacity-50 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              
              <h1 className="relative z-10 text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent 
                           drop-shadow-lg animate-pulse hover:animate-none transition-all duration-500 hover:scale-105"
                  style={{animationDuration: '5s'}}>
                顯示我的失控可頌
              </h1>
              
              {/* 標題裝飾光效 */}
              <div className="absolute -inset-2 border-2 border-purple-300/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            {/* 神秘分隔線 */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDuration: '2s'}}></div>
            
            {/* 查看結果按鈕 - 超級增強版 */}
            <div className="relative group">
              {/* 按鈕多層光暈 */}
              <div className="absolute -inset-8 bg-blue-400/40 rounded-full blur-2xl opacity-70 animate-pulse group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '2s'}}></div>
              <div className="absolute -inset-6 bg-indigo-400/35 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
              <div className="absolute -inset-4 bg-purple-400/30 rounded-full blur-lg opacity-50 animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
              
              {/* 按鈕旋轉光環 */}
              <div className="absolute -inset-3 border-2 border-blue-400/50 rounded-full animate-spin opacity-40 group-hover:opacity-80 transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-2 border border-purple-400/40 rounded-full animate-spin opacity-30 group-hover:opacity-70 transition-opacity duration-300" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
              
              {/* 按鈕本體 */}
              <button 
                className="relative z-10 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
                         w-full min-w-[280px] rounded-full text-white py-5 px-8 text-lg flex justify-center items-center font-bold 
                         shadow-[0px_6px_0px_2px_#3B82F6] hover:shadow-[0px_8px_0px_2px_#2563EB] 
                         cursor-pointer hover:translate-y-0.5 transition-all duration-300
                         backdrop-blur-md border-2 border-white/30 overflow-hidden group/btn
                         hover:scale-105 animate-pulse group-hover:animate-none"
                onClick={nextStep}
                style={{animationDuration: '3s'}}
              >
                {/* 按鈕內部雙重光效 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                              transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full 
                              transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent 
                              transform skew-x-12 translate-x-full group-hover/btn:-translate-x-full 
                              transition-transform duration-1200 ease-out"></div>
                
                {/* 按鈕文字 */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl animate-spin group-hover/btn:animate-pulse" style={{animationDuration: '2s'}}>🔮</span>
                  <span className="drop-shadow-lg">查看結果</span>
                  <span className="text-2xl animate-spin group-hover/btn:animate-pulse" style={{animationDuration: '2s', animationDirection: 'reverse'}}>✨</span>
                </div>
                
                {/* 按鈕邊緣能量效果 */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 animate-pulse"></div>
              </button>
              
              {/* 按鈕底部魔法反射 */}
              <div className="absolute bottom-0 left-1/2 w-40 h-3 bg-blue-400/50 blur-lg opacity-60 animate-pulse transform -translate-x-1/2 translate-y-4" style={{animationDuration: '2s'}}></div>
            </div>
            
          </div>
        </div>

        {/* 四角魔法封印 */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-4 border-l-4 border-purple-400/60 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-t-4 border-r-4 border-indigo-400/60 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-4 border-l-4 border-blue-400/60 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-4 border-r-4 border-purple-400/60 animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
        
        {/* 中央魔法印記 */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '1s'}}></div>

      </MobileFrame>
    </>
  );
}