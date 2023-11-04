import { useEffect, useState } from "react";
import {PeraWalletConnect} from "@perawallet/connect"

export function useSetPeraWalletInstance() {
    const [peraWalletInstance, setPeraWalletInstance] = useState<PeraWalletConnect>()
    useEffect(() => {
        const peraWallet = new PeraWalletConnect();
        setPeraWalletInstance(peraWallet)
    }, []);

    return {peraWalletInstance}
}