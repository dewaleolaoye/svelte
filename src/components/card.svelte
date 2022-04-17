<script>
  // console.log(props, 'PROPS')
  let emphasis = `I <strong>Love</strong> it`
</script>

<div class="card">
  <h1>This is kinda fun</h1>
  <p>Svelte seems interesting</p>
  <p>{@html emphasis}</p>
</div>

<style>
  .card {
    background-color: #efefef;
    padding: 2rem 1rem;
    border-radius: 1.5rem;
    width: 200px;
    height: 100px;
    margin: auto;
  }

  h1 {
    font-size: 1.5em;
  }

  h1, p {
    text-align: center;
  }
</style>
