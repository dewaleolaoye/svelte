<script>
 export let myName
 import Nested from './Nested.svelte';
 import Card from './components/card.svelte';
</script>

<main>
	<h1>Hello {myName}</h1>

	<Nested />

	<Card />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: capitalize;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>