import React from "react";

const SingaporeHolidays = () => {
  const holidays = [
    {
      date: "2025年1月1日",
      day: "星期三",
      nameCN: "元旦",
      nameEN: "New Year's Day",
      description: "公历新年的第一天，庆祝新一年的开始。",
      origin: "国际通用",
    },
    {
      date: "2025年1月29日",
      day: "星期三",
      nameCN: "农历新年第一天",
      nameEN: "Chinese New Year Day 1",
      description:
        "根据农历计算的新年，华人社区最重要的传统节日之一，通常庆祝两天。",
      origin: "中国文化",
    },
    {
      date: "2025年1月30日",
      day: "星期四",
      nameCN: "农历新年第二天",
      nameEN: "Chinese New Year Day 2",
      description: "农历新年的第二天，继续庆祝活动。",
      origin: "中国文化",
    },
    {
      date: "2025年3月31日*",
      day: "星期一",
      nameCN: "开斋节",
      nameEN: "Hari Raya Puasa",
      description:
        "伊斯兰教的节日，标志着斋月的结束，穆斯林会进行祈祷和庆祝活动。",
      origin: "马来/伊斯兰文化",
    },
    {
      date: "2025年4月18日",
      day: "星期五",
      nameCN: "耶稣受难日",
      nameEN: "Good Friday",
      description: "基督教纪念耶稣基督受难的日子，通常在复活节前的星期五。",
      origin: "西方基督教文化",
    },
    {
      date: "2025年5月1日",
      day: "星期四",
      nameCN: "劳动节",
      nameEN: "Labour Day",
      description: "国际劳动节，庆祝劳动者的贡献。",
      origin: "国际通用",
    },
    {
      date: "2025年5月12日",
      day: "星期一",
      nameCN: "卫塞节",
      nameEN: "Vesak Day",
      description: "佛教纪念释迦牟尼佛诞生、成道和涅槃的日子。",
      origin: "佛教文化",
    },
    {
      date: "2025年6月7日*",
      day: "星期六",
      nameCN: "哈芝节",
      nameEN: "Hari Raya Haji",
      description:
        "也称宰牲节，伊斯兰教纪念先知易卜拉欣愿意献祭其子的顺从精神。",
      origin: "马来/伊斯兰文化",
    },
    {
      date: "2025年8月9日",
      day: "星期六",
      nameCN: "国庆日",
      nameEN: "National Day",
      description: "庆祝新加坡于1965年8月9日独立的纪念日。",
      origin: "新加坡",
    },
    {
      date: "2025年10月20日",
      day: "星期一",
      nameCN: "屠妖节",
      nameEN: "Deepavali",
      description: "印度教的灯节，象征光明战胜黑暗，善良战胜邪恶。",
      origin: "印度文化",
    },
    {
      date: "2025年12月25日",
      day: "星期四",
      nameCN: "圣诞节",
      nameEN: "Christmas Day",
      description: "基督教庆祝耶稣基督诞生的节日，现已成为广泛庆祝的节日。",
      origin: "西方基督教文化",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1">日期</th>
            <th className="border border-gray-300 px-2 py-1">星期</th>
            <th className="border border-gray-300 px-2 py-1">节日中文名称</th>
            <th className="border border-gray-300 px-2 py-1">节日英文名称</th>
            <th className="border border-gray-300 px-2 py-1">简要介绍</th>
            <th className="border border-gray-300 px-2 py-1">来源文化</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 px-2 py-1">
                {holiday.date}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {holiday.day}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {holiday.nameCN}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {holiday.nameEN}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {holiday.description}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {holiday.origin}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs mt-2 italic">* 日期可能会根据伊斯兰历法调整</p>
    </div>
  );
};

export default SingaporeHolidays;
