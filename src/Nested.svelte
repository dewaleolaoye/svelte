<script>
  let count = 0;

  function handleIncrement () {
    count += 1;
  }

  function handleClearCount () {
    count = 0;
  }
</script>

<p>How do you reuse a component here?</p>

<button on:click={handleIncrement}>Click {count} {count <= 1 ? 'time' : 'times'}</button>

<button on:click={handleClearCount}>Clear</button>