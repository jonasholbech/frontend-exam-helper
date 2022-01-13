<script>
  import { reportData } from "../../stores/reportData";
  import Dragger from "./Dragger.svelte";
  export let site;
  $: completed = figureItOut($reportData[site]);
  function figureItOut(obj) {
    const all = Object.entries(obj);
    return all.some(
      (item) => item[1].grade !== null || item[1].comment !== null
    );
  }
</script>

<details class:completed>
  <summary>{site.charAt(0).toUpperCase() + site.slice(1)}</summary>
  <Dragger cat="works" {site} />
  <Dragger cat="looks good" {site} />
  <Dragger cat="UX" {site} />
  <Dragger cat="responsiveness" {site} />
  <Dragger cat="feel factor" {site} />
  <Dragger cat="tech stack and code notes" {site} />
</details>
