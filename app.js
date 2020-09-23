const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { run } = require("jest");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const devTeam = [];

function createDevTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberType",
        message: "What role would you like to add to the team?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No additional team members"
        ]
      }
    ]).then(answer => {
      switch(answer.memberType) {
        case "Manager":
            createManager();
            break;
        case "Engineer":
            createEngineer();
            break;
        case "Intern":
            createIntern();
            break;
        default:
            runApp();
      }
    });

}

// createDevTeam();

function createManager() {
inquirer.prompt(
    [
        {
        type: "input",
        message: "Please give manager name",
        name: "managerName"
        
        
        },
        {
        type: "input",
        message: "Please give manager id",
        name: "managerId"
            
            
        },
        {
        type: "input",
        message: "Please give manager email",
        name: "managerEmail"
                
                
        },
        {
         type: "input",
        message: "Please give manager office number",
        name: "managerNumber"
                    
                    
        }
    ]
).then(function(answers){
    // console.log(answers)
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber)
    // console.log(manager)
    devTeam.push(manager)
    createDevTeam();
    // const managerHtml = renderManager(manager);
    // console.log(managerHtml);
    });
}

// function for gathering input for engineer role

function createEngineer(){
    inquirer.prompt(
        [
            {
            type: "input",
            message: "Please give engineer's name",
            name: "engineerName"
            
            
            },
            {
            type: "input",
            message: "Please give engineer's id",
            name: "engineerId"
                
                
            },
            {
            type: "input",
            message: "Please give engineer's email",
            name: "engineerEmail"
                    
                    
            },
            {
             type: "input",
            message: "Please give engineer's Github username",
            name: "github"
                        
                        
            }
        ]
    ).then(function(answers){
        // console.log(answers)
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
        // console.log(engineer)
        devTeam.push(engineer)
        createDevTeam();
        
        });
    }
    
    // function to gather information for intern role

    function createIntern(){
        inquirer.prompt(
            [
                {
                type: "input",
                message: "Please give intern's name",
                name: "internName"
                
                
                },
                {
                type: "input",
                message: "Please give intern's id",
                name: "internId"
                    
                    
                },
                {
                type: "input",
                message: "Please give intern's email",
                name: "internEmail"
                        
                        
                },
                {
                 type: "input",
                message: "Please give intern's school",
                name: "internSchool"
                            
                            
                }
            ]
        ).then(function(answers){
            // console.log(answers)
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            // console.log(intern)
            devTeam.push(intern)
            createDevTeam();
           
            });
        }
        
        // function to run the app and write roles to html

        function runApp() {
            console.log(devTeam);
    
            fs.writeFileSync(outputPath, render (devTeam), "utf-8");
           
        }
        
        createDevTeam();
        

        

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
