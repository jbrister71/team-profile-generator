const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Jane Doe', '0000', 'janedoe@email.com');

    expect(manager.getName()).toBe('Jane Doe');
    expect(manager.getId()).toBe('0000');
    expect(manager.getEmail()).toBe('janedoe@email.com');
});

test('returns "Manager"', () => {
    const manager = new Manager('Jane Doe', '0000', 'janedoe@email.com');

    expect(manager.getRole()).toBe('Manager');
})