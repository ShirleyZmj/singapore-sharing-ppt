import Slide from "../Slide";
import InfoModule from "../InfoModule";

export default function HousingSlide() {
  return (
    <Slide id="housing" title="住房">
      <InfoModule title="新加坡住房类型概览" size="lg">
        <table className="housing-table">
          <thead>
            <tr>
              <th>类别</th>
              <th>价格（万新币）</th>
              <th>设施</th>
              <th>购买限制</th>
              <th>适合买家</th>
              <th>详细说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HDB 组屋</td>
              <td>$15 - $90</td>
              <td>基本设施</td>
              <td>SC/PR 购买</td>
              <td>首次购房，预算有限</td>
              <td>
                <ul>
                  <li>
                    <strong>公民和PR可购买，外国人不可购买</strong>
                  </li>
                  <li>价格较低，但购房资格受限，需要满足一定收入条件</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>EC</td>
              <td>$90 - $200</td>
              <td>近似公寓</td>
              <td>前 10 年受 HDB 限制</td>
              <td>预算有限但想住公寓</td>
              <td>
                <ul>
                  <li>介于组屋和私人公寓之间的住房类型</li>
                  <li>前10年受HDB限制，之后可以卖给外国人</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>私人公寓</td>
              <td>$80 - $500+</td>
              <td>豪华设施</td>
              <td>无限制</td>
              <td>投资、高端居住</td>
              <td>
                <ul>
                  <li>
                    私人房产，设施齐全（泳池、健身房等），
                    <strong>外国人可以购买</strong>
                  </li>
                  <li>
                    价格较高，市中心每平方米价格可达{" "}
                    <strong>2万新币以上</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>有地住宅</td>
              <td>$300 - $3000+</td>
              <td>独立房产</td>
              <td>仅 SC（外国人审批）</td>
              <td>富裕家庭、高端投资</td>
              <td>
                <ul>
                  <li>仅限新加坡公民购买，外国人需特殊批准</li>
                  <li>价格极高，少数富裕阶层拥有</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </InfoModule>

      <InfoModule title="买房身份限制" size="lg">
        <ul>
          <li>
            <strong>外国人</strong>：只能买公寓，不能买HDB或别墅
          </li>
          <li>
            <strong>PR</strong>：可以买HDB（二手市场）和公寓，但不享受政府补贴
          </li>
          <li>
            <strong>公民</strong>：可以购买所有类型的房产，享有补贴和贷款优势
          </li>
        </ul>
      </InfoModule>
    </Slide>
  );
}
