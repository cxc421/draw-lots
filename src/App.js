/**
【特定技術】第一幕：需選擇類別，才能開始求籤
【特定技術】第二幕：運勢類別有大吉－小吉-小凶－大凶
【特定技術】校長：「第二幕怎麼切換第三幕？嗯，我相信身為前端的你一定想得到的(拍肩」
【特定技術】第三幕：籤詩可以都一樣，只要運勢文字(大吉-大凶)不同即可。
【特定技術】第四幕：點選「重新求籤」，可回到第一幕
 */
import React, { useState } from 'react';

import Background from './components/Background';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';

const PAGE = {
  LANDING: 'landing-page',
  RESULT: 'result-page'
};

function App() {
  // const [page, setPage] = useState(PAGE.LANDING);
  const [page, setPage] = useState(PAGE.RESULT);

  return (
    <>
      <Background isLandingBg={page === PAGE.LANDING} />
      <LandingPage
        show={page === PAGE.LANDING}
        toNextPage={() => setPage(PAGE.RESULT)}
      />
      <ResultPage show={page === PAGE.RESULT} />
    </>
  );
}

export default App;
