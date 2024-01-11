<script>
  import { reportData } from "../../stores/reportData";
  $: allMembersSeen = $reportData.members.every(
    (member) =>
      member?.screencastNotes?.length > 0 ||
      member.questions.screencast ||
      false
  );
</script>

<details class:completed={allMembersSeen} id="Screencasts">
  <summary>Screencasts</summary>
  {#each $reportData.members as member}
    <p>
      {member.name} - <a href={member.screencast} target="_blank">Watch</a>
    </p>
    <label>
      Notes
      <textarea bind:value={member.screencastNotes} placeholder="Notes" />
    </label>
    <label>
      Questions
      <textarea
        bind:value={member.questions.screencast}
        placeholder="Questions"
      />
    </label>
  {/each}
</details>
