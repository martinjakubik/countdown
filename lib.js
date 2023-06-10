const getFormattedCountdownPoint = function (aPoint, index, nNumberOfPoints, nScale = 20) {
    const nIncrement = Math.PI * (index * 2 / nNumberOfPoints - 0.5);
    const nCosine = Math.cos(nIncrement);
    const nSine = Math.sin(nIncrement);
    return Math.floor(aPoint[0] + nCosine * nScale) + 'px ' + Math.floor(aPoint[1] + nSine * nScale) + 'px';
};

const getCountdownShape = function (nTicks, nTotalTicks) {
    const nNumberOfPoints = 30;
    const aStartPoint = [80, 30];
    let aFormattedPoints = [];
    const nTicksByPoints = Math.floor(nTotalTicks / nNumberOfPoints);
    aFormattedPoints.push(getFormattedCountdownPoint(aStartPoint, 0, nNumberOfPoints));
    aFormattedPoints.push(Math.floor(aStartPoint[0]) + 'px ' + Math.floor(aStartPoint[1]) + 'px');
    if (nTicks > 0) {
        for (let nPoint = 1; nPoint < nNumberOfPoints; nPoint++) {
            if (nTicks < nPoint * nTicksByPoints) {
                aFormattedPoints.push(getFormattedCountdownPoint(aStartPoint, nPoint, nNumberOfPoints));
            }
        }
    }
    const sShapePoints = aFormattedPoints.join(',');
    return 'polygon(' + sShapePoints + ')';
};

exports.getCountdownShape = getCountdownShape;