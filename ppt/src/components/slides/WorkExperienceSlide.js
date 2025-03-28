import Slide from "../Slide";
import InfoModule from "../InfoModule";
import SingaporeHolidays from "../SingaporeHolidays";
import CPFIntroduction from "../CPFIntroduction";
import MedicalSystemIntroduction from "../MedicalSystemIntroduction";

export default function WorkExperienceSlide() {
  return (
    <Slide id="work-experience" title="工作感受区别">
      <div className="space-y-4">
        <InfoModule title="语言" size="lg">
          公司环境不同，沟通语言也不同（中文/英文）
        </InfoModule>

        <InfoModule title="办公室" size="lg">
          非常寒冷，必须穿外套
        </InfoModule>

        <InfoModule title="个人发展" size="lg">
          部分公司提供学习补贴（读研/考证）
        </InfoModule>

        <InfoModule title="上下班" size="lg">
          官方9点到6点，没有打卡，准时下班
        </InfoModule>

        <InfoModule title="居家办公" size="lg">
          疫情后多数公司支持混合办公模式
        </InfoModule>

        <InfoModule title="年假" size="lg">
          基本2周起，每工作一年多给一天
        </InfoModule>

        <InfoModule title="病假" size="lg">
          规定14天带薪病假，60天带薪住院假
        </InfoModule>

        <InfoModule title="法定节假日" size="lg">
          无调休，遇周末可顺延或转为补休假
          <SingaporeHolidays />
        </InfoModule>

        <InfoModule title="交税" size="lg">
          <a
            className="text-blue-500"
            target="_blank"
            href="https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates"
          >
            新加坡税务局
          </a>
        </InfoModule>

        <InfoModule title="公积金" size="lg">
          <CPFIntroduction />
        </InfoModule>

        <InfoModule title="医疗保险" size="lg">
          <p className="mb-8">新加坡看病好贵，没有保险寸步难行</p>
          <MedicalSystemIntroduction />
        </InfoModule>
      </div>
    </Slide>
  );
}
