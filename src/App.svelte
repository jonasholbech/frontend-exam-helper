<script>
  import { step } from "./stores/step";
  /* import Debugger from "./Debugger.svelte"; */
  import Step1 from "./steps/Step1.svelte";
  import Step2 from "./steps/Step2.svelte";
  import Step3 from "./steps/Step3.svelte";
  import Step4 from "./steps/Step4.svelte";
  import Step5 from "./steps/Step5.svelte";
  /* <Debugger /> */
</script>

<main class="container">
  <h1>At step {$step}/5</h1>

  {#if $step === 1}
    <Step1 />
  {:else if $step === 2}
    <Step2 />
  {:else if $step === 3}
    <Step3 />
  {:else if $step === 4}
    <Step4 />
  {:else if $step === 5}
    <Step5 />
  {/if}
  <button
    class="secondary outline"
    disabled={$step === 1}
    on:click={() => step.prev()}>Back</button
  >
</main>

<style>
</style>
