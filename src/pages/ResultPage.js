import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import bellSoundSrc from '../assets/bell.mp3';

const cssTransName = 'css-trans';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 258px);
  width: 920px;
  max-width: 100%;
  /* background: pink; */
  padding-right: 40px;

  transition: opacity 500ms;

  &.${cssTransName + '-enter'} {
    opacity: 0;
  }
  &.${cssTransName + '-enter-active'} {
    opacity: 1;
  }
  &.${cssTransName + '-exit'} {
    opacity: 1;
  }
  &.${cssTransName + '-exit-active'} {
    opacity: 0;
  }
`;

const showUpAnimate = keyframes`
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
`;

// const colorYellowAnimate = keyframes`
//   0% {
//     color: white;
//   }
//   40% {
//     color: yellow;
//   }
//   70% {
//     color: yellow;
//   }
//   100% {
//     color: white;
//   }
// `;

const colorYellowAnimate = props => keyframes`
  0% {
    color: white;
  }
  40% {
    color: ${props.color};
  }
  70% {
    color: ${props.color};
  }
  100% {
    color: white;
  }
`;

const titleBlockFlyAnimate = keyframes`
  from {
    top: 50%;
    right: 50%;
    height: 415px;
    transform: translate(50%, -50%);
  }
  to {
    top: 57px;
    right: 0;
    transform: translate(0, 0);
  }
`;

const TitleBlock = styled.div`
  position: absolute;
  transition: all 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: none; */

  animation: ${showUpAnimate} 2s ease 2s 1 normal both,
    ${colorYellowAnimate} 2.5s linear 1.5s 1 normal both,
    ${titleBlockFlyAnimate} 1.5s ease 4s 1 normal both;
`;

const titleNumberFlyAnimate = keyframes`
  from {
    width: auto;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 38px;
    margin-right: -38px;
  }
  to {
    width: 16px;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    margin-right: 0px;
  }
`;

const TitleNumber = styled.div`
  font-weight: normal;
  font-family: 'Noto Sans TC', sans-serif;
  transition: all 1s;
  order: 1;
  animation: ${titleNumberFlyAnimate} 1.5s ease 4s 1 normal both;
`;

const titleDateFlyAnimate = keyframes`
  from {
    top: 380px;
    width: auto;
    white-space: nowrap;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 50px;
    padding-left: 50px;
  }
  to {
    top: 80px;
    width: 16px;
    font-size: 16px;
    line-height: 16px;
  }
`;

const titleDateTextAnimate = keyframes`
  from {
    content: '【戊辛】';
  }
  to {
    content: '︻ 戊 辛 ︼ ';
  }
`;

const TitleDate = styled.div`
  font-weight: normal;
  font-family: 'Noto Sans TC', sans-serif;
  transition: all 1s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${titleDateFlyAnimate} 1.5s ease 4s 1 normal both;
  &::before {
    content: '【戊辛】';
    display: block;
    animation: ${titleDateTextAnimate} 1.5s ease 4s 1 normal both;
  }
`;

const titleResultFlyAnimate = keyframes`
  from {
    width: auto;
    white-space: nowrap;
    top: 35px;
    font-size: 240px;
    line-height: 345px;
    font-family: 'Noto Serif TC', serif;
  }
  to {
    width: 16px;
    top: 144px;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Noto Sans TC', sans-serif;
  }
`;

const TitleResult = styled.div`
  font-weight: normal;
  transition: all 1s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${titleResultFlyAnimate} 1.5s ease 4s 1 normal both;
`;

const mainBlockShowAnimate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  /* background: gray; */
  position: relative;
  padding-top: 57px;
  display: flex;
  justify-content: space-between;

  animation: ${mainBlockShowAnimate} 2s ease 5s 1 normal both;
`;

const MainBlockLeft = styled.div`
  /* background: black; */
  align-self: flex-end;
`;

const MainBlockRight = styled.div`
  /* background: black; */
  align-self: flex-start;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
`;

const Poetry = styled.p`
  font-size: 40px;
  color: white;
  width: 40px;
  line-height: 40px;
  margin-left: 40px;
`;

const MainBlockTitle = styled.h2`
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 24px;
  color: white;
`;

const MainBlockPg = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
  margin-bottom: 40px;
`;

const ReplayButton = styled.div`
  width: 350px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px white;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: color 300ms, background 300ms;

  &:hover {
    color: #000;
    background: white;
  }
`;

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const makeLucky = () => getRndInteger(0, 6);

function useLucky(show) {
  const [lucky, setLucky] = useState(makeLucky());
  const luckMap = ['大凶', '中兇', '小兇', '小吉', '中吉', '大吉'];

  useEffect(() => {
    if (show) {
      setLucky(makeLucky());
    }
  }, [show]);

  return {
    text: luckMap[lucky],
    isLucky: lucky >= 3
  };
}

const bellSound = new Audio(bellSoundSrc);

const ResultPage = ({ show, toNextPage }) => {
  const lucky = useLucky(show);
  const titleColor = lucky.isLucky ? 'yellow' : 'red';

  useEffect(() => {
    let key = null;
    if (show) {
      key = setTimeout(() => {
        bellSound.play();
      }, 1000);
    } else {
      bellSound.load();
    }
    return () => {
      clearTimeout(key);
    };
  }, [show]);

  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={cssTransName}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Wrapper show={show}>
        <TitleBlock color={titleColor}>
          <TitleNumber>第四十八籤</TitleNumber>
          <TitleDate />
          <TitleResult>{lucky.text}</TitleResult>
        </TitleBlock>
        <MainBlock>
          <MainBlockLeft>
            <MainBlockTitle>聖意</MainBlockTitle>
            <MainBlockPg style={{ maxWidth: 240 }}>
              遇貴者　訟和平　病驚險　莫求名 財物耗　婚宜停　逢寅字　事漸亨
            </MainBlockPg>
            <MainBlockTitle>解曰</MainBlockTitle>
            <MainBlockPg style={{ maxWidth: 352 }}>
              此籤家道不安　須防人口舌　怨恨臨門　財有失　
              逢貴人提挈方保　漸亨不成　多口舌　
              問婚訟平　病有驚　財物耗散　名利空虛　
              只宜守舊　不利遠行　防親人侵損也　
            </MainBlockPg>
            <ReplayButton onClick={toNextPage}>重新求籤</ReplayButton>
          </MainBlockLeft>
          <MainBlockRight>
            <Poetry>登 山 涉 水 正 天 寒</Poetry>
            <Poetry>兄 弟 姻 親 那 得 安</Poetry>
            <Poetry>不 遇 虎 頭 人 一 喚</Poetry>
            <Poetry>全 家 誰 保 汝 重 歡</Poetry>
          </MainBlockRight>
        </MainBlock>
      </Wrapper>
    </CSSTransition>
  );
};

export default ResultPage;
