import Text, { TextType } from "@/components/typography/Text";
import gmailLogo from '/public/gmail.png'
import githubLogo from '/public/github-mark.png'
import linkedinLogo from '/public/linkedin.png'
import Image from 'next/image'

export default function Landing() {
    return (
        <div className="pl-40 pt-32 flex flex-col relative">
            <img className="absolute top-[-5em] left-[60em] w-[100em]" src="https://i.pinimg.com/originals/7e/73/24/7e732423abf22b9a42c62e7e7de794dd.png" />
            <div className="flex flex-col space-y-[10em]">
                <div className="flex flex-col space-y-8">
                    <Text textType={TextType.LargeHeader} text="Web Dev: Jason Lucero" />
                    <Text className="w-[50vw]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <div className="flex space-x-3">
                        <button className="bg-sky-300 shadow shadow-black border border-black px-5 py-3">
                            <Text textType={TextType.LinkBold} text={"Contact"} />
                        </button>
                        <button className="bg-white shadow shadow-black border border-black px-5 py-3">
                            <Text textType={TextType.LinkBold} text={"Read More"} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <hr className="border border-black w-[5em]" />
                    <Image src={gmailLogo} alt="Logo" width="50"/>
                    <hr className="border border-black w-[2em]" />
                    <Image src={githubLogo} alt="Logo" width="50"/>
                    <hr className="border border-black w-[2em]" />
                    <Image src={linkedinLogo} alt="Logo" width="50"/>
                    <hr className="border border-black w-[5em]" />
                </div>
            </div>
        </div>
    );
}
