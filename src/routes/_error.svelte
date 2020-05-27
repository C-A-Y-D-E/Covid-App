<script>
  export let status;
  export let error;
</script>

<div class="container">
  <article
    class="message"
    class:is-warning={status === 404}
    class:is-danger={status === 500}>
    <div class="message-header">Error - {status} | {error.message}</div>
    <div class="message-body">
      <a href="/">Click Here</a>
      To Go to Home
    </div>
  </article>
</div>
