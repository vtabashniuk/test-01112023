export const dateChecker = (startDate, endDate) => {
  const dateRange = { startDate, endDate };
  if (startDate > endDate) {
    const date = startDate;
    usersRequest.startDate.value = endDate;
    dateRange.startDate = endDate;
    usersRequest.endDate.value = date;
    dateRange.endDate = date;
  }
  return dateRange;
};
