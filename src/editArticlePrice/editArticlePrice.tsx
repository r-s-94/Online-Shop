export default function EditArticlePriceComponent({
  articlePrice,
}: {
  articlePrice: number;
}) {
  function editArticlePrice(articlePrice: number) {
    const editedPrice = articlePrice.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });

    const completeEditedPrice = " " + editedPrice;
    return completeEditedPrice;
  }

  return <span>{editArticlePrice(articlePrice)}</span>;
}
