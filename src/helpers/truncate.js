export default function truncate(fullStr, truncatedLen, separator = "(...)") {
  if (fullStr.length <= truncatedLen) return fullStr;

  const charsToShow = truncatedLen - separator.length;
  const charNumber = Math.ceil(charsToShow);

  return fullStr.substr(0, charNumber) + separator;
}
