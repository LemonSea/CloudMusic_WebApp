// 这里定义的全局的通用属性

// 扩大可点击区域
const extendClick = () => {
    return`
        position: relative;
        &:before {
            content: '';
            position: absolute;
            top: -.266667rem;
            bottom: -.266667rem;
            left: -.266667rem;
            right: -.266667rem;
        }
    `
}

// 一行文字溢出部分用 …… 代替
const noWrap = () => {
    return`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    `
}

export default {
    'theme-color': '#d44439',  // 主题颜色——网易云红
    'theme-color-shadow': 'rgba(212, 68, 57, .5)',  // 主题颜色——暗色
    'font-color-light': '#f1f1f1',  // 字体颜色——高亮灰白色
    'font-color-desc': '#2E3030',  // 字体颜色——黑灰色
    'font-color-desc-v2': '#bba8a8',  // 字体颜色——带红色的深灰色
    // px
    'font-size-ss': '10px',  // 字体大小——极小
    'font-size-s': '12px',  // 字体大小——小
    'font-size-m': '14px',  // 字体大小——正常
    'font-size-l': '16px',  // 字体大小——大
    'font-size-ll': '18px',  // 字体大小——极大
    'border-color': '#e4e4e4',  // 边框颜色——白灰色
    'background-color': '#f2f3f4',  // 背景颜色——银灰色
    'background-color-shadow': 'rgba(0, 0, 0, 0.3)',  // 背景颜色——深灰黑色
    'hightlight-background-color': '#fff',  // 背景颜色——白色
    extendClick,
    noWrap
}