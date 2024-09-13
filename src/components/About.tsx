'use client';
import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Briefcase,
} from 'lucide-react';

type InfoDataProps = {
    icon: JSX.Element;
    text: string;
}[];

type QualificationDataProps = {
    title: string;
    data: {
        university?: string;
        qualification?: string;
        company?: string;
        position?: string;
        years: string;
    }[];
}[];

type SkillsDataProps = {
    title: string;
    data: {
        name?: string;
        imagePath?: string;
    }[];
}[];

const infoData: InfoDataProps = [
    {
        icon: <User2 size={20} />,
        text: 'Gandha Saputra',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+6289-6266-24244',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'ganzs499@gmail.com',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Management',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Pontianak, Indonesia',
    },
];

const qualificationData: QualificationDataProps = [
    {
        title: 'education',
        data: [
            {
                university: 'Tanjungpura University',
                qualification: 'Bachelor of Management',
                years: '2017-2021',
            },
            {
                university: 'Dumbways ID',
                qualification: 'Fullstack Javascript Developer Bootcamp',
                years: 'Aug 2021 - Nov 2021',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'GoBuddy Asia Technologies Limited',
                position: 'React Native Developer',
                years: 'Nov 2021 - Dec 2022',
            },
            {
                company: 'Accelist Lentera Indonesia',
                position: 'Frontend Developer',
                years: 'Jan 2023 - Sep 2023',
            },
            {
                company: 'Virtual Spirit Technology',
                position: 'React Native Developer',
                years: 'Jan 2023 - Sep 2023',
            },
        ],
    },
];

const skillData: SkillsDataProps = [
    {
        title: 'skills',
        data: [
            {
                name: 'Front-end Development - HTML/CSS, React JS and React Native',
            },
            {
                name: 'Version Control System - Git and Github',
            },
            {
                name: 'Javascript, Typescript, Node JS',
            },
            {
                name: 'Back-end Development',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imagePath: '/about/vscode.svg',
            },
            {
                imagePath: '/about/figma.svg',
            },
            {
                imagePath: '/about/notion.svg',
            },
            {
                imagePath: '/about/wordpress.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr: QualificationDataProps, title: string) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-[860-px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg
                            containerStyles={
                                'bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            }
                            imgSrc={'/about/developer.png'}
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger
                                    className='w-[162px] xl:w-auto '
                                    value='personal'
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    className='w-[162px] xl:w-auto '
                                    value='qualifications'
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger
                                    className='w-[162px] xl:w-auto '
                                    value='skills'
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent
                                    defaultValue='personal'
                                    value='personal'
                                >
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>
                                            Unmatched Service Quality for Over
                                            10 Years
                                        </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            I specialize in crafting intuitive
                                            websites with cutting-edge
                                            technology, delivering dynamic and
                                            engaging user experiences.{' '}
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        key={`${index}`}
                                                        className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                    >
                                                        <div className='text-primary'>
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div>Language</div>
                                            <div className='border-b border-border'></div>
                                            <div>Indonesia, English</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-3 text-center xl:text-left'>
                                            My Awesome Jounery
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                'experience'
                                                            )?.title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(
                                                        qualificationData,
                                                        'experience'
                                                    )?.data?.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                position,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className='flex gap-x-8 group'
                                                                    key={`${index}`}
                                                                >
                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' />
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {
                                                                                position
                                                                            }
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'>
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                'education'
                                                            )?.title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(
                                                        qualificationData,
                                                        'education'
                                                    )?.data?.map(
                                                        (item, index) => {
                                                            const {
                                                                university,
                                                                qualification,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className='flex gap-x-8 group'
                                                                    key={`${index}`}
                                                                >
                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' />
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                                            {
                                                                                university
                                                                            }
                                                                        </div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {
                                                                                qualification
                                                                            }
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    skills info
                                </TabsContent>
                            </div>
                        </Tabs>
                        {/* tabs content */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
