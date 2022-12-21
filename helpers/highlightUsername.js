const highlightUsername = (value, arr) => {
  const usersArray = arr.map((user) => {
    const { username } = user;
    const usernameArray = username.split('');
    // Index of the search value string inside the username
    const indexOfString = username.toLowerCase().indexOf(value.toLowerCase());
    // Sliced part of the string that has to be highlighted/bolded
    const highlightedPart = `<strong>${username.slice(
      indexOfString,
      indexOfString + value.length,
    )}</strong>`;

    // Splicing part of the string from the array of username letters that matches search value
    // then replacing it with the same string, but this time with <strong> tag
    usernameArray.splice(indexOfString, value.length, highlightedPart).join('');

    user.username = usernameArray.join('');
    return user;
  });

  return usersArray;
};

export default highlightUsername;
