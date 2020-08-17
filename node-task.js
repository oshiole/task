const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');


// ask user for input
r1.question(`What's the name of the author? `, (author) => {

    r1.question(`What is the title of the project? `, (title) => {

        r1.question(`What is your project's aim? `, (project) => {

            r1.question(`What version is the project? `, (version) => {

                r1.question(`What technologies are you using? `, (technologies) => {

                    const data = `Your Name is: ${author}\n
                                Title of project: ${title}\n
                                Project's aim: ${project}\n
                                Version: ${version}\n
                                Technologies: ${technologies}`;

                    fs.writeFile('readme.md', data, (err) => {
                        if (err) {
                            throw err;
                        }
                                    
                        console.log('File is created.');
                        process.exit();
                    });
                });
            });
        });
    });
});



