import React from "react";

const MedicalSystemIntroduction = () => {
  return (
    <div className="medical-system-introduction">
      <h3>新加坡医疗体系</h3>
      <p>新加坡的医疗服务分为三个层级，形成了一个完整的医疗保障体系。</p>

      <table className="medical-levels-table mt-8">
        <thead>
          <tr>
            <th>层级</th>
            <th>例子</th>
            <th>作用</th>
            <th>场景示例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1. 基层医疗</strong>
              <br />
              (Primary Care)
            </td>
            <td>综合诊所（Polyclinics）和私人诊所（GP Clinics）</td>
            <td>提供常规检查、疫苗接种、轻症治疗和慢性病管理</td>
            <td>
              <ul>
                <li>
                  如果你感冒发烧，可以去邻近的私人诊所（如Raffles
                  Medical）就诊，医生会进行检查并开药。
                </li>
                <li>
                  如果你需要进行糖尿病或高血压管理，可以前往政府综合诊所（如
                  NHGP 或 SHP），并使用 MediSave 账户支付费用。
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>2. 中层医疗</strong>
              <br />
              (Secondary Care)
            </td>
            <td>综合性医院（General Hospitals）</td>
            <td>
              为需要专科医生诊治的病人提供治疗，通常涉及住院或门诊专科治疗
            </td>
            <td>
              <ul>
                <li>
                  如果你摔伤骨折，私人诊所医生可能会建议你前往邱德拔医院的骨科专科进行X光检查和治疗。
                </li>
                <li>
                  如果你有慢性胃病，综合诊所的医生可能会转介你到樟宜综合医院的消化科进行详细检查。
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>3. 专科医疗</strong>
              <br />
              (Tertiary & Specialized Care)
            </td>
            <td>专科医院和专科中心</td>
            <td>
              针对特定疾病（如癌症、心脏病、精神疾病）提供高度专业化的治疗
            </td>
            <td>
              <ul>
                <li>
                  如果一名患者被确诊为癌症，他可能会被转介至国家癌症中心进行化疗或放疗。
                </li>
                <li>患有抑郁症或焦虑症的患者可以前往IMH进行心理咨询和治疗。</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="medical-summary mt-8">
        <h3>总结</h3>
        <ul>
          <li>
            普通感冒、疫苗接种、慢性病管理 →{" "}
            <strong>私人诊所 & Polyclinics</strong>
          </li>
          <li>
            需要专科医生诊断，如骨折、慢性疾病 → <strong>综合医院</strong>
          </li>
          <li>
            重大疾病，如癌症、心脏病、精神疾病 → <strong>专科医院</strong>
          </li>
        </ul>
      </div>

      <div className="medical-costs mt-8">
        <h3>医疗费用参考</h3>
        <h4 className="mt-4">公立医院费用举例</h4>
        <table className="costs-table">
          <thead>
            <tr>
              <th>项目</th>
              <th>新加坡公民</th>
              <th>永久居民</th>
              <th>外国人（私费）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>综合诊所（普通问诊）</td>
              <td>$10-$20</td>
              <td>$20-$30</td>
              <td>$50-$80</td>
            </tr>
            <tr>
              <td>综合医院普通门诊</td>
              <td>$30-$50</td>
              <td>$60-$90</td>
              <td>$150-$300</td>
            </tr>
            <tr>
              <td>B2 病房（政府补贴）</td>
              <td>$35-$50/天</td>
              <td>$70-$100/天</td>
              <td>不适用</td>
            </tr>
            <tr>
              <td>C 病房（政府最高补贴）</td>
              <td>$25-$35/天</td>
              <td>$50-$80/天</td>
              <td>不适用</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-10">
          <h4>私立医院费用举例</h4>
          <table className="costs-table mt-4">
            <thead>
              <tr>
                <th>项目</th>
                <th>本地/PR 参考价格</th>
                <th>外国人价格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>普通门诊</td>
                <td>$100-$300</td>
                <td>$150-$500</td>
              </tr>
              <tr>
                <td>住院（单人病房）</td>
                <td>$500-$1000/天</td>
                <td>$800-$2000/天</td>
              </tr>
              <tr>
                <td>手术（如胆囊切除）</td>
                <td>$8,000-$15,000</td>
                <td>$15,000-$30,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 dental-costs">
        <table className="costs-table"></table>
      </div>

      <div className="insurance-note mt-8">
        <h3>保险说明</h3>
        <ul>
          <li>
            门诊和牙科是普通个人保险报销不了的。只有公司的群体保险才可以覆盖
          </li>
          <li>有些公司可以全部报销，有些公司可能需要你每次交5新币</li>
          <li>
            保险去专科门诊以及牙科额度也有不同。这就是到时候找工作要注意的。
          </li>
          <li>一般来说大公司保险都会好一些。</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalSystemIntroduction;
