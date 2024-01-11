<script>
  import { reportData } from "../../stores/reportData";
</script>

<details
  class:completed={$reportData.generalQuestions !== ""}
  id="OtherQuestions"
>
  <summary>Other Questions</summary>
  <textarea
    bind:value={$reportData.generalQuestions}
    placeholder="One per line"
  />
</details>
