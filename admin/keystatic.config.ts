import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "citeeducativebethune/citeeducativebethune.github.io",
    pathPrefix: "site",
  },
  collections: {
    actions: collection({
      label: "Actions",
      slugField: "title",
      path: "src/content/actions/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Titre" } }),
        actors: fields.array(
          fields.relationship({ collection: "actors", label: "Acteur" }),
          {
            label: "Acteurs",
            itemLabel: (props) => props.value ?? "",
          }
        ),
        description: fields.text({
          label: "Résumé",
          multiline: true,
          validation: { isRequired: true },
        }),
        thumbnail: fields.object(
          {
            image: fields.image({
              label: "Image",
              directory: "src/assets/images/actions",
              publicPath: "/src/assets/images/actions/",
              validation: { isRequired: true },
            }),
            alt: fields.text({ label: "Description alternative" }),
          },
          { label: "Image de couverture" }
        ),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        authors: fields.text({ label: "Auteurs" }),
        content: fields.mdx({
          label: "Contenu",
          extension: "md",
          options: {
            image: {
              directory: "src/assets/images/projects",
              publicPath: "src/assets/images/projects/",
            },
          },
        }),
      },
    }),
    actors: collection({
      label: "Acteurs",
      slugField: "title",
      path: "src/content/actors/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Nom" } }),
        scholar: fields.checkbox({ label: "Établissement scolaire" }),
        description: fields.text({ label: "Description", multiline: true }),
        location: fields.text({ label: "Adresse" }),
        site: fields.text({ label: "Url du site" }),
        image: fields.image({
          label: "Image",
          directory: "src/assets/images/actors",
          publicPath: "/src/assets/images/actors/",
          validation: { isRequired: true },
        }),
        content: fields.emptyContent({ extension: "md" }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Réglages",
      path: "/settings",
      format: "json",
      schema: {
        title: fields.text({
          label: "Titre du site",
          validation: { isRequired: true },
        }),
        metaDesc: fields.text({
          label: "Description du site",
          validation: { isRequired: true },
        }),
        labels: fields.object(
          {
            actions: fields.text({
              label: "Actions",
              validation: { isRequired: true },
            }),
            actors: fields.text({
              label: "Acteurs",
              validation: { isRequired: true },
            }),
            about: fields.text({
              label: "À propos",
              validation: { isRequired: true },
            }),
          },
          { label: "Labels" }
        ),
      },
    }),
    about: singleton({
      label: "À propos",
      path: "src/content/about/about",
      format: "json",
      schema: {
        introduction: fields.object(
          {
            title: fields.text({
              label: "Titre",
              validation: { isRequired: true },
            }),
            content: fields.text({
              label: "Contenu",
              multiline: true,
              validation: { isRequired: true },
            }),
          },
          { label: "Introduction" }
        ),
        perimeter: fields.object(
          {
            title: fields.text({
              label: "Titre",
              validation: { isRequired: true },
            }),
            content: fields.text({
              label: "Contenu",
              multiline: true,
              validation: { isRequired: true },
            }),
            image: fields.image({
              label: "Image",
              directory: "src/assets/images/about/map",
              publicPath: "/src/assets/images/about/map",
              validation: { isRequired: true },
            }),
          },
          { label: "Le périmètre de la cité" }
        ),
        goals: fields.object({
          title: fields.text({
            label: "Titre",
            validation: { isRequired: true },
          }),
          items: fields.array(fields.text({ label: "Enjeu" }), {
            label: "Les enjeux",
            itemLabel: (props) => props.value ?? "",
          }),
        }),
        contacts: fields.array(
          fields.object({
            name: fields.text({
              label: "Nom",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              validation: { isRequired: true },
            }),
            mail: fields.text({ label: "Email" }),
          }),
          {
            label: "Contacts",
            itemLabel: (props) => props.fields.name.value ?? "",
          }
        ),
      },
    }),
  },
});
