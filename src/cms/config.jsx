const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  media_folder: "static/img",
  public_folder: "/img",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    max_file_size: 10240000,
    folder_support: false,
  },
  collections: [
    {
      name: "page",
      label: "Pages",
      delete: false,
      editor: {
        preview: true,
        frame: true,
      },
      files: [
        {
          name: "homePage",
          label: "Home",
          file: "/content/index.md",
          description: "Home page informations",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "index-page",
            },
            {
              name: "header",
              label: "Header",
              // summary: "{{fields.title}}: {{fields.description}}",
              widget: "object",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "description",
                  label: "Description",
                  widget: "text",
                },
                {
                  name: "backgroundImage",
                  label: "Background Image",
                  widget: "image",
                },
                {
                  name: "button 1",
                  label: "Button 1",
                  widget: "object",
                  summary: "{{fields.label}}: {{fields.link}}",
                  fields: [
                    {
                      name: "label",
                      label: "Label",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "Link",
                      widget: "string",
                    },
                  ],
                },
                {
                  name: "button 2",
                  label: "Button 2",
                  widget: "object",
                  summary: "{{fields.label}}: {{fields.link}}",
                  fields: [
                    {
                      name: "label",
                      label: "Label",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "Link",
                      widget: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "section2",
              label: "Section 2",
              widget: "object",
              collapse: true,
              fields: [
                {
                  name: "part1",
                  label: "Part 1",
                  widget: "object",
                  fields: [
                    {
                      name: "title",
                      label: "Title",
                      widget: "string",
                    },
                    {
                      name: "desciption",
                      label: "Description",
                      widget: "text",
                    },
                    {
                      name: "image",
                      labe: "Image",
                      widget: "image",
                    },
                    {
                      name: "button",
                      label: "Button",
                      widget: "object",
                      summary: "{{fields.label}}: {{fields.link}}",
                      fields: [
                        {
                          name: "label",
                          label: "Label",
                          widget: "string",
                        },
                        {
                          name: "link",
                          label: "Link",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "part2",
                  label: "Part 2",
                  widget: "object",
                  fields: [
                    {
                      name: "title",
                      label: "Title",
                      widget: "string",
                    },
                    {
                      name: "desciption",
                      label: "Description",
                      widget: "text",
                    },
                    {
                      name: "image",
                      labe: "Image",
                      widget: "image",
                    },
                    {
                      name: "button",
                      label: "Button",
                      widget: "object",
                      summary: "{{fields.label}}: {{fields.link}}",
                      fields: [
                        {
                          name: "label",
                          label: "Label",
                          widget: "string",
                        },
                        {
                          name: "link",
                          label: "Link",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "aboutUs",
              label: "About us",
              widget: "object",
              fields: [
                { name: "text", label: "Description", widget: "text" },
                { name: "video", label: "Video", widget: "video" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
