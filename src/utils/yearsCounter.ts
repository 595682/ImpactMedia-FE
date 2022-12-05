const yearsCounter = (() => {
  const currYear = new Date().getFullYear();
  const startYear = 2017;

  return currYear - startYear;
})();

export default yearsCounter;
