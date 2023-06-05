import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ChartWear.css";
import { CatologStatisticIcons } from "../../../assets/icons";

const data = [
  { name: "Jan", Верхняя: 32, Нижняя: 37, Головной: 20 },
  { name: "Feb", Верхняя: 42, Нижняя: 42, Головной: 54 },
  { name: "Mar", Верхняя: 51, Нижняя: 41, Головной: 54 },
  { name: "Apr", Верхняя: 60, Нижняя: 37, Головной: 28 },
  { name: "May", Верхняя: 51, Нижняя: 31, Головной: 27 },
  { name: "Jun", Верхняя: 55, Нижняя: 44, Головной: 49 },
  { name: "Jul", Верхняя: 65, Нижняя: 44, Головной: 49 },
];

export default function StatisticChartOrder() {
  // static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  return (
    <div className="w-full h-full relative px-4">
      <div className="h-[80px] w-full  flex items-center justify-between">
        <div className="flex items-center w-fit">
          <button className="flex items-center">
            <span>
              {" "}
              <CatologStatisticIcons />
            </span>
            <span className="not-italic ml-2 font-medium text-base leading-4 text-black">
              Каталоги
            </span>
          </button>
        </div>
        <div className="flex items-center w-fit">
          <button className="flex items-center ">
            <article className="w-3 h-3 rounded-full bg-UpperWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Верхняя
            </span>
          </button>
          <button className="flex items-center ml-5">
            <article className="w-3 h-3 rounded-full bg-LowerWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Нижняя
            </span>
          </button>
          <button className="flex items-center ml-5">
            <article className="w-3 h-3 rounded-full bg-headWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Головной убор
            </span>
          </button>
          <button className="flex items-center ml-5">
            <article className="w-3 h-3 rounded-full bg-ShoesWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Обувь
            </span>
          </button>
          <button className="flex items-center ml-5">
            <article className="w-3 h-3 rounded-full bg-Accessory"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Аксессуары
            </span>
          </button>
        </div>
      </div>
      <div className="w-full px-4  w-full absolute top-[80px] left-0 z-[1]">
        <table className="structure">
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>

      <div className="w-full h-[400px] absolute z-[10] top-[80px] left-0 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ left: 15, right: 15 }}
          >
            <Line
              type="monotone"
              dataKey="Верхняя"
              stroke="#FF9500"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Нижняя"
              stroke="#00C2FF"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Головной"
              stroke="#347AE2"
              strokeWidth={3}
            />
            {/* <CartesianGrid stroke="#ccc" /> */}
            {/* <XAxis dataKey="name" /> */}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className=" w-full px-4 h-10 absolute bottom-4 left-0 flex items-center justify-between">
        {data.map((data) => {
          return (
            <span className="not-italic font-normal text-sm text-MonthTextColor">
              {data?.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
