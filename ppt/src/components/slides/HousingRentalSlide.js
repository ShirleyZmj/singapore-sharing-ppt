import Image from "next/image";
import InfoModule from "../InfoModule";
import Slide from "../Slide";

export default function HousingRentalSlide() {
  return (
    <Slide id="housing-rental" title="新加坡租房">
      <div className="space-y-6">
        <InfoModule title="房屋种类" size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-700">
                HDB (aka. 组屋)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-600">优点 (Pro):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>楼下有很多食阁和小超市</li>
                    <li>离公交车站或者地铁近</li>
                    <li>房租比较便宜</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点 (Con):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>有些老旧祖屋设施比较差</li>
                    <li>没有小区的概念</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-purple-700">
                Condo (aka. 公寓)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-600">优点 (Pro):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>设施很新</li>
                    <li>小区自带健身房/游泳池/网球场/KTV等设施</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点 (Con):</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>价格偏贵</li>
                    <li>
                      有些公寓交通不是很方便（但会有shuttle
                      bus通往最近的地铁站）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/renting1.jpg"
            alt="房屋种类"
            width={1000}
            height={1000}
          />
        </InfoModule>

        <InfoModule title="租房关键词" size="lg">
          <div className="space-y-4">
            <Image
              src="/images/renting2.jpg"
              alt="房屋种类"
              width={1000}
              height={1000}
            />
            <div>
              <p>xbyb(x,y ∈ ℕ)</p>
              <ul>
                <li>x：有x个房间</li>
                <li>y：有y个厕所</li>
                <li>举个例子：3b2b是三室两厕</li>
              </ul>
            </div>
          </div>
          <div>
            <p>房间种类</p>
            <ul>
              <li>主人房：厕所和房间连着，租金2k SGD左右</li>
              <li>普通房：需要和别的室友共用厕所，租金1k-2k SGD</li>
            </ul>
          </div>

          <div>
            <p>租房需要关注的点：</p>
            <ul>
              <li>整租</li>
              <li>房东同住</li>
              <li>二房东</li>
              <li>转租</li>
              <li>share room</li>
            </ul>
          </div>
        </InfoModule>
        <InfoModule title="常见租房平台" size="lg">
          <ul>
            <li>PropertyGuru</li>
            <li>99.co</li>
            <li>小坡岛微信小程序</li>
          </ul>
        </InfoModule>
      </div>
    </Slide>
  );
}
