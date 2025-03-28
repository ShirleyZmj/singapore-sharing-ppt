import Slide from "../Slide";

export default function TitleSlide() {
  return (
    <Slide id="title">
      <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-white/70 to-blue-50/60 p-9 rounded-lg shadow-md relative z-0">
        <h2 className="text-6xl font-bold text-blue-800 mb-6 text-center">
          新加坡工作与生活分享
        </h2>
        <div className="w-24 h-1 bg-blue-500 mb-6 rounded-full"></div>
        <p className="text-2xl text-gray-600 font-medium italic">
          by 佳 & 煎蛋
        </p>
      </div>
    </Slide>
  );
}
