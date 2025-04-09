import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Barchart = ({ data }) => {
  const exampleData = [
    { "name": "Plato", "score": 0 },
    { "name": "Descartes", "score": 0 },
    { "name": "Kant", "score": 0 },
    { "name": "Marx", "score": 0 },
    { "name": "Foucault", "score": 0 },
    { "name": "deBeauvoir", "score": 0 },
    { "name": "Zea", "score": 0 },
    { "name": "Code", "score": 0 },
    { "name": "Lorde", "score": 0 },
    { "name": "Mills", "score": 0 },
    { "name": "Fanon", "score": 0 },
    { "name": "Quijano", "score": 0 },
    { "name": "Lugones", "score": 0 }
];


  const chartData = data || exampleData;

  return (
    <div style={{ width: '45%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 50 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={80}
          />
            <YAxis
            domain={[0, 'auto']}
            label={{
                value: 'Score',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
            }}
            />
<Bar dataKey="score" fill="#8884d8" background={{ fill: '#eee' }} />
          <Tooltip />
          <Bar dataKey="Score" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
