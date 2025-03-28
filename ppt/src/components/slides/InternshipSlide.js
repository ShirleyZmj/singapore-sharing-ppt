import Slide from "../Slide";

export default function InternshipSlide() {
  return (
    <Slide id="internship">
      <h1 className="slide-title">5. 求职介绍（实习）</h1>
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">实习申请途径</h2>
          <ul className="slide-list">
            <li>校园招聘</li>
            <li>线上平台</li>
            <li>人脉推荐</li>
            <li>猎头推荐</li>
          </ul>

          <h2 className="slide-subtitle mt-4">申请材料</h2>
          <ul className="slide-list">
            <li>英文简历</li>
            <li>求职信</li>
            <li>学术成绩</li>
            <li>作品集/项目展示</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">签证安排</h2>
          <ul className="slide-list">
            <li>实习准证</li>
            <li>申请流程</li>
            <li>时间限制</li>
          </ul>

          <h2 className="slide-subtitle mt-4">薪资待遇</h2>
          <ul className="slide-list">
            <li>行业平均水平</li>
            <li>福利差异</li>
            <li>转正机会</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
