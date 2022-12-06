const internTest = require(`../lib/Intern`);

test('should not be null', () => {
    const school = [];
    expect(school).not.toBeNull();
});