export const getDateForTimezone = (timeZone: string = "America/Chicago") => {
  const dateString = new Date().toLocaleString("en-US", { timeZone });

  return new Date(dateString);
};
