import { useEffect, useRef, useState } from 'react';
import Web3 from "web3";
import { 
    erc20Abi, 
    guardianManagerAbi, 
    guardianManagerAddress, 
    infuraUrl, 
    myFavoriteTokens 
} from "../../../constants";

const useWeb3 = () => {
    const web3 = useRef(null);

    useEffect(() => {
        web3.current = new Web3(infuraUrl);
    });

    return web3;
}

const useAppState = (web3) => {
    const [wallet, setWallet] = useState("");
    const [guardians, setGuardians] = useState([])
    const [balance, setBalance] = useState(0)
    const [tokenBalance, setTokenBalance] = useState({})
    const [error, setError] = useState("")
    const [snackOpen, setSnackOpen] = useState(false);

    const handleError = (f) => (...args) => {
        try {
            f(...args)
          } catch(e) {
            setSnackOpen(true)
            setWallet("")
            e.message.includes('invalid address') ? 
                setError("You gave a wrong address !") : 
                setError("An error occured !")
          }
    }

    const getGuardians = handleError(
        (w) => {
            let contract = new web3.current.eth.Contract(guardianManagerAbi, guardianManagerAddress);
            contract.methods.getGuardians(w).call().then(setGuardians);
        }
    )
      
    const getBalance = handleError(
        (w) => {
            web3.current.eth.getBalance(w).then((r) => {
            setBalance(
                parseFloat(web3.current.utils.fromWei(r, 'ether'), 10).toFixed(4)
                )
            })
        }
    )
      
    const getTokenBalance = handleError(
        (name, address, wallet) => {
            let token_contract = new web3.current.eth.Contract(erc20Abi, address);
            Promise.all(
            [
                token_contract.methods.balanceOf(wallet).call(),
                token_contract.methods.decimals().call()
            ]
            ).then((r) => {
                if(r[0] !== '0') {
                    setTokenBalance(
                        previousTokenBalances => (
                            {
                                ...previousTokenBalances, 
                                [name]: (parseInt(r[0], 10)/10**parseInt(r[1], 10)).toFixed(2)
                            }
                        )
                    )
                }
            })
        }
    )
    
    const getInfo = (w) => {
        getGuardians(w);
        getBalance(w);
        for(let {name, address} of myFavoriteTokens) {
            getTokenBalance(name, address, w);
        }
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError("");
        setSnackOpen(false);
    };
    
    const handleWalletChange = (e) => {
        setWallet(e);
        setTokenBalance({})
        setBalance(0)
        setGuardians([])
    };
    
    const handleWalletInfo = (e) => {
        if(e.endsWith('.argent.xyz')) {
            web3.current.eth.ens.getAddress(e).then(function (address) {
                getInfo(address)
            });
        } else {
            getInfo(e)
        }
    }
    
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            handleWalletInfo(wallet)
        }
    }
    
    return {
        wallet,
        guardians,
        balance,
        tokenBalance,
        error,
        snackOpen,
        handleWalletChange,
        handleWalletInfo,
        handleClose,
        handleKeyDown
    }
}

export { 
    useAppState,
    useWeb3
};
