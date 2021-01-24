//I need to build a table with my workouts array and put all the values into. I need to calculate the time that took each workout and the percents of my archived goals. this 2 values i need to paint with logical colors. and all that without coding un html physically.

//I made workouts array of objects.
const workouts = [
  {
    startedAt: new Date("2021-01-07:10:00"),

    finishedAt: new Date("2021-01-07:13:00"),

    goalsGiven: 5,

    goalsArchived: 3,

    workoutType: "GYM",
  },
  {
    startedAt: new Date("2021-01-08:16:00"),

    finishedAt: new Date("2021-01-08:17:00"),

    goalsGiven: 7,

    goalsArchived: 2,

    workoutType: "Fartlek Run",
  },
  {
    startedAt: new Date("2021-01-10:18:00"),

    finishedAt: new Date("2021-01-10:20:00"),

    goalsGiven: 6,

    goalsArchived: 5,

    workoutType: "20KM RUN",
  },
  {
    startedAt: new Date("2021-01-11:08:00"),

    finishedAt: new Date("2021-01-11:11:00"),

    goalsGiven: 8,

    goalsArchived: 6,

    workoutType: "3 KM RUN + StreetWorkout",
  },
  {
    startedAt: new Date("2021-01-13:13:00"),

    finishedAt: new Date("2021-01-13:19:00"),

    goalsGiven: 5,

    goalsArchived: 4,

    workoutType: "GYM",
  },
  {
    startedAt: new Date("2021-01-14:07:00"),

    finishedAt: new Date("2021-01-14:12:00"),

    goalsGiven: 10,

    goalsArchived: 4,

    workoutType: "Biking",
  },
  {
    startedAt: new Date("2021-01-15:13:00"),

    finishedAt: new Date("2021-01-15:15:00"),

    goalsGiven: 2,

    goalsArchived: 2,

    workoutType: "6KM Walk",
  },
  {
    startedAt: new Date("2021-01-16:18:00"),

    finishedAt: new Date("2021-01-16:20:00"),

    goalsGiven: 5,

    goalsArchived: 1,

    workoutType: "GYM",
  },
  {
    startedAt: new Date("2021-01-18:11:00"),

    finishedAt: new Date("2021-01-18:14:00"),

    goalsGiven: 7,

    goalsArchived: 4,

    workoutType: "16KM RUN",
  },
  {
    startedAt: new Date("2021-01-20:15:00"),

    finishedAt: new Date("2021-01-20:19:00"),

    goalsGiven: 13,

    goalsArchived: 10,

    workoutType: "StreetWorkout",
  },
];

// I calculate the hours and goals archived in %
for (const workout of workouts) {
  workout.totalTime =
    workout.finishedAt.getHours() - workout.startedAt.getHours();
  workout.archivedPercent = Math.floor(
    100 * (workout.goalsArchived / workout.goalsGiven)
  );
}

const title = document.createElement("h1");
title.innerText = "My Workouts !";
title.className = "title";
document.body.append(title);
const table = document.createElement("table");
document.body.append(table);
const thead = table.createTHead();
let tr = thead.insertRow();

// I made the first row of the table
const headers = [
  "Type",
  "Start",
  "End",
  "Total Hours",
  "Given",
  "Archived",
  "Archived %",
];

for (const header of headers) {
  const th = document.createElement("th");
  th.innerText = header;
  tr.append(th);
}

// I entered all the rows (with for(of)) in my table and painted the hours and % with if statements and named classes in td tags
const tbody = table.createTBody();

for (const workout of workouts) {
  let tr = tbody.insertRow();

  let tdType = document.createElement("td");
  tdType.innerText = workout.workoutType;
  tr.append(tdType);

  let tdStart = document.createElement("td");
  tdStart.innerText = workout.startedAt.getHours() + ":00";
  tr.append(tdStart);

  let tdEnd = document.createElement("td");
  tdEnd.innerText = workout.finishedAt.getHours() + ":00";
  tr.append(tdEnd);

  let tdTotal = document.createElement("td");
  tdTotal.innerText = workout.totalTime + ":00";
  tr.append(tdTotal);
  tdTotal.className =
    workout.totalTime >= 5
      ? "goodTime"
      : workout.totalTime >= 3
      ? "mediumTime"
      : "badTime";

  let tdGiven = document.createElement("td");
  tdGiven.innerText = workout.goalsGiven;
  tr.append(tdGiven);

  let tdArchived = document.createElement("td");
  tdArchived.innerText = workout.goalsArchived;
  tr.append(tdArchived);

  let tdPer = document.createElement("td");
  tdPer.innerText = workout.archivedPercent + "%";
  tr.append(tdPer);
  tdPer.className =
    workout.archivedPercent >= 80
      ? "goodArchive"
      : workout.archivedPercent >= 50
      ? "mediumArchive"
      : "smallArchive";
}
