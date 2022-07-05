module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },

  format_plural: (stringName, numStrings) => {
    if (numStrings < 1) {
      stringName = '';
    }
    else if (numStrings > 1) {
      stringName += 's';
    }
    else {
      return stringName;
    }
  
    return stringName;
  },

  format_url: url => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0]
  }
}