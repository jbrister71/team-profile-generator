const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Jane Doe', '0000', 'janedoe@email.com', 1);

    expect(manager.getName()).toBe('Jane Doe');
    expect(manager.getId()).toBe('0000');
    expect(manager.getEmail()).toBe('janedoe@email.com');
});

test('returns "Manager"', () => {
    const manager = new Manager('Jane Doe', '0000', 'janedoe@email.com', 1);

    expect(manager.getRole()).toBe('Manager');
});

test('set new office number', () => {
    const manager = new Manager('Jane Doe', '0000', 'janedoe@email.com', 1);

    manager.setOfficeNumber(2);

    expect(manager.getOfficeNumber()).toBe(2);
});