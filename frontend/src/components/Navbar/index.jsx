import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Title, Center, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import logo from '/public/vite.svg'
import { IconBrandGithub } from '@tabler/icons';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        padding: '10px',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },


}));



export const Navbar = () => {

    const [opened, { toggle, close }] = useDisclosure(false);
    const [modalOpened, setModalOpened] = useState(false);
    const { classes, cx } = useStyles();

    return (
        <>
            <Header height={HEADER_HEIGHT} mb={20} className={classes.root}>
                <Container size="90%" className={classes.header}>
                    <div style={{ width: "200px", display: "flex", alignItems: "center" }}>
                        <Link to='/'>
                            <img src={logo} />
                        </Link>
                        <Title order={4} style={{ width: "100px", marginLeft: "4px" }}> Vite JS</Title>
                    </div>
                    <Group className={classes.links}>
                        <Link to="/">
                            <Avatar color="blue" radius="xl">
                                <IconBrandGithub size={24} />
                            </Avatar>
                        </Link>
                    </Group>

                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                    <Transition transition="pop-top-right" duration={200} mounted={opened}>
                        {(styles) => (
                            <Paper className={classes.dropdown} withBorder style={styles}>
                                <Center>
                                    <Link to="/">
                                        <Avatar color="blue" radius="xl">
                                            <IconBrandGithub size={24} />
                                        </Avatar>
                                    </Link>
                                </Center>
                            </Paper>
                        )}
                    </Transition>
                </Container>
            </Header>

        </>
    );
}