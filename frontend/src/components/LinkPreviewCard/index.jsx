import React, { useState } from 'react';
import { Grid, Skeleton, Text, Title, LoadingOverlay } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './linkpreviewcard.css';

const LinkPreviewCard = ({ meta, loading, link, error }) => {

    if (error) return <h3>{error}</h3>
    console.log({ loading });

    return (
        <div className='card_wrapper_d3' style={{ height: `${loading === true ? '200px' : '40%'}`, position: 'relative' }}>
            <LoadingOverlay visible={loading} overlayBlur={2} />
            <Grid>
                <Grid.Col xs={12} sm={6}>
                    <div className="image_wrapper">
                        {/* <Skeleton visible={load} width="100%" height="100%"> */}
                        <LazyLoadImage
                            alt='image'
                            effect="blur"
                            width="100%"
                            src={meta?.image}
                        />
                        {/* </Skeleton> */}
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} sm={6}>
                    <div className="content_wrapper">
                        <a href={link} target="_blank">
                            <Title weight={700} order={3} size="17px">
                                {meta?.title}
                            </Title>
                        </a>
                        <Text weight={500}  >
                            {meta?.description}
                        </Text>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default LinkPreviewCard;
