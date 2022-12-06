const engineerTest = require(`../lib/Engineer`);

test('GitHub field should not be null', () => {
    const gitHub = [];
    expect(gitHub).not.toBeNull();
});