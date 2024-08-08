// https://perscholas.instructure.com/courses/2204/assignments/414579?wrap=1

// From Code Sandbox

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
            }
        ]
};

  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

// below this is my own code

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    try {
        matchIDs(CourseInfo["id"], AssignmentGroup["course_id"]);
        const students = createStudents(LearnerSubmissions, AssignmentGroup)
        calcAvg(students)
        console.log(students)
        // return students;
    } catch (e) {
        console.error(e);
    }
}

// checks if course id and assignment group course id match
function matchIDs(courseID, assignmentGroupID) {
    if (courseID != assignmentGroupID) {
        throw new Error("Assignment group does not match course.")
    }
}

function createStudents(submissionArray, assignments) {
    const students = [];

    submissionArray.forEach(submission => {
        // only runs if there is a submission
        if (Object.keys(submission.submission).length != 0) {
            let index = students.findIndex(student => student.id === submission.learner_id) 
            let studentScores = checkIfAssignmentValid(submission.assignment_id, submission.submission, assignments)
            if (studentScores) {
                if (index == -1) {
                    students.push({id: submission.learner_id, avg: [studentScores[0],studentScores[1]], [submission.assignment_id]: studentScores[0]/studentScores[1]})
                } else {  
                    students[index][submission.assignment_id] = studentScores[0]/studentScores[1];
                    students[index].avg[0] += studentScores[0] 
                    students[index].avg[1] += studentScores[1] 
                }
            }
        }
    })
    return students;
    
}

function checkIfAssignmentValid(assignmentID, submission, assignments) {
    // need to check dates and assignment info here 
    let studentScores = []
    for (let i = 0; i < assignments.assignments.length; i++) {
        if (assignments.assignments[i].id == assignmentID) {
            let dueDate = assignments.assignments[i].due_at;
            let pointsPossible = assignments.assignments[i].points_possible;
            if (!pointsPossible) {
                throw new Error(`Assignment ${assignmentID} must have a possible score`)
            }
            const today = new Date().toISOString().split('T')[0];
            // check if late
            if (dueDate < submission.submitted_at) {
                return [(submission.score - (.1 * pointsPossible)), pointsPossible];
            } 
            // not due yet
            else if (dueDate > today) {
                continue;
            } else {
                return [submission.score, pointsPossible]
            }
        }
    }
    return studentScores
    
}

function calcAvg(students) {
    students.forEach(student => {
        student.avg = student.avg[0]/student.avg[1]
    });
}


getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)

// TO-DO:
// - retrieval, manipulation, removal of items in array
// - add readMe

