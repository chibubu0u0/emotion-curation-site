export default {
  name: "homePage",
  title: "首頁設定 Homepage",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "網站名稱",
      type: "string",
      initialValue: "Liminal Objects"
    },
    {
      name: "eyebrow",
      title: "小標",
      type: "string",
      initialValue: "EMOTIONAL CURATION ARCHIVE"
    },
    {
      name: "title",
      title: "首頁主標題",
      type: "string",
      initialValue: "Objects for quiet people."
    },
    {
      name: "description",
      title: "首頁描述",
      type: "text",
      rows: 3
    },
    {
      name: "buttonText",
      title: "按鈕文字",
      type: "string",
      initialValue: "Enter Archive"
    },
    {
      name: "todayMoodTitle",
      title: "今日情緒標題",
      type: "string"
    },
    {
      name: "todayMoodDescription",
      title: "今日情緒描述",
      type: "text",
      rows: 3
    },
    {
      name: "todayMoodTime",
      title: "時間標籤",
      type: "string",
      initialValue: "Late Night"
    },
    {
      name: "todayMoodMusic",
      title: "音樂標籤",
      type: "string",
      initialValue: "Slow Playlist"
    }
  ],
  preview: {
    prepare() {
      return {
        title: "首頁設定 Homepage"
      };
    }
  }
};
