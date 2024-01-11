<script>
  import { onMount } from "svelte";
  import { step } from "../stores/step";
  import { autoExpandTextarea } from "../modules/autoExpander";
  import TargetAudience from "./components/TargetAudience.svelte";
  import WhoDidWhat from "./components/WhoDidWhat.svelte";
  import Screencasts from "./components/Screencasts.svelte";
  import Extras from "./components/Extras.svelte";
  import Site from "./components/Site.svelte";
  import Report from "./components/Report.svelte";
  import ExamOrder from "./components/ExamOrder.svelte";
  import OtherQuestions from "./components/OtherQuestions.svelte";

  import FloatMenu from "../FloatMenu.svelte";
  onMount(() => {
    setTimeout(autoExpandTextarea, 200);
  });
</script>

<FloatMenu />
<ExamOrder />
<Report />
<TargetAudience />
<WhoDidWhat />
<Extras />
<Screencasts />
<Site site="form" />
<Site site="dashboard" />
<OtherQuestions />
<button on:click={() => step.next()}>Generate Exam Helper</button>
