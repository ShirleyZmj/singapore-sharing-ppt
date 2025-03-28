import Slide from "../Slide";

export default function IdentityStatusSlide() {
  return (
    <Slide id="identity-status">
      <h1 className="slide-title">4. 新加坡身份介绍</h1>
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">工作准证 (Work Pass)</h2>
          <ul className="slide-list">
            <li>Employment Pass (EP)</li>
            <li>S Pass</li>
            <li>Work Permit</li>
            <li>Tech.Pass</li>
          </ul>

          <h2 className="slide-subtitle mt-4">永久居民 (PR)</h2>
          <ul className="slide-list">
            <li>申请条件</li>
            <li>福利与限制</li>
            <li>公积金缴纳</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">公民 (Citizen)</h2>
          <ul className="slide-list">
            <li>入籍条件</li>
            <li>完整福利</li>
            <li>兵役义务</li>
          </ul>

          <h2 className="slide-subtitle mt-4">身份对比</h2>
          <ul className="slide-list">
            <li>住房购买权限</li>
            <li>医疗补贴</li>
            <li>教育优惠</li>
            <li>税收差异</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
