const formatDate = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = Math.floor(timeInSeconds % 3600 % 60);

    let time;

    if (hours < 1 && minutes < 1) {
        time = `${seconds}s`;
    } else if (timeInSeconds == undefined) {
        time = `0s`;
    } else if (hours < 1 && (seconds % 60 !== 0)) {
        time = `${minutes}m ${seconds}s`;
    } else if (hours < 1 && (seconds % 60 === 0)) {
        time = `${minutes}m`;
    } else if (hours > 0 && (minutes % 60 !== 0) && (seconds % 60 !== 0)) {
        time = `${hours}h ${minutes}m ${seconds}s`;
    } else if (hours > 0 && (minutes % 60 === 0) && (seconds % 60 === 0)) {
        time = `${hours}h`;
    } else if (hours > 0 && (minutes % 60 !== 0) && (seconds % 60 === 0)) {
        time = `${hours}h ${minutes}m`;
    } else {
        time = `${hours}h ${seconds}s`;
    }

    return `${time}`;
}

module.exports = formatDate;