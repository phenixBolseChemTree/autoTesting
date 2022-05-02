// export const capitalize = (text) => {
//   const [firstSymbol = '', ...restSymbols] = text;
//   return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
// };
export default (text) => {
  const [firstSymbol = '', ...restSymbols] = text;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};
