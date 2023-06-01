import React, { useState } from 'react';
import { createStyles, Header, Menu, Group, Burger, Container, Transition, Paper } from '@mantine/core';
import Image from 'next/image'
import Link from 'next/link'


const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: '#5C2E2B',
        borderBottom: 0,
        height: 70,
        width: "100%",
        zIndex: 100,
        position: 'sticky',
        top: 0,
    },

    dropdown: {
        position: 'absolute',
        top: 65,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        background: "#5C2E2B",
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    inner: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        [theme.fn.largerThan('sm')]: {
            justifyContent: 'right'
        },
        justifyContent: 'space-between'
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

    link: {
        display: 'block',
        lineHeight: 2,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: theme.white,
        fontSize: theme.fontSizes.md,
        fontWeight: 600,
    },

    linkLabel: {
        marginRight: 5,
    },
}))

interface Props {
    links: { link: string; label: string; links: { link: string; label: string }[] }[]
}

const links2 = [
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
    { label: "Wedding Photos", link: "/weddingphotos" },
    { label: "Wedding Consults", link: "/https://calendly.com/sovereigntyfarms/wedding-venue-meeting", target: "blank" }
]

export function Nav() {
    const [opened, toggleOpened] = useState(false);
    const { classes } = useStyles();

    const items = links2.map((link) => {

        <Link key={link.link} href={link.link}>
            <Menu.Item><a href={link.link}>{link.label}</a></Menu.Item>
        </Link>



        return (
            <Link key={link.label} href={link.link!}>
                <a
                    target={link.label === 'Wedding Consults' ? "_blank" : ""}
                    className={classes.link}
                >
                    {link.label}
                </a>
            </Link>
        )
    })

    return (
        <>
            <Header height={70} className={`${classes.header} cinzel`}>
                <Container>
                    <div className={classes.inner}>
                        <h1 className='text-white nanum-brush text-3xl md:hidden'>
                            <Link href="/">
                                <a>
                                    Sov Farms
                                </a>
                            </Link>
                        </h1>
                        <Group spacing={5} className={`${classes.links} cinzel`}>
                            {items}
                        </Group>
                        <Burger
                            opened={opened}
                            onClick={() => toggleOpened(!opened)}
                            className={classes.burger}
                            size="sm"
                            color="#fff"
                        />
                        <Transition transition="pop-top-right" duration={200} mounted={opened}>
                            {(styles) => (
                                <Paper className={classes.dropdown} style={styles}>
                                    {items}
                                </Paper>
                            )}
                        </Transition>
                    </div>
                </Container>
                <div className='hidden md:block'>
                    <Link href="/">
                        <a>
                            <Image
                                className='opacity-80'
                                src="/barn.jpeg"
                                alt="Soveringty Farms Navigation Logo"
                                width={191}
                                height={121}
                            />
                        </a>
                    </Link>
                </div>
            </Header>
        </>
    )
}
function useBooleanToggle(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

