const initialState = {
  loggedInUser: null,
  loginError: null,
  loggedInUserData: {
    sent: [
      {
        to: [{ email: "admin@gmail.com", name: "Admin" }],
        cc: [{ email: "test2@gmail.com", name: "Test2" }],
        from: { email: "test1@gmail.com", name: "test1" },
        subject: "lorem ipsum",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        timestamp: Date.now(),
        category: "Clients",
        id: 1,
        unread: true,
      },
    ],
    inbox: [
      {
        to: [{ email: "test1@gmail.com", name: "Test1" }],
        cc: [{ email: "admin@gmail.com", name: "Admin" }],
        from: { email: "test2@gmail.com", name: "Test1" },
        subject: "Client Email",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        unread: true,
        timestamp: Date.now() - 900000,
        category: "Clients",
        id: 2,
        attachments: [2, 3],
      },
      {
        to: [{ email: "test1@gmail.com", name: "Test1" }],
        cc: [{ email: "admin@gmail.com", name: "Admin" }],
        from: { email: "test2@gmail.com", name: "Test2" },
        subject: "Second Email",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        unread: true,
        timestamp: Date.now() - 4900000,
        category: "Clients",
        id: 3,
        attachments: [2, 3],
      },
      {
        to: [{ email: "test1@gmail.com", name: "Test1" }],
        cc: [{ email: "admin@gmail.com", name: "Admin" }],
        from: { email: "test2@gmail.com", name: "Test1" },
        subject: "Reminder",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        unread: true,
        timestamp: Date.now() - 1900000,
        category: "Clients",
        id: 4,
        attachments: [2, 3],
      },
      {
        to: [{ email: "test1@gmail.com", name: "test1" }],
        cc: [{ email: "admin@gmail.com", name: "Admin" }],
        from: { email: "test2@site.com", name: "Test1" },
        subject: "Re: Lorem Ipsum",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        unread: false,
        timestamp: Date.now() - 20000000,
        id: 5,
      },
    ],
  },
  users: {
    "admin@gmail.com": "Admin",
    "test1@gmail.com": "Test1",
    "test2@gmail.com": "Test2",
  },
  userCredenentials: {
    "admin@gmail.com": "admin123",
    "test1@gmail.com": "test123",
  },
  folders: [
    {
      name: "Inbox",
      icon: "fa-inbox",
      dataKey: "inbox",
      badgeClass: "orange",
    },
    {
      name: "Sent Mail",
      icon: "fa-envelope",
      dataKey: "sent",
      badgeClass: "orange",
    },
    {
      name: "Important",
      icon: "fa-certificate",
      dataKey: "imp",
    },
    {
      name: "Draft",
      icon: "fa-archive",
      dataKey: "draft",
      badgeClass: "red",
    },
    {
      name: "Trash",
      icon: "fa-trash-alt",
      dataKey: "trash",
    },
  ],
  categories: [
    {
      key: "Work",
      color: "#7F63F4",
    },
    {
      key: "Documents",
      color: "#f1514e",
    },
    {
      key: "Social",
      color: "#0c83c8",
    },
    {
      key: "Advertising",
      color: "#02c7c9",
    },
    {
      key: "Clients",
      color: "#faac50",
    },
  ],
  labels: [
    "Family",
    "Work",
    "Home",
    "Children",
    "Holidays",
    "Music",
    "Photography",
    "Film",
  ],
};

export default initialState;
