export const pagination = {
  pageSize: 50,
  current: 1,
  total: 0,
  showSizeChanger: true,
  pageSizeOptions: ["10", "20", "30", "50", "100", "150"],
};

export const columns1 = [
  {
    title: "STT",
    width: 45,
    align: "center",
    scopedSlots: { customRender: "stt" },
  },
  {
    title: "entityId",
    width: 150,
    dataIndex: "entity_id",
  },
  {
    title: "Name",
    width: 140,
    dataIndex: "friendly_name",
  },
  {
    title: "Type",
    width: 110,
    dataIndex: "type",
  },
  // {
  //   title: "Train",
  //   width: 60,
  //   scopedSlots: { customRender: "train" },
  // },
  {
    title: "Habits",
    width: 190,
    scopedSlots: { customRender: "habit" },
  },
  {
    title: "Log",
    width: 215,
    scopedSlots: { customRender: "log" },
  },
  {
    title: "Action",
    width: 45,
    scopedSlots: { customRender: "action" },
  },
];

export const types = [
  { id: 1, name: "date", value: "date" },
  { id: 2, name: "week", value: "week" },
  { id: 3, name: "workdays_weekend", value: "workdays_weekend" },
];
