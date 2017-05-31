///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
///////////////////////////////////////////////////////////////////////////////
function BarChartBlock(props) {
    const { width, height, data, dataKeys } = props;
    return (<BarChart width={width} height={height} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {
            _.map(dataKeys, (item, index) => <Bar
                key={index}
                dataKey={item.name}
                fill={item.color} />)
        }
    </BarChart>)
}

///////////////////////////////////////////////////////////////////////////////
export default BarChartBlock;

///////////////////////////////////////////////////////////////////////////////