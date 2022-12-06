const managerTest = require(`../lib/Manager`);

test('should not be null', () => {
    const officeNumber = [];
    expect(officeNumber).not.toBeNull();
});