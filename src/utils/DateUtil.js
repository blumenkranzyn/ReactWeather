

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

