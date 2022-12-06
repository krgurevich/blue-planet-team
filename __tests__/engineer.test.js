const engineerTest = require(`../lib/Engineer`);

test('should not be null', () => {
    const gitHub = [];
    expect(gitHub).not.toBeNull();
});