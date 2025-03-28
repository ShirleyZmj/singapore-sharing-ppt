import Slide from "../Slide";
import Image from "next/image";
import InfoModule from "../InfoModule";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function SingaporeOverviewSlide() {
  const ethnicData = [
    { name: "华人", value: 75.9, color: "#FF8042" },
    { name: "马来人", value: 15.1, color: "#00C49F" },
    { name: "印度人", value: 7.4, color: "#FFBB28" },
    { name: "其他族群", value: 1.6, color: "#0088FE" },
  ];

  const populationData = [
    { name: "公民", value: 60.3, color: "#4CAF50" },
    { name: "永久居民", value: 9.0, color: "#2196F3" },
    { name: "非居民", value: 30.8, color: "#FFC107" },
  ];

  const areaData = [
    { name: "新加坡", area: 728.6, color: "#4CAF50" },
    { name: "威海市区", area: 728.6, color: "#2196F3" },
    { name: "北京海淀+朝阳", area: 910.75, color: "#FFC107" },
    { name: "上海浦东", area: 1214.33, color: "#FF5722" },
    { name: "深圳", area: 1997, color: "#9C27B0" },
  ];

  const renderCustomizedLabel = ({ name, percent, x, y, midAngle }) => {
    return (
      <text
        x={x}
        y={y}
        fill="#000000"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16px"
      >
        {`${name}: ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <Slide id="singapore-overview" title="新加坡概况">
      <div className="w-full flex flex-col space-y-8">
        <InfoModule>
          <div className="flex flex-row">
            <div className="w-1/2 flex items-center">
              <div>
                <h2
                  className="slide-subtitle mb-4"
                  style={{ fontSize: "30px" }}
                >
                  人口
                </h2>
                <ul className="slide-list" style={{ fontSize: "20px" }}>
                  <li>总人口：604万人</li>
                  <li>公民：364万人（60.3%）</li>
                  <li>永久居民：54.49万人（9%）</li>
                  <li>非居民：186万人（30.8%）</li>
                  <li>华人占公民总数的75.9%</li>
                  <li>马来人占15.1%，印度人占7.4%</li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={populationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={renderCustomizedLabel}
                    >
                      {populationData.map((entry, index) => (
                        <Cell key={`cell-pop-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value}%`}
                      contentStyle={{ fontSize: "16px" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "16px" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ethnicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={renderCustomizedLabel}
                    >
                      {ethnicData.map((entry, index) => (
                        <Cell key={`cell-eth-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value}%`}
                      contentStyle={{ fontSize: "16px" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "16px" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </InfoModule>

        <InfoModule>
          <div className="flex flex-row">
            <div className="w-1/2 flex items-center">
              <div>
                <h2
                  className="slide-subtitle mb-4"
                  style={{ fontSize: "30px" }}
                >
                  面积
                </h2>
                <ul className="slide-list" style={{ fontSize: "20px" }}>
                  <li>728.6平方公里</li>
                  <li>1个山东威海市区</li>
                  <li>0.8个北京海淀+朝阳</li>
                  <li>0.6个上海浦东</li>
                  <li>0.36个深圳</li>
                </ul>
              </div>
            </div>

            <div className="w-1/2">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={areaData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <XAxis dataKey="name" tick={false} />
                    <YAxis unit=" km²" fontSize="14px" />
                    <Tooltip
                      formatter={(value) => `${value} km²`}
                      contentStyle={{ fontSize: "16px" }}
                    />
                    <Bar
                      dataKey="area"
                      name="面积 (km²)"
                      label={{
                        position: "top",
                        formatter: (value) => `${value}`,
                        fontSize: "14px",
                      }}
                    >
                      {areaData.map((entry, index) => (
                        <Cell key={`cell-area-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {areaData.map((item, index) => (
                  <div
                    key={`area-legend-${index}`}
                    className="flex items-center"
                  >
                    <div
                      className="w-4 h-4 mr-1 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span style={{ fontSize: "16px" }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InfoModule>

        <InfoModule title="气候">
          <ul className="slide-list" style={{ fontSize: "20px" }}>
            <li>热带雨林气候</li>
            <li>全年高温多雨</li>
            <li>平均温度：25°C - 31°C</li>
            <li>最热月份：4-5月（均温28°C~31°C）</li>
            <li>最"凉"月份：12月~1月（均温26°C~29°C）</li>
          </ul>
          <div className="qa-card border border-blue-200 rounded-lg p-4 mt-4 shadow-md">
            <div
              className="question text-blue-700 mb-2"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              天气适合居住吗？
            </div>
            <div className="answer" style={{ fontSize: "20px" }}>
              <ul className="space-y-2 list-disc pl-5">
                <li>天气，空气好，湿润，炎热（分季节）</li>
                <li>
                  一天之内天气晴雨交替频繁（公共设施建立得很适合这种天气，从家里走到MRT都不需要拿伞）
                </li>
                <li>不适合害怕打雷的群体</li>
                <li>很适合怕冷星人</li>
              </ul>
            </div>
          </div>
        </InfoModule>

        <InfoModule title="语言与货币">
          <ul className="slide-list" style={{ fontSize: "20px" }}>
            <li>官方语言：英语、华语、马来语、泰米尔语</li>
            <li>货币：新加坡元（SGD）</li>
            <li>1 SGD ≈ 5.3 RMB</li>
            <li>时区：GMT+8（与中国相同）</li>
            <li>商场用信用卡，小贩中心用现金/paynow</li>
          </ul>
        </InfoModule>
      </div>
    </Slide>
  );
}
