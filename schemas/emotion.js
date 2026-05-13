export default {
  name: "emotion",
  title: "情緒分類 Emotion",
  type: "document",
  fields: [
    {
      name: "title",
      title: "情緒名稱",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "網址 Slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "description",
      title: "描述",
      type: "text",
      rows: 3
    },
    {
      name: "color",
      title: "代表色",
      type: "string",
      description: "例如 #E8DFCF"
    },
    {
      name: "order",
      title: "排序",
      type: "number",
      initialValue: 10
    }
  ]
};
