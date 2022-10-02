import React from 'react';
import { Text, Paper } from '@mantine/core';

const Card = ({ children }) => {
    return (
        <div>
            <Paper shadow="xl" radius="lg" p="lg" withBorder>
                {
                    children
                }
            </Paper>
        </div>
    )
}

export default Card;
