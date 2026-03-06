import React, { useEffect, useMemo } from "react";
import { LollipopChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import options from "./options";
import { getHoursLabels } from "../../utils";

interface BloodPressureChartProps {
    hello: string
}

const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ hello }) => {
    const group = "Pulse";

    useEffect(() => {
        console.log(hello);
    }, []);

    const data = useMemo(() => {
        const hoursLabels = getHoursLabels(1);

        const body = hoursLabels.map((hr) => {
            const value = Math.floor(Math.random() * 180);
            return {
                group: group,
                time: hr,
                value: value
            }
        });

        return body;
    }, []);
    return (
        <LollipopChart data={data} options={options} />
    );
}

export default BloodPressureChart;