
<script>
	import Header from "./components/Header.svelte";
	import List from "./components/List.svelte";
	</script>

<style>
	.container{
		width: 500px;
		background: #009579;
	}

	:global(.container *) {
		font-family: sans-serif;
	}
</style>

<div class="container">
	<Header />
	<List />
</div>

<!--
<script>
	let name = 'Marcus';
</script>

<main>
	<h1>{name}'s To Do List: </h1>
	<p>1. Wake up</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	p {
		color: black;
		font-size: 2em;
		font-weight: 100;
		text-align: center;
	}
	h1 {
		color: blue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 250;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
-->