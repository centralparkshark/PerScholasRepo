// const courseInfo = {
//     "id": number,
//     "name": string,
// }

// const assignmentGroup = {
//     "id": number,
//     "name": string,
//     // the ID of the course the assignment group belongs to
//     "course_id": number,
//     // the percentage weight of the entire assignment group
//     "group_weight": number,
//     "assignments": [AssignmentInfo],
// }
// // goes in assignment array ^
// const assignmentInfo = {
//     "id": number,
//     "name": string,
//     // the due date for the assignment
//     "due_at": Date string,
//     // the maximum points possible for the assignment
//     "points_possible": number,
// }

// const learnerSubmission = {
//     "learner_id": number,
//     "assignment_id": number,
//     "submission": {
//       "submitted_at": Date string,
//       "score": number
//     }
// } 


// Everything Below this is from Code sandbox
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
  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   //const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

// below this is my own code

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    try {
        matchIDs(CourseInfo["id"], AssignmentGroup["course_id"]);
        createStudents(LearnerSubmissions)
    
    } catch (e) {
        console.error(e);
    }
}

getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)

// checks if course id and assignment group course id match
function matchIDs(courseID, assignmentGroupID) {
    if (courseID != assignmentGroupID) {
        throw new Error("Assignment group does not match course.")
    }
}

function createStudents(submissionArray) {
    const students = [];
    submissionArray.forEach(submission => {
        let index = students.findIndex(student => student.id === submission.learner_id)
        if (index == -1) {
            students.push({id: submission.learner_id, avg: 0, [submission.assignment_id]: submission.submission.score})
        } else {  
            students[index][submission.assignment_id] = submission.submission.score;
        }
    })

    // need to check dates and assignment info here
    //             studentsInfo['student'].push({[submission.assignment_id]: submission.submission.score})                
    //             // assignment_id match to assignment to get score out of and due date
    //             // check due date against submission date
    //             // submisson.score / points possible


    console.log(students)
    // return students;
    
}


function checkDate() {
    // if turn in late
        // deducts 10 percent from score / total
    // if date hasnt happened yet
        // dont count in avg
}


// return array of objects (each learner)
// each object will have their id
//                       their avg
//                       individual assignment ids and their grade (percent)


// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }
