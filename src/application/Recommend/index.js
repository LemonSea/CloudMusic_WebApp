import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import List from '../../components/list';
import Scroll from '../../baseUI/scroll';
import styled from 'styled-components';
//引入forceCheck方法
import { forceCheck } from 'react-lazyload';
import { connect } from "react-redux";
import * as actionCreaters from './store/actionCreators';
import Loading from '../../baseUI/loading';

export const Content = styled.div`
  position: fixed;
  top: 2.4rem;
  bottom: 0;
  width: 100%;
  max-width: 750px;
`
function Recommend(props) {

    // const bannerList = [1, 2, 3, 4].map(item => {
    //     return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    // })
    // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
    //     return {
    //         id: index,
    //         picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
    //         playCount: 17171122,
    //         name: "[洗澡时听的歌] 浴室里听歌吹泡泡o○o○o○"
    //     }
    // });

    const { bannerList, recommendList, enterLoading } = props;
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];

    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        //如果页面有数据，则不发请求
        //immutable数据结构中长度属性size
        if (!bannerList.size) {
            getBannerDataDispatch();
        }
        if (!recommendList.size) {
            getRecommendListDataDispatch();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS}></Slider>
                    <List recommendList={recommendListJS}></List>
                </div>
            </Scroll>
            {enterLoading ? <Loading></Loading> : null}
        </Content>
    )
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreaters.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionCreaters.getRecommendList());
        },
    }
}
// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))