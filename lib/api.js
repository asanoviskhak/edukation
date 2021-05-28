
const databaseId = '3fa897944e04465fb07816b794428d54';
const notion_api = 'secret_Fm2IDh3zQXNfd1cTAQBW24VXpIuIcfEnqtF5S7TSH9I';
async function fetcher(url, method = "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${notion_api}`
      }
    }).catch(err=>{console.log(err)});
  }
  
  export async function getContent() {
    const res = await fetcher(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      "POST"
    );
    const database = await res.json();
    return database.results;
  }
  
  export async function getBlocks(blogId) {
    const res = await fetcher(
      `https://api.notion.com/v1/blocks/${blogId}/children`
    );
    const blocks = await res.json();
    return blocks.results;
  }
  
  export async function getBlog(blogId) {
    const res = await fetcher(`https://api.notion.com/v1/pages/${blogId}`);
    const blog = await res.json();
    return blog;
  }