import { writable as internal, get } from "svelte/store";
//TODO: https://gist.github.com/joshnuss/aa3539daf7ca412202b4c10d543bc077

const initialData = {
  group_number: null,
  group_name: "",
  numMembers: 2,
  members: [
    {
      name: "",
      screencast: "",
      questions: {
        screencast: "",
      },
    },
    {
      name: "",
      screencast: "",
      questions: {
        screencast: "",
      },
    },
  ],
  links: {
    form: "",
    dashboard: "",
    formGH: "",
    dashboardGH: "",
  },
  form: {
    works: { comment: null, grade: null },
    "looks good": { comment: null, grade: null },
    UX: { comment: null, grade: null },
    responsiveness: { comment: null, grade: null },
    "feel factor": { comment: null, grade: null },
    "tech stack and code notes": { comment: null, grade: null },
  },
  dashboard: {
    works: { comment: null, grade: null },
    "looks good": { comment: null, grade: null },
    UX: { comment: null, grade: null },
    responsiveness: { comment: null, grade: null },
    "feel factor": { comment: null, grade: null },
    "tech stack and code notes": { comment: null, grade: null },
  },
  report: {
    good: "",
    bad: "",
    questions: "",
  },
  generalQuestions: "",
};
/* const initialData = {
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
    "tech stack and code notes": {comment:null, grade: null}
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
    "tech stack and code notes": {comment:null, grade: null}
  },
  report: {
    good: "asd\nsfdg\nadsfg",
    bad: "zsfdg\nsdfd\ndsfz",
    questions: "dsf\nasdf",
  },
  generalQuestions: "z\nasdfz\nds\nsdzx",
  targetAudience: "Bartenders",
  extras: "react\nvite\nconfig",
}; */
// wraps a regular writable store
//TODO: external module, see link at top
function writable(key, initialValue) {
  // create an underlying store
  const store = internal(initialValue);
  const { subscribe, set } = store;
  // get the last value from localStorage
  const json = localStorage.getItem(key);

  // use the value from localStorage if it exists
  if (json) {
    set(JSON.parse(json));
  }

  // return an object with the same interface as svelte's writable()
  return {
    // capture set and write to localStorage
    set(value) {
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    // capture updates and write to localStore
    update(cb) {
      const value = cb(get(store));
      this.set(value);
    },
    // punt subscriptions to underlying store
    subscribe,
  };
}
function setupData(data) {
  const { subscribe, set, update } = writable("feh", data);
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
