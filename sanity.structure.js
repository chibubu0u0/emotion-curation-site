export const structure = (S) =>
  S.list()
    .id("root")
    .title("選物網站後台")
    .items([
      S.listItem()
        .id("homePage")
        .title("首頁設定 Homepage")
        .schemaType("homePage")
        .child(
          S.document()
            .id("homePageDocument")
            .schemaType("homePage")
            .documentId("homePage")
            .title("首頁設定 Homepage")
        ),

      S.divider(),

      S.listItem()
        .id("curatedObjects")
        .title("選物商品 Objects")
        .schemaType("curatedObject")
        .child(
          S.documentTypeList("curatedObject")
            .id("curatedObjectList")
            .title("選物商品 Objects")
        ),

      S.listItem()
        .id("emotions")
        .title("情緒分類 Emotions")
        .schemaType("emotion")
        .child(
          S.documentTypeList("emotion")
            .id("emotionList")
            .title("情緒分類 Emotions")
        )
    ]);
