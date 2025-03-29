import Slide from "../Slide";
import InfoModule from "../InfoModule";
import Image from "next/image";

export default function SingaporeCelebritiesSlide() {
  return (
    <Slide id="singapore-celebrities" title="新加坡相关明星">
      <div className="space-y-6">
        <InfoModule title="相关明星" size="lg">
          <p>孙燕姿、林俊杰、希林娜依高、庞颖等等</p>
        </InfoModule>
        <InfoModule title="相关视频" size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Weibo Video */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://h5.video.weibo.com/show/1034:5136588053872711"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="新加坡相关明星视频"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://h5.video.weibo.com/show/1034:5136588053872711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  微博视频
                </a>
              </p>
            </div>

            {/* Bilibili Video 1 */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV19y4y1J7Xd&high_quality=1"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="新加坡相关明星B站视频"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://www.bilibili.com/video/BV19y4y1J7Xd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  哔哩哔哩
                </a>
              </p>
            </div>

            {/* Bilibili Video 2 */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV12s411M7Ng&high_quality=1"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="新加坡相关明星B站视频2"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://www.bilibili.com/video/BV12s411M7Ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  哔哩哔哩
                </a>
              </p>
            </div>

            {/* Xiaohongshu Video */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.xiaohongshu.com/explore/67d14f41000000000603965b?app_platform=ios&app_version=8.75&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CB1mxI4KxqJsq3P0_nAOpOEEnriOtV86jF4x2yz_OkKD8=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4QkRJSE5IOElDOjw3PUc3PDg8SD1P&apptime=1742660674&share_id=ae8ea0b6b71f459298df3cae63f8b863"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="庞导的新加坡市区旅游推荐"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://www.xiaohongshu.com/explore/67d14f41000000000603965b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  小红书 - 庞导的新加坡市区旅游推荐
                </a>
              </p>
            </div>

            {/* Bilibili Video 3 */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV19v411z7Lq&high_quality=1"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="新加坡相关明星B站视频3"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://www.bilibili.com/video/BV19v411z7Lq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  哔哩哔哩
                </a>
              </p>
            </div>

            {/* Bilibili Video 4 */}
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1A5411r7At&high_quality=1"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="新加坡相关明星B站视频4"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                视频来源:{" "}
                <a
                  href="https://www.bilibili.com/video/BV1A5411r7At"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  哔哩哔哩
                </a>
              </p>
            </div>
          </div>
        </InfoModule>
      </div>
    </Slide>
  );
}
