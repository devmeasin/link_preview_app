import React, { useState } from 'react';
import { Grid, Skeleton, Text, Title } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './linkpreviewcard.css';


const LinkPreviewCard = () => {

    const [load, setLoad] = useState(false);

    return (
        <div className='card_wrapper_d3'>
            <Grid>
                <Grid.Col xs={12} sm={6}>
                    <div className="image_wrapper">
                        {/* <Skeleton visible={load} width="100%" height="100%"> */}
                        <LazyLoadImage
                            afterLoad={() => setLoad(false)}
                            alt='image'
                            effect="blur"
                            width="100%"
                            src={`https://i.ytimg.com/vi/RqwnR2osQqc/maxresdefault.jpg`}
                        />
                        {/* </Skeleton> */}
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} sm={6}>
                    <div className="content_wrapper">
                        <Link to="/post">
                            <Title weight={700} order={3} size="17px">
                                XMPP - Extensible Messaging and Presence Protocol....
                            </Title>
                        </Link>
                        <Text weight={500}  >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente quasi, deserunt ab saepe molestias officiis provident, maiores repudiandae modi itaque laborum rerum officia minus beatae non autem animi quisquam?
                        </Text>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default LinkPreviewCard;
