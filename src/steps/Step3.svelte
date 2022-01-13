<script>
  import { reportData } from "../stores/reportData";
  import { step } from "../stores/step";

  function membersChanged(e) {
    console.log($reportData.members, $reportData.numMembers);
    if ($reportData.numMembers > $reportData.members.length) {
      const desiredLength = $reportData.numMembers;
      const startingCount = $reportData.members.length;
      for (let i = startingCount; i < desiredLength; i++) {
        $reportData.members = $reportData.members.concat({
          name: "",
          screencast: "",
          questions: {
            screencast: "",
          },
        });
      }
      console.log($reportData.members);
    } else {
      $reportData.members = $reportData.members.slice(
        0,
        $reportData.numMembers
      );
    }
  }
  function submit() {
    //Data er bundet direkte til store, WOWOWOWOWOW
    step.next();
  }
</script>

<form on:submit|preventDefault={submit}>
  <select bind:value={$reportData.numMembers} on:change={membersChanged}>
    {#each Array.from(Array(4)).map((e, i) => i + 1) as number}
      <option value={number}>{number}</option>
    {/each}
  </select>
  {#each $reportData.members as member, index}
    <fieldset>
      <legend>Group member {index + 1}</legend>
      <label>
        Name:
        <input type="text" required bind:value={member.name} />
      </label>
      <label>
        Screencast:
        <input type="url" required bind:value={member.screencast} />
      </label>
    </fieldset>
  {/each}
  <input type="submit" value="Next" />
</form>
