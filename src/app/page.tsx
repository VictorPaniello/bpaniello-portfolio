"use client"

import ArticlesPage from './articles/page';
import AboutMePage from './about-me/page';
import MediaPage from './media/page';
import VolunteeringPage from './volunteering/page';
import ExperiencePage from './experience/page';

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Main Content */}
            <main id="home" className="max-w-7xl mx-auto px-2">
                {/* Hero Section */}
                <section className="flex items-center pt-32 pb-100">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold mb-4">Hola, hey, hej!<br />I'm Blanca!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            I am an environmental epidemiologist and biomedical scientist working on health inequalities related to climate change and adaptation, including risk perception and gender differences in risk and adaptive capacity.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <img 
                            src="/photo/Picture_BPC.jpeg" 
                            alt="Blanca Paniello-Castillo"
                            className="max-w-80 rounded-full shadow-lg object-cover"
                        />
                    </div>
                </section>
                {/* About Me Section */}
                <section id="about-me" className="flex items-center pt-32 pb-100 justify-end">
                    <AboutMePage />
                </section>
                {/* Articles Section */}
                <section id ="articles" className="flex items-center pt-32 pb-100">
                    <ArticlesPage />
                </section>
                <section id ="media" className="flex items-center pt-32 pb-100">
                    <MediaPage />
                </section>
                <section id ="volunteering" className="flex items-center pt-32 pb-100 justify-end">
                    <VolunteeringPage />
                </section>
            </main>
        </div>
    );
}