import Image from "next/image";
import InfoModule from "../InfoModule";
import Slide from "../Slide";

export default function IdentityStatusSlide() {
  return (
    <Slide id="identity-status" title="新加坡身份介绍">
      <div className="space-y-6">
        <InfoModule title="签证类别" size="lg">
          <Image
            src="/images/visa1.jpg"
            alt="签证类别"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/visa2.jpg"
            alt="签证类别"
            width={1000}
            height={1000}
          />
        </InfoModule>
        <InfoModule title="EP Compass" size="lg">
          <Image
            src="/images/compass.jpg"
            alt="EP Compass"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/compass2.jpg"
            alt="EP Compass"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/compass3.jpg"
            alt="EP Compass"
            width={1000}
            height={1000}
          />
        </InfoModule>
      </div>
    </Slide>
  );
}
