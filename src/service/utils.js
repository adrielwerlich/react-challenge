const periodicTableElements = ["ac", "ag", "al", "am", "ar", "as", "at", "au", "b", "ba", "be", "bh", "bi", "bk", "br", "c", "ca", "cd", "ce", "cf", "cl", "cm", "cn", "co", "cr", "cs", "cu", "db", "ds", "dy", "er", "es", "eu", "f", "fe", "fl", "fm", "fr", "ga", "gd", "ge", "h", "he", "hf", "hg", "ho", "hs", "i", "in", "ir", "k", "kr", "la", "li", "lr", "lu", "lv", "mc", "md", "mg", "mn", "mo", "mt", "n", "na", "nb", "nd", "ne", "nh", "ni", "no", "np", "o", "og", "os", "p", "pa", "pb", "pd", "pm", "po", "pr", "pt", "pu", "ra", "rb", "re", "rf", "rg", "rh", "rn", "ru", "s", "sb", "sc", "se", "sg", "si", "sm", "sn", "sr", "ta", "tb", "tc", "te", "th", "ti", "tl", "tm", "ts", "u", "v", "w", "xe", "y", "yb", "zn", "zr"];


export const getHighlightedName = (name) => {

  const sortedElements = periodicTableElements.sort((a, b) => b.length - a.length);

  let highlightedName = name;
  sortedElements.some(element => {
      // Check if element overlaps with the name
      const regex = new RegExp(`(${element})`, "gi");
      if (regex.test(name.toLowerCase())) {

        console.log('1', name.replace(regex, `<span class="highlight">${element}</span>`));
        console.log('2', name.replace(regex, '<span class="highlight">$&</span>'));
        

        highlightedName = name.replace(regex, `<span class="highlight">${element}</span>`);
        return true
      }
      return false;
  });

  return highlightedName;
}
