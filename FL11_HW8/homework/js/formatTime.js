function formatTime(minutes) {
    let minute = minutes % 60;
    let hour = (minutes - minute) / 60 % 24;
    let day = (minutes - minute - hour * 60) / 1440;

    return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`
}

formatTime(120);