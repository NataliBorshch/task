# Getting Started server JSON npm run serves [http://localhost:5050]
# Getting Started applications npm start [http://localhost:3000]

Planning system


 User  want to have a system that allows to create tasks and proceed with them
 
1 Introduce a task system 
  1.1 Task can be created
  1.2 Task description can be updated
  1.3 Task can be rejected
  1.4 Task status can be set completed
  1.5 Task status should be changed with any of (TODO, READY, IN PROGRESS, COMPLETED)
  1.6 Task can be rejected if it's not started in configurable amount of time

2 Task should have the following properties:
  2.1 ID                - digit, sequential number by adding for a current number
  2.2 Name          - name of the task
  2.3 Description - informative description of 
  2.4 Date            - date/time when task has been added
  2.5 Status          - status of the current task (TODO, READY, IN PROGRESS, COMPLETED)
  2.6 Priority        - priority of the task

3 Tasks can be sorted
  3.1 by date/time
  3.2 by priority
  3.3 by status
  3.4 by ID
  3.5 Multiple sorts are not allowed

4. Task rejection can be scheduled
  4.1 Tasks can be rejected by configurable time
  4.2 Task rejection time can be set using appropriate setting 

Acceptance criteria
    • Application should be applicable with REST approaches and have documented REST API for all resources
    • Application should have simple login system for few hardcoded users
    • Application should have unit-tests (Frontend)
    • Application should be easy to up and running and in good styles

Technologies
    • Frontend
        ◦ ReactJs
        ◦ Redux
        ◦ Enzyme
        ◦ Jest
        ◦ SCSS
    • Backend
        ◦ JsonServer
    • Code management
        ◦ Git
        ◦ bitbucket
