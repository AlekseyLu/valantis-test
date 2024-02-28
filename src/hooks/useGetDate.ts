const useGetDate = () => {
  let generateDate = "";
  const date = new Date();
  const year = date.getUTCFullYear().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let day = date.getUTCDate().toString();

  if (date.getMonth() < 10) {
    month = "0" + month;
  }

  if (date.getDate() < 10) {
    day = "0" + day;
  }

  generateDate = year + month + day;

  return generateDate;
};

export default useGetDate;
