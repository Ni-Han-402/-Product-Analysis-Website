import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const MyLineChart = ({data}) => {
    return (
        <div className='justify-center'>
            <h1 className='text-2xl font-semibold text-blue-700'>MONTH WISE SELL</h1>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default MyLineChart;