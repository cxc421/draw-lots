import React, { useState, useEffect } from 'react';
import styled, { css as _css } from 'styled-components';
import bgSrc from '../assets/bg.jpg';
import bgSrc_small from '../assets/bg_small.jpg';

const BgImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(${props => props.bgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const BgLandingShade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.2)
  );

  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s;
`;

const BgResultShade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  );

  /* opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s; */
`;

const BgResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 2s, visibility 2s;
`;

const BgTextCss = _css`
  color: rgb(62,63,64);
  font-size: 36px;
  line-height: 51px;
  position: absolute;
`;

const BgText1 = styled.div`
  ${BgTextCss}
  top: 40px;
  left: 40px;
`;

const BgText2 = styled.div`
  ${BgTextCss}
  top: 40px;
  right: 40px;
`;

const BgText3 = styled.div`
  ${BgTextCss}
  bottom: 40px;
  left: 40px;
`;
const BgText4 = styled.div`
  ${BgTextCss}
  bottom: 40px;
  right: 40px;
`;

const BgLineCss = _css`
    background: rgb(62,63,64);
    position: absolute;
`;

const BgLine1 = styled.div`
  ${BgLineCss};
  height: 1px;
  width: calc(100% - 232px);
  top: 65.5px;
  left: 116px;
`;

const BgLine2 = styled.div`
  ${BgLineCss};
  height: 1px;
  width: calc(100% - 232px);
  bottom: 65.5px;
  left: 116px;
`;

const BgLine3 = styled.div`
  ${BgLineCss};
  width: 1px;
  height: calc(100% - 262px);
  left: 58.5px;
  top: 131px;
`;

const BgLine4 = styled.div`
  ${BgLineCss};
  width: 1px;
  height: calc(100% - 262px);
  right: 58.5px;
  top: 131px;
`;

const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: height 500ms;
`;

const useLazyImgSrc = ({ bigSrc, smallSrc }) => {
  const [src, setSrc] = useState(smallSrc);

  useEffect(() => {
    const img = new Image();
    img.onload = function() {
      setSrc(bigSrc);
    };
    img.src = bigSrc;
  }, [bigSrc]);

  return src;
};

function Background({ isLandingBg }) {
  const imgSrc = useLazyImgSrc({ bigSrc: bgSrc, smallSrc: bgSrc_small });
  const wrapperStyle = {
    height: isLandingBg ? 'calc(100% - 128px)' : '100%'
  };

  return (
    <BgWrapper style={wrapperStyle}>
      <BgImg bgSrc={imgSrc} />
      <BgLandingShade show={isLandingBg} />
      <BgResultWrapper show={!isLandingBg}>
        <BgResultShade />
        <BgLine1 />
        <BgLine2 />
        <BgLine3 />
        <BgLine4 />
        <BgText1>線</BgText1>
        <BgText2>上</BgText2>
        <BgText3>求</BgText3>
        <BgText4>籤</BgText4>
      </BgResultWrapper>
    </BgWrapper>
  );
}

export default Background;
