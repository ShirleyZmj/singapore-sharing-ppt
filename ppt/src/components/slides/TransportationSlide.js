import Slide from "../Slide";
import InfoModule from "../InfoModule";
export default function TransportationSlide() {
  return (
    <Slide id="transportation" title="交通">
      <div className="space-y-6">
        <InfoModule title="公共交通" size="lg">
          <ul>
            <li>MRT（地铁）+ 公交，覆盖全岛，出行便利。</li>
            <li>使用EZ-Link卡或信用卡/借记卡，票价按距离计算。</li>
            <li>上下公交车记得都要刷卡</li>
            <li>公共交通不可以吃东西，不可以带榴莲</li>
          </ul>
        </InfoModule>

        <InfoModule title="打的" size="lg">
          <ul>
            <li>后排要记得系安全带</li>
            <li>
              未系安全带的乘客：
              <ul>
                <li>乘客未系安全带将面临罚款，通常为 120新元。</li>
              </ul>
            </li>
            <li>
              司机的责任：
              <ul>
                <li>如果司机未确保所有乘客系好安全带，司机也可能被罚款。</li>
                <li>初犯的司机可能面临 120新元 的罚款和 3个扣分点。</li>
                <li>如果是累犯，罚款和扣分可能会增加。</li>
              </ul>
            </li>
            <li>
              儿童安全座椅违规：
              <ul>
                <li>未为儿童提供适当的安全座椅也会导致罚款和扣分。</li>
              </ul>
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="自驾" size="lg">
          <ol>
            <li>车辆昂贵</li>
            <li>
              拥车证制度
              <ul>
                <li>
                  拥车证（Certificate of Entitlement,
                  COE）是新加坡政府实施的一项政策，旨在控制车辆数量以缓解交通拥堵和环境压力。
                </li>
                <li>
                  COE 是购买汽车的必需证书，通常有效期为 <strong>10 年</strong>
                  。
                </li>
                <li>
                  拍卖制度：
                  <ul>
                    <li>COE通过公开拍卖的方式发放，拍卖通常每两周进行一次。</li>
                    <li>
                      竞标者根据自己愿意支付的价格进行投标，价格由市场需求决定。
                    </li>
                  </ul>
                </li>
                <li>
                  到期后，车主可以选择：
                  <ul>
                    <li>
                      <strong>报废或出口车辆</strong>（不再续约）。
                    </li>
                    <li>
                      <strong>续约 COE</strong>，可以续约{" "}
                      <strong>5 年或 10 年</strong>：
                      <ul>
                        <li>
                          <strong>续 10 年</strong>：支付当时的 COE
                          价格，全新有效期 10 年。
                        </li>
                        <li>
                          <strong>续 5 年</strong>：支付一半的 COE 价格，但 5
                          年后车辆必须报废，不能再续约。
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>

          <div className="coe-table">
            <h5>截至2025年3月19日，新加坡最新的拥车证（COE）价格：</h5>
            <table>
              <thead>
                <tr>
                  <th>COE类别</th>
                  <th>描述</th>
                  <th>最新价格（新加坡元）</th>
                  <th>之前价格（新加坡元）</th>
                  <th>变化幅度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>A类</strong>
                  </td>
                  <td>
                    汽车（非全电动）引擎容量不超过1,600cc且最大功率不超过97kW（130bhp）；全电动汽车最大功率不超过110kW（147bhp）
                  </td>
                  <td>$94,502</td>
                  <td>$92,730</td>
                  <td>+$1,772</td>
                </tr>
                <tr>
                  <td>
                    <strong>B类</strong>
                  </td>
                  <td>
                    汽车（非全电动）引擎容量超过1,600cc或最大功率超过97kW（130bhp）；全电动汽车最大功率超过110kW（147bhp）
                  </td>
                  <td>$116,890</td>
                  <td>$113,000</td>
                  <td>+$3,890</td>
                </tr>
                <tr>
                  <td>
                    <strong>C类</strong>
                  </td>
                  <td>商用车和公共汽车</td>
                  <td>$70,089</td>
                  <td>$67,001</td>
                  <td>+$3,088</td>
                </tr>
                <tr>
                  <td>
                    <strong>D类</strong>
                  </td>
                  <td>摩托车</td>
                  <td>$9,511</td>
                  <td>$9,201</td>
                  <td>+$310</td>
                </tr>
                <tr>
                  <td>
                    <strong>E类</strong>
                  </td>
                  <td>开放类别（可用于A、B或C类）</td>
                  <td>$116,991</td>
                  <td>$112,901</td>
                  <td>+$4,090</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              请注意，COE价格会在每月的两次投标中波动，具体取决于市场需求和可用配额。最新的投标结果和COE价格可在新加坡陆路交通管理局（LTA）的官方网站上找到。
            </p>
          </div>

          <div className="additional-info">
            <ul>
              <li>
                燃油价格：每升汽油的价格约为
                2.50至3新元，具体价格视市场波动而定。
              </li>
              <li>
                保险费用：保险费用因个人驾驶记录和车辆类型而异，通常每年在
                1,000至2,000新元 之间。
              </li>
              <li>
                车的价格：
                <a
                  href="https://www.sgcarmart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  网站
                </a>{" "}
                (10年 + COE)
              </li>
            </ul>
          </div>
        </InfoModule>
      </div>
    </Slide>
  );
}
