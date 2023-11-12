import {useState} from "react";
import styles from './sideNavigation.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUserLarge,
    faLocationDot,
    faCircleInfo,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";


const SideNavigation = ({opacities = {}}) => {
    const [hoveredLink, setHoveredLink] = useState('');

    const handleMouseEnter = (linkName) => {
        setHoveredLink(linkName);
    };

    const handleMouseLeave = () => {
        setHoveredLink('');
    };

    const getOpacity = (section) => {
        // If the section is being hovered, use a different opacity, else use prop value
        return hoveredLink === section ? 1 : opacities[section + 'Op'];
    };

    return (
        <div className={styles.navigation}>
            <div className={styles.who} style={{opacity: getOpacity('who')}}>
                <FontAwesomeIcon icon={faUserLarge} className={styles.fa}/>
                <a href="#who" className={styles.link}
                   onMouseEnter={() => handleMouseEnter('who')}
                   onMouseLeave={handleMouseLeave}>
                    <span className={styles.w}>W</span>ho
                </a>
            </div>
            <div className={styles.what} style={{opacity: getOpacity('what')}}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.fa}/>
                <a href="#what" className={styles.link}
                   onMouseEnter={() => handleMouseEnter('what')}
                   onMouseLeave={handleMouseLeave}>
                    <span className={styles.w}>W</span>hat
                </a>
            </div>
            <div className={styles.where} style={{opacity: getOpacity('where')}}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.fa}/>
                <a href="#where" className={styles.link}
                   onMouseEnter={() => handleMouseEnter('where')}
                   onMouseLeave={handleMouseLeave}>
                    <span className={styles.w}>W</span>here
                </a>
            </div>
            <div className={styles.when} style={{opacity: getOpacity('when')}}>
                <FontAwesomeIcon icon={faCalendarDays} className={styles.fa}/>
                <a href="#when" className={styles.link}
                   onMouseEnter={() => handleMouseEnter('when')}
                   onMouseLeave={handleMouseLeave}>
                    <span className={styles.w}>W</span>hen
                </a>

            </div>
        </div>
    );
};

export default SideNavigation;