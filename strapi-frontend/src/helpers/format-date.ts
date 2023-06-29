export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
