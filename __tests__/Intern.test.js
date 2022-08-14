const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jane Doe', '0000', 'janedoe@email.com', 'School');

    expect(intern.getName()).toBe('Jane Doe');
    expect(intern.getId()).toBe('0000');
    expect(intern.getEmail()).toBe('janedoe@email.com');
});

test('return school variable', () => {
    const intern = new Intern('Jane Doe', '0000', 'janedoe@email.com', 'School');

    expect(intern.getSchool()).toBe('School');
});

test('returns "Intern"', () => {
    const intern = new Intern('Jane Doe', '0000', 'janedoe@email.com', 'School');

    expect(intern.getRole()).toBe('Intern');
});