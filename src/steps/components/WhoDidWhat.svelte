<script>
  import { reportData } from "../../stores/reportData";
  $: allMembersHasTasks = $reportData.members.every(
    (member) => member?.tasks?.length > 0 || false
  );
</script>

<details class:completed={allMembersHasTasks} id="WhoDidWhat">
  <summary>Who did what?</summary>
  {#each $reportData.members as member}
    <label>
      {member.name}
      <textarea bind:value={member.tasks} />
    </label>
  {/each}
</details>
