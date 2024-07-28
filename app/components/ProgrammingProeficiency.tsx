"use client";

import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { IoLogoJavascript } from "react-icons/io5";

import { SiPhp } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa";


const ProgrammingLanguage: React.FC = () => {
  useEffect(() => {
    const options = {
      colors: ["#1A56DB", "#FDBA8C"],
      series: [
        {
          name: "Experience Time:",
          color: "#1A56DB",
          data: [
            { x: "JavaScript", y: 5 },
            { x: "PHP", y: 4 },
            { x: "C#", y: 1 },
            { x: "Python", y: 1.5 },
            { x: "Java", y: 3 },
          ],
        },
        {
          name: "Proficiency:",
          color: "#FDBA8C",
          data: [
            { x: "JavaScript", y: 4 },
            { x: "PHP", y: 3 },
            { x: "C#", y: 1 },
            { x: "Python", y: 1 },
            { x: "Java", y: 3.5 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
         
        },
        y: [
          {
            formatter: function(val: any) {
              return val + " years";
            },
          },
          {
            formatter: function(val: any) {
              if (val < 2) {
                return "Junior";
              } else if (val < 3) {
                return "Intermediate";
              } else {
                return "Senior";
              }
            },
          },
        ],
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs   font-bold fill-black dark:fill-gray-400',
            fontWeight: 'bold',
           
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };

    let chart: ApexCharts | null = null;

    const renderChart = () => {
      if (chart) {
        chart.destroy();
      }
      chart = new ApexCharts(document.getElementById("programming-language-chart"), options);
      chart.render();
    };

    renderChart();

    window.addEventListener('resize', renderChart);

    return () => {
      window.removeEventListener('resize', renderChart);
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className=' dark:bg-backdarkdm h-[40rem]  py-20 ' >
        <div className='dark:bg-backdarkdm h-[33rem]  max-h-[40rem] '>
      <div className="max-w-[66rem] mx-auto w-full bg-graybg rounded-lg shadow dark:bg-cardColorbm p-4 md:p-6 ">
        <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg  bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3 ">
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
              </svg>
            </div>
            <div>
              <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">Programming Language Proficiency</h5>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Experience Time and Proficiency</p>
            </div>
          </div>
        </div>

        <div id="programming-language-chart">
        
        </div>
        <div  className="flex flex-wrap justify-center items-center max-w-[61rem]  ">
        <IoLogoJavascript className="m-2 mx-auto w-9 h-9" />
<SiPhp className="m-2 mx-auto w-9 h-9" />
<SiCsharp className="m-2 mx-auto w-9 h-9" />
<IoLogoPython className="m-2 mx-auto w-9 h-9" />
<FaJava className="m-2 mx-auto w-9 h-9" />
        </div>
        
      </div>
    </div>
    </div>
    

    
  );
};

export default ProgrammingLanguage;
