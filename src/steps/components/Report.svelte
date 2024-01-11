<script>
  import { reportData } from "../../stores/reportData";
  $: isCompleted =
    $reportData.report.good !== "" ||
    $reportData.report.bad !== "" ||
    $reportData.report.questions !== "";
</script>

<details class:completed={isCompleted} id="Report">
  <summary>Report</summary>
  <label>
    Good stuff
    <textarea bind:value={$reportData.report.good} />
  </label>
  <label>
    Bad stuff
    <textarea bind:value={$reportData.report.bad} />
  </label>
  <label>
    General Questions
    <textarea bind:value={$reportData.report.questions} />
  </label>
</details>
