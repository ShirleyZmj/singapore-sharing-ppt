import Slide from "../Slide";

export default function QASlide() {
  return (
    <Slide id="qa" title="Q&A">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">移民相关</h2>
          <ul className="slide-list">
            <li>移民政策与途径</li>
            <li>移民后的福利</li>
            <li>移民时间线</li>
          </ul>

          <h2 className="slide-subtitle mt-4">工作相关</h2>
          <ul className="slide-list">
            <li>IT行业就业机会</li>
            <li>技术能力要求</li>
            <li>薪资与花销比例</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">生活相关</h2>
          <ul className="slide-list">
            <li>气候适应性</li>
            <li>华人生活体验</li>
            <li>幸福度评价</li>
          </ul>

          <h2 className="slide-subtitle mt-4">其他问题</h2>
          <ul className="slide-list">
            <li>人文环境</li>
            <li>社会价值观</li>
            <li>旅游推荐</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
