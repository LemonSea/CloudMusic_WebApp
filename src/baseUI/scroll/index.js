import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import styled from 'styled-components';
const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
    // better-scroll实例对象
    const [bScroll, setBScroll] = useState();
    // current指向初始化bs实例需要的DOM元素 
    const scrollContaninerRef = useRef();

    // 对象结构获取参数
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
    const { pullUp, pullDown, onScroll } = props;

    // 创建 better-scroll
    useEffect(() => {
        const scroll = new BScroll(scrollContaninerRef.current, {
            scrollX: direction === "horizental",  // 当设置为 true 的时候，可以开启横向滚动。当设置 eventPassthrough 为 'horizontal' 的时候，该配置无效。
            scrollY: direction === "vertical",  // 当设置为 true 的时候，可以开启纵向滚动。当设置 eventPassthrough 为 'vertical' 的时候，该配置无效。
            // 有时候我们需要知道滚动的位置。
            // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
            // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
            // 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
            // 如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
            probeType: 3,
            // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
            click: click,
            // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
            // 这里使用的 变量 来控制
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setBScroll(scroll);
        return () => {
            setBScroll(null);
        }
    }, []);

    // 每次渲染都刷新实例，防止无法滑动
    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });

    // 给实例绑定scroll事件
    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on('scroll', (scroll) => {
            onScroll(scroll);
        })
        return () => {
            bScroll.off('scroll');
        }
    }, [onScroll, bScroll]);

    // 进行上拉到底的判断，调用上拉刷新的函数
    useEffect(() => {
        if (!bScroll || !pullUp) return;
        bScroll.on('scrollEnd', () => {
            //判断是否滑动到了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUp();
            }
        });
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [pullUp, bScroll]);

    // 进行下拉到底的判断，调用下拉刷新的函数
    useEffect(() => {
        if (!bScroll || !pullDown) return;
        bScroll.on('touchEnd', (pos) => {
            //判断用户的下拉动作
            if (pos.y > 50) {
                pullDown();
            }
        });
        return () => {
            bScroll.off('touchEnd');
        }
    }, [pullDown, bScroll]);

    // 一般和forwardRef一起使用，ref已经在forWardRef中默认传入
    useImperativeHandle(ref, () => ({
        //给外界暴露refresh方法
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        //给外界暴露getBScroll方法, 提供bs实例
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        }
    }));

    return (
        <ScrollContainer ref={scrollContaninerRef}>
            {props.children}
        </ScrollContainer>
    );
})

// 默认赋值
Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
};

Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizental']),
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoading: PropTypes.bool,
    bounceTop: PropTypes.bool,//是否支持向上吸顶
    bounceBottom: PropTypes.bool//是否支持向上吸顶
};

export default Scroll;