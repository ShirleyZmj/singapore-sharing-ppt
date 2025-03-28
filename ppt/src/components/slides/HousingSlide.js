import Slide from "../Slide";

export default function HousingSlide() {
  return (
    <Slide id="housing">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-5xl font-bold !text-blue-800 mb-8">住房</h2>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div>
            <h2 className="slide-subtitle">住房类型</h2>
            <ul className="slide-list">
              <li>HDB组屋</li>
              <li>EC（执行共管公寓）</li>
              <li>私人公寓（Condo）</li>
              <li>有地住宅（别墅）</li>
            </ul>

            <h2 className="slide-subtitle mt-4">价格区间</h2>
            <ul className="slide-list">
              <li>HDB：15-90万新币</li>
              <li>EC：90-200万新币</li>
              <li>私人公寓：80-500+万新币</li>
              <li>有地住宅：300-3000+万新币</li>
            </ul>
          </div>

          <div>
            <h2 className="slide-subtitle">身份限制</h2>
            <ul className="slide-list">
              <li>公民：可购买所有类型</li>
              <li>PR：可购买二手HDB和私人住宅</li>
              <li>外国人：仅可购买私人住宅</li>
            </ul>

            <h2 className="slide-subtitle mt-4">租房市场</h2>
            <ul className="slide-list">
              <li>租房流程</li>
              <li>租金水平</li>
              <li>租房注意事项</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
