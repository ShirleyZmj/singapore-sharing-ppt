import Slide from "../Slide";

export default function StudyAbroadSlide() {
  return (
    <Slide id="study-abroad" title="留学（研究生）">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">主要院校</h2>
          <ul className="slide-list">
            <li>新加坡国立大学（NUS）</li>
            <li>南洋理工大学（NTU）</li>
            <li>新加坡管理大学（SMU）</li>
          </ul>

          <h2 className="slide-subtitle mt-4">申请要求</h2>
          <ul className="slide-list">
            <li>学术成绩</li>
            <li>语言要求</li>
            <li>专业背景</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">费用</h2>
          <ul className="slide-list">
            <li>学费</li>
            <li>生活费</li>
            <li>奖学金机会</li>
          </ul>

          <h2 className="slide-subtitle mt-4">在职读研</h2>
          <ul className="slide-list">
            <li>学习补贴</li>
            <li>课程设置</li>
            <li>时间安排</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
