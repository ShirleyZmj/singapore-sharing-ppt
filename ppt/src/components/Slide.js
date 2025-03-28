import SlideTitle from "./SlideTitle";
import SlideContent from "./SlideContent";

export default function Slide({ id, title, children }) {
  // 判断是否为标题页面
  const isTitlePage = id === "title";

  return (
    <section
      id={id}
      className="flex flex-col justify-start items-start p-10 min-h-screen relative w-full overflow-scroll"
      style={{
        background:
          "linear-gradient(135deg, #c2e0ff 0%, #e6f2ff 50%, #ffffff 100%)",
      }}
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage: "url(/images/bg-icon.png)",
            backgroundPosition: "bottom right",
            opacity: isTitlePage ? 1 : 0.3, // 标题页面不透明，其他页面更透明
          }}
        ></div>

        {/* <div
          className="absolute border-radius-full inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.2) 100%)",
          }}
        ></div> */}
      </div>

      <div className="relative z-20 w-full h-full max-h-full overflow-auto">
        {title && <SlideTitle>{title}</SlideTitle>}
        <SlideContent>{children}</SlideContent>
      </div>
    </section>
  );
}
