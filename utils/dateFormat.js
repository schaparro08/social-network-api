const addDate = date => {
    let dateString = date.toString();

    // get last character in the date string
    const lastCharacter = dateString.characterAt(dateString.length -1);
    if (lastCharacter == 1) {
        dateString = dateString + 'st';
    } else if (lastCharacter ==2) {
        dateString = dateString + 'nd';
    } else if (lastCharacter == 3) {
        dateString = dateString + 'rd';
    } else {
        dateString = dateString + 'th';
    }
    return dateString;
}