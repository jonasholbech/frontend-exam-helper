import { writable } from "svelte/store";
//TODO: https://gist.github.com/joshnuss/aa3539daf7ca412202b4c10d543bc077
/*
const initialData = {
  group_number: 2,
  group_name: "DR",
  numMembers: 2,
  members: [
    {
      name: "Jonas",
      screencast: "https://test.dk",
      questions: {
        screencast: "",
      },
    },
    {
      name: "Dannie",
      screencast: "https://test.dk",
      questions: {
        screencast: "",
      },
    },
  ],
  links: {
    form: "https://a.dk",
    dashboard: "https://b.dk",
    formGH: "https://c.dk",
    dashboardGH: "https://d.dk",
  },
  form: {
    works: { comment: null, grade: null },
    "looks good": { comment: null, grade: null },
    UX: { comment: null, grade: null },
    responsiveness: { comment: null, grade: null },
    "feel factor": { comment: null, grade: null },
  },
  dashboard: {
    works: { comment: null, grade: null },
    "looks good": { comment: null, grade: null },
    UX: { comment: null, grade: null },
    responsiveness: { comment: null, grade: null },
    "feel factor": { comment: null, grade: null },
  },
  report: {
    good: "",
    bad: "",
    questions: "",
  },
  generalQuestions: "",
};*/
const initialData = {
  group_number: 2,
  group_name: "DR",
  numMembers: 2,
  members: [
    {
      name: "Jonas",
      screencast: "https://test.dk",
      questions: {
        screencast: "How would you?",
      },
      tasks: "components\nstuff",
      screencastNotes: "Nice",
      examTime: "10:10",
      examDate: "2022-01-12",
    },
    {
      name: "Dannie",
      screencast: "https://test.dk",
      questions: {
        screencast: "Why didn't you",
      },
      tasks: "Fetched coffee\n",
      screencastNotes: "Terrible",
      examDate: "2022-01-13",
    },
  ],
  links: {
    form: "https://a.dk",
    dashboard: "https://b.dk",
    formGH: "https://c.dk",
    dashboardGH: "https://d.dk",
  },
  form: {
    works: {
      comment: "No\nform fields",
      grade: 3,
    },
    "looks good": {
      comment: null,
      grade: 7,
    },
    UX: {
      comment: "excellent",
      grade: 10,
    },
    responsiveness: {
      comment: "???",
      grade: 3,
    },
    "feel factor": {
      comment: null,
      grade: 4,
    },
  },
  dashboard: {
    works: {
      comment: null,
      grade: 6,
    },
    "looks good": {
      comment: null,
      grade: 4,
    },
    UX: {
      comment: null,
      grade: null,
    },
    responsiveness: {
      comment: null,
      grade: null,
    },
    "feel factor": {
      comment: null,
      grade: null,
    },
  },
  report: {
    good: "asd\nsfdg\nadsfg",
    bad: "zsfdg\nsdfd\ndsfz",
    questions: "dsf\nasdf",
  },
  generalQuestions: "z\nasdfz\nds\nsdzx",
  targetAudience: "Bartenders",
  extras: "react\nvite\nconfig",
};
function setupData(data) {
  const { subscribe, set, update } = writable(data);
  return {
    subscribe,
    set,
    update,
    setLinks: (form, dashboard, gitform, gitdash) =>
      update((old) => {
        const next = { ...old };
        next.links.form = form;
        next.links.dashboard = dashboard;
        next.links.formGH = gitform;
        next.links.dashboardGH = gitdash;
        return next;
      }),
    setMembers: (members) => {
      update((old) => {
        const copy = { ...old };
        copy.members = members;
        return copy;
      });
    },
  };
}

export const reportData = setupData(initialData);
