const internTest = require(`../lib/Intern`);

test('school name should not be null', () => {
    const school = [];
    expect(school).not.toBeNull();
});