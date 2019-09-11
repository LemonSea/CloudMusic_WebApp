import React from 'react';
import Slider from '../../components/slider';
import List from '../../components/list';
import Scroll from '../../baseUI/scroll';
import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 2.4rem;
  bottom: 0;
  width: 100%;
  max-width: 750px;
`
function Recommend(props) {

    const bannerList = [1, 2, 3, 4].map(item => {
        return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    })
    const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return {
            id: index,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122,
            name: "[洗澡时听的歌] 浴室里听歌吹泡泡o○o○o○"
        }
    });

    return (
        <Content>
            <Scroll className="list">
                <div>
                    <Slider bannerList={bannerList}></Slider>
                    <List recommendList={recommendList}></List>
                </div>
            </Scroll>
        </Content>
    )
}

export default React.memo(Recommend);