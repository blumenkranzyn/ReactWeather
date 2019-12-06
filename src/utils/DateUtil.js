export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/Sao_Paulo"
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", options);
}


export function formatDateTime(dateString) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  };
  const date = new Date(dateString);

  return date.toLocaleDateString("pt-BR", options);
}

export function getDateWithoutYear(dateString) {
  const splitted = dateString.split("/");
  const date = splitted[0] + "/" + splitted[1];
  return date;
}