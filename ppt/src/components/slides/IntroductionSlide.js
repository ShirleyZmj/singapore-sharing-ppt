import Slide from "../Slide";

export default function IntroductionSlide() {
  return (
    <Slide id="introduction" title="主讲人背景介绍">
      <div className="flex items-center justify-around">
        <div>
          <ul className="slide-list">
            <li>佳</li>
            <li>煎蛋</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/jia.jpg"
            alt="佳"
            className="w-40 h-40 rounded-full object-cover"
          />
          <img
            src="/images/egg.jpg"
            alt="煎蛋"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>
    </Slide>
  );
}
