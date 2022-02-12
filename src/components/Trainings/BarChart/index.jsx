import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';

const TrainingBarChart = () => {
  const trainings = useSelector((state) => state.trainings.trainingsList.content);
  const chartData = trainings.map((training) => ({ activity: training.activity, duration: training.duration }));
  console.log(chartData);
  return (
    <BarChart width={1200} height={600} data={chartData}>
      <Bar dataKey="duration" fill="#1976d2" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="activity" />
      <YAxis />
    </BarChart>
  );
};

export default TrainingBarChart;
