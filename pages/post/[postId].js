import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Post = () => {
  return (
    <div>
        <h1>Post page</h1>

    </div>
  )
}

export default Post


export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {

        }, // will be passed to the page component as props
    }
    });

