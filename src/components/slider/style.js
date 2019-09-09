import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    
    .before{
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${style["theme-color"]};
  }
    .slider-container{
        position: relative;
        width: 98%;
        overflow: hidden;
        margin:auto;
        border-radius: .16rem;
    }

    .swiper-pagination-bullet-active{
      background: ${style["theme-color"]};
    }
`;