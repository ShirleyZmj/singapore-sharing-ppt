import Slide from "../Slide";

export default function JobSearchSlide() {
  return (
    <Slide id="job-search">
      <h1 className="slide-title">7. 求职介绍（工作）</h1>
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">求职渠道</h2>
          <ul className="slide-list">
            <li>LinkedIn</li>
            <li>MyCareersFuture</li>
            <li>JobStreet / JobsDB</li>
            <li>Indeed / Glassdoor</li>
          </ul>

          <h2 className="slide-subtitle mt-4">内推与猎头</h2>
          <ul className="slide-list">
            <li>前同事/校友内推</li>
            <li>LinkedIn人脉</li>
            <li>猎头对接</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">IT行业情况</h2>
          <ul className="slide-list">
            <li>国际企业</li>
            <li>中国出海公司</li>
            <li>Web3行业机会</li>
          </ul>

          <h2 className="slide-subtitle mt-4">工资水平</h2>
          <ul className="slide-list">
            <li>技术岗位薪资范围</li>
            <li>企业类型差异</li>
            <li>生活成本对比</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
