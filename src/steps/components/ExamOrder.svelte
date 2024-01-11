<script>
  import { reportData } from "../../stores/reportData";
  $: allMembersAdded = $reportData.members.every(
    (member) => member?.examTime || member?.examDate || false
  );
</script>

<details class:completed={allMembersAdded} id="ExamOrder">
  <summary>Exam Order</summary>
  <p>Time for each</p>
  {#each $reportData.members as member}
    <p>{member.name}</p>
    <div>
      <input type="time" bind:value={member.examTime} />
      <input type="date" bind:value={member.examDate} />
    </div>
  {/each}
</details>

<style>
  div {
    display: flex;
    gap: 1rem;
  }
</style>
