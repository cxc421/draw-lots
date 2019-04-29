import React, { useState } from 'react';
import styled, { css as _css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const cssTransName = 'css-trans';

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 960px;
  max-width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;

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

const RightTextBlock = styled.div`
  /* background: pink; */
  align-self: flex-start;
`;

const Title = styled.h1`
  font-size: 120px;
  width: 120px;
  text-align: center;
  line-height: 120px;
  margin-top: 80px;
  color: white;
  font-weight: 900;
`;

const LeftTextBlock = styled.div`
  /* background: gray; */
  align-self: flex-end;
  color: white;
`;

const SubTitle = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 24px;
`;

const SubBlock = styled.div`
  margin-bottom: 40px;
`;

const Pg = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
`;

const BtnBlock = styled.div`
  width: 368px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  & > *:nth-child(n + 4) {
    margin-top: 16px;
  }
`;

const btnSmallHoverStyle = _css`
  ${props =>
    !props.select
      ? _css`
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      /* color: black; */
    }
  `
      : _css`
      cursor: default;
      transition: none;
      `}
`;

const BtnSmall = styled.div`
  border: solid 1px white;
  width: 112px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.select ? '#5454d0' : 'white')};
  border-color: ${props => (props.select ? '#5454d0' : 'white')};
  font-size: 16px;
  font-weight: normal;
  font-family: 'Noto Sans TC', sans-serif;
  flex-shrink: 0;
  cursor: pointer;
  transition: background 300ms, color 300ms;

  ${btnSmallHoverStyle}
`;

const StartBtnBlock = styled.div`
  height: 128px;
  display: flex;
  align-items: center;
  /* backgrousnd: pink; */
`;

const StartBtn = styled.div`
  width: 350px;
  height: 55px;
  border: solid 1px black;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 300ms, color 300ms;

  &:hover {
    background: black;
    color: white;
  }

  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  color: ${props => (props.disabled ? 'gray' : 'black')};
  border-color: ${props => (props.disabled ? 'gray' : 'black')};
  font-style: ${props => (props.disabled ? 'italic' : 'none')};
`;

const LandingPage = ({ show, toNextPage }) => {
  const [selectBtn, setSelectBtn] = useState(-1);

  return (
    <CSSTransition
      in={show}
      classNames={cssTransName}
      timeout={500}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Wrapper>
        <LeftTextBlock>
          <SubTitle>求籤步驟</SubTitle>
          <SubBlock>
            <Pg>① 請虔誠地在心中默念您的姓名、出生年月日、住址</Pg>
            <Pg>② 選擇欲請教的求籤類別後，誠心地在心中詳細說明</Pg>
            <Pg>③ 說明完後即可點選「開始求籤」按鈕進行線上求籤</Pg>
          </SubBlock>
          <SubTitle>求籤類別</SubTitle>
          <SubBlock>
            <BtnBlock>
              <BtnSmall
                select={selectBtn === 1}
                onClick={() => setSelectBtn(1)}
              >
                網站上線
              </BtnSmall>
              <BtnSmall
                select={selectBtn === 2}
                onClick={() => setSelectBtn(2)}
              >
                感情姻緣
              </BtnSmall>
              <BtnSmall
                select={selectBtn === 3}
                onClick={() => setSelectBtn(3)}
              >
                事業工作
              </BtnSmall>
              <BtnSmall
                select={selectBtn === 4}
                onClick={() => setSelectBtn(4)}
              >
                家庭生活
              </BtnSmall>
              <BtnSmall
                select={selectBtn === 5}
                onClick={() => setSelectBtn(5)}
              >
                求財運勢
              </BtnSmall>
              <BtnSmall
                select={selectBtn === 6}
                onClick={() => setSelectBtn(6)}
              >
                參選總統
              </BtnSmall>
            </BtnBlock>
          </SubBlock>
          <StartBtnBlock>
            <StartBtn disabled={selectBtn < 0} onClick={toNextPage}>
              開始求籤
            </StartBtn>
          </StartBtnBlock>
        </LeftTextBlock>
        <RightTextBlock>
          <Title>線 上 求 籤 。</Title>
        </RightTextBlock>
      </Wrapper>
    </CSSTransition>
  );
};

export default LandingPage;
