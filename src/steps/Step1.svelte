<script>
  import { reportData } from "../stores/reportData";
  import { step } from "../stores/step";
  function submit() {
    step.next();
  }
</script>

<form on:submit|preventDefault={submit}>
  <label>
    Group #
    <input
      required
      type="number"
      pattern="[0-9]+"
      name="group_number"
      bind:value={$reportData.group_number}
    />
  </label>
  <label>
    Group Name
    <input
      required
      type="text"
      name="group_name"
      bind:value={$reportData.group_name}
    />
  </label>
  <input type="submit" value="Next" />
</form>
