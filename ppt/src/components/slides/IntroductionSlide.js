import Slide from "../Slide";
import Image from "next/image";

export default function IntroductionSlide() {
  return (
    <Slide id="introduction" title="主讲人自我介绍">
      {/* 主讲人部分 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-1">
            <div className="relative w-40 h-40 rounded-full">
              <Image
                src="/images/jia.jpg"
                alt="佳"
                fill
                sizes="160px"
                className="object-cover"
                style={{ borderRadius: "50%" }}
                priority
              />
            </div>
            <div className="text-center text-xl font-medium mt-4">佳</div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="relative w-40 h-40 rounded-full">
              <Image
                src="/images/egg.jpg"
                alt="煎蛋"
                fill
                sizes="160px"
                className="object-cover"
                style={{ borderRadius: "50%" }}
                priority
              />
            </div>
            <div className="text-center text-xl font-medium mt-4">煎蛋</div>
          </div>
        </div>

        {/* 特邀嘉宾部分 */}
        <div className="mt-3 flex justify-center items-center gap-12">
          <div className="text-center text-2xl font-bold mb-2">特邀嘉宾</div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-40 h-40 rounded-full">
                <Image
                  src="/images/yanan.jpg"
                  alt="Yanan"
                  fill
                  sizes="160px"
                  className="object-cover"
                  style={{ borderRadius: "50%" }}
                  priority
                />
              </div>
              <div className="text-center text-xl font-medium mt-4">Yanan</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
