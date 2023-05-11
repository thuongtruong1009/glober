import { countries } from "../shared/constant";

const getCovidData = async () => {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  return {
    ...data,
    Countries: data.Countries.filter((item) => countries[item.CountryCode]),
    Max: data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)[0]
      .TotalConfirmed,
  };
};

export const getImage = async () => {
  const res = await fetch("http://localhost:3000/earth.jpg");
  const blob = await res.blob();
  const objectURL = URL.createObjectURL(blob);
  return objectURL;
};

// export const getData = async () => {
//   const [data, image] = await Promise.all([getCovidData(), getImage()]);
//   return { data, image };
// };
