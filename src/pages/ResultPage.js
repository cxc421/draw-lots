import React, { useState } from 'react';
import styled, { css as _css } from 'styled-components';

const STAGE = {
  CENTER: 'stage-center',
  DETAIL: 'stage-detail'
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 258px);
  width: 920px;
  max-width: 100%;
  /* background: pink; */
  padding-left: 40px;

  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s;
`;

const TitleBlock = styled.div`
  position: absolute;
  /* background: green; */
  transition: all 1s;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => {
    if (props.stage === STAGE.DETAIL) {
      return _css`
        top: 57px;
        right: 0;
        transform: translate(0, 0);
      `;
    } else {
      return _css`
        top: 50%;
        right: 50%;
        height: 415px;
        transform: translate(50%, -50%);
      `;
    }
  }}
`;

const TitleNumber = styled.div`
  color: white;
  font-weight: normal;
  font-family: 'Noto Sans TC', sans-serif;
  transition: all 1s;
  order: 1;

  ${props => {
    if (props.stage === STAGE.DETAIL) {
      return _css`
        width: 16px;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0px;
        margin-right: 0px;
      `;
    } else {
      return _css`
        width: auto;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: 38px;
        margin-right: -38px;
      `;
    }
  }}
`;

const TitleDate = styled.div`
  color: white;
  font-weight: normal;
  font-family: 'Noto Sans TC', sans-serif;
  transition: all 1s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* display: none; */

  ${props => {
    if (props.stage === STAGE.DETAIL) {
      return _css`
        // order: 2;
        top: 80px;
        width: 16px;
        font-size: 16px;
        line-height: 16px;
      `;
    } else {
      return _css`
        // order: 3;
        top: 380px;
        width: auto;
        white-space: nowrap;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: 50px;
        padding-left: 50px;
      `;
    }
  }}
`;

const TitleResult = styled.div`
  color: white;
  font-weight: normal;
  transition: all 1s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${props => {
    if (props.stage === STAGE.DETAIL) {
      return _css`
        width: 16px;
        // order: 3;
        top: 144px;
        font-size: 16px;
        line-height: 16px;
        font-family: 'Noto Sans TC', sans-serif;
      `;
    } else {
      return _css`
        width: auto;
        white-space: nowrap;
        // order: 2;
        top: 35px;
        font-size: 240px;
        line-height: 345px;
        font-family: 'Noto Serif TC', serif;
      `;
    }
  }}
`;

const ResultPage = ({ show }) => {
  const [stage, setStage] = useState(STAGE.CENTER);

  return (
    <Wrapper show={show}>
      <TitleBlock stage={stage}>
        <TitleNumber stage={stage}>第四十八籤</TitleNumber>
        <TitleDate stage={stage}>
          {stage === STAGE.DETAIL ? '︻ 戊 辛 ︼ ' : '【戊辛】'}
        </TitleDate>
        <TitleResult stage={stage}>中吉</TitleResult>
      </TitleBlock>
      <button
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)'
          // display: 'none'
        }}
        onClick={() => {
          setStage(stage === STAGE.CENTER ? STAGE.DETAIL : STAGE.CENTER);
        }}
      >
        Test Button
      </button>
    </Wrapper>
  );
};

export default ResultPage;
