const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Jane Doe', '0000', 'janedoe@email.com', 'jDoe');

    expect(engineer.getName()).toBe('Jane Doe');
    expect(engineer.getId()).toBe('0000');
    expect(engineer.getEmail()).toBe('janedoe@email.com');
});

test('get Engineer github', () => {
    const engineer = new Engineer('Jane Doe', '0000', 'janedoe@email.com', 'jDoe');

    expect(engineer.getGithub()).toBe('jDoe');
});

test('returns Engineer', () => {
    const engineer = new Engineer('Jane Doe', '0000', 'janedoe@email.com', 'jDoe');

    expect(engineer.getRole()).toBe('Engineer');
});