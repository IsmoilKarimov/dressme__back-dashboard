import React, { useState } from "react";
import "./statistics.css";
import { Link } from "react-router-dom";
import { star } from "../../../assets";
import StatisticChartOrder from "../StatisticChartOrder/StatisticChartOrder";
import StatisticChartWear from "../StatisticChartWear/StatisticChartWear";
// import {
//   CircleChart,
//   BarChart,
//   SalesValueChart,
//   SalesValueChartphone,
// } from "../StatisticChartWear/ChartWear";
export default function SaleHome() {
  const [statistics, setStatistics] = useState([
    {
      id: 1,
      title: "Adidas Shirts (Original)",
      category: "Outwears",
      orders: "1658",
      type: "T-Shirt",
      quality: "Replica",
      size: "M-3XL",
      starcat: "265",
    },
    {
      id: 2,
      title: "POLO T-Shirt (replica)",
      category: "Outwears",
      orders: "984",
      type: "T-Shirt",
      quality: "Replica",
      size: "XS-2XL",
      starcat: "265",
    },
  ]);

  return (
    <div className="w-full flex flex-col px-10">
      <div className="flex items-center justify-between py-4 border-b border-lightBorderColor">
        <div className="flex items-center text-[22px] font-medium ">
          С возвращением, Абдулазиз!
        </div>
        <div className="flex items-center h-12 border border-borderGrayColor rounded-lg">
          <button className="pl-5 pr-[38px] h-full border-r border-borderGrayColor text-base font-medium">
            01/01/23 – 30/06/23
          </button>
          <button className="px-5">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="border-l border-borderGrayColor px-5 h-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66663 1.66602V4.16602"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3334 1.66602V4.16602"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.91663 7.57422H17.0833"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.08268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V7.08268C2.5 4.58268 3.75 2.91602 6.66667 2.91602H13.3333C16.25 2.91602 17.5 4.58268 17.5 7.08268Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.079 11.4167H13.0864"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.079 13.9167H13.0864"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.9962 11.4167H10.0037"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.9962 13.9167H10.0037"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.91197 11.4167H6.91945"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.91197 13.9167H6.91945"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center gap-x-[3%] my-5">
        {/* <div className="w-1/2 h-[420px] border border-borderGrayColor rounded">
          <CircleChart />
        </div>
        <div className="w-1/2 h-[420px] border border-borderGrayColor rounded">
          <BarChart />
        </div>
        <div className="w-1/2 h-[420px] border border-borderGrayColor rounded">
          <SalesValueChart />
        </div>
        <div className="w-1/2 h-[420px] border border-borderGrayColor rounded">
          <SalesValueChartphone />
        </div> */}
        <div className="w-[49%] h-[420px] border border-borderGrayColor rounded">
          <StatisticChartOrder />
        </div>
        <div className="w-[48%] h-[420px] border border-borderGrayColor rounded">
          <StatisticChartWear />
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xl font-medium">Лучшие продукты</div>
          <button className="flex items-center h-12 border border-lightBorderColor bg-lightBgColor rounded-xl px-5 flex-none ml-auto">
            <span className="font-medium text-sm mr-11">
              Сортировать по дате
            </span>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="w-full rounded-xl overflow-x-auto  font-medium saleScroll  border border-lightBorderColor mb-10">
          <table className="w-full">
            <thead className="h-11 bg-lightBorderColor text-start rounded-t-xl text-sm">
              <tr className="rounded-xl ">
                <th>
                  Clothing type:{" "}
                  <span className="text-textBlueColor">T-Shirt</span>
                </th>
                <th>Category</th>
                <th>Season</th>
                <th>Orders</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Type</th>
                <th>Quality</th>
                <th>Sizes</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody className="text-base text-center">
              {statistics.map((data) => (
                <tr
                  key={data.id}
                  className={`h-11 ${
                    data.id % 2 == 0 ? "bg-paginationBackground" : "bg-white"
                  }  border-r border-lightBorderColor py-1`}
                >
                  <td className=" flex items-center px-[22px] py-[10px] border-r border-borderGrayColor">
                    <span className="w-[60px] h-[60px] border rounded-lg mr-7 bg-lightBgColor"></span>
                    <div>{data.title}</div>
                    <button className="ml-auto">
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.38 1.19727L5.18333 5.0006C5.6325 5.44977 6.3675 5.44977 6.81666 5.0006L10.62 1.19727"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>{data.category}</td>
                  <td>
                    <div className="flex items-center justify-center gap-x-1">
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.28011 12.9698C6.75011 12.6998 6.16011 12.5598 5.57011 12.5698C0.910109 12.8998 0.920108 19.6798 5.57011 20.0098"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.8201 9.88998C16.3401 9.62998 16.9001 9.48998 17.4801 9.47998"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.96997 20L7.96997 22"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.97 20L11.97 22"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.97 16L11.97 18"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.96997 16L7.96997 18"
                            stroke="#E17A02"
                            stroke-width="1.2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor mr-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 10H19"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 1V19"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 6L6 2"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 6L14 2"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 14L14 18"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 14L6 18"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 10L2 14"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 10L2 6"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 10L18 6"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 10L18 14"
                            stroke="#007DCA"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>{data.orders}</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <span className="ml-[6px] text-textLightColor font-normal">
                        {data.starcat}
                      </span>
                    </div>
                  </td>
                  <td>
                    <button
                      className={`${
                        data.id % 2 == 0 ? "bg-white" : ""
                      } w-12 h-12 flex items-center justify-center rounded-xl border border-lightBorderColor bg-lightBgColor m-auto`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.08329 15.8332H6.66663C3.33329 15.8332 1.66663 14.9998 1.66663 10.8332V6.6665C1.66663 3.33317 3.33329 1.6665 6.66663 1.6665H13.3333C16.6666 1.6665 18.3333 3.33317 18.3333 6.6665V10.8332C18.3333 14.1665 16.6666 15.8332 13.3333 15.8332H12.9166C12.6583 15.8332 12.4083 15.9582 12.25 16.1665L11 17.8332C10.45 18.5665 9.54996 18.5665 8.99996 17.8332L7.74996 16.1665C7.61663 15.9832 7.30829 15.8332 7.08329 15.8332Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.3304 9.16667H13.3379"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.9962 9.16667H10.0037"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.66209 9.16667H6.66957"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>{data.type}</td>
                  <td>{data.quality}</td>
                  <td>{data.size}</td>
                  <td>
                    <div className="flex items-center justify-center gap-x-1 m-auto">
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.39579 19.7083C13.3193 19.7083 16.5 16.5277 16.5 12.6042C16.5 8.68064 13.3193 5.5 9.39579 5.5C5.47227 5.5 2.29163 8.68064 2.29163 12.6042C2.29163 16.5277 5.47227 19.7083 9.39579 19.7083Z"
                            stroke="#0090CD"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.7083 2.2915L14.6666 7.33317"
                            stroke="#0090CD"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.75 2.2915H19.7083V8.24984"
                            stroke="#0090CD"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-lightBorderColor bg-lightBgColor">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 14.6668C14.5439 14.6668 17.4167 11.794 17.4167 8.25016C17.4167 4.70634 14.5439 1.8335 11 1.8335C7.45621 1.8335 4.58337 4.70634 4.58337 8.25016C4.58337 11.794 7.45621 14.6668 11 14.6668Z"
                            stroke="#DD006A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 14.6665V20.1665"
                            stroke="#DD006A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.75 17.4165H8.25"
                            stroke="#DD006A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
