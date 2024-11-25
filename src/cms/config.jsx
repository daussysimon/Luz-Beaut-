const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  locale: "fr",
  media_folder: "static/img",
  public_folder: "/img",
  logo_url: "https://sejaluzbeaute.netlify.app/img/logo.png",
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
        preview: false,
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
                  name: "backgroundImage",
                  label: "Image de fond",
                  widget: "image",
                },
                {
                  name: "headerButton",
                  label: "Bouton ",
                  widget: "object",
                  fields: [
                    {
                      name: "visible",
                      label: "Visible",
                      widget: "boolean",
                    },
                    {
                      name: "title",
                      label: "Titre",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "lien vers",
                      widget: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "descriptionSection",
              label: "Description",
              widget: "object",
              fields: [
                {
                  name: "title",
                  label: "Titre",
                  widget: "string",
                },
                {
                  name: "image",
                  label: "Image",
                  widget: "image",
                },
                {
                  name: "text",
                  label: "Description",
                  widget: "text",
                },
              ],
            },
            {
              name: "massage",
              label: "Massage",
              widget: "object",
              fields: [
                { name: "title", label: "Titre", widget: "string" },
                { name: "asterisque", label: "Astérisque", widget: "string" },
                {
                  name: "priceInformation",
                  label: "Information pour les tarifs  à domicile",
                  widget: "text",
                },
              ],
            },
            {
              name: "contact",
              label: "Contact",
              widget: "object",
              fields: [
                { name: "title", label: "Titre", widget: "string" },
                {
                  name: "phone",
                  label: "Numéro de téléphone",
                  widget: "string",
                },
                { name: "email", label: "Adresse email", widget: "string" },
                { name: "adresse", label: "Adresse", widget: "string" },
                { name: "image", label: "Image", widget: "image" },
                {
                  name: "instagram",
                  label: "Instagram",
                  widget: "object",
                  fields: [
                    { name: "link", label: "lien", widget: "string" },
                    { name: "visible", label: "Visible", widget: "boolean" },
                  ],
                },
                {
                  name: "facebook",
                  label: "Facebook",
                  widget: "object",
                  fields: [
                    { name: "link", label: "lien", widget: "string" },
                    { name: "visible", label: "Visible", widget: "boolean" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "legalmentions",
          label: "Mentions légales",
          file: "/content/mentionslegales/index.md",
          description: "Mentions légales de votre site",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "mentions",
            },
            {
              name: "body",
              label: "body",
              widget: "markdown",
            },
          ],
        },
        {
          name: "cgv",
          label: "CGV",
          file: "/content/cgv/index.md",
          description: "CGV de votre site",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "cgv",
            },
            {
              name: "body",
              label: "body",
              widget: "markdown",
            },
          ],
        },
      ],
    },
    {
      name: "seo",
      label: "Seo",
      icon: "seo",
      delete: false,
      editor: {
        preview: false,
        frame: true,
      },
      files: [
        {
          name: "seo",
          label: "SEO",
          file: "/content/seo/index.md",
          description: "Information concernant le SEO",
          fields: [
            {
              name: "title",
              label: "Titre",
              widget: "string",
            },
            { name: "type", label: "type", widget: "hidden", default: "seo" },
            {
              name: "description",
              label: "Description",
              widget: "text",
            },
            {
              name: "logo",
              label: "Logo",
              widget: "object",
              fields: [
                { name: "text", label: "Text", widget: "string" },
                { name: "image", label: "Image", widget: "image" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "massages",
      label: "Massages",
      icon: "massageIcon",
      folder: "/content/massages",
      create: true,
      editor: {
        preview: false,
        frame: false,
      },
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "image", label: "Image", widget: "image" },
        { name: "type", label: "type", widget: "hidden", default: "massage" },
        {
          name: "prix",
          label: "Prix",
          widget: "list",
          fields: [
            { name: "time", label: "Temps en min", widget: "number" },
            { name: "price", label: "Prix", widget: "number" },
          ],
        },
      ],
    },
  ],
};

export default config;
