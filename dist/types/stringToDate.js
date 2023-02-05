export const stringToDate = (data) => {
    const [date, hours] = data.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = hours.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
};
//# sourceMappingURL=stringToDate.js.map