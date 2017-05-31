///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import { PieChart, Pie, Cell } from 'recharts';
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
function PieChartBlock(props) {
    const { width, height, data, label = false } = props;
    return (
        <PieChart width={width} height={height}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={80} label={label}>
                {
                    _.map(data, (item, index) => (
                        <Cell key={`cell-${index}`} fill={item.color} />
                    ))
                }
            </Pie>
        </PieChart>
    )
}

///////////////////////////////////////////////////////////////////////////////
export default PieChartBlock;

///////////////////////////////////////////////////////////////////////////////