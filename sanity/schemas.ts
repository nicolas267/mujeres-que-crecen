export const siteLink = {
  name: "siteLink",
  title: "Site link",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "href",
      title: "Href",
      type: "string",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Ghost", value: "ghost" },
        ],
      },
    },
  ],
};

export const imageWithAlt = {
  name: "imageWithAlt",
  title: "Image with alt text",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alt text",
      type: "string",
    },
  ],
};

export const featureCard = {
  name: "featureCard",
  title: "Feature card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "iconName",
      title: "Icon name",
      type: "string",
      description: "Material Symbols name used by the current UI.",
    },
    {
      name: "tone",
      title: "Tone",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
        ],
      },
    },
  ],
};

export const impactCard = {
  name: "impactCard",
  title: "Impact card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "tone",
      title: "Tone",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
          { title: "Neutral", value: "neutral" },
        ],
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
  ],
};

export const metricStat = {
  name: "metricStat",
  title: "Metric stat",
  type: "object",
  fields: [
    {
      name: "value",
      title: "Value",
      type: "string",
    },
    {
      name: "label",
      title: "Label",
      type: "string",
    },
  ],
};

export const promptCard = {
  name: "promptCard",
  title: "Prompt card",
  type: "object",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "prompt",
      title: "Prompt",
      type: "text",
    },
  ],
};

export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "image",
          title: "Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [{ type: "siteLink" }],
    },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        },
        {
          name: "titlePrefix",
          title: "Title prefix",
          type: "string",
        },
        {
          name: "titleHighlight",
          title: "Title highlight",
          type: "string",
        },
        {
          name: "titleSuffix",
          title: "Title suffix",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "primaryCta",
          title: "Primary CTA",
          type: "siteLink",
        },
        {
          name: "secondaryCta",
          title: "Secondary CTA",
          type: "siteLink",
        },
        {
          name: "image",
          title: "Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "mission",
      title: "Mission",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [{ type: "featureCard" }],
        },
      ],
    },
    {
      name: "impact",
      title: "Impact",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "featuredStory",
          title: "Featured story",
          type: "impactCard",
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [{ type: "impactCard" }],
        },
        {
          name: "metricsTitle",
          title: "Metrics title",
          type: "string",
        },
        {
          name: "metrics",
          title: "Metrics",
          type: "array",
          of: [{ type: "metricStat" }],
        },
        {
          name: "image",
          title: "Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "marketplace",
      title: "Marketplace",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "benefits",
          title: "Benefits",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "image",
          title: "Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "investors",
      title: "Investors",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "cta",
          title: "Call to action",
          type: "siteLink",
        },
        {
          name: "pitchTitle",
          title: "Pitch title",
          type: "string",
        },
        {
          name: "pitchDescription",
          title: "Pitch description",
          type: "text",
        },
        {
          name: "projectsFundedLabel",
          title: "Projects funded label",
          type: "string",
        },
        {
          name: "projectsFundedValue",
          title: "Projects funded value",
          type: "string",
        },
        {
          name: "progressPercentage",
          title: "Progress percentage",
          type: "number",
        },
      ],
    },
    {
      name: "aiMentora",
      title: "IA Mentora",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "ctaLabel",
          title: "CTA label",
          type: "string",
        },
        {
          name: "prompts",
          title: "Prompts",
          type: "array",
          of: [{ type: "promptCard" }],
        },
      ],
    },
    {
      name: "finalCta",
      title: "Final CTA",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "button",
          title: "Button",
          type: "siteLink",
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "brandName",
          title: "Brand name",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "links",
          title: "Links",
          type: "array",
          of: [{ type: "siteLink" }],
        },
        {
          name: "copyright",
          title: "Copyright",
          type: "string",
        },
      ],
    },
  ],
};

export const schemaTypes = [
  homepage,
  siteLink,
  imageWithAlt,
  featureCard,
  impactCard,
  metricStat,
  promptCard,
];
