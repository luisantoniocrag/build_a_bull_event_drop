import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSetPeraWalletInstance } from "./useSetPeraWalletInstance";
import {PeraWalletConnect} from "@perawallet/connect"
import StatusBtn from "./components/StatusBtn";

const Authentication: NextPage = () => {
    const [errorMessage, setErrorMessage] = useState("")

    const { peraWalletInstance } = useSetPeraWalletInstance()

    const RequestPeraWalletLogIn = () => {
        peraWalletInstance?.connect()
            .then((newAccounts: string[]) => {
                console.log(newAccounts)
                // Setup the disconnect event listener
                peraWalletInstance.connector?.on("disconnect", handleDisconnectWalletClick);
                
                handleConnectedWallet(newAccounts[0]);
            }).catch((e: { message: any; }) => setErrorMessage(e.message||"Error. Try again.")) 
    }


    const onSignIn = () => {
        setErrorMessage("")
        RequestPeraWalletLogIn()
    }
    
    const handleConnectedWallet = (account: string) => {
       const jwt = getSecciontJWT(account);
       setUserSession(jwt)
    }

    const handleDisconnectWalletClick = () => {
        peraWalletInstance?.disconnect();
    }

    const getSecciontJWT = (address: string): string => {
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }

    const setUserSession = (token:string) => {
        window?.localStorage.setItem("event_drop_testnet_user", token)
    }

    return (
        <div className="w-full h-screen pt-headerHeight -mt-headerHeight relative">
            <StatusBtn />
            <div className="w-full h-full grid grid-cols-1 grid-rows-2 relative top-headerHeight left-0">
                <div id="d1" className=""></div>
                <div id="d2" className="bg-lightGreen border-t border-darkGreen "></div>

                <div id="box-wrapper" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightGreen w-[530px] h-[530px] rounded-lg border border-[#D5F3DF] drop-shadow">
                    <div className="w-full h-full p-8">
                        <div id="box-icon" className="w-full flex justify-center mb-8">
                            <img className="w-36" src="./pera_secure_icon.svg" alt="Pera Wallet Secure Icon"/>
                        </div>
                        <h3 className="text-darkGreen font-bold text-4xl mb-4">Authenticate</h3>
                        <p className="text-darkGreen font-light text-xl">Open your PeraWallet and click in Log In to authenticate.</p>
                        <div id="btn-wrapper" className="w-full flex justify-center mt-8">
                            <button onClick={onSignIn} className="bg-darkGreen text-lightGreen font-light rounded-full py-2 px-16 hover:opacity-90 active:scale-105">Sign in</button>
                        </div>
                       {
                        errorMessage.length > 0 && (
                            <div id="pera-wallet-error-message" className="w-full mt-8">
                                <span className="text-redError font-light">{errorMessage}.</span>
                             </div>
                        )
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;