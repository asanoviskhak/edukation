
const databaseId = '3fa897944e04465fb07816b794428d54';
const notion_api = 'secret_Fm2IDh3zQXNfd1cTAQBW24VXpIuIcfEnqtF5S7TSH9I';
async function fetcher(url, method = "GET") {
    return fetch(url, {
      method,
      // mode: "no-cors",
      headers: {
       Authorization: `Bearer ${notion_api}`,
      //  "Notion-Version": '2021-05-13',
      //  "Content-Type": "application/json"
      }
    }).catch(err=>{console.log(err)});
  }
  
  export async function getContent() {
    const res = await fetcher(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      "POST"
    );
    const database = res? await res.json() : [];
    // console.warn(database?database:"Not fetched")
    return database.results;
  }
  
  export async function getBlocks(uniId) {
    const res = await fetcher(
      `https://api.notion.com/v1/blocks/${uniId}/children`
    );
    const blocks = res? await res.json():[];
    return blocks.results;
  }
  
  export async function getUniversity(uniId) {
    const res = await fetcher(`https://api.notion.com/v1/pages/${uniId}`);
    const uni = await res.json();
    return uni;
  }