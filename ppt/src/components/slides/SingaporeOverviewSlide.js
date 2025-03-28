import Slide from "../Slide";
import Image from "next/image";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function SingaporeOverviewSlide() {
  const ethnicData = [
    { name: "华人", value: 75.9, color: "#FF8042" },
    { name: "马来人", value: 15.1, color: "#00C49F" },
    { name: "印度人", value: 7.4, color: "#FFBB28" },
    { name: "其他族群", value: 1.6, color: "#0088FE" },
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
        <div className="bg-gray-50/50 p-6 rounded-lg shadow-sm backdrop-blur-sm">
          <div className="flex flex-row">
            <div className="w-1/2">
              <h2 className="slide-subtitle mb-4" style={{ fontSize: "30px" }}>
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
            <div className="w-1/2 h-64">
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
                      <Cell key={`cell-${index}`} fill={entry.color} />
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

        <div className="bg-gray-50/50 p-6 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="slide-subtitle mb-4" style={{ fontSize: "30px" }}>
            面积
          </h2>
          <ul className="slide-list" style={{ fontSize: "20px" }}>
            <li>728.6平方公里</li>
            <li>1个山东威海市区</li>
            <li>0.8个北京海淀+朝阳</li>
            <li>0.6个上海浦东</li>
            <li>0.36个深圳</li>
          </ul>
          {/* <div
            className="mt-4 flex justify-center relative"
            style={{ height: "200px" }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Southeast_Asia_%28orthographic_projection%29.svg/1200px-Southeast_Asia_%28orthographic_projection%29.svg.png"
              alt="东南亚地图"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div> */}
        </div>

        <div className="bg-gray-50/50 p-6 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="slide-subtitle mb-4" style={{ fontSize: "30px" }}>
            气候
          </h2>
          <ul className="slide-list" style={{ fontSize: "20px" }}>
            <li>热带雨林气候</li>
            <li>全年高温多雨</li>
            <li>平均温度：25°C - 31°C</li>
            <li>最热月份：4-5月（均温28°C~31°C）</li>
            <li>最"凉"月份：12月~1月（均温26°C~29°C）</li>
          </ul>
        </div>

        <div className="bg-gray-50/50 p-6 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="slide-subtitle mb-4" style={{ fontSize: "30px" }}>
            语言与货币
          </h2>
          <ul className="slide-list" style={{ fontSize: "20px" }}>
            <li>官方语言：英语、华语、马来语、泰米尔语</li>
            <li>货币：新加坡元（SGD）</li>
            <li>1 SGD ≈ 5.3 RMB</li>
            <li>时区：GMT+8（与中国相同）</li>
            <li>商场用信用卡，小贩中心用现金/paynow</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
