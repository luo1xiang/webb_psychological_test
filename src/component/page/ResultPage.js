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
    // 重新整理頁面
    window.location.reload();
  }

  // 根據分數選擇結果圖片
  let resultImage;
  if (psyState.score < 6) {
    resultImage = result1;
  } else if (psyState.score >= 6 && psyState.score < 8) {
    resultImage = result2;
  } else {
    resultImage = result3;
  }

  return (
    <>
      <MobileFrame>
        {/* 根據您提供的圖片，這裡使用兩種方法嘗試 */}
        {/* 方法一：使用第一張圖片的布局，按鈕在圖片下方 */}
        <div className="flex flex-col h-full">
          {/* 圖片容器 */}
          <div className="flex-1 mx-4 my-4 overflow-hidden">
            <Image 
              src={resultImage} 
              alt="結果圖片" 
              className="w-full h-full object-contain"
              width={500}
              height={800}
              priority
            />
          </div>
          
          {/* 方法一：按鈕在底部，類似您的第一張圖 */}
          <div className="mx-4 mb-4">
            <div 
              className={`bg-[#89BCFF] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 再玩一次 </div>
          </div>
        </div>
        
        {/* 方法二：使用絕對定位，讓按鈕在指定位置 */}
        {/* 
        <div className="relative h-full p-4">
          <Image 
            src={resultImage} 
            alt="結果圖片" 
            className="w-full h-full object-contain"
            width={500}
            height={800}
            priority
          />
          
          <div className="absolute inset-x-4 top-[33%]">
            <div 
              className={`bg-[#89BCFF] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={playAgain}
            > 再玩一次 </div>
          </div>
        </div>
        */}
      </MobileFrame>
    </>
  );
}