import Link from "next/link";
import { FaGithub , FaLinkedin } from "react-icons/fa";


const socials = [
    {
        icon:<FaGithub/>,
        path: "https://github.com/Muhammad-Ammad3/",
    },
    {
        icon:<FaLinkedin/>,
        path: "https://www.linkedin.com/in/muhammad-ammad-853b26341/",
    },
]

const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item,index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;