import React from "react";
import Slide from "../Slide";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function SurveyResultsTopicsSlide() {
  // 准备柱状图数据 - 按数值从大到小排序
  const data = [
    { name: "求职(实习，全职)", value: 36 },
    { name: "工作感受(和国内的区别)", value: 32 },
    { name: "身份区别(公民，永久居民，工作准证)", value: 30 },
    { name: "住宿(租房，买房)", value: 26 },
    { name: "留学(读研)", value: 23 },
    { name: "交通(公共交通，私家车)", value: 16 },
    { name: "节假日", value: 13 },
    { name: "医疗 (保险)", value: 13 },
    { name: "旅游", value: 11 },
    { name: "美食，购物", value: 10 },
    { name: "法律", value: 9 },
    { name: "经济", value: 8 },
    { name: "政治", value: 7 },
    { name: "本地教育", value: 6 },
  ].sort((a, b) => b.value - a.value);

  return (
    <Slide id="survey-results-topics" title="调查结果 - 主题">
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 150,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              domain={[0, "dataMax + 5"]}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={150}
              tick={{ fontSize: 20 }}
            />
            <Tooltip
              formatter={(value) => [`${value}人`, "人数"]}
              contentStyle={{ fontSize: "12px" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#0088FE" name="人数">
              <LabelList
                dataKey="value"
                position="right"
                formatter={(value) => `${value}人`}
                style={{ fontSize: "20px" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Slide>
  );
}
