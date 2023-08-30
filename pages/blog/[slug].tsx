import React from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/common/Navbar'
import { HeaderTopSimplePost } from '@/components/common/HeaderTopSimplePost';

import '../../src/app/globals.css';
import '../../src/app/simple-post.css';
import '../../src/app/footer.css';

import { MetaDataSimplePost } from '@/components/common/MetaDataSimplePost';
import { ContentSimplePost } from '@/components/common/ContentSimplePost';

const SimplePostPage = () => {
    return (
        <>
            <Head>
                <title>Tecnologias que utiliza Netflix en su plataforma | Jose Galdamez</title>
            </Head>
            <Navbar />
            <main>
                <div className='simple-post'>
                    <HeaderTopSimplePost title='Tecnologias que utiliza Netflix en su plataforma' />
                    <MetaDataSimplePost date='29/08/2023' author='Jose Galdamez' category='Tecnologias' />
                    <figure>
                        <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/netflix-gaming-2825567.jpg" alt="Tecnologias que utiliza Netflix en su plataforma" />
                    </figure>
                    <ContentSimplePost />
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default SimplePostPage;
