import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { Link as useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';
// mock
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

// ----------------------------------------------------------------------

Sidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func,
};

export default function Sidebar({ isOpenSidebar, onCloseSidebar }) {
    // const { pathname } = useLocation();

    const isDesktop = useResponsive('up', 'lg');

    // useEffect(() => {
    //     if (isOpenSidebar) {
    //         onCloseSidebar();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <NavSection navConfig={navConfig} />
        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}
