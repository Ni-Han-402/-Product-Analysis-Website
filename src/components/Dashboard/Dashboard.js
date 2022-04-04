import React from 'react';
import useData from '../../hooks/useData';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useData();
    return (
        <div className='my-charts my-5'>
            <MyLineChart data={data}></MyLineChart>
            <MyPieChart data={data}></MyPieChart>
        </div>
    );
};

export default Dashboard;