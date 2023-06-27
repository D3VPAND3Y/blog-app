import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'
import { AppLayout } from '../../components/AppLayout';

const NewPost = () => {
  return (
    <div>
        <h1>New Post</h1>

    </div>
  )
}

NewPost.getLayout = function getLayout(page,pageProps) {
    return <AppLayout {...pageProps} >{page}</AppLayout>
}


export default NewPost

export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {

        }, // will be passed to the page component as props
    }
    });



