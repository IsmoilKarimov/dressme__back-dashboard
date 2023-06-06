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
import { CatologStatisticIcons } from "../../../assets/icons";
const data = [
  {
    name: "Jan",
    Наличные: 4000,
    Заказы: 2400,
  },
  {
    name: "Feb",
    Наличные: 3000,
    Заказы: 1398,
  },
  {
    name: "Mar",
    Наличные: 2000,
    Заказы: 9800,
  },
  {
    name: "Apr",
    Наличные: 2780,
    Заказы: 3908,
  },
  {
    name: "May",
    Наличные: 1890,
    Заказы: 4800,
  },
  {
    name: "Jun",
    Наличные: 2390,
    Заказы: 3800,
  },
  {
    name: "Jul",
    Наличные: 3490,
    Заказы: 4300,
  },
];

export default function StatisticChartWear() {
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
              Чистая прибыль
            </span>
          </button>
        </div>
        <div className="flex items-center w-fit">
          <button className="flex items-center ">
            <article className="w-3 h-3 rounded-full bg-ShoesWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Наличные
            </span>
          </button>
          <button className="flex items-center ml-5">
            <article className="w-3 h-3 rounded-full bg-headWear"></article>
            <span className="not-italic ml-1 font-medium text-base leading-4 text-black">
              Заказы
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
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="Заказы"
              stroke="#347AE2"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Наличные"
              stroke="#77B50A"
              strokeWidth={2}
              fill="#8884d8"
            />
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
