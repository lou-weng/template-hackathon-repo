<script>
	import { onMount } from 'svelte';
    // import { serverUrl } from '../../constants.js';

    onMount(async () => {
           fetch(`http://localhost:8080/home`)
           .then(res => console.log(res))
           .catch(e => console.log(e));
    });

</script>
<button>
    Click to log in
</button>

<h1>home</h1>

