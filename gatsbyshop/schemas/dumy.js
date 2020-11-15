export default {
    name: "dumy",
    title: "Dumy",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Dumy Name",
            type: "string",
            description: "Name of the dumy"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 100,
            }
        },
        {
            name: "image",
            title: "Dumy Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "Price of the dumy in cents",
        },
        {
            name: "tags",
            title: "Tags",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
        },

    ]
}

