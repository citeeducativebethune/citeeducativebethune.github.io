export const sortByDate = <T extends { data: { date: Date } }>(items: T[]) =>
	items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
