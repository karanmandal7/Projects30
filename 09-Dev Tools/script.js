const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeYellow() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hey')

    // Interpolated
    console.log('Hey I am a %s string!', 'Working')// In the place of '%s' the second var which is passed gets visibility.

    // Styled
    console.log('%c This text is cool', 'font-size:50px; background:green; text-shadow: 10px 10px 0 red')//  '%c' This can style the text written after it as  the second arguments which gets passed styles the text. It gets interpolated.

    // warning!
    console.warn('FUCK')//It will also tell where it got called in the console.


    // Error :|
    console.error('SHIT!');//It will display an earro in the console.It will also tell the stack trace.


    // Info
    console.info('Crocodiles eat 3-4 people per year');//This gives the info

    // Testing
    // To checks if its wrong or not ,if its wrong then it gts displayed else no
   const p = document.querySelector('p');
    console.assert(p.classList.contains('Shit'), 'This is wrong! You have to select the right Element');
    // Its good for testing if You test something and it's false Assertion Failed is displayed , if its true nothing appears.
    
    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);//It shows the actual element itself
    console.dir(p);//It shows the available methods and properties like the classList 

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);//Binds the info associated with the respective group
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 5}  years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    //Show how many we have counted at that time
    console.count('Karan');
    console.count('Shiv');
    console.count('Shiv');
    console.count('Karan');
    console.count('Karan');
    console.count('Karan');
    console.count('Karan');
    console.count('Shiv');
    console.count('Karan');
    console.count('Karan');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });//It shows how much time it takes to fetch the data 

        console.table(dogs);//gets the data into an table of content