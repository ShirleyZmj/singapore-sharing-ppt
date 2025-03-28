import React from "react";

const CPFIntroduction = () => {
  return (
    <div className="cpf-introduction">
      <p>
        在新加坡，永久居民（PR）是需要缴纳公积金（Central Provident Fund,
        CPF）的。CPF是新加坡的强制性储蓄计划，旨在帮助居民在退休、医疗、住房等方面提供保障。
      </p>
      <table className="cpf-table">
        <thead>
          <tr>
            <th>项目</th>
            <th>详情</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>缴纳比例</td>
            <td>雇主17%，雇员20%（有封顶）</td>
          </tr>
          <tr>
            <td>账户类型</td>
            <td>
              <ul>
                <li>普通账户（OA）：用于住房、保险、投资和教育。</li>
                <li>
                  特别账户（SA）：用于退休储蓄和投资，存在里面有利息。（养老保险65岁才能每个月定量取，这个岁数在逐年上涨，一般我就认为这个是退休年龄了...）
                </li>
                <li>
                  保健储蓄账户（MA）：用于医疗费用。（到死也花不完的那种）
                </li>
              </ul>
              <a
                target="_blank"
                href="https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/earning-attractive-interest"
              >
                CPF各个账户利率
              </a>
            </td>
          </tr>
          <tr>
            <td>缴纳阶段</td>
            <td>
              PR身份的第一年和第二年，CPF的缴纳比例逐步增加，第三年达到与公民相同的比例。
            </td>
          </tr>
          <tr>
            <td>用途</td>
            <td>用于购买住房、支付医疗费用、投资以及退休后的生活费用。</td>
          </tr>
          <tr>
            <td>其他说明</td>
            <td>
              <ul>
                <li>
                  对于新加坡PR来说，缴纳CPF是强制性的，这不仅是对个人未来的一种保障，也是一种社会责任。
                </li>
                <li>缴纳的公积金是税收减免项。</li>
                <li>在取消PR身份后，能够把公积金提取出来。</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        讲公积金是为了说，如果是PR和citizen到手的钱会少，但是公司会出更多的钱。有些公司会把这部分钱给工作准证持有者，或则你也可以去和公司商量一下。
      </p>
    </div>
  );
};

export default CPFIntroduction;
