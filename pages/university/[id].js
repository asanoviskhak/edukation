import React from 'react'
import { getBlocks, getContent, getUniversity } from '../../lib/api'

export default function UniPage({ blocks, page }) {
  console.log("PAGE:", page)
  console.log("BLOCKS:", blocks)
  const title = page.properties.Name.title[0].plain_text;
  return (
      <div>
          {title}
      </div>
  )
}


export async function getStaticPaths() {
    const content = await getContent();
    return {
      paths: content.map(el => ({
        params: {
          id: el.id
        }
      })),
      fallback: "blocking"
    };
  }
  
  export async function getStaticProps(context) {
    const { id } = context.params;
    const blocks = await getBlocks(id);
    const page = await getUniversity(id);
    // console.log(blocks, page)
    return {
      props: {
        blocks,
        page
      },
      revalidate: 3600
    };
  }