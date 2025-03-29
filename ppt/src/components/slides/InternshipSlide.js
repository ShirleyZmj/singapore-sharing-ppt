import Slide from "../Slide";
import InfoModule from "../InfoModule";

export default function InternshipSlide() {
  return (
    <Slide id="internship" title="求职介绍-实习">
      <div className="space-y-6">
        <InfoModule title="实习类型" size="lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Part time (PT)：</strong>
              新加坡法律规定，持有STP的学生上学期间，不可以做ft，只能做pt。pt是每周只能工作16h，相当于2天，当然可以拆分为4个半天。
            </li>
            <li>
              <strong>Full time (FT)：</strong>寒假/暑假实习
            </li>
            <li>
              <strong>Credit bearing internship：</strong>学分实习课
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="找实习平台" size="lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>LinkedIn</li>
            <li>InternSG</li>
            <li>Glassdoor</li>
            <li>Jobstreet</li>
            <li>Indeed</li>
            <li>NUS TalentConnect</li>
            <li>NTU CareerAxis</li>
            <li>校园招聘会</li>
            <li>使用edu邮箱申请</li>
          </ul>
        </InfoModule>
      </div>
    </Slide>
  );
}
