"use client";

import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export function FloatingNavbar() {
	    
	const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
    }


	return (
		<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
			<div className="bg-background/80 backdrop-blur-md rounded-full shadow-lg border px-4 py-2">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#home"
								className={navigationMenuTriggerStyle()}
							>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#about-me"
								className={navigationMenuTriggerStyle()}
							>
								About Me
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#articles"
								className={navigationMenuTriggerStyle()}
							>
								Articles
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#experience"
								className={navigationMenuTriggerStyle()}
							>
								Experience
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#media"
								className={navigationMenuTriggerStyle()}
							>
								Media
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#volunteering"
								className={navigationMenuTriggerStyle()}
							>
								Volunteering
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="#contact"
								onClick={handleContactClick}
								className={navigationMenuTriggerStyle()}
							><FontAwesomeIcon icon={faEnvelope} bounce style={{
								'--fa-animation-delay': '2s',
								'--fa-animation-iteration-count': '3',
							} as any} />
								&nbsp;Contact
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}
