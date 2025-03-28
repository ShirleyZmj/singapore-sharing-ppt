import Slide from "../Slide";

export default function LawSlide() {
  return (
    <Slide id="law" title="法律">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">常见违规行为</h2>
          <ul className="slide-list">
            <li>随地吐痰 - 罚款300新币</li>
            <li>乱丢垃圾 - 罚款300新币</li>
            <li>非指定区域吸烟 - 罚款200新币</li>
            <li>不冲厕所 - 罚款150新币</li>
          </ul>

          <h2 className="slide-subtitle mt-4">特殊法规</h2>
          <ul className="slide-list">
            <li>口香糖禁令</li>
            <li>公共场所禁食榴莲</li>
            <li>义务劳动服务</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">安全与社会和谐</h2>
          <ul className="slide-list">
            <li>宗教和种族和谐法</li>
            <li>公共秩序维护</li>
            <li>服兵役制度</li>
          </ul>

          <h2 className="slide-subtitle mt-4">生活影响</h2>
          <ul className="slide-list">
            <li>高治安环境</li>
            <li>公共设施维护</li>
            <li>行为规范</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
