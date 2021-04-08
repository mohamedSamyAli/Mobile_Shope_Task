import React from 'react'
import Chart from 'react-google-charts'
import { getDataForColumnChart, getDataForDonutChart } from '../../services/charts'
import { Offline } from "react-detect-offline";

import "./styles.css"
const donutOptions = {
    title: "Brand vs Mobile",
    pieHole: 0.4,
    is3D: false
};

const columnOptions = {
    title: "Manfactoring Year vs Mobile",
    pieHole: 0.4,
    is3D: false
};

export const ChartsComponent = (props) => {

    return (
        <>
        <div style={{position:"absolute"}}>
            <Offline> you are Offline. connect to the Internet to view Charts </Offline>
        </div>
        <div>
            <div className="chart-wraper">
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="100%"
                    data={getDataForColumnChart()}
                    options={columnOptions}
                />
            </div>
            <div className="chart-wraper">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="100%"
                    data={getDataForDonutChart()}
                    options={donutOptions}
                />
            </div>
        </div>
        </>
    )
}
