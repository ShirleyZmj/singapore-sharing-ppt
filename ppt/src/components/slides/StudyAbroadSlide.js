import Image from "next/image";
import InfoModule from "../InfoModule";
import Slide from "../Slide";

export default function StudyAbroadSlide() {
  return (
    <Slide id="study-abroad" title="留学">
      <div className="space-y-6">
        <InfoModule title="留学申请-本科" size="lg">
          <ul>
            <li>高考成绩/高中在校平均成绩+雅思6.0+面试</li>
            <li>新加坡教育部奖学金计划（Senior Middle 2）</li>
            <ul className="text-lg">
              <li>
                专门针对中国高二优秀学生的公费留学项目，招生对象是国内重点中学高二理科优秀学生，被录取的中国学生，将获得新加坡教育部的约合人民币
                100 万(五年)奖学金资助。
              </li>
              <li>
                SM2学生在大学毕业后要为新加坡服务六年，即在新加坡的注册公司工作，工作国家不限，如果违约需要赔偿新加坡政府
                120 万人民币以上的费用。
              </li>
            </ul>
          </ul>
        </InfoModule>
        <InfoModule title="留学申请-硕士" size="lg">
          <div className="flex justify-around">
            <div>
              <h3 className="text-lg font-medium text-blue-700">
                NUS (新加坡国立大学)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>计算机科学 (MComp-CS)</li>
                <li>人工智能 (MComp-AI)</li>
                <li>信息系统 (MComp-ISS)</li>
                <li>游戏技术 (MComp-GT)</li>
                <li>计算机工程 (CE)</li>
                <li>数据科学与机器学习 (DSML)</li>
                <li>金融科技 (FinTech)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-red-700">
                NTU (南洋理工大学)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>数据科学 (DS)</li>
                <li>人工智能 (AI)</li>
                <li>区块链 (Blockchain)</li>
                <li>信息系统 (ISS)</li>
                <li>网络安全</li>
              </ul>
            </div>
          </div>

          <Image
            src="/images/majors-it.png"
            alt="计算机专业"
            width={1000}
            height={1000}
          />
        </InfoModule>
        <InfoModule title="留学申请-博士" size="lg">
          <ul>
            <li>国外申请博士都是套瓷导师</li>
            <li>硬性条件：本科/研究生成绩+雅思/托福+GRE/GMAT</li>
            <li>加分条件：论文，高学历，推荐信</li>
            <li>就读时长一般是4年</li>
            <li>
              phd薪资一般是申请奖学金，奖学金种类很多，每个月大约能拿到4k(sgd) -
              2w (rmb)
            </li>
          </ul>
        </InfoModule>
        <InfoModule title="水硕生活" size="lg">
          <div className="space-y-4">
            <div>
              <h3>同学</h3>
              <ul>
                <li>海本，陆本，国籍，年龄，本科专业</li>
                <li>
                  同学黄人比较多，黄人中国人占比60%，黑人四五个，白人两三个
                </li>
                <li>年龄段跨度很大，有应届来的，也有工作几年来的</li>
              </ul>
            </div>

            <div>
              <h3>学习</h3>
              <ul>
                <li>英文上课，写作业，考试</li>
                <li>一部分prof会说中文，大部分助教都会说中文</li>
                <li>课业压力：一学期上3-5门课</li>
              </ul>
            </div>
          </div>
        </InfoModule>
      </div>
    </Slide>
  );
}
