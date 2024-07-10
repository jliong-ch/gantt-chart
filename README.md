# GanttChart

A simple non-relational Gantt Chart with simple interactions for task selection(s)

## Run Chart

1. Install angular/cli 
2. Clone the repo
3. Run `npm i`
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project details

- This is completed with KendoUI for Angular's components
- Due to requirements, SchedulerComponent is used instead of the original GanttComponent
- No new component is created, but if desired for reusability, you can simply make a new container component and move the template, style and script of components into the new files

## Data

Refer to path `./src/app/random-data.ts`

Add more data as deem if necessary.

First day of date displayed is the date of first data, so adjust accordingly.

If wish to increase range of date, simply change the value of `TimelineConfig.numberOfDays` in `/src/app/app.component.ts`.

## Interactions

1. Click on individual cell to highlight and select the cell
2. Click on group header (`1-1`, `1-2` ...) to select entire row
3. Refer to the box at the top of the page to see id of the boxes selected

## Things not done

Detailed styling is not done as it was not that necessary and building whole skeleton of project styles are excessively time-consuming

## Project metadata

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
