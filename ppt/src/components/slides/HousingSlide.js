import Slide from "../Slide";
import InfoModule from "../InfoModule";

export default function HousingSlide() {
  return (
    <Slide id="housing" title="住房">
      <div className="space-y-6">
        <InfoModule title="新加坡住房类别" size="lg">
          <p>
            新加坡的住房大致分为{" "}
            <strong>
              政府住房（HDB）、执行共管公寓（EC）、私人公寓、有地住宅
            </strong>{" "}
            四大类，每种房产的价格、居住环境、购房资格都有不同。
          </p>
        </InfoModule>

        <InfoModule title="政府组屋（HDB）" size="lg">
          <p>
            <strong>特点</strong>：
          </p>
          <ul>
            <li>
              HDB提供远低于市场价格的组屋。 HDB全称为Housingand Development
              Board，中文称建屋发展局，是新加坡国家发展部下的法定机构，成立于1960年，作为政府职能机构负责新加坡居住新镇的规划、建设和管理。
            </li>
            <li>✅ 由政府建造，价格最实惠</li>
            <li>✅ 主要面向新加坡公民和永久居民（PR）</li>
            <li>
              ✅ 只能在 <strong>HDB 规定的二手市场</strong> 交易
            </li>
            <li>
              ❌ 受 <strong>最低居住年限（MOP）</strong> 限制，通常是{" "}
              <strong>5 年</strong> 才能出售
            </li>
          </ul>

          <p>
            <strong>HDB 主要类型</strong>：
          </p>
          <table>
            <thead>
              <tr>
                <th>组屋类型</th>
                <th>面积（平方米）</th>
                <th>适合居住人数</th>
                <th>价格（约）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>2 房式</strong>
                </td>
                <td>35-45㎡</td>
                <td>1-2 人</td>
                <td>~$150,000 - $250,000</td>
              </tr>
              <tr>
                <td>
                  <strong>3 房式</strong>
                </td>
                <td>60-70㎡</td>
                <td>2-4 人</td>
                <td>~$250,000 - $450,000</td>
              </tr>
              <tr>
                <td>
                  <strong>4 房式</strong>
                </td>
                <td>90-100㎡</td>
                <td>3-5 人</td>
                <td>~$450,000 - $700,000</td>
              </tr>
              <tr>
                <td>
                  <strong>5 房式</strong>
                </td>
                <td>110-120㎡</td>
                <td>4-6 人</td>
                <td>~$600,000 - $900,000</td>
              </tr>
              <tr>
                <td>
                  <strong>执行公寓（EA/EM）</strong>
                </td>
                <td>120-150㎡</td>
                <td>5-7 人</td>
                <td>~$700,000 - $1,200,000</td>
              </tr>
            </tbody>
          </table>

          <p>
            📌 <strong>注意</strong>：
          </p>
          <ul>
            <li>
              <strong>新组屋（BTO）</strong>：价格最低，但需要{" "}
              <strong>申请+等待 3-5 年</strong> 建成
            </li>
            <li>
              <strong>转售组屋（Resale HDB）</strong>：可以立即购买，但价格较贵
            </li>
            <li>
              <strong>HDB 贷款 VS 银行贷款</strong>：HDB 贷款可借{" "}
              <strong>80%</strong>，银行贷款最多 <strong>75%</strong>
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="执行共管公寓（Executive Condominium, EC）" size="lg">
          <p>
            <strong>特点</strong>：
          </p>
          <ul>
            <li>
              ✅ 介于 HDB 和私人公寓之间，带有{" "}
              <strong>公寓设施（游泳池、健身房等）</strong>
            </li>
            <li>
              ✅ <strong>前 10 年受 HDB 限制</strong>（仅公民 & PR
              可买），之后变为私人公寓
            </li>
            <li>
              ✅ 价格比私人公寓便宜 <strong>20%-30%</strong>
            </li>
            <li>
              ❌ <strong>只能家庭申请</strong>（单身不可直接购买）
            </li>
          </ul>

          <p>
            📌 <strong>适合买 EC 的人</strong>：
          </p>
          <ul>
            <li>
              想要 <strong>更好的居住环境</strong>，但私人公寓太贵
            </li>
            <li>
              <strong>收入 ≤ $16,000</strong> 的家庭（超过无法申请新 EC）
            </li>
            <li>
              计划 <strong>长期居住</strong>（因为 10 年后才可自由交易）
            </li>
          </ul>

          <p>
            💰 <strong>价格</strong>：
          </p>
          <ul>
            <li>
              <strong>新 EC</strong>（政府补贴）：$900,000 - $1,500,000
            </li>
            <li>
              <strong>满 10 年 EC</strong>（变私人）：$1,200,000 - $2,000,000
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="私人公寓（Private Condominium）" size="lg">
          <p>
            <strong>特点</strong>：
          </p>
          <ul>
            <li>✅ 设施齐全（泳池、健身房、24 小时保安）</li>
            <li>
              ✅ 适合 <strong>高收入人群、投资</strong>
            </li>
            <li>
              ✅ 没有 HDB 规则限制（<strong>外国人可买</strong>）
            </li>
            <li>
              ❌ <strong>价格昂贵</strong>，但比有地房产便宜
            </li>
          </ul>

          <p>
            💰 <strong>价格（2024 年）</strong>：
          </p>
          <ul>
            <li>
              <strong>小型公寓（1-2 房）</strong>：$800,000 - $1,500,000
            </li>
            <li>
              <strong>中型公寓（3-4 房）</strong>：$1,500,000 - $3,000,000
            </li>
            <li>
              <strong>高端公寓（市中心）</strong>：$3,000,000 以上
            </li>
          </ul>

          <p>
            📌 <strong>适合买公寓的人</strong>：
          </p>
          <ul>
            <li>
              <strong>PR / 外国人</strong> 想在新加坡买房
            </li>
            <li>
              <strong>不想受 HDB 规则限制</strong>，比如出租、转售更自由
            </li>
            <li>
              <strong>投资用</strong>（租金回报率 3-4%）
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="有地住宅（Landed Property）" size="lg">
          <p>
            <strong>特点</strong>：
          </p>
          <ul>
            <li>
              ✅ <strong>最顶级住宅</strong>，占地大，隐私好
            </li>
            <li>
              ✅ <strong>仅限新加坡公民</strong>（外国人买需要政府批准）
            </li>
            <li>
              ✅ 房价增长空间大，适合 <strong>超级富豪</strong>
            </li>
            <li>❌ 维护成本高，地税、保养费用贵</li>
          </ul>
          <p>
            <strong>主要类型</strong>：
          </p>
          <table>
            <thead>
              <tr>
                <th>住宅类型</th>
                <th>特点</th>
                <th>价格范围</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>排屋（Terrace House）</strong>
                </td>
                <td>一排房屋相连，带小院</td>
                <td>$3M - $6M</td>
              </tr>
              <tr>
                <td>
                  <strong>半独立式（Semi-Detached）</strong>
                </td>
                <td>两栋房子共用一面墙</td>
                <td>$5M - $10M</td>
              </tr>
              <tr>
                <td>
                  <strong>独立式（Bungalow）</strong>
                </td>
                <td>独门独院，独立产权</td>
                <td>$10M - $30M</td>
              </tr>
              <tr>
                <td>
                  <strong>优质洋房（GCB）</strong>
                </td>
                <td>1000㎡ 以上，豪宅级</td>
                <td>$30M+</td>
              </tr>
            </tbody>
          </table>
          <p>
            📌 <strong>适合买有地住宅的人</strong>：
          </p>
          <ul>
            <li>
              <strong>预算充足（$3M+）</strong>，长期定居
            </li>
            <li>
              <strong>新加坡公民</strong>（外国人买很难）
            </li>
            <li>
              追求 <strong>极致隐私、豪华生活</strong>
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="特殊房产" size="lg">
          <ul>
            <li>
              🔹 <strong>服务式公寓（Serviced Apartment）</strong>
              ：短租，适合外籍人士
            </li>
            <li>
              🔹 <strong>共管办公室（SoHo）</strong>：可办公 & 居住，但不能申请
              HDB 贷款
            </li>
            <li>
              🔹 <strong>黑白洋房（Black & White Houses）</strong>
              ：英国殖民时期建筑，仅政府租赁
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="住房类型比较" size="lg">
          <table>
            <thead>
              <tr>
                <th>
                  <strong>类别</strong>
                </th>
                <th>
                  <strong>价格（万新币）</strong>
                </th>
                <th>
                  <strong>设施</strong>
                </th>
                <th>
                  <strong>购买限制</strong>
                </th>
                <th>
                  <strong>适合买家</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>HDB 组屋</strong>
                </td>
                <td>$15 - $90</td>
                <td>基本设施</td>
                <td>SC/PR 购买</td>
                <td>首次购房，预算有限</td>
              </tr>
              <tr>
                <td>
                  <strong>EC</strong>
                </td>
                <td>$90 - $200</td>
                <td>近似公寓</td>
                <td>前 10 年受 HDB 限制</td>
                <td>预算有限但想住公寓</td>
              </tr>
              <tr>
                <td>
                  <strong>私人公寓</strong>
                </td>
                <td>$80 - $500+</td>
                <td>豪华设施</td>
                <td>无限制</td>
                <td>投资、高端居住</td>
              </tr>
              <tr>
                <td>
                  <strong>有地住宅</strong>
                </td>
                <td>$300 - $3000+</td>
                <td>独立房产</td>
                <td>仅 SC（外国人审批）</td>
                <td>富裕家庭、高端投资</td>
              </tr>
            </tbody>
          </table>
        </InfoModule>

        <InfoModule title="购房资格" size="lg">
          <p>
            <strong>新加坡公民（SC）</strong>：
          </p>
          <ul>
            <li>✅ 可购买任何类型住房</li>
            <li>✅ 可申请政府补贴（如 BTO、CPF 住房补贴）</li>
            <li>✅ 购买 HDB 时享受最低印花税</li>
          </ul>

          <p>
            <strong>永久居民（PR）</strong>：
          </p>
          <ul>
            <li>✅ 可购买二手 HDB、EC（满 5 年）、私人公寓</li>
            <li>❌ 不可申请新 BTO（除非与公民结婚）</li>
            <li>❌ 购房时需缴纳额外 5% 买方印花税（ABSD）</li>
          </ul>

          <p>
            <strong>外国人</strong>：
          </p>
          <ul>
            <li>✅ 可购买私人公寓、公寓</li>
            <li>❌ 不可购买 HDB、EC（10 年内）</li>
            <li>❌ 购买私人住宅需缴纳 30% 额外买方印花税（ABSD）</li>
            <li>❌ 购买有地住宅需获得特别批准</li>
          </ul>
        </InfoModule>

        <InfoModule title="额外买家印花税（ABSD）" size="lg">
          <p>
            额外买家印花税（ABSD）是购房时需要缴纳的额外税费，不同身份的税率不同：
          </p>
          <table>
            <thead>
              <tr>
                <th>
                  <strong>身份</strong>
                </th>
                <th>
                  <strong>第一套房</strong>
                </th>
                <th>
                  <strong>第二套房</strong>
                </th>
                <th>
                  <strong>第三套及以上</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>新加坡公民（SC）</strong>
                </td>
                <td>0%</td>
                <td>20%</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>
                  <strong>新加坡永久居民（PR）</strong>
                </td>
                <td>5%</td>
                <td>30%</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>
                  <strong>外国人</strong>
                </td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              ❗ <strong>外国人购房成本极高</strong>，第一套房就需要支付{" "}
              <strong>60% ABSD</strong>
            </li>
            <li>
              ✅ <strong>新加坡公民首套房无需 ABSD</strong>
              ，但第二套开始有较高税率
            </li>
            <li>
              ⚠️ <strong>PR 购房时首套就要交 5% ABSD</strong>
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="贷款政策（LTV - Loan-to-Value）" size="lg">
          <p>贷款成数（LTV）决定了你可以借多少钱：</p>
          <table>
            <thead>
              <tr>
                <th>
                  <strong>身份</strong>
                </th>
                <th>
                  <strong>贷款最高比例（首套房）</strong>
                </th>
                <th>
                  <strong>贷款最高比例（第二套房）</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>新加坡公民（SC）</strong>
                </td>
                <td>75%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>
                  <strong>新加坡永久居民（PR）</strong>
                </td>
                <td>75%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>
                  <strong>外国人</strong>
                </td>
                <td>50%-75%</td>
                <td>30%-45%</td>
              </tr>
            </tbody>
          </table>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              ✅ <strong>本地公民和 PR</strong> 贷款比例较高，可借{" "}
              <strong>最高 75%</strong>
            </li>
            <li>
              ❌ <strong>外国人贷款更受限</strong>，一般最高只能借{" "}
              <strong>50%-75%</strong>，具体视银行政策而定
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="房产持有税（BSD & Property Tax）" size="lg">
          <p>所有购房者都需要缴纳买方印花税（BSD），此外每年还需缴纳房产税。</p>
          <p>
            ✅ <strong>买方印花税（BSD）</strong>（适用于所有人）
          </p>
          <table>
            <thead>
              <tr>
                <th>价格区间</th>
                <th>印花税率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>首 $180,000</td>
                <td>1%</td>
              </tr>
              <tr>
                <td>$180,001 - $500,000</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>$500,001 - $1,000,000</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>超过 $1,000,000</td>
                <td>4%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            ✅ <strong>房产税（Property Tax）</strong>
            ：根据房屋类型和自住/出租决定税率，外国人额外缴税较多。
          </p>
        </InfoModule>
      </div>
    </Slide>
  );
}
