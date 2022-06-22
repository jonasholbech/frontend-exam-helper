<script>
  import { reportData } from "../stores/reportData";
  import { download } from "../modules/download";
  function nl2br(string) {
    if (!string) {
      return string;
    }
    return string.replace(/\n/g, "<br />");
  }
  //TODO: gh notes ind i rapport
  //TODO: import data from report (json object stored in the html (in details>summary?))
  const template = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
      rel="stylesheet"
      href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
    />
  <title>${$reportData.group_number}-${
    $reportData.group_name
  }-exam-helper</title>
</head>
<body>
    <main class="container">
        <h1>${$reportData.group_number}-${$reportData.group_name}</h1>
        <section>
            <h2>Links</h2>
            <div class="grid gap1 col2">
                <ul>
                    
                    <li><a target="_blank" href="${
                      $reportData.links.form
                    }">Form/Booking</a></li>
                    <li><a target="_blank" href="${
                      $reportData.links.formGH
                    }">GitHub</a></li>
                </ul>
                ${
                  $reportData.isMonoRepo
                    ? ""
                    : `<ul>
                    <li><a target="_blank" href="${$reportData.links.dashboard}">Dashboard/App</a></li>
                    <li><a target="_blank" href="${$reportData.links.dashboardGH}">GitHub</a></li>
                </ul>`
                }
            </div>
        </section>
        <section class="grid col2 gap1">
            <div class="bordered">
                <h2>The form</h2>
                <table>
                    <tr>
                        <th>Name</th><th>Value</th><th>Comments</th>
                    </tr>
                    <tr>
                        <td>Works</td>
                        <td>${$reportData.form.works.grade}</td>
                        <td>${nl2br($reportData.form.works.comment)}</td>
                    </tr>
                    <tr>
                        <td>Looks Good</td>
                        <td>${$reportData.form["looks good"].grade}</td>
                        <td>${nl2br(
                          $reportData.form["looks good"].comment
                        )}</td>
                    </tr>
                    <tr>
                        <td>UX</td>
                        <td>${$reportData.form["UX"].grade}</td>
                        <td>${nl2br($reportData.form["UX"].comment)}</td>
                    </tr>
                    <tr>
                        <td>responsiveness</td>
                        <td>${$reportData.form["responsiveness"].grade}</td>
                        <td>${nl2br(
                          $reportData.form["responsiveness"].comment
                        )}</td>
                    </tr>
                    <tr>
                        <td>feel factor</td>
                        <td>${$reportData.form["feel factor"].grade}</td>
                        <td>${nl2br(
                          $reportData.form["feel factor"].comment
                        )}</td>
                    </tr>
                </table>
                <h3>Github</h3>
                ${$reportData.links.formNotes
                  .split("\n")
                  .map((extra) => `<p>${extra}</p>`)
                  .join("")}
            </div>
            <div  class="bordered">
                <h2>The Dashboard/App</h2>
                <p>${$reportData.targetAudience}</p>
                <table>
                    <tr>
                        <th>Name</th><th>Value</th><th>Comments</th>
                    </tr>
                    <tr>
                        <td>Works</td>
                        <td>${$reportData.dashboard.works.grade}</td>
                        <td>${nl2br($reportData.dashboard.works.comment)}</td>
                    </tr>
                    <tr>
                        <td>Looks Good</td>
                        <td>${$reportData.dashboard["looks good"].grade}</td>
                        <td>${nl2br(
                          $reportData.dashboard["looks good"].comment
                        )}</td>
                    </tr>
                    <tr>
                        <td>UX</td>
                        <td>${$reportData.dashboard["UX"].grade}</td>
                        <td>${nl2br($reportData.dashboard["UX"].comment)}</td>
                    </tr>
                    <tr>
                        <td>responsiveness</td>
                        <td>${
                          $reportData.dashboard["responsiveness"].grade
                        }</td>
                        <td>${nl2br(
                          $reportData.dashboard["responsiveness"].comment
                        )}</td>
                    </tr>
                    <tr>
                        <td>feel factor</td>
                        <td>${$reportData.dashboard["feel factor"].grade}</td>
                        <td>${nl2br(
                          $reportData.dashboard["feel factor"].comment
                        )}</td>
                    </tr>
                </table>
                <h3>Github</h3>
                ${$reportData.links.dashboardNotes
                  .split("\n")
                  .map((extra) => `<p>${extra}</p>`)
                  .join("")}
            </div>
        </section>
        <section>
            <h2>The report</h2>
            <div class="grid col2 gap1">
                <div>
                    <h3>Good</h3>
                    <p>${nl2br($reportData.report.good)}</p>
                </div>
                <div>
                    <h3>Bad</h3>
                    <p>${nl2br($reportData.report.bad)}</p>
                </div>
            </div>
        </section>
        <section>
            <h2>Extras</h2>
            <ol>
                ${$reportData.extras
                  .split("\n")
                  .map((extra) => `<li>${extra}</li>`)
                  .join("")}
            </ol>
            
        </section>
        <section>
            <h2>Members</h2>
            <div class="grid col2 gap1">
                ${[...$reportData.members]
                  .sort((a, b) => a.examTime > b.examTime)
                  .map((member) => {
                    return `
                        <article>
                            <h3>${member.name}</h3>
                            <p>${member.examDate} - ${member.examTime}</p>
                            <dl>
                                <dt>Screencast</dt>
                                <dd><a href="${
                                  member.screencast
                                }">Watch</a></dd>
                                <dt>Notes</dt>
                                <dd>${nl2br(member.screencastNotes)}</dd>
                                <dt>Tasks</dt>
                                <dd>${nl2br(member.tasks)}</dd>
                                <dt>Questions</dt>
                                <dd>${nl2br(member.questions.screencast)}</dd>
                            </dl>
                        </article>
                    `;
                  })
                  .join("")}
            </div>
        </section>
        <section>
            <h2>Questions</h2>
            <div class="grid col2 gap1">
                <div>
                    <h3>Report</h3>
                    <ul>
                        ${$reportData.report.questions
                          .split("\n")
                          .map((q) => `<li>${q}</li>`)
                          .join("")}
                    </ul>
                </div>
                <div>
                    <h3>General</h3>
                    <ul>
                        ${$reportData.generalQuestions
                          .split("\n")
                          .map((q) => `<li>${q}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <style>
        h1,h2,h3,h4,h5,h6 {
            --typography-spacing-vertical:1rem;
        }
        article {
            --block-spacing-vertical:1rem;
        }
        .col2 {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 960px) {
            .col2 {
                grid-template-columns: 1fr;
            }
        }
        .gap1 {
            gap:1rem;
        }
        .grid {
            display:grid;
        }
        .full {
            grid-column: 1/-1;
        }
        .bordered {
            border: 1px solid #FFF;
            padding:1rem;
        }
    </style>
    <details>
        <summary>data</summary>
        ${JSON.stringify($reportData)}
    </details>
    
</body>
</html>`;
  download(
    `${$reportData.group_number}-${$reportData.group_name}-exam-helper.html`,
    template
  );
</script>
