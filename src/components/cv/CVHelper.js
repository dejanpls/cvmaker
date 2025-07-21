export const getDisplayName = (personal) => {
  const name = `${personal.firstName} ${personal.lastName}`.trim();
  return name ? name : "Resume";
};

export const getAddress = (personal) => {
  const { address, zip, city, country } = personal;

  let result = "";

  if (address) result += address;
  if (zip || city) {
    if (address) result += ", ";
    result += [zip, city].filter(Boolean).join(" ");
  }
  if (country) {
    if (address || zip || city) result += ", ";
    result += country;
  }

  return result;
};
