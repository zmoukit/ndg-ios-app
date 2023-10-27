export const getErrorMessagesFromResponse = (response) => {
  if (!"message" in response.data) return "";

  let errors = "";
  for (const key in response.data.message) {
    errors = errors + "- " + response.data.message[key][0] + "\n";
  }

  return errors;
};
