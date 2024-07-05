import slugifyLib from 'slugify'

export const slugify = (raw: string) =>
	slugifyLib(raw, { lower: true, strict: true })
