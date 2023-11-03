import { Octokit } from "octokit";
export { searchUser }


const octokit = new Octokit({
    auth: process.env.API_TOKEN,
});


const searchUser = async (user) => {
    let userData = null;
    if (user) {
        userData = await octokit.rest.users.getByUsername({
            username: user,
        }).then(({ data }) => data);
    }
    return userData;
}
