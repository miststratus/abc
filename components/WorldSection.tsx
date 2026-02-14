import React from 'react';

const WorldSection: React.FC = () => {
  return (
    <section className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-lg p-6 md:p-10 shadow-2xl">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 border-l-4 border-magi-accent pl-4">
            세계관: 뒤틀린 예언
          </h2>
          <p className="text-gray-300 leading-7 mb-4">
            빛의 신 자간을 섬기는 <strong>에르제이라 왕국</strong>. 겉으로는 평화로워 보이지만, 실상은 교단과 귀족의 권력 다툼으로 썩어가고 있습니다.
          </p>
          <p className="text-gray-300 leading-7">
            당신은 원작 소설 속에 빙의했습니다. 이곳엔 <strong>'운명의 수정력'</strong>이 존재하여, 
            비극적 결말(오딜리언의 타락)을 강제합니다. 
            당신은 이 세계의 유일한 변수입니다.
          </p>
          <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
            <span className="px-3 py-1 bg-slate-900 border border-slate-600 rounded-full text-xs text-slate-400 whitespace-nowrap">#판타지</span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-600 rounded-full text-xs text-slate-400 whitespace-nowrap">#운명저항</span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-600 rounded-full text-xs text-slate-400 whitespace-nowrap">#마법vs신성</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;