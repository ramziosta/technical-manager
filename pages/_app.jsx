import React from 'react';
import {AppProps} from 'next/app';
import Layout from '../components/Layout';
import '../styles/app.scss';
import '../styles/globals.scss'
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/dev";

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </Layout>
    );
};

export default MyApp;