import React from 'react';
import { AboutUs } from '../AboutUs';
import { RecentWork } from '../RecentWork';
import { GetInTouch } from '../GetInTouch';
import { TechStack } from '../TechStack';
import { ContactUsFile } from '../ContactUsFile';

export const AllPages = ({ isDarkMode }) => {
    return (
        <>
            <AboutUs isDarkMode={isDarkMode} />
            <RecentWork isDarkMode={isDarkMode} />
            <TechStack isDarkMode={isDarkMode} />
            <GetInTouch isDarkMode={isDarkMode} />
            <ContactUsFile isDarkMode={isDarkMode} />
        </>
    );
};
