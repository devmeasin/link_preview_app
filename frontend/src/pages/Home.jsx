import React, { useState } from 'react'
import { Grid } from '@mantine/core';
import Layout from '@/components/Layout';
import Card from '@/components/Shared/Card';
import FormData from '@/components/FormData';
import LinkPreviewCard from '@/components/LinkPreviewCard';
import { fetchMeta } from '@/api';


const Home = () => {

    const [link, setLink] = useState(null);

    const [meta, setMeta] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const findMeta = async (link) => {
        if (!link) {
            return;
        }

        try {
            setLink(link);
            setError(() => null);
            setLoading(() => true);
            setMeta(() => null);
            const response = await fetchMeta(link);
            setMeta(() => response.data);
        } catch (err) {
            setError(() => 'Meta is not available, Try again later 🤓');
        } finally {
            setLoading(() => false);
        }
    };


    return (
        <Layout>
            <Grid>
                <Grid.Col xs={12} sm={12} md={5} lg={5}>
                    <Card>
                        <FormData findMeta={findMeta} />
                    </Card>
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={7} lg={7}>
                    <Card>
                        <LinkPreviewCard meta={meta} loading={loading} link={link} error={error} />
                    </Card>
                </Grid.Col>
            </Grid>

        </Layout>
    )
}

export default Home;
