const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jane Doe', '0000', 'janedoe@email.com');

    expect(employee.getName()).toBe('Jane Doe');
    expect(employee.getId()).toBe('0000');
    expect(employee.getEmail()).toBe('janedoe@email.com')
});

test('returns "Employee"', () => {
    const employee = new Employee('Jane Doe', '0000', 'janedoe@email.com');

    expect(employee.getRole()).toBe('Employee');
});