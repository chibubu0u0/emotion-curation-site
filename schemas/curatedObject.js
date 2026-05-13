export default {
  name: "curatedObject",
  title: "選物商品 Object",
  type: "document",
  fields: [
    {
      name: "title",
      title: "商品 / 物件名稱",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "網址 Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "category",
      title: "分類",
      type: "string",
      options: {
        list: [
          "Rain Mood",
          "Nostalgia",
          "Soft Escape",
          "Late Night",
          "Quiet Morning",
          "City Walk",
          "Archive"
        ]
      }
    },
    {
      name: "emotion",
      title: "情緒標籤",
      type: "string"
    },
    {
      name: "description",
      title: "短描述",
      type: "text",
      rows: 3
    },
    {
      name: "story",
      title: "物件故事 / 選物理由",
      type: "text",
      rows: 6
    },
    {
      name: "image",
      title: "商品圖片",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "price",
      title: "價格 / 狀態文字",
      type: "string",
      description: "例如 NT$ 880、Archive Only、Coming Soon"
    },
    {
      name: "externalUrl",
      title: "外部購買連結",
      type: "url"
    },
    {
      name: "visible",
      title: "顯示在前台",
      type: "boolean",
      initialValue: true
    },
    {
      name: "featured",
      title: "精選",
      type: "boolean",
      initialValue: false
    },
    {
      name: "order",
      title: "排序",
      type: "number",
      initialValue: 10
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image"
    }
  }
};
