<script>
  export let data
  import { browser } from '$app/environment';
import { goto } from '$app/navigation';

  if (browser) {
  goto(`grid/${data.users[0]}`);
}
</script>
