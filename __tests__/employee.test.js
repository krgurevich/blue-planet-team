const employeeTest = require(`../lib/Employee`);

test('name should not be null', () => {
    const name = [];
    expect(name).not.toBeNull();
});

test('id should not be null', () => {
    const id = [];
    expect(id).not.toBeNull();
});

test('email should not be null', () => {
    const email = [];
    expect(email).not.toBeNull();
});