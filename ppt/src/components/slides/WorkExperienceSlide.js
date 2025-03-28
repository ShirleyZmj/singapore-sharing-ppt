import Slide from "../Slide";

export default function WorkExperienceSlide() {
  return (
    <Slide id="work-experience" title="工作感受区别">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <h2 className="slide-subtitle">工作环境</h2>
          <ul className="slide-list">
            <li>办公室温度</li>
            <li>语言使用</li>
            <li>沟通文化</li>
            <li>个人发展空间</li>
          </ul>

          <h2 className="slide-subtitle mt-4">工作时间</h2>
          <ul className="slide-list">
            <li>官方工作时间（9-6）</li>
            <li>加班文化差异</li>
            <li>居家办公政策</li>
          </ul>
        </div>

        <div>
          <h2 className="slide-subtitle">假期与福利</h2>
          <ul className="slide-list">
            <li>年假（平均2周）</li>
            <li>病假（14天普通，60天住院）</li>
            <li>法定节假日（11天）</li>
            <li>补休假制度</li>
          </ul>

          <h2 className="slide-subtitle mt-4">薪资与缴费</h2>
          <ul className="slide-list">
            <li>交税制度</li>
            <li>公积金（CPF）</li>
            <li>医疗保险</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
