import { ScaleTypes } from "@carbon/charts-react";

export default {
    title: 'Pulse/Blood Pressure Chart',
    axes: {
        bottom: {
            title: 'Time',
            scaleType: ScaleTypes.LABELS,
            mapsTo: 'time'
        },
        left: {
            title: 'Pulse and BP',
            mapsTo: 'value'
        }
    },
    height: '400px'
}