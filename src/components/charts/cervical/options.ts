import { ScaleTypes } from "@carbon/charts-react"

export default {
    title: "Cervical Chart",
    axes: {
        left: {
            title: "Cervical Dilation (cm)",
            mapsTo: 'value'
        },
        bottom: {
            title: "Time (hours)",
            scaleType: ScaleTypes.LABELS,
            mapsTo: 'time'
        }
    },
    legend: {
        clickable: false
    },
    height: '400px'
}