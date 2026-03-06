export const getHoursLabels = (numRange: number = 0.5, max: number = 12) => {
    const hours = [];
    for (let i = numRange; i <= max; i = i + numRange) {
        hours.push(i + "hr");
    }
    return hours;
}