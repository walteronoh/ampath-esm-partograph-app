import React, { useEffect, useMemo } from "react";
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import options from "./options";
import { getHoursLabels } from "../../utils";

interface FoetalHeartRateChartProps {
    hello: string
}

const FoetalHeartRateChart: React.FC<FoetalHeartRateChartProps> = ({ hello }) => {
    const group = "Foetal Heart Rate";

    useEffect(() => {
        console.log(hello);
    }, []);

    const data = useMemo(() => {
        const hoursLabels = getHoursLabels();

        const body = hoursLabels.map((hr) => {
            const value = Math.floor(Math.random() * 120);
            return {
                group: group,
                time: hr,
                value: value
            }
        });

        return body;
    }, []);
    return (
        <LineChart data={data} options={options} />
    );
}

export default FoetalHeartRateChart;