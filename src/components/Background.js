import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const BgShade = styled.div`
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
  transition: all 500ms;
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
      const canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;

      canvas.getContext('2d').drawImage(this, 0, 0);

      setSrc(canvas.toDataURL('image/png'));
    };
    img.src = bigSrc;
  }, [bigSrc]);

  return src;
};

function Background({ style }) {
  const imgSrc = useLazyImgSrc({ bigSrc: bgSrc, smallSrc: bgSrc_small });

  console.log(imgSrc.length);

  return (
    <BgWrapper style={style}>
      <BgImg bgSrc={imgSrc} />
      <BgShade />
    </BgWrapper>
  );
}

export default Background;
