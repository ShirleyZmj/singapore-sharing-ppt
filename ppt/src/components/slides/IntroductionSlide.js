import Slide from "../Slide";
import SlideTitle from "../SlideTitle";
import SlideContent from "../SlideContent";

export default function IntroductionSlide() {
  return (
    <Slide id="introduction">
      <SlideTitle>1. 自我背景介绍</SlideTitle>
      <SlideContent>
        <ul className="slide-list">
          <li>教育背景</li>
          <li>职业经历</li>
          <li>来新加坡原因</li>
          <li>在新加坡的工作经历</li>
          <li>当前状态</li>
        </ul>
      </SlideContent>
    </Slide>
  );
}
