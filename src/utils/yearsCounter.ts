const yearsCounter = (() => {
  const currYear = new Date().getFullYear();
  const startYear = 2018;

  return currYear - startYear;
})();

export default yearsCounter;
