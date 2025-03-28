import Slide from "../Slide";

export default function TableOfContentsSlide() {
  return (
    <Slide id="table-of-contents" title="目录">
      <div className="w-full max-w-3xl mx-auto">
        <ol className="slide-list text-3xl list-decimal ml-5 space-y-2">
          <li>自我背景介绍</li>
          <li>新加坡概况</li>
          <li>留学</li>
          <li>新加坡身份介绍</li>
          <li>求职介绍（实习）</li>
          <li>工作感受区别（CPF，医疗，节假日）</li>
          <li>求职介绍（工作）</li>
          <li>住房</li>
          <li>交通</li>
          <li>法律</li>
          <li>Q&A</li>
        </ol>
      </div>
    </Slide>
  );
}
