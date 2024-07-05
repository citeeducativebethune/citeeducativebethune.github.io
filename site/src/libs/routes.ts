import { slugify } from 'src/libs/string.ts'
import { labels } from 'settings.json'

export const routes = {
	actions: () => `/${slugify(labels.actions)}`,
	actors: () => `/${slugify(labels.actors)}`,
	about: () => `/${slugify(labels.about)}`,
	actor: (actorSlug: string) => `${routes.actors()}/${slugify(actorSlug)}`,
	action: (actionSlug: string) => `${routes.actions()}/${slugify(actionSlug)}`,
}
