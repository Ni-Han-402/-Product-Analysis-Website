import React from 'react';
import { Pie, PieChart } from 'recharts';

const MyPieChart = ({data}) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-blue-700'>INVESTMENT VS REVENUE</h1>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default MyPieChart;