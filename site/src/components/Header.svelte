<script lang="ts">
	import { routes } from 'src/libs/routes.ts'
	import { labels } from 'settings.json'
	import Search from './Search.svelte'

	let translateY = 0
	let scrollY = 0
	let oldScrollY = scrollY
	let height: number

	$: {
		if (height) {
			const scrollDiff = scrollY - oldScrollY
			translateY = Math.max(0, Math.min(height, translateY + scrollDiff))
			oldScrollY = scrollY
		}
	}
</script>

<svelte:window bind:scrollY />
<header
	class="sticky top-0 z-50 flex flex-col items-center gap-2 bg-white px-8 py-2 sm:flex-row"
	style="transform:translateY(-{translateY}px);"
	bind:clientHeight={height}
>
	<a href="/" class="h-16">
		<slot name="logo" />
	</a>
	<nav class="sm:ml-auto">
		<ul class="flex gap-8 sm:text-xl">
			<li>
				<a href={routes.actions()} class="hover:text-secondary-2"
					>{labels.actions}</a
				>
			</li>
			<li>
				<a href={routes.actors()} class="hover:text-secondary-2"
					>{labels.actors}</a
				>
			</li>
			<li>
				<a href={routes.about()} class="hover:text-secondary-2"
					>{labels.about}</a
				>
			</li>
		</ul>
	</nav>
	<div class="sm:ml-8">
		<Search />
	</div>
</header>
