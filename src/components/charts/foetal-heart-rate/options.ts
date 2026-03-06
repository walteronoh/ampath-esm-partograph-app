import { ScaleTypes } from "@carbon/charts-react"

export default {
    title: "Foetal Heart Rate Chart",
    axes: {
        left: {
            title: "Foetal Heart Rate",
            mapsTo: 'value'
        },
        bottom: {
            title: "Time (min)",
            scaleType: ScaleTypes.LABELS,
            mapsTo: 'time'
        }
    },
    legend: {
        clickable: false
    },
    height: '400px'
}