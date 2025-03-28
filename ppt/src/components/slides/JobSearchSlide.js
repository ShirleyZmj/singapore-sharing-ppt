import InfoModule from "../InfoModule";
import Slide from "../Slide";

export default function JobSearchSlide() {
  return (
    <Slide id="job-search" title="求职介绍-工作">
      <div className="space-y-6">
        <InfoModule title="1. LinkedIn" size="lg">
          <ul>
            <li>维护好自己的profile</li>
            <li>积极积攒人脉</li>
            <li>求公司员工/校友/前同事内推</li>
            <li>猎头/hr会主动联系你</li>
            <li>公司基本会在LinkedIn发布岗位</li>
            <li>通过followers可以看一家公司的知名程度</li>
          </ul>
        </InfoModule>

        <InfoModule title="2. 求职网站" size="lg">
          <ul>
            <li>
              <a
                href="https://www.mycareersfuture.gov.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyCareersFuture
              </a>
              ：可以看到价格，PR/Citizen使用较多
            </li>
            <li>
              <a
                href="https://sg.jobstreet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jobstreet
              </a>
            </li>
            <li>
              <a
                href="https://sg.jobsdb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jobsdb
              </a>
            </li>
            <li>
              <a
                href="https://sg.indeed.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indeed
              </a>
            </li>
            <li>
              <a
                href="https://www.glassdoor.sg/index.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                glassdoor
              </a>
              :
              可以看公司评分，点评，面试感受等，高分不一定好，但是低分一定有问题。
            </li>
          </ul>
        </InfoModule>

        <InfoModule title="3. 内推" size="lg">
          <p>前同事，校友，LinkedIn上的人脉</p>
        </InfoModule>

        <InfoModule title="4. 猎头" size="lg">
          <p>
            想投递一家公司之前可以问一下猎头们是否这个公司找过她们，这样简历直达，不论简历是否通过都能有反馈
          </p>
        </InfoModule>
      </div>
    </Slide>
  );
}
