import InfoModule from "../InfoModule";
import Slide from "../Slide";

export default function LawSlide() {
  return (
    <Slide id="law" title="法律">
      <div className="space-y-4">
        <InfoModule title="日常生活法规">
          <ul>
            <li>
              <strong>随地吐痰</strong> 罚款{" "}
              <strong className="text-red-500">300新币</strong>，屡犯者最高{" "}
              <strong className="text-red-500">1,000新币</strong>。
            </li>
            <li>
              <strong>乱丢垃圾</strong> 罚款{" "}
              <strong className="text-red-500">300新币</strong>
              ，严重者需穿着"义务劳动"背心清理街道，屡犯者最高{" "}
              <strong className="text-red-500">2,000新币</strong>。
            </li>
            <li>
              <strong>吸烟</strong> 仅限指定区域，违规罚款{" "}
              <strong className="text-red-500">300新币</strong>。
            </li>
            <li>
              <strong>公共场所喂食动物</strong> 罚款{" "}
              <strong className="text-red-500">500新币</strong>。
            </li>
            <li>
              <strong>公共厕所不冲水</strong> 罚款{" "}
              <strong className="text-red-500">150新币</strong>。
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="公共交通规定">
          <ul>
            <li>
              <strong>公共交通工具内饮食</strong> 罚款最高{" "}
              <strong className="text-red-500">500新币</strong>。
            </li>
            <li>
              <strong>携带榴莲进入公共交通工具</strong> 罚款{" "}
              <strong className="text-red-500">1000新币</strong>。
            </li>
            <li>
              <strong>乱穿马路</strong> 在人行道50米范围内未走斑马线，罚款{" "}
              <strong className="text-red-500">50新币</strong>。
            </li>
            <li>
              <strong>未系安全带</strong> 包括后排乘客，罚款{" "}
              <strong className="text-red-500">120新币</strong>。
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="其他重要法规">
          <ul>
            <li>
              <strong>未经许可连接他人Wi-Fi</strong> 最高罚款{" "}
              <strong className="text-red-500">10,000新币</strong> 或3年监禁。
            </li>
            <li>
              <strong>公共场所裸露上身</strong> 最高罚款{" "}
              <strong className="text-red-500">2,000新币</strong> 或3个月监禁。
            </li>
            <li>
              <strong>晚上10点至早上7点制造噪音</strong> 罚款{" "}
              <strong className="text-red-500">1,000新币</strong>。
            </li>
            <li>
              <strong>未经许可放生动物</strong> 最高罚款{" "}
              <strong className="text-red-500">50,000新币</strong> 及6个月监禁。
            </li>
          </ul>
        </InfoModule>
      </div>
    </Slide>
  );
}
