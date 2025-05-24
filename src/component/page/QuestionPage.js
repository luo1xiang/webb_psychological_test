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
        { title: "我就等等，用來規劃接下來", value: 1 },
        { title: "看看蟲，對紀錄說點甚麼東西", value: 3 },
        { title: "幹一件事，等後來？等甚麼？", value: 5 }
      ]
    },
    {
      title: "當你被放進烤箱時，溫度突然升高，你的反應是？",
      options: [
        { title: "萬幸萬幸萬事！（擔心它會）", value: 1 },
        { title: "其實沒有問題！我要拼出該有的實力！", value: 3 },
        { title: "我已經放棄掙扎，那就進…………", value: 5 }
      ]
    },
    {
      title: "如果你被顧客挑選時被放回去了，你會？",
      options: [
        { title: "立刻整理桑公分，重新排列", value: 1 },
        { title: "算是小敗了吧～雖然感到失望", value: 3 },
        { title: "萊於，問錯自己是不有題回", value: 5 }
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

  // 獲取當前問題的按鈕樣式
  const getButtonStyle = () => {
    if(questionIndex == 0) {
      return {
        bg: 'bg-[#BEE351]',
        shadow: 'shadow-[0px_4px_0px_1px_#90B62A]'
      };
    } else if(questionIndex == 1) {
      return {
        bg: 'bg-[#DD3E3E]',
        shadow: 'shadow-[0px_4px_0px_1px_#8D4509]'
      };
    } else {
      return {
        bg: 'bg-[#89BCFF]',
        shadow: 'shadow-[0px_4px_0px_1px_#1098EC]'
      };
    }
  };

  const buttonStyle = getButtonStyle();

  // 獲取背景漸變樣式
  const getBackgroundGradient = () => {
    if(questionIndex == 0) {
      return 'bg-gradient-to-b from-[#E8F5C8] to-[#C8E6A0]';
    } else if(questionIndex == 1) {
      return 'bg-gradient-to-b from-[#FFCDD2] to-[#FFABAB]';
    } else {
      return 'bg-gradient-to-b from-[#BBDEFB] to-[#90CAF9]';
    }
  };

  return (
    <>
      <MobileFrame>
        <div className={`absolute inset-0 ${getBackgroundGradient()}`}></div>
        
        <Image className='absolute top-0 -translate-y-1/2 z-10' src={images.circle} alt='blur-circle' />

        <div className='flex flex-col items-center gap-[26px] relative z-20'>
          <Image src={images.up} className='w-[88px]' alt='q-up' />

          <div className={`border-2 ${getMainColor('border')} rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl ${getMainColor('text')}`}>
            Q{questionIndex+1}
          </div>
          
          <div 
            className={`text-center font-bold text-2xl ${getMainColor('text')} mb-[40px] px-4 leading-relaxed`}
          > {questions[questionIndex].title} </div>

          {/* 渲染所有選項按鈕 */}
          {questions[questionIndex].options.map((option, index) => (
            <button 
              key={`option-${index}`}
              className={`${buttonStyle.bg} w-full rounded-full text-white 
                py-[16px] px-4 text-sm flex justify-center items-center font-medium 
                ${buttonStyle.shadow} cursor-pointer hover:translate-y-0.5 transition
                leading-relaxed text-center active:translate-y-1 z-20 relative`}
              onClick={() => clickAnswer(option)}
              type="button"
            >
              {option.title}
            </button>
          ))}

          <Image src={images.down} className='w-[88px] mt-4' alt='q-down' />
        </div>

        <Image className='absolute bottom-0 translate-y-1/2 z-10' src={images.circle} alt='blur-circle' />
        
        {/* 規則說明 - 可選擇是否顯示 */}
        {/* 
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 rounded-lg p-3 text-xs text-gray-600 z-30 backdrop-blur-sm">
          <div className="font-semibold mb-1">規則：</div>
          <div className="mb-1">第一個選項 1 分／第二個選項 3 分／第三個選項 5 分</div>
          <div className="text-xs">
            總分 3-7 分 > 結果 A（氣扁可頌）<br/>
            總分 8-10 分 > 結果 B（燒焦可頌）<br/>
            總分 11-15 分 > 結果 C（軟爛可頌）
          </div>
        </div>
        */}
      </MobileFrame>
    </>
  );
}