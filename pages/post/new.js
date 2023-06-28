import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'
import { AppLayout } from '../../components/AppLayout';

const NewPost = () => {
    const handleClick = async () => {
        console.log('clicked')
        const response = await fetch('/api/generatePost', {
            method: 'POST',
        })
        const json = await response.json()
        console.log(json)

    }
  return (
    <div>
        <h1>New Post</h1>
        <button className='btn' onClick={handleClick}>Submit</button>

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



