export const convertToDate = (timestamp) => {
    let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        min = ('0' + d.getMinutes()).slice(-2);     // Add leading 0.

    return `${dd}.${mm}.${yyyy} ${hh}:${min}`;
}

