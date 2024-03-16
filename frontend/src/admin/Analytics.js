import React, { Fragment, useState } from "react";
import GroupChart from "./Hospital/GroupChart";
import PieChart from "./Hospital/Piechart";
import SingleLineChart from "./Hospital/SingleLineChart";
import BarChart from "./Hospital/BarChart";
import LineChart from "./Hospital/LineChart";
import RuralBarChart from ".//Rural/RuralBarChart";
import RuralGroupChart from ".//Rural/RuralGroupChart";
import RuralSingleLineChart from "./Rural/RuralSingleLineChart";
import RuralPieChart from "./Rural/RuralPieChart";
import RuralLineChart from "./Rural/RuralLineChart";
// import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const HospitalData = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex text-black justify-center gap-3 mx-5 h-[50vh]">

        <div className="bg-white shadow-xl shadow-slate-300 w-full ">
          <GroupChart />
        </div>
        <div className="bg-white shadow-xl shadow-slate-300 w-full">
          <PieChart />
        </div>
      </section>

      <section className="flex gap-3 h-[50vh] mx-5">
        <div className="bg-white shadow-xl shadow-slate-300 w-1/2">
          <SingleLineChart />
        </div>

        <div className="flex flex-col gap-3 w-1/3 h-[50vh]">
          <div className="bg-white shadow-xl shadow-slate-300 h-[75vh]">
            <BarChart />
          </div>
        </div>

      </section>

      <section className="bg-white shadow-xl shadow-slate-300 h-[90vh] mx-5">
        <LineChart />
      </section>
    </div>
  );
};

const RuralData = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex text-black justify-center gap-3 mx-5 h-[50vh]">
        <div className="bg-white shadow-xl shadow-slate-300 w-full ">
          <RuralGroupChart />
        </div>
        <div className="bg-white shadow-xl shadow-slate-300 w-full">
          <RuralPieChart />
        </div>
      </section>

      <section className="flex gap-3 h-[50vh] mx-5">
        <div className="bg-white shadow-xl shadow-slate-300 w-1/2">
          <RuralSingleLineChart />
        </div>

        <div className="flex flex-col gap-3 w-1/3 h-[50vh]">
          <div className="bg-white shadow-xl shadow-slate-300 h-[75vh]">
            <RuralBarChart />
          </div>
        </div>
      </section>

      <section className="bg-white shadow-xl shadow-slate-300 h-[90vh] mx-5">
        <RuralLineChart />
      </section>
    </div>
  );
};

const Analytics = () => {
  // Page 1 - 0
  // Page 2 - 1
  const [page, setPage] = useState(0);

  const handleNextClick = () => {
    if (page === 0) {
      setPage(1);
    }
  };

  const handleBackClick = () => {
    if (page === 1) {
      setPage(0);
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-around gap-2 mx-2 my-8 text-2xl text-white">
        <button
          onClick={handleBackClick}
          className="w-1/6 px-10 bg-blue-500 hover:bg-blue-400"
        >
          Hospital
        </button>

        <button
          onClick={handleNextClick}
          className="w-1/6 px-10 bg-blue-500 hover:bg-blue-400"
        >
          Rural
        </button>
      </div>

      {page === 0 && <HospitalData />}
      {page === 1 && <RuralData />}
    </Fragment>
  );
};

export default Analytics;
