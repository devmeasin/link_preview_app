import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text, Paper, Button, Divider, Stack, Center, LoadingOverlay } from '@mantine/core';


const FormData = () => {

    const [visible, setVisible] = useState(false);

    const form = useForm({
        initialValues: {
            url: '',
        },

        validate: {
            url: (val) => (val.length <= 4 ? 'Please Provide Valid URL...' : null),
        },
    });


    return (
        <div>
            <Paper radius="md" p="xl" style={{ padding: "10px" }}>
                <LoadingOverlay visible={visible} overlayBlur={2} />
                <Center>
                    <Text size="lg" weight={700}>
                        🔗 Paste Valid URL Info 🔗
                    </Text>
                </Center>

                <Divider label="Happy Coding 🙃" labelPosition="center" my="lg" size="md" />

                <form onSubmit={form.onSubmit(() => console.log(form.values))}>
                    <Stack>

                        <TextInput
                            required
                            placeholder="Enter your Valid URL..."
                            label='Input your link'
                            value={form.values.url}
                            onChange={(event) => form.setFieldValue('url', event.currentTarget.value)}
                            error={form.errors.url && form.errors.url}
                        />

                    </Stack>

                    <Center style={{ marginTop: "15px" }}>
                        <Button type='submit' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius="xl" size="lg" compact>
                            Fetch Data..
                        </Button>
                    </Center>
                </form>
            </Paper>
        </div>
    )
}

export default FormData;
