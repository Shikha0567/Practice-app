export const folders = [
  {
    id: 1,
    name: "Practice-app",
    checked: false,
    isFolder: true,
    children: [
      {
        id: 1.1,
        name: "src",
        checked: false,
        isFolder: true,
        children: [
          {
            id: 1.2,
            name: "pages",
            checked: false,
            isFolder: true,
            children: [
              {
                id: 1.3,
                name: "LLD",
                checked: false,
                isFolder: true,
                children: [
                  {
                    id: 1.4,
                    name: "NestedFolder",
                    checked: false,
                    isFolder: true,
                  },
                  {
                    id: 1.4,
                    name: "folderData",
                    checked: false,
                    isFolder: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2.1,
        name: "public",
        checked: false,
        isFolder: true,
        children: [
          {
            id: 2.2,
            name: "assets",
            checked: false,
            isFolder: true,
            children: [
              {
                id: 2.3,
                name: "TestComp.jsx",
                checked: false,
                isFolder: false,
              },
              { id: 2.4, name: "NewComp.jsx", checked: false, isFolder: false },
            ],
          },
        ],
      },
    ],
  },
];

export const folders1 = [
  {
    id: 1,
    name: "Practice-app",
    children: [
      {
        id: 1.1,
        name: "src",
        children: [],
      },
    ],
  },
];
