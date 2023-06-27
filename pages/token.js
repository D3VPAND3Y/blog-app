import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import NewPost from './post/new'
import { AppLayout } from '../components/AppLayout'

const TokenTopUp = () => {
  return (
    <div>
        <h1>Token top up page</h1>

    </div>
  )
}

export default TokenTopUp

TokenTopUp.getLayout = function getLayout(page,pageProps) {
    return <AppLayout {...pageProps} >{page}</AppLayout>
}



export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {

        }, // will be passed to the page component as props
    }
    });

