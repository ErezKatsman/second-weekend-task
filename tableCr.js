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

// I made the first row of the table
document.write(
  `<h1 class="title">My Workouts !</h1>
  <table class='mainTable'><tr>
  <th>Type</th>
  <th>Start</th>
  <th>End</th>
  <th>Total<br>Hours</th>
  <th>Goals<br>Given</th>
  <th>Goals<br>Archived</th>
  <th>Goals<br>Archived %</th>
  </tr>`
);

// I entered all the rows (with for(of)) in my table and painted the hours and % with if statements and named classes in td tags
for (const workout of workouts) {
  document.write(
    `<tr>
    <td>${workout.workoutType}</td>
    <td>${workout.startedAt.getHours()}:00</td>
    <td>${workout.finishedAt.getHours()}:00</td>
    <td class=${
      workout.totalTime >= 5
        ? "goodTime"
        : workout.totalTime >= 3
        ? "mediumTime"
        : "badTime"
    }>${workout.totalTime}</td>
    <td>${workout.goalsGiven}</td>
    <td>${workout.goalsArchived}</td>
    <td class=${
      workout.archivedPercent >= 80
        ? "goodArchive"
        : workout.archivedPercent >= 50
        ? "mediunArchive"
        : "smallArchive"
    }>${workout.archivedPercent}%</td>
    </tr>`
  );
}
