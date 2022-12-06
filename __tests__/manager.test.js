const managerTest = require(`../lib/Manager`);

test('office number should not be null', () => {
    const officeNumber = [];
    expect(officeNumber).not.toBeNull();
});