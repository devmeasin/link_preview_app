import { Grid } from '@mantine/core';
import Layout from '@/components/Layout';
import Card from '@/components/Shared/Card';
import FormData from '@/components/FormData';
import LinkPreviewCard from '@/components/LinkPreviewCard';

const Home = () => {

    return (
        <Layout>
            <Grid>
                <Grid.Col xs={12} sm={12} md={5} lg={5}>
                    <Card>
                        <FormData />
                    </Card>
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={7} lg={7}>
                    <Card>
                        <LinkPreviewCard />
                    </Card>
                </Grid.Col>
            </Grid>

        </Layout>
    )
}

export default Home;
