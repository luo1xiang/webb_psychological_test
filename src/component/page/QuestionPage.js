'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import q2Up from '@/../public/1.question/q2-up.png';
import q2Down from '@/../public/1.question/q2-down.png';
import q3Up from '@/../public/1.question/q3-up.png';
import q3Down from '@/../public/1.question/q3-down.png';
import blurCircle2 from '@/../public/1.question/blur-circle-2.png';
import blurCircle3 from '@/../public/1.question/blur-circle-3.png';
import blurCircle4 from '@/../public/1.question/blur-circle-4.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  // 問題數據
  const questions = [
    {
      title: "麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options: [
        { title: "乖乖待著，然後偷偷膨漲三倍大", value: 1 },
        { title: "等個屁！我已經開始發酵狂飆了！", value: 3 },
        { title: "發...什麼？忘記了...睡著了...", value: 5 }
      ]
    },
    {
      title: "當你被放進烤箱時，溫度突然升高，你的反應是？",
      options: [
        { title: "啊啊啊啊啊！（冒泡炸裂）", value: 1 },
        { title: "熱熱熱快翻面！我要烤出脆脆皮皮！", value: 3 },
        { title: "已經放棄掙扎，來吧命運...", value: 5 }
      ]
    },
    {
      title: "如果你被顧客挑選時被放回去了，你會？",
      options: [
        { title: "立刻乾癟五公分，氣到扁掉", value: 1 },
        { title: "更用力散發麵包香，讓他後悔！", value: 3 },
        { title: "裝死，假裝自己是牛角麵包", value: 5 }
      ]
    }
  ];

  // 根據 questionIndex 選擇對應的圖片
  const getImages = () => {
    if (questionIndex == 0) {
      return {
        up: q1Up,
        down: q1Down,
        circle: blurCircle2
      };
    } else if (questionIndex == 1) {
      return {
        up: q2Up,
        down: q2Down,
        circle: blurCircle3
      };
    } else {
      return {
        up: q3Up,
        down: q3Down,
        circle: blurCircle4
      };
    }
  };

  const images = getImages();

  const clickAnswer = function(option){
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    let colorString = "";

    if(questionIndex == 0){
      colorString = prefix + "-[#90B62A]";
    } else if(questionIndex == 1){
      colorString = prefix + "-[#DD3E3E]";
    } else {
      colorString = prefix + "-[#1098EC]";
    }

    return colorString;
  }

  // 獲取問題文字樣式
  const getQuestionTextStyle = () => {
    if(questionIndex == 0) {
      return {
        color: 'text-[#6B8A2A]',
        size: 'text-xl',
        weight: 'font-bold',
        spacing: 'tracking-wide'
      };
    } else if(questionIndex == 1) {
      return {
        color: 'text-[#B83333]',
        size: 'text-lg',
        weight: 'font-extrabold',
        spacing: 'tracking-normal'
      };
    } else {
      return {
        color: 'text-[#0E7BC7]',
        size: 'text-xl',
        weight: 'font-semibold',
        spacing: 'tracking-wide'
      };
    }
  };

  // 獲取Q標籤樣式
  const getQNumberStyle = () => {
    if(questionIndex == 0) {
      return {
        bg: 'bg-[#F0F8E1]',
        border: 'border-[#90B62A]',
        text: 'text-[#6B8A2A]',
        shadow: 'shadow-md'
      };
    } else if(questionIndex == 1) {
      return {
        bg: 'bg-[#FFE8E8]',
        border: 'border-[#DD3E3E]',
        text: 'text-[#B83333]',
        shadow: 'shadow-lg'
      };
    } else {
      return {
        bg: 'bg-[#E3F2FD]',
        border: 'border-[#1098EC]',
        text: 'text-[#0E7BC7]',
        shadow: 'shadow-md'
      };
    }
  };

  // 獲取當前問題的按鈕樣式
  const getButtonStyle = () => {
    if(questionIndex == 0) {
      return {
        bg: 'bg-[#A8C956]',
        shadow: 'shadow-[0px_4px_0px_1px_#7FA342]',
        text: 'text-white',
        hover: 'hover:bg-[#9BC04A]'
      };
    } else if(questionIndex == 1) {
      return {
        bg: 'bg-[#E55A5A]',
        shadow: 'shadow-[0px_4px_0px_1px_#C74545]',
        text: 'text-white',
        hover: 'hover:bg-[#E04848]'
      };
    } else {
      return {
        bg: 'bg-[#5BA7F7]',
        shadow: 'shadow-[0px_4px_0px_1px_#3B8FE8]',
        text: 'text-white',
        hover: 'hover:bg-[#4A9AF5]'
      };
    }
  };

  // 獲取背景特效配色
  const getBackgroundEffects = () => {
    if(questionIndex == 0) {
      return {
        gradient: 'bg-gradient-to-br from-[#E8F5C8] via-[#D4E6A1] to-[#B8D456]',
        overlay: 'bg-gradient-to-tr from-[#F0F8E1]/60 via-[#E8F5C8]/40 to-[#C8E6A0]/70',
        particleColor: 'bg-[#A8C956]/70',
        glowColor: 'bg-[#90B62A]/60',
        ringColor: 'border-[#90B62A]/50',
        accentGlow: 'bg-[#7FA342]/80'
      };
    } else if(questionIndex == 1) {
      return {
        gradient: 'bg-gradient-to-br from-[#FFCDD2] via-[#FF8A80] to-[#E57373]',
        overlay: 'bg-gradient-to-tr from-[#FFE8E8]/60 via-[#FFCDD2]/40 to-[#FF5722]/70',
        particleColor: 'bg-[#E55A5A]/70',
        glowColor: 'bg-[#DD3E3E]/60',
        ringColor: 'border-[#DD3E3E]/50',
        accentGlow: 'bg-[#C74545]/80'
      };
    } else {
      return {
        gradient: 'bg-gradient-to-br from-[#BBDEFB] via-[#64B5F6] to-[#42A5F5]',
        overlay: 'bg-gradient-to-tr from-[#E3F2FD]/60 via-[#BBDEFB]/40 to-[#2196F3]/70',
        particleColor: 'bg-[#5BA7F7]/70',
        glowColor: 'bg-[#1098EC]/60',
        ringColor: 'border-[#1098EC]/50',
        accentGlow: 'bg-[#3B8FE8]/80'
      };
    }
  };

  const buttonStyle = getButtonStyle();
  const questionTextStyle = getQuestionTextStyle();
  const qNumberStyle = getQNumberStyle();
  const backgroundEffects = getBackgroundEffects();

  return (
    <>
      <MobileFrame>
        {/* 主背景漸變 */}
        <div className={`absolute inset-0 ${backgroundEffects.gradient}`}></div>
        
        {/* 動態背景覆蓋層 */}
        <div className={`absolute inset-0 ${backgroundEffects.overlay} animate-pulse`} style={{animationDuration: '3s'}}></div>
        
        {/* 額外動態層 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        
        {/* 浮動光點效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute w-4 h-4 ${backgroundEffects.particleColor} rounded-full animate-bounce top-1/6 left-1/5 shadow-lg`}></div>
          <div className={`absolute w-6 h-6 ${backgroundEffects.particleColor} rounded-full animate-bounce top-1/4 right-1/4 shadow-xl`} style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
          <div className={`absolute w-3 h-3 ${backgroundEffects.particleColor} rounded-full animate-bounce top-3/5 left-1/6 shadow-md`} style={{animationDelay: '1s', animationDuration: '2s'}}></div>
          <div className={`absolute w-3 h-3 ${backgroundEffects.particleColor} rounded-full animate-bounce top-2/3 right-1/5 shadow-lg`} style={{animationDelay: '1.5s', animationDuration: '2.8s'}}></div>
          <div className={`absolute w-5 h-5 ${backgroundEffects.particleColor} rounded-full animate-bounce top-4/5 left-2/3 shadow-xl`} style={{animationDelay: '2s', animationDuration: '2.2s'}}></div>
          <div className={`absolute w-2 h-2 ${backgroundEffects.particleColor} rounded-full animate-bounce top-1/8 right-1/3 shadow-sm`} style={{animationDelay: '2.5s', animationDuration: '3s'}}></div>
          <div className={`absolute w-4 h-4 ${backgroundEffects.particleColor} rounded-full animate-bounce top-1/12 left-2/5 shadow-lg`} style={{animationDelay: '0.8s', animationDuration: '3.5s'}}></div>
          <div className={`absolute w-3 h-3 ${backgroundEffects.particleColor} rounded-full animate-bounce top-5/6 right-2/5 shadow-md`} style={{animationDelay: '3s', animationDuration: '2.4s'}}></div>
        </div>

        {/* 強化動態光影效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 垂直光束 - 增強 */}
          <div className={`absolute w-2 h-full ${backgroundEffects.glowColor} opacity-60 animate-pulse left-1/5 blur-md`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute w-2 h-full ${backgroundEffects.glowColor} opacity-40 animate-pulse right-1/4 blur-lg`} style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className={`absolute w-1 h-full ${backgroundEffects.accentGlow} opacity-80 animate-pulse left-3/4 blur-sm`} style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          
          {/* 旋轉光影 - 增強 */}
          <div className={`absolute top-1/2 left-1/2 w-96 h-2 ${backgroundEffects.glowColor} opacity-40 blur-xl animate-spin origin-center`} 
               style={{animationDuration: '15s', transform: 'translate(-50%, -50%)'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-80 h-1 ${backgroundEffects.accentGlow} opacity-60 blur-lg animate-spin origin-center`} 
               style={{animationDuration: '12s', animationDirection: 'reverse', transform: 'translate(-50%, -50%)'}}></div>
          
          {/* 脈動光圈 - 增強 */}
          <div className={`absolute top-1/4 left-1/6 w-32 h-32 ${backgroundEffects.glowColor} rounded-full opacity-30 animate-ping`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute bottom-1/4 right-1/6 w-28 h-28 ${backgroundEffects.glowColor} rounded-full opacity-25 animate-ping`} style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-40 h-40 ${backgroundEffects.accentGlow} rounded-full opacity-20 animate-ping transform -translate-x-1/2 -translate-y-1/2`} style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
          
          {/* 斜向光束掃過效果 - 增強 */}
          <div className={`absolute -top-20 -left-20 w-40 h-[120%] ${backgroundEffects.glowColor} opacity-20 blur-2xl animate-pulse rotate-12`} style={{animationDuration: '6s'}}></div>
          <div className={`absolute -bottom-20 -right-20 w-36 h-[110%] ${backgroundEffects.glowColor} opacity-15 blur-xl animate-pulse -rotate-12`} style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          
          {/* 新增：放射狀光束 */}
          <div className={`absolute top-1/2 left-1/2 w-1 h-32 ${backgroundEffects.accentGlow} opacity-50 blur-sm animate-spin origin-bottom`} 
               style={{animationDuration: '8s', transform: 'translate(-50%, -100%)'}}></div>
          <div className={`absolute top-1/2 left-1/2 w-1 h-24 ${backgroundEffects.glowColor} opacity-40 blur-sm animate-spin origin-bottom`} 
               style={{animationDuration: '6s', animationDirection: 'reverse', transform: 'translate(-50%, -100%) rotate(45deg)'}}></div>
        </div>
        
        {/* 原有的模糊圓圈 - 增強效果 */}
        <Image className='absolute top-0 -translate-y-1/2 z-10 opacity-80' src={images.circle} alt='blur-circle' />

        {/* 旋轉光環效果 - 增強 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className={`w-96 h-96 border-4 ${backgroundEffects.ringColor} rounded-full animate-spin opacity-50 shadow-2xl`} style={{animationDuration: '20s'}}></div>
          <div className={`absolute w-80 h-80 border-2 ${backgroundEffects.ringColor} rounded-full animate-spin opacity-40 shadow-xl`} style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className={`absolute w-64 h-64 border-2 ${backgroundEffects.ringColor} rounded-full animate-spin opacity-30 shadow-lg`} style={{animationDuration: '12s'}}></div>
          <div className={`absolute w-48 h-48 border ${backgroundEffects.ringColor} rounded-full animate-spin opacity-25`} style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
        </div>

        {/* 中央爆發光效 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className={`w-32 h-32 ${backgroundEffects.accentGlow} rounded-full opacity-20 blur-3xl animate-pulse`} style={{animationDuration: '2s'}}></div>
          <div className={`absolute w-24 h-24 ${backgroundEffects.glowColor} rounded-full opacity-30 blur-2xl animate-pulse`} style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        </div>

        <div className='flex flex-col items-center relative z-20 min-h-screen'>
          {/* 上方可頌圖片 - 固定位置 */}
          <Image src={images.up} className='w-[88px] drop-shadow-2xl animate-pulse absolute top-16' alt='q-up' style={{animationDuration: '3s'}} />

          {/* 中央內容區域 - 垂直居中 */}
          <div className="flex flex-col items-center justify-center flex-1 gap-[26px] py-24">
            {/* Q標籤 - 固定相對位置 */}
            <div className={`${qNumberStyle.bg} ${qNumberStyle.border} border-4 rounded-full w-[60px] h-[60px]
            flex justify-center items-center font-bold text-2xl ${qNumberStyle.text} ${qNumberStyle.shadow}
            backdrop-blur-md border-opacity-80 animate-pulse shadow-2xl`} style={{animationDuration: '2s'}}>
              Q{questionIndex+1}
            </div>
            
            {/* 問題文字 - 固定相對位置 */}
            <div 
              className={`text-center ${questionTextStyle.weight} ${questionTextStyle.size} ${questionTextStyle.color} 
              ${questionTextStyle.spacing} mb-[30px] px-8 leading-[1.5] max-w-[320px] drop-shadow-lg
              animate-pulse backdrop-blur-sm bg-white/10 rounded-2xl py-5 border border-white/20`}
              style={{animationDuration: '4s'}}
            > 
              {questions[questionIndex].title} 
            </div>

            {/* 選項按鈕區域 - 固定間距和統一高度 */}
            <div className="flex flex-col gap-4 w-full px-6">
              {questions[questionIndex].options.map((option, index) => (
                <button 
                  key={`option-${index}`}
                  className={`${buttonStyle.bg} ${buttonStyle.hover} w-full rounded-full ${buttonStyle.text}
                    py-[20px] px-8 text-[14px] flex justify-center items-center font-bold 
                    ${buttonStyle.shadow} cursor-pointer hover:translate-y-0.5 transition-all duration-300
                    leading-[1.2] text-center active:translate-y-1 z-20 relative
                    h-[72px] items-center justify-center backdrop-blur-md border-2 border-white/30
                    hover:shadow-2xl hover:scale-[1.05] group overflow-hidden
                    shadow-2xl hover:border-white/50 animate-pulse`}
                  onClick={() => clickAnswer(option)}
                  type="button"
                  style={{animationDelay: `${index * 0.2}s`, animationDuration: '3s'}}
                >
                  {/* 按鈕內部強化光效 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-800 ease-out"></div>
                  
                  {/* 按鈕邊緣光暈 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  
                  <span className="block relative z-10 drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2">
                    {option.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 下方可頌圖片 - 固定位置 */}
          <Image src={images.down} className='w-[88px] drop-shadow-2xl animate-pulse absolute bottom-16' alt='q-down' style={{animationDuration: '3s', animationDelay: '1s'}} />
        </div>

        {/* 底部模糊圓圈 - 增強效果 */}
        <Image className='absolute bottom-0 translate-y-1/2 z-10 opacity-80' src={images.circle} alt='blur-circle' />
      </MobileFrame>
    </>
  );
}