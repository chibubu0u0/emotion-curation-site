export const structure = (S) =>
  S.list()
    .title("選物網站後台")
    .items([
      S.listItem()
        .title("首頁設定 Homepage")
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage")
            .title("首頁設定 Homepage")
        ),
      S.divider(),
      S.documentTypeListItem("curatedObject").title("選物商品 Objects"),
      S.documentTypeListItem("emotion").title("情緒分類 Emotions")
    ]);
