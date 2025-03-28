import Slide from "../Slide";

export default function TransportationSlide() {
  return (
    <Slide id="transportation" title="交通">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">公共交通</h2>
          <ul className="slide-list">
            <li>MRT（地铁）</li>
            <li>公交车系统</li>
            <li>EZ-Link卡使用</li>
            <li>公共交通注意事项</li>
          </ul>

          <h2 className="slide-subtitle mt-4">出租车/网约车</h2>
          <ul className="slide-list">
            <li>价格水平</li>
            <li>常用应用</li>
            <li>安全带要求</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">私家车</h2>
          <ul className="slide-list">
            <li>拥车证（COE）制度</li>
            <li>COE拍卖价格</li>
            <li>车辆使用年限</li>
          </ul>

          <h2 className="slide-subtitle mt-4">养车成本</h2>
          <ul className="slide-list">
            <li>车辆购买价格</li>
            <li>燃油费用</li>
            <li>保险与维护</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
