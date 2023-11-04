import { useRouter } from "next/router";

const Header: React.FC = () =>{

    const router = useRouter()
    const path = router.pathname as string
    console.log(path)

    const getHomeText: Record<string, string> = {
        "/": "Event Drop",
        "/authentication": "Authentication",
        "/profile": "User Profile",
        "/drop": "Your Drops",
        "/drop/create": "Create Your Drop",
    }

    return  (
        <div className="w-full h-headerHeight border-b border-slate-200 z-50 fixed top-0 left-0 bg-white">
            <div className="w-full h-full flex justify-between">
                <div className="flex px-8 items-center">
                    <img className="w-8 h-8" src="/event_drop_icon.svg" alt="event-drop-icon" />
                    <div id="divider" className="w-[1.5px] h-[15px] bg-[darkGreen] mx-3"></div>
                    <h3 className="text-[darkGreen] font-bold text-lg">{getHomeText[path]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;